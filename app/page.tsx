import Link from "next/link";
import HomeHero from "@/components/home/HomeHero";
import LabTicker from "@/components/home/LabTicker";
import WhatOutwitIs from "@/components/home/WhatOutwitIs";
import HomeAboutStrip from "@/components/home/HomeAboutStrip";
import HomeCta from "@/components/home/HomeCta";
import { LAB_SLUGS, LAB_EXPERIMENTS, type LabSlug } from "@/content/lab";
import {
  BLOG_LIST,
  BLOG_PUBLISHED,
  BLOG_POSTS,
  type BlogSlug,
} from "@/content/blog";

const FEATURED_SLUG = "what-makes-a-high-converting-website" satisfies BlogSlug;

function labCardClass(slug: LabSlug) {
  const status = LAB_EXPERIMENTS[slug].status;
  const isDone = status === "Complete";
  return [
    "group relative flex flex-col gap-3 overflow-hidden rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[rgba(20,40,60,0.22)] hover:shadow-ow",
    "after:absolute after:left-0 after:right-0 after:top-0 after:h-[3px] after:origin-left after:scale-x-0 after:rounded-t-ow after:transition after:duration-300 group-hover:after:scale-x-100",
    isDone ? "after:bg-[#2a6b4a]" : "after:bg-ow-orange",
  ].join(" ");
}

function chipClass(slug: LabSlug) {
  const status = LAB_EXPERIMENTS[slug].status;
  const isDone = status === "Complete";
  return isDone
    ? "inline-flex items-center gap-1.5 rounded-full border border-[rgba(42,107,74,0.2)] bg-[rgba(42,107,74,0.08)] px-2.5 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.1em] text-[#2a6b4a]"
    : "inline-flex items-center gap-1.5 rounded-full border border-[rgba(240,100,0,0.22)] bg-[rgba(240,100,0,0.1)] px-2.5 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.1em] text-ow-orange";
}

function chipDotClass(slug: LabSlug) {
  const status = LAB_EXPERIMENTS[slug].status;
  const isDone = status === "Complete";
  return isDone
    ? "h-[5px] w-[5px] rounded-full bg-[#2a6b4a]"
    : "h-[5px] w-[5px] animate-pulse-kicker rounded-full bg-ow-orange";
}

export default function Page() {
  const featured = BLOG_POSTS[FEATURED_SLUG as keyof typeof BLOG_POSTS];
  const otherInsights = BLOG_LIST.filter((a) => a.slug !== FEATURED_SLUG).slice(0, 2);

  return (
    <>
      <HomeHero />
      <LabTicker />
      <WhatOutwitIs />

      <section id="lab" className="bg-ow-cream px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="ow-label">The Lab</p>
            <h2 className="max-w-[680px] font-sans text-[clamp(2rem,3.8vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ow-charcoal">
              Active experiments.
              <br />
              <span className="text-ow-orange">Real data. Public.</span>
            </h2>
          </div>
          <Link
            href="/lab"
            className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ow-orange transition hover:gap-2.5"
          >
            View all experiments →
          </Link>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {LAB_SLUGS.map((slug) => {
            const exp = LAB_EXPERIMENTS[slug];
            return (
              <Link key={slug} href={`/lab/${slug}`} className={labCardClass(slug)}>
                <div className={chipClass(slug)}>
                  <span className={chipDotClass(slug)} />
                  {exp.status}
                </div>
                <h3 className="text-base font-bold leading-snug tracking-tight text-ow-charcoal">
                  {exp.title}
                </h3>
                <p className="flex-1 text-[0.82rem] leading-relaxed text-ow-mid">{exp.summary}</p>
                <div className="flex items-center justify-between border-t border-[rgba(20,40,60,0.12)] pt-3 font-mono text-[0.62rem] tracking-[0.05em] text-ow-mid">
                  <span>Updated {exp.lastUpdated.label}</span>
                  <span className="text-ow-orange">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-[rgba(20,40,60,0.12)] bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="ow-label">Insights</p>
            <h2 className="max-w-[680px] font-sans text-[clamp(2rem,3.8vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ow-charcoal">
              What the data
              <br />
              <span className="text-ow-orange">actually says.</span>
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ow-orange transition hover:gap-2.5"
          >
            View all insights →
          </Link>
        </div>

        <div className="grid gap-3.5 lg:grid-cols-[2fr_1fr_1fr]">
          <Link
            href={`/insights/${featured.slug}`}
            className="flex flex-col gap-2.5 rounded-ow border border-transparent bg-ow-charcoal p-7 transition hover:shadow-ow lg:min-h-[280px]"
          >
            <div className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.1em] text-white/35">
              {BLOG_PUBLISHED[FEATURED_SLUG]}
            </div>
            <h3 className="text-xl font-bold leading-snug tracking-tight text-white">{featured.title}</h3>
            <p className="flex-1 text-[0.82rem] leading-relaxed text-white/45">{featured.summary}</p>
            <div className="flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[0.62rem] tracking-[0.06em] text-white/30">
              <span>{featured.readTime}</span>
              <span className="text-ow-orange">→</span>
            </div>
          </Link>

          {otherInsights.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="flex flex-col gap-2.5 rounded-ow border border-[rgba(20,40,60,0.18)] bg-ow-cream p-7 transition hover:-translate-y-0.5 hover:shadow-ow"
            >
              <div className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.1em] text-ow-mid">
                {BLOG_PUBLISHED[article.slug]}
              </div>
              <h3 className="text-base font-bold leading-snug tracking-tight text-ow-charcoal">
                {article.title}
              </h3>
              <p className="flex-1 text-[0.82rem] leading-relaxed text-ow-mid">{article.summary}</p>
              <div className="flex items-center justify-between border-t border-[rgba(20,40,60,0.12)] pt-3 font-mono text-[0.62rem] tracking-[0.06em] text-ow-mid">
                <span>{article.readTime}</span>
                <span className="text-ow-orange">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <HomeAboutStrip />
      <HomeCta />
    </>
  );
}
