import { Shield } from "lucide-react";

export function OfertaGuarantee() {
  return (
    <section id="guarantee-section" className="bg-background px-4 py-6 md:py-10">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex flex-col items-center rounded-3xl border border-border bg-card px-4 py-8 shadow-sm md:px-8">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Shield className="h-10 w-10" />
          </div>
          <h2 className="mb-4 font-heading text-3xl font-extrabold uppercase leading-tight tracking-wide text-foreground md:text-4xl">
            7 dias para
            <br />
            <span className="text-accent">testar sem risco!</span>
          </h2>
          <p className="mx-auto mb-3 max-w-xl text-lg leading-relaxed text-foreground md:text-xl">
            Você tem uma semana inteira pra explorar o guia e colocar os treinos em prática.
          </p>
          <p className="mx-auto mb-3 max-w-xl text-lg leading-relaxed text-foreground md:text-xl">
            Na pior das hipóteses? Você descobre algo novo e pede reembolso sem burocracia.
          </p>
          <p className="mx-auto max-w-xl text-lg font-semibold leading-relaxed text-foreground md:text-xl">
            <span className="text-primary">Na melhor?</span>
            <br />
            Seu jogo muda pra sempre!
          </p>
        </div>
      </div>
    </section>
  );
}
