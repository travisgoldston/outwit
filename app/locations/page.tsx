import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata, jsonLd, breadcrumbJsonLd, SITE } from "@/lib/seo";
import { CITY_SLUGS, CITIES } from "@/content/locations";

export const metadata: Metadata = buildMetadata({
  title: "Locations",
  description:
    "Local SEO and web design across North Texas. We help small businesses get more calls from nearby customers with SEO, websites, and conversion fixes.",
  path: "/locations",
});

export default function LocationsPage() {
  const url = `${SITE.baseUrl}/locations`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
  ];

  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd({ url, crumbs }))}
      />

      <div className="mx-auto max-w-5xl">
        <p className="ow-label">Locations</p>
        <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
          Local SEO and web design across North Texas.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ow-mid">
          I work with small businesses across North Texas — mostly owners who want more calls from
          nearby customers without turning their life into full-time marketing.
        </p>

        <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {CITY_SLUGS.map((slug) => {
            const city = CITIES[slug];
            return (
              <Link
                key={slug}
                href={`/locations/${slug}`}
                className="group flex flex-col justify-between rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-ow"
              >
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-ow-charcoal">{city.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ow-mid">{city.oneLiner}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[rgba(20,40,60,0.12)] pt-3 font-mono text-[0.62rem] tracking-[0.06em] text-ow-mid">
                  <span>View city page</span>
                  <span className="text-ow-orange">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        <section className="mt-14 rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-8 shadow-ow-sm">
          <h2 className="text-2xl font-extrabold tracking-tight">Not sure if you&apos;re a fit?</h2>
          <p className="mt-3 max-w-3xl text-ow-mid">
            The easiest next step is to reach out. I’ll take a look at how you show up online and
            tell you what I’d fix first.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-ow-sm bg-ow-orange px-8 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-ow-ember hover:shadow-[0_8px_28px_rgba(240,100,0,0.35)]"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-ow-sm border-[1.5px] border-[rgba(20,40,60,0.18)] bg-transparent px-7 py-3 text-sm font-semibold text-ow-slate transition hover:border-ow-charcoal hover:text-ow-charcoal"
            >
              See services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

