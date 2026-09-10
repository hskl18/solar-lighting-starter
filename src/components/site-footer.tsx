import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { NAV_ITEMS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link aria-label={`${SITE.name} home`} className="wordmark footer-wordmark" href="/">
            <BrandMark className="wordmark-mark" />
            <span>
              <strong>Solar Lighting</strong>
              <small>Starter</small>
            </span>
          </Link>
          <p className="footer-note">
            A fictional Next.js project for learning how to build content-driven B2B websites.
          </p>
        </div>

        <div>
          <p className="footer-heading">Explore</p>
          <nav aria-label="Footer navigation" className="footer-links">
            {NAV_ITEMS.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="footer-heading">Demo</p>
          <div className="footer-links">
            <Link href="/quote">Quote form</Link>
            <Link href="/contact">Contact</Link>
            <a href="/llms.txt">llms.txt</a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>Fictional content and specifications for demonstration only.</p>
        <p>MIT licensed.</p>
      </div>
    </footer>
  );
}
