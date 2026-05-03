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
      <SectionHeading id="education-heading">Education</SectionHeading>
      <motion.div
        {...revealUp}
        transition={revealTransition}
        className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1.8fr] lg:gap-12"
      >
        <div className="space-y-1.5">
          <p className="font-serif-display text-3xl tracking-tight text-fg md:text-4xl">{education.school}</p>
          <p className="text-[15px] text-fg">{education.degree}</p>
          <p className="text-sm text-muted">{education.location}</p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            {education.range} · GPA {education.gpa}
          </p>
        </div>
        <p className="max-w-[62ch] text-[15px] leading-relaxed text-muted">
          Strong CS foundation; the sections above reflect what I ship in production.
        </p>
      </motion.div>
    </section>
  );
}
