import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type CaseStudySlug = "b2b-saas-organic-growth" | "services-conversion-lift" | "local-search-dominance";

type CaseStudy = {
  slug: CaseStudySlug;
  title: string;
  clientType: string;
  metric: string;
  problem: string[];
  strategy: string[];
  solution: string[];
  result: string[];
};

const CASE_STUDIES: Record<CaseStudySlug, CaseStudy> = {
  "b2b-saas-organic-growth": {
    slug: "b2b-saas-organic-growth",
    title: "Turning a brochure site into an SEO growth engine",
    clientType: "B2B SaaS",
    metric: "4x organic demo requests in 6 months",
    problem: [
      "The site looked polished but acted like a static brochure—no clear journey from features to demos.",
      "Most content targeted low-intent keywords and brand phrases, not the problems buyers were actively searching.",
      "Analytics showed decent traffic but very few product-qualified demo requests from organic.",
    ],
    strategy: [
      "Reposition the website around clear pains, outcomes, and buyer language instead of internal feature lists.",
      "Rebuild the information architecture around high-intent search themes and buying stages.",
      "Design a measurement plan that tied specific keyword clusters and pages to demo pipeline.",
    ],
    solution: [
      "Rewrote the homepage and key product pages to follow a StoryBrand-inspired narrative: problem, solution, proof, and a clear next step.",
      "Created focused solution pages targeting job-to-be-done keywords and vertical use cases instead of generic industry pages.",
      "Implemented technical SEO fixes (crawl, index, performance) and structured internal linking between education, solution, and demo pages.",
    ],
    result: [
      "Organic demo requests increased 4x over 6 months with no additional ad spend.",
      "The client’s sales team reported higher-quality conversations because prospects arrived already understanding the product’s value.",
      "Leadership now reviews a simple monthly SEO & conversion dashboard instead of a cluttered set of vanity metrics.",
    ],
  },
  "services-conversion-lift": {
    slug: "services-conversion-lift",
    title: "Rebuilding the website as a sales script",
    clientType: "Professional Services",
    metric: "2.3x increase in booked consultations",
    problem: [
      "The existing site buried key offers under layers of navigation and agency-speak.",
      "Most visitors didn’t know which service was right for them or what the first step looked like.",
      "Calendars and contact forms lived on disconnected pages, creating friction at the exact moment interest peaked.",
    ],
    strategy: [
      "Clarify the core offer and frame the brand as a guide with a simple 3-step engagement plan.",
      "Restructure the homepage and service pages to read like a conversation—not a menu.",
      "Make it just as easy to book a call as it is to keep browsing.",
    ],
    solution: [
      "Rewrote messaging around a clear promise, the cost of doing nothing, and the payoff of engaging.",
      "Designed new service pages with scannable sections: who it’s for, what’s included, what outcomes to expect.",
      "Integrated a single, well-placed booking CTA across the site with pre-qualified intake questions.",
    ],
    result: [
      "Booked consultations from the website more than doubled with the same traffic levels.",
      "Prospects arrived to calls referencing specific copy and visuals, shortening the sales cycle.",
      "The team now treats the website as a primary sales channel instead of a static brochure.",
    ],
  },
  "local-search-dominance": {
    slug: "local-search-dominance",
    title: "Owning page one for high-intent local keywords",
    clientType: "Local Brand",
    metric: "+187% calls from Google Business",
    problem: [
      "The business relied heavily on word-of-mouth while competitors dominated Google Maps and local packs.",
      "Service descriptions were thin and inconsistent between the website and Google Business profile.",
      "The site lacked location pages and trust signals, so even branded searches underperformed.",
    ],
    strategy: [
      "Treat Google Business and the website as a single local search system.",
      "Create high-quality service and location pages that answer real customer questions.",
      "Build a simple, repeatable process for reviews and photo updates.",
    ],
    solution: [
      "Optimized Google Business with clear categories, services, photos, and messaging aligned to on-site content.",
      "Built SEO-friendly service + city pages targeting the highest-intent local keywords.",
      "Implemented a lightweight review-generation workflow tied to the client’s existing operations.",
    ],
    result: [
      "Calls from Google Business increased by 187% over four months.",
      "The brand moved from sporadic map visibility to consistent top-3 placement for priority terms.",
      "Local word-of-mouth is now amplified by search, not limited by it.",
    ],
  },
};

type PageProps = {
  params: { slug: CaseStudySlug };
};

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const cs = CASE_STUDIES[params.slug as CaseStudySlug];
  if (!cs) {
    return {
      title: "Outwit — Case Study",
    };
  }
  return {
    title: `Outwit — ${cs.title}`,
    description: cs.metric,
  };
}

export default function CaseStudyDetail({ params }: PageProps) {
  const cs = CASE_STUDIES[params.slug as CaseStudySlug];
  if (!cs) notFound();

  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/case-studies"
          className="text-sm font-medium text-slate-600 transition-colors hover:text-neon-orange"
        >
          ← Back to all case studies
        </Link>
        <p className="mt-6 text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
          {cs.clientType}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {cs.title}
        </h1>
        <p className="mt-4 text-base font-medium text-neon-orange/90">{cs.metric}</p>

        <div className="mt-10 space-y-10 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">The Problem</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {cs.problem.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">The Strategy</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {cs.strategy.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">The Solution</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {cs.solution.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">The Result</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {cs.result.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Curious what Outwit could do for your brand?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Every engagement starts with a strategy conversation focused on your market, your offer,
            and the smartest way to outwit your competition.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
            >
              Start your project
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Explore solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

