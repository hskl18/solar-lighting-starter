import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Fictional case studies for demonstrating reusable project pages.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        description="These examples show a compact way to connect a project goal, site constraints, selected approach, and measurable facts."
        eyebrow="Case study templates"
        title="Tell the project story without hiding the assumptions."
      />
      <section className="section shell">
        <div className="card-grid two-columns">
          {projects.map((project) => (
            <ContentCard
              description={project.summary}
              eyebrow={project.location}
              href={`/projects/${project.slug}`}
              image={project.image}
              imageAlt={project.imageAlt}
              key={project.slug}
              title={project.name}
            />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
