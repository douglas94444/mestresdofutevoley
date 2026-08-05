import { ArrowRight } from "lucide-react";

import { PdfStack } from "@/components/landing/PdfStack";
import { CtaButton } from "@/components/landing/shared";
import { CountdownBoxes } from "@/components/landing/UrgencyBar";

const pains = [
  {
    title: "Cansou de depender da quadra",
    detail: "Horário cheio, areia longe, treino cancelado — e a evolução fica pra depois.",
  },
  {
    title: "Cansou de treinar sem método",
    detail: "Embaixadinha solta não vira progresso. Falta nome, série, tempo e progressão.",
  },
  {
    title: "Quer chegar afiado no próximo jogo",
    detail: "Controle, técnica e fôlego que cabem na sala, no quintal ou na varanda.",
  },
];

export function OfertaHero() {
  return (
    <section className="bg-background pt-0">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.53_0.19_145_/_0.14),_transparent_55%),radial-gradient(ellipse_at_bottom,_oklch(0.66_0.20_45_/_0.10),_transparent_50%)]"
        />
        <div className="relative px-4 pb-2 pt-6 md:pt-10">
          <PdfStack size="hero" />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-6 text-center md:py-10">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          147 Treinos de Futevôlei
        </p>
        <h1 className="mt-3 font-heading text-4xl font-normal leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
          Vou te ajudar a{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text font-extrabold text-transparent">
            organizar seu treino
          </span>
          , evoluir com constância e conquistar o{" "}
          <span className="font-extrabold text-accent">jogo que você deseja!</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[1.15rem] leading-snug text-foreground md:text-2xl">
          Com um{" "}
          <span className="inline-block rounded-lg bg-accent/15 px-1.5 py-0.5 font-extrabold text-accent md:text-3xl">
            guia
          </span>{" "}
          que já diz{" "}
          <span className="font-bold text-primary">o que fazer</span>,{" "}
          <span className="font-bold text-primary">por quanto tempo</span> e{" "}
          <span className="font-bold text-primary">em qual ordem</span>.
        </p>
      </div>

      <div className="bg-accent px-6 py-3 text-center text-accent-foreground">
        <p className="font-heading text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl">
          Ideal para quem não pode
          <br />
          perder tempo!
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-md flex-col gap-4 px-4 py-6">
        {pains.map((pain) => (
          <div
            key={pain.title}
            className="overflow-hidden rounded-2xl border border-border bg-foreground px-5 py-5 text-background shadow-sm"
          >
            <p className="font-heading text-xl font-extrabold leading-tight md:text-2xl">
              {pain.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-background/75 md:text-base">
              {pain.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 pb-10">
        <div className="flex items-baseline gap-3">
          <span className="text-base text-muted-foreground line-through">R$97</span>
          <span className="font-heading text-5xl font-extrabold text-accent">R$27</span>
        </div>
        <CtaButton size="lg" pulse className="px-10 py-7 text-lg uppercase tracking-wide">
          Quero meu acesso
          <ArrowRight className="h-5 w-5" />
        </CtaButton>
        <p className="text-sm text-muted-foreground">Esta oferta acaba em</p>
        <CountdownBoxes />
      </div>
    </section>
  );
}
