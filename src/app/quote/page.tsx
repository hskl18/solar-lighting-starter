import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Demo quote form",
  description: "A non-production form example with client state and server-side validation.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <PageIntro
        description="The form demonstrates a small client boundary and a validated POST request without collecting personal information."
        eyebrow="Route Handler example"
        title="Try the non-production quote flow."
      />
      <section className="section shell narrow-section">
        <div className="notice">
          <strong>This is a safe demo.</strong>
          <p>No request is stored, emailed, assigned, or sent to a third party.</p>
        </div>
        <QuoteForm />
      </section>
    </>
  );
}
