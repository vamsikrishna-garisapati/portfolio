import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { siteConfig, experience, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Vamsi Krishna Garisapati",
  description:
    "About Vamsi Krishna Garisapati: Full Stack Developer — Python APIs (FastAPI, Django REST), Postgres/Supabase, plus Next.js App Router, TypeScript, performance, and clean UX.",
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] selection:bg-black/10 selection:text-[var(--foreground)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full min-w-0 max-w-[1000px] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-10 md:px-10"
      >
        <header className="border-b border-subtle pb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">About</p>
          <h1 className="mt-4 font-serif-display text-display-sm leading-[0.95] tracking-[-0.03em] text-fg">
            {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-[75ch] text-[16px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)]">
            I build production systems end-to-end: REST APIs and backends (FastAPI, Django REST), Postgres/Supabase,
            auth and data isolation — plus Next.js App Router and TypeScript frontends, payments integrations, and
            performance work (Core Web Vitals).
          </p>
        </header>

        <section aria-labelledby="what" className="py-10">
          <h2 id="what" className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            What I Do
          </h2>
          <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)]">
            <li className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--foreground),transparent_55%)]" aria-hidden />
              <span>Ship recruiter-visible work: live URLs, measurable impact, and clean UX.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--foreground),transparent_55%)]" aria-hidden />
              <span>
                Own full stack delivery: backend/API design, validation and service boundaries, auth, payments, and data
                isolation (RLS) — plus UI when it ships in the same scope.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--foreground),transparent_55%)]" aria-hidden />
              <span>Prioritize performance and accessibility: Core Web Vitals, semantic HTML, contrast, and keyboard UX.</span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="experience" className="border-t border-subtle py-10">
          <h2 id="experience" className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Experience (Most Recent)
          </h2>
          <div className="mt-6 rounded-2xl border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_35%)] p-6">
            <p className="font-serif-display text-2xl tracking-tight text-fg">{experience.company}</p>
            <p className="mt-2 text-[15px] text-muted">
              {experience.role} {"\u00b7"} {experience.location} {"\u00b7"} {experience.range}
            </p>
            <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)]">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--foreground),transparent_55%)]" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="keywords" className="border-t border-subtle py-10">
          <h2 id="keywords" className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            ATS Keywords
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Natural keywords for ATS parsing (also matches resume content).
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div
                key={group}
                className="rounded-2xl border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_35%)] p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{group}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
