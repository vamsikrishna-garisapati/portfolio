"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useState } from "react";
import { projects, type Project } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";
import { revealTransition, revealUp } from "./motion";

const projectMap = projects.reduce<Record<string, Project>>((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});

const PANEL_WIDTH = 480;
const PANEL_HEIGHT = 360;
const PANEL_OFFSET_X = 24;
const PANEL_OFFSET_Y = -30;
const EDGE_GAP = 20;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function WorksSection() {
  const reduceMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [expandedProjectSlug, setExpandedProjectSlug] = useState<string | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 18, mass: 0.55 });
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 18, mass: 0.55 });

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="relative border-b border-white/10 py-space-md"
    >
      <SectionHeading id="works-heading">Works</SectionHeading>
      <div className="mt-8 space-y-3 md:mt-10 md:space-y-6">
        {projects.map((project, idx) => {
          const isExpanded = expandedProjectSlug === project.slug;
          return (
            <motion.article
              key={project.slug}
              {...revealUp}
              transition={{ ...revealTransition, delay: idx * 0.08 }}
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
              onMouseMove={(event) => {
                const maxX = window.innerWidth - PANEL_WIDTH - EDGE_GAP;
                const maxY = window.innerHeight - PANEL_HEIGHT - EDGE_GAP;
                const nextX = clamp(event.clientX + PANEL_OFFSET_X, EDGE_GAP, maxX);
                const nextY = clamp(event.clientY + PANEL_OFFSET_Y, EDGE_GAP, maxY);
                pointerX.set(nextX);
                pointerY.set(nextY);
              }}
              className="group border-t border-white/15 py-4 md:py-5"
            >
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={`project-details-${project.slug}`}
                className="focus-ring w-full cursor-pointer text-left"
                onClick={() =>
                  setExpandedProjectSlug((current) => (current === project.slug ? null : project.slug))
                }
                onFocus={() => setActiveProject(project)}
                onBlur={() => setActiveProject(null)}
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                  <h3 className="min-w-0 break-words font-serif-display text-5xl leading-none tracking-[-0.02em] text-stone-100 transition duration-500 group-hover:opacity-70 md:text-7xl">
                    {project.name}
                  </h3>
                  <div className="max-w-xl text-sm text-stone-400">
                    <p className="uppercase tracking-[0.16em] text-stone-500">{project.status}</p>
                    <p className="mt-1">{project.role}</p>
                  </div>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={`project-details-${project.slug}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: reduceMotion ? 0.05 : 0.35, ease: "easeOut" }}
                    className="overflow-hidden lg:hidden"
                  >
                    <div className="mt-5 grid gap-4 rounded-none border border-white/15 bg-white/[0.03] p-4">
                      <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/20">
                        <Image
                          src={project.media.src}
                          alt={project.media.alt}
                          fill
                          sizes="100vw"
                          className="object-cover object-center"
                        />
                      </div>
                      <p className="text-xs leading-relaxed text-stone-500">{project.stack}</p>
                      <ul className="space-y-2 text-sm text-stone-300">
                        {project.details.map((point) => (
                          <li key={point}>- {point}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      <motion.aside
        aria-hidden
        style={{ x: smoothX, y: smoothY }}
        animate={{ opacity: activeProject ? 1 : 0, scale: activeProject ? 1 : 0.96 }}
        transition={{ duration: reduceMotion ? 0.05 : 0.25 }}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden w-[480px] max-w-[78vw] overflow-hidden border border-white/20 bg-black/90 p-5 backdrop-blur-md lg:block"
      >
        {activeProject && (
          <div>
            <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden border border-white/20">
              <Image
                src={activeProject.media.src}
                alt={activeProject.media.alt}
                fill
                sizes="(min-width: 1024px) 480px, 78vw"
                className="object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <p className="font-serif-display text-3xl leading-tight text-stone-100">{activeProject.name}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-stone-500">{activeProject.status}</p>
            <p className="mt-4 text-sm text-stone-300">{activeProject.role}</p>
            <p className="mt-3 text-xs leading-relaxed text-stone-500">{activeProject.stack}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-stone-300">
              {projectMap[activeProject.slug].details.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </div>
        )}
      </motion.aside>
    </section>
  );
}
