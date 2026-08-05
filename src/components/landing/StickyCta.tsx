import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { CTA_HREF } from "@/components/landing/shared";
import { useLaunchSpots } from "@/hooks/use-launch-spots";

export function StickyCta() {
  const [show, setShow] = useState(false);
  const { spots } = useLaunchSpots();

  useEffect(() => {
    const onScroll = () => {
      const scrolled =
        window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setShow(scrolled > 0.4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-5xl items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="font-heading text-lg font-extrabold text-accent">R$27</p>
          <p className="truncate text-xs text-muted-foreground">
            Restam {spots} vagas · acesso imediato
          </p>
        </div>
        <a
          href={CTA_HREF}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-5 py-3 font-heading text-sm font-bold text-accent-foreground shadow-md shadow-accent/25"
        >
          Garantir meu acesso
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
