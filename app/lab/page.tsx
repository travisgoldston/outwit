import Link from "next/link";
import { LAB_EXPERIMENTS, LAB_SLUGS } from "@/content/lab";
import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd, jsonLd, SITE } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Lab",
    description:
      "The Outwit Lab: public SEO and marketing experiments with real data, Search Console screenshots, and clear methodology.",
    path: "/lab",
  }),
};

function statusChip(slug: (typeof LAB_SLUGS)[number]) {
  const exp = LAB_EXPERIMENTS[slug];
  const done = exp.status === "Complete";
  return done
    ? "inline-flex items-center gap-1.5 rounded-full border border-[rgba(42,107,74,0.2)] bg-[rgba(42,107,74,0.08)] px-2.5 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.1em] text-[#2a6b4a]"
    : "inline-flex items-center gap-1.5 rounded-full border border-[rgba(240,100,0,0.22)] bg-[rgba(240,100,0,0.1)] px-2.5 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.1em] text-ow-orange";
}

export default function LabPage() {
  const url = `${SITE.baseUrl}/lab`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Lab", path: "/lab" },
  ];

  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd({ url, crumbs }))}
      />
      <div className="mx-auto max-w-4xl text-center">
        <p className="ow-label flex w-full justify-center">The Lab</p>
        <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight text-ow-charcoal sm:text-5xl">
          Active experiments
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ow-mid">
          Before I bet big on a tactic, I test it. I validate what actually moves the needle—then I
          write about it on{" "}
          <Link href="/insights" className="font-semibold text-ow-orange hover:underline">
            insights
          </Link>
          .
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {LAB_SLUGS.map((slug) => {
          const exp = LAB_EXPERIMENTS[slug];
          return (
            <Link
              key={slug}
              href={`/lab/${slug}`}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-ow"
            >
              <span className={statusChip(slug)}>{exp.status}</span>
              <h2 className="text-lg font-bold tracking-tight text-ow-charcoal">{exp.title}</h2>
              <p className="flex-1 text-sm leading-relaxed text-ow-mid">{exp.summary}</p>
              <p className="text-xs font-medium text-ow-mid/80">Last updated: {exp.lastUpdated.label}</p>
              <span className="inline-flex items-center text-xs font-semibold text-ow-orange">
                Read experiment →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
