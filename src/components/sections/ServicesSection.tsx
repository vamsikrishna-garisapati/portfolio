"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { services, siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { revealTransition, revealUp } from "@/lib/motion";

export function ServicesSection() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionHeading id="services-heading">Work with me</SectionHeading>
          <p className="mt-4 max-w-[68ch] text-[15px] leading-relaxed text-muted">
            Recruiter-ready engineering, client-friendly delivery. Full stack: APIs and data (Python, REST, Postgres)
            as well as fast, accessible Next.js/React UI — clean architecture on both sides.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={mailto}
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-foreground)] shadow-sm transition hover:bg-[var(--accent-hover)] hover:-translate-y-0.5"
          >
            Start a project
          </a>
          <Link
            href="/contact"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-subtle bg-transparent px-5 py-3 text-sm font-semibold text-fg transition hover:bg-black/5 dark:hover:bg-white/[0.04] hover:-translate-y-0.5"
          >
            Contact details
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            {...revealUp}
            transition={{ ...revealTransition, delay: idx * 0.04 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl glass-panel p-5 md:mt-12 md:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Good fit for</p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          Landing pages, business websites, dashboards, SaaS UI, portfolio sites, Next.js App Router builds, REST APIs
          and backend features (FastAPI / Django REST), bug fixes, maintenance, performance cleanups, and SEO fixes.
        </p>
      </div>
    </section>
  );
}
