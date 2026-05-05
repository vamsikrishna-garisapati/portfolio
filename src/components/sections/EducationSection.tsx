"use client";

import { motion } from "motion/react";
import { education } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { revealTransition, revealUp } from "@/lib/motion";

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md"
    >
      <SectionHeading id="education-heading" eyebrow="06 — EDUCATION">
        Education
      </SectionHeading>

      <motion.div
        {...revealUp}
        transition={revealTransition}
        className="mt-10 flex flex-col gap-4 border border-[color:var(--border-subtle)] bg-[var(--background-elevated)] px-6 py-6 md:flex-row md:items-center md:justify-between md:gap-8 md:py-8"
      >
        <div className="min-w-0">
          <p className="font-serif-display text-2xl tracking-tight text-fg md:text-3xl">{education.school}</p>
          <p className="mt-2 text-[15px] font-medium text-fg">{education.degree}</p>
          <p className="mt-1 text-sm text-muted">{education.location}</p>
        </div>
        <p className="font-mono-ui shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted md:text-right">
          {education.range}
          {education.gpa ? ` · GPA ${education.gpa}` : ""}
        </p>
      </motion.div>
      <p className="mt-6 max-w-[62ch] text-[14px] leading-relaxed text-muted">
        Strong CS foundation — production depth is reflected in the sections above.
      </p>
    </section>
  );
}

