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
      className="border-t border-white/10 bg-vibe-bg px-6 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Solutions built to outsmart, not outspend.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/80">
          Outwit combines strategy, design, and SEO to solve the business problems that actually matter.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-sm transition-all duration-300 hover:border-neon-orange/60 hover:bg-white/[0.08]"
            >
              <h3 className="text-xl font-bold text-white">
                {solution.title}
              </h3>
              <p className="mt-4 leading-relaxed text-white/75">
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
