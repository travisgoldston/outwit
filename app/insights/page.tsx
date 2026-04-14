import Link from "next/link";
import { BLOG_LIST, BLOG_PUBLISHED } from "@/content/blog";
import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd, jsonLd, SITE } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Insights",
    description:
      "Notes on SEO, websites, and marketing from a North Texas agency that tests everything with real data first.",
    path: "/insights",
  }),
};

export default function InsightsPage() {
  const url = `${SITE.baseUrl}/insights`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
  ];

  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd({ url, crumbs }))}
      />
      <div className="mx-auto max-w-4xl text-center">
        <p className="ow-label flex w-full justify-center">Insights</p>
        <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
          What the data says
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ow-mid">
          Notes on SEO, websites, and marketing from someone who tests everything on real sites
          first.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-3.5 md:grid-cols-2">
        {BLOG_LIST.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="flex flex-col justify-between rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-ow"
          >
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ow-orange/90">
                {BLOG_PUBLISHED[article.slug]}
              </p>
              <h2 className="mt-3 text-lg font-bold text-ow-charcoal">{article.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ow-mid">{article.summary}</p>
            </div>
            <p className="mt-5 text-xs font-medium text-ow-mid/80">{article.readTime}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-ow-orange">
              Read article →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
