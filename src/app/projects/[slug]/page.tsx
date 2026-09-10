import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { getProject, projects } from "@/lib/data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
          { label: project.name },
        ]}
      />
      <section className="project-hero shell">
        <div className="project-title">
          <p className="eyebrow">{project.location}</p>
          <h1>{project.name}</h1>
          <p className="lede">{project.summary}</p>
        </div>
        <div className="project-art">
          <Image alt={project.imageAlt} fill preload sizes="100vw" src={project.image} />
        </div>
      </section>

      <section className="stat-band">
        <dl className="shell stat-grid">
          {project.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section shell article-shell">
        <p className="eyebrow">Project narrative</p>
        <h2>A short case study with explicit demo boundaries.</h2>
        {project.story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
