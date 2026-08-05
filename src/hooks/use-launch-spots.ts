import { useEffect, useState } from "react";

const STORAGE_KEY = "launch-spots-remaining";
const FLOOR = 3;
const MIN_START = 17;
const MAX_START = 23;

function randomBetween(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function readSpots(): number {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  const n = Number(raw);
  if (!raw || Number.isNaN(n) || n < FLOOR || n > MAX_START) {
    const start = randomBetween(MIN_START, MAX_START);
    window.localStorage.setItem(STORAGE_KEY, String(start));
    return start;
  }
  return n;
}

/**
 * Simulated launch scarcity for conversion UI (not real inventory).
 * Starts 17–23, drops by 1 every 45–90s while the tab is open, floors at 3.
 */
export function useLaunchSpots() {
  const [spots, setSpots] = useState<number | null>(null);

  useEffect(() => {
    setSpots(readSpots());

    let timeoutId = 0;

    const scheduleDrop = () => {
      const delay = randomBetween(45_000, 90_000);
      timeoutId = window.setTimeout(() => {
        setSpots((prev) => {
          const current = prev ?? readSpots();
          const next = Math.max(FLOOR, current - 1);
          window.localStorage.setItem(STORAGE_KEY, String(next));
          return next;
        });
        scheduleDrop();
      }, delay);
    };

    scheduleDrop();
    return () => window.clearTimeout(timeoutId);
  }, []);

  return {
    spots: spots ?? MAX_START,
    ready: spots !== null,
  };
}
