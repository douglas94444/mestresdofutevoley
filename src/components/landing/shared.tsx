import { Button } from "@/components/ui/button";

export const CTA_HREF = "/checkout";

export const FootballIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v4" />
    <path d="m4.93 4.93 2.83 2.83" />
    <path d="M2 12h4" />
    <path d="m4.93 19.07 2.83-2.83" />
    <path d="M12 22v-4" />
    <path d="m19.07 19.07-2.83-2.83" />
    <path d="M22 12h-4" />
    <path d="m19.07 4.93-2.83 2.83" />
    <polygon points="12 6 8 10 12 14 16 10" />
  </svg>
);

export const CtaButton = ({
  children,
  size = "lg",
  className = "",
}: {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}) => (
  <Button
    asChild
    size={size}
    className={`rounded-full bg-accent text-accent-foreground font-heading font-semibold shadow-lg shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-accent/30 hover:-translate-y-0.5 ${className}`}
  >
    <a href={CTA_HREF} className="gap-2">
      {children}
    </a>
  </Button>
);

export const SectionBadge = ({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: React.ElementType;
}) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
    {Icon && <Icon className="h-4 w-4 text-accent" />}
    {children}
  </span>
);
