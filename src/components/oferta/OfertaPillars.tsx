import { Flame, Target, Timer, Zap } from "lucide-react";

import { FootballIcon } from "@/components/landing/shared";

const pillars = [
  {
    icon: FootballIcon,
    title: "Controle de bola",
    detail: "Embaixadinhas, peito e domínio com progressão clara.",
  },
  {
    icon: Target,
    title: "Técnica de jogo",
    detail: "Saque, ataque e defesa com séries e tempo definidos.",
  },
  {
    icon: Zap,
    title: "Agilidade e reflexo",
    detail: "Deslocamento, reação e ritmo pra chegar afiado.",
  },
  {
    icon: Flame,
    title: "Resistência",
    detail: "Condicionamento que aguenta set longo sem quebrar.",
  },
];

export function OfertaPillars() {
  return (
    <section className="bg-primary/10 px-4 py-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-heading text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
          <span className="text-foreground">Os 4 pilares que fazem o método ser</span>{" "}
          <span className="text-accent">infalível:</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-foreground">
          Cada pilar foi pensado pra simplificar
          <br />
          sua evolução no futevôlei
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 md:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold md:text-xl">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                {pillar.detail}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                <Timer className="h-3.5 w-3.5" />
                Pronto pra executar
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
