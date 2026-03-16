import type { Metadata } from "next";
import Link from "next/link";
import { INSIGHTS_LIST } from "@/content/insights";

export const metadata: Metadata = {
  title: "Outwit — Marketing Insights",
  description:
    "Clear, no-jargon articles on websites, SEO, and marketing systems to help you make smarter decisions and outwit your competition.",
};

export default function InsightsPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Insights for smarter marketing decisions.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          No fluff, no buzzwords—just clear explanations of how modern websites, SEO, and marketing
          systems actually work.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl grid gap-6 md:grid-cols-2">
        {INSIGHTS_LIST.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-neon-orange/60 hover:shadow-md"
          >
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange/80">
                Insight
              </p>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">{article.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{article.summary}</p>
            </div>
            <p className="mt-5 text-xs font-medium text-slate-500">{article.readTime}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-neon-orange">
              Read article
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
