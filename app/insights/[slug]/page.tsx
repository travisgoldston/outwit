import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  BLOG_SLUGS,
  type BlogSlug,
} from "@/content/blog";
import { buildMetadata, breadcrumbJsonLd, jsonLd, SITE } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_POSTS[slug as BlogSlug];
  if (!article) {
    return buildMetadata({
      title: "Insights",
      description: "Notes on SEO, websites, and marketing—tested first, written plainly.",
      path: "/insights",
    });
  }
  return buildMetadata({
    title: article.title,
    description: article.metaDescription,
    path: `/insights/${article.slug}`,
  });
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = BLOG_POSTS[slug as BlogSlug];
  if (!article) notFound();

  const Body = article.body;
  const published = article.published;
  const canonicalUrl = `https://outwit.digital/insights/${article.slug}`;

  return (
    <article className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: article.title,
              description: article.metaDescription,
              datePublished: published.iso,
              dateModified: published.iso,
              author: [{ "@type": "Person", name: "Travis Goldston" }],
              publisher: { "@type": "Organization", name: "Outwit" },
              mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
              url: canonicalUrl,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(
            breadcrumbJsonLd({
              url: canonicalUrl,
              crumbs: [
                { name: "Home", path: "/" },
                { name: "Insights", path: "/insights" },
                { name: article.title, path: `/insights/${article.slug}` },
              ],
            })
          )}
        />

        <Link
          href="/insights"
          className="text-sm font-medium text-ow-mid transition-colors hover:text-ow-orange"
        >
          ← All insights
        </Link>

        <header className="mt-6">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-ow-orange">
            Insight
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ow-charcoal sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ow-mid">
            {article.summary}
          </p>
          <p className="mt-3 text-sm font-medium text-ow-mid">
            {published.label} · {article.readTime}
          </p>
        </header>

        <div className="mt-10 border-t border-[rgba(20,40,60,0.12)] pt-10">
          <Body />
        </div>

        <footer className="mt-14 rounded-2xl border border-[rgba(20,40,60,0.12)] bg-white px-6 py-8 shadow-ow-sm">
          <p className="text-sm leading-relaxed text-ow-mid">
            <Link href="/insights" className="font-semibold text-ow-orange hover:underline">
              More insights
            </Link>
            {" · "}
            <Link href="/lab" className="font-semibold text-ow-orange hover:underline">
              Lab
            </Link>
            {" · "}
            <Link href="/about" className="font-semibold text-ow-orange hover:underline">
              About
            </Link>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ow-mid">
            Want to talk? Email{" "}
            <a
              href="mailto:hello@outwitdigital.com"
              className="font-semibold text-ow-orange hover:underline"
            >
              hello@outwitdigital.com
            </a>
            .
          </p>
        </footer>
      </div>
    </article>
  );
}
