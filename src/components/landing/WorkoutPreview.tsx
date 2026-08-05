import { Clock, Footprints, MapPin, Repeat } from "lucide-react";

import { SectionBadge } from "@/components/landing/shared";
import pdfPageTreino from "@/assets/pdf-page-treino.jpg";

const meta = [
  { icon: Clock, label: "Duração", value: "12 min" },
  { icon: Repeat, label: "Séries", value: "4 × 45s" },
  { icon: MapPin, label: "Espaço", value: "Sala 2×2 m" },
  { icon: Footprints, label: "Equipamento", value: "1 bola" },
];

const steps = [
  "Aquecimento leve com toques no peito — 2 min",
  "Embaixadinhas alternando pé dominante e não dominante — 45s",
  "Descanso ativo (caminhada no lugar) — 20s",
  "Repete a série 4 vezes aumentando a meta a cada rodada",
];

export function WorkoutPreview() {
  return (
    <section className="py-14 sm:py-20">
      <div className="text-center">
        <SectionBadge>Dentro do guia</SectionBadge>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Abre e treina
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Cada treino já vem com nome, tempo, séries e o que fazer — sem adivinhar o próximo passo.
        </p>
      </div>

      <div className="mt-10 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-lg border border-border shadow-lg transition-transform duration-500 hover:-translate-y-1 animate-in fade-in">
          <img
            src={pdfPageTreino}
            alt="Página do treino Controle 07 — Embaixadinha Progressiva"
            width={768}
            height={1024}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
          />
        </div>

        <article className="border-t border-border pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">
            Controle 07 · Controle de Bola
          </p>
          <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Embaixadinha Progressiva
          </h3>
          <p className="mt-3 text-muted-foreground">
            Treino curto pra ganhar domínio sem sair de casa. Ideal pra quem tá começando ou
            voltando à constância.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {meta.map((item) => (
              <div key={item.label} className="border-b border-border pb-3">
                <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <item.icon className="h-3.5 w-3.5 text-accent" />
                  {item.label}
                </dt>
                <dd className="mt-1 font-heading text-sm font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>

          <ol className="mt-8 space-y-3">
            {steps.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
}
