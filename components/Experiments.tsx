import Link from "next/link";

const experiments = [
  {
    title: "Can AI content rank on Google?",
    summary:
      "We tested publishing AI-generated content on a brand new site.",
  },
  {
    title: "How fast can a new domain rank?",
    summary: "A real-world test launching and growing a site from zero.",
  },
  {
    title: "Can a $200 niche site make money?",
    summary: "A small budget experiment testing niche SEO.",
  },
];

export default function Experiments() {
  return (
    <section id="experiments" className="border-t border-strategy-navy/10 bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-deep-gray sm:text-4xl">
          Real marketing experiments.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-deep-gray/85">
          We test marketing ideas ourselves before recommending them to anyone
          else.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {experiments.map((exp, i) => (
            <article
              key={exp.title}
              className="rounded-2xl border border-strategy-navy/10 bg-cream/50 p-8 transition-all duration-300 hover:border-fox-orange/30 hover:shadow-md"
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-fox-orange">
                Experiment {i + 1}
              </span>
              <h3 className="mt-3 text-xl font-bold text-strategy-navy">
                {exp.title}
              </h3>
              <p className="mt-4 leading-relaxed text-deep-gray/85">
                {exp.summary}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="#blog"
            className="inline-flex items-center rounded-lg border-2 border-strategy-navy px-6 py-3 text-base font-semibold text-strategy-navy transition-all hover:bg-strategy-navy hover:text-white"
          >
            View All Experiments
          </Link>
        </div>
      </div>
    </section>
  );
}
