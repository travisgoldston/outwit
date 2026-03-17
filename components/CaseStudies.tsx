import Link from "next/link";

const cases = [
  {
    slug: "b2b-saas-organic-growth",
    title: "B2B SaaS: Turning a brochure site into an SEO growth engine",
    metric: "4x organic demo requests in 6 months",
  },
  {
    slug: "services-conversion-lift",
    title: "Professional services: Rebuilding the website as a sales script",
    metric: "2.3x increase in booked consultations",
  },
  {
    slug: "local-search-dominance",
    title: "Local brand: Owning page one for high-intent keywords",
    metric: "+187% calls from Google Business",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="border-t border-white/5 bg-[#FAFAFA] px-6 py-20 text-slate-900 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Case studies from the Outwit lab.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-slate-600">
          A sample of how smarter strategy, websites, and SEO turn into real pipeline and revenue.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-neon-orange/60 hover:shadow-md"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neon-orange">
                Case Study
              </span>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                {c.title}
              </h3>
              <p className="mt-4 text-sm font-medium text-slate-600">
                {c.metric}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-neon-orange group-hover:text-neon-orange/80">
                View case study
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
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
          >
            View all case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
