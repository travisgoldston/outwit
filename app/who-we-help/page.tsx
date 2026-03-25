import type { Metadata } from "next";
import Link from "next/link";
import {
  WHO_HELP_NICHES,
  nicheHubs,
  WHO_HELP_CITY_SLUGS,
  cityDisplayName,
  type WhoHelpNiche,
} from "@/content/who-we-help";

export const metadata: Metadata = {
  title: "Who We Help — HVAC, Plumbing & Electrical | Outwit",
  description:
    "North Texas growth intelligence for HVAC, plumbing, and electrical contractors—local SEO, city coverage, and a system that turns search into booked jobs.",
};

const nicheLabel: Record<WhoHelpNiche, string> = {
  hvac: "HVAC",
  plumbing: "Plumbing",
  electrical: "Electrical",
};

export default function WhoWeHelpIndexPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
          Who we help
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          HVAC, plumbing, and electrical contractors in North Texas
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Outwit maps local demand, builds pages that deserve to rank, and tightens conversion paths
          so growth is measurable—not guesswork. Pick your trade, then explore city pages for
          Frisco, McKinney, Allen, Plano, and Richardson.
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
            View services
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
        {WHO_HELP_NICHES.map((niche) => (
          <Link
            key={niche}
            href={`/who-we-help/${niche}`}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-neon-orange/30 hover:shadow-md"
          >
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
              {nicheLabel[niche]}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-neon-orange">
              {nicheHubs[niche].h1}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-4">
              {nicheHubs[niche].intro}
            </p>
            <span className="mt-6 inline-block text-sm font-semibold text-neon-orange">
              Open hub →
            </span>
          </Link>
        ))}
      </div>

      <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Cities we cover
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Each trade hub links to dedicated pages for these North Texas markets:
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {WHO_HELP_CITY_SLUGS.map((slug) => (
            <li
              key={slug}
              className="rounded-full border border-slate-200 bg-[#FAFAFA] px-4 py-2 text-sm font-medium text-slate-800"
            >
              {cityDisplayName[slug]}, TX
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-slate-600">
          Also see{" "}
          <Link href="/local-seo/north-dallas" className="font-semibold text-neon-orange hover:underline">
            North Dallas geo strategy
          </Link>{" "}
          and{" "}
          <Link href="/pricing" className="font-semibold text-neon-orange hover:underline">
            pricing
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
