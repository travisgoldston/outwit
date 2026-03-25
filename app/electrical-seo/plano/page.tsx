import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Electrical SEO in Plano",
  description:
    "Electrical SEO in Plano for contractors who want more inbound calls from high-intent local searches. Start with the Outwit Growth Plan.",
};

export default function ElectricalSeoPlanoPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Electrical SEO in Plano: capture demand and convert it into appointments.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Outwit builds a search system for Plano electricians who want consistent inbound leads,
          clearer measurement, and fewer months where demand feels random.
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
            The three levers we pull in Plano
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Intent coverage",
                body: "We build pages for the services and problems that signal a ready buyer, not broad keywords that dilute your leads.",
              },
              {
                title: "Local signals",
                body: "We align your Google Business presence with on-site proof so Google and homeowners trust what they see.",
              },
              {
                title: "Conversion",
                body: "We remove friction and make the next step obvious—call, request service, or schedule—especially on mobile.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6 text-sm leading-relaxed text-slate-700"
              >
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
                  {card.title}
                </p>
                <p className="mt-3 font-semibold text-slate-900">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Want a clear SEO plan for Plano electrical leads?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Start with the Growth Plan. You’ll get a keyword map, competitor breakdown, and a 90-day
            roadmap built around high-intent jobs.
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
              href="/electrical-seo/frisco"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Electrical SEO in Frisco
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

