"use client";

import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { revealTransition, revealUp } from "./motion";

export function ProfileSection() {
  return (
    <section
      id="profile"
      aria-labelledby="profile-heading"
      className="grid border-b border-white/10 py-space-md"
    >
      <SectionHeading id="profile-heading">Profile</SectionHeading>
      <motion.p
        {...revealUp}
        transition={revealTransition}
        className="mt-6 max-w-5xl text-balance text-body-xl leading-[1.45] text-stone-200 md:mt-8"
      >
        Full Stack Software Engineer with production experience building scalable web applications serving
        5,000+ students and 100+ mentors. Independently designed and shipped MockArch, an AI-powered
        SaaS for system design interview practice, built end-to-end from idea to production. Known for
        delivering measurable results across performance, backend optimization, authentication, and
        deployment workflows.
      </motion.p>
    </section>
  );
}
