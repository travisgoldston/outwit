import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — HVAC SEO in Plano",
  description:
    "HVAC SEO in Plano for companies that want more inbound calls from high-intent search and a system that ties SEO to booked jobs. Get the Growth Plan.",
};

export default function HvacSeoPlanoPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          HVAC SEO in Plano: get found first when homeowners need help.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Outwit builds a search advantage for Plano HVAC companies by targeting the queries that
          produce calls, then tightening the website so those calls actually happen.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/growth-plan"
            className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
          >
            Get the Growth Plan
          </Link>
          <Link
            href="/services"
            className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
          >
            See the Growth Engine
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Why ranking in Plano is harder than it looks
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Many HVAC companies “do SEO” and still lose because their strategy is disconnected from
            buying intent. Plano homeowners don’t want content. They want relief, trust, and a fast
            next step. Outwit connects search visibility to conversion.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What changes when you run a system
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            {[
              "Your SEO work has a map: every target search has a page designed to win it.",
              "Local signals (Google Business + on-site proof) reinforce each other instead of drifting apart.",
              "The site stops leaking demand and starts guiding visitors to call or book.",
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
              Get the Growth Plan
            </Link>
            <Link
              href="/insights/seo-vs-paid-ads-which-to-choose"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              SEO vs paid ads
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Want to own the searches that pay in Plano?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Start with the Growth Plan. You’ll know exactly what to fix and what to build before
            you commit to a monthly engine.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/growth-plan"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
            >
              Get the Growth Plan
            </Link>
            <Link
              href="/hvac-seo/mckinney"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              HVAC SEO in McKinney
            </Link>
            <Link
              href="/hvac-seo/frisco"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              HVAC SEO in Frisco
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

