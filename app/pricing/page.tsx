import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Pricing",
  description:
    "Simple, transparent pricing for the Outwit Growth Plan and Outwit Growth Engine. Built for HVAC, plumbing, and electrical companies in North Dallas.",
};

export default function PricingPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Simple, transparent pricing for the Outwit Growth Engine.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Outwit is a system built to produce booked jobs from high-intent local search. Clear
          deliverables. Clear expectations. No hourly games.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/growth-plan"
            className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
          >
            Get Your Growth Plan
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
          >
            Start Your Engine
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl grid gap-8 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">One-time</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Growth Plan
          </h2>
          <p className="mt-3 text-sm font-medium text-slate-700">$750–$1,500</p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A focused strategy engagement that maps the exact path to win your local market and turn
            search demand into leads you can answer.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            {[
              "SEO audit + local visibility diagnosis",
              "Keyword map tied to high-intent searches",
              "Competitor breakdown (why they win, where they’re weak)",
              "90-day roadmap with priorities in order",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/growth-plan"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
            >
              Get Your Growth Plan
            </Link>
            <Link
              href="/local-seo/north-dallas"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              See the geo strategy
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">Monthly</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Outwit Growth Engine
          </h2>
          <p className="mt-3 text-sm font-medium text-slate-700">$2,000–$3,500 / month</p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Execution of the system: high-intent search capture, on-site optimization, conversion
            improvements, and reporting tied to leads.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            {[
              "Ongoing SEO + content system built around job intent",
              "On-site optimization and internal linking",
              "Conversion layer improvements (messaging, proof, CTAs)",
              "Reporting centered on leads (calls/forms) and booked-job signals where available",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
            >
              Start Your Engine
            </Link>
            <Link
              href="/lab"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              See what we test
            </Link>
          </div>
        </section>
      </div>

      <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Pricing FAQ
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {[
            {
              q: "Why isn’t this hourly?",
              a: "Because hours don’t equal outcomes. You’re paying for a system built to produce booked jobs—and a plan you can verify.",
            },
            {
              q: "How soon should we expect results?",
              a: "Expect early signals first, then compounding inbound demand. The Growth Plan sets realistic expectations based on your market and current foundation.",
            },
            {
              q: "Do we have to start with the Growth Plan?",
              a: "If you want speed and precision, yes. It prevents wasted months and makes the execution plan explicit.",
            },
            {
              q: "Is there a multi-location tier?",
              a: "Not yet. It’s on the roadmap for multi-location operators where the system needs deeper structure and reporting infrastructure.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6">
              <p className="font-semibold text-slate-900">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/growth-plan"
            className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
          >
            Get Your Growth Plan
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
          >
            Start Your Engine
          </Link>
        </div>
      </div>
    </div>
  );
}

