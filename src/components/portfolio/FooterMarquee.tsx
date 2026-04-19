"use client";

import { motion, useReducedMotion } from "motion/react";

export function FooterMarquee() {
  const reduceMotion = useReducedMotion();
  const phrase = "LET'S BUILD SOMETHING - ";
  const marqueeChunk = phrase.repeat(6).trim();

  return (
    <footer className="overflow-hidden border-t border-white/10 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:py-8 md:pb-[max(2rem,env(safe-area-inset-bottom))]">
      <motion.div
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={reduceMotion ? undefined : { repeat: Infinity, duration: 18, ease: "linear" }}
        className="flex whitespace-nowrap font-serif-display text-4xl tracking-tight text-stone-200 md:text-6xl"
      >
        <span aria-hidden className="inline-block">{marqueeChunk}</span>
        <span aria-hidden className="inline-block">{marqueeChunk}</span>
      </motion.div>
      <p className="mx-auto mt-6 w-full max-w-[1400px] px-6 text-sm text-stone-500 md:mt-8 md:px-10">
        Vamsi Krishna © 2026. All rights reserved.
      </p>
    </footer>
  );
}
