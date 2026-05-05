"use client";

import { motion } from "motion/react";
import { capabilityGroups } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { revealTransition, revealUp } from "@/lib/motion";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md"
    >
      <SectionHeading id="capabilities-heading" eyebrow="03 — DELIVERY">
        What I deliver
      </SectionHeading>
      <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-muted">
        Client outcomes, grouped by how hiring managers and founders actually search.
      </p>

      <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[color:var(--border-subtle)]">
        {capabilityGroups.map((group, i) => (
          <motion.div
            key={group.id}
            {...revealUp}
            transition={{ ...revealTransition, delay: i * 0.06 }}
            className="md:px-6 md:first:pl-0 md:last:pr-0"
          >
            <p className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">{group.eyebrow}</p>
            <h3 className="mt-4 font-serif-display text-xl tracking-tight text-fg md:text-2xl">{group.headline}</h3>
            <ul className="mt-6 space-y-4">
              {group.outcomes.map((line, j) => (
                <li key={line} className="flex gap-3 text-[14px] leading-relaxed text-muted">
                  <span className="font-mono-ui text-[11px] tabular-nums text-muted">{(j + 1).toString().padStart(2, "0")}</span>
                  <span className="[text-wrap:pretty]">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

