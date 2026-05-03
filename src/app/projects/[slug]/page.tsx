import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] selection:bg-black/10 selection:text-[var(--foreground)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full min-w-0 max-w-[1000px] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-10 md:px-10"
      >
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/projects" className="micro-link focus-ring">
            Projects
          </Link>{" "}
          <span aria-hidden>·</span> <span className="text-fg">{project.name}</span>
        </nav>

        <header className="mt-6 border-b border-subtle pb-8">
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0">
              <h1 className="font-serif-display text-display-sm leading-[0.95] tracking-[-0.03em] text-fg">
                {project.name}
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {project.roleTitle} · {project.status}
              </p>
            </div>
            {project.media ? (
              <Image
                src={project.media.src}
                alt={project.media.alt}
                width={72}
                height={72}
                className="hidden h-16 w-16 opacity-95 md:block"
                priority
              />
            ) : null}
          </div>

          <p className="mt-5 max-w-[80ch] text-[16px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)]">
            {project.oneLiner}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <a
              href={project.links.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)]"
            >
              Open {liveLabel}
            </a>
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Portfolio — ${project.name}`)}`}
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-subtle bg-transparent px-5 py-3 text-sm font-semibold text-fg transition hover:bg-black/5 dark:hover:bg-white/[0.04]"
            >
              Email about this
            </a>
          </div>
        </header>

        <section aria-labelledby="overview" className="py-10">
          <h2 id="overview" className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Overview
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)]">
            {project.roleScope}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_45%)] px-2.5 py-1 text-[12px] font-medium text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section aria-labelledby="star" className="border-t border-subtle py-10">
          <h2 id="star" className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            STAR
          </h2>

          <div className="mt-6 grid gap-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Situation</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.star.situation}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Task</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.star.task}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Action</p>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)]">
                {project.star.action.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--foreground),transparent_55%)]" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Result</p>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--foreground),transparent_18%)]">
                {project.star.result.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--foreground),transparent_55%)]" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
