import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — HVAC SEO in McKinney",
  description:
    "HVAC SEO in McKinney for companies that want more calls, more booked jobs, and less marketing guesswork. Get the Outwit Growth Plan.",
};

export default function HvacSeoMcKinneyPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          HVAC SEO in McKinney: outrank competitors and get more calls.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Outwit builds a strategic SEO system for HVAC companies in McKinney so you show up for
          high-intent searches and your website turns that demand into booked jobs.
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
            What HVAC owners in McKinney are up against
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Homeowners don’t search for “HVAC company.” They search for urgency and problems: AC
            not cooling, heater won’t turn on, emergency repair, and “near me” terms. If you’re not
            visible at that moment—or your site can’t convert—you lose the job before you ever get
            a chance to quote it.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            The system: how Outwit wins local search
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Outwit isn’t “SEO tasks.” It’s a structured growth engine built around intent, local
            signals, and conversion.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Intelligence",
                body: "We map the exact search demand in McKinney that turns into calls, then audit competitors to see what’s actually working.",
              },
              {
                title: "Capture",
                body: "We build the pages and content that deserve to rank for service + city and problem-based searches—without thin copycat pages.",
              },
              {
                title: "Conversion",
                body: "We tighten the path to action on mobile: messaging, proof, CTAs, and calls-to-book so rankings become booked jobs.",
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
          <div className="mt-8 flex flex-wrap items-center gap-4">
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
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Quick teardown: why most HVAC sites here don’t rank
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            {[
              "They target broad keywords instead of service + city intent that produces calls.",
              "Their Google Business profile and website tell different stories (or don’t support each other).",
              "They bury the primary action—call or book—behind friction and vague CTAs.",
              "They publish generic content that Google has no reason to trust over competitors.",
              "They track “progress” but can’t tie it to leads, calls, and booked jobs.",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-slate-600">
            If you want the full breakdown for your company, the Growth Plan maps the exact fixes
            and the fastest path to compounding inbound demand.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Related insight for McKinney HVAC owners
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            If you want the full “rankings to calls” framework, this walkthrough breaks down intent,
            local signals, and the conversion layer in one place.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
              Insight
            </p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              HVAC SEO in McKinney that converts (not just ranks)
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Most HVAC “SEO” fails at the last step: turning high-intent searches into calls. Here’s
              the system to win McKinney demand and convert it into booked jobs.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Link
                href="/insights/hvac-seo-mckinney-that-converts"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange/70 hover:text-neon-orange"
              >
                Read the insight
              </Link>
              <Link
                href="/growth-plan"
                className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
              >
                Get the Growth Plan
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Want more McKinney HVAC calls without paying for busywork?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Start with the Growth Plan. If it’s a fit, we’ll build the Growth Engine and keep it
            compounding.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/growth-plan"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
            >
              Get the Growth Plan
            </Link>
            <Link
              href="/hvac-seo/frisco"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              HVAC SEO in Frisco
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

