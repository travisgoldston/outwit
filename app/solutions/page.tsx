import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outwit — Marketing & Website Solutions",
  description:
    "Strategy-first solutions that help you generate more leads, turn your website into a sales machine, and dominate local search.",
};

const sections = [
  {
    id: "generate-more-leads",
    eyebrow: "Solution 01",
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
    links: [
      { href: "/services", label: "Website Design" },
      { href: "/services#seo", label: "SEO Strategy" },
      { href: "/insights", label: "Insights on lead generation" },
    ],
  },
  {
    id: "website-as-sales-machine",
    eyebrow: "Solution 02",
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
    links: [
      { href: "/services", label: "Website Design" },
      { href: "/case-studies", label: "See conversion lifts in case studies" },
      { href: "/insights", label: "What makes a high-converting website" },
    ],
  },
  {
    id: "dominate-local-search",
    eyebrow: "Solution 03",
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
    links: [
      { href: "/services#seo", label: "Local & technical SEO" },
      { href: "/case-studies", label: "Local search case studies" },
      { href: "/insights", label: "Local SEO guides" },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Strategy-first solutions for modern growth.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Outwit turns your website, SEO, and marketing into a system that
          consistently brings in the right customers—without drowning you in
          complexity or jargon.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl space-y-16">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
          >
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
              {section.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {section.title}
            </h2>
            <p className="mt-4 text-sm font-medium text-slate-600">
              {section.problem}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {section.explanation}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
              {section.bullets.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {section.links.map((link) => (
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
          Not sure which solution fits?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Tell us about your business and we&apos;ll map the smartest way to
          turn your website and marketing into a growth system.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
          >
            Start a project
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

