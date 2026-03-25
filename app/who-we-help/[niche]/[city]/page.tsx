import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  WHO_HELP_NICHES,
  WHO_HELP_CITY_SLUGS,
  cityNicheBlocks,
  getCityPageTitle,
  getCityPageDescription,
  getCityH1,
  getCityIntro,
  getLegacySeoPath,
  cityDisplayName,
  type WhoHelpNiche,
  type WhoHelpCitySlug,
} from "@/content/who-we-help";
import { cityLandingPath } from "@/content/who-we-help-cities";

type Props = { params: Promise<{ niche: string; city: string }> };

export function generateStaticParams() {
  const out: { niche: WhoHelpNiche; city: WhoHelpCitySlug }[] = [];
  for (const niche of WHO_HELP_NICHES) {
    for (const city of WHO_HELP_CITY_SLUGS) {
      out.push({ niche, city });
    }
  }
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { niche: n, city: c } = await params;
  const parsed = parseNicheCity(n, c);
  if (!parsed) return { title: "Not found" };
  const [niche, city] = parsed;
  return {
    title: getCityPageTitle(niche, city),
    description: getCityPageDescription(niche, city),
  };
}

function parseNicheCity(
  niche: string,
  city: string
): [WhoHelpNiche, WhoHelpCitySlug] | null {
  if (!WHO_HELP_NICHES.includes(niche as WhoHelpNiche)) return null;
  if (!WHO_HELP_CITY_SLUGS.includes(city as WhoHelpCitySlug)) return null;
  return [niche as WhoHelpNiche, city as WhoHelpCitySlug];
}

const nicheLabel: Record<WhoHelpNiche, string> = {
  hvac: "HVAC",
  plumbing: "Plumbing",
  electrical: "Electrical",
};

export default async function WhoWeHelpCityPage({ params }: Props) {
  const { niche: n, city: c } = await params;
  const parsed = parseNicheCity(n, c);
  if (!parsed) notFound();
  const [niche, city] = parsed;
  const blocks = cityNicheBlocks[niche][city];
  const legacy = getLegacySeoPath(niche, city);
  const cityName = cityDisplayName[city];

  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
          <Link href="/who-we-help" className="hover:underline">
            Who we help
          </Link>
          {" · "}
          <Link href={cityLandingPath(city)} className="hover:underline">
            {cityName}, TX
          </Link>
          {" · "}
          <Link href={`/who-we-help/${niche}`} className="hover:underline">
            {nicheLabel[niche]}
          </Link>
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {getCityH1(niche, city)}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {getCityIntro(niche, city)}
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
            {blocks.problemsTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{blocks.problemsBody}</p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {blocks.systemTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{blocks.systemIntro}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {blocks.systemCards.map((card) => (
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
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {blocks.proofTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{blocks.proofBody}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/who-we-help/${niche}`}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              {nicheLabel[niche]} hub
            </Link>
            <Link
              href={cityLandingPath(city)}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              {cityName} city guide
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              Services
            </Link>
            <Link
              href={legacy}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              Related SEO page
            </Link>
            {niche === "hvac" && city === "mckinney-tx" && (
              <Link
                href="/insights/hvac-seo-mckinney-that-converts"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
              >
                Insights: McKinney HVAC
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
