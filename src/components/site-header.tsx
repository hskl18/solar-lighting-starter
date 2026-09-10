import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link aria-label={`${SITE.name} home`} className="wordmark" href="/">
          <BrandMark className="wordmark-mark" />
          <span>
            <strong>Solar Lighting</strong>
            <small>Starter</small>
          </span>
        </Link>

        <DesktopNav />

        <Link className="button button-small header-cta" href="/quote">
          Plan a demo project
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
