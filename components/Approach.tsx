import Reveal from "./Reveal";

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
    <section className="border-t border-white/5 bg-[#FAFAFA] px-6 py-20 text-slate-900 lg:px-8 lg:py-28">
      <Reveal className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          The Outwit Method.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-slate-600">
          A simple, strategy-first framework for turning your website and marketing into a growth system.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((card, idx) => (
            <Reveal key={card.title} delayMs={80 * idx}>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 border-l-4 border-l-neon-orange/70 bg-white p-8 shadow-sm transition-all duration-300 hover:border-neon-orange/60">
                <span className="text-sm font-mono uppercase tracking-[0.2em] text-neon-orange">
                  {card.step}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
