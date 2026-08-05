import { useEffect, useState } from "react";
import { Users } from "lucide-react";

import {
  buildSocialFeed,
  formatSocialLine,
  getAccessesLiberatedToday,
} from "@/lib/social-proof";

export function SocialProofTicker() {
  const feed = buildSocialFeed();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [accesses, setAccesses] = useState(48);

  useEffect(() => {
    setAccesses(getAccessesLiberatedToday());
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % feed.length);
        setVisible(true);
      }, 280);
    }, 4000);
    return () => window.clearInterval(id);
  }, [feed.length]);

  const current = feed[index];
  if (!current) return null;

  return (
    <div className="border-b border-border bg-primary/5">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-3 text-center text-sm sm:flex-row sm:text-left">
        <p
          className={`font-medium text-foreground transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {formatSocialLine(current)}
        </p>
        <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary sm:text-sm">
          <Users className="h-3.5 w-3.5" />+{accesses} acessos liberados hoje
        </p>
      </div>
    </div>
  );
}
