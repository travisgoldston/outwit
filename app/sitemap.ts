import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://outwit.digital";

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
    "/insights/hvac-seo-mckinney-that-converts",
    "/hvac-seo/mckinney",
    "/hvac-seo/frisco",
    "/hvac-seo/plano",
    "/plumbing-seo/mckinney",
    "/plumbing-seo/frisco",
    "/plumbing-seo/plano",
    "/electrical-seo/mckinney",
    "/electrical-seo/frisco",
    "/electrical-seo/plano",
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

