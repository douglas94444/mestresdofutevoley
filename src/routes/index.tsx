import { ArrowRight, MessageCircle, Shield, Star } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton, FootballIcon, SectionBadge } from "@/components/landing/shared";
import { UrgencyBar } from "@/components/landing/UrgencyBar";
import { TestimonialCarousel } from "@/components/landing/TestimonialCarousel";
import { WhatsappChats } from "@/components/landing/WhatsappChats";
import { WorkoutPreview } from "@/components/landing/WorkoutPreview";
import { TrainingFronts } from "@/components/landing/TrainingFronts";
import { StickyCta } from "@/components/landing/StickyCta";
import { SocialProofTicker } from "@/components/landing/SocialProofTicker";
import { OfertaHero } from "@/components/oferta/OfertaHero";
import { OfertaAbout } from "@/components/oferta/OfertaAbout";
import { OfertaPillars } from "@/components/oferta/OfertaPillars";
import { OfertaForWho } from "@/components/oferta/OfertaForWho";
import { OfertaOffer } from "@/components/oferta/OfertaOffer";
import { OfertaGuarantee } from "@/components/oferta/OfertaGuarantee";

const faq = [
  {
    question: "Preciso de quadra de areia pra treinar?",
    answer:
      "Não. Todos os 147 treinos foram criados pra qualquer espaço em casa — sala, quintal ou varanda.",
  },
  {
    question: "Sou iniciante, funciona pra mim?",
    answer:
      "Sim. O guia tem treinos para todos os níveis, do primeiro contato com a bola até quem já joga.",
  },
  {
    question: "Preciso de algum equipamento?",
    answer:
      "Só uma bola (de futevôlei, futebol ou similar). Nenhum outro equipamento é necessário.",
  },
  {
    question: "Como recebo o material?",
    answer:
      "Você recebe o material no e-mail assim que o pagamento é confirmado. Abre no celular ou imprime.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "Acesso vitalício. Você treina no seu ritmo, sem prazo pra terminar.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Você tem garantia incondicional de 7 dias. Se não for pra você, devolvemos 100% do valor.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Pix, cartão de crédito (com parcelamento) e boleto.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "147 Treinos de Futevôlei em Casa | Quero meu acesso" },
      {
        name: "description",
        content:
          "Organize seu treino, evolua com constância e conquiste o jogo que você deseja. Guia com 147 treinos pra fazer em casa — de R$97 por R$27.",
      },
      {
        property: "og:title",
        content: "147 Treinos de Futevôlei em Casa | Quero meu acesso",
      },
      {
        property: "og:description",
        content:
          "Com um guia que já diz o que fazer, por quanto tempo e em qual ordem. Ideal pra quem não pode perder tempo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <div className="sticky top-0 z-50">
        <UrgencyBar />
      </div>

      <OfertaHero />

      <SocialProofTicker />

      <OfertaAbout />

      <OfertaPillars />

      <div className="mx-auto max-w-5xl px-4">
        <WorkoutPreview />
        <TrainingFronts />
      </div>

      <OfertaForWho />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
        <div className="text-center">
          <SectionBadge icon={Star}>Olha o que aconteceu</SectionBadge>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Quem aplicou o método
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Gente que parou de esperar a quadra abrir e começou a evoluir dentro de casa.
          </p>
        </div>
        <TestimonialCarousel />
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-10 sm:pb-14">
        <div className="text-center">
          <SectionBadge icon={MessageCircle}>Você nunca treina sozinho</SectionBadge>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Conversas reais nessa jornada
          </h2>
        </div>
        <WhatsappChats />
      </section>

      <OfertaOffer />

      <OfertaGuarantee />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
        <div className="text-center">
          <SectionBadge icon={Shield}>Dúvidas</SectionBadge>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-heading text-base font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="border-t border-border bg-foreground px-4 py-14 text-background">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <FootballIcon className="h-6 w-6" />
          </div>
          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pronto pra evoluir em casa?
          </h2>
          <p className="mt-3 max-w-xl text-background/75">
            147 treinos · 3 bônus · acesso vitalício · garantia de 7 dias
          </p>
          <p className="mt-6 font-heading text-5xl font-extrabold text-accent">R$27</p>
          <div className="mt-8">
            <CtaButton size="lg" pulse className="px-12 py-7 text-lg uppercase tracking-wide">
              Quero meu acesso
              <ArrowRight className="h-5 w-5" />
            </CtaButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="font-heading text-base font-bold">147 Treinos de Futevôlei em Casa</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Produto digital — guia completo de acesso imediato.
          </p>
        </div>
      </footer>

      <StickyCta />
    </div>
  );
}
