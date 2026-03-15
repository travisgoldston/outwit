import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outwit — Marketing Insights",
  description:
    "Clear, no-jargon articles on websites, SEO, and marketing systems to help you make smarter decisions and outwit your competition.",
};

type Insight = {
  title: string;
  summary: string;
  readTime: string;
};

const insights: Insight[] = [
  {
    title: "Why most business websites fail",
    summary:
      "Most sites look fine—but fail at one job: turning the right visitors into conversations. Here’s how to spot the leaks.",
    readTime: "7 min read",
  },
  {
    title: "How much should a website cost in 2026?",
    summary:
      "A grounded way to think about website budgets, from simple builds to strategy-led redesigns.",
    readTime: "9 min read",
  },
  {
    title: "How long does SEO really take?",
    summary:
      "What you can expect in the first 3, 6, and 12+ months—and how to know if your investment is working.",
    readTime: "8 min read",
  },
  {
    title: "What makes a high-converting website",
    summary:
      "The structure, messaging, and proof we look for when we rebuild a homepage to actually sell.",
    readTime: "10 min read",
  },
  {
    title: "Local SEO: The complete guide",
    summary:
      "How local brands can use Google Business, on-site content, and reviews to own their market.",
    readTime: "12 min read",
  },
  {
    title: "Marketing funnels explained for small businesses",
    summary:
      "A simple, non-academic way to understand funnels—and how to build one without 20 tools.",
    readTime: "6 min read",
  },
  {
    title: "SEO vs paid ads: which one should you choose?",
    summary:
      "When to invest in search, when to lean on ads, and how the two can work together instead of competing.",
    readTime: "7 min read",
  },
];

export default function InsightsPage() {
  return (
    <div className="bg-vibe-bg px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Insights for smarter marketing decisions.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-white/80">
          No fluff, no buzzwords—just clear explanations of how modern websites, SEO, and marketing
          systems actually work.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl grid gap-6 md:grid-cols-2">
        {insights.map((article) => (
          <article
            key={article.title}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
          >
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange/80">
                Insight
              </p>
              <h2 className="mt-3 text-lg font-semibold text-white">{article.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{article.summary}</p>
            </div>
            <p className="mt-5 text-xs font-medium text-white/60">{article.readTime}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

