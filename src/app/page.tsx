import Image from "next/image";
import Link from "next/link";
import { ContentCard } from "@/components/content-card";
import { CtaBand } from "@/components/cta-band";
import { applications, articles, products, projects } from "@/lib/data";

export default function HomePage() {
  const featuredProject = projects[0];

  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Open-source learning project</p>
            <h1>A clear starting point for a technical B2B website.</h1>
            <p className="hero-lede">
              Learn how typed content, static routes, metadata, and a focused design system fit together in a modern Next.js site.
            </p>
            <div className="button-row">
              <Link className="button" href="/products">
                Explore the example
              </Link>
              <Link className="button button-secondary" href="/knowledge-base">
                Read the guides
              </Link>
            </div>
            <p className="demo-note">
              Every brand name, specification, project, and illustration is fictional.
            </p>
          </div>

          <div className="hero-art">
            <Image
              alt="Abstract solar lighting field at sunset"
              fill
              preload
              sizes="(max-width: 900px) 100vw, 50vw"
              src="/illustrations/hero-field.svg"
            />
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Project highlights">
        <div className="shell signal-grid">
          <div>
            <strong>Next.js 16</strong>
            <span>App Router patterns</span>
          </div>
          <div>
            <strong>Typed content</strong>
            <span>One visible data source</span>
          </div>
          <div>
            <strong>Static first</strong>
            <span>Small client boundary</span>
          </div>
          <div>
            <strong>MIT licensed</strong>
            <span>Adapt and learn</span>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Typed product routes</p>
            <h2>Three examples, one dependable page model.</h2>
          </div>
          <p>
            Each fictional product uses the same shape for cards, metadata, detail pages, and the sitemap.
          </p>
        </div>
        <div className="card-grid three-columns">
          {products.map((product) => (
            <ContentCard
              description={product.summary}
              eyebrow={product.eyebrow}
              href={`/products/${product.slug}`}
              image={product.image}
              imageAlt={product.imageAlt}
              key={product.slug}
              title={product.name}
            />
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Application content</p>
              <h2>Organize pages around customer decisions.</h2>
            </div>
            <p>
              The application examples lead with constraints and planning questions instead of repeating product copy.
            </p>
          </div>
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
        </div>
      </section>

      <section className="section shell feature-layout">
        <div className="feature-art">
          <Image
            alt={featuredProject.imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            src={featuredProject.image}
          />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Fictional case study</p>
          <h2>{featuredProject.name}</h2>
          <p>{featuredProject.summary}</p>
          <dl className="mini-stats">
            {featuredProject.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <Link className="text-link" href={`/projects/${featuredProject.slug}`}>
            See the project template <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="section-heading split-heading section-heading-light">
            <div>
              <p className="eyebrow eyebrow-light">Knowledge base</p>
              <h2>Original demo articles with useful structure.</h2>
            </div>
            <p>
              These short articles demonstrate categories, summaries, metadata, and accessible long-form layouts without copied source material.
            </p>
          </div>
          <div className="article-list">
            {articles.map((article, index) => (
              <article className="article-row" key={article.slug}>
                <span className="article-index">0{index + 1}</span>
                <div>
                  <p>{article.category}</p>
                  <h3>
                    <Link href={`/knowledge-base/${article.slug}`}>{article.title}</Link>
                  </h3>
                </div>
                <span>{article.readTime}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
