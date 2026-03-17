import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Website, SEO & Marketing Services",
  description:
    "Strategy-first services that generate more leads, turn your website into a sales asset, and help you dominate local search.",
};

type Service = {
  id: "websites" | "seo" | "systems";
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
      { href: "/services#generate-more-leads", label: "See how we use SEO to drive leads" },
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
      { href: "/services#website-as-sales-machine", label: "See how we build sales-ready systems" },
      { href: "/insights", label: "Explore funnels and conversion articles" },
    ],
  },
];

const outcomes = [
  {
    id: "generate-more-leads",
    eyebrow: "Outcome 01",
    title: "Generate more qualified leads.",
    problem:
      "You&apos;re investing in marketing, but the right people still aren&apos;t finding you—or taking the next step when they do.",
    explanation:
      "We combine high-performing websites with SEO strategy so your ideal customers can actually find you, understand what you do, and feel confident reaching out.",
    bullets: [
      "Search-focused website structure that matches how people actually look for what you do.",
      "SEO strategy that targets real buying intent, not just vanity keywords.",
      "Educational content and lead magnets that turn visitors into conversations.",
    ],
    services: ["websites", "seo"] as const,
  },
  {
    id: "website-as-sales-machine",
    eyebrow: "Outcome 02",
    title: "Turn your website into a sales machine.",
    problem:
      "Your site looks fine—but it reads like a brochure instead of a clear, confident sales conversation.",
    explanation:
      "We use StoryBrand-inspired messaging, modern design, and UX best practices to build websites that guide visitors from curiosity to clarity to action.",
    bullets: [
      "Positioning and messaging that explains what you do in plain language.",
      "Conversion-focused layouts that remove friction and highlight the right next step.",
      "Integrated CTAs, lead forms, and booking flows that fit your sales process.",
    ],
    services: ["websites", "systems"] as const,
  },
  {
    id: "dominate-local-search",
    eyebrow: "Outcome 03",
    title: "Dominate local search.",
    problem:
      "Competitors keep showing up ahead of you on Google—even when customers are clearly searching for what you do in your area.",
    explanation:
      "We pair local SEO, Google Business optimization, and focused landing pages so you own the searches that matter in your market.",
    bullets: [
      "Google Business profile tuned to show up for high-intent local searches.",
      "Location and service pages that answer real questions and build trust.",
      "Reviews, schema, and content that send all the right signals to Google.",
    ],
    services: ["seo", "systems"] as const,
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
          Outwit blends strategy, design, and SEO into a focused set of services that generate more
          qualified leads, turn your website into a sales asset, and help you own the searches that
          matter.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl space-y-16">
        {outcomes.map((outcome) => {
          const outcomeServices = outcome.services
            .map((id) => services.find((s) => s.id === id))
            .filter(Boolean) as Service[];

          return (
            <section
              key={outcome.id}
              id={outcome.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
            >
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
                {outcome.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {outcome.title}
              </h2>
              <p className="mt-4 text-sm font-medium text-slate-600">{outcome.problem}</p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {outcome.explanation}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
                {outcome.bullets.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-8 border-t border-slate-200 pt-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
                  How we do it
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {outcomeServices.map((service) => (
                    <div
                      key={service.id}
                      className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6 text-sm leading-relaxed text-slate-700"
                    >
                      <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
                        {service.name}
                      </p>
                      <p className="mt-3 font-semibold text-slate-900">{service.summary}</p>
                      <p className="mt-3 text-slate-700">{service.description}</p>
                      <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-700">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex gap-2">
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neon-orange" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.links.map((link) => (
                          <Link
                            key={link.href + link.label}
                            href={link.href}
                            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-3 py-1.5 text-[11px] font-semibold text-slate-800 transition-colors hover:border-neon-orange/70 hover:text-neon-orange"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Ready to turn strategy into revenue?
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
            href="/case-studies"
            className="text-sm font-semibold text-slate-800 transition-colors hover:text-neon-orange"
          >
            View case studies
          </Link>
        </div>
      </div>
    </div>
  );
}

