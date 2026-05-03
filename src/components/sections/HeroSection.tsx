import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function HeroSection() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

  return (
    <section id="hero" className="relative scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent"
      />

      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          Recruiter-ready snapshot
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-12 md:gap-5">
          <div className="rounded-2xl border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_35%)] p-6 md:col-span-7 md:p-8">
            <h1 className="font-serif-display text-display-sm leading-[0.95] tracking-[-0.03em] text-fg">
              {siteConfig.name.split(" ").slice(0, 2).join(" ")}
              <br />
              {siteConfig.name.split(" ").slice(2).join(" ")}
            </h1>
            <p className="mt-4 text-[15px] font-semibold text-fg md:text-[16px]">
              {siteConfig.headline}
            </p>
            <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-muted">
              {siteConfig.positioningLine}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {siteConfig.stackChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-md border border-subtle bg-white/[0.02] px-2.5 py-1 text-[12px] font-medium text-muted"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={mailto}
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)]"
              >
                Email
              </a>
              <Link
                href="/projects"
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-stone-200 transition hover:border-white/25 hover:bg-white/[0.04]"
              >
                View projects
              </Link>
              <a
                href={siteConfig.resumePath}
                download={siteConfig.resumeFileName}
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-stone-200 transition hover:border-white/25 hover:bg-white/[0.04]"
              >
                Download resume
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring micro-link inline-flex min-h-11 items-center px-1.5 py-3 text-sm text-muted transition hover:text-fg"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:col-span-5 md:gap-5">
            <div className="rounded-2xl border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_45%)] p-6 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">Impact</p>
              <p className="mt-3 text-[15px] leading-relaxed text-stone-300">{siteConfig.proofMetric}</p>
            </div>

            <div className="rounded-2xl border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_45%)] p-6 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">Availability</p>
              <p className="mt-3 text-[15px] leading-relaxed text-stone-300">{siteConfig.openTo}</p>
              <p className="mt-3 text-sm text-stone-500">{siteConfig.locationLine}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
