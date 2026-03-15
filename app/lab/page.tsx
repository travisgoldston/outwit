import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Marketing Lab",
  description:
    "Experiments in websites, SEO, and conversion from the Outwit Lab—where we test ideas on our own projects before we recommend them to clients.",
};

const experiments = [
  {
    title: "Testing AI landing page copy",
    status: "In Progress",
    summary:
      "We’re comparing human-written vs. AI-assisted landing pages to see what actually lifts conversions—and where AI breaks trust.",
  },
  {
    title: "Can a simple homepage increase conversions?",
    status: "Complete",
    summary:
      "We stripped a busy homepage down to a single narrative and tracked what happened to leads, time on page, and bounce rate.",
  },
  {
    title: "How page speed impacts lead generation",
    status: "Complete",
    summary:
      "We measured the impact of shaving seconds off load time on form fills and demo requests across several sites.",
  },
  {
    title: "Experimenting with modern SEO content",
    status: "In Progress",
    summary:
      "We’re testing cluster-based content strategies against one-off blog posts to see which builds search demand more reliably.",
  },
];

const statusStyles: Record<string, string> = {
  Complete: "bg-white/10 text-white/90",
  "In Progress": "bg-neon-orange/20 text-neon-orange",
};

export default function LabPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          The Outwit Marketing Lab.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Before we recommend a tactic, we test it. These experiments are where we validate what
          actually moves the needle in modern marketing.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {experiments.map((exp) => (
          <article
            key={exp.title}
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
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center text-xs font-semibold text-neon-orange transition-colors hover:text-neon-orange/80"
            >
              Talk about running a similar experiment
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
            </Link>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Want your growth problem in the Lab?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Share what you&apos;re trying to solve. If it&apos;s a good fit, we&apos;ll design a
          focused experiment and walk you through the play-by-play.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
          >
            Start a strategy conversation
          </Link>
          <Link
            href="/insights"
            className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
          >
            Read related insights
          </Link>
        </div>
      </div>
    </div>
  );
}

