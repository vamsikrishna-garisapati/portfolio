import type { Service } from "@/types/portfolio";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="relative overflow-hidden rounded-2xl glass-panel p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 to-transparent dark:from-white/[0.04]" />

      <div className="relative">
        <h3 className="font-serif-display text-2xl tracking-tight text-fg">{service.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.summary}</p>

        <div className="mt-5 space-y-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Outcomes</p>
            <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)]">
              {service.outcomes.slice(0, 3).map((outcome) => (
                <li key={outcome} className="flex gap-2.5">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--foreground),transparent_55%)]"
                    aria-hidden
                  />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Deliverables</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.deliverables.slice(0, 4).map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-subtle bg-white/[0.02] px-2.5 py-1 text-[12px] font-medium text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
