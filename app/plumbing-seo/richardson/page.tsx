import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Plumbing SEO in Richardson",
  description:
    "Plumbing SEO in Richardson for companies that want more emergency calls and service bookings from high-intent local search. Start with the Outwit Growth Plan.",
};

export default function PlumbingSeoRichardsonPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Plumbing SEO in Richardson: capture local demand and convert it into calls.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Outwit helps Richardson plumbing companies show up for the searches that matter—urgent
          problems, high-value services, and “near me” intent—then builds pages that make the phone
          ring.
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
            Why “rankings” aren’t enough
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A page can rank and still fail. If a homeowner can’t quickly trust you, understand what
            you handle, and take the next step, you’ll lose to the company that makes calling feel
            easy. Outwit links search intent to conversion.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Want a focused plan for Richardson plumbing leads?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Start with the Growth Plan. We’ll map the searches that pay, the pages you need, and the
            fastest path to compounding inbound calls.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/growth-plan"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
            >
              Get the Growth Plan
            </Link>
            <Link
              href="/plumbing-seo/mckinney"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Plumbing SEO in McKinney
            </Link>
            <Link
              href="/plumbing-seo/frisco"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Plumbing SEO in Frisco
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
