import { useEffect, useRef, useState } from "react";
import { Lock, Sparkles, Unlock } from "lucide-react";

import { SectionBadge } from "@/components/landing/shared";

type Bonus = {
  number: string;
  title: string;
  description: string;
  price: string;
  image: string;
};

export function BonusUnlock({ bonuses }: { bonuses: Bonus[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setUnlocked(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 sm:py-20">
      <div className="text-center">
        <SectionBadge icon={Sparkles}>Bônus exclusivos</SectionBadge>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {unlocked ? (
            <>
              Liberando <span className="text-primary">R$111 em bônus</span>{" "}
              <span className="text-accent">agora</span>
            </>
          ) : (
            <>
              Comprando hoje, você ganha{" "}
              <span className="text-primary">R$111,00 em bônus</span>
            </>
          )}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          3 materiais extras liberados junto com o guia dos 147 treinos.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {bonuses.map((bonus, i) => (
          <div
            key={bonus.number}
            className={`group relative transition-all duration-500 ${
              unlocked
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-3 scale-[0.98] opacity-90"
            }`}
            style={{ transitionDelay: unlocked ? `${i * 120}ms` : "0ms" }}
          >
            <div
              className={`absolute right-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-bold shadow-sm transition-all duration-500 ${
                unlocked
                  ? "bg-accent text-accent-foreground"
                  : "bg-foreground text-background"
              }`}
            >
              {unlocked ? (
                <span className="inline-flex items-center gap-1">
                  <Unlock className="h-3 w-3" />
                  DESBLOQUEADO · GRÁTIS
                </span>
              ) : (
                <span className="inline-flex items-center gap-1">
                  <Lock className="h-3 w-3" />
                  BLOQUEADO
                </span>
              )}
            </div>

            <div
              className={`relative overflow-hidden rounded-xl border border-border bg-secondary/30 p-3 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 ${
                unlocked ? "" : "grayscale-[0.35]"
              }`}
            >
              {!unlocked && (
                <div className="absolute inset-0 z-[1] flex items-center justify-center bg-foreground/25 backdrop-blur-[1px]">
                  <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
                    Incluso na oferta
                  </span>
                </div>
              )}
              <img
                src={bonus.image}
                alt={`Mockup do bônus: ${bonus.title}`}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-primary">
              Bônus #{bonus.number}
            </p>
            <h3 className="mt-1 font-heading text-xl font-bold">{bonus.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{bonus.description}</p>
            <p className="mt-3 text-sm">
              <span className="text-muted-foreground line-through">{bonus.price}</span>{" "}
              <span className="font-heading font-bold text-accent">GRÁTIS hoje</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
