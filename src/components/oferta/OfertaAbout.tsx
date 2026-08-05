import { CalendarCheck, Clock, Home, Sparkles, Wallet } from "lucide-react";

const highlights = [
  { icon: Home, title: "Sem precisar de quadra", subtitle: "Treina em qualquer espaço" },
  { icon: Sparkles, title: "Sem equipamento extra", subtitle: "Só uma bola basta" },
  { icon: CalendarCheck, title: "Sem improvisar", subtitle: "Treino pronto toda vez" },
  { icon: Wallet, title: "Sem mensalidade", subtitle: "Pagamento único" },
];

export function OfertaAbout() {
  return (
    <section className="bg-secondary/50 py-10 md:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-heading text-3xl leading-tight md:text-4xl lg:text-5xl">
          <span className="font-normal text-foreground">O que é o</span>
          <br />
          <span className="font-extrabold text-accent">Guia 147 Treinos?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground">
          É um material digital com{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text font-extrabold text-transparent">
            147 treinos de futevôlei
          </span>{" "}
          — cada um com nome, séries, tempo e progressão — feitos pra evoluir{" "}
          <strong>em casa</strong>, sem quadra e sem enrolação.
        </p>

        <p className="mt-4 font-heading text-lg font-bold uppercase tracking-wide text-primary md:text-xl">
          Une técnica + constância + progressão
        </p>

        <div className="mx-auto mt-8 w-full rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Clock className="h-5 w-5" />
          </div>
          <p className="mt-2 text-base leading-snug text-foreground">
            De 15 a 40 minutos por treino — encaixa na rotina e ainda sobra tempo pra viver.
          </p>
          <p className="mt-1 font-heading text-xl font-extrabold leading-tight text-accent">
            Progressão do zero ao avançado
          </p>
        </div>

        <div className="mx-auto mt-4 grid w-full grid-cols-2 gap-2 sm:max-w-3xl sm:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-card p-2.5 text-center shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium leading-snug text-foreground">{item.title}</span>
              <span className="text-sm font-extrabold leading-tight text-accent">{item.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
