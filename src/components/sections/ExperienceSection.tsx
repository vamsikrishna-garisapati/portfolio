"use client";

import { motion } from "motion/react";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { revealTransition, revealUp } from "@/lib/motion";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md"
    >
      <SectionHeading id="experience-heading">Experience</SectionHeading>
      <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-muted">
        Recent role — outcomes and shipped work.
      </p>

      <motion.div
        {...revealUp}
        transition={revealTransition}
        className="mt-10 grid gap-8 rounded-2xl glass-panel p-6 transition-all duration-300 hover:shadow-lg md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.65fr)] lg:gap-14"
      >
        <div className="space-y-1.5 border-b border-subtle pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
          <p className="font-serif-display text-3xl tracking-tight text-fg md:text-4xl">{experience.company}</p>
          <p className="text-[15px] font-medium text-fg">{experience.role}</p>
          <p className="text-sm text-muted">{experience.location}</p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{experience.range}</p>
        </div>

        <ul className="space-y-4 text-[15px] leading-relaxed text-muted">
          {experience.bullets.map((bullet) => (
            <li key={bullet} className="border-l-2 border-subtle pl-5 [text-wrap:pretty]">
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
