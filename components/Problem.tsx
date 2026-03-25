const bullets = [
  {
    title: "They sell activity",
    description:
      "Monthly “deliverables” look busy in a report, but they don’t reliably create more calls, booked jobs, or revenue.",
  },
  {
    title: "They chase the wrong searches",
    description:
      "Generic keywords bring window-shoppers. High-intent searches bring homeowners who need help now.",
  },
  {
    title: "They ignore conversion",
    description:
      "Even when rankings move, weak pages leak leads. If the site can’t convert, the phone stays quiet.",
  },
  {
    title: "They report vanity metrics",
    description:
      "Impressions and traffic are easy to inflate. Outwit focuses on what you feel: calls, forms, and booked jobs.",
  },
];

export default function Problem() {
  return (
    <section className="border-t border-white/5 bg-[#FAFAFA] px-6 py-20 text-slate-900 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Why most agencies fail home service owners.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-[1.75] text-slate-600">
          You don’t need more marketing “work.” You need an advantage that produces inbound calls from people ready to hire.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bullets.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all hover:border-neon-orange/60"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-14 text-center text-xl font-semibold text-slate-900">
          Outwit builds unfair advantages. No fluff. No busywork.
        </p>
      </div>
    </section>
  );
}
