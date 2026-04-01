import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  BLOG_SLUGS,
  type BlogSlug,
} from "@/content/blog";

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
    return {
      title: "Outwit — Insights",
    };
  }
  return {
    title: `Outwit — ${article.title}`,
    description: article.metaDescription,
    openGraph: {
      title: `${article.title} | Outwit`,
      description: article.metaDescription,
    },
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = BLOG_POSTS[slug as BlogSlug];
  if (!article) notFound();

  const Body = article.body;
  const published = article.published;
  const canonicalUrl = `https://outwit.digital/insights/${article.slug}`;

  return (
    <article className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
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

        <Link
          href="/insights"
          className="text-sm font-medium text-slate-600 transition-colors hover:text-neon-orange"
        >
          ← All insights
        </Link>

        <header className="mt-6">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
            Insight
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {article.summary}
          </p>
          <p className="mt-3 text-sm font-medium text-slate-500">
            {published.label} · {article.readTime}
          </p>
        </header>

        <div className="mt-10 border-t border-slate-200 pt-10">
          <Body />
        </div>

        <footer className="mt-14 rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm">
          <p className="text-sm leading-relaxed text-slate-600">
            <Link href="/insights" className="font-semibold text-neon-orange hover:underline">
              More insights
            </Link>
            {" · "}
            <Link href="/lab" className="font-semibold text-neon-orange hover:underline">
              Lab
            </Link>
            {" · "}
            <Link href="/about" className="font-semibold text-neon-orange hover:underline">
              About
            </Link>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Want to talk? Email{" "}
            <a
              href="mailto:hello@outwit.digital"
              className="font-semibold text-neon-orange hover:underline"
            >
              hello@outwit.digital
            </a>
            .
          </p>
        </footer>
      </div>
    </article>
  );
}
