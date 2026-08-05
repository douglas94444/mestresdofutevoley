import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Marcos T.",
    time: "aluno há 2 meses",
    text: "Comecei sem nunca ter tocado numa bola de futevôlei. Em três semanas já tava fazendo embaixadinha que eu não imaginava conseguir.",
  },
  {
    name: "Fernanda R.",
    time: "aluna há 5 semanas",
    text: "Treino de manhã antes do trabalho, na sala mesmo. Minha resistência pro jogo de fim de semana mudou completamente.",
  },
  {
    name: "Diego A.",
    time: "aluno há 1 mês",
    text: "O que mais gostei foi não precisar de nada além de uma bola. Simples e direto, exatamente o que eu precisava.",
  },
  {
    name: "Rafael M.",
    time: "aluno há 3 meses",
    text: "Jogo há dois anos e tava estagnado. Os treinos de agilidade destravaram meu deslocamento na areia.",
  },
  {
    name: "Camila S.",
    time: "aluna há 6 semanas",
    text: "Moro longe de qualquer quadra. Aqui em casa consegui criar constância pela primeira vez.",
  },
];

export function TestimonialCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="mt-10">
      <CarouselContent className="-ml-4">
        {testimonials.map((t) => (
          <CarouselItem key={t.name} className="pl-4 sm:basis-1/2 lg:basis-1/3">
            <Card className="h-full border-border bg-card shadow-sm">
              <CardContent className="flex h-full flex-col pt-6">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-foreground">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-heading font-bold text-secondary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
