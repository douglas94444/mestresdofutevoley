import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Dumbbell,
  Flame,
  Heart,
  ListChecks,
  Mail,
  MessageCircle,
  PlayCircle,
  Shield,
  Sparkles,
  Star,
  Target,
  Timer,
  Trophy,
  Zap,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CtaButton, FootballIcon, SectionBadge } from "@/components/landing/shared";
import { CountdownBoxes, UrgencyBar } from "@/components/landing/UrgencyBar";
import { TestimonialCarousel } from "@/components/landing/TestimonialCarousel";
import { WhatsappChats } from "@/components/landing/WhatsappChats";

import heroImage from "@/assets/hero-futevolei.jpg";
import bonusTabela from "@/assets/bonus-tabela.jpg";
import bonusAquecimento from "@/assets/bonus-aquecimento.jpg";
import bonusChecklist from "@/assets/bonus-checklist.jpg";

const includedItems = [
  "147 treinos completos de futevôlei pra fazer em casa",
  "35 treinos de controle de bola, domínio e embaixadinha",
  "30 treinos de técnica: saque, ataque e defesa",
  "30 treinos de agilidade e tempo de reação",
  "32 treinos de resistência e condicionamento",
  "20 treinos de aquecimento e mobilidade",
  "Progressão do zero ao avançado, sem pular etapa",
  "Séries, repetições e tempo indicados em cada treino",
  "Arquivo em PDF pronto pra usar no celular ou imprimir",
  "Acesso vitalício, sem mensalidade e sem prazo",
  "Bônus: tabela de evolução, aquecimento express e treino relâmpago",
];

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
    title: "Receba no e-mail",
    description: "O material chega no seu e-mail logo após a confirmação do pagamento.",
    icon: Mail,
  },
  {
    step: "PASSO 02",
    title: "Baixe o PDF",
    description: "Guia completo pra usar direto no celular, tablet ou impresso.",
    icon: Download,
  },
  {
    step: "PASSO 03",
    title: "Treine dia após dia",
    description: "Escolhe o treino do dia, abre e executa. Sem preparação nenhuma.",
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
    icon: Calendar,
  },
  {
    number: "02",
    title: "Aquecimento Expresso de 5 Minutos",
    description: "Pra ativar o corpo antes de qualquer treino, mesmo com pressa.",
    price: "R$47,00",
    image: bonusAquecimento,
    icon: Clock,
  },
  {
    number: "03",
    title: "Checklist Treino Relâmpago (15 min)",
    description: "Pros dias corridos, quando o tempo é curto mas a vontade não falta.",
    price: "R$27,00",
    image: bonusChecklist,
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
    answer: "Acesso imediato assim que o pagamento é confirmado, direto no seu e-mail.",
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
          "147 treinos de futevôlei prontos pra fazer em casa: controle de bola, técnica, agilidade, resistência e mobilidade. Sem quadra, sem equipamento. Acesso imediato por R$27.",
      },
      {
        property: "og:title",
        content: "147 Treinos de Futevôlei em Casa | De R$97 por R$27",
      },
      {
        property: "og:description",
        content:
          "Um guia completo com 147 treinos pra evoluir no futevôlei sem quadra e sem equipamento. Acesso imediato e garantia de 7 dias.",
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

      <main className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="py-10 sm:py-16">
          <div className="flex flex-col items-center text-center">
            <SectionBadge icon={Sparkles}>Treino em casa · Do zero ao avançado</SectionBadge>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-foreground">147 Treinos de</span>
              <br />
              <span className="text-primary">Futevôlei em Casa</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Treinos prontos pra você evoluir no <strong className="text-foreground">controle de bola</strong>,
              resistência e agilidade — sem quadra, sem equipamento e sem enrolação.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-2xl shadow-foreground/5">
            <img
              src={heroImage}
              alt="Atleta treinando futevôlei em casa na sala com uma bola"
              width={1024}
              height={768}
              className="w-full object-cover"
              loading="eager"
            />
          </div>

          <div className="mt-10 flex flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <span className="text-base text-muted-foreground line-through">R$97,00</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                −72%
              </span>
            </div>
            <p className="mt-2 font-heading text-6xl font-extrabold text-accent sm:text-7xl">
              R$27
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              pagamento único · acesso imediato
            </p>

            <div className="mt-8">
              <CtaButton size="lg" className="px-10 py-7 text-lg">
                Quero os 147 treinos
                <ArrowRight className="h-5 w-5" />
              </CtaButton>
            </div>

            <p className="mt-8 text-sm font-medium text-muted-foreground">Esta oferta acaba em</p>
            <div className="mt-3">
              <CountdownBoxes />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" /> 7 dias de garantia
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" /> Acesso imediato
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" /> Bônus incluso
              </span>
            </div>
          </div>
        </section>

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

        {/* O que você recebe */}
        <section className="py-14 sm:py-20">
          <div className="text-center">
            <SectionBadge icon={Dumbbell}>Conteúdo</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              O que você recebe
            </h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {includedItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Frentes de treino */}
        <section className="py-14 sm:py-20">
          <div className="text-center">
            <SectionBadge icon={Target}>Frentes de treino</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              147 treinos divididos em 5 frentes de jogo
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainingCategories.map((category) => (
              <Card
                key={category.title}
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {audienceItems.map((item) => (
              <div
                key={item}
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

        {/* Como funciona */}
        <section className="py-14 sm:py-20">
          <div className="text-center">
            <SectionBadge icon={Timer}>Passo a passo</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Como funciona o acesso
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.step} className="border-border bg-card shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="mt-3 text-xs font-bold uppercase tracking-wide text-accent">
                    {step.step}
                  </span>
                  <CardTitle className="font-heading text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
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

        {/* Bônus */}
        <section className="py-14 sm:py-20">
          <div className="text-center">
            <SectionBadge icon={Sparkles}>Bônus exclusivos</SectionBadge>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Comprando hoje, você ganha{" "}
              <span className="text-primary">R$111,00 em bônus</span>{" "}
              <span className="text-accent">GRÁTIS</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              3 materiais extras liberados junto com os 147 treinos — sem custo adicional.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {bonuses.map((bonus) => (
              <Card
                key={bonus.number}
                className="relative overflow-hidden border-border bg-card p-0 shadow-sm"
              >
                <div className="absolute right-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  GRÁTIS
                </div>
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <CardHeader className="pb-3">
                  <span className="text-xs font-bold uppercase tracking-wide text-primary">
                    Bônus #{bonus.number}
                  </span>
                  <CardTitle className="font-heading text-xl">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-base">{bonus.description}</CardDescription>
                  <p className="mt-4 text-sm">
                    <span className="text-muted-foreground line-through">{bonus.price}</span>{" "}
                    <span className="font-heading font-bold text-accent">GRÁTIS hoje</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Oferta */}
        <section id="oferta" className="py-14 sm:py-20">
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-12 text-background shadow-2xl sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-background/10 shadow-xl">
                <img
                  src={heroImage}
                  alt="Guia de 147 treinos de futevôlei em casa"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <SectionBadge icon={Flame}>Oferta de lançamento</SectionBadge>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  147 Treinos de Futevôlei em Casa
                </h2>
                <p className="mt-3 text-background/80">
                  Guia completo em PDF + 3 bônus, com acesso vitalício e liberação imediata.
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
                  Pix · Cartão de crédito · Boleto — acesso liberado após a confirmação
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

      {/* Footer */}
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
            Produto digital — guia em PDF de acesso imediato.
          </p>
          <p className="mt-1 text-sm font-bold text-foreground">De R$97 por R$27</p>
          <div className="mt-4">
            <CtaButton size="sm">Garantir acesso</CtaButton>
          </div>
        </div>
      </footer>
    </div>
  );
}
