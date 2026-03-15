const cases = [
  {
    title: "Case Study 1",
    description: "Growing organic traffic for a SaaS company",
  },
  {
    title: "Case Study 2",
    description: "Improving conversions for a service business",
  },
  {
    title: "Case Study 3",
    description: "Scaling lead generation through SEO",
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
              className="rounded-2xl border border-strategy-navy/10 bg-cream/50 p-8 transition-all duration-300 hover:border-fox-orange/30 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-strategy-navy">
                {c.title}
              </h3>
              <p className="mt-4 leading-relaxed text-deep-gray/85">
                {c.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
