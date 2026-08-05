import { Flame } from "lucide-react";

import { useCountdown } from "@/hooks/use-countdown";
import { useLaunchSpots } from "@/hooks/use-launch-spots";

export function UrgencyBar() {
  const { hours, minutes, seconds } = useCountdown();
  const { spots } = useLaunchSpots();

  return (
    <div className="w-full bg-foreground py-2 text-background">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 text-center text-xs font-medium sm:text-sm">
        <span className="inline-flex items-center gap-1.5">
          <Flame className="h-4 w-4 text-accent" />
          Oferta de lançamento acaba em
        </span>
        <span className="font-heading font-bold tabular-nums text-accent">
          {hours}:{minutes}:{seconds}
        </span>
        <span className="opacity-80">· De R$97 por R$27</span>
        <span className="font-semibold text-accent">
          · Só restam {spots} vagas
        </span>
      </div>
    </div>
  );
}

export function CountdownBoxes() {
  const { hours, minutes, seconds } = useCountdown();

  const items = [
    { value: hours, label: "Horas" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Seg" },
  ];

  return (
    <div className="flex items-end justify-center gap-2">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-end gap-2">
          <div className="flex w-16 flex-col items-center rounded-2xl border border-border bg-card px-2 py-3 shadow-sm">
            <span className="font-heading text-2xl font-extrabold tabular-nums text-foreground">
              {item.value}
            </span>
            <span className="text-[11px] uppercase tracking-wide text-muted-foreground">
              {item.label}
            </span>
          </div>
          {index < items.length - 1 && (
            <span className="pb-4 font-heading text-xl font-bold text-muted-foreground">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
