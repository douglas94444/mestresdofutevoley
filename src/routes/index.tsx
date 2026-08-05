import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Flame,
  Mail,
  MessageCircle,
  PlayCircle,
  Shield,
  Sparkles,
  Star,
  Timer,
  Trophy,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton, FootballIcon, SectionBadge } from "@/components/landing/shared";
import { CountdownBoxes, UrgencyBar } from "@/components/landing/UrgencyBar";
import { TestimonialCarousel } from "@/components/landing/TestimonialCarousel";
import { WhatsappChats } from "@/components/landing/WhatsappChats";
import { PdfStack } from "@/components/landing/PdfStack";
import { WorkoutPreview } from "@/components/landing/WorkoutPreview";
import { TrainingFronts } from "@/components/landing/TrainingFronts";
import { WhatYouGet } from "@/components/landing/WhatYouGet";
import { SocialProofTicker } from "@/components/landing/SocialProofTicker";
import { StickyCta } from "@/components/landing/StickyCta";
import { BonusUnlock } from "@/components/landing/BonusUnlock";
import { ImpactBanner } from "@/components/landing/ImpactBanner";

import bonusTabela from "@/assets/bonus-tabela.jpg";
import bonusAquecimento from "@/assets/bonus-aquecimento.jpg";
import bonusChecklist from "@/assets/bonus-checklist.jpg";

const benefits = [
  "Treine sem quadra, sem rede e sem equipamento — só uma bola",
  "Cada treino já vem com o que fazer, quantas vezes e por quanto tempo",
  "Acesso vitalício: treine no seu ritmo, sem prazo pra terminar",
  "Progressão do zero ao avançado dentro do mesmo material",
  "Cabe em qualquer espaço: sala, quintal, varanda ou garagem",
  "De 15 a 40 minutos por treino — encaixa em qualquer rotina",
];

const audienceItems = [
  "Joga (ou quer começar a jogar) futevôlei e não tem areia por perto",
  "A rotina não fecha com o horário da quadra",
  "Quer chegar mais afiado tecnicamente pro próximo jogo",
  "Prefere treinar no próprio tempo e espaço",
  "Já treina, mas sente que falta constância",
  "Tá começando agora e quer construir base sem enrolação",
];

const steps = [
  {
    step: "PASSO 01",
    title: "Receba o material no e-mail",
    description: "O guia chega no seu e-mail logo após a confirmação do pagamento.",
    icon: Mail,
  },
  {
    step: "PASSO 02",
    title: "Abra o guia",
    description: "Usa no celular, tablet ou imprime — sem app, sem login.",
    icon: Download,
  },
  {
    step: "PASSO 03",
    title: "Escolhe o treino e executa",
    description: "Nome, tempo e séries já estão na página. É só seguir.",
    icon: PlayCircle,
  },
];

const bonuses = [
  {
    number: "01",
    title: "Tabela de Evolução Semanal",
    description: "Acompanhe sua evolução treino a treino, semana a semana.",
    price: "R$37,00",
    image: bonusTabela,
  },
  {
    number: "02",
    title: "Aquecimento Expresso de 5 Minutos",
    description: "Pra ativar o corpo antes de qualquer treino, mesmo com pressa.",
    price: "R$47,00",
    image: bonusAquecimento,
  },
  {
    number: "03",
    title: "Checklist Treino Relâmpago (15 min)",
    description: "Pros dias corridos, quando o tempo é curto mas a vontade não falta.",
    price: "R$27,00",
    image: bonusChecklist,
  },
];

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
      { title: "147 Treinos de Futevôlei em Casa | De R$97 por R$27" },
      {
        name: "description",
        content:
          "Guia com 147 treinos de futevôlei pra fazer em casa: controle, técnica, agilidade, resistência e mobilidade. Sem quadra. Acesso imediato por R$27.",
      },
      {
        property: "og:title",
        content: "147 Treinos de Futevôlei em Casa | De R$97 por R$27",
      },
      {
        property: "og:description",
        content:
          "147 treinos nomeados pra evoluir no futevôlei sem quadra. Acesso imediato e garantia de 7 dias.",
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

      {/* Hero — full-bleed atmosphere + product mockup */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.53_0.19_145_/_0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_oklch(0.66_0.20_45_/_0.10),_transparent_50%)]"
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-12 text-center sm:py-16 md:py-20">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            147 Treinos
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.25rem]">
            Futevôlei em Casa
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Um Guia pratico com treinos nomeados por séries, tempo e progressão pra você evoluir
            na sua casa, sem quadra e sem equipamento.
          </p>

          <div className="mt-10 w-full">
            <PdfStack size="hero" />
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex items-baseline gap-3">
              <span className="text-base text-muted-foreground line-through">R$97</span>
              <span className="font-heading text-5xl font-extrabold text-accent">R$27</span>
            </div>
            <p className="text-sm text-muted-foreground">pagamento único · acesso imediato</p>
          </div>

          <div className="mt-8">
            <CtaButton size="lg" pulse className="px-10 py-7 text-lg">
              Quero os 147 treinos
              <ArrowRight className="h-5 w-5" />
            </CtaButton>
          </div>

          <p className="mt-8 text-sm font-medium text-muted-foreground">Esta oferta acaba em</p>
          <div className="mt-3">
            <CountdownBoxes />
          </div>
        </div>
      </section>

      <SocialProofTicker />

      <ImpactBanner />

      <main className="mx-auto max-w-5xl px-4 pb-24 md:pb-0">
        {/* Depoimentos */}
        <section className="py-14 sm:py-20">
          <div className="text-center">
            <SectionBadge icon={Star}>Depoimentos reais</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Quem já treina com o guia
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Gente que parou de esperar a quadra abrir e começou a evoluir dentro de casa.
            </p>
          </div>
          <TestimonialCarousel />
        </section>

        <WhatYouGet />

        <WorkoutPreview />

        <TrainingFronts />

        {/* Benefícios */}
        <section className="py-14 sm:py-20">
          <div className="rounded-3xl bg-primary/5 px-6 py-12 sm:px-12 sm:py-16">
            <div className="text-center">
              <SectionBadge icon={Sparkles}>Pra você</SectionBadge>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Por que esse método funciona
              </h2>
            </div>
            <ul className="mx-auto mt-10 grid max-w-3xl gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <CheckCircle className="h-4 w-4" />
                  </span>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pra quem é */}
        <section className="py-14 sm:py-20">
          <div className="text-center">
            <SectionBadge icon={Trophy}>Público</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Pra quem é este material?
            </h2>
          </div>
          <ul className="mx-auto mt-10 max-w-3xl divide-y divide-border border-y border-border">
            {audienceItems.map((item) => (
              <li key={item} className="flex items-start gap-3 py-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-foreground">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Como funciona */}
        <section className="py-14 sm:py-20">
          <div className="text-center">
            <SectionBadge icon={Timer}>Passo a passo</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Do e-mail pro primeiro treino
            </h2>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.step} className="text-center sm:text-left">
                <step.icon className="mx-auto h-6 w-6 text-accent sm:mx-0" />
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-primary">
                  {step.step}
                </p>
                <h3 className="mt-1 font-heading text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conversas reais */}
        <section className="py-14 sm:py-20">
          <div className="text-center">
            <SectionBadge icon={MessageCircle}>Conversas reais</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Quem mudou o treino com o guia
            </h2>
          </div>
          <WhatsappChats />
        </section>

        <BonusUnlock bonuses={bonuses} />

        {/* Oferta */}
        <section id="oferta" className="py-14 sm:py-20">
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-12 text-background sm:px-12 sm:py-16">
            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <PdfStack size="offer" />
              <div className="text-center md:text-left">
                <SectionBadge icon={Flame}>Oferta de lançamento</SectionBadge>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  147 Treinos de Futevôlei em Casa
                </h2>
                <p className="mt-3 text-background/80">
                  Material no e-mail · abre no celular · 3 bônus · acesso vitalício
                </p>
                <p className="mt-6 text-base text-background/70 line-through">R$97,00</p>
                <p className="font-heading text-5xl font-extrabold text-accent sm:text-6xl">R$27</p>
                <p className="mt-1 text-sm text-background/80">
                  à vista no Pix ou parcelado no cartão
                </p>
                <div className="mt-8">
                  <CtaButton size="lg" className="px-10 py-7 text-lg shadow-accent/30">
                    Quero garantir meu acesso
                    <ArrowRight className="h-5 w-5" />
                  </CtaButton>
                </div>
                <p className="mt-5 text-sm text-background/60">
                  Pix · Cartão · Boleto — acesso liberado após a confirmação
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Garantia */}
        <section className="py-8">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-secondary/40 px-6 py-8 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold">7 dias de garantia · risco zero</h3>
              <p className="mt-1 text-muted-foreground">
                Não gostou? É só mandar uma mensagem em até 7 dias e devolvemos 100% do valor, sem
                perguntas.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-20">
          <div className="text-center">
            <SectionBadge icon={Shield}>Dúvidas</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Perguntas frequentes
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-heading text-base font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <FootballIcon className="h-4 w-4" />
            </div>
            <span className="font-heading text-base font-bold">
              147 Treinos de Futevôlei em Casa
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Produto digital — guia completo de acesso imediato.
          </p>
          <p className="mt-1 text-sm font-bold text-foreground">De R$97 por R$27</p>
          <div className="mt-4">
            <CtaButton size="sm">Garantir acesso</CtaButton>
          </div>
        </div>
      </footer>

      <StickyCta />
    </div>
  );
}
