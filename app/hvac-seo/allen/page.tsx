import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — HVAC SEO in Allen",
  description:
    "HVAC SEO in Allen for companies that want more inbound calls and booked jobs from high-intent local search. Start with the Outwit Growth Plan.",
};

export default function HvacSeoAllenPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          HVAC SEO in Allen: win high-intent searches and turn them into booked jobs.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Outwit helps Allen HVAC companies get found when homeowners are ready to hire—then removes
          friction so the next step is a call, a form, or a booked appointment.
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
            The real fight in Allen isn’t traffic—it’s intent
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            The leads you want don’t come from broad marketing keywords. They come from service and
            problem searches that signal urgency: AC repair, no cooling, strange smells, thermostat
            issues, emergency calls. Outwit builds your presence around those moments.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            How Outwit builds an advantage
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We start with clarity and economics: which searches produce profitable jobs, which pages
            should win them, and what has to be true for a homeowner to take action.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            {[
              "A keyword map tied to job types and buying intent, not SEO jargon.",
              "Local pages and service pages that match what people are actually looking for.",
              "Conversion improvements so visibility turns into calls, not bounce rate.",
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
              href="/insights/how-long-does-seo-take"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              How long does SEO take?
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Want a simple, specific plan for Allen?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Start with the Growth Plan. You’ll walk away knowing what to fix, what to build, and what
            will actually move calls and booked jobs.
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
              href="/hvac-seo/plano"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              HVAC SEO in Plano
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
