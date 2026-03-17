import Link from "next/link";

const solutions = [
  {
    title: "Generate more qualified leads",
    description: "Smart websites and SEO that consistently bring the right customers to you.",
    href: "/solutions#generate-more-leads",
  },
  {
    title: "Turn your website into a sales machine",
    description: "Conversion-focused design and StoryBrand-inspired messaging that moves visitors to act.",
    href: "/solutions#website-as-sales-machine",
  },
  {
    title: "Dominate local search",
    description: "Local SEO, Google Business optimization, and location pages that win your market.",
    href: "/solutions#dominate-local-search",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/5 bg-[#F7F7F7] px-6 py-20 text-slate-900 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Solutions built to outsmart, not outspend.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-slate-600">
          Outwit combines strategy, design, and SEO to solve the business problems that actually matter.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:border-neon-orange/60 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {solution.title}
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                {solution.description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-neon-orange group-hover:text-neon-orange/80">
                Explore solution
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
