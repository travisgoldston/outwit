const bullets = [
  {
    title: "Outdated websites",
    description: "Slow, cluttered sites make it hard for customers to trust you or take the next step.",
  },
  {
    title: "Unclear messaging",
    description: "If visitors can't tell what you do or why it matters in 5 seconds, they leave.",
  },
  {
    title: "Poor SEO",
    description: "You're invisible on Google while competitors capture the demand you should own.",
  },
  {
    title: "Low conversions",
    description: "Traffic without strategy turns into wasted ad spend and missed revenue.",
  },
];

export default function Problem() {
  return (
    <section className="border-t border-white/5 bg-[#FAFAFA] px-6 py-20 text-slate-900 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Why most businesses struggle online.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-[1.75] text-slate-600">
          Great products get buried by confusing websites, vague messaging, and traffic that never turns into customers.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bullets.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all hover:border-slate-300"
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
          Winning companies don&apos;t outspend competitors. They outsmart them.
        </p>
      </div>
    </section>
  );
}
