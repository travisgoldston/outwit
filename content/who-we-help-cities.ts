import type { WhoHelpCitySlug } from "./who-we-help";

export type CityLanding = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  marketTitle: string;
  marketBody: string;
  systemTitle: string;
  systemBody: string;
  authorityTitle: string;
  authorityBody: string;
  /** One line on why Outwit’s digital marketing approach fits this market */
  positioningLine: string;
};

/**
 * City-first landings: growth intelligence + digital marketing for trades,
 * interlinked with trade hubs and legacy SEO URLs.
 */
export const cityLandings: Record<WhoHelpCitySlug, CityLanding> = {
  "frisco-tx": {
    title: "Digital Marketing for Trades in Frisco, TX | Outwit",
    description:
      "Outwit helps Frisco HVAC, plumbing, and electrical contractors turn local search into booked jobs—SEO, conversion, and a measurable growth system built for North Dallas.",
    h1: "Growth intelligence for Frisco contractors who are done guessing.",
    intro:
      "Frisco moves fast: new homes, busy families, and constant competition for high-intent searches. Outwit is a digital marketing partner built for trades—we map demand in your city, publish pages that earn trust, and tighten the path from Google to a booked job.",
    marketTitle: "What growth looks like in Frisco",
    marketBody:
      "Homeowners don’t compare ten HVAC companies—they pick the few that look credible in the moment: search results, reviews, and a site that answers the question on their phone. Winning in Frisco means aligning SEO, your Google Business presence, and on-site conversion—not chasing vanity rankings.",
    systemTitle: "How Outwit builds authority and pipeline",
    systemBody:
      "We treat digital marketing as a system: intelligence on what actually drives calls in Frisco, capture through service and city pages with substance, and conversion so traffic becomes revenue. That is how Outwit positions contractors as the obvious choice—not the loudest ad spender.",
    authorityTitle: "Why teams trust Outwit with Frisco",
    authorityBody:
      "You get clear priorities, transparent economics, and execution tied to booked jobs—not a generic agency retainer. Explore our services and pricing, or start with the Growth Plan for a concrete roadmap.",
    positioningLine:
      "Outwit combines local SEO, content strategy, and CRO so your Frisco digital presence works as hard as your crew.",
  },
  "mckinney-tx": {
    title: "Digital Marketing for Trades in McKinney, TX | Outwit",
    description:
      "Outwit helps McKinney HVAC, plumbing, and electrical companies grow with intent-led SEO, conversion-focused pages, and a North Texas growth system you can measure.",
    h1: "Digital marketing that matches how McKinney homeowners hire.",
    intro:
      "McKinney blends established neighborhoods and steady demand for repairs, replacements, and upgrades. Outwit helps you own the searches that matter—emergency and planned work—then makes your website earn the call with proof, clarity, and frictionless next steps.",
    marketTitle: "The McKinney opportunity (and the trap)",
    marketBody:
      "Many contractors buy ads or publish thin city pages and still lose to competitors with better intent alignment. Sustainable growth comes from understanding which queries produce profitable jobs in McKinney, then building digital assets that deserve to rank and convert.",
    systemTitle: "Outwit’s system: intelligence, capture, conversion",
    systemBody:
      "We connect SEO to revenue: keyword and competitor intelligence, authoritative pages for services and neighborhoods, and continuous improvement on mobile UX and CTAs. That is full-funnel digital marketing for trades—not a disconnected checklist.",
    authorityTitle: "Go deeper on McKinney HVAC",
    authorityBody:
      "Read our McKinney HVAC SEO insight for a real-world breakdown, then pair it with the Growth Plan or a conversation about your territories.",
    positioningLine:
      "Outwit is built for owner-operators who want marketing leadership without the fluff—especially in competitive Collin County markets like McKinney.",
  },
  "allen-tx": {
    title: "Digital Marketing for Trades in Allen, TX | Outwit",
    description:
      "Outwit helps Allen HVAC, plumbing, and electrical contractors rank for intent-rich searches and convert visitors into calls—with a disciplined digital marketing system.",
    h1: "Stand out in Allen with intent-led digital marketing.",
    intro:
      "Allen sits in one of the most competitive corridors in North Texas. Outwit helps you cut through noise with clear positioning: which searches to win, which pages to build, and how your site should perform when a homeowner compares you to three others in ten seconds.",
    marketTitle: "Why Allen rewards specificity",
    marketBody:
      "Proximity to Frisco and Plano means overlapping search results. Generic “we serve Allen” copy does not differentiate. You need digital marketing that ties each service line to real buyer questions—and a site that proves you can deliver.",
    systemTitle: "What Outwit executes for Allen contractors",
    systemBody:
      "We combine local SEO, on-brand service storytelling, and conversion design so your digital footprint matches the quality of your work. Intelligence first, then capture and conversion—so every page has a job in the funnel.",
    authorityTitle: "Build a coherent Allen + regional strategy",
    authorityBody:
      "Layer Allen into a North Texas plan: see our North Dallas geo strategy, services overview, and pricing when you are ready to scale with clarity.",
    positioningLine:
      "Outwit positions your business as the credible choice through substance, not tricks—exactly what sustainable digital marketing for trades requires in Allen.",
  },
  "plano-tx": {
    title: "Digital Marketing for Trades in Plano, TX | Outwit",
    description:
      "Outwit helps Plano HVAC, plumbing, and electrical businesses grow through high-intent SEO, conversion paths, and growth intelligence you can act on.",
    h1: "Plano digital marketing built for booked jobs, not vanity metrics.",
    intro:
      "Plano’s density means homeowners have options—and they decide fast on mobile. Outwit helps you win the searches that drive revenue, then removes friction so more clicks become calls, forms, and scheduled work.",
    marketTitle: "Competing in Plano’s crowded SERPs",
    marketBody:
      "Paid and organic channels are both noisy. The contractors who compound results invest in digital marketing that connects rankings to revenue: the right pages, the right proof, and measurement that shows what actually fills the schedule.",
    systemTitle: "Outwit’s approach for Plano",
    systemBody:
      "We build a growth engine: map demand and competitors, publish pages that earn visibility with depth, and optimize conversion so Plano traffic turns into booked jobs. That is how we position Outwit as a partner for serious operators—not a vendor selling deliverables.",
    authorityTitle: "Next steps",
    authorityBody:
      "Review services and pricing, start with the Growth Plan, or talk to us about Plano plus your surrounding cities.",
    positioningLine:
      "Outwit brings disciplined digital marketing—SEO, CRO, and local strategy—so Plano contractors compete on merit and momentum.",
  },
  "richardson-tx": {
    title: "Digital Marketing for Trades in Richardson, TX | Outwit",
    description:
      "Outwit helps Richardson HVAC, plumbing, and electrical contractors capture high-intent local demand with SEO, trust-building pages, and a conversion-focused web experience.",
    h1: "Richardson contractors: make digital marketing your unfair advantage.",
    intro:
      "Richardson mixes older housing stock, busy households, and commercial edges—search intent varies by job type. Outwit helps you route the right message to the right search: repairs, replacements, upgrades, and emergency work—then make contacting you the obvious next step.",
    marketTitle: "What Richardson searches reveal",
    marketBody:
      "Winning is not about ranking for one keyword. It is about covering the problems people type when something breaks or when they plan a project—and backing that coverage with a digital experience that builds trust immediately.",
    systemTitle: "How Outwit supports Richardson growth",
    systemBody:
      "Our digital marketing system ties intelligence to execution: which services to emphasize, which pages to strengthen, and how to improve mobile conversion. You get a partner focused on pipeline and reputation—not checkbox SEO.",
    authorityTitle: "Tie Richardson into North Texas",
    authorityBody:
      "Pair Richardson with neighboring city coverage, insights, and the Growth Plan so your marketing scales with your service area.",
    positioningLine:
      "Outwit helps Richardson trades present as the expert choice online—where most new customers decide who to call first.",
  },
};

export function cityLandingPath(slug: WhoHelpCitySlug): string {
  return `/who-we-help/cities/${slug}`;
}

export function otherCitySlugs(exclude: WhoHelpCitySlug): WhoHelpCitySlug[] {
  const all: WhoHelpCitySlug[] = [
    "frisco-tx",
    "mckinney-tx",
    "allen-tx",
    "plano-tx",
    "richardson-tx",
  ];
  return all.filter((s) => s !== exclude);
}
