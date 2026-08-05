import { Flame, Heart, Target, Zap } from "lucide-react";

import { FootballIcon, SectionBadge } from "@/components/landing/shared";

const fronts = [
  {
    number: "35",
    title: "Controle de Bola",
    time: "15–25 min",
    icon: FootballIcon,
    workouts: [
      "Embaixadinha Progressiva",
      "Toque de peito parado",
      "Dominada baixa em sequência",
    ],
  },
  {
    number: "30",
    title: "Técnica e Fundamentos",
    time: "20–30 min",
    icon: Target,
    workouts: ["Saque curto na parede", "Ataque de colocada", "Defesa de antecipação"],
  },
  {
    number: "30",
    title: "Agilidade e Reflexo",
    time: "15–20 min",
    icon: Zap,
    workouts: ["Escada imaginária 3 direções", "Reação ao toque", "Deslocamento lateral curto"],
  },
  {
    number: "32",
    title: "Resistência e Condicionamento",
    time: "20–40 min",
    icon: Flame,
    workouts: ["Circuito sala 4 estações", "Intervalado com bola", "Fôlego de set longo"],
  },
  {
    number: "20",
    title: "Aquecimento e Mobilidade",
    time: "5–15 min",
    icon: Heart,
    workouts: ["Mobilidade de tornozelo", "Ativação de core", "Aquecimento expresso 5 min"],
  },
];

export function TrainingFronts() {
  return (
    <section className="py-14 sm:py-20">
      <div className="text-center">
        <SectionBadge>Frentes de treino</SectionBadge>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          147 treinos com nome, tempo e progressão
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Cinco frentes de jogo — cada uma com treinos prontos pra abrir e executar.
        </p>
      </div>

      <div className="mt-12 divide-y divide-border border-y border-border">
        {fronts.map((front) => (
          <div
            key={front.title}
            className="grid gap-4 py-7 sm:grid-cols-[auto_1fr_1.2fr] sm:items-start sm:gap-8"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-4xl font-extrabold text-primary tabular-nums">
                {front.number}
              </span>
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                treinos
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <front.icon className="h-4 w-4 text-accent" />
                <h3 className="font-heading text-lg font-bold">{front.title}</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Duração típica · {front.time}</p>
            </div>

            <ul className="space-y-1.5 text-sm text-foreground">
              {front.workouts.map((name) => (
                <li key={name} className="flex gap-2">
                  <span className="text-accent">·</span>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
