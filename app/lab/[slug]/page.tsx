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

        <p className="mt-6 text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
          {experiment.status} Experiment
        </p>
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
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm">
          <p className="text-sm leading-relaxed text-slate-600">
            More:{" "}
            <Link href="/blog" className="font-semibold text-neon-orange hover:underline">
              Blog
            </Link>
            {" · "}
            <Link href="/projects" className="font-semibold text-neon-orange hover:underline">
              Projects
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
