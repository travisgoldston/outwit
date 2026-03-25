import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Growth Plan",
  description:
    "A one-time Growth Plan that maps the exact SEO system to outrank competitors and generate inbound leads for HVAC, plumbing, and electrical companies in North Dallas.",
};

export default function GrowthPlanPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
          Start Here
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          The Growth Plan.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Most agencies sell activity. Outwit builds unfair advantages. The Growth Plan is a one-time
          strategy engagement that tells you exactly what to do—first, next, and later—to win
          high-intent search and turn it into booked jobs.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What you get
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            This isn’t a generic audit. It’s a market-specific plan built for HVAC, plumbing, and
            electrical companies competing in North Dallas.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            {[
              "SEO audit that shows what’s broken, what’s missing, and what’s holding rankings back.",
              "Keyword + page map built around intent that produces calls (not “nice-to-have” traffic).",
              "Competitor breakdown that explains why they outrank you—and how you take the spots.",
              "A 90-day roadmap with priorities in order, so you’re never guessing what matters next.",
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
              Get my Growth Plan
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              See the Growth Engine
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Who it’s for
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            The Growth Plan is built for owners who care about leads, calls, and booked jobs—and
            want a clear system instead of another vendor relationship.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "HVAC companies in McKinney, Frisco, Plano, Allen, Prosper",
              "Plumbing companies competing for emergency and service searches",
              "Electrical contractors fighting for high-intent local demand",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-slate-200 bg-[#FAFAFA] px-4 py-2 text-xs font-semibold text-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Want a local example first?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            See how we think about local search and lead intent for North Dallas home service
            businesses.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/hvac-seo/mckinney"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange/70 hover:text-neon-orange"
            >
              HVAC SEO in McKinney
            </Link>
            <Link
              href="/local-seo/north-dallas"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Geo strategy overview
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

