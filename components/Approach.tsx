const steps = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "We dig into your business, market, and positioning to understand what&apos;s blocking growth and where the real leverage is.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "We design and develop high-performance websites, clear StoryBrand-inspired messaging, and the right SEO foundations.",
  },
  {
    step: "03",
    title: "Grow",
    description:
      "We drive qualified traffic through SEO and optimize every step of the journey so more visitors become customers.",
  },
];

export default function Approach() {
  return (
    <section className="border-t border-white/10 bg-vibe-bg px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          The Outwit Method.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/80">
          A simple, strategy-first framework for turning your website and marketing into a growth system.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-neon-orange/60 hover:bg-white/[0.08]"
            >
              <span className="text-sm font-mono uppercase tracking-[0.2em] text-neon-orange">
                {card.step}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-4 leading-relaxed text-white/75">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
