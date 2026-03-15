import Link from "next/link";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight text-deep-gray sm:text-5xl lg:text-6xl xl:text-7xl">
            Outsmart Your Growth.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-deep-gray/90 sm:text-xl">
            Smart marketing isn&apos;t about doing more. It&apos;s about doing the right things. We help companies grow through strategy, experiments, and clearer thinking—not more ads.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#experiments"
              className="inline-flex items-center justify-center rounded-lg bg-fox-orange px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-fox-orange/90 hover:shadow-md"
            >
              Explore Our Experiments
            </Link>
            <Link
              href="#case-studies"
              className="inline-flex items-center justify-center rounded-lg border-2 border-strategy-navy px-6 py-3.5 text-base font-semibold text-strategy-navy transition-all hover:bg-strategy-navy hover:text-white"
            >
              See How We Help Companies Grow
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
