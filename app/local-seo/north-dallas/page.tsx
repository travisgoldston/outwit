import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — North Dallas Local SEO Strategy",
  description:
    "Why Outwit targets McKinney, Frisco, Plano, Allen, and Prosper—and how we build local SEO pages without thin city spam.",
};

export default function NorthDallasLocalSeoStrategyPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          North Dallas local SEO strategy (without thin “city spam” pages).
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Outwit is built for home service companies competing in McKinney, Frisco, Plano, Allen,
          and Prosper. Here’s why we target these markets—and how we structure pages so they
          actually rank and convert.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/growth-plan"
            className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
          >
            Get the Growth Plan
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
          >
            Talk to Outwit
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Why these cities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            These markets have real homeowner search volume, strong competition, and high-value job
            mix. That’s exactly where “basic SEO” fails—and where a structured system creates an
            advantage that compounds.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            {[
              "McKinney: fast growth, strong service demand, and competitive Maps results.",
              "Frisco: high-intent searches with buyers who compare quickly.",
              "Plano: mature competition where clarity and conversion often decide the winner.",
              "Allen + Prosper: nearby intent that amplifies authority across North Dallas.",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            How we structure pages (and what we avoid)
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            The goal isn’t to publish a dozen copy/paste location pages. The goal is to match real
            local intent with real content: services, problems, proof, and the next step.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
                We do
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                {[
                  "Build a city page around real homeowner searches and objections.",
                  "Tie each city page to a keyword + page map so it has a job to do.",
                  "Add proof and conversion elements so traffic becomes calls.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neon-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
                We avoid
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                {[
                  "Swapping city names in the same paragraph and calling it “local SEO.”",
                  "Publishing thin pages that have no proof and no clear next step.",
                  "Chasing volume keywords that bring the wrong leads.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neon-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Page ideas that combine niche + location
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            {[
              "HVAC SEO McKinney: emergency AC repair searches that convert into calls",
              "Plumbing SEO Frisco: “water heater repair” intent and pages that build trust fast",
              "Electrical SEO Plano: EV charger installs and panel upgrade demand capture",
              "North Dallas: why Google Business alignment matters more than “blog posting”",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/hvac-seo/mckinney"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange/70 hover:text-neon-orange"
            >
              HVAC SEO in McKinney
            </Link>
            <Link
              href="/plumbing-seo/frisco"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange/70 hover:text-neon-orange"
            >
              Plumbing SEO in Frisco
            </Link>
            <Link
              href="/electrical-seo/plano"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange/70 hover:text-neon-orange"
            >
              Electrical SEO in Plano
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Want the plan for your service area?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            The Growth Plan maps the cities, the pages, and the intent that will actually generate
            inbound calls—without wasting time on pages that can’t win.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/growth-plan"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
            >
              Get the Growth Plan
            </Link>
            <Link
              href="/insights/local-seo-complete-guide"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Read the local SEO guide
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

