import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Fictional contact information and adaptation guidance for Solar Lighting Starter.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        description="This page uses reserved example contact details so a deployed copy cannot be confused with a real business."
        eyebrow="Demo contact"
        title="Make the ownership boundary obvious."
      />
      <section className="section shell contact-grid">
        <article className="contact-panel">
          <p className="eyebrow">Example address</p>
          <h2>Solar Lighting Starter</h2>
          <address>
            123 Example Avenue
            <br />
            Sample City, CA 00000
          </address>
          <a className="text-link" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </article>

        <article className="contact-panel contact-panel-dark">
          <p className="eyebrow eyebrow-light">Before production</p>
          <h2>Replace every example value.</h2>
          <p>
            Update the site identity, canonical URL, contact details, structured data, and form delivery path before using this starter for a real organization.
          </p>
          <Link className="button button-light" href="/quote">
            Review the demo form
          </Link>
        </article>
      </section>
    </>
  );
}
