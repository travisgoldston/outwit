export default function WhatOutwitIs() {
  return (
    <section className="border-b border-t border-[rgba(20,40,60,0.12)] bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="ow-label">What OUTWIT is</p>
          <h2 className="max-w-[680px] font-sans text-[clamp(2rem,3.8vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ow-charcoal">
            The lab is the
            <br />
            <span className="text-ow-orange">proof of concept.</span>
          </h2>
          <div className="mt-6 space-y-3.5 text-base font-normal leading-[1.82] text-ow-mid">
            <p>
              Most SEO content tells you what someone thinks works. I show you what{" "}
              <strong className="font-semibold text-ow-slate">actually works</strong> — with
              hypotheses, methodology, and Search Console screenshots posted as the data comes in.
            </p>
            <p>
              The experiments aren&apos;t just articles. They&apos;re how I stay honest about what
              moves the needle on real sites before I generalize it in{" "}
              <strong className="font-semibold text-ow-slate">insights</strong>.
            </p>
            <blockquote className="mt-7 border-l-[3px] border-ow-orange pl-5 text-[1.1rem] font-bold leading-snug tracking-tight text-ow-charcoal">
              &ldquo;No theory. No fluff. Just tested,
              <br />
              shown-in-public proof.&rdquo;
            </blockquote>
          </div>
        </div>

        <div className="flex flex-col gap-px overflow-hidden rounded-ow border border-[rgba(20,40,60,0.18)] bg-[rgba(20,40,60,0.12)]">
          <div className="flex gap-4 bg-white p-6 transition-colors hover:bg-ow-cream sm:gap-4 sm:px-7 sm:py-[26px]">
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-ow-sm border border-[rgba(240,100,0,0.22)] bg-[rgba(240,100,0,0.1)] text-lg">
              🔬
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold tracking-tight text-ow-charcoal">The Lab</h3>
              <p className="text-[0.84rem] leading-relaxed text-ow-mid">
                Live experiments on real domains. Hypotheses, methodology, and results posted
                publicly as data comes in.
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-white p-6 transition-colors hover:bg-ow-cream sm:gap-4 sm:px-7 sm:py-[26px]">
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-ow-sm border border-[rgba(240,100,0,0.22)] bg-[rgba(240,100,0,0.1)] text-lg">
              📖
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold tracking-tight text-ow-charcoal">Insights</h3>
              <p className="text-[0.84rem] leading-relaxed text-ow-mid">
                What the experiments teach—written for people who need to make real decisions, not
                marketing fluff.
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-white p-6 transition-colors hover:bg-ow-cream sm:gap-4 sm:px-7 sm:py-[26px]">
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-ow-sm border border-[rgba(240,100,0,0.22)] bg-[rgba(240,100,0,0.1)] text-lg">
              🦊
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold tracking-tight text-ow-charcoal">Portfolio</h3>
              <p className="text-[0.84rem] leading-relaxed text-ow-mid">
                Brands and sites I&apos;m building in public—more to reveal soon. The lab is where
                the proof shows up first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
