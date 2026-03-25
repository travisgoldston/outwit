import type { MetadataRoute } from "next";
import { BLOG_SLUGS } from "@/content/blog";
import { LAB_SLUGS } from "@/content/lab";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://outwit.digital";

  const routes = [
    "/",
    "/lab",
    "/insights",
    "/about",
    ...BLOG_SLUGS.map((slug) => `/insights/${slug}`),
    ...LAB_SLUGS.map((slug) => `/lab/${slug}`),
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
