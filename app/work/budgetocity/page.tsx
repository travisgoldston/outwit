import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Budgetocity",
  description: "Budgetocity: from page 3 to page 1 in 3 months.",
  path: "/work/budgetocity",
});

export default function BudgetocityCaseStudyPage() {
  return (
    <div className="bg-ow-cream px-5 pt-24 text-ow-charcoal sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[800px] pb-24">
        <div className="pt-10 sm:pt-16">
          <div className="mb-6 flex flex-wrap items-center gap-2.5">
            <span className="rounded-[2px] bg-ow-charcoal px-2.5 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.12em] text-ow-cream">
              Client Work
            </span>
            <span className="rounded-[2px] border border-ow-orange px-2.5 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.12em] text-ow-orange">
              Real data
            </span>
          </div>

          <h1 className="font-sans text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            Budgetocity: from page 3
            <br />
            to <span className="italic text-ow-orange">page 1</span> in 3 months
          </h1>

          <p className="mt-5 font-mono text-[0.82rem] leading-[1.8] text-ow-mid">
            <span className="font-medium text-ow-charcoal">What we did:</span> SEO · Content strategy · Social media
            &nbsp;·&nbsp;
            <span className="font-medium text-ow-charcoal">Timeline:</span> ~3 months &nbsp;·&nbsp;
            <span className="font-medium text-ow-charcoal">Starting point:</span> Avg. position 31.2 · No content
            engine · No presence
          </p>
        </div>

        <hr className="my-10 border-0 border-t border-[rgba(20,40,60,0.12)]" />

        <div className="grid gap-0 sm:grid-cols-3">
          <div className="py-6 pr-0 sm:pr-6">
            <div className="font-sans text-[2.6rem] font-extrabold leading-none tracking-tight text-ow-charcoal">
              31.2 <span className="mx-1 font-mono text-[1.2rem] text-ow-orange">→</span> 6.2
            </div>
            <div className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ow-mid">
              Avg. search position
            </div>
          </div>
          <div className="border-y border-[rgba(20,40,60,0.12)] py-6 sm:border-y-0 sm:border-x sm:px-6">
            <div className="font-sans text-[2.6rem] font-extrabold leading-none tracking-tight text-ow-charcoal">
              +28%
            </div>
            <div className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ow-mid">
              Clicks, year over year
            </div>
          </div>
          <div className="py-6 pl-0 sm:pl-6">
            <div className="font-sans text-[2.6rem] font-extrabold leading-none tracking-tight text-ow-charcoal">
              0 → 🔍
            </div>
            <div className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ow-mid">
              Content engine built from scratch
            </div>
          </div>
        </div>

        <hr className="my-10 border-0 border-t border-[rgba(20,40,60,0.12)]" />

        <div className="space-y-14">
          <section>
            <h2 className="mb-4 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ow-mid">
              The problem
            </h2>
            <h3 className="mb-4 font-sans text-[1.6rem] font-extrabold italic leading-snug tracking-tight">
              A real app. A real audience. Nobody finding it.
            </h3>
            <div className="space-y-4 text-[0.975rem] leading-[1.75] text-ow-slate">
              <p>
                Budgetocity is a personal finance app built for people living paycheck to paycheck — a massive,
                underserved audience with real search intent. The product existed. The demand existed.
              </p>
              <p>
                But the site was averaging a position of <strong>31.2</strong> in Google — page 3. Effectively
                invisible. No content strategy, no SEO foundation, no social channels worth mentioning.
              </p>
              <p>They needed someone to build it right.</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ow-mid">
              What we did
            </h2>
            <h3 className="mb-4 font-sans text-[1.6rem] font-extrabold italic leading-snug tracking-tight">
              Three things, running at the same time.
            </h3>
            <div className="space-y-4 text-[0.975rem] leading-[1.75] text-ow-slate">
              <p>Starting in January, we focused on the full picture — not just one channel.</p>
            </div>

            <div className="mt-6 grid gap-px rounded-ow border border-[rgba(20,40,60,0.12)] bg-[rgba(20,40,60,0.12)] sm:grid-cols-3">
              <div className="bg-white p-6">
                <div className="mb-3 text-[1.4rem]">🔎</div>
                <div className="mb-2 text-[0.85rem] font-bold tracking-tight text-ow-charcoal">SEO</div>
                <p className="m-0 text-[0.8rem] leading-relaxed text-ow-mid">
                  Fixed structural and on-page issues keeping the site buried. Built around queries people actually
                  type — not guesses.
                </p>
              </div>
              <div className="bg-white p-6">
                <div className="mb-3 text-[1.4rem]">✍️</div>
                <div className="mb-2 text-[0.85rem] font-bold tracking-tight text-ow-charcoal">Content</div>
                <p className="m-0 text-[0.8rem] leading-relaxed text-ow-mid">
                  Created pieces built to rank. Topic selection driven by search intent. Every piece structured the way
                  Google rewards.
                </p>
              </div>
              <div className="bg-white p-6">
                <div className="mb-3 text-[1.4rem]">📣</div>
                <div className="mb-2 text-[0.85rem] font-bold tracking-tight text-ow-charcoal">Social</div>
                <p className="m-0 text-[0.8rem] leading-relaxed text-ow-mid">
                  Launched and grew channels to build brand awareness while organic search compounded in the background.
                </p>
              </div>
            </div>

            <p className="mt-6 text-[0.975rem] leading-[1.75] text-ow-slate">
              Steady execution. No tricks. Published, measured, iterated based on what Search Console said.
            </p>
          </section>

          <div className="rounded-ow border-l-[3px] border-l-ow-orange bg-white px-6 py-5">
            <p className="m-0 font-sans text-[1.35rem] italic leading-snug text-ow-charcoal">
              &quot;No theory. No fluff. Just built the thing, shipped the content, and let the data prove it
              out.&quot;
            </p>
          </div>

          <section>
            <h2 className="mb-4 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ow-mid">
              What happened
            </h2>
            <h3 className="mb-6 font-sans text-[1.6rem] font-extrabold italic leading-snug tracking-tight">
              Google noticed.
            </h3>

            <p className="mb-5 text-[0.975rem] leading-[1.75] text-ow-slate">
              The primary goal here wasn&apos;t necessarily clicks—it was ranking. Moving from page 3 to page 1 changes
              everything. This is still a work in progress, but the results speak for themselves.
            </p>

            <ul className="m-0 list-none space-y-0">
              <li className="flex gap-4 border-b border-[rgba(20,40,60,0.12)] py-4">
                <span className="min-w-[80px] font-sans text-[1.5rem] font-extrabold italic leading-none text-ow-orange">
                  31 → 6
                </span>
                <span className="text-[0.88rem] leading-relaxed text-ow-slate">
                  Average ranking position dropped from 31.2 to 6.2 — from page 3 to the top of page 1, across real
                  keywords in a competitive niche.
                </span>
              </li>
              <li className="flex gap-4 border-b border-[rgba(20,40,60,0.12)] py-4">
                <span className="min-w-[80px] font-sans text-[1.5rem] font-extrabold italic leading-none text-ow-orange">
                  +28%
                </span>
                <span className="text-[0.88rem] leading-relaxed text-ow-slate">
                  Year-over-year click growth. More visitors, higher-intent queries — including &quot;budgeting between
                  paychecks&quot; and &quot;budgeting tips when you live paycheck to paycheck.&quot;
                </span>
              </li>
              <li className="flex gap-4 py-4">
                <span className="min-w-[80px] font-sans text-[1.5rem] font-extrabold italic leading-none text-ow-orange">
                  754
                </span>
                <span className="text-[0.88rem] leading-relaxed text-ow-slate">
                  Impressions in the last 28 days — at an average position of 6.2. The same eyeballs, seeing the site at
                  the top instead of buried on page 3.
                </span>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-ow border border-[rgba(20,40,60,0.12)] bg-white">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(20,40,60,0.12)] px-5 py-3">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ow-mid">
                  Google Search Console · 28-day YoY comparison
                </span>
                <span className="rounded-[2px] bg-[rgba(20,40,60,0.06)] px-2 py-1 font-mono text-[0.68rem] text-ow-mid">
                  Real screenshot
                </span>
              </div>

              <div className="relative">
                <Image
                  src="/work/budgetocity/gsc-yoy.png"
                  alt="Google Search Console performance comparison screenshot"
                  width={1600}
                  height={900}
                  className="block h-auto w-full"
                />
                {/* Blur sensitive tiles (clicks + CTR) without editing the source image */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute rounded-[8px] bg-white/35 backdrop-blur-md"
                  style={{
                    left: "0.8%",
                    top: "18.2%",
                    width: "18.2%",
                    height: "18.4%",
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute rounded-[8px] bg-white/35 backdrop-blur-md"
                  style={{
                    left: "36.8%",
                    top: "18.2%",
                    width: "18.2%",
                    height: "18.4%",
                  }}
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ow-mid">
              What it means
            </h2>
            <h3 className="mb-4 font-sans text-[1.6rem] font-extrabold italic leading-snug tracking-tight">
              Page 3 isn&apos;t a traffic problem. It&apos;s a visibility problem.
            </h3>
            <div className="space-y-4 text-[0.975rem] leading-[1.75] text-ow-slate">
              <p>Fix the foundation, publish the right content, stay consistent — and Google moves you up faster than most people expect.</p>
              <p>
                Budgetocity went from nonexistent to ranking top 10 for real queries in a competitive space. In three
                months. The data&apos;s right there in Search Console.
              </p>
            </div>
          </section>

          <section className="mt-6 flex flex-wrap items-center justify-between gap-6 rounded-ow bg-ow-charcoal px-8 py-10 text-ow-cream">
            <div>
              <h3 className="font-sans text-[1.5rem] font-extrabold italic leading-snug">
                Want to see what this looks like for your brand?
              </h3>
              <p className="mt-1 font-mono text-[0.75rem] text-white/55">
                No pitch deck. Just a conversation about what&apos;s actually possible.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-ow-sm bg-ow-orange px-7 py-3 text-[0.82rem] font-bold uppercase tracking-[0.06em] text-white transition hover:opacity-90"
            >
              Get a strategy call →
            </Link>
          </section>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-[rgba(20,40,60,0.12)] pt-8">
          <Link href="/work" className="font-mono text-[0.72rem] text-ow-mid transition hover:text-ow-orange">
            ← All client work
          </Link>
          <Link href="/lab" className="font-mono text-[0.72rem] text-ow-mid transition hover:text-ow-orange">
            See the lab →
          </Link>
        </div>
      </div>
    </div>
  );
}

