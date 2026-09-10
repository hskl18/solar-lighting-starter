import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description: "Fictional product examples driven by one typed collection.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        description="Each product uses the same data shape while supporting distinct content, illustrations, metadata, and static detail routes."
        eyebrow="Data-driven collection"
        title="Product pages without duplicated structure."
      />
      <section className="section shell">
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
      <CtaBand />
    </>
  );
}
