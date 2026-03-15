import Link from "next/link";

const experiments = [
  {
    title: "Can AI content rank on Google?",
    summary: "We tested publishing AI-generated content on a brand new site.",
    status: "Complete" as const,
  },
  {
    title: "How fast can a new domain rank?",
    summary: "A real-world test launching and growing a site from zero.",
    status: "In Progress" as const,
  },
  {
    title: "Can a $200 niche site make money?",
    summary: "A small budget experiment testing niche SEO.",
    status: "Complete" as const,
  },
];

const statusStyles: Record<string, string> = {
  Complete: "bg-strategy-navy/10 text-strategy-navy",
  "In Progress": "bg-fox-orange/10 text-fox-orange",
};

export default function Experiments() {
  return (
    <section id="experiments" className="border-t border-strategy-navy/10 bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-deep-gray sm:text-4xl">
          Real marketing experiments.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-deep-gray/85">
          We test ideas ourselves before recommending them. No theory—just what we ran and what we learned.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {experiments.map((exp) => (
            <article
              key={exp.title}
              className="flex flex-col rounded-2xl border border-strategy-navy/10 bg-cream/40 p-8 shadow-sm transition-all duration-300 hover:border-fox-orange/20 hover:shadow-md"
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${statusStyles[exp.status] ?? "bg-deep-gray/10 text-deep-gray"}`}
              >
                {exp.status}
              </span>
              <h3 className="mt-4 text-xl font-bold text-strategy-navy">
                {exp.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-deep-gray/85">
                {exp.summary}
              </p>
              <Link
                href="#blog"
                className="mt-6 inline-flex items-center text-sm font-semibold text-fox-orange transition-colors hover:text-fox-orange/80"
              >
                Read more
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="#blog"
            className="inline-flex items-center justify-center rounded-xl border-2 border-strategy-navy px-6 py-3.5 text-base font-semibold text-strategy-navy transition-all hover:bg-strategy-navy hover:text-white"
          >
            View All Experiments
          </Link>
        </div>
      </div>
    </section>
  );
}
