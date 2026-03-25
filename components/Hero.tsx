import Link from "next/link";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-vibe-bg px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Outsmart your competition<span className="text-neon-orange">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Outwit is a growth intelligence system for HVAC, plumbing, and electrical companies in North Dallas—built to win high-intent search and turn it into booked jobs.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/growth-plan"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90 hover:shadow-[0_0_20px_rgba(255,95,31,0.4)]"
            >
              Get the Growth Plan
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:border-neon-orange"
            >
              Talk to Outwit
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
