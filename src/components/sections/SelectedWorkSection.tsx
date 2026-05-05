import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/cards/ProjectCard";

export function SelectedWorkSection({
  title = "Selected work",
  description = "Live URLs first — proof you can ship.",
  limit,
}: {
  title?: string;
  description?: string;
  limit?: number;
}) {
  const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
  const shown = typeof limit === "number" ? ordered.slice(0, limit) : ordered;
  const showViewAll = typeof limit === "number" && limit < ordered.length;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md"
    >
      <SectionHeading id="work-heading" eyebrow="01 — WORK">
        {title}
      </SectionHeading>
      <p className="mt-4 max-w-[64ch] text-[15px] leading-relaxed text-muted">{description}</p>

      <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
        {shown.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} index={idx} priority={idx === 0} />
        ))}
      </div>

      {showViewAll ? (
        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/projects"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-[color:var(--border-subtle)] bg-transparent px-6 py-3 text-sm font-semibold text-fg transition hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_94%)] dark:hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_92%)]"
          >
            View all projects
          </Link>
        </div>
      ) : null}
    </section>
  );
}
