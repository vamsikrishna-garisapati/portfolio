import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { IconGithub } from "@/components/icons/BrandIcons";
import { StackChipIcon } from "@/components/icons/StackChipIcon";
import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/data";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.name} — Case Study`;
  const description = project.oneLiner;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/projects/${project.slug}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const liveLabel = project.links.liveLabel ?? new URL(project.links.liveUrl).hostname;
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] selection:bg-[color:color-mix(in_oklab,var(--foreground),transparent_88%)] selection:text-[var(--foreground)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full min-w-0 max-w-[1000px] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-8 md:px-10 md:pt-10"
      >
        <nav aria-label="Breadcrumb" className="font-mono-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          <Link href="/projects" className="micro-link focus-ring text-muted">
            Projects
          </Link>{" "}
          <span aria-hidden className="text-muted">
            ·
          </span>{" "}
          <span className="text-fg">{project.name}</span>
        </nav>

        {project.cover ? (
          <div className="mt-8 border border-[color:var(--border-subtle)] bg-[var(--background-elevated)]">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                width={project.cover.width}
                height={project.cover.height}
                className="h-full w-full object-cover object-top"
                sizes="(min-width: 768px) 900px, 100vw"
                priority
              />
            </div>
            <p className="border-t border-[color:var(--border-subtle)] px-4 py-2 font-mono-ui text-[10px] tracking-wide text-muted md:px-6">
              {project.cover.caption}
            </p>
          </div>
        ) : null}

        <header className={`border-b border-[color:var(--border-subtle)] pb-10 ${project.cover ? "mt-10" : "mt-8"}`}>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0">
              <h1 className="font-serif-display text-[clamp(2rem,6vw,3.25rem)] font-normal leading-[0.95] tracking-[-0.03em] text-fg">
                {project.name}
              </h1>
              <p className="mt-4 font-serif-display text-lg italic text-muted">
                {project.roleTitle} · {project.status}
              </p>
            </div>
            {!project.cover && project.media ? (
              <Image
                src={project.media.src}
                alt=""
                width={64}
                height={64}
                className="hidden shrink-0 opacity-90 md:block"
                aria-hidden
              />
            ) : null}
          </div>

          <p className="mt-8 max-w-[80ch] text-[17px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_12%)]">
            {project.oneLiner}
          </p>

          <p className="mt-6 font-mono-ui text-[11px] leading-relaxed text-muted [text-wrap:pretty]">
            {project.stack.join(" · ")}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href={project.links.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)]"
            >
              Open {liveLabel}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
            {project.links.repoUrl ? (
              <a
                href={project.links.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[color:var(--border-subtle)] bg-transparent px-5 py-3 text-sm font-semibold text-fg transition hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_94%)] dark:hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_92%)]"
              >
                <IconGithub className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                GitHub
              </a>
            ) : null}
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Portfolio — ${project.name}`)}`}
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-[color:var(--border-subtle)] bg-transparent px-5 py-3 text-sm font-semibold text-fg transition hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_94%)] dark:hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_92%)]"
            >
              Email about this
            </a>
          </div>
        </header>

        <section aria-labelledby="overview-heading" className="py-10">
          <h2 id="overview-heading" className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            Overview
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_12%)] [text-wrap:pretty]">
            {project.roleScope}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded border border-[color:var(--border-subtle)] bg-transparent px-2.5 py-1 font-mono-ui text-[11px] text-muted"
              >
                <StackChipIcon label={item} />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section aria-labelledby="star-heading" className="border-t border-[color:var(--border-subtle)] py-12">
          <h2 id="star-heading" className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            Case study
          </h2>

          <div className="mt-10 grid gap-12">
            <div>
              <p className="font-mono-ui text-[11px] tabular-nums text-muted">01 — Situation</p>
              <p className="mt-3 font-serif-display text-xl text-fg md:text-2xl">Context</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted [text-wrap:pretty]">{project.star.situation}</p>
            </div>
            <div>
              <p className="font-mono-ui text-[11px] tabular-nums text-muted">02 — Task</p>
              <p className="mt-3 font-serif-display text-xl text-fg md:text-2xl">Objective</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted [text-wrap:pretty]">{project.star.task}</p>
            </div>
            <div>
              <p className="font-mono-ui text-[11px] tabular-nums text-muted">03 — Action</p>
              <p className="mt-3 font-serif-display text-xl text-fg md:text-2xl">Execution</p>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_12%)]">
                {project.star.action.map((point, i) => (
                  <li key={point} className="flex gap-3 [text-wrap:pretty]">
                    <span className="font-mono-ui mt-0.5 text-[11px] tabular-nums text-muted">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono-ui text-[11px] tabular-nums text-muted">04 — Result</p>
              <p className="mt-3 font-serif-display text-xl text-fg md:text-2xl">Outcomes</p>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_12%)]">
                {project.star.result.map((point, i) => (
                  <li key={point} className="flex gap-3 [text-wrap:pretty]">
                    <span className="font-mono-ui mt-0.5 text-[11px] tabular-nums text-muted">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <nav
          aria-label="Adjacent projects"
          className="flex flex-col gap-4 border-t border-[color:var(--border-subtle)] py-10 md:flex-row md:justify-between"
        >
          <Link
            href={`/projects/${prev.slug}`}
            className="focus-ring group flex flex-col border border-[color:var(--border-subtle)] bg-[var(--background-elevated)] p-4 transition hover:border-[color:color-mix(in_oklab,var(--foreground),transparent_70%)] md:min-w-[min(100%,14rem)]"
          >
            <span className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted">Previous</span>
            <span className="mt-2 font-serif-display text-lg text-fg group-hover:underline">{prev.name}</span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="focus-ring group flex flex-col border border-[color:var(--border-subtle)] bg-[var(--background-elevated)] p-4 text-right transition hover:border-[color:color-mix(in_oklab,var(--foreground),transparent_70%)] md:min-w-[min(100%,14rem)]"
          >
            <span className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted">Next</span>
            <span className="mt-2 font-serif-display text-lg text-fg group-hover:underline">{next.name}</span>
          </Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
