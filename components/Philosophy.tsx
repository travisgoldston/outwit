import Link from "next/link";
import Reveal from "./Reveal";

const articles = [
  {
    title: "Why most business websites fail",
    summary:
      "A simple lens for spotting where your current site is losing trust, traffic, and revenue.",
  },
  {
    title: "What makes a high-converting homepage",
    summary:
      "The first screen above the fold and the StoryBrand-inspired structure we use at Outwit.",
  },
  {
    title: "How long SEO really takes",
    summary:
      "Setting the right expectations so you can invest with confidence instead of guessing.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="blog"
      className="border-t border-white/5 bg-[#FAFAFA] px-6 py-20 text-slate-900 lg:px-8 lg:py-28"
    >
      <Reveal className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Insights for smarter marketing.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              Clear, no-jargon explanations that help founders and marketing leaders make better decisions.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all hover:border-neon-orange/60 hover:text-neon-orange"
          >
            View all insights
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {articles.map((article, idx) => (
            <Reveal key={article.title} delayMs={80 * idx}>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-neon-orange/60 hover:shadow-md">
                <h3 className="text-lg font-semibold text-slate-900">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {article.summary}
                </p>
                <Link
                  href="/insights"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-neon-orange transition-colors hover:text-neon-orange/80"
                >
                  Read article
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
