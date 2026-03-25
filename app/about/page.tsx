import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — About",
  description:
    "Travis Goldston — brands, marketing experiments, and building a portfolio of businesses from North Texas.",
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
            I grew up in North Texas. My dad is a master electrician—the spark behind{" "}
            <a
              href="https://boldspark.co"
              className="font-semibold text-neon-orange hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boldspark
            </a>
            , where we help local businesses show up online. I built my career in digital
            marketing: strategy, SEO, content, and the messy middle where data meets judgment.
          </p>
          <p>
            These days I&apos;m building a portfolio of brands and businesses—not just advising from
            the sidelines. Outwit is my personal digital home: a place to write, run experiments, and
            think out loud about what&apos;s working (and what isn&apos;t) in modern marketing.
          </p>
          <p>
            This site isn&apos;t a pitch deck. I publish on the{" "}
            <Link href="/blog" className="font-semibold text-neon-orange hover:underline">
              blog
            </Link>
            , share tests in the{" "}
            <Link href="/lab" className="font-semibold text-neon-orange hover:underline">
              Lab
            </Link>
            , and keep a running list of what I&apos;m building on{" "}
            <Link href="/projects" className="font-semibold text-neon-orange hover:underline">
              Projects
            </Link>
            . If something here helps you make a smarter decision, that&apos;s the whole point.
          </p>
        </div>

        <p className="mt-14 border-t border-slate-200 pt-10 text-base leading-relaxed text-slate-600">
          If you&apos;re a local business looking for marketing help, check out{" "}
          <a
            href="https://boldspark.co"
            className="font-semibold text-neon-orange hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Boldspark
          </a>
          .
        </p>
      </div>
    </div>
  );
}
