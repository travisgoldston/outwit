import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  WHO_HELP_NICHES,
  nicheHubs,
  WHO_HELP_CITY_SLUGS,
  cityDisplayName,
  type WhoHelpNiche,
} from "@/content/who-we-help";
import { cityLandingPath } from "@/content/who-we-help-cities";

type Props = { params: Promise<{ niche: string }> };

export function generateStaticParams() {
  return WHO_HELP_NICHES.map((niche) => ({ niche }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { niche: raw } = await params;
  if (!WHO_HELP_NICHES.includes(raw as WhoHelpNiche)) {
    return { title: "Not found" };
  }
  const niche = raw as WhoHelpNiche;
  const hub = nicheHubs[niche];
  return {
    title: hub.title,
    description: hub.description,
  };
}

const nicheLabel: Record<WhoHelpNiche, string> = {
  hvac: "HVAC",
  plumbing: "Plumbing",
  electrical: "Electrical",
};

export default async function WhoWeHelpNichePage({ params }: Props) {
  const { niche: raw } = await params;
  if (!WHO_HELP_NICHES.includes(raw as WhoHelpNiche)) notFound();
  const niche = raw as WhoHelpNiche;
  const hub = nicheHubs[niche];

  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
          <Link href="/who-we-help" className="hover:underline">
            Who we help
          </Link>
          {" · "}
          {nicheLabel[niche]}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {hub.h1}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {hub.intro}
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
            {hub.problemsTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{hub.problemsBody}</p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {hub.systemTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{hub.systemIntro}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {hub.systemCards.map((card) => (
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
            {hub.proofTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{hub.proofBody}</p>
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
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {nicheLabel[niche]} by city
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Local pages for North Texas markets—each links back here and to core offers. For a
            city-first view (all trades + digital marketing context), use the city guides below.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            <span className="font-semibold text-slate-800">City guides: </span>
            {WHO_HELP_CITY_SLUGS.map((slug, i) => (
              <span key={slug}>
                {i > 0 ? " · " : null}
                <Link
                  href={cityLandingPath(slug)}
                  className="font-medium text-neon-orange hover:underline"
                >
                  {cityDisplayName[slug]}
                </Link>
              </span>
            ))}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {WHO_HELP_CITY_SLUGS.map((city) => (
              <li key={city}>
                <Link
                  href={`/who-we-help/${niche}/${city}`}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-[#FAFAFA] px-5 py-4 text-sm font-semibold text-slate-900 transition-colors hover:border-neon-orange hover:text-neon-orange"
                >
                  {cityDisplayName[city]}, TX — {nicheLabel[niche]}
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
