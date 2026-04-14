import Link from "next/link";
import type { Metadata } from "next";
import {
  buildMetadata,
  jsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
  SITE,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "SEO",
  description:
    "Local SEO in North Texas that turns searches into calls. Google Business Profile, service/location pages, content, and tracking—backed by lab-tested tactics.",
  path: "/services/seo",
});

export default function SeoServicePage() {
  const url = `${SITE.baseUrl}/services/seo`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "SEO", path: "/services/seo" },
  ];

  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd({ url, crumbs }))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(serviceJsonLd({ name: "SEO", urlPath: "/services/seo" }))}
      />

      <div className="mx-auto max-w-4xl">
        <p className="ow-label">SEO</p>
        <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
          Rank higher on Google for the searches that matter.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ow-mid">
          Local SEO should be simple: when someone nearby searches for what you do, you show up—and
          the site makes it easy to call. We focus on the fundamentals, measure everything, and
          publish what we learn in public.
        </p>

        <QuickLinks />

        <Section title="What it is" label="Plain-English SEO">
          <p className="text-ow-mid">
            SEO is how your business shows up in Google for the searches people are already making.
            For service businesses, that usually means two things: the map results (Google Business
            Profile) and the normal results (your website pages).
          </p>
          <p className="mt-4 text-ow-mid">
            We don’t chase “traffic.” We chase the searches that turn into calls: service + city,
            “near me,” and problem-based queries. And we track it in Search Console so you can see
            what changed.
          </p>
        </Section>

        <Section title="What’s included" label="What we actually do">
          <div className="grid gap-3.5 md:grid-cols-2">
            <Card title="Google Business Profile">
              Categories, services, photos, reviews, and the stuff that actually moves map
              visibility.
            </Card>
            <Card title="Service + location pages">
              Pages that match how people search in North Texas—not templated fluff that never
              indexes.
            </Card>
            <Card title="Content that earns clicks">
              Practical pages that answer real questions and support your core services.
            </Card>
            <Card title="Tracking + reporting">
              Search Console, basic analytics, and a monthly view of what’s improving (and what
              isn’t).
            </Card>
          </div>
        </Section>

        <Section title="The Outwit difference" label="We don’t guess. We test.">
          <p className="text-ow-mid">
            If you’ve been burned by SEO before, it’s usually because nobody could explain what was
            happening. We publish experiments so our strategy stays grounded in results.
          </p>
          <ul className="mt-5 space-y-2 text-ow-mid">
            <li>
              <Link href="/lab/testing-city-pages-for-local-seo" className="font-semibold text-ow-orange hover:underline">
                We tested city pages for local SEO — here’s what happened →
              </Link>
            </li>
            <li>
              <Link href="/lab/building-a-local-seo-agency-site-from-scratch" className="font-semibold text-ow-orange hover:underline">
                Building a local SEO agency site from scratch (live case study) →
              </Link>
            </li>
          </ul>
        </Section>

        <Section title="Who it helps" label="Good fit">
          <p className="text-ow-mid">
            This is for service businesses whose customers search Google before they call—plumbers,
            electricians, HVAC, roofers, dentists, med spas, law firms, and local pros.
          </p>
          <p className="mt-4 text-ow-mid">
            We work across North Texas: McKinney, Melissa, Anna, Sherman, Allen, Plano, Prosper,
            Celina, Frisco, Wylie—and nearby.
          </p>
        </Section>

        <Section title="FAQ" label="Common questions">
          <Faq
            items={[
              {
                q: "How long does SEO take?",
                a: "You usually see early signal in 3–6 months (impressions, query coverage, some rankings). Durable results compound over 6–12+. We show the timeline in Search Console.",
              },
              {
                q: "What if I tried SEO before and it didn’t work?",
                a: "That’s common. We start by auditing what’s actually indexed, what queries you’re showing for, and where the leaks are (maps, pages, conversion). Then we fix the highest-leverage pieces first.",
              },
              {
                q: "Do I need a new website for SEO?",
                a: "Not always. If the site is slow, confusing, or can’t convert, we’ll tell you. Otherwise we can start with SEO fundamentals and improve the site as needed.",
              },
              {
                q: "Do you do city pages?",
                a: "Sometimes. We only do them when we can make them unique and supported by internal links—otherwise they don’t index or they cannibalize. We test this publicly in the Lab.",
              },
            ]}
          />
        </Section>

        <section className="mt-14 rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-8 shadow-ow-sm">
          <p className="ow-label">Next step</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
            Book a Strategy Call.
          </h2>
          <p className="mt-3 text-ow-mid">
            We’ll start with a free visibility check: where you show up today, what you’re missing,
            and what we’d fix first.
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

function QuickLinks() {
  return (
    <div className="mt-8 flex flex-wrap gap-2.5">
      <Link href="/pricing" className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm">
        Pricing
      </Link>
      <Link href="/services/web-design" className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm">
        Web Design
      </Link>
      <Link href="/services/conversion-optimization" className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm">
        Conversion Optimization
      </Link>
      <Link href="/locations" className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm">
        Locations
      </Link>
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
      <p className="mt-2 text-sm leading-relaxed text-ow-mid">{props.children}</p>
    </div>
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

