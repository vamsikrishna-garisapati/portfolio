import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { StackSection } from "@/components/sections/StackSection";
import { siteConfig, experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Vamsi Krishna Garisapati",
  description:
    "About Vamsi Krishna Garisapati: full-stack engineer shipping Python APIs (FastAPI, Django REST), Postgres/Supabase, and high-performance Next.js/TypeScript frontends.",
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] selection:bg-[color:color-mix(in_oklab,var(--foreground),transparent_88%)] selection:text-[var(--foreground)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full min-w-0 max-w-[1000px] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-10 md:px-10"
      >
        <header className="border-b border-[color:var(--border-subtle)] pb-10">
          <p className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">About</p>
          <h1 className="font-serif-display mt-4 text-display-sm leading-[0.95] tracking-[-0.03em] text-fg">{siteConfig.name}</h1>
          <p className="about-drop-cap mt-6 max-w-[75ch] text-[16px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_12%)]">
            I build production systems end-to-end: REST APIs and backends (FastAPI, Django REST), Postgres/Supabase, auth and data isolation
            — plus Next.js App Router and TypeScript frontends, payments integrations, and performance work (Core Web Vitals).
          </p>
        </header>

        <section aria-labelledby="what-heading" className="py-10">
          <h2 id="what-heading" className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            What I do
          </h2>
          <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_12%)]">
            <li className="flex gap-3 [text-wrap:pretty]">
              <span className="font-mono-ui text-[11px] tabular-nums text-muted">01</span>
              <span>Ship recruiter-visible work: live URLs, measurable impact, and clean UX.</span>
            </li>
            <li className="flex gap-3 [text-wrap:pretty]">
              <span className="font-mono-ui text-[11px] tabular-nums text-muted">02</span>
              <span>
                Own full stack delivery: backend/API design, validation and service boundaries, auth, payments, and data isolation (RLS) — plus UI when it ships in the same scope.
              </span>
            </li>
            <li className="flex gap-3 [text-wrap:pretty]">
              <span className="font-mono-ui text-[11px] tabular-nums text-muted">03</span>
              <span>Prioritize performance and accessibility: Core Web Vitals, semantic HTML, contrast, and keyboard UX.</span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="experience-about-heading" className="border-t border-[color:var(--border-subtle)] py-10">
          <h2 id="experience-about-heading" className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            Experience (most recent)
          </h2>
          <div className="mt-6 grid gap-8 border border-[color:var(--border-subtle)] bg-[var(--background-elevated)] p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.65fr)] md:gap-14 md:p-8">
            <div className="space-y-1.5 border-b border-[color:var(--border-subtle)] pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6">
              <p className="font-serif-display text-3xl tracking-tight text-fg md:text-4xl">{experience.company}</p>
              <p className="text-[15px] font-medium text-fg">{experience.role}</p>
              <p className="text-sm text-muted">{experience.location}</p>
              <p className="mt-2 font-mono-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{experience.range}</p>
            </div>
            <ul className="space-y-4">
              {experience.bullets.map((bullet, i) => (
                <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-muted [text-wrap:pretty]">
                  <span className="font-mono-ui mt-0.5 text-[11px] tabular-nums text-muted">{(i + 1).toString().padStart(2, "0")}</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <StackSection
          embedded
          title="Keywords recruiters search"
          description="A quick, scannable list that matches my resume (helps both humans and ATS)."
          eyebrow="KEYWORDS (ATS)"
          headingId="keywords-heading"
        />
      </main>
      <Footer />
    </div>
  );
}

