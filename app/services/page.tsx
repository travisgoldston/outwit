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
    summary: "Modern, conversion-focused websites that pull their weight in sales.",
    description:
      "We plan and build sites that feel premium, load quickly, and walk visitors through a clear story instead of leaving them to piece things together.",
    benefits: [
      "Messaging rooted in StoryBrand principles so people immediately see what you do, who you help, and why it matters.",
      "Fast, reliable builds on modern stacks so your site feels sharp on both desktop and mobile.",
      "Page structures that steadily move visitors from first glance to a confident next step.",
    ],
    links: [
      { href: "/case-studies", label: "See websites we’ve transformed" },
      { href: "/insights", label: "Read about high-converting websites" },
    ],
  },
  {
    id: "seo",
    name: "SEO Strategy",
    summary: "Search strategies that help the right people discover you first.",
    description:
      "We approach SEO as a revenue channel, not a collection of tasks—combining solid technical foundations, focused content, and clear on-page messaging.",
    benefits: [
      "Technical reviews that surface and fix crawl, index, and performance issues that quietly cap your potential.",
      "Search-driven content plans that lean into real purchase intent rather than chasing vanity keywords.",
      "Simple reporting that connects rankings and visits to real outcomes like inquiries, pipeline, and revenue.",
    ],
    links: [
      { href: "/services#generate-more-leads", label: "See how we use SEO to drive leads" },
      { href: "/lab", label: "See SEO experiments from the Lab" },
    ],
  },
  {
    id: "systems",
    name: "Marketing Systems",
    summary: "Landing pages, funnels, and analytics working together as a single growth engine.",
    description:
      "We map and build the paths that move strangers to customers—and wire up the tools so every step is tracked and followed through.",
    benefits: [
      "Landing pages and offers matched to each stage of the buying journey rather than a single generic page.",
      "CRM, forms, and automation connected so every lead is captured, routed, and nurtured instead of slipping away.",
      "Deliberate testing plans that nudge conversion rates up over time instead of guessing what might work.",
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
      "You’re putting real effort into marketing, but the people who reach you aren’t quite the right fit—or never raise their hand at all.",
    explanation:
      "We pair search strategy with conversion-focused pages so your ideal customers can discover you, quickly understand the value, and feel comfortable starting a conversation.",
    bullets: [
      "Site architecture that reflects how people actually search for and evaluate what you offer.",
      "SEO plans that lean into high-intent queries instead of chasing broad, low-value phrases.",
      "Helpful content and offers that turn casual visitors into real conversations.",
    ],
    services: ["websites", "seo"] as const,
  },
  {
    id: "website-as-sales-machine",
    eyebrow: "Outcome 02",
    title: "Turn your website into a sales machine.",
    problem:
      "Your site looks polished, but it doesn’t sound like the way you sell—or guide visitors toward a confident yes.",
    explanation:
      "We use clear, StoryBrand-inspired messaging, modern design, and thoughtful UX so your website behaves more like a skilled salesperson than a static brochure.",
    bullets: [
      "Positioning and copy that explain your offer in straightforward language your buyers already use.",
      "Layouts that reduce friction, answer key objections, and shine a light on the next best step.",
      "CTAs, forms, and booking flows that mirror the way you actually run sales today.",
    ],
    services: ["websites", "systems"] as const,
  },
  {
    id: "dominate-local-search",
    eyebrow: "Outcome 03",
    title: "Dominate local search.",
    problem:
      "Competitors keep appearing above you on Google when nearby customers search for services you offer.",
    explanation:
      "We connect local SEO, Google Business optimization, and focused local pages so you show up where it matters most in your market.",
    bullets: [
      "Google Business profiles tuned to appear for the most valuable, location-driven searches.",
      "Location and service pages that address real questions and build confidence to contact you.",
      "Reviews, schema, and supporting content that send strong, consistent trust signals to Google.",
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

