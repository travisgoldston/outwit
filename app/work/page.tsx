import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd, jsonLd, SITE } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Real client work with real starting points and real Search Console data—no estimates, no vanity metrics.",
  path: "/work",
});

export default function WorkPage() {
  const url = `${SITE.baseUrl}/work`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
  ];

  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd({ url, crumbs }))}
      />

      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="ow-label">Work</p>
          <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
            Proof, not promises.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ow-mid">
            You&apos;re the hero here. You already have the product, the service, or the expertise—what
            you need is visibility that turns into leads. Outwit is the guide: we build the system,
            ship the work, and let Search Console tell the truth.
          </p>
        </div>

        <div className="mt-10 grid gap-3.5 lg:grid-cols-3">
          <div className="rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-7 shadow-ow-sm">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ow-mid">
              The problem
            </p>
            <h2 className="mt-3 text-lg font-extrabold tracking-tight text-ow-charcoal">
              Page 3 is invisible.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ow-mid">
              If you&apos;re buried, you&apos;re not competing. The gap isn&apos;t effort—it&apos;s the
              system: technical foundation, intent-led content, and consistency.
            </p>
          </div>

          <div className="rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-7 shadow-ow-sm">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ow-mid">The guide</p>
            <h2 className="mt-3 text-lg font-extrabold tracking-tight text-ow-charcoal">
              Built in public. Measured in public.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ow-mid">
              Outwit runs the Lab for a reason: we don&apos;t guess. We test tactics on real sites,
              publish the data, and use the same standard on client work.
            </p>
            <div className="mt-5">
              <Link href="/lab" className="font-semibold text-ow-orange hover:underline">
                See the Lab →
              </Link>
            </div>
          </div>

          <div className="rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-7 shadow-ow-sm">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ow-mid">The plan</p>
            <h2 className="mt-3 text-lg font-extrabold tracking-tight text-ow-charcoal">
              A simple 3-step system.
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ow-mid">
              <li>Fix the foundation (technical + on-page)</li>
              <li>Publish content built to rank (intent-first)</li>
              <li>Iterate with Search Console (ship → measure → refine)</li>
            </ol>
          </div>
        </div>

        <div className="mt-12 rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-7 shadow-ow-sm">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="h-14 w-14 overflow-hidden rounded-full bg-white ring-1 ring-[rgba(20,40,60,0.12)]">
                <Image
                  src="/work/budgetocity/budgetocity-logo.png"
                  alt="Budgetocity"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ow-mid">Featured</p>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ow-charcoal">
                  Budgetocity
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ow-mid">
                  Personal finance app · SEO · Content · Social
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <div className="font-sans text-3xl font-extrabold italic tracking-tight text-ow-orange">
                31 → 6
              </div>
              <div className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ow-mid">
                Avg. position · 3 months
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-ow-mid">
            The story is simple: the product was real, the audience was real, but the site was
            averaging page 3. We built the foundation, shipped the content, and the data moved.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/work/budgetocity"
              className="inline-flex items-center gap-2 rounded-ow-sm bg-ow-orange px-8 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-ow-ember hover:shadow-[0_8px_28px_rgba(240,100,0,0.35)]"
            >
              See the Budgetocity case study →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-ow-sm border-[1.5px] border-[rgba(20,40,60,0.18)] bg-transparent px-7 py-3 text-sm font-semibold text-ow-slate transition hover:border-ow-charcoal hover:text-ow-charcoal"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-3.5 lg:grid-cols-2">
          <div className="rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-7 shadow-ow-sm">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ow-mid">
              Success looks like
            </p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ow-charcoal">
              Visibility you can measure.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ow-mid">
              Rankings that move, clicks that grow, and a content engine that compounds—backed by
              real Search Console screenshots.
            </p>
          </div>
          <div className="rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-7 shadow-ow-sm">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ow-mid">
              Failure looks like
            </p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ow-charcoal">
              Staying buried.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ow-mid">
              More content, more spend, more effort—without a system. The result is the same: page 3
              forever.
            </p>
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

