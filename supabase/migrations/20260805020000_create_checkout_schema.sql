-- Products catalog (single digital product for now)
CREATE TABLE public.products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  description text,
  price_cents integer NOT NULL CHECK (price_cents > 0),
  compare_at_cents integer CHECK (compare_at_cents IS NULL OR compare_at_cents >= price_cents),
  currency text NOT NULL DEFAULT 'BRL',
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TYPE public.order_status AS ENUM (
  'pending_payment',
  'awaiting_payment',
  'paid',
  'fulfilled',
  'cancelled',
  'refunded'
);

CREATE TYPE public.payment_method AS ENUM ('pix', 'card', 'boleto');

CREATE TABLE public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  public_id text NOT NULL UNIQUE,
  product_id uuid NOT NULL REFERENCES public.products (id),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_whatsapp text NOT NULL,
  payment_method public.payment_method NOT NULL,
  status public.order_status NOT NULL DEFAULT 'pending_payment',
  amount_cents integer NOT NULL CHECK (amount_cents > 0),
  currency text NOT NULL DEFAULT 'BRL',
  payment_provider text,
  payment_provider_ref text,
  paid_at timestamptz,
  fulfilled_at timestamptz,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX orders_customer_email_idx ON public.orders (customer_email);
CREATE INDEX orders_status_created_idx ON public.orders (status, created_at DESC);
CREATE INDEX orders_payment_provider_ref_idx
  ON public.orders (payment_provider_ref)
  WHERE payment_provider_ref IS NOT NULL;

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER orders_set_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE FUNCTION public.generate_order_public_id()
RETURNS text
LANGUAGE plpgsql
AS $$
DECLARE
  alphabet constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  result text := '';
  i integer;
BEGIN
  FOR i IN 1..8 LOOP
    result := result || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
  END LOOP;
  RETURN result;
END;
$$;

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active products"
  ON public.products
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

REVOKE ALL ON TABLE public.orders FROM anon, authenticated;
GRANT SELECT ON TABLE public.products TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.create_checkout_order(
  p_product_slug text,
  p_customer_name text,
  p_customer_email text,
  p_customer_whatsapp text,
  p_payment_method public.payment_method
)
RETURNS TABLE (
  order_id uuid,
  public_id text,
  amount_cents integer,
  currency text,
  status public.order_status,
  payment_method public.payment_method,
  product_name text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_product public.products%ROWTYPE;
  v_order public.orders%ROWTYPE;
  v_public_id text;
  v_name text := trim(p_customer_name);
  v_email text := lower(trim(p_customer_email));
  v_whatsapp text := trim(p_customer_whatsapp);
  v_attempts integer := 0;
BEGIN
  IF v_name IS NULL OR length(v_name) < 2 OR length(v_name) > 120 THEN
    RAISE EXCEPTION 'invalid_customer_name';
  END IF;

  IF v_email IS NULL OR v_email !~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' OR length(v_email) > 254 THEN
    RAISE EXCEPTION 'invalid_customer_email';
  END IF;

  IF v_whatsapp IS NULL OR length(v_whatsapp) < 8 OR length(v_whatsapp) > 30 THEN
    RAISE EXCEPTION 'invalid_customer_whatsapp';
  END IF;

  SELECT * INTO v_product
  FROM public.products
  WHERE slug = p_product_slug AND is_active = true;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'product_not_found';
  END IF;

  LOOP
    v_public_id := public.generate_order_public_id();
    BEGIN
      INSERT INTO public.orders (
        public_id,
        product_id,
        customer_name,
        customer_email,
        customer_whatsapp,
        payment_method,
        status,
        amount_cents,
        currency
      ) VALUES (
        v_public_id,
        v_product.id,
        v_name,
        v_email,
        v_whatsapp,
        p_payment_method,
        'pending_payment',
        v_product.price_cents,
        v_product.currency
      )
      RETURNING * INTO v_order;
      EXIT;
    EXCEPTION
      WHEN unique_violation THEN
        v_attempts := v_attempts + 1;
        IF v_attempts >= 5 THEN
          RAISE;
        END IF;
    END;
  END LOOP;

  order_id := v_order.id;
  public_id := v_order.public_id;
  amount_cents := v_order.amount_cents;
  currency := v_order.currency;
  status := v_order.status;
  payment_method := v_order.payment_method;
  product_name := v_product.name;
  RETURN NEXT;
END;
$$;

REVOKE ALL ON FUNCTION public.create_checkout_order(text, text, text, text, public.payment_method) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.create_checkout_order(text, text, text, text, public.payment_method) TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.mark_order_awaiting_payment(
  p_order_id uuid,
  p_provider text,
  p_provider_ref text,
  p_metadata jsonb DEFAULT '{}'::jsonb
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.orders
  SET
    status = 'awaiting_payment',
    payment_provider = p_provider,
    payment_provider_ref = p_provider_ref,
    metadata = coalesce(metadata, '{}'::jsonb) || coalesce(p_metadata, '{}'::jsonb)
  WHERE id = p_order_id
    AND status = 'pending_payment';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'order_not_updatable';
  END IF;
END;
$$;

CREATE OR REPLACE FUNCTION public.mark_order_paid(
  p_order_id uuid,
  p_provider text DEFAULT NULL,
  p_provider_ref text DEFAULT NULL,
  p_metadata jsonb DEFAULT '{}'::jsonb
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.orders
  SET
    status = 'paid',
    payment_provider = coalesce(p_provider, payment_provider),
    payment_provider_ref = coalesce(p_provider_ref, payment_provider_ref),
    paid_at = now(),
    metadata = coalesce(metadata, '{}'::jsonb) || coalesce(p_metadata, '{}'::jsonb)
  WHERE id = p_order_id
    AND status IN ('pending_payment', 'awaiting_payment');

  IF NOT FOUND THEN
    RAISE EXCEPTION 'order_not_updatable';
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.mark_order_awaiting_payment(uuid, text, text, jsonb) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.mark_order_paid(uuid, text, text, jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.mark_order_awaiting_payment(uuid, text, text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.mark_order_paid(uuid, text, text, jsonb) TO service_role;

INSERT INTO public.products (slug, name, description, price_cents, compare_at_cents, currency)
VALUES (
  '147-treinos-futevolei-casa',
  '147 Treinos de Futevôlei em Casa',
  'Guia digital em PDF com 147 treinos, bônus e acesso vitalício.',
  2700,
  9700,
  'BRL'
);
