import type { Metadata } from "next";

export const SITE = {
  name: "Outwit",
  baseUrl: "https://outwit.digital",
  titleSuffix: "Outwit — North Texas SEO & Web Design",
  email: "hello@outwitdigital.com",
} as const;

export function buildTitle(pageTitle: string) {
  return `${pageTitle} | ${SITE.titleSuffix}`;
}

export function buildMetadata(args: {
  /** Human page title (no suffix). */
  title: string;
  /** 150–160-ish char description. */
  description: string;
  /** Absolute or site-relative path like "/services/seo". */
  path: string;
}): Metadata {
  const url = args.path.startsWith("http") ? args.path : `${SITE.baseUrl}${args.path}`;
  return {
    title: buildTitle(args.title),
    description: args.description,
    alternates: { canonical: url },
    openGraph: {
      title: buildTitle(args.title),
      description: args.description,
      url,
      siteName: SITE.name,
      type: "website",
    },
  };
}

export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data) } as const;
}

export function breadcrumbJsonLd(args: {
  /** Absolute URL for the current page */
  url: string;
  /** Crumbs in order, including current page */
  crumbs: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: args.crumbs.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: c.name,
      item: c.path.startsWith("http") ? c.path : `${SITE.baseUrl}${c.path}`,
    })),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    areaServed: "North Texas",
    email: SITE.email,
    sameAs: ["https://x.com/outwitdigital", "https://instagram.com/outwitdigital"],
  };
}

export function serviceJsonLd(args: {
  name: string;
  urlPath: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    url: `${SITE.baseUrl}${args.urlPath}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      url: SITE.baseUrl,
      areaServed: args.areaServed ?? "North Texas",
      email: SITE.email,
    },
    areaServed: args.areaServed ?? "North Texas",
  };
}

