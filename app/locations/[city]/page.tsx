import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, CITY_SLUGS, type CitySlug } from "@/content/locations";
import { buildMetadata, jsonLd, breadcrumbJsonLd, SITE } from "@/lib/seo";

type PageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const slug = city as CitySlug;
  const data = CITIES[slug];
  if (!data) return {};

  return buildMetadata({
    title: `Local SEO for ${data.name}`,
    description: `Local SEO and web design for ${data.name}, TX small businesses. More calls from nearby customers with SEO, conversion-focused websites, and tracking.`,
    path: `/locations/${data.slug}`,
  });
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const slug = city as CitySlug;
  const data = CITIES[slug];
  if (!data) notFound();

  const url = `${SITE.baseUrl}/locations/${data.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: data.name, path: `/locations/${data.slug}` },
  ];

  const nearby = data.nearby.map((s) => CITIES[s]).filter(Boolean);

  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd({ url, crumbs }))}
      />

      <div className="mx-auto max-w-4xl">
        <p className="ow-label">Locations</p>
        <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
          Local SEO for {data.name} Small Businesses
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ow-mid">
          If your customers are in {data.name} and they search Google before they call, SEO and a
          conversion-focused site can turn that demand into steady leads.
        </p>

        <div className="mt-8 flex flex-wrap gap-2.5">
          <Link
            href="/services/seo"
            className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm"
          >
            SEO
          </Link>
          <Link
            href="/services/web-design"
            className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm"
          >
            Web Design
          </Link>
          <Link
            href="/services/conversion-optimization"
            className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm"
          >
            Conversion
          </Link>
          <Link
            href="/locations"
            className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm"
          >
            All locations
          </Link>
        </div>

        <Section label={`Why ${data.name} is unique`} title="The local market">
          {data.why.map((p) => (
            <p key={p} className="mt-4 text-ow-mid first:mt-0">
              {p}
            </p>
          ))}
        </Section>

        <Section label={`What I do for ${data.name}`} title="The practical work">
          <div className="grid gap-3.5 md:grid-cols-2">
            <Card title="Local SEO">
              Google Business Profile + service/location pages that match what people in {data.name} actually search.
              <div className="mt-3">
                <Link href="/services/seo" className="font-semibold text-ow-orange hover:underline">
                  SEO service →
                </Link>
              </div>
            </Card>
            <Card title="Web design that converts">
              A fast, mobile-first site that makes calling feel like the obvious next step.
              <div className="mt-3">
                <Link href="/services/web-design" className="font-semibold text-ow-orange hover:underline">
                  Web design →
                </Link>
              </div>
            </Card>
            <Card title="Conversion fixes">
              Better CTAs, forms, and tracking so you get more leads from the traffic you already have.
              <div className="mt-3">
                <Link
                  href="/services/conversion-optimization"
                  className="font-semibold text-ow-orange hover:underline"
                >
                  Conversion optimization →
                </Link>
              </div>
            </Card>
            <Card title="Ongoing tuning">
              SEO isn’t set-and-forget. We watch what’s happening in Search Console and adjust like adults.
              <div className="mt-3">
                <Link href="/lab" className="font-semibold text-ow-orange hover:underline">
                  See the Lab →
                </Link>
              </div>
            </Card>
          </div>
        </Section>

        <Section label="Why nearby helps" title="Local context matters">
          <p className="text-ow-mid">
            Working with someone nearby means fewer assumptions. North Texas markets don’t behave the
            same way as Austin, Dallas, or “generic SEO advice” on the internet. Local intent, local
            competition, and local trust signals matter.
          </p>
        </Section>

        <Section label="Related resources" title="Keep reading">
          <div className="grid gap-3.5 md:grid-cols-2">
            <Resource href="/insights/how-long-does-seo-take" title="How long does SEO really take?" />
            <Resource href="/insights/local-seo-complete-guide" title="Local SEO: The complete guide" />
            <Resource href="/lab/testing-city-pages-for-local-seo" title="Testing city pages for local SEO" />
            <Resource
              href="/lab/building-a-local-seo-agency-site-from-scratch"
              title="Building a local SEO agency site from scratch"
            />
          </div>

          <div className="mt-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ow-mid">
              Nearby cities
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {nearby.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
                  className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </Section>

        <Section label="FAQ" title="Questions I get a lot">
          <Faq items={data.faq} />
        </Section>

        <section className="mt-14 rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-8 shadow-ow-sm">
          <p className="ow-label">Next step</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
            Let&apos;s see where you stand in {data.name}.
          </h2>
          <p className="mt-3 text-ow-mid">
            Book a strategy call and I&apos;ll run a free visibility check—maps + organic + the pages
            that are (and aren&apos;t) showing up.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-ow-sm bg-ow-orange px-8 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-ow-ember hover:shadow-[0_8px_28px_rgba(240,100,0,0.35)]"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-ow-sm border-[1.5px] border-[rgba(20,40,60,0.18)] bg-transparent px-7 py-3 text-sm font-semibold text-ow-slate transition hover:border-ow-charcoal hover:text-ow-charcoal"
            >
              See pricing first
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function Section(props: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <p className="ow-label">{props.label}</p>
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{props.title}</h2>
      <div className="mt-5">{props.children}</div>
    </section>
  );
}

function Card(props: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-6 shadow-ow-sm">
      <h3 className="text-base font-bold tracking-tight">{props.title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-ow-mid">{props.children}</div>
    </div>
  );
}

function Resource(props: { href: string; title: string }) {
  return (
    <Link
      href={props.href}
      className="group flex items-center justify-between rounded-ow border border-[rgba(20,40,60,0.18)] bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-ow"
    >
      <span className="text-sm font-semibold text-ow-charcoal">{props.title}</span>
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ow-orange">
        →
      </span>
    </Link>
  );
}

function Faq(props: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-2 space-y-4">
      {props.items.map((item) => (
        <details
          key={item.q}
          className="rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-5 shadow-ow-sm"
        >
          <summary className="cursor-pointer text-sm font-semibold text-ow-charcoal">
            {item.q}
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ow-mid">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

