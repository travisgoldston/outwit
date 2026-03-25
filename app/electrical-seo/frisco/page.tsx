import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Electrical SEO in Frisco",
  description:
    "Electrical SEO in Frisco for contractors who want more inbound calls and booked jobs from high-intent local search. Start with the Growth Plan.",
};

export default function ElectricalSeoFriscoPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Electrical SEO in Frisco: get found when homeowners need an electrician now.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Outwit helps Frisco electrical contractors capture high-intent searches and convert them
          into calls—without relying on generic agency “deliverables.”
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
            What we build for Frisco electricians
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            {[
              "High-intent service coverage (panel upgrades, EV chargers, troubleshooting, repairs).",
              "Local trust alignment between Google Business and the pages people land on.",
              "A cleaner conversion path that makes calling feel obvious and safe.",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Want a roadmap tied to booked jobs?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            The Growth Plan maps exactly what to fix and what to build in Frisco so search becomes
            steady inbound demand.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/growth-plan"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
            >
              Get the Growth Plan
            </Link>
            <Link
              href="/electrical-seo/mckinney"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Electrical SEO in McKinney
            </Link>
            <Link
              href="/electrical-seo/plano"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Electrical SEO in Plano
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

