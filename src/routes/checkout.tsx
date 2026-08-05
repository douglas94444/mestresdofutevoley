import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  CreditCard,
  Barcode,
  Lock,
  QrCode,
  ShieldCheck,
  Timer,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  createCheckoutOrder,
  type CheckoutOrderResult,
} from "@/lib/checkout";
import { pdfCover } from "@/components/landing/PdfStack";
import { CelebrationBurst } from "@/components/CelebrationBurst";
import { useLaunchSpots } from "@/hooks/use-launch-spots";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout Seguro — 147 Treinos de Futevôlei em Casa" },
      {
        name: "description",
        content:
          "Finalize sua compra dos 147 Treinos de Futevôlei em Casa por R$27. Pix, cartão ou boleto, acesso imediato e garantia de 7 dias.",
      },
      { property: "og:title", content: "Checkout Seguro — 147 Treinos de Futevôlei em Casa" },
      {
        property: "og:description",
        content: "Acesso imediato por R$27. Pix, cartão ou boleto com garantia de 7 dias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

const PAYMENT_METHODS = [
  { id: "pix", label: "Pix", note: "Aprovação na hora", icon: QrCode },
  { id: "card", label: "Cartão", note: "Parcele em até 3x", icon: CreditCard },
  { id: "boleto", label: "Boleto", note: "Compensa em 1-2 dias", icon: Barcode },
] as const;

type MethodId = (typeof PAYMENT_METHODS)[number]["id"];

const BONUSES = [
  "Tabela de Evolução Semanal",
  "Aquecimento Expresso de 5 Minutos",
  "Checklist Treino Relâmpago (15 min)",
];

function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const m = String(Math.floor(left / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return `${m}:${s}`;
}

const CHECKOUT_STEPS = ["Seus dados", "Pagamento", "Liberar acesso"] as const;

function CheckoutProgress({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="mt-6">
      <p className="mb-3 text-sm font-medium text-muted-foreground">
        Falta pouco pra liberar seu acesso
      </p>
      <div className="flex items-center gap-2">
        {CHECKOUT_STEPS.map((label, i) => {
          const n = (i + 1) as 1 | 2 | 3;
          const done = step > n;
          const active = step === n;
          return (
            <div key={label} className="flex flex-1 flex-col gap-1.5">
              <div
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  done || active ? "bg-accent" : "bg-muted"
                }`}
              />
              <span
                className={`text-[11px] font-semibold sm:text-xs ${
                  active || done ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {n}. {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CheckoutPage() {
  const [method, setMethod] = useState<MethodId>("pix");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [order, setOrder] = useState<CheckoutOrderResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const time = useCountdown(15 * 60);
  const { spots } = useLaunchSpots();

  const dataComplete =
    name.trim().length >= 2 && email.includes("@") && whatsapp.trim().length >= 8;
  const progressStep: 1 | 2 | 3 = order ? 3 : dataComplete ? 2 : 1;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const result = await createCheckoutOrder({
        data: {
          customerName: name,
          customerEmail: email,
          customerWhatsapp: whatsapp,
          paymentMethod: method,
        },
      });
      setOrder(result);
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível registrar o pedido. Tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <CelebrationBurst active={Boolean(order)} />
      <div className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5 text-center text-sm font-semibold">
          <span className="inline-flex items-center gap-2">
            <Timer className="h-4 w-4" />
            Oferta de R$27 reservada por <span className="tabular-nums">{time}</span>
          </span>
          <span>· Só restam {spots} vagas</span>
        </div>
      </div>

      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Lock className="h-4 w-4 text-primary" />
            Compra 100% segura
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Finalize seu acesso aos 147 treinos
        </h1>
        <p className="mt-2 text-muted-foreground">
          Preencha seus dados, escolha a forma de pagamento e liberamos seu acesso.
        </p>

        <CheckoutProgress step={progressStep} />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            {order ? (
              <Card className="border-primary/40 animate-in fade-in zoom-in-95 duration-500">
                <CardContent className="space-y-5 p-8 text-center">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-primary animate-in zoom-in duration-500" />
                  <h2 className="text-xl font-bold">Seu material está a caminho!</h2>
                  <p className="text-sm text-muted-foreground">
                    Código:{" "}
                    <span className="font-mono font-semibold text-foreground">
                      {order.publicId}
                    </span>
                  </p>
                  <div className="mx-auto flex max-w-sm items-center gap-4 rounded-lg border border-border bg-muted/40 p-4 text-left">
                    <img
                      src={pdfCover}
                      alt="Capa do guia 147 Treinos"
                      width={96}
                      height={128}
                      className="h-24 w-auto rounded shadow-sm"
                    />
                    <div>
                      <p className="font-heading text-sm font-semibold">
                        Na fila do seu e-mail
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        O guia com 147 treinos + 3 bônus chega em{" "}
                        <strong className="text-foreground">{email.trim()}</strong> assim
                        que o pagamento for confirmado.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{order.payment.message}</p>
                  <Button asChild variant="outline">
                    <Link to="/">Voltar para a página inicial</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <section>
                  <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      1
                    </span>
                    Seus dados
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Label htmlFor="nome">Nome completo</Label>
                      <Input
                        id="nome"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        className="mt-1.5"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail (onde vai receber o acesso)</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="voce@email.com"
                        className="mt-1.5"
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="whats">WhatsApp</Label>
                      <Input
                        id="whats"
                        required
                        inputMode="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="(00) 00000-0000"
                        className="mt-1.5"
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      2
                    </span>
                    Forma de pagamento
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {PAYMENT_METHODS.map((m) => {
                      const Icon = m.icon;
                      const active = method === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setMethod(m.id)}
                          aria-pressed={active}
                          className={`rounded-lg border p-4 text-left transition ${
                            active
                              ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <Icon
                            className={`h-5 w-5 ${active ? "text-primary" : "text-muted-foreground"}`}
                          />
                          <div className="mt-2 font-semibold">{m.label}</div>
                          <div className="text-xs text-muted-foreground">{m.note}</div>
                        </button>
                      );
                    })}
                  </div>

                  {method === "pix" && (
                    <p className="mt-4 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                      O QR Code do Pix será gerado na etapa de pagamento. Pagou, acesso liberado
                      na hora.
                    </p>
                  )}
                  {method === "card" && (
                    <p className="mt-4 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                      Os dados do cartão serão preenchidos com segurança no provedor de pagamento
                      (não pedimos número de cartão neste site).
                    </p>
                  )}
                  {method === "boleto" && (
                    <p className="mt-4 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                      O boleto será gerado na etapa de pagamento. A liberação ocorre após a
                      compensação.
                    </p>
                  )}
                </section>

                {error && (
                  <p
                    role="alert"
                    className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  >
                    {error}
                  </p>
                )}

                <div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-accent py-7 text-base font-bold text-accent-foreground hover:bg-accent/90 sm:text-lg"
                  >
                    <Zap className="h-5 w-5" />
                    {loading ? "Registrando pedido..." : "Quero garantir meu acesso por R$27"}
                  </Button>
                  <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" />
                    Ambiente seguro · seus dados não são compartilhados
                  </p>
                </div>
              </form>
            )}
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <Card>
              <CardContent className="space-y-5 p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={pdfCover}
                    alt="Capa do guia 147 Treinos de Futevôlei em Casa"
                    width={96}
                    height={128}
                    className="h-28 w-auto shrink-0 rounded-md border border-border shadow-sm"
                  />
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Seu pedido
                    </div>
                    <div className="mt-1 font-heading font-bold leading-snug">
                      147 Treinos de Futevôlei em Casa
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Guia · acesso vitalício · liberação após pagamento
                    </p>
                  </div>
                </div>

                <Separator />

                <ul className="space-y-2 text-sm">
                  {BONUSES.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>
                        {b} <span className="font-semibold text-primary">grátis</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <Separator />

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Valor original</span>
                    <span className="line-through">R$97</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-primary">
                    <span>Desconto de lançamento</span>
                    <span>- R$70</span>
                  </div>
                  <div className="flex items-end justify-between pt-2">
                    <span className="font-semibold">Total hoje</span>
                    <span className="text-3xl font-extrabold text-accent">R$27</span>
                  </div>
                  <p className="text-right text-xs text-muted-foreground">
                    à vista no Pix ou parcelado no cartão
                  </p>
                </div>

                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 font-semibold text-primary">
                    <ShieldCheck className="h-5 w-5" />
                    Garantia de 7 dias
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Não gostou? Devolvemos 100% do seu dinheiro, sem perguntas.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Zap className="h-3.5 w-3.5 text-accent" />
                  Acesso liberado assim que o pagamento é confirmado
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
