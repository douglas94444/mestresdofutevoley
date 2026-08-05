import { Check } from "lucide-react";

const items = [
  {
    text: "Quem quer ",
    highlight: "evoluir no futevôlei",
    rest: " — sem depender de quadra e sem abrir mão da rotina.",
  },
  {
    text: "Quem mora longe da areia e precisa ",
    highlight: "treinar em casa",
    rest: " com método de verdade.",
  },
  {
    text: "Quem trabalha o dia todo e quer treinos de ",
    highlight: "15 a 40 minutos",
    rest: ".",
  },
  {
    text: "Quem está ",
    highlight: "cansado de improvisar",
    rest: " e quer saber exatamente o que fazer em cada sessão.",
  },
  {
    text: "Quem quer chegar no jogo com ",
    highlight: "controle, técnica e fôlego",
    rest: " — sem estagnação e sem desculpa.",
  },
];

export function OfertaForWho() {
  return (
    <section className="bg-primary/10 px-4 py-6 md:py-10">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border-2 border-primary/20 bg-card p-6 shadow-sm md:p-8">
          <h2 className="mb-6 flex items-center gap-2 font-heading text-2xl font-bold text-primary md:mb-8 md:text-3xl">
            <span className="rounded-lg bg-primary/10 p-1.5">
              <Check className="h-5 w-5 md:h-6 md:w-6" />
            </span>
            Para quem é
          </h2>
          <ul className="space-y-5 md:space-y-6">
            {items.map((item) => (
              <li key={item.highlight} className="flex items-start gap-3 md:gap-4">
                <span className="mt-0.5 shrink-0 rounded-full bg-primary/10 p-1.5">
                  <Check className="h-5 w-5 text-primary md:h-6 md:w-6" />
                </span>
                <span className="text-lg leading-relaxed text-foreground md:text-xl">
                  {item.text}
                  <strong className="text-accent">{item.highlight}</strong>
                  {item.rest}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
