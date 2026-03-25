import type { MetadataRoute } from "next";
import {
  WHO_HELP_NICHES,
  WHO_HELP_CITY_SLUGS,
} from "@/content/who-we-help";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://outwit.digital";

  const whoWeHelpRoutes: string[] = ["/who-we-help"];
  for (const niche of WHO_HELP_NICHES) {
    whoWeHelpRoutes.push(`/who-we-help/${niche}`);
    for (const city of WHO_HELP_CITY_SLUGS) {
      whoWeHelpRoutes.push(`/who-we-help/${niche}/${city}`);
    }
  }

  const routes = [
    "/",
    "/services",
    "/growth-plan",
    "/pricing",
    "/case-studies",
    "/lab",
    "/insights",
    "/contact",
    "/local-seo/north-dallas",
    ...whoWeHelpRoutes,
    "/insights/hvac-seo-mckinney-that-converts",
    "/hvac-seo/mckinney",
    "/hvac-seo/frisco",
    "/hvac-seo/plano",
    "/hvac-seo/allen",
    "/hvac-seo/richardson",
    "/plumbing-seo/mckinney",
    "/plumbing-seo/frisco",
    "/plumbing-seo/plano",
    "/plumbing-seo/allen",
    "/plumbing-seo/richardson",
    "/electrical-seo/mckinney",
    "/electrical-seo/frisco",
    "/electrical-seo/plano",
    "/electrical-seo/allen",
    "/electrical-seo/richardson",
    "/lab/can-ai-content-rank-on-google",
    "/lab/how-fast-can-a-new-domain-rank",
    "/lab/can-a-200-niche-site-make-money",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

