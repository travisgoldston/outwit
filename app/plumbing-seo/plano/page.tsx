import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Plumbing SEO in Plano",
  description:
    "Plumbing SEO in Plano for companies that want more calls and booked jobs from high-intent local search. Start with the Outwit Growth Plan.",
};

export default function PlumbingSeoPlanoPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Plumbing SEO in Plano: get more calls from homeowners ready to hire.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Outwit builds a local search system for Plano plumbing companies that want consistent
          inbound demand—especially for urgent problems where speed and trust decide the winner.
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
            What we optimize for in Plano
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            {[
              "Emergency intent that turns into calls (leaks, no hot water, backups).",
              "Service + location searches where homeowners compare options fast.",
              "Pages that answer objections quickly so your company earns the call.",
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
            Want a clear plan instead of another marketing vendor?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Start with the Growth Plan. You’ll know exactly what to build and how to measure it in
            booked jobs—not busywork.
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

