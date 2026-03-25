import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  WHO_HELP_CITY_SLUGS,
  WHO_HELP_NICHES,
  cityDisplayName,
  citySlugToLegacyCity,
  getLegacySeoPath,
  type WhoHelpCitySlug,
  type WhoHelpNiche,
} from "@/content/who-we-help";
import {
  cityLandings,
  cityLandingPath,
  otherCitySlugs,
} from "@/content/who-we-help-cities";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return WHO_HELP_CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: raw } = await params;
  if (!WHO_HELP_CITY_SLUGS.includes(raw as WhoHelpCitySlug)) {
    return { title: "Not found" };
  }
  const city = raw as WhoHelpCitySlug;
  const c = cityLandings[city];
  return {
    title: c.title,
    description: c.description,
  };
}

const nicheLabel: Record<WhoHelpNiche, string> = {
  hvac: "HVAC",
  plumbing: "Plumbing",
  electrical: "Electrical",
};

export default async function WhoWeHelpCityLandingPage({ params }: Props) {
  const { city: raw } = await params;
  if (!WHO_HELP_CITY_SLUGS.includes(raw as WhoHelpCitySlug)) notFound();
  const city = raw as WhoHelpCitySlug;
  const c = cityLandings[city];
  const name = cityDisplayName[city];
  const legacyKey = citySlugToLegacyCity[city];

  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
          <Link href="/who-we-help" className="hover:underline">
            Who we help
          </Link>
          {" · "}
          <Link href="/who-we-help/cities" className="hover:underline">
            Cities
          </Link>
          {" · "}
          {name}, TX
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {c.h1}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {c.intro}
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-slate-700">
          {c.positioningLine}
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
            {c.marketTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{c.marketBody}</p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {c.systemTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{c.systemBody}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                k: "Intelligence",
                v: "Map the searches and competitors that actually drive calls—not vanity terms.",
              },
              {
                k: "Capture",
                v: "Earn visibility with pages that match intent and prove you can do the job.",
              },
              {
                k: "Conversion",
                v: "Tighten mobile UX, proof, and CTAs so traffic becomes booked work.",
              },
            ].map((card) => (
              <div
                key={card.k}
                className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6 text-sm leading-relaxed text-slate-700"
              >
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
                  {card.k}
                </p>
                <p className="mt-3 font-semibold text-slate-900">{card.v}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {nicheLabel.hvac}, {nicheLabel.plumbing}, and {nicheLabel.electrical} in {name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Jump to trade-specific guides for {name}. Each page connects back to the trade hub and
            includes a focused SEO landing where we publish one.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-1">
            {WHO_HELP_NICHES.map((niche) => (
              <li key={niche}>
                <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-[#FAFAFA] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
                      {nicheLabel[niche]}
                    </p>
                    <Link
                      href={`/who-we-help/${niche}/${city}`}
                      className="mt-1 block text-base font-semibold text-slate-900 hover:text-neon-orange"
                    >
                      {name} — {nicheLabel[niche]} growth page →
                    </Link>
                  </div>
                  <Link
                    href={getLegacySeoPath(niche, city)}
                    className="shrink-0 text-sm font-semibold text-slate-700 underline-offset-4 hover:text-neon-orange hover:underline"
                  >
                    SEO landing ({legacyKey})
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/who-we-help/hvac"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              HVAC hub
            </Link>
            <Link
              href="/who-we-help/plumbing"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              Plumbing hub
            </Link>
            <Link
              href="/who-we-help/electrical"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              Electrical hub
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {c.authorityTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{c.authorityBody}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              Pricing
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              Insights
            </Link>
            <Link
              href="/local-seo/north-dallas"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              North Dallas strategy
            </Link>
          </div>
          {city === "mckinney-tx" && (
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              <Link
                href="/insights/hvac-seo-mckinney-that-converts"
                className="font-semibold text-neon-orange hover:underline"
              >
                HVAC SEO in McKinney that converts
              </Link>{" "}
              — tactical breakdown for owners who want the full picture.
            </p>
          )}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Nearby cities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Explore adjacent markets and keep your North Texas footprint coherent.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {otherCitySlugs(city).map((slug) => (
              <li key={slug}>
                <Link
                  href={cityLandingPath(slug)}
                  className="inline-flex rounded-full border border-slate-200 bg-[#FAFAFA] px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-neon-orange hover:text-neon-orange"
                >
                  {cityDisplayName[slug]}, TX
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
