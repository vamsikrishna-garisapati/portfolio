"use client";

import { motion } from "motion/react";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { revealTransition, revealUp } from "@/lib/motion";

const groups = Object.entries(skills);

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md"
    >
      <SectionHeading id="skills-heading">Skills</SectionHeading>
      <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-muted">
        Full stack toolkit — frontend through APIs and data. Kept tight and resume-aligned.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {groups.map(([group, items], idx) => (
          <motion.div
            key={group}
            {...revealUp}
            transition={{ ...revealTransition, delay: idx * 0.04 }}
            className="rounded-2xl glass-panel p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-subtle bg-white/[0.02] px-2.5 py-1 text-[12px] font-medium text-muted transition-colors hover:border-[var(--accent)] hover:text-fg"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
