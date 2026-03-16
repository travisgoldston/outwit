import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  INSIGHTS,
  INSIGHT_SLUGS,
  type InsightSlug,
} from "@/content/insights";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return INSIGHT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS[slug as InsightSlug];
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
  const article = INSIGHTS[slug as InsightSlug];
  if (!article) notFound();

  const Body = article.body;

  return (
    <article className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
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
            {article.readTime}
          </p>
        </header>

        <div className="mt-10 border-t border-slate-200 pt-10">
          <Body />
        </div>

        <footer className="mt-14 rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Ready to put this into practice?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            We help businesses turn their website and marketing into a growth
            system. Start with a strategy conversation and we'll map the
            smartest path forward.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
            >
              Start your project
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              Read more insights
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
