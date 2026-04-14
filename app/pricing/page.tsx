import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata, jsonLd, breadcrumbJsonLd, SITE } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Clear pricing for North Texas SEO and web design. Most local businesses start between $299 and $950 per month. Month-to-month after setup.",
  path: "/pricing",
});

export default function PricingPage() {
  const url = `${SITE.baseUrl}/pricing`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd({ url, crumbs }))}
      />

      <div className="mx-auto max-w-5xl">
        <p className="ow-label">Pricing</p>
        <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
          Clear pricing. No surprises.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ow-mid">
          Most local businesses start between <strong className="text-ow-slate">$299</strong> and{" "}
          <strong className="text-ow-slate">$950</strong> per month.
        </p>

        <div className="mt-12 grid gap-3.5 lg:grid-cols-3">
          <Tier
            name="Starter"
            price="$299–$550/mo"
            tagline="Get on the map."
            items={[
              "Google Business Profile optimization",
              "Directory consistency",
              "Hosting + security",
              "Monthly reports",
            ]}
          />
          <Tier
            name="Growth"
            price="$650–$950/mo"
            tagline="Steady leads from search."
            highlight
            items={[
              "Everything in Starter",
              "Ongoing SEO + content/pages targeting key searches",
              "Conversion improvements",
              "Search Console-backed reporting",
            ]}
          />
          <Tier
            name="Scale"
            price="$1,200–$1,800/mo"
            tagline="Own your category."
            items={[
              "Everything in Growth",
              "Multi-location strategy",
              "Priority support",
              "Deeper reporting + planning",
            ]}
          />
        </div>

        <section className="mt-14 rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-8 shadow-ow-sm">
          <p className="ow-label">Add-on</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Web design</h2>
          <p className="mt-3 text-ow-mid">
            Typically <strong className="text-ow-slate">$1,000–$1,500</strong> one-time, depending
            on scope. Built to convert and support local SEO.
          </p>
          <p className="mt-4">
            <Link href="/services/web-design" className="font-semibold text-ow-orange hover:underline">
              See web design →
            </Link>
          </p>
        </section>

        <section className="mt-14">
          <p className="ow-label">Honest truth</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
            Why cheaper usually doesn’t work
          </h2>
          <p className="mt-5 max-w-3xl text-ow-mid">
            Cheap SEO tends to mean one of two things: automated tasks that don’t change outcomes,
            or “busywork” that’s impossible to tie to calls. We keep it simple: do the work that
            actually moves visibility, measure it in Search Console, and fix what’s not working.
          </p>
        </section>

        <section className="mt-14 rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-8 shadow-ow-sm">
          <p className="ow-label">Comparison</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Outwit vs. typical agency</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[rgba(20,40,60,0.12)]">
                  <th className="py-3 pr-4 font-semibold text-ow-charcoal"> </th>
                  <th className="py-3 pr-4 font-semibold text-ow-charcoal">Outwit</th>
                  <th className="py-3 pr-4 font-semibold text-ow-charcoal">Typical agency</th>
                </tr>
              </thead>
              <tbody className="text-ow-mid">
                <Row label="Contract" a="Month-to-month after setup" b="Lock-in contracts" />
                <Row label="Access" a="Direct access to me" b="Account manager + layers" />
                <Row label="Reporting" a="Search Console-first, plain English" b="Dashboards + jargon" />
                <Row label="Strategy" a="Lab-tested + documented" b="Best guesses + recycled playbooks" />
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-14 flex flex-wrap items-center gap-3">
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
      </div>
    </div>
  );
}

function Tier(props: {
  name: string;
  price: string;
  tagline: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-ow border bg-white p-7 shadow-ow-sm transition",
        props.highlight
          ? "border-[rgba(240,100,0,0.35)] ring-1 ring-[rgba(240,100,0,0.25)]"
          : "border-[rgba(20,40,60,0.18)]",
      ].join(" ")}
    >
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ow-mid">{props.name}</p>
      <p className="mt-2 text-2xl font-extrabold tracking-tight text-ow-charcoal">{props.price}</p>
      <p className="mt-2 text-sm font-semibold text-ow-orange">{props.tagline}</p>
      <ul className="mt-6 space-y-2 text-sm text-ow-mid">
        {props.items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ow-orange" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Row(props: { label: string; a: string; b: string }) {
  return (
    <tr className="border-b border-[rgba(20,40,60,0.08)]">
      <td className="py-3 pr-4 font-medium text-ow-charcoal">{props.label}</td>
      <td className="py-3 pr-4">{props.a}</td>
      <td className="py-3 pr-4">{props.b}</td>
    </tr>
  );
}

