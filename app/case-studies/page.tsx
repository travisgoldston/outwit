import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Case Studies",
  description:
    "Stories of how smarter strategy, websites, and SEO helped businesses outwit their competition and turn traffic into revenue.",
};

const CASE_STUDIES = [
  {
    slug: "b2b-saas-organic-growth",
    label: "B2B SaaS",
    title: "Turning a brochure site into an SEO growth engine",
    metric: "4x organic demo requests in 6 months",
  },
  {
    slug: "services-conversion-lift",
    label: "Professional Services",
    title: "Rebuilding the website as a sales script",
    metric: "2.3x increase in booked consultations",
  },
  {
    slug: "local-search-dominance",
    label: "Local Brand",
    title: "Owning page one for high-intent keywords",
    metric: "+187% calls from Google Business",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Proof that smart beats loud.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          These are snapshots from the Outwit lab—real projects where better strategy, websites,
          and SEO created measurable growth.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-6xl grid gap-8 sm:grid-cols-3">
        {CASE_STUDIES.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-neon-orange/60 hover:shadow-md"
          >
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-neon-orange">
              {cs.label}
            </span>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">{cs.title}</h2>
            <p className="mt-4 text-sm font-medium text-slate-600">{cs.metric}</p>
            <span className="mt-6 inline-flex items-center text-sm font-semibold text-neon-orange group-hover:text-neon-orange/80">
              Read the case study
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

