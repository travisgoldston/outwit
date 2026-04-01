import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import VibeMonitor from "@/components/VibeMonitor";
import { LAB_SLUGS, LAB_EXPERIMENTS } from "@/content/lab";
import { BLOG_LIST, BLOG_PUBLISHED } from "@/content/blog";

export default function Page() {
  const activeExperiments = LAB_SLUGS.slice(0, 6);
  const latestInsights = BLOG_LIST.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-vibe-bg px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
              Outwit
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Marketing experiments with real data
              <span className="text-neon-orange">.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl lg:mx-0">
              I build sites, run SEO experiments, and document what actually works. No theory. No
              fluff. Just tested, shown-in-public proof.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/lab"
                className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90 hover:shadow-[0_0_20px_rgba(255,95,31,0.4)]"
              >
                Explore the Lab
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center justify-center rounded-lg border border-white bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:border-neon-orange"
              >
                Read insights
              </Link>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Looking for hands-on marketing help?{" "}
              <a
                href="https://bluebonnetgrowth.com"
                className="link-underline-ltr text-white/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Bluebonnet Growth
              </a>
              .
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </section>

      <VibeMonitor />

      <section className="border-t border-white/5 bg-[#FAFAFA] px-6 py-20 text-slate-900 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Active experiments
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              The Lab is where I publish hypotheses, methodology, and outcomes—plus screenshots and
              charts as the data comes in.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activeExperiments.map((slug) => {
              const exp = LAB_EXPERIMENTS[slug];
              return (
                <Link
                  key={slug}
                  href={`/lab/${slug}`}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-neon-orange/60 hover:shadow-md"
                >
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-700">
                    {exp.status}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{exp.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{exp.summary}</p>
                  <span className="mt-6 inline-flex items-center text-xs font-semibold text-neon-orange">
                    Read experiment
                    <svg
                      className="ml-1 h-3.5 w-3.5"
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
              );
            })}
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

      <section className="border-t border-white/5 bg-[#FAFAFA] px-6 py-20 text-slate-900 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Latest insights
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Notes on SEO, websites, and marketing from someone who tests everything on real sites
              first.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            {latestInsights.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-neon-orange/60 hover:shadow-md"
              >
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange/80">
                    {BLOG_PUBLISHED[article.slug]}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{article.title}</h3>
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

          <div className="mt-12 flex justify-center">
            <Link
              href="/insights"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition-all hover:border-neon-orange/60 hover:text-neon-orange"
            >
              View all insights
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-vibe-bg px-6 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sites I&apos;ve built and grown
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              This is the portfolio side of the lab—real sites, real constraints, and the ongoing
              work.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <a
                href="https://bluebonnetgrowth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-neon-orange/50 hover:bg-white/7"
              >
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange/90">
                  Bluebonnet Growth
                </p>
                <p className="mt-3 text-base font-semibold text-white">
                  Local SEO agency site (rebuild + transparent Search Console updates)
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  A public rebuild and growth log—indexation, impressions, clicks, and rankings
                  shared every two weeks.
                </p>
              </a>

              <a
                href="https://budgetocity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-neon-orange/50 hover:bg-white/7"
              >
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange/90">
                  Budgetocity
                </p>
                <p className="mt-3 text-base font-semibold text-white">
                  Fractional CMO SEO growth experiment
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  YoY organic growth, content strategy decisions, and what worked (and didn&apos;t).
                </p>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
              About
            </p>
            <h3 className="mt-3 text-xl font-semibold">I&apos;m Travis Goldston.</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              I have way too many hobbies and vibe coding is my crack cocaine. Outwit is where I
              show my work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-neon-orange/20 transition-all hover:bg-neon-orange/90"
              >
                Read the full story
              </Link>
              <a
                href="mailto:hello@outwit.digital"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/90 transition-colors hover:border-neon-orange/60 hover:text-white"
              >
                hello@outwit.digital
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
