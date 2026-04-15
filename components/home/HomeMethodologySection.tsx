import Link from "next/link";

export default function HomeMethodologySection() {
  return (
    <section className="border-t border-[rgba(20,40,60,0.12)] bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1100px] items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="ow-label">How it works</p>
          <h2 className="max-w-[680px] font-sans text-[clamp(2rem,3.8vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ow-charcoal">
            Test it. Prove it.
            <br />
            <span className="text-ow-orange">Then do it for you.</span>
          </h2>
          <div className="mt-6 space-y-3.5 text-base font-normal leading-[1.82] text-ow-mid">
            <p>
              Every engagement follows the same loop that powers the Lab, pointed at your business.
              You see what we do, why we did it, and what the data says.
            </p>
            <p>
              If you want the receipts, that is the point. We track progress in Search Console and
              make decisions based on what moves.
            </p>
            <blockquote className="mt-7 border-l-[3px] border-ow-orange pl-5 text-[1.1rem] font-bold leading-snug tracking-tight text-ow-charcoal">
              &ldquo;Same method. Your site.
              <br />
              Your Search Console. Your results.&rdquo;
            </blockquote>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/lab" className="font-semibold text-ow-orange hover:underline">
              See the method in public →
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-px overflow-hidden rounded-ow border border-[rgba(20,40,60,0.18)] bg-[rgba(20,40,60,0.12)]">
          <div className="flex gap-4 bg-white p-6 transition-colors hover:bg-ow-cream sm:px-7 sm:py-[26px]">
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-ow-sm border border-[rgba(240,100,0,0.22)] bg-[rgba(240,100,0,0.1)] font-mono text-[0.72rem] font-bold tracking-[0.08em] text-ow-orange">
              01
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold tracking-tight text-ow-charcoal">
                Audit and hypothesize
              </h3>
              <p className="text-[0.84rem] leading-relaxed text-ow-mid">
                We dig into your site, competitors, and Search Console data. Then we pick the first
                bet worth testing.
              </p>
            </div>
          </div>

          <div className="flex gap-4 bg-white p-6 transition-colors hover:bg-ow-cream sm:px-7 sm:py-[26px]">
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-ow-sm border border-[rgba(20,40,60,0.18)] bg-[rgba(20,40,60,0.06)] font-mono text-[0.72rem] font-bold tracking-[0.08em] text-ow-charcoal">
              02
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold tracking-tight text-ow-charcoal">
                Execute and measure
              </h3>
              <p className="text-[0.84rem] leading-relaxed text-ow-mid">
                We ship real changes, then track every move. No guessing. No vague reporting.
              </p>
            </div>
          </div>

          <div className="flex gap-4 bg-white p-6 transition-colors hover:bg-ow-cream sm:px-7 sm:py-[26px]">
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-ow-sm border border-[rgba(42,107,74,0.22)] bg-[rgba(42,107,74,0.08)] font-mono text-[0.72rem] font-bold tracking-[0.08em] text-[#2a6b4a]">
              03
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold tracking-tight text-ow-charcoal">
                Report and compound
              </h3>
              <p className="text-[0.84rem] leading-relaxed text-ow-mid">
                We show what moved, what did not, and why. Then we use what we learned to pick the
                next highest leverage step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

