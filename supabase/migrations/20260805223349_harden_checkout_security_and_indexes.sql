-- Lock down order status RPCs: only service_role (webhooks / server)
REVOKE ALL ON FUNCTION public.mark_order_awaiting_payment(uuid, text, text, jsonb) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.mark_order_awaiting_payment(uuid, text, text, jsonb) FROM anon, authenticated;
GRANT EXECUTE ON FUNCTION public.mark_order_awaiting_payment(uuid, text, text, jsonb) TO service_role;

REVOKE ALL ON FUNCTION public.mark_order_paid(uuid, text, text, jsonb) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.mark_order_paid(uuid, text, text, jsonb) FROM anon, authenticated;
GRANT EXECUTE ON FUNCTION public.mark_order_paid(uuid, text, text, jsonb) TO service_role;

-- create_checkout_order stays callable by checkout (anon + authenticated)
REVOKE ALL ON FUNCTION public.create_checkout_order(text, text, text, text, public.payment_method) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.create_checkout_order(text, text, text, text, public.payment_method) TO anon, authenticated, service_role;

-- Harden helper functions search_path
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.generate_order_public_id()
RETURNS text
LANGUAGE plpgsql
SET search_path = public
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

-- Lock down Lovable helper if present
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_proc p
    JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'public' AND p.proname = 'rls_auto_enable' AND pg_get_function_identity_arguments(p.oid) = ''
  ) THEN
    EXECUTE 'REVOKE ALL ON FUNCTION public.rls_auto_enable() FROM PUBLIC';
    EXECUTE 'REVOKE ALL ON FUNCTION public.rls_auto_enable() FROM anon, authenticated';
  END IF;
END;
$$;

-- FK covering index
CREATE INDEX IF NOT EXISTS orders_product_id_idx ON public.orders (product_id);

-- Ensure catalog product exists (idempotent)
INSERT INTO public.products (slug, name, description, price_cents, compare_at_cents, currency)
VALUES (
  '147-treinos-futevolei-casa',
  '147 Treinos de Futevôlei em Casa',
  'Guia digital em PDF com 147 treinos, bônus e acesso vitalício.',
  2700,
  9700,
  'BRL'
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  price_cents = EXCLUDED.price_cents,
  compare_at_cents = EXCLUDED.compare_at_cents,
  currency = EXCLUDED.currency,
  is_active = true;
