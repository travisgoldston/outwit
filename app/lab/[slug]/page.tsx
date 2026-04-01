import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LAB_EXPERIMENTS,
  type LabSlug,
} from "@/content/lab";

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
    return {
      title: "Outwit Lab — Experiment",
      description: "Experiment from the Outwit Lab.",
    };
  }

  return {
    title: `Outwit Lab — ${experiment.title}`,
    description: experiment.summary,
  };
}

export default async function LabExperimentPage({ params }: PageProps) {
  const { slug } = await params;
  const experiment = LAB_EXPERIMENTS[slug as LabSlug];

  if (!experiment) {
    notFound();
  }

  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/lab"
          className="text-sm font-medium text-slate-600 transition-colors hover:text-neon-orange"
        >
          ← Back to the Lab
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
            {experiment.status} Experiment
          </span>
          <span className="text-xs text-slate-500">·</span>
          <span className="text-xs text-slate-500">
            Last updated: <span className="font-medium">{experiment.lastUpdated.label}</span>
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {experiment.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-700">{experiment.summary}</p>

        <div className="mt-10 space-y-10 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">The problem I’m testing</h2>
            <p className="mt-3 text-sm leading-relaxed">{experiment.problem}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">Hypothesis</h2>
            <p className="mt-3 text-sm leading-relaxed">{experiment.hypothesis}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">How I’m running it</h2>
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
            <h2 className="text-lg font-semibold text-slate-900">Data sources</h2>
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
              <h2 className="text-lg font-semibold text-slate-900">Data</h2>
              <div className="mt-4 space-y-6">
                {experiment.data.map((block) => {
                  if (block.type === "metric") {
                    return (
                      <div
                        key={block.label}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500">
                          {block.label}
                        </p>
                        <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                          {block.value}
                        </p>
                        {block.note ? (
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{block.note}</p>
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
                        <p className="text-base font-semibold text-slate-900">{block.title}</p>
                        {block.caption ? (
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            {block.caption}
                          </p>
                        ) : null}
                        <div className="mt-4 overflow-x-auto">
                          <table className="w-full border-collapse text-left text-sm">
                            <thead>
                              <tr className="border-b border-slate-200">
                                {block.columns.map((col) => (
                                  <th key={col} className="py-2 pr-4 font-semibold text-slate-700">
                                    {col}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.rows.map((row, idx) => (
                                <tr key={idx} className="border-b border-slate-100">
                                  {row.map((cell, cellIdx) => (
                                    <td key={cellIdx} className="py-2 pr-4 text-slate-700">
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
                      <p className="text-base font-semibold text-slate-900">{block.title}</p>
                      {block.caption ? (
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{block.caption}</p>
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
              <h2 className="text-lg font-semibold text-slate-900">Update log</h2>
              <div className="mt-4 space-y-5">
                {experiment.updates.map((u) => (
                  <div
                    key={u.date.iso}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500">
                      {u.date.label}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
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
            <h2 className="text-lg font-semibold text-slate-900">What I’m seeing</h2>
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
            <h2 className="text-lg font-semibold text-slate-900">What it means</h2>
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
              <h2 className="text-lg font-semibold text-slate-900">
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
              <h2 className="text-lg font-semibold text-slate-900">Links</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                {experiment.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="font-semibold text-neon-orange hover:underline"
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
          <p className="text-sm leading-relaxed text-slate-600">
            More:{" "}
            <Link href="/insights" className="font-semibold text-neon-orange hover:underline">
              Insights
            </Link>
            {" · "}
            <Link href="/about" className="font-semibold text-neon-orange hover:underline">
              About
            </Link>
            {" · "}
            <a
              href="mailto:hello@outwit.digital"
              className="font-semibold text-neon-orange hover:underline"
            >
              Email me
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
