import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { applications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Applications",
  description: "Fictional application pages organized around planning decisions.",
  alternates: { canonical: "/applications" },
};

export default function ApplicationsPage() {
  return (
    <>
      <PageIntro
        description="Application pages should help a visitor understand a problem before asking them to choose a product."
        eyebrow="Decision-led content"
        title="Start with the site, user, and operating schedule."
      />
      <section className="section shell">
        <div className="card-grid three-columns">
          {applications.map((application) => (
            <ContentCard
              description={application.summary}
              eyebrow="Application"
              href={`/applications/${application.slug}`}
              image={application.image}
              imageAlt={application.imageAlt}
              key={application.slug}
              title={application.name}
            />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
