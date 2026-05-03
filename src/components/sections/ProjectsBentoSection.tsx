import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/cards/ProjectCard";

export function ProjectsBentoSection({
  title = "Featured projects",
  description = "Proof first: live URLs + measurable outcomes + STAR write-ups.",
  limit,
}: {
  title?: string;
  description?: string;
  limit?: number;
}) {
  const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
  const shown = typeof limit === "number" ? ordered.slice(0, limit) : ordered;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md"
    >
      <div>
        <SectionHeading id="projects-heading">{title}</SectionHeading>
        <p className="mt-4 max-w-[64ch] text-[15px] leading-relaxed text-muted">{description}</p>
      </div>

      <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-6 md:gap-5">
        {shown.map((project, idx) => {
          const span = (() => {
            if (project.featured && shown.length > 1) return "md:col-span-4";
            if (shown.length === 2 && shown.some((p) => p.featured)) return "md:col-span-2";
            return "md:col-span-3";
          })();
          return (
            <div key={project.slug} className={span}>
              <ProjectCard project={project} priority={idx === 0} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
