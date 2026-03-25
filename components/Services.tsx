import Link from "next/link";

const entryPoints = [
  {
    title: "HVAC SEO in McKinney",
    description: "Outrank competitors and turn high-intent searches into calls.",
    href: "/hvac-seo/mckinney",
  },
  {
    title: "Plumbing SEO in Frisco",
    description: "Capture urgent demand and make it easy for homeowners to call.",
    href: "/plumbing-seo/frisco",
  },
  {
    title: "Electrical SEO in Plano",
    description: "Win local searches for high-value jobs and convert them into appointments.",
    href: "/electrical-seo/plano",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/5 bg-[#FAFAFA] px-6 py-20 text-slate-900 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Start where your market is already searching.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-slate-600">
          These pages show how Outwit builds search advantage for HVAC, plumbing, and electrical
          companies in North Dallas.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {entryPoints.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:border-neon-orange/60 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                {item.description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-neon-orange group-hover:text-neon-orange/80">
                View page
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
