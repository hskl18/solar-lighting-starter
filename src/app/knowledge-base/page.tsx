import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Knowledge base",
  description: "Original fictional articles demonstrating a typed knowledge-base collection.",
  alternates: { canonical: "/knowledge-base" },
};

export default function KnowledgeBasePage() {
  return (
    <>
      <PageIntro
        description="The starter includes three original articles so learners can inspect a complete long-form route without redistributing third-party copy."
        eyebrow="Original demo content"
        title="A small knowledge base with a clean ownership story."
      />
      <section className="section shell">
        <div className="card-grid three-columns">
          {articles.map((article) => (
            <ContentCard
              description={article.summary}
              eyebrow={`${article.category} · ${article.readTime}`}
              href={`/knowledge-base/${article.slug}`}
              image={article.image}
              imageAlt={article.imageAlt}
              key={article.slug}
              title={article.title}
            />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
