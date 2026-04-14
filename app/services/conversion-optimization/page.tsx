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
  title: "Conversion Optimization",
  description:
    "Conversion optimization for North Texas service businesses: better CTAs, forms, layout, and tracking so more visitors turn into leads—without more ad spend.",
  path: "/services/conversion-optimization",
});

export default function ConversionOptimizationPage() {
  const url = `${SITE.baseUrl}/services/conversion-optimization`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Conversion Optimization", path: "/services/conversion-optimization" },
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
          serviceJsonLd({
            name: "Conversion Optimization",
            urlPath: "/services/conversion-optimization",
          })
        )}
      />

      <div className="mx-auto max-w-4xl">
        <p className="ow-label">Conversion</p>
        <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
          Turn more visitors into leads without spending more on ads.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ow-mid">
          If you&apos;re getting traffic but not calls, something is leaking—message, layout, CTA,
          form friction, or tracking. We find the leak, fix it, and measure the result.
        </p>

        <QuickLinks />

        <Section title="What it is" label="Plain-English CRO">
          <p className="text-ow-mid">
            Conversion optimization is improving the pages you already have so more people take the
            next step: call, book, or submit a form.
          </p>
          <p className="mt-4 text-ow-mid">
            This is not guesswork. We change one thing at a time where possible, use clean tracking,
            and look for measurable movement.
          </p>
        </Section>

        <Section title="What’s included" label="What we actually do">
          <div className="grid gap-3.5 md:grid-cols-2">
            <Card title="Page + funnel analysis">
              We map the path from visitor → lead and identify where people drop off.
            </Card>
            <Card title="CTA improvements">
              Clear calls to action, better placement, better wording, fewer “maybe” buttons.
            </Card>
            <Card title="Form optimization">
              Fewer fields, better validation, less friction, and trust signals where people hesitate.
            </Card>
            <Card title="Analytics setup">
              Basic event tracking so you can see what changed (and what didn’t).
            </Card>
          </div>
        </Section>

        <Section title="The Outwit difference" label="Data, not vibes">
          <p className="text-ow-mid">
            We run marketing experiments in public, and we bring that same discipline to conversion
            work: hypothesis → change → measure.
          </p>
          <p className="mt-4 text-ow-mid">
            Start here if you want to see how we think:
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/insights/what-makes-a-high-converting-website"
                className="font-semibold text-ow-orange hover:underline"
              >
                What makes a high-converting website →
              </Link>
            </li>
            <li>
              <Link href="/lab" className="font-semibold text-ow-orange hover:underline">
                The Lab (how we test) →
              </Link>
            </li>
          </ul>
        </Section>

        <Section title="Who it helps" label="Good fit">
          <p className="text-ow-mid">
            Businesses getting traffic from Google, ads, or referrals—but not enough calls, bookings,
            or form fills.
          </p>
          <p className="mt-4 text-ow-mid">
            If you’re paying for traffic while the site leaks, conversion work usually pays back
            faster than “more marketing.”
          </p>
        </Section>

        <Section title="FAQ" label="Common questions">
          <Faq
            items={[
              {
                q: "Will this work without more traffic?",
                a: "Often yes. If you already have traffic, small conversion gains can mean more leads immediately.",
              },
              {
                q: "Do you need access to analytics?",
                a: "Yes. If we can’t measure, we can’t be confident. We keep tracking simple and useful.",
              },
              {
                q: "What if my site is slow or outdated?",
                a: "Then we may recommend a web refresh first. A slow site makes every other improvement harder.",
              },
              {
                q: "How long until we see results?",
                a: "Depends on traffic volume. Some fixes show impact quickly; others need a few weeks of data.",
              },
            ]}
          />
        </Section>

        <section className="mt-14 rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-8 shadow-ow-sm">
          <p className="ow-label">Next step</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Book a Strategy Call.</h2>
          <p className="mt-3 text-ow-mid">
            We’ll do a quick conversion + visibility check and show you the easiest wins first.
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
        href="/services/web-design"
        className="rounded-full border border-[rgba(20,40,60,0.18)] bg-white px-4 py-2 text-xs font-semibold text-ow-slate transition hover:shadow-ow-sm"
      >
        Web Design
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

