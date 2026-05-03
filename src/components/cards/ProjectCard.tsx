import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/portfolio";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const liveLabel = project.links.liveLabel ?? new URL(project.links.liveUrl).hostname;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_35%)] p-5 transition hover:bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_25%)] md:p-6">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 to-transparent dark:from-white/[0.04]" />

      <div className="relative flex h-full flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-serif-display text-2xl tracking-tight text-fg md:text-3xl">{project.name}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
              {project.roleTitle} · {project.status}
            </p>
          </div>
          {project.media ? (
            <div className="hidden shrink-0 md:block">
              <Image
                src={project.media.src}
                alt={project.media.alt}
                width={56}
                height={56}
                className="h-14 w-14 opacity-90"
                priority={priority}
              />
            </div>
          ) : null}
        </div>

        <p className="text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)]">
          {project.oneLiner}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.highlights.slice(0, 4).map((chip) => (
            <span
              key={chip}
              className="rounded-md border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_45%)] px-2.5 py-1 text-[12px] font-medium text-muted"
            >
              {chip}
            </span>
          ))}
        </div>

        <ul className="space-y-2 text-[14px] leading-relaxed text-muted">
          {project.metrics.slice(0, 2).map((metric) => (
            <li key={metric} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--foreground),transparent_55%)]" aria-hidden />
              <span>{metric}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
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
            className="focus-ring inline-flex min-h-10 items-center justify-center rounded-md border border-subtle bg-transparent px-4 py-2.5 text-sm font-semibold text-fg transition hover:bg-black/5 dark:hover:bg-white/[0.04]"
          >
            Case study
          </Link>
        </div>
      </div>
    </article>
  );
}

