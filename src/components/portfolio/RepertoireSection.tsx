"use client";

import { motion } from "motion/react";
import { skills } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";
import { revealTransition, revealUp } from "./motion";

const repertoireColumns = Object.entries(skills);

export function RepertoireSection() {
  return (
    <section
      id="repertoire"
      aria-labelledby="repertoire-heading"
      className="border-b border-white/10 py-space-md"
    >
      <SectionHeading id="repertoire-heading">Repertoire</SectionHeading>
      <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {repertoireColumns.map(([group, items], idx) => (
          <motion.div
            key={group}
            {...revealUp}
            transition={{ ...revealTransition, delay: idx * 0.07 }}
            className="border-t border-white/15 pt-4"
          >
            <h3 className="mb-4 text-sm font-normal uppercase tracking-[0.18em] text-stone-500">
              {group}
            </h3>
            <ul className="space-y-2 text-stone-300">
              {items.map((item) => (
                <li key={item} className="text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
