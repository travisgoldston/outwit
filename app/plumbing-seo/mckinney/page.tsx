import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Plumbing SEO in McKinney",
  description:
    "Plumbing SEO in McKinney for companies that want more emergency calls and booked jobs from high-intent search. Start with the Outwit Growth Plan.",
};

export default function PlumbingSeoMcKinneyPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Plumbing SEO in McKinney: show up for urgent searches and get more calls.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          When a homeowner has a leak, no hot water, or a backed-up drain, they don’t browse—they
          search and call. Outwit builds a local search advantage for McKinney plumbing companies
          that want more inbound demand and fewer slow weeks.
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
            What plumbing SEO has to do with booked jobs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Ranking isn’t the goal. Capturing emergency and service intent is. Outwit targets the
            searches that signal a ready buyer, then aligns your pages, local signals, and CTAs so
            the next step is a call.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            The Outwit approach (built for local urgency)
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            {[
              "Intent mapping for emergency and high-value services in McKinney.",
              "Google Business and on-site content that reinforce each other, not compete.",
              "Conversion cleanup so mobile visitors can call quickly and confidently.",
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
              href="/plumbing-seo/frisco"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Plumbing SEO in Frisco
            </Link>
            <Link
              href="/plumbing-seo/plano"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Plumbing SEO in Plano
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Want more McKinney plumbing calls from search?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Start with a Growth Plan. If it’s a fit, we’ll build the system and keep it compounding
            every month.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
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
      </div>
    </div>
  );
}

