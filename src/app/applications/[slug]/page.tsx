import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { getApplication, applications } from "@/lib/data";

type ApplicationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return applications.map((application) => ({ slug: application.slug }));
}

export async function generateMetadata({ params }: ApplicationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const application = getApplication(slug);

  if (!application) return {};

  return {
    title: application.name,
    description: application.summary,
    alternates: { canonical: `/applications/${application.slug}` },
  };
}

export default async function ApplicationPage({ params }: ApplicationPageProps) {
  const { slug } = await params;
  const application = getApplication(slug);

  if (!application) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/applications", label: "Applications" },
          { label: application.name },
        ]}
      />
      <section className="detail-hero shell">
        <div className="detail-copy">
          <p className="eyebrow">Application example</p>
          <h1>{application.name}</h1>
          <p className="lede">{application.summary}</p>
          <Link className="button" href="/quote">
            Try the demo form
          </Link>
        </div>
        <div className="detail-art">
          <Image
            alt={application.imageAlt}
            fill
            preload
            sizes="(max-width: 900px) 100vw, 48vw"
            src={application.image}
          />
        </div>
      </section>

      <section className="section shell two-column-copy">
        <div>
          <p className="eyebrow">The challenge</p>
          <h2>Explain why the application needs its own page.</h2>
          <p>{application.challenge}</p>
        </div>
        <div>
          <p className="eyebrow">A useful approach</p>
          <h2>Move from context to a testable plan.</h2>
          <p>{application.approach}</p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="shell split-heading section-heading">
          <div>
            <p className="eyebrow">Discovery checklist</p>
            <h2>Questions to answer before selecting equipment.</h2>
          </div>
          <ul className="number-list">
            {application.considerations.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
