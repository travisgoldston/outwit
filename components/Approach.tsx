const steps = [
  {
    step: "01",
    title: "Intelligence",
    description:
      "We map how homeowners search in your market, identify the terms that produce booked jobs, and pinpoint where competitors are vulnerable.",
  },
  {
    step: "02",
    title: "Capture",
    description:
      "We build pages and content around high-intent demand—so you show up when people need HVAC, plumbing, or electrical help now.",
  },
  {
    step: "03",
    title: "Convert",
    description:
      "We tighten messaging, CTAs, and the path to call or book—turning rankings into real leads you can answer and schedule.",
  },
];

export default function Approach() {
  return (
    <section className="border-t border-white/5 bg-[#FAFAFA] px-6 py-20 text-slate-900 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          The Outwit Growth Engine.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-slate-600">
          A strategic SEO system designed for home service companies that want more inbound calls—not more marketing noise.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-neon-orange/60 hover:shadow-md"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
