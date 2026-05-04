import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AboutTeaserSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionHeading id="about-heading">About</SectionHeading>
          <p className="mt-4 max-w-[70ch] text-[15px] leading-relaxed text-muted">{siteConfig.aboutTeaser}</p>
          <p className="mt-3 max-w-[70ch] text-[14px] leading-relaxed text-muted/90">
            <span className="font-semibold text-muted">Roles: </span>
            {siteConfig.targetRoles.join(" · ")}
          </p>
        </div>
        <Link
          href="/about"
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-subtle bg-transparent px-5 py-3 text-sm font-semibold text-fg transition hover:bg-black/5 dark:hover:bg-white/[0.04]"
        >
          Read more
        </Link>
      </div>

      <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
        {[
          {
            label: "Strengths",
            value:
              "API design and data boundaries, auth/RBAC patterns, service performance — plus component architecture, Core Web Vitals, accessibility, and clean UX.",
          },
          {
            label: "Stacks",
            value:
              "Next.js App Router, TypeScript, React, Tailwind CSS, FastAPI, Django REST, REST APIs, Postgres/Supabase, Redis.",
          },
          {
            label: "Proof",
            value: "Live products + production experience; impact measured via performance and shipped features.",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl glass-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-6"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{item.label}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
