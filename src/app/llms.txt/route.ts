import { applications, articles, products, projects } from "@/lib/data";
import { absoluteUrl, SITE } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    "All names, products, projects, specifications, and articles are fictional demo content.",
    "",
    "## Main pages",
    `- [Products](${absoluteUrl("/products")})`,
    `- [Applications](${absoluteUrl("/applications")})`,
    `- [Projects](${absoluteUrl("/projects")})`,
    `- [Knowledge base](${absoluteUrl("/knowledge-base")})`,
    "",
    "## Products",
    ...products.map((item) => `- [${item.name}](${absoluteUrl(`/products/${item.slug}`)}): ${item.summary}`),
    "",
    "## Applications",
    ...applications.map(
      (item) => `- [${item.name}](${absoluteUrl(`/applications/${item.slug}`)}): ${item.summary}`,
    ),
    "",
    "## Projects",
    ...projects.map((item) => `- [${item.name}](${absoluteUrl(`/projects/${item.slug}`)}): ${item.summary}`),
    "",
    "## Articles",
    ...articles.map(
      (item) => `- [${item.title}](${absoluteUrl(`/knowledge-base/${item.slug}`)}): ${item.summary}`,
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
