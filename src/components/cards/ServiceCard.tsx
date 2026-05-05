import type { Service } from "@/types/portfolio";

export function ServiceCard({ service }: { service: Service }) {
  const outcomeLine = service.outcomes.slice(0, 3).join(" ");
  const deliverablesLine = service.deliverables.slice(0, 4).join(" | ");

  return (
    <article className="relative overflow-hidden rounded-2xl glass-panel p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 to-transparent dark:from-white/[0.04]" />

      <div className="relative">
        <h3 className="font-serif-display text-2xl tracking-tight text-fg">{service.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.summary}</p>

        <p className="mt-4 text-[14px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)] [text-wrap:pretty]">
          {outcomeLine}
        </p>

        <p className="mt-5 font-mono-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          → {deliverablesLine}
        </p>
      </div>
    </article>
  );
}
