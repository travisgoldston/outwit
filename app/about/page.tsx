import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — About",
  description:
    "Travis Goldston — Outwit is my personal marketing lab where I publish SEO and marketing experiments with real data.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">About</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Hi, I&apos;m Travis.
        </h1>

        <div className="prose prose-slate mt-10 max-w-none space-y-6 text-base leading-relaxed text-slate-700">
          <p>
            I grew up in North Texas. I built my career in digital marketing: strategy, SEO,
            content, and the messy middle where data meets judgment.
          </p>
          <p>
            These days I&apos;m building a portfolio of brands and businesses—not just advising from
            the sidelines.
          </p>
          <p>
            <strong>Outwit is my personal marketing lab.</strong> I run SEO and marketing
            experiments on real sites, publish the data, and write down what I learned—so the work
            is visible and the conclusions are earned.
          </p>
          <p>
            This site isn&apos;t a pitch deck. I publish{" "}
            <Link href="/insights" className="font-semibold text-neon-orange hover:underline">
              insights
            </Link>
            , share tests in the{" "}
            <Link href="/lab" className="font-semibold text-neon-orange hover:underline">
              Lab
            </Link>
            , and link out to what I&apos;m building elsewhere from the home page. I believe in
            showing your work. That&apos;s what this site is for.
          </p>
        </div>

        <p className="mt-14 border-t border-slate-200 pt-10 text-base leading-relaxed text-slate-600">
          If you&apos;re a local business looking for marketing help, visit{" "}
          <a
            href="https://bluebonnetgrowth.com"
            className="font-semibold text-neon-orange hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bluebonnet Growth
          </a>
          .
        </p>
      </div>
    </div>
  );
}
