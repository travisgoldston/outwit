import type { MetadataRoute } from "next";
import { BLOG_SLUGS } from "@/content/blog";
import { LAB_SLUGS } from "@/content/lab";

const CASE_STUDY_SLUGS = [
  "b2b-saas-organic-growth",
  "services-conversion-lift",
  "local-search-dominance",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://outwit.digital";

  const routes = [
    "/",
    "/lab",
    "/insights",
    "/about",
    "/services",
    "/contact",
    "/case-studies",
    ...CASE_STUDY_SLUGS.map((slug) => `/case-studies/${slug}`),
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
