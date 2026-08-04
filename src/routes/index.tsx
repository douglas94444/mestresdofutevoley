import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle,
  Zap,
  Target,
  Dumbbell,
  Timer,
  Heart,
  Shield,
  ArrowRight,
  Flame,
  Sparkles,
  Calendar,
  Clock,
  ListChecks,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImage from "@/assets/hero-futevolei.jpg";

const CTA_HREF = "#oferta";

const FootballIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v4" />
    <path d="m4.93 4.93 2.83 2.83" />
    <path d="M2 12h4" />
    <path d="m4.93 19.07 2.83-2.83" />
    <path d="M12 22v-4" />
    <path d="m19.07 19.07-2.83-2.83" />
    <path d="M22 12h-4" />
    <path d="m19.07 4.93-2.83 2.83" />
    <polygon points="12 6 8 10 12 14 16 10" />
  </svg>
);

const CtaButton = ({
  children,
  size = "lg",
  className = "",
}: {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}) => (
  <Button
    asChild
    size={size}
    className={`rounded-full bg-accent text-accent-foreground font-heading font-semibold shadow-lg shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-accent/30 hover:-translate-y-0.5 ${className}`}
  >
    <a href={CTA_HREF} className="gap-2">
      {children}
    </a>
  </Button>
);

const SectionBadge = ({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ElementType }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
    {Icon && <Icon className="h-4 w-4 text-accent" />}
    {children}
  </span>
);

const TrustBadge = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
    <Icon className="h-4 w-4 text-primary" />
    <span>{text}</span>
  </div>
);

const trainingCategories = [
  {
    number: "35",
    title: "Controle de Bola",
    description: "Domínio, embaixadinhas e toque de precisão.",
    icon: FootballIcon,
  },
  {
    number: "30",
    title: "Técnica e Fundamentos",
    description: "Saque, ataque e defesa adaptados pra qualquer espaço.",
    icon: Target,
  },
  {
    number: "30",
    title: "Agilidade e Reflexo",
    description: "Reação rápida pra chegar em toda bola.",
    icon: Zap,
  },
  {
    number: "32",
    title: "Resistência e Condicionamento",
    description: "Fôlego pra aguentar o jogo inteiro.",
    icon: Flame,
  },
  {
    number: "20",
    title: "Aquecimento e Mobilidade",
    description: "Prepara o corpo e evita lesão antes de qualquer treino.",
    icon: Heart,
  },
];

const audienceItems = [
  "Joga (ou quer começar a jogar) futevôlei e não tem areia por perto",
  "A rotina não fecha com o horário da quadra",
  "Quer chegar mais afiado tecnicamente pro próximo jogo",
  "Prefere treinar no próprio tempo e espaço",
  "Já treina, mas sente que falta constância",
  "Tá começando agora e quer construir base sem enrolação",
];

const benefits = [
  {
    title: "Sem equipamento",
    description: "Só você e uma bola. Nada de rede, colete ou acessório pra comprar.",
    icon: CheckCircle,
  },
  {
    title: "Direto ao ponto",
    description: "Cada treino mostra o que fazer, quantas vezes e por quanto tempo.",
    icon: Target,
  },
  {
    title: "No seu ritmo",
    description: "Acesso vitalício. Treine quando der, sem prazo pra terminar.",
    icon: Timer,
  },
  {
    title: "Do zero ao avançado",
    description: "Progressão pra quem tá começando evoluir e pra quem já joga destravar o nível.",
    icon: Trophy,
  },
];

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
];

const bonuses = [
  {
    number: "01",
    title: "Tabela de Evolução Semanal",
    description: "Acompanhe sua evolução treino a treino, semana a semana.",
    icon: Calendar,
  },
  {
    number: "02",
    title: "Aquecimento Expresso de 5 Minutos",
    description: "Pra ativar o corpo antes de qualquer treino, mesmo com pressa.",
    icon: Clock,
  },
  {
    number: "03",
    title: "Checklist Treino Relâmpago (15 min)",
    description: "Pros dias corridos, quando o tempo é curto mas a vontade não falta.",
    icon: ListChecks,
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
      "Acesso imediato assim que o pagamento é confirmado, direto no seu e-mail.",
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
      { title: "147 Treinos de Futevôlei em Casa | Evolua sem quadra" },
      {
        name: "description",
        content:
          "147 treinos de futevôlei prontos pra fazer em casa. Controle de bola, técnica, agilidade, resistência e mobilidade — sem quadra e sem equipamento. De R$97 por R$27.",
      },
      {
        property: "og:title",
        content: "147 Treinos de Futevôlei em Casa | Evolua sem quadra",
      },
      {
        property: "og:description",
        content:
          "Treinos prontos pra você evoluir no controle de bola, resistência e agilidade — sem quadra, sem equipamento e sem enrolação.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <FootballIcon className="h-5 w-5" />
            </div>
            <span className="font-heading text-lg font-bold tracking-tight">147 Treinos</span>
          </div>
          <CtaButton size="sm" className="hidden sm:flex">
            Garantir acesso
          </CtaButton>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="py-12 sm:py-20">
          <div className="flex flex-col items-center text-center">
            <SectionBadge icon={Sparkles}>Acesso imediato · De R$97 por R$27</SectionBadge>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-foreground">Treino em casa:</span>
              <br />
              <span className="text-primary">147 treinos de futevôlei</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Treinos prontos pra você evoluir no controle de bola, resistência e agilidade — sem
              quadra, sem equipamento e sem enrolação. É só abrir e começar a treinar hoje.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <CtaButton size="lg" className="px-8 py-6 text-lg">
                Quero garantir meu acesso
                <ArrowRight className="h-5 w-5" />
              </CtaButton>
              <div className="text-sm font-medium text-muted-foreground">
                <span className="block text-2xl font-bold text-accent">R$27</span>
                <span className="text-sm line-through">R$97</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <TrustBadge icon={CheckCircle} text="Acesso imediato" />
              <TrustBadge icon={Shield} text="Sem quadra necessária" />
              <TrustBadge icon={Shield} text="Garantia de 7 dias" />
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-2xl shadow-foreground/5">
            <img
              src={heroImage}
              alt="Atleta treinando futevôlei em casa na sala com uma bola"
              width={1024}
              height={768}
              className="w-full object-cover"
              loading="eager"
            />
          </div>
        </section>

        {/* Pra quem é */}
        <section className="py-16 sm:py-24">
          <div className="text-center">
            <SectionBadge icon={Target}>Pra quem é</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Feito pra quem quer evoluir sem depender da quadra
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {audienceItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* O que tem dentro */}
        <section className="py-16 sm:py-24">
          <div className="text-center">
            <SectionBadge icon={Dumbbell}>O que tem dentro</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              147 treinos divididos em 5 frentes de jogo
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainingCategories.map((category, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <category.icon className="h-5 w-5" />
                    </div>
                    <span className="font-heading text-4xl font-extrabold text-primary">
                      {category.number}
                    </span>
                  </div>
                  <CardTitle className="mt-4 font-heading text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Por que funciona */}
        <section className="py-16 sm:py-24">
          <div className="rounded-3xl bg-primary/5 px-6 py-12 sm:px-12 sm:py-16">
            <div className="text-center">
              <SectionBadge icon={Sparkles}>Por que funciona</SectionBadge>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Treino pensado pra encaixar na sua rotina, não o contrário
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold">{benefit.title}</h3>
                    <p className="mt-1 text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-16 sm:py-24">
          <div className="text-center">
            <SectionBadge icon={Heart}>Quem já treina assim</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Resultado de quem já treina com o guia
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {testimonials.map((t, index) => (
              <Card key={index} className="border-border bg-card shadow-sm">
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed text-foreground">"{t.text}"</p>
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
            ))}
          </div>
        </section>

        {/* Bônus */}
        <section className="py-16 sm:py-24">
          <div className="text-center">
            <SectionBadge icon={Sparkles}>Bônus inclusos</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Além dos 147 treinos, você também leva
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {bonuses.map((bonus, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-border bg-gradient-to-br from-card to-secondary/30 shadow-sm"
              >
                <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  Grátis
                </div>
                <CardHeader className="pb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <bonus.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-2 font-heading text-4xl font-extrabold text-primary/20">
                    {bonus.number}
                  </div>
                  <CardTitle className="font-heading text-xl">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{bonus.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Oferta */}
        <section id="oferta" className="py-16 sm:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-12 text-background shadow-2xl sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative text-center">
              <SectionBadge icon={Sparkles}>Oferta de lançamento</SectionBadge>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Tudo isso por um investimento simbólico
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-background/80">
                De{" "}
                <span className="text-lg line-through opacity-70">R$97</span>
                <span className="ml-2 font-heading text-5xl font-extrabold text-accent sm:text-6xl">
                  R$27
                </span>
                <br />
                <span className="text-base">à vista no Pix ou parcelado no cartão</span>
              </p>

              <div className="mt-8">
                <CtaButton size="lg" className="px-10 py-7 text-lg shadow-accent/30">
                  Quero garantir meu acesso
                  <ArrowRight className="h-5 w-5" />
                </CtaButton>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Shield className="h-4 w-4 text-accent" />
                <span>Garantia de 7 dias</span>
              </div>
              <p className="mt-2 text-sm text-background/70">
                Não gostou? Devolvemos 100% do seu dinheiro, sem perguntas.
              </p>

              <p className="mt-6 text-sm text-background/60">
                Pix · Cartão de crédito · Boleto — acesso liberado assim que o pagamento é confirmado
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24">
          <div className="text-center">
            <SectionBadge icon={Shield}>Dúvidas</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Perguntas frequentes
            </h2>
          </div>
          <div className="mt-10 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-heading text-base font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 sm:py-24">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Você pode continuar esperando a quadra abrir.
              <br />
              <span className="text-primary">Ou pode treinar hoje, na sala de casa.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              147 treinos de futevôlei em casa te esperam
            </p>
            <div className="mt-8">
              <CtaButton size="lg" className="px-10 py-7 text-lg">
                Quero garantir meu acesso
                <ArrowRight className="h-5 w-5" />
              </CtaButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <FootballIcon className="h-4 w-4" />
            </div>
            <span className="font-heading text-base font-bold">147 Treinos de Futevôlei em Casa</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Produto digital — guia em PDF de acesso imediato. 147 Treinos de Futevôlei em Casa.
          </p>
          <p className="mt-1 text-sm font-bold text-foreground">
            De R$97 por R$27
          </p>
          <div className="mt-4">
            <CtaButton size="sm">Garantir acesso</CtaButton>
          </div>
        </div>
      </footer>
    </div>
  );
}
