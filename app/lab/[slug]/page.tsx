import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type LabSlug =
  | "can-ai-content-rank-on-google"
  | "how-fast-can-a-new-domain-rank"
  | "can-a-200-niche-site-make-money";

type LabExperiment = {
  slug: LabSlug;
  title: string;
  status: "Complete" | "In Progress";
  summary: string;
  problem: string;
  hypothesis: string;
  method: string[];
  findings: string[];
  whatItMeans: string[];
};

const LAB_EXPERIMENTS: Record<LabSlug, LabExperiment> = {
  "can-ai-content-rank-on-google": {
    slug: "can-ai-content-rank-on-google",
    title: "Can AI content rank on Google?",
    status: "Complete",
    summary:
      "We tested how AI-assisted content performs in search when it’s edited, structured, and fact-checked like a real editorial workflow.",
    problem:
      "AI makes it easy to publish a lot of content—but most of it reads the same, and there’s real concern about whether Google will trust or surface it.",
    hypothesis:
      "If we treat AI as a drafting assistant—not the final writer—and combine it with strong outlines, editorial judgment, and real examples, we can ship content that both ranks and builds trust.",
    method: [
      "Picked a fresh domain in a niche with real but reasonable competition.",
      "Defined topics and outlines first, based on search demand and business-relevant queries.",
      "Used AI to draft sections, then heavily edited for clarity, specificity, and brand tone.",
      "Added unique data points, examples, and internal links that AI couldn’t invent on its own.",
      "Tracked indexing, rankings, and click-through over several months.",
    ],
    findings: [
      "Pages that combined AI drafts with strong editing and unique examples earned impressions and rankings similar to human-written baselines.",
      "Thin, unedited AI drafts underperformed—even when the outline was solid—confirming that “just paste from the model” is not a strategy.",
      "Longer-form, structured guides with clear subheads and internal links performed best, regardless of whether AI was involved.",
    ],
    whatItMeans: [
      "AI can speed up production, but you still need a clear point of view, strong outlines, and a human editor.",
      "Google is rewarding usefulness and clarity, not whether a model touched your draft.",
      "For most brands, the win is using AI to go from blank page to solid draft faster—then investing editing time where it matters most.",
    ],
  },
  "how-fast-can-a-new-domain-rank": {
    slug: "how-fast-can-a-new-domain-rank",
    title: "How fast can a new domain rank?",
    status: "In Progress",
    summary:
      "We’re measuring what it actually takes for a new domain with no history to start earning meaningful organic traffic.",
    problem:
      "Founders often hear that SEO is a “long game,” but that can mean anything from three months to three years. We wanted real numbers from a clean slate.",
    hypothesis:
      "If we launch a new domain with a tight positioning, a handful of high-quality pages, and a consistent publishing cadence, we can see meaningful organic traction inside 3–6 months.",
    method: [
      "Registered a new domain with no prior history in a clearly defined niche.",
      "Launched a small, focused site: homepage, a few service/offer pages, and one or two in-depth guides.",
      "Published new content on a predictable schedule, guided by a tight keyword map.",
      "Built only a few quality links (no spam, no mass outreach) to see how far fundamentals alone can take it.",
      "Tracked impressions, clicks, and queries weekly, plus which pages started to pull their own weight.",
    ],
    findings: [
      "Within the first few weeks, we saw impressions on long-tail queries—even before any serious link-building.",
      "Pages that matched specific problems (“how to do X in situation Y”) picked up traction faster than generic “ultimate guides.”",
      "Ranking volatility was high in the first 90 days, but patterns started to stabilize around the 4–6 month mark.",
    ],
    whatItMeans: [
      "New domains don’t have to wait years to see signal, but they do need focus—one audience, one core problem set, and consistent publishing.",
      "Early on, you’re measuring momentum (impressions, clicks, query diversity), not just page-one rankings.",
      "If you’re launching something new, budgeting for 3–6 months of steady effort is realistic—and you can accelerate that with smart paid tests.",
    ],
  },
  "can-a-200-niche-site-make-money": {
    slug: "can-a-200-niche-site-make-money",
    title: "Can a $200 niche site make money?",
    status: "Complete",
    summary:
      "We ran a low-budget niche site experiment to see if careful topic selection and lean execution can still produce meaningful revenue.",
    problem:
      "There’s a lot of advice about launching tiny niche sites, but most of it doesn’t factor in today’s competition, AI content, and changing search behavior.",
    hypothesis:
      "If we pick a tightly defined niche, publish genuinely helpful content, and keep costs under $200, we can still build a small but profitable site.",
    method: [
      "Validated a niche based on problem intensity, product ecosystem, and search demand—not just keyword difficulty scores.",
      "Registered a low-cost domain, used a simple but fast theme, and kept tooling to the essentials.",
      "Published a limited set of high-intent articles and product-focused pages, each aimed at a clear outcome.",
      "Monetized with a mix of affiliate offers and simple email capture for later offers.",
      "Tracked traffic, clicks, and revenue over several months without adding more spend.",
    ],
    findings: [
      "It’s still possible to earn in a micro-budget niche, but topic selection matters far more than clever tactics.",
      "Content that solved concrete problems with clear next steps outperformed generic “best X” roundups.",
      "Revenue was lumpy but real—enough to validate the model, not enough to pretend it’s passive income at scale.",
    ],
    whatItMeans: [
      "For most founders, niche sites are better as learning labs than primary businesses.",
      "If you’re going to run one, treat it like a product: pick a real problem, help people solve it, and be honest about the economics.",
      "The same skills (positioning, content, funnels) transfer directly to your main brand—where the upside is usually much larger.",
    ],
  },
};

type PageProps = {
  params: { slug: LabSlug };
};

export function generateStaticParams() {
  return Object.keys(LAB_EXPERIMENTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const experiment = LAB_EXPERIMENTS[params.slug as LabSlug];
  if (!experiment) {
    return {
      title: "Outwit Lab — Experiment",
      description: "Experiment from the Outwit Marketing Lab.",
    };
  }

  return {
    title: `Outwit Lab — ${experiment.title}`,
    description: experiment.summary,
  };
}

export default function LabExperimentPage({ params }: PageProps) {
  const experiment = LAB_EXPERIMENTS[params.slug as LabSlug];

  if (!experiment) {
    notFound();
  }

  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/lab"
          className="text-sm font-medium text-slate-600 transition-colors hover:text-neon-orange"
        >
          ← Back to the Lab
        </Link>

        <p className="mt-6 text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
          {experiment.status} Experiment
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {experiment.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-700">{experiment.summary}</p>

        <div className="mt-10 space-y-10 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">The problem we’re testing</h2>
            <p className="mt-3 text-sm leading-relaxed">{experiment.problem}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">Our hypothesis</h2>
            <p className="mt-3 text-sm leading-relaxed">{experiment.hypothesis}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">How we’re running it</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {experiment.method.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">What we’re seeing</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {experiment.findings.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">What it means for you</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {experiment.whatItMeans.map((item) => (
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
            Want to run a version of this for your brand?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            The best experiments are tied to real growth goals. We’ll help you design a focused
            test, measure it properly, and turn the results into clear next steps.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
            >
              Talk about your experiment
            </Link>
            <Link
              href="/growth-plan"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Start with the Growth Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

