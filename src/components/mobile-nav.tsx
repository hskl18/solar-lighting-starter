"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/lib/site";

function isCurrentSection(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        className="menu-button"
        onClick={() => setOpen((current) => !current)}
        ref={menuButtonRef}
        type="button"
      >
        <span className="sr-only">Toggle navigation</span>
        <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
      </button>

      {open ? (
        <nav aria-label="Mobile navigation" className="mobile-nav-panel" id="mobile-navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              aria-current={isCurrentSection(pathname, item.href) ? "page" : undefined}
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="button button-small" href="/quote" onClick={() => setOpen(false)}>
            Plan a demo project
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
