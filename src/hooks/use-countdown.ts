import { useEffect, useState } from "react";

const STORAGE_KEY = "oferta-deadline";
const DURATION_MS = 24 * 60 * 60 * 1000;

export type Countdown = {
  hours: string;
  minutes: string;
  seconds: string;
  ready: boolean;
};

const pad = (n: number) => String(Math.max(0, n)).padStart(2, "0");

export function useCountdown(): Countdown {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    let deadline = Number(window.localStorage.getItem(STORAGE_KEY));
    if (!deadline || Number.isNaN(deadline) || deadline < Date.now()) {
      deadline = Date.now() + DURATION_MS;
      window.localStorage.setItem(STORAGE_KEY, String(deadline));
    }

    const tick = () => setRemaining(Math.max(0, deadline - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const value = remaining ?? DURATION_MS;
  const totalSeconds = Math.floor(value / 1000);

  return {
    hours: pad(Math.floor(totalSeconds / 3600)),
    minutes: pad(Math.floor((totalSeconds % 3600) / 60)),
    seconds: pad(totalSeconds % 60),
    ready: remaining !== null,
  };
}
