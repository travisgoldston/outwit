import Link from "next/link";
import { BLOG_LIST, BLOG_PUBLISHED } from "@/content/blog";
import { LAB_EXPERIMENTS, LAB_SLUGS } from "@/content/lab";
import HeroVisual from "@/components/HeroVisual";
import VibeMonitor from "@/components/VibeMonitor";

const projectLinks = [
  { href: "https://boldspark.co", label: "Boldspark" },
  { href: "https://foundinnorthtexas.com", label: "Found in North Texas" },
  { href: "https://travisgoldston.com", label: "travisgoldston.com" },
];

export default function Home() {
  const recentPosts = BLOG_LIST.slice(0, 3);
  const recentLab = LAB_SLUGS.slice(0, 2).map((slug) => LAB_EXPERIMENTS[slug]);

  return (
    <>
      <section className="relative overflow-hidden bg-vibe-bg px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
              Outwit
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Outwit the ordinary<span className="text-neon-orange">.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl lg:mx-0">
              My creative playground for vibe coding, digital marketing experiments, and insights
              from inside my brain. No KPIs, just craft.
            </p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </section>

      <VibeMonitor />

      <section className="border-t border-white/5 bg-[#FAFAFA] px-6 py-20 text-slate-900 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Recent from the blog
              </h2>
              <p className="mt-2 text-slate-600">
                Strategy, SEO, and lessons from the work.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-neon-orange hover:underline"
            >
              All posts →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-neon-orange/60 hover:shadow-md"
              >
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-neon-orange/80">
                  {BLOG_PUBLISHED[post.slug]}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-neon-orange">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
                  {post.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-vibe-bg px-6 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">From the Lab</h2>
              <p className="mt-2 text-white/70">
                Real experiments with real data—before I trust a tactic at scale.
              </p>
            </div>
            <Link href="/lab" className="text-sm font-semibold text-neon-orange hover:underline">
              Full Lab →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {recentLab.map((exp) => (
              <Link
                key={exp.slug}
                href={`/lab/${exp.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-neon-orange/40 hover:bg-white/[0.07]"
              >
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-neon-orange">
                  {exp.status}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-neon-orange">
                  {exp.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 line-clamp-3">
                  {exp.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Elsewhere</h2>
          <p className="mt-3 text-sm text-slate-600">
            Brands and projects I&apos;m building—outside this site.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {projectLinks.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-neon-orange hover:text-neon-orange"
              >
                {p.label}
              </a>
            ))}
            <Link
              href="/projects"
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              All projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
