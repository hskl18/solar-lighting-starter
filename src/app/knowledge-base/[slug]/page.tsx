import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { getArticle, articles } from "@/lib/data";
import { absoluteUrl, SITE } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/knowledge-base/${article.slug}` },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.summary,
          author: { "@type": "Organization", name: SITE.name },
          mainEntityOfPage: absoluteUrl(`/knowledge-base/${article.slug}`),
        }}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/knowledge-base", label: "Knowledge base" },
          { label: article.title },
        ]}
      />
      <article>
        <header className="article-header shell">
          <p className="eyebrow">
            {article.category} · {article.readTime}
          </p>
          <h1>{article.title}</h1>
          <p className="lede">{article.summary}</p>
        </header>
        <div className="article-image shell">
          <Image alt={article.imageAlt} fill preload sizes="(max-width: 1000px) 100vw, 1000px" src={article.image} />
        </div>
        <div className="article-shell shell">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
      <CtaBand />
    </>
  );
}
