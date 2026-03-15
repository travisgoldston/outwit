const cards = [
  {
    title: "Strategy",
    description: "We identify the few things that actually drive growth.",
  },
  {
    title: "Experiments",
    description: "We test ideas quickly so we know what works.",
  },
  {
    title: "Growth Systems",
    description: "We turn winning strategies into repeatable systems.",
  },
];

export default function Approach() {
  return (
    <section className="border-t border-white/10 bg-vibe-bg px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Our approach is simple.
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-bold text-white">
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
