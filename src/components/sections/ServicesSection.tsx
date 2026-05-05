"use client";

import { motion } from "motion/react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { revealTransition, revealUp } from "@/lib/motion";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md"
    >
      <SectionHeading id="services-heading" eyebrow="02 — SERVICES">
        Services — what I build
      </SectionHeading>
      <p className="mt-4 max-w-[64ch] text-[15px] leading-relaxed text-muted">
        Freelance-ready offerings, scoped for clear outcomes. If you’re unsure which fits, email me with your timeline and a link.
      </p>

      <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            {...revealUp}
            transition={{ ...revealTransition, delay: index * 0.06 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center md:mt-12">
        <a
          href="#contact"
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)]"
        >
          Hire me for a project
        </a>
      </div>
    </section>
  );
}

