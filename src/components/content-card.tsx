import Image from "next/image";
import Link from "next/link";

type ContentCardProps = {
  href: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function ContentCard({
  href,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
}: ContentCardProps) {
  return (
    <article className="content-card">
      <Link aria-label={`Read about ${title}`} className="card-image" href={href}>
        <Image alt={imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" src={image} />
      </Link>
      <div className="card-body">
        <p className="eyebrow">{eyebrow}</p>
        <h2>
          <Link href={href}>{title}</Link>
        </h2>
        <p>{description}</p>
        <Link className="text-link" href={href}>
          Explore <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
