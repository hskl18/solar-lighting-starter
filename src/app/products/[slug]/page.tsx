import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { getProduct, products } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return {};

  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.summary,
          url: absoluteUrl(`/products/${product.slug}`),
          isFamilyFriendly: true,
          additionalProperty: product.stats.map((stat) => ({
            "@type": "PropertyValue",
            name: stat.label,
            value: stat.value,
          })),
        }}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { label: product.name },
        ]}
      />
      <section className="detail-hero shell">
        <div className="detail-copy">
          <p className="eyebrow">{product.eyebrow}</p>
          <h1>{product.name}</h1>
          <p className="lede">{product.summary}</p>
          <p>{product.description}</p>
          <div className="button-row">
            <Link className="button" href="/quote">
              Try the demo form
            </Link>
            <Link className="button button-secondary" href="/products">
              All products
            </Link>
          </div>
        </div>
        <div className="detail-art">
          <Image alt={product.imageAlt} fill preload sizes="(max-width: 900px) 100vw, 48vw" src={product.image} />
        </div>
      </section>

      <section className="stat-band">
        <dl className="shell stat-grid">
          {product.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section shell two-column-copy">
        <div>
          <p className="eyebrow">Page pattern</p>
          <h2>Use benefits and constraints together.</h2>
          <p>
            A useful product page helps a visitor understand when the product fits and what still needs to be confirmed.
          </p>
        </div>
        <div className="list-panel">
          <h3>Example features</h3>
          <ul className="check-list">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <h3>Example applications</h3>
          <ul className="tag-list">
            {product.bestFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand
        description="The values above are fictional. Replace them with verified product data before adapting this page for production."
        title="Keep demo specifications out of real decisions."
      />
    </>
  );
}
