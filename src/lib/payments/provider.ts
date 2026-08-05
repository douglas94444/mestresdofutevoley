import type { Database } from "@/integrations/supabase/types";

export type PaymentMethod = Database["public"]["Enums"]["payment_method"];

export type CreatePaymentInput = {
  orderId: string;
  publicId: string;
  amountCents: number;
  currency: string;
  method: PaymentMethod;
  customerEmail: string;
  customerName: string;
};

/**
 * Result returned to the checkout UI after creating an order.
 * When you plug a gateway, return redirect URL / PIX payload / etc.
 */
export type CreatePaymentResult = {
  provider: string;
  /** not_configured = stub until a real gateway is wired */
  status: "not_configured" | "redirect" | "action_required" | "paid";
  checkoutUrl?: string;
  message: string;
};

/**
 * Payment gateway adapter.
 *
 * Replace the body of this function (or swap the implementation) when
 * integrating Mercado Pago / Stripe / etc. Typical flow:
 * 1. Create charge/checkout session with the provider
 * 2. Call RPC `mark_order_awaiting_payment` (service role) with provider ref
 * 3. On webhook paid → call RPC `mark_order_paid`
 */
export async function createPaymentSession(
  input: CreatePaymentInput,
): Promise<CreatePaymentResult> {
  void input;
  return {
    provider: "stub",
    status: "not_configured",
    message:
      "Pedido registrado. O meio de pagamento ainda será integrado — o acesso será liberado após a confirmação.",
  };
}
