import type { Metadata } from "next";
import Link from "next/link";
import {
  WHO_HELP_CITY_SLUGS,
  cityDisplayName,
} from "@/content/who-we-help";
import { cityLandingPath } from "@/content/who-we-help-cities";

export const metadata: Metadata = {
  title: "North Texas Cities We Serve — Digital Marketing for Trades | Outwit",
  description:
    "Explore city-by-city growth guides for Frisco, McKinney, Allen, Plano, and Richardson. Outwit helps HVAC, plumbing, and electrical contractors win local search and convert demand into booked jobs.",
};

export default function WhoWeHelpCitiesIndexPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
          <Link href="/who-we-help" className="hover:underline">
            Who we help
          </Link>
          {" · Cities"}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          North Texas cities we serve
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Each hub explains how Outwit approaches digital marketing and growth intelligence for HVAC,
          plumbing, and electrical contractors in that market—with direct links to trade-specific pages
          and resources.
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
            Digital marketing services
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHO_HELP_CITY_SLUGS.map((slug) => (
          <Link
            key={slug}
            href={cityLandingPath(slug)}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-neon-orange/30 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-neon-orange">
              {cityDisplayName[slug]}, TX
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              City guide: market context, Outwit’s system, and links to HVAC, plumbing, and
              electrical coverage.
            </p>
            <span className="mt-6 inline-block text-sm font-semibold text-neon-orange">
              Open guide →
            </span>
          </Link>
        ))}
      </div>

      <section className="mx-auto mt-16 max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Regional context
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          For a cross-city view of strategy and opportunity, read{" "}
          <Link href="/local-seo/north-dallas" className="font-semibold text-neon-orange hover:underline">
            North Dallas geo strategy
          </Link>
          . Browse{" "}
          <Link href="/insights" className="font-semibold text-neon-orange hover:underline">
            insights
          </Link>{" "}
          for SEO and conversion thinking, or see{" "}
          <Link href="/pricing" className="font-semibold text-neon-orange hover:underline">
            pricing
          </Link>{" "}
          for how we work with growth-minded contractors.
        </p>
      </section>
    </div>
  );
}
