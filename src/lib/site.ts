export const SITE = {
  name: "Solar Lighting Starter",
  shortName: "SLS",
  description:
    "A fictional B2B solar lighting website built as a clean Next.js learning project.",
  url: "https://solar-lighting-starter.example",
  email: "hello@example.com",
} as const;

export const NAV_ITEMS = [
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/projects", label: "Projects" },
  { href: "/knowledge-base", label: "Knowledge base" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE.url).toString();
}
