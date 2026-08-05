import pdfCover from "@/assets/pdf-cover.jpg";
import pdfPageTreino from "@/assets/pdf-page-treino.jpg";
import pdfPageIndice from "@/assets/pdf-page-indice.jpg";

type PdfStackProps = {
  size?: "hero" | "offer" | "compact";
  className?: string;
};

const sizeMap = {
  hero: {
    wrap: "h-[340px] w-[260px] sm:h-[420px] sm:w-[320px] md:h-[480px] md:w-[360px]",
    page: "w-[78%]",
  },
  offer: {
    wrap: "h-[300px] w-[230px] sm:h-[360px] sm:w-[280px]",
    page: "w-[78%]",
  },
  compact: {
    wrap: "h-[140px] w-[110px]",
    page: "w-[80%]",
  },
} as const;

export function PdfStack({ size = "hero", className = "" }: PdfStackProps) {
  const s = sizeMap[size];

  return (
    <div
      className={`relative mx-auto ${s.wrap} ${className}`}
      aria-label="Prévia do guia"
    >
      <div
        className={`absolute left-[4%] top-[8%] ${s.page} rotate-[-8deg] overflow-hidden rounded-md border border-border bg-card shadow-md transition-transform duration-500 ease-out hover:-translate-y-1 hover:rotate-[-10deg]`}
      >
        <img
          src={pdfPageIndice}
          alt="Índice das 5 frentes de treino no guia"
          width={768}
          height={1024}
          className="aspect-[3/4] w-full object-cover"
          loading={size === "hero" ? "eager" : "lazy"}
        />
      </div>
      <div
        className={`absolute right-[2%] top-[4%] ${s.page} rotate-[7deg] overflow-hidden rounded-md border border-border bg-card shadow-md transition-transform duration-500 ease-out hover:-translate-y-1 hover:rotate-[9deg]`}
      >
        <img
          src={pdfPageTreino}
          alt="Página de treino Embaixadinha Progressiva"
          width={768}
          height={1024}
          className="aspect-[3/4] w-full object-cover"
          loading={size === "hero" ? "eager" : "lazy"}
        />
      </div>
      <div
        className={`absolute left-1/2 top-0 z-10 w-[82%] -translate-x-1/2 overflow-hidden rounded-md border border-border bg-card shadow-xl transition-transform duration-500 ease-out animate-in fade-in slide-in-from-bottom-4 ${size === "hero" ? "duration-700" : ""} hover:-translate-y-1.5`}
      >
        <img
          src={pdfCover}
          alt="Capa do guia 147 Treinos de Futevôlei em Casa"
          width={768}
          height={1024}
          className="aspect-[3/4] w-full object-cover"
          loading={size === "hero" ? "eager" : "lazy"}
        />
      </div>
    </div>
  );
}

export { pdfCover, pdfPageTreino, pdfPageIndice };
