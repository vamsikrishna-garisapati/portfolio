"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { IconGithub } from "@/components/icons/BrandIcons";
import { StackChipIcon } from "@/components/icons/StackChipIcon";
import type { Project } from "@/types/portfolio";

export function ProjectCard({
  project,
  index,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();
  const liveLabel = project.links.liveLabel ?? new URL(project.links.liveUrl).hostname;
  const quote = project.star.result[0] ?? project.oneLiner;
  const idx = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="group flex h-full flex-col border border-[color:var(--border-subtle)] bg-[var(--background-elevated)]"
    >
      <div className="flex items-start justify-between gap-3 border-b border-[color:var(--border-subtle)] px-5 py-3 md:px-6">
        <span className="font-mono-ui text-[11px] tabular-nums text-muted">{idx}</span>
        <span className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">{project.status}</span>
      </div>

      {project.cover ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[color:var(--border-subtle)] bg-[var(--background)]">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            className="h-full w-full object-cover object-top"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={priority}
          />
        </div>
      ) : null}
      {project.cover ? (
        <p className="border-b border-[color:var(--border-subtle)] px-5 py-2 font-mono-ui text-[10px] tracking-wide text-muted md:px-6">
          {project.cover.caption}
        </p>
      ) : null}

      <div className="relative flex flex-1 flex-col gap-5 p-5 md:p-6">
        {!project.cover && project.media ? (
          <div className="flex justify-end">
            <Image
              src={project.media.src}
              alt=""
              width={48}
              height={48}
              className="opacity-75"
              aria-hidden
              priority={priority}
            />
          </div>
        ) : null}

        <div className="min-w-0">
          <h3 className="font-serif-display text-2xl tracking-tight text-fg md:text-3xl">{project.name}</h3>
          <p className="mt-2 font-mono-ui text-[12px] text-muted">
            {project.roleTitle}
            {" · "}
            {project.status}
          </p>
        </div>

        <p className="text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_15%)]">{project.oneLiner}</p>

        <blockquote className="border-l-2 border-[color:var(--border-subtle)] pl-4 font-serif-display text-[17px] italic leading-snug text-fg md:text-lg">
          &ldquo;{quote}&rdquo;
        </blockquote>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded border border-[color:var(--border-subtle)] bg-transparent px-2 py-1 font-mono-ui text-[11px] text-muted group-hover:border-[color:color-mix(in_oklab,var(--foreground),transparent_75%)]"
            >
              <StackChipIcon label={item} />
              {item}
            </span>
          ))}
        </div>

        <ul className="space-y-2 text-[14px] leading-relaxed text-muted">
          {project.metrics.slice(0, 2).map((metric) => (
            <li key={metric} className="flex gap-2.5">
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--foreground),transparent_55%)]"
                aria-hidden
              />
              <span>{metric}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <a
            href={project.links.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)]"
          >
            Open {liveLabel}
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
          </a>
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[color:var(--border-subtle)] bg-transparent px-4 py-2.5 text-sm font-semibold text-fg transition hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_94%)] dark:hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_92%)]"
          >
            Case study
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </Link>
          {project.links.repoUrl ? (
            <a
              href={project.links.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[color:var(--border-subtle)] bg-transparent px-4 py-2.5 text-sm font-semibold text-fg transition hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_94%)] dark:hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_92%)]"
            >
              <IconGithub className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
