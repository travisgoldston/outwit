export default function SearchCardMock() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-ow border border-[rgba(20,40,60,0.18)] bg-white shadow-ow-lg">
        <div className="flex items-center justify-between border-b border-[rgba(20,40,60,0.12)] bg-ow-cream px-[18px] py-3">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ow-mid">
            Google Search · McKinney TX
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(42,138,80,0.2)] bg-[rgba(42,138,80,0.08)] px-2.5 py-0.5 font-mono text-[0.62rem] tracking-[0.08em] text-[#3a8a50]">
            <span className="h-[5px] w-[5px] animate-pulse-kicker rounded-full bg-[#3a8a50]" />
            Live
          </span>
        </div>
        <div className="flex items-center gap-2.5 border-b border-[rgba(20,40,60,0.12)] bg-[#fafafa] px-[18px] py-[13px]">
          <span className="text-sm text-ow-mid" aria-hidden>
            🔍
          </span>
          <span className="flex-1 text-[0.88rem] font-medium text-ow-charcoal">plumber near me</span>
          <span className="font-mono text-[0.65rem] tracking-[0.06em] text-ow-orange">McKinney, TX</span>
        </div>
        <div className="relative h-[100px] overflow-hidden bg-gradient-to-br from-[#d8eddc] via-[#c6e2c8] to-[#bdd8bf]">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg,rgba(255,255,255,0.07) 0,rgba(255,255,255,0.07) 1px,transparent 1px,transparent 22px),
                repeating-linear-gradient(90deg,rgba(255,255,255,0.07) 0,rgba(255,255,255,0.07) 1px,transparent 1px,transparent 32px)`,
            }}
          />
          <div className="absolute left-[42%] top-[70%] z-[2] flex -translate-x-1/2 -translate-y-full flex-col items-center">
            <div
              className="h-6 w-6 rounded-[50%_50%_50%_0] bg-ow-charcoal shadow-md"
              style={{ transform: "rotate(-45deg)" }}
            />
            <div className="mt-0.5 rounded bg-white px-1.5 py-0.5 text-[0.58rem] font-bold text-ow-charcoal shadow-sm">
              Your Business
            </div>
          </div>
          <div className="absolute left-[66%] top-[50%] z-[1] flex -translate-x-1/2 -translate-y-full flex-col items-center">
            <div
              className="h-6 w-6 rounded-[50%_50%_50%_0] bg-ow-mid/60 shadow-md"
              style={{ transform: "rotate(-45deg)" }}
            />
            <div className="mt-0.5 rounded bg-white px-1.5 py-0.5 text-[0.58rem] font-normal text-ow-mid shadow-sm">
              Competitor
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex cursor-pointer items-center gap-3 border-b border-[rgba(20,40,60,0.12)] bg-[rgba(240,100,0,0.03)] px-[18px] py-3 transition-colors hover:bg-[#fdfaf7]">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ow-charcoal font-mono text-[0.62rem] font-semibold text-white">
              1
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-0.5 text-[0.85rem] font-semibold text-ow-orange">Your Business</div>
              <div className="flex items-center gap-1 text-[0.7rem] text-ow-mid">
                <span className="tracking-tighter text-[#f0a800]">★★★★★</span>
                <span>4.8 · Open now · McKinney</span>
              </div>
            </div>
            <div className="shrink-0 rounded bg-ow-orange px-3 py-1 text-[0.68rem] font-bold tracking-wide text-white">
              Call
            </div>
          </div>
          <div className="flex cursor-pointer items-center gap-3 border-b border-[rgba(20,40,60,0.12)] px-[18px] py-3 transition-colors hover:bg-[#fdfaf7]">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ow-sand font-mono text-[0.62rem] font-semibold text-ow-mid">
              2
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-0.5 text-[0.85rem] font-normal text-ow-mid">Other Plumber Co.</div>
              <div className="text-[0.7rem] text-ow-mid">
                <span className="tracking-tighter text-[#f0a800]">★★★</span> 3.1 · Open
              </div>
            </div>
          </div>
          <div className="flex cursor-pointer items-center gap-3 px-[18px] py-3 transition-colors hover:bg-[#fdfaf7]">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ow-sand font-mono text-[0.62rem] font-semibold text-ow-mid">
              3
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-0.5 text-[0.85rem] font-normal text-ow-mid">Another Company</div>
              <div className="text-[0.7rem] text-ow-mid">
                <span className="tracking-tighter text-[#f0a800]">★★★★</span> 4.0 · Closes 6pm
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[rgba(20,40,60,0.12)] bg-ow-cream px-[18px] py-[13px] text-[0.8rem] font-light italic leading-relaxed text-ow-slate">
          &ldquo;Found you on Google — booked same day. First result, easiest call I made.&rdquo;
          <cite className="mt-1 block font-mono text-[0.6rem] font-normal not-italic tracking-[0.08em] text-ow-mid">
            — McKinney, TX · Google Review
          </cite>
        </div>
      </div>
      <div className="hero-badge-b1 absolute -bottom-3.5 -left-5 z-[3] hidden rounded-ow-sm border border-[rgba(20,40,60,0.18)] bg-white p-2.5 shadow-ow md:block">
        <div className="font-sans text-2xl font-extrabold leading-none tracking-tight text-ow-charcoal">
          3<span className="text-base text-ow-orange">×</span>
        </div>
        <div className="mt-0.5 whitespace-nowrap text-[0.65rem] font-normal text-ow-mid">
          Avg. call volume
        </div>
      </div>
      <div className="hero-badge-b2 absolute -right-[18px] top-4 z-[3] hidden rounded-ow-sm border border-[rgba(20,40,60,0.18)] bg-white p-2.5 shadow-ow md:block">
        <div className="font-sans text-2xl font-extrabold leading-none tracking-tight text-ow-charcoal">
          #<span className="text-base text-ow-orange">1</span>
        </div>
        <div className="mt-0.5 whitespace-nowrap text-[0.65rem] font-normal text-ow-mid">
          Map position
        </div>
      </div>
    </div>
  );
}
