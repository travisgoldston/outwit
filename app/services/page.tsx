import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata, jsonLd, breadcrumbJsonLd, SITE } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "SEO, web design, and conversion optimization in North Texas—backed by public experiments and real Search Console data. No guesswork.",
  path: "/services",
});

export default function ServicesPage() {
  const url = `${SITE.baseUrl}/services`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd({ url, crumbs }))}
      />

      <div className="mx-auto max-w-5xl">
        <p className="ow-label">What we do</p>
        <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
          SEO, web design, and conversion — backed by the lab.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ow-mid">
          Most agencies tell you what they <em>think</em> works. We show you what actually works —
          with public experiments, real data, and Search Console screenshots. Then we put those
          same strategies to work for your business.
        </p>

        <div className="mt-12 grid gap-3.5 md:grid-cols-3">
          <ServiceCard
            emoji="🔎"
            title="SEO"
            description="Be the business people actually find. We build local visibility that turns into calls—not vanity traffic."
            href="/services/seo"
          />
          <ServiceCard
            emoji="🧱"
            title="Web Design"
            description="A site that turns visitors into calls. Clear messaging, mobile-first layouts, and pages built to convert."
            href="/services/web-design"
          />
          <ServiceCard
            emoji="📈"
            title="Conversion Optimization"
            description="More leads from the traffic you already have. We fix the leaks—CTAs, forms, layout, and tracking."
            href="/services/conversion-optimization"
          />
        </div>

        <section className="mt-16 rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-8 shadow-ow-sm">
          <p className="ow-label">Why Outwit is different</p>
          <div className="mt-2 grid gap-4 md:grid-cols-3">
            <div>
              <h3 className="text-base font-bold tracking-tight">We test everything first.</h3>
              <p className="mt-2 text-sm leading-relaxed text-ow-mid">
                Before we recommend a tactic, we run it in public.{" "}
                <Link href="/lab" className="font-semibold text-ow-orange hover:underline">
                  See the Lab →
                </Link>
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight">
                You work with me, not an account manager.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ow-mid">
                Direct access, straight answers, and quick decisions. No phone-tag through layers.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight">No long-term contracts.</h3>
              <p className="mt-2 text-sm leading-relaxed text-ow-mid">
                Month-to-month after setup. If we’re not helping, you shouldn’t be stuck.
              </p>
            </div>
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
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-ow-sm border-[1.5px] border-[rgba(20,40,60,0.18)] bg-transparent px-7 py-3 text-sm font-semibold text-ow-slate transition hover:border-ow-charcoal hover:text-ow-charcoal"
          >
            See pricing first
          </Link>
        </div>
      </div>
    </div>
  );
}

function ServiceCard(props: {
  emoji: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={props.href}
      className="group flex flex-col gap-3 rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-ow"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-ow-sm border border-[rgba(240,100,0,0.22)] bg-[rgba(240,100,0,0.1)] text-lg">
        {props.emoji}
      </div>
      <h2 className="text-lg font-bold tracking-tight text-ow-charcoal">{props.title}</h2>
      <p className="text-sm leading-relaxed text-ow-mid">{props.description}</p>
      <span className="mt-2 inline-flex items-center font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ow-orange transition group-hover:gap-2">
        Learn more →
      </span>
    </Link>
  );
}

