import Link from "next/link";

const experiments = [
  {
    slug: "can-ai-content-rank-on-google",
    title: "Can AI content rank on Google?",
    summary: "We tested publishing AI-generated content on a brand new site.",
    status: "Complete" as const,
  },
  {
    slug: "how-fast-can-a-new-domain-rank",
    title: "How fast can a new domain rank?",
    summary: "A real-world test launching and growing a site from zero.",
    status: "In Progress" as const,
  },
  {
    slug: "can-a-200-niche-site-make-money",
    title: "Can a $200 niche site make money?",
    summary: "A small budget experiment testing niche SEO.",
    status: "Complete" as const,
  },
];

const statusStyles: Record<string, string> = {
  Complete: "bg-slate-100 text-slate-700",
  "In Progress": "bg-neon-orange/20 text-neon-orange",
};

export default function Experiments() {
  return (
    <section
      id="experiments"
      className="border-t border-white/5 bg-[#FAFAFA] px-6 py-20 text-slate-900 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Inside the Outwit Lab.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-slate-600">
          Experiments in websites, SEO, and conversion that keep your marketing ahead of the curve.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {experiments.map((exp) => (
            <article
              key={exp.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-neon-orange/60 hover:shadow-md"
            >
              <span
                className={`font-mono inline-flex w-fit items-center gap-1.5 rounded px-3 py-1 text-xs font-semibold uppercase tracking-wider ${statusStyles[exp.status] ?? "bg-slate-100 text-slate-700"}`}
              >
                {exp.status === "In Progress" && (
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current animate-pulse-soft" aria-hidden />
                )}
                {exp.status}
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {exp.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                {exp.summary}
              </p>
              <Link
                href={`/lab/${exp.slug}`}
                className="mt-6 inline-flex items-center text-sm font-semibold text-neon-orange transition-colors hover:text-neon-orange/80"
              >
                Read experiment
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/lab"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition-all hover:border-neon-orange/60 hover:text-neon-orange"
          >
            View all experiments
          </Link>
        </div>
      </div>
    </section>
  );
}
