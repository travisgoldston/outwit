import Image from "next/image";
import Link from "next/link";

export default function WhoWeveHelpedSection() {
  return (
    <section className="border-t border-[rgba(20,40,60,0.12)] bg-ow-cream px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-[960px] overflow-hidden rounded-ow border border-[rgba(20,40,60,0.12)] bg-ow-cream">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[rgba(20,40,60,0.12)] px-6 py-10 sm:px-10">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ow-mid">
              Real clients · Real starting points
            </p>
            <h2 className="mt-2 font-sans text-3xl font-extrabold tracking-tight text-ow-charcoal">
              Who we&apos;ve <span className="text-ow-orange italic">helped</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="font-mono text-[0.72rem] text-ow-mid no-underline transition hover:text-ow-orange"
          >
            View all work →
          </Link>
        </div>

        <ul className="list-none">
          <li>
            <Link
              href="/work/budgetocity"
              className="group relative grid grid-cols-1 items-center gap-4 border-b border-[rgba(20,40,60,0.12)] px-6 py-7 text-ow-charcoal no-underline transition hover:bg-white sm:grid-cols-[1fr_auto] sm:px-10"
            >
              <div className="flex items-center gap-6">
                <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-[rgba(20,40,60,0.12)]">
                  <Image
                    src="/work/budgetocity/budgetocity-logo.png"
                    alt="Budgetocity"
                    width={44}
                    height={44}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[0.95rem] font-bold tracking-tight text-ow-charcoal">
                    Budgetocity
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    <span className="rounded-[2px] bg-[rgba(20,40,60,0.06)] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ow-mid">
                      Personal finance app
                    </span>
                    <span className="rounded-[2px] bg-[rgba(20,40,60,0.06)] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ow-mid">
                      SEO
                    </span>
                    <span className="rounded-[2px] bg-[rgba(20,40,60,0.06)] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ow-mid">
                      Content
                    </span>
                    <span className="rounded-[2px] bg-[rgba(20,40,60,0.06)] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ow-mid">
                      Social
                    </span>
                  </div>
                </div>
              </div>

              <div className="sm:pr-10">
                <div className="font-sans text-2xl font-extrabold italic tracking-tight text-ow-orange">
                  31 → 6
                </div>
                <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-ow-mid">
                  Avg. position · 3 months
                </div>
              </div>

              <span className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 translate-x-[-4px] font-mono text-[0.9rem] text-[rgba(20,40,60,0.14)] transition group-hover:translate-x-0 group-hover:text-ow-orange sm:inline sm:right-10">
                →
              </span>
            </Link>
          </li>

          <li>
            <div className="grid grid-cols-1 items-center gap-4 border-b border-[rgba(20,40,60,0.12)] px-6 py-7 opacity-45 sm:grid-cols-[1fr_auto] sm:px-10">
              <div className="flex items-center gap-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(20,40,60,0.08)] font-sans text-[0.72rem] font-extrabold uppercase tracking-[0.06em] text-ow-charcoal">
                  ?
                </div>
                <div>
                  <div className="text-[0.95rem] font-bold tracking-tight text-ow-charcoal">
                    Next client
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    <span className="rounded-[2px] bg-[rgba(20,40,60,0.06)] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ow-mid">
                      More to reveal soon
                    </span>
                  </div>
                </div>
              </div>

              <div className="sm:pr-10">
                <span className="inline-flex rounded-[2px] border border-[rgba(20,40,60,0.12)] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ow-mid">
                  Coming soon
                </span>
              </div>
            </div>
          </li>
        </ul>

        <div className="bg-white px-6 py-5 sm:px-10">
          <p className="font-mono text-[0.7rem] leading-relaxed text-ow-mid">
            Every result is backed by <strong className="font-medium text-ow-charcoal">real Search Console data</strong>{" "}
            — no estimates, no vanity metrics. The same standard as the lab.
          </p>
        </div>
      </div>
    </section>
  );
}

