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
    <section id="case-studies" className="border-t border-white/10 bg-vibe-bg px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Proof beats promises.
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neon-orange">
                {c.label}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white">
                {c.title}
              </h3>
              <p className="mt-4 text-white/70">
                Full story coming soon.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
