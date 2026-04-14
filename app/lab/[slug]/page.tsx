import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LAB_EXPERIMENTS,
  type LabSlug,
} from "@/content/lab";
import { buildMetadata, breadcrumbJsonLd, jsonLd, SITE } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(LAB_EXPERIMENTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experiment = LAB_EXPERIMENTS[slug as LabSlug];
  if (!experiment) {
    return buildMetadata({
      title: "Lab experiment",
      description: "Experiment from the Outwit Lab.",
      path: "/lab",
    });
  }

  return buildMetadata({
    title: `Lab — ${experiment.title}`,
    description: experiment.summary,
    path: `/lab/${experiment.slug}`,
  });
}

export default async function LabExperimentPage({ params }: PageProps) {
  const { slug } = await params;
  const experiment = LAB_EXPERIMENTS[slug as LabSlug];

  if (!experiment) {
    notFound();
  }

  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(
            breadcrumbJsonLd({
              url: `${SITE.baseUrl}/lab/${experiment.slug}`,
              crumbs: [
                { name: "Home", path: "/" },
                { name: "Lab", path: "/lab" },
                { name: experiment.title, path: `/lab/${experiment.slug}` },
              ],
            })
          )}
        />
        <Link
          href="/lab"
          className="text-sm font-medium text-ow-mid transition-colors hover:text-ow-orange"
        >
          ← Back to the Lab
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-ow-orange">
            {experiment.status} Experiment
          </span>
          <span className="text-xs text-ow-mid">·</span>
          <span className="text-xs text-ow-mid">
            Last updated: <span className="font-medium">{experiment.lastUpdated.label}</span>
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ow-charcoal sm:text-4xl">
          {experiment.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ow-mid">{experiment.summary}</p>

        <div className="mt-10 space-y-10 text-ow-mid">
          <section>
            <h2 className="text-lg font-semibold text-ow-charcoal">The problem I’m testing</h2>
            <p className="mt-3 text-sm leading-relaxed">{experiment.problem}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ow-charcoal">Hypothesis</h2>
            <p className="mt-3 text-sm leading-relaxed">{experiment.hypothesis}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ow-charcoal">How I’m running it</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {experiment.method.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ow-charcoal">Data sources</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {experiment.dataSources.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {experiment.data?.length ? (
            <section>
              <h2 className="text-lg font-semibold text-ow-charcoal">Data</h2>
              <div className="mt-4 space-y-6">
                {experiment.data.map((block) => {
                  if (block.type === "metric") {
                    return (
                      <div
                        key={block.label}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <p className="text-xs font-mono uppercase tracking-[0.25em] text-ow-mid">
                          {block.label}
                        </p>
                        <p className="mt-2 text-2xl font-bold tracking-tight text-ow-charcoal">
                          {block.value}
                        </p>
                        {block.note ? (
                          <p className="mt-2 text-sm leading-relaxed text-ow-mid">{block.note}</p>
                        ) : null}
                      </div>
                    );
                  }

                  if (block.type === "table") {
                    return (
                      <div
                        key={block.title}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <p className="text-base font-semibold text-ow-charcoal">{block.title}</p>
                        {block.caption ? (
                          <p className="mt-2 text-sm leading-relaxed text-ow-mid">
                            {block.caption}
                          </p>
                        ) : null}
                        <div className="mt-4 overflow-x-auto">
                          <table className="w-full border-collapse text-left text-sm">
                            <thead>
                              <tr className="border-b border-slate-200">
                                {block.columns.map((col) => (
                                  <th key={col} className="py-2 pr-4 font-semibold text-ow-mid">
                                    {col}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.rows.map((row, idx) => (
                                <tr key={idx} className="border-b border-slate-100">
                                  {row.map((cell, cellIdx) => (
                                    <td key={cellIdx} className="py-2 pr-4 text-ow-mid">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <figure
                      key={block.src}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <p className="text-base font-semibold text-ow-charcoal">{block.title}</p>
                      {block.caption ? (
                        <p className="mt-2 text-sm leading-relaxed text-ow-mid">{block.caption}</p>
                      ) : null}
                      <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                        {/* Use plain img so you can drop screenshots into /public without extra config */}
                        <img
                          src={block.src}
                          alt={block.alt}
                          className="h-auto w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </figure>
                  );
                })}
              </div>
            </section>
          ) : null}

          {experiment.updates?.length ? (
            <section>
              <h2 className="text-lg font-semibold text-ow-charcoal">Update log</h2>
              <div className="mt-4 space-y-5">
                {experiment.updates.map((u) => (
                  <div
                    key={u.date.iso}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-ow-mid">
                      {u.date.label}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ow-mid">
                      {u.notes.map((n) => (
                        <li key={n} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section>
            <h2 className="text-lg font-semibold text-ow-charcoal">What I’m seeing</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {experiment.findings.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ow-charcoal">What it means</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {experiment.whatItMeans.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {experiment.whatIdDoDifferently?.length ? (
            <section>
              <h2 className="text-lg font-semibold text-ow-charcoal">
                What I&apos;d do differently
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                {experiment.whatIdDoDifferently.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {experiment.links?.length ? (
            <section>
              <h2 className="text-lg font-semibold text-ow-charcoal">Links</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                {experiment.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="font-semibold text-ow-orange hover:underline"
                      target={l.href.startsWith("/") ? undefined : "_blank"}
                      rel={l.href.startsWith("/") ? undefined : "noopener noreferrer"}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm">
          <p className="text-sm leading-relaxed text-ow-mid">
            More:{" "}
            <Link href="/insights" className="font-semibold text-ow-orange hover:underline">
              Insights
            </Link>
            {" · "}
            <Link href="/about" className="font-semibold text-ow-orange hover:underline">
              About
            </Link>
            {" · "}
            <a
              href="mailto:hello@outwitdigital.com"
              className="font-semibold text-ow-orange hover:underline"
            >
              Email me
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
