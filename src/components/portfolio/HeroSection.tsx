"use client";

import { motion } from "motion/react";
import { revealTransition, revealUp } from "./motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="grid min-h-[88dvh] items-end border-b border-white/10 pb-10 pt-6 sm:min-h-[90dvh] sm:pb-12 sm:pt-8 lg:min-h-[92vh] lg:pb-16"
    >
      <motion.div {...revealUp} transition={revealTransition}>
        <h1 className="font-serif-display text-display-hero leading-[0.9] tracking-[-0.03em] text-stone-100">
          Vamsi
          <br />
          Krishna.
        </h1>
        <p className="mt-6 max-w-3xl text-body-lg leading-relaxed text-stone-300 md:mt-8">
          Full Stack Software Engineer. Building scalable web applications across frontend, backend,
          cloud, and deployment with precision and intent.
        </p>
      </motion.div>
      <motion.ul
        {...revealUp}
        transition={{ ...revealTransition, delay: 0.15 }}
        className="mt-12 grid gap-5 border-t border-white/10 py-6 text-sm text-stone-400 md:mt-14 md:grid-cols-3 md:gap-6 md:py-7"
      >
        <li>Based in Hyderabad, India.</li>
        <li>Built for 5,000+ students and 100+ mentors.</li>
        <li>Shipping production-grade systems with measurable impact.</li>
      </motion.ul>
    </section>
  );
}
