import type { MetadataRoute } from "next";
import { BLOG_SLUGS } from "@/content/blog";
import { LAB_SLUGS } from "@/content/lab";
import { CITY_SLUGS } from "@/content/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://outwit.digital";

  const routes = [
    "/",
    "/lab",
    "/insights",
    "/about",
    "/services",
    "/services/seo",
    "/services/web-design",
    "/services/conversion-optimization",
    "/pricing",
    "/locations",
    "/case-studies",
    "/contact",
    ...BLOG_SLUGS.map((slug) => `/insights/${slug}`),
    ...LAB_SLUGS.map((slug) => `/lab/${slug}`),
    ...CITY_SLUGS.map((slug) => `/locations/${slug}`),
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
