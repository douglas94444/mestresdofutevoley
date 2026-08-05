/**
 * Full-bleed impact strip — modeled after high-conversion reference banners.
 * Uses project accent (âmbar) + Outfit heading.
 */
export function ImpactBanner() {
  return (
    <section
      aria-label="Ideal para quem não pode perder tempo"
      className="w-full bg-accent px-6 py-10 text-accent-foreground sm:py-12"
    >
      <p className="mx-auto max-w-5xl text-center font-heading text-[1.65rem] font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-[2.75rem]">
        Ideal para quem não pode
        <br />
        perder tempo!
      </p>
    </section>
  );
}
