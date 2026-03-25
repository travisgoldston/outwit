import type { Metadata } from "next";
import Link from "next/link";
import { LAB_EXPERIMENTS, LAB_SLUGS } from "@/content/lab";

export const metadata: Metadata = {
  title: "Outwit — Lab",
  description:
    "Marketing experiments I run with real data and real projects—published here so you can see what actually moves the needle.",
};

const comingSoon = [
  {
    title: "Testing AI landing page copy",
    summary:
      "Comparing human-written vs. AI-assisted landing pages to see what lifts conversions—and where AI breaks trust.",
  },
  {
    title: "How page speed impacts conversion",
    summary:
      "Measuring what shaving seconds off load time does to engagement and sign-ups across real sites.",
  },
];

const statusStyles: Record<string, string> = {
  Complete: "bg-white/10 text-white/90",
  "In Progress": "bg-neon-orange/20 text-neon-orange",
  Coming: "bg-slate-500/20 text-slate-300",
};

export default function LabPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          The Outwit Lab.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Before I bet big on a tactic, I test it. These experiments are where I validate what
          actually moves the needle—then I write about it here and on the{" "}
          <Link href="/blog" className="font-semibold text-neon-orange hover:underline">
            blog
          </Link>
          .
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {LAB_SLUGS.map((slug) => {
          const exp = LAB_EXPERIMENTS[slug];
          return (
            <Link
              key={slug}
              href={`/lab/${slug}`}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-neon-orange/60 hover:shadow-md"
            >
              <span
                className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] ${
                  statusStyles[exp.status] ?? "bg-white/10 text-white/80"
                }`}
              >
                {exp.status}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">{exp.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{exp.summary}</p>
              <span className="mt-6 inline-flex items-center text-xs font-semibold text-neon-orange">
                Read experiment
                <svg
                  className="ml-1 h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          );
        })}
        {comingSoon.map((exp) => (
          <article
            key={exp.title}
            className="flex flex-col rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-7"
          >
            <span
              className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] ${statusStyles.Coming}`}
            >
              Coming soon
            </span>
            <h2 className="mt-4 text-lg font-semibold text-slate-700">{exp.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{exp.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
