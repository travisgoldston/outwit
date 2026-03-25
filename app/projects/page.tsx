import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outwit — Projects",
  description:
    "Brands and businesses Travis Goldston is building—Boldspark, Found in North Texas, Bluebonnet Growth, and more.",
};

type Project = {
  name: string;
  description: string;
  href: string;
};

const projects: Project[] = [
  {
    name: "Boldspark",
    description: "Local SEO and digital marketing for small businesses in North Texas.",
    href: "https://boldspark.co",
  },
  {
    name: "Found in North Texas™",
    description:
      "A hyperlocal content discovery hub for restaurants, hidden gems, and local businesses.",
    href: "https://foundinnorthtexas.com",
  },
  {
    name: "Bluebonnet Growth",
    description: "Hyperlocal SEO content brand.",
    href: "https://bluebonnetgrowth.com",
  },
  {
    name: "travisgoldston.com",
    description: "Personal site and portfolio.",
    href: "https://travisgoldston.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">Projects</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          What I&apos;m building
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          A portfolio of ventures—not a services menu. Each one has its own site; this is the map.
        </p>
      </div>

      <ul className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.href}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-neon-orange/50 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-slate-900 group-hover:text-neon-orange">
                {p.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-neon-orange">
                Visit site
                <span className="ml-1" aria-hidden>
                  ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
