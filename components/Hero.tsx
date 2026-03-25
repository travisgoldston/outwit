import Link from "next/link";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-vibe-bg px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28"
    >
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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="/lab"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90 hover:shadow-[0_0_20px_rgba(255,95,31,0.4)]"
            >
              Explore experiments
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-lg border border-white bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:border-neon-orange"
            >
              See the work
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
