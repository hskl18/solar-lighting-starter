import Link from "next/link";

export default function NotFound() {
  return (
    <section className="empty-state shell">
      <p className="eyebrow">404</p>
      <h1>This demo page does not exist.</h1>
      <p>The route may have changed, or the example record is not part of the starter dataset.</p>
      <Link className="button" href="/">
        Return home
      </Link>
    </section>
  );
}
