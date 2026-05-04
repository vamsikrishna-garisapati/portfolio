"use client";

import { motion, useReducedMotion } from "motion/react";
import { revealTransition, revealUp } from "@/lib/motion";

export function SectionHeading({
  children,
  id,
  eyebrow,
}: {
  children: string;
  id?: string;
  eyebrow?: string;
}) {
  const reduce = useReducedMotion();
  const h2Class = `${eyebrow ? "mt-1" : "mt-0"} font-serif-display text-display-sm tracking-tight text-fg`;

  if (reduce) {
    return (
      <div className="min-w-0">
        {eyebrow ? (
          <p className="section-heading-sticky eyebrow font-mono-ui border-b border-[color:var(--border-subtle)] pb-2" aria-hidden>
            {eyebrow}
          </p>
        ) : null}
        <h2 id={id} className={h2Class}>
          {children}
        </h2>
      </div>
    );
  }

  return (
    <div className="min-w-0">
      {eyebrow ? (
        <p className="section-heading-sticky eyebrow font-mono-ui border-b border-[color:var(--border-subtle)] pb-2" aria-hidden>
          {eyebrow}
        </p>
      ) : null}
      <motion.h2 id={id} {...revealUp} transition={revealTransition} className={h2Class}>
        {children}
      </motion.h2>
    </div>
  );
}
