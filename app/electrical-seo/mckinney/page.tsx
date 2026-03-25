import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Electrical SEO in McKinney",
  description:
    "Electrical SEO in McKinney for contractors who want more inbound calls from high-intent local searches. Start with the Outwit Growth Plan.",
};

export default function ElectricalSeoMcKinneyPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Electrical SEO in McKinney: win local searches and get more calls.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Homeowners search for electricians when they’re worried, stuck, or mid-project. Outwit
          helps McKinney electrical contractors show up for high-intent demand—then turns that
          visibility into real inquiries.
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
            The high-intent searches electricians want
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            The best leads come from urgent and specific intent: breaker tripping, panel upgrades,
            outlet issues, EV charger installs, and “electrician near me.” Outwit builds your search
            coverage around those job types.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What the system changes
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
            {[
              "A page map that ties each service and intent to a page designed to rank and convert.",
              "Local trust signals that back up your offer (Google Business alignment, proof, clarity).",
              "A conversion path that makes the next step obvious on mobile.",
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
              href="/electrical-seo/frisco"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Electrical SEO in Frisco
            </Link>
            <Link
              href="/electrical-seo/plano"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              Electrical SEO in Plano
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Want more McKinney electrician calls from search?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Start with the Growth Plan. You’ll get a clear roadmap tied to job types, intent, and a
            realistic timeline.
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

