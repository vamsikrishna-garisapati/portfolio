"use client";

import { motion, useReducedMotion } from "motion/react";
import { Mail, ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { heroContainer, heroItem } from "@/lib/motion";

export function HeroSection() {
  const reduce = useReducedMotion();
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

  const content = (
    <>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-subtle)] bg-[var(--background-elevated)] px-2.5 py-1 font-mono-ui text-[9px] font-semibold uppercase tracking-[0.18em] text-muted sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.2em]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-[color:var(--accent)] bg-[var(--accent)]" aria-hidden />
          Available — freelance + full-time
        </span>
      </div>
      <h1 className="font-serif-display mt-4 max-w-[18ch] text-[clamp(2.5rem,10vw,6.25rem)] font-normal leading-[0.88] tracking-[-0.04em] text-fg sm:mt-6 sm:leading-[0.9] md:mt-10 md:leading-[0.92]">
        Vamsi Krishna
      </h1>
      <p className="mt-2 font-serif-display text-base italic leading-snug text-muted sm:mt-3 sm:text-lg md:text-xl">
        {siteConfig.locationLine}
      </p>
      <p className="mt-5 max-w-[52ch] text-body-xl font-medium leading-snug text-[color:color-mix(in_oklab,var(--foreground),transparent_12%)] sm:mt-6 sm:leading-relaxed md:mt-8">
        <span className="text-fg">{siteConfig.headline}</span> — {siteConfig.positioningLine}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 md:mt-10">
        <a
          href={mailto}
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)] md:min-h-12 md:px-7 md:py-3.5"
        >
          <Mail className="h-4 w-4 shrink-0" aria-hidden />
          Hire me
        </a>
        <a
          href="#work"
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[color:var(--border-subtle)] bg-transparent px-5 py-3 text-sm font-semibold text-fg transition hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_94%)] dark:hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_92%)] md:min-h-12 md:px-7 md:py-3.5"
        >
          View work
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
        </a>
        <a
          href={siteConfig.resumePath}
          download={siteConfig.resumeFileName}
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[color:var(--border-subtle)] px-5 py-3 text-sm font-semibold text-fg transition hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_94%)] dark:hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_92%)] md:min-h-12 md:px-7 md:py-3.5"
        >
          <Download className="h-4 w-4 shrink-0" aria-hidden />
          Resume
        </a>
      </div>
    </>
  );

  if (reduce) {
    return (
      <section
        id="hero"
        className="relative flex min-h-0 flex-col justify-start overflow-hidden border-b border-[color:var(--border-subtle)] py-8 text-left sm:py-12 md:min-h-[88vh] md:justify-center md:py-20"
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-10">{content}</div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-0 flex-col justify-start overflow-hidden border-b border-[color:var(--border-subtle)] py-8 text-left sm:py-12 md:min-h-[88vh] md:justify-center md:py-20"
    >
      <motion.div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-10" variants={heroContainer} initial="hidden" animate="visible">
        <motion.div variants={heroItem}>{content}</motion.div>
      </motion.div>
    </section>
  );
}

