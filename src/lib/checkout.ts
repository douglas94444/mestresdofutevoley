import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";
import { createPaymentSession } from "@/lib/payments/provider";

export const PRODUCT_SLUG = "147-treinos-futevolei-casa";

const checkoutInputSchema = z.object({
  customerName: z.string().trim().min(2).max(120),
  customerEmail: z.string().trim().email().max(254),
  customerWhatsapp: z.string().trim().min(8).max(30),
  paymentMethod: z.enum(["pix", "card", "boleto"]),
});

export type CheckoutOrderResult = {
  orderId: string;
  publicId: string;
  amountCents: number;
  currency: string;
  status: string;
  paymentMethod: "pix" | "card" | "boleto";
  productName: string;
  payment: Awaited<ReturnType<typeof createPaymentSession>>;
};

export const createCheckoutOrder = createServerFn({ method: "POST" })
  .validator(checkoutInputSchema)
  .handler(async ({ data }): Promise<CheckoutOrderResult> => {
    const { data: rows, error } = await supabase.rpc("create_checkout_order", {
      p_product_slug: PRODUCT_SLUG,
      p_customer_name: data.customerName,
      p_customer_email: data.customerEmail,
      p_customer_whatsapp: data.customerWhatsapp,
      p_payment_method: data.paymentMethod,
    });

    const order = rows?.[0];
    if (error || !order) {
      console.error("[checkout] create_checkout_order failed", error);
      throw new Error("Não foi possível registrar o pedido. Tente novamente.");
    }

    const payment = await createPaymentSession({
      orderId: order.order_id,
      publicId: order.public_id,
      amountCents: order.amount_cents,
      currency: order.currency,
      method: order.payment_method,
      customerEmail: data.customerEmail,
      customerName: data.customerName,
    });

    return {
      orderId: order.order_id,
      publicId: order.public_id,
      amountCents: order.amount_cents,
      currency: order.currency,
      status: order.status,
      paymentMethod: order.payment_method,
      productName: order.product_name,
      payment,
    };
  });
