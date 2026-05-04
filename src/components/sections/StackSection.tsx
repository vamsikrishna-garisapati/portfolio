"use client";

import { motion } from "motion/react";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { revealTransition, revealUp } from "@/lib/motion";

export function StackSection({
  embedded = false,
  title = "Stack",
  description = "Scan-friendly index — same keywords as resume and ATS parsers.",
  eyebrow = "03 — STACK",
  headingId = "stack-heading",
}: {
  embedded?: boolean;
  title?: string;
  description?: string;
  eyebrow?: string;
  headingId?: string;
}) {
  const entries = Object.entries(skills);

  const inner = (
    <>
      <SectionHeading id={headingId} eyebrow={eyebrow}>
        {title}
      </SectionHeading>
      <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-muted">{description}</p>

      <motion.div
        {...revealUp}
        transition={revealTransition}
        className="mt-10 divide-y divide-[color:var(--border-subtle)] border border-[color:var(--border-subtle)] bg-[var(--background-elevated)] md:mt-12"
      >
        {entries.map(([label, items]) => (
          <div
            key={label}
            className="grid gap-2 px-4 py-4 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-8 sm:px-6 sm:py-5"
          >
            <p className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">{label}</p>
            <p className="text-[14px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_12%)] [text-wrap:pretty]">
              {items.join(" · ")}
            </p>
          </div>
        ))}
      </motion.div>
    </>
  );

  if (embedded) {
    return (
      <div aria-labelledby={headingId} className="py-10">
        {inner}
      </div>
    );
  }

  return (
    <section id="stack" aria-labelledby={headingId} className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md">
      {inner}
    </section>
  );
}
