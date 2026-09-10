import type { MetadataRoute } from "next";
import { applications, articles, products, projects } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/products",
    "/applications",
    "/projects",
    "/knowledge-base",
    "/quote",
    "/contact",
  ];

  const dynamicRoutes = [
    ...products.map((item) => `/products/${item.slug}`),
    ...applications.map((item) => `/applications/${item.slug}`),
    ...projects.map((item) => `/projects/${item.slug}`),
    ...articles.map((item) => `/knowledge-base/${item.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: absoluteUrl(path),
  }));
}
