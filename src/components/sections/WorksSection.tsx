"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { revealTransition, revealUp } from "@/lib/motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { Project } from "@/types/portfolio";

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="grid gap-6 text-sm md:max-w-[70ch]">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Scope</p>
        <p className="mt-2 leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_22%)]">
          {project.roleScope}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Situation</p>
          <p className="mt-2 leading-relaxed text-muted">{project.star.situation}</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Task</p>
          <p className="mt-2 leading-relaxed text-muted">{project.star.task}</p>
        </div>
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Action</p>
        <ul className="mt-3 space-y-2 text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)]">
          {project.star.action.map((point) => (
            <li key={point} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-500" aria-hidden />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Result</p>
        <ul className="mt-3 space-y-2 text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)]">
          {project.star.result.map((point) => (
            <li key={point} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-500" aria-hidden />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xs leading-relaxed text-muted">{project.stack.join(" • ")}</p>
    </div>
  );
}

export function WorksSection() {
  const reduceMotion = useReducedMotion();
  const [expandedProjectSlug, setExpandedProjectSlug] = useState<string | null>(null);
  const orderedProjects = useMemo(() => {
    return [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, []);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionHeading id="work-heading">Projects</SectionHeading>
          <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-muted">
            Public products with live URLs. Each project includes STAR impact + technical decisions.
          </p>
        </div>
        <Link
          href="/projects"
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 bg-transparent px-5 py-2.5 text-sm font-semibold text-stone-200 transition hover:border-white/25 hover:bg-white/[0.04]"
        >
          See all projects
        </Link>
      </div>

      <div className="mt-10 space-y-5 md:mt-12 md:space-y-6">
        {orderedProjects.map((project, idx) => {
          const isExpanded = expandedProjectSlug === project.slug;
          const liveLabel = project.links.liveLabel ?? new URL(project.links.liveUrl).hostname;

          return (
            <motion.article
              key={project.slug}
              {...revealUp}
              transition={{ ...revealTransition, delay: idx * 0.04 }}
              className={`rounded-2xl border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_35%)] p-5 md:p-8 ${
                project.featured ? "ring-1 ring-white/[0.07]" : ""
              }`}
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-serif-display text-[clamp(1.85rem,4.6vw,3.0rem)] leading-[1.06] tracking-[-0.02em] text-fg">
                      {project.name}
                    </h3>
                    {project.featured ? (
                      <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted">
                    {project.roleTitle} · {project.status}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 lg:shrink-0">
                  <a
                    href={project.links.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex min-h-10 items-center justify-center rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)]"
                  >
                    Open {liveLabel}
                  </a>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="focus-ring inline-flex min-h-10 items-center justify-center rounded-md border border-white/12 px-4 py-2.5 text-sm font-semibold text-stone-200 transition hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    Case study
                  </Link>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`project-details-${project.slug}`}
                    className="focus-ring inline-flex min-h-10 items-center justify-center rounded-md border border-white/12 px-4 py-2.5 text-sm font-semibold text-stone-200 transition hover:border-white/20 hover:bg-white/[0.04]"
                    onClick={() =>
                      setExpandedProjectSlug((current) => (current === project.slug ? null : project.slug))
                    }
                  >
                    {isExpanded ? "Close" : "Quick STAR"}
                  </button>
                </div>
              </div>

              <div className="mt-6 border-t border-subtle pt-6">
                <p className="max-w-[72ch] text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_22%)]">
                  {project.oneLiner}
                </p>
                <div className="mt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Highlights</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.highlights.slice(0, 4).map((chip) => (
                      <span
                        key={chip}
                        className="rounded-md border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_45%)] px-2.5 py-1 text-[12px] font-medium text-muted"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isExpanded ? (
                  <motion.div
                    id={`project-details-${project.slug}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: reduceMotion ? 0.05 : 0.32, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 border-t border-subtle pt-6">
                      <ProjectDetails project={project} />
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
