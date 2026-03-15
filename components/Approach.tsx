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
    <section className="bg-cream px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-deep-gray sm:text-4xl">
          Our approach is simple.
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-strategy-navy/10 bg-white p-8 shadow-sm transition-all duration-300 hover:border-fox-orange/20 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-strategy-navy">
                {card.title}
              </h3>
              <p className="mt-4 leading-relaxed text-deep-gray/85">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
