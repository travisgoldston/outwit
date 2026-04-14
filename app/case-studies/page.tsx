import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata, jsonLd, breadcrumbJsonLd, SITE } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Real businesses. Real data. No fake case studies with made-up percentages—just real outcomes and the experiments behind them.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const url = `${SITE.baseUrl}/case-studies`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
  ];

  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd({ url, crumbs }))}
      />

      <div className="mx-auto max-w-5xl">
        <p className="ow-label">Case studies</p>
        <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
          Real businesses. Real data.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ow-mid">
          We don&apos;t do fake case studies with made-up percentages. These are real clients with
          real outcomes — and the lab experiments to prove it.
        </p>

        <div className="mt-12 grid gap-3.5 lg:grid-cols-2">
          <div className="rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-7 shadow-ow-sm">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ow-mid">
              Coming soon
            </p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ow-charcoal">
              First client case study (coming soon).
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ow-mid">
              We&apos;re keeping this private until the story is complete and the data is ready to be
              shared publicly.
            </p>
            <div className="mt-6">
              <Link href="/lab" className="font-semibold text-ow-orange hover:underline">
                See the Lab →
              </Link>
            </div>
          </div>

          <div className="rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-7 shadow-ow-sm">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ow-mid">
              Coming soon
            </p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ow-charcoal">
              More coming soon.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ow-mid">
              We&apos;re gradually making our client work public. In the meantime, the Lab shows the
              proof and the process.
            </p>
            <div className="mt-6">
              <Link href="/lab" className="font-semibold text-ow-orange hover:underline">
                See the Lab →
              </Link>
            </div>
          </div>
        </div>

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

