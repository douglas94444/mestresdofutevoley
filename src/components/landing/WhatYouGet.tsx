import { CheckCircle, FileText } from "lucide-react";

import { PdfStack } from "@/components/landing/PdfStack";
import { SectionBadge } from "@/components/landing/shared";

const deliverables = [
  {
    title: "Guia completo · 147 treinos",
    detail: "Material único, abre no celular ou imprime. Séries, tempo e progressão em cada página.",
  },
  {
    title: "5 frentes de jogo",
    detail: "Controle, técnica, agilidade, resistência e aquecimento — do zero ao avançado.",
  },
  {
    title: "3 bônus inclusos",
    detail: "Tabela de evolução, aquecimento expresso de 5 min e checklist treino relâmpago.",
  },
  {
    title: "Acesso vitalício",
    detail: "Pagamento único. Sem mensalidade, sem prazo pra terminar.",
  },
];

export function WhatYouGet() {
  return (
    <section className="py-14 sm:py-20">
      <div className="text-center">
        <SectionBadge icon={FileText}>O que chega pra você</SectionBadge>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Material pronto pra treinar hoje
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Depois do pagamento confirmado, o guia chega no seu e-mail — é só abrir e começar.
        </p>
      </div>

      <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
        <PdfStack size="offer" />

        <ul className="space-y-6">
          {deliverables.map((item) => (
            <li key={item.title} className="flex gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-heading font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
