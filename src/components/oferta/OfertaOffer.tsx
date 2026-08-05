import { ArrowRight, Check } from "lucide-react";

import bonusTabela from "@/assets/bonus-tabela.jpg";
import bonusAquecimento from "@/assets/bonus-aquecimento.jpg";
import bonusChecklist from "@/assets/bonus-checklist.jpg";
import { PdfStack } from "@/components/landing/PdfStack";
import { CtaButton } from "@/components/landing/shared";

const bonuses = [
  {
    image: bonusTabela,
    alt: "Bônus 01 — Tabela de Evolução Semanal",
    oldPrice: "R$37,00",
  },
  {
    image: bonusAquecimento,
    alt: "Bônus 02 — Aquecimento Expresso de 5 Minutos",
    oldPrice: "R$47,00",
  },
  {
    image: bonusChecklist,
    alt: "Bônus 03 — Checklist Treino Relâmpago",
    oldPrice: "R$27,00",
  },
];

const includes = [
  "Guia completo · 147 treinos de futevôlei",
  "Bônus 1: Tabela de Evolução Semanal",
  "Bônus 2: Aquecimento Expresso de 5 Minutos",
  "Bônus 3: Checklist Treino Relâmpago (15 min)",
  "Acesso vitalício · abre no celular ou imprime",
];

export function OfertaOffer() {
  const today = new Date()
    .toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/^\w/, (c) => c.toUpperCase());

  return (
    <section className="bg-primary/10 px-4 pb-0 pt-14 md:pt-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center font-heading text-3xl font-normal leading-tight text-foreground md:text-4xl lg:text-5xl">
          Oferta especial para você{" "}
          <span className="font-bold text-primary">entrar agora</span>
        </h2>

        <div className="mx-auto mb-12 flex max-w-[300px] flex-col gap-5 md:gap-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.alt}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <img
                src={bonus.image}
                alt={bonus.alt}
                className="h-auto w-full object-cover"
                width={300}
                height={300}
                loading="lazy"
                decoding="async"
              />
              <div className="px-4 py-4 text-center">
                <p className="text-base font-semibold leading-relaxed md:text-lg">
                  De <span className="font-bold text-accent line-through">{bonus.oldPrice}</span>
                  {" → "}
                  <span className="font-bold text-primary">Grátis hoje</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-foreground p-5 text-background shadow-2xl sm:p-6 md:p-12">
          <div className="mb-8 text-center">
            <p className="font-heading text-2xl leading-tight tracking-wide text-background md:text-3xl">
              <strong className="font-bold">Acesso imediato</strong>
              <br />
              a tudo isso:
            </p>
            <div className="mx-auto mt-3 h-0.5 w-16 bg-background/30" />
          </div>

          <div className="mb-8">
            <PdfStack size="offer" />
          </div>

          <ul className="mx-auto mb-8 max-w-md space-y-3 text-left">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base md:text-lg">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <p className="mb-3 text-lg text-background md:text-xl">
              Apenas com a{" "}
              <strong className="font-bold">
                promoção especial válida{" "}
                <span className="text-accent">HOJE</span>
              </strong>
            </p>
            <p className="mb-10 font-heading text-xl font-bold tracking-wide text-accent md:text-2xl">
              <span className="inline-block rounded-lg bg-accent/15 px-4 py-1">{today}</span>
            </p>

            <p className="mb-1 text-2xl md:text-3xl">
              <span className="font-bold">DE </span>
              <span className="font-bold text-accent line-through">R$97</span>{" "}
              <span className="font-bold">POR:</span>
            </p>
            <p className="my-3 font-heading text-5xl font-extrabold text-accent md:text-6xl">
              R$27
            </p>
            <p className="mb-8 text-lg text-background/75 md:text-xl">
              à vista no Pix ou parcelado no cartão
            </p>

            <CtaButton size="lg" pulse className="w-full px-16 py-7 text-lg uppercase md:w-auto md:text-xl">
              Quero meu acesso
              <ArrowRight className="h-5 w-5" />
            </CtaButton>

            <div className="mx-auto mt-8 max-w-md rounded-2xl bg-secondary p-6 text-foreground">
              <p className="mb-3 text-lg leading-snug md:text-xl">
                Só com o{" "}
                <span className="font-bold text-primary">Aquecimento Expresso</span> e o{" "}
                <span className="font-bold text-primary">Treino Relâmpago</span> você já{" "}
                <span className="font-bold text-accent">economiza</span> mais do que o{" "}
                <span className="font-bold text-accent">valor do guia</span> na primeira semana.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
                E ainda troca o estresse de
                <br />
                <span className="font-bold text-accent">&quot;o que eu treino hoje?&quot;</span>
                <br />
                por uma{" "}
                <span className="font-bold text-primary">rotina organizada</span> e uma evolução{" "}
                <span className="font-bold text-primary">constante</span>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
