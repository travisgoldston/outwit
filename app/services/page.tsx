import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Growth Engine",
  description:
    "Outwit is a growth intelligence system for HVAC, plumbing, and electrical companies in North Dallas—built to win high-intent search and turn it into booked jobs.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          The Outwit Growth Engine.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          A growth intelligence system for HVAC, plumbing, and electrical companies in North Dallas.
          We help you win high-intent search—and turn it into calls, booked jobs, and predictable
          inbound demand.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/growth-plan"
            className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
          >
            Get the Growth Plan
          </Link>
          <Link
            href="#growth-engine"
            className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
          >
            See how the engine works
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl space-y-10">
        <section
          id="growth-engine"
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
        >
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
            The System
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Most agencies ship tasks. Outwit builds unfair advantages.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            The Growth Engine is designed to do three things exceptionally well: outrank competitors
            for high-intent searches, earn the click with trust and clarity, and turn that demand
            into calls and booked jobs.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Intelligence",
                body: "We map demand, job economics, and competitor weaknesses across North Dallas so we know exactly what to build.",
              },
              {
                title: "Search capture",
                body: "We build pages and content that deserve to rank for service + city and problem searches that signal a ready buyer.",
              },
              {
                title: "Conversion",
                body: "We tighten messaging, proof, and CTAs so the path to call or book feels obvious—especially on mobile.",
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
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/growth-plan"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
            >
              Start with the Growth Plan
            </Link>
            <Link
              href="/local-seo/north-dallas"
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
            >
              See our geo strategy
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
            Who it’s for
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Built for home service owners who care about calls, not dashboards.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Outwit is designed for HVAC, plumbing, and electrical companies serving McKinney,
            Frisco, Plano, Allen, and Prosper—especially teams that have tried agencies and walked
            away skeptical.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "HVAC",
                links: [
                  { href: "/hvac-seo/mckinney", label: "McKinney" },
                  { href: "/hvac-seo/frisco", label: "Frisco" },
                  { href: "/hvac-seo/plano", label: "Plano" },
                ],
              },
              {
                title: "Plumbing",
                links: [
                  { href: "/plumbing-seo/mckinney", label: "McKinney" },
                  { href: "/plumbing-seo/frisco", label: "Frisco" },
                  { href: "/plumbing-seo/plano", label: "Plano" },
                ],
              },
              {
                title: "Electrical",
                links: [
                  { href: "/electrical-seo/mckinney", label: "McKinney" },
                  { href: "/electrical-seo/frisco", label: "Frisco" },
                  { href: "/electrical-seo/plano", label: "Plano" },
                ],
              },
            ].map((col) => (
              <div key={col.title} className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6">
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
                  {col.title}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {col.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-neon-orange/70 hover:text-neon-orange"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="offers" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
            The Offer
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Two ways to start. One system end-to-end.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6">
              <h3 className="text-lg font-semibold text-slate-900">Growth Plan (one-time)</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A focused audit + competitor breakdown + 90-day roadmap that tells you exactly what
                to fix and build next.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                {[
                  "SEO audit and local visibility diagnosis",
                  "Keyword + page map built around high-intent demand",
                  "Competitor breakdown (why they win, where they’re weak)",
                  "90-day roadmap with priorities in order",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neon-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/growth-plan"
                  className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
                >
                  Get the Growth Plan
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
                >
                  Ask a question
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6">
              <h3 className="text-lg font-semibold text-slate-900">Outwit Growth Engine (monthly)</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We execute the system: search capture, on-site optimization, conversion improvements,
                and reporting tied to leads.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                {[
                  "SEO + content system designed for job intent",
                  "On-site optimization and internal linking that supports rankings",
                  "Conversion upgrades that turn demand into calls",
                  "Reporting centered on leads (calls/forms) and booked-job signals where available",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neon-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
                >
                  Talk about the Engine
                </Link>
                <Link
                  href="/lab"
                  className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
                >
                  See what we test in the Lab
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Want a plan you can actually trust?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Start with the Growth Plan. If it’s a fit, we’ll run the Growth Engine and keep it
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
            href="/hvac-seo/mckinney"
            className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
          >
            See an HVAC example
          </Link>
        </div>
      </div>
    </div>
  );
}

