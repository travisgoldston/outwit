const cases = [
  {
    title: "Growing organic traffic for a SaaS company",
    label: "Case Study",
  },
  {
    title: "Improving conversions for a service business",
    label: "Case Study",
  },
  {
    title: "Scaling lead generation through SEO",
    label: "Case Study",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-strategy-navy/10 bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-deep-gray sm:text-4xl">
          Proof beats promises.
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group rounded-2xl border border-strategy-navy/10 bg-cream/40 p-8 shadow-sm transition-all duration-300 hover:border-fox-orange/20 hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-fox-orange">
                {c.label}
              </span>
              <h3 className="mt-3 text-xl font-bold text-strategy-navy">
                {c.title}
              </h3>
              <p className="mt-4 text-deep-gray/80">
                Full story coming soon.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
