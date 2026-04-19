"use client";

import { motion } from "motion/react";
import { revealTransition, revealUp } from "./motion";

export function SectionHeading({ children, id }: { children: string; id?: string }) {
  return (
    <motion.h2
      id={id}
      {...revealUp}
      transition={revealTransition}
      className="font-serif-display text-display-sm tracking-tight text-stone-100"
    >
      {children}
    </motion.h2>
  );
}
