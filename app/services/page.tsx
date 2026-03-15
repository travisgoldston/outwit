import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Website, SEO & Marketing Services",
  description:
    "Conversion-focused websites, SEO strategy, and marketing systems that help you outsmart the competition and turn traffic into revenue.",
};

type Service = {
  id: string;
  name: string;
  summary: string;
  description: string;
  benefits: string[];
  links: { href: string; label: string }[];
};

const services: Service[] = [
  {
    id: "websites",
    name: "Website Design",
    summary: "Modern, conversion-focused websites built to sell, not just look good.",
    description:
      "We design and build websites that feel premium, load fast, and read like a clear sales narrative instead of a generic brochure.",
    benefits: [
      "StoryBrand-inspired messaging that explains what you do, who it’s for, and why it matters in seconds.",
      "High-performance builds on modern stacks so pages feel snappy on desktop and mobile.",
      "Layouts that guide visitors from curiosity to clarity to a clear next step.",
    ],
    links: [
      { href: "/case-studies", label: "See websites we’ve transformed" },
      { href: "/insights", label: "Read about high-converting websites" },
    ],
  },
  {
    id: "seo",
    name: "SEO Strategy",
    summary: "Search strategies that make the right customers find you first.",
    description:
      "We treat SEO as a growth channel, not a checklist—combining technical health, content strategy, and on-page clarity.",
    benefits: [
      "Technical audits that fix crawling, indexing, and performance issues holding rankings back.",
      "Search-focused content strategy that targets real buying intent and builds topical authority.",
      "Clear reporting that ties rankings and traffic back to leads, pipeline, and revenue.",
    ],
    links: [
      { href: "/solutions#generate-more-leads", label: "See the lead-generation solution" },
      { href: "/lab", label: "See SEO experiments from the Lab" },
    ],
  },
  {
    id: "systems",
    name: "Marketing Systems",
    summary: "Landing pages, funnels, and analytics working together as one growth engine.",
    description:
      "We design the paths that turn strangers into leads and customers—then wire the tooling so nothing falls through the cracks.",
    benefits: [
      "Landing pages and lead magnets mapped to each stage of the buying journey.",
      "CRM, forms, and automation wired so every lead is captured, routed, and followed up.",
      "Testing plans that steadily improve conversion rates instead of guessing.",
    ],
    links: [
      { href: "/solutions#website-as-sales-machine", label: "See the sales-machine solution" },
      { href: "/insights", label: "Explore funnels and conversion articles" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Services for strategy-driven teams.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Outwit blends strategy, design, and SEO into a focused set of services that turn your
          website and marketing into a system that consistently drives revenue.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl space-y-14">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
          >
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
              {service.name}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {service.summary}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {service.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {service.links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-neon-orange/70 hover:text-neon-orange"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Not sure where to start?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Share a bit about your business and we&apos;ll recommend the mix of services that gives
          you the most leverage—without unnecessary extras.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
          >
            Start your project
          </Link>
          <Link
            href="/solutions"
            className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
          >
            Explore solutions
          </Link>
        </div>
      </div>
    </div>
  );
}

