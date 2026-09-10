import Link from "next/link";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Turn the template into your own site",
  description = "Replace the demo data with content you own, connect a real delivery workflow, and keep the public routes driven by one typed source.",
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="shell cta-inner">
        <div>
          <p className="eyebrow eyebrow-light">Next step</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link className="button button-light" href="/quote">
          Try the demo form
        </Link>
      </div>
    </section>
  );
}
