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
  title: "Web Design",
  description:
    "Web design in North Texas built to convert: fast, mobile-first, clear messaging, and SEO-friendly structure. A site that makes people call.",
  path: "/services/web-design",
});

export default function WebDesignServicePage() {
  const url = `${SITE.baseUrl}/services/web-design`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Web Design", path: "/services/web-design" },
  ];

  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd({ url, crumbs }))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceJsonLd({ name: "Web Design", urlPath: "/services/web-design" })
        )}
      />

      <div className="mx-auto max-w-4xl">
        <p className="ow-label">Web Design</p>
        <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
          A website that makes people call, not click away.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ow-mid">
          Most small business sites fail for one reason: they’re unclear. We build simple, fast,
          mobile-first sites with one job—turn the right visitors into calls and form fills.
        </p>

        <QuickLinks />

        <Section title="What it is" label="Conversion-focused web design">
          <p className="text-ow-mid">
            This isn’t “pretty pages.” It’s clear messaging, clean layout, and a path that makes
            the next step obvious—especially on mobile.
          </p>
          <p className="mt-4 text-ow-mid">
            We also build with SEO in mind: structure, internal links, and performance so Google can
            crawl it and people don’t bounce.
          </p>
        </Section>

        <Section title="What’s included" label="What we actually ship">
          <div className="grid gap-3.5 md:grid-cols-2">
            <Card title="Design or redesign">
              A modern look that matches your market—without the generic agency template vibe.
            </Card>
            <Card title="Mobile-first layout">
              Most calls happen on phones. We design for thumbs, not desktops.
            </Card>
            <Card title="Lead-focused structure">
              Clear headline, proof, services, FAQs, and CTAs placed where people decide.
            </Card>
            <Card title="SEO-friendly foundation">
              Clean information architecture, fast pages, and a structure that supports local SEO.
            </Card>
          </div>
        </Section>

        <Section title="The Outwit difference" label="Built on what converts">
          <p className="text-ow-mid">
            We don’t “wing it” on messaging and layout. Here’s the framework we use:
          </p>
          <p className="mt-4">
            <Link
              href="/insights/what-makes-a-high-converting-website"
              className="font-semibold text-ow-orange hover:underline"
            >
              What makes a high-converting website →
            </Link>
          </p>
        </Section>

        <Section title="Who it helps" label="Good fit">
          <p className="text-ow-mid">
            Businesses with outdated sites, confusing messaging, slow load times, or traffic that
            never turns into leads.
          </p>
          <p className="mt-4 text-ow-mid">
            If SEO is the fuel, the website is the engine. If the engine is broken, you just waste
            gas.
          </p>
        </Section>

        <Section title="FAQ" label="Common questions">
          <Faq
            items={[
              {
                q: "Do I need a full redesign?",
                a: "Not always. Sometimes it’s messaging + layout fixes. If a redesign is the right move, we’ll tell you plainly.",
              },
              {
                q: "Will the new site be SEO-friendly?",
                a: "Yes. We build the structure so local SEO and content can actually work—fast pages, clear architecture, and internal linking.",
              },
              {
                q: "Can you improve conversions without changing the whole site?",
                a: "Often, yes. If you’re getting traffic but not leads, start with conversion optimization first.",
              },
              {
                q: "How fast can we launch?",
                a: "Depends on scope. The goal is to ship something clear and usable quickly, then iterate with data.",
              },
            ]}
          />
        </Section>

        <section className="mt-14 rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-8 shadow-ow-sm">
          <p className="ow-label">Next step</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Book a Strategy Call.</h2>
          <p className="mt-3 text-ow-mid">
            We’ll do a quick visibility + conversion check and tell you exactly what we’d fix first.
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
      <Link
        href="/pricing"
        className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm"
      >
        Pricing
      </Link>
      <Link
        href="/services/seo"
        className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm"
      >
        SEO
      </Link>
      <Link
        href="/services/conversion-optimization"
        className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm"
      >
        Conversion Optimization
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

