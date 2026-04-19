"use client";

import { motion } from "motion/react";
import { experience } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";
import { revealTransition, revealUp } from "./motion";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-white/10 py-space-md"
    >
      <SectionHeading id="experience-heading">Experience</SectionHeading>
      <motion.div
        {...revealUp}
        transition={revealTransition}
        className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1.9fr]"
      >
        <div className="space-y-2">
          <p className="font-serif-display text-4xl tracking-tight">{experience.company}</p>
          <p className="text-stone-300">{experience.role}</p>
          <p className="text-stone-500">{experience.location}</p>
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{experience.range}</p>
        </div>
        <ul className="space-y-4 text-stone-300">
          {experience.bullets.map((bullet) => (
            <li key={bullet}>- {bullet}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
