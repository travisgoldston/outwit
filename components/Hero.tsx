import Link from "next/link";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-vibe-bg px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28"
    >
      {/* Mesh gradient: subtle radial glow behind hero fox */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-end pr-0 lg:pr-[10%]"
        aria-hidden
      >
        <div
          className="h-[80vh] w-[80vw] max-w-[900px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #FF5F1F 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Outwit the ordinary<span className="text-neon-orange">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            A creative playground for vibe coding, digital experiments, and sharp design. No KPIs, just craft.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#experiments"
              className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90 hover:shadow-neon-orange/30"
            >
              Explore Experiments
            </Link>
            <Link
              href="#case-studies"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
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
