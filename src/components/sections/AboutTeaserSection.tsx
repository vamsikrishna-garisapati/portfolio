"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/lib/data";
import { revealTransition, revealUp } from "@/lib/motion";

export function AboutTeaserSection() {
  return (
    <section
      id="about-teaser"
      aria-labelledby="about-teaser-heading"
      className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md"
    >
      <SectionHeading id="about-teaser-heading" eyebrow="05 — ABOUT">
        About (quick)
      </SectionHeading>
      <p className="mt-4 max-w-[68ch] text-[15px] leading-relaxed text-muted [text-wrap:pretty]">{siteConfig.aboutTeaser}</p>
      <p className="mt-6 max-w-[68ch] text-[14px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)] [text-wrap:pretty]">
        Proof: {siteConfig.proofMetric}
      </p>

      <motion.div {...revealUp} transition={revealTransition} className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          Target roles: {siteConfig.targetRoles.join(" · ")}
        </p>
        <Link
          href="/about"
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-[color:var(--border-subtle)] bg-transparent px-6 py-3 text-sm font-semibold text-fg transition hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_94%)] dark:hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_92%)]"
        >
          Read full story
        </Link>
      </motion.div>
    </section>
  );
}
