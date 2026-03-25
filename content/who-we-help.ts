export const WHO_HELP_NICHES = ["hvac", "plumbing", "electrical"] as const;
export type WhoHelpNiche = (typeof WHO_HELP_NICHES)[number];

export const WHO_HELP_CITY_SLUGS = [
  "frisco-tx",
  "mckinney-tx",
  "allen-tx",
  "plano-tx",
  "richardson-tx",
] as const;
export type WhoHelpCitySlug = (typeof WHO_HELP_CITY_SLUGS)[number];

/** City key without -tx suffix for legacy /{trade}-seo/{city} links */
export const citySlugToLegacyCity: Record<WhoHelpCitySlug, string> = {
  "frisco-tx": "frisco",
  "mckinney-tx": "mckinney",
  "allen-tx": "allen",
  "plano-tx": "plano",
  "richardson-tx": "richardson",
};

export const cityDisplayName: Record<WhoHelpCitySlug, string> = {
  "frisco-tx": "Frisco",
  "mckinney-tx": "McKinney",
  "allen-tx": "Allen",
  "plano-tx": "Plano",
  "richardson-tx": "Richardson",
};

type NicheHub = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  problemsTitle: string;
  problemsBody: string;
  systemTitle: string;
  systemIntro: string;
  systemCards: { title: string; body: string }[];
  proofTitle: string;
  proofBody: string;
};

export const nicheHubs: Record<WhoHelpNiche, NicheHub> = {
  hvac: {
    title: "Who We Help — HVAC Companies | Outwit",
    description:
      "Growth intelligence for HVAC companies in North Texas: SEO, local demand, and a system that turns searches into booked jobs.",
    h1: "We help HVAC companies win local search and book more jobs.",
    intro:
      "Homeowners search when something breaks or the season shifts—not when they feel like browsing. Outwit maps that demand, builds pages that deserve to rank, and tightens the path from search to call.",
    problemsTitle: "What HVAC owners are up against",
    problemsBody:
      "High-intent searches are competitive, seasonal swings hit lead flow, and thin city pages do not fool Google or customers. You need coverage for service + city + problem terms, with proof and CTAs that convert on mobile.",
    systemTitle: "The system: intelligence, capture, conversion",
    systemIntro:
      "Outwit is not a checklist of SEO tasks. It is a structured engine built around intent, local signals, and conversion.",
    systemCards: [
      {
        title: "Intelligence",
        body: "Map search demand and competitor positioning so you know what actually moves the needle in your markets.",
      },
      {
        title: "Capture",
        body: "Build pages and content that earn visibility for service, city, and problem-based searches—without copycat thin pages.",
      },
      {
        title: "Conversion",
        body: "Tighten messaging, proof, and CTAs so rankings turn into calls and booked jobs.",
      },
    ],
    proofTitle: "Proof and next step",
    proofBody:
      "Pair local SEO with clear offers and measurement so you can see what is working. Start with the Growth Plan or talk to us about your territories.",
  },
  plumbing: {
    title: "Who We Help — Plumbing Companies | Outwit",
    description:
      "Growth intelligence for plumbing companies in North Texas: local SEO, emergency and service intent, and a system built for booked jobs.",
    h1: "We help plumbing companies capture emergency and service demand.",
    intro:
      "Plumbing demand spikes around leaks, clogs, and water heater failures. Outwit aligns your site and local presence with how people actually search—so you show up when it matters.",
    problemsTitle: "What plumbing owners are up against",
    problemsBody:
      "Emergency terms, “near me,” and city + service combinations are crowded. Generic pages and weak mobile UX leak calls to competitors who look more trustworthy in the SERP and on the landing page.",
    systemTitle: "The system: intelligence, capture, conversion",
    systemIntro:
      "We build repeatable coverage for high-intent plumbing searches and strengthen the path from click to call.",
    systemCards: [
      {
        title: "Intelligence",
        body: "Understand which searches drive calls in your cities versus which ones only burn crawl budget.",
      },
      {
        title: "Capture",
        body: "Earn visibility for repair, replacement, and city-specific pages with substance and clear service mapping.",
      },
      {
        title: "Conversion",
        body: "Make trust, availability, and next steps obvious on mobile—the device most emergency searches use.",
      },
    ],
    proofTitle: "Proof and next step",
    proofBody:
      "See how we structure growth for trades: services overview, Growth Plan, and transparent pricing when you are ready.",
  },
  electrical: {
    title: "Who We Help — Electrical Contractors | Outwit",
    description:
      "Growth intelligence for electrical contractors in North Texas: SEO for panel, EV, and service demand with a conversion-focused system.",
    h1: "We help electrical contractors grow with intent-led local SEO.",
    intro:
      "Electrical work spans safety-critical repairs, upgrades, and emerging demand like EV charging. Outwit connects that service map to how homeowners and businesses search in each city you serve.",
    problemsTitle: "What electrical owners are up against",
    problemsBody:
      "Competitors bid on the same city + service terms, and broad “electrician near me” traffic is noisy. You need pages that match specific intent—panel upgrades, EV installs, lighting, commercial—without diluting trust.",
    systemTitle: "The system: intelligence, capture, conversion",
    systemIntro:
      "We align content and local signals with the jobs you want most, then improve the on-site path to contact.",
    systemCards: [
      {
        title: "Intelligence",
        body: "Prioritize service lines and cities by commercial value and search behavior—not guesswork.",
      },
      {
        title: "Capture",
        body: "Build authority pages for the services you want to own, tied to each market you operate in.",
      },
      {
        title: "Conversion",
        body: "Clarify licensing, scope, and urgency so visitors know you can handle the job—then make contacting you frictionless.",
      },
    ],
    proofTitle: "Proof and next step",
    proofBody:
      "Explore services, pricing, and the Growth Plan to see how we package intelligence and execution for electrical contractors.",
  },
};

type CityPageBlock = {
  problemsTitle: string;
  problemsBody: string;
  systemTitle: string;
  systemIntro: string;
  systemCards: { title: string; body: string }[];
  proofTitle: string;
  proofBody: string;
};

/** Per-city, per-niche body blocks (city name interpolated in titles where needed). */
export const cityNicheBlocks: Record<
  WhoHelpNiche,
  Record<WhoHelpCitySlug, CityPageBlock>
> = {
  hvac: {
    "frisco-tx": {
      problemsTitle: "What HVAC owners in Frisco are up against",
      problemsBody:
        "Frisco homeowners search with urgency: AC not cooling, heater issues, maintenance before peak season. If you are not visible for service + city + problem terms—or your site does not convert—you lose the job before you quote it.",
      systemTitle: "The system: how Outwit wins local search in Frisco",
      systemIntro:
        "We map Frisco demand, build pages that deserve to rank, and tighten mobile CTAs so visibility becomes booked jobs.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Map the searches that become calls in Frisco and audit what competitors actually rank for.",
        },
        {
          title: "Capture",
          body: "Earn coverage for HVAC service and problem-based queries without thin duplicate city pages.",
        },
        {
          title: "Conversion",
          body: "Sharpen proof, offers, and click-to-call paths so traffic turns into booked jobs.",
        },
      ],
      proofTitle: "Next steps for HVAC in Frisco",
      proofBody:
        "Pair local SEO with the Growth Plan and clear measurement. See also our services overview and pricing when you are ready to scale.",
    },
    "mckinney-tx": {
      problemsTitle: "What HVAC owners in McKinney are up against",
      problemsBody:
        "McKinney homeowners search for urgency and problems: AC not cooling, heater won’t turn on, emergency repair, and “near me” terms. Thin pages and weak mobile UX hand jobs to whoever looks credible in the SERP.",
      systemTitle: "The system: how Outwit wins local search in McKinney",
      systemIntro:
        "Structured growth: intent mapping, pages that earn rankings, and conversion paths built for mobile.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Map high-intent McKinney demand and competitor positioning.",
        },
        {
          title: "Capture",
          body: "Build substance for service + city + problem searches—not copycat templates.",
        },
        {
          title: "Conversion",
          body: "Tighten CTAs and proof so rankings become calls and booked jobs.",
        },
      ],
      proofTitle: "Next steps for HVAC in McKinney",
      proofBody:
        "Read our McKinney HVAC SEO insight for a deeper look, then explore the Growth Plan and contact.",
    },
    "allen-tx": {
      problemsTitle: "What HVAC owners in Allen are up against",
      problemsBody:
        "Allen sits in a competitive North Dallas corridor. Homeowners compare fast on mobile; you need visibility for the right service terms and a site that earns trust in seconds.",
      systemTitle: "The system: how Outwit wins local search in Allen",
      systemIntro:
        "We focus on intent, local relevance, and conversion so Allen traffic turns into booked work.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Prioritize Allen searches by commercial value and seasonality.",
        },
        {
          title: "Capture",
          body: "Build pages aligned to how Allen homeowners actually search.",
        },
        {
          title: "Conversion",
          body: "Remove friction from call, form, and schedule paths on mobile.",
        },
      ],
      proofTitle: "Next steps for HVAC in Allen",
      proofBody:
        "Connect Allen coverage to your broader North Texas strategy—services, Growth Plan, and pricing.",
    },
    "plano-tx": {
      problemsTitle: "What HVAC owners in Plano are up against",
      problemsBody:
        "Plano’s density means more competitors bidding on the same terms. Winning requires differentiated pages, strong local signals, and proof that matches homeowner expectations.",
      systemTitle: "The system: how Outwit wins local search in Plano",
      systemIntro:
        "Intelligence-led SEO with pages that stand up to scrutiny and CTAs built for busy homeowners.",
      systemCards: [
        {
          title: "Intelligence",
          body: "See what Plano demand looks like by service line and season.",
        },
        {
          title: "Capture",
          body: "Earn visibility without relying on thin city spam.",
        },
        {
          title: "Conversion",
          body: "Align messaging and trust elements with Plano’s buyer expectations.",
        },
      ],
      proofTitle: "Next steps for HVAC in Plano",
      proofBody:
        "Layer Plano into a system that scales across your territories—start with the Growth Plan or contact.",
    },
    "richardson-tx": {
      problemsTitle: "What HVAC owners in Richardson are up against",
      problemsBody:
        "Richardson blends residential and commercial adjacency; search intent varies by neighborhood and property type. You need coverage that matches the jobs you want—not just generic “HVAC” mentions.",
      systemTitle: "The system: how Outwit wins local search in Richardson",
      systemIntro:
        "Map intent, build authoritative local pages, and convert mobile visitors who are comparing options quickly.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Separate residential vs. light commercial signals where it matters for Richardson.",
        },
        {
          title: "Capture",
          body: "Target service + city + problem queries with real substance.",
        },
        {
          title: "Conversion",
          body: "Make next steps obvious for emergency and planned work alike.",
        },
      ],
      proofTitle: "Next steps for HVAC in Richardson",
      proofBody:
        "Fit Richardson into your North Texas growth map—services, insights, and the Growth Plan.",
    },
  },
  plumbing: {
    "frisco-tx": {
      problemsTitle: "What plumbing owners in Frisco are up against",
      problemsBody:
        "Emergency and “near me” searches dominate; homeowners pick whoever looks credible and available first. Weak pages and unclear CTAs cost calls.",
      systemTitle: "The system: how Outwit captures plumbing demand in Frisco",
      systemIntro:
        "Align pages and local presence with how Frisco searches for leaks, clogs, water heaters, and installs.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Identify which Frisco queries drive booked jobs vs. tire-kickers.",
        },
        {
          title: "Capture",
          body: "Build service and city depth that competes in the local pack and organic results.",
        },
        {
          title: "Conversion",
          body: "Optimize for mobile emergency behavior: trust, speed, and click-to-call.",
        },
      ],
      proofTitle: "Next steps for plumbing in Frisco",
      proofBody:
        "See services and pricing, then talk to us about Frisco and neighboring cities.",
    },
    "mckinney-tx": {
      problemsTitle: "What plumbing owners in McKinney are up against",
      problemsBody:
        "McKinney homeowners search when something fails—burst pipes, clogs, water heaters. You must show up at that moment with a site that converts panic into a call to you.",
      systemTitle: "The system: how Outwit captures plumbing demand in McKinney",
      systemIntro:
        "Intent-led pages, local signals, and frictionless contact paths for high-stakes searches.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Map emergency vs. planned demand in McKinney.",
        },
        {
          title: "Capture",
          body: "Earn visibility for repair and replacement intent across services you offer.",
        },
        {
          title: "Conversion",
          body: "Make availability and credibility obvious on the landing page.",
        },
      ],
      proofTitle: "Next steps for plumbing in McKinney",
      proofBody:
        "Explore the Growth Plan and contact to cover McKinney alongside your other territories.",
    },
    "allen-tx": {
      problemsTitle: "What plumbing owners in Allen are up against",
      problemsBody:
        "Allen competes with nearby suburbs for the same emergency terms. Differentiation comes from trust, speed, and specificity—not generic “plumber Allen” copy.",
      systemTitle: "The system: how Outwit captures plumbing demand in Allen",
      systemIntro:
        "Build authority for the services you want most and the calls you can actually serve.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Prioritize Allen service lines by margin and demand.",
        },
        {
          title: "Capture",
          body: "Strengthen pages for high-intent plumbing queries.",
        },
        {
          title: "Conversion",
          body: "Tighten mobile UX for stressed homeowners.",
        },
      ],
      proofTitle: "Next steps for plumbing in Allen",
      proofBody:
        "Connect Allen to your regional plumbing SEO system—services and Growth Plan.",
    },
    "plano-tx": {
      problemsTitle: "What plumbing owners in Plano are up against",
      problemsBody:
        "Plano’s market is crowded; paid and organic competition is high. You need pages that win on relevance and proof, not keyword stuffing.",
      systemTitle: "The system: how Outwit captures plumbing demand in Plano",
      systemIntro:
        "Structured local SEO with substance and measurable conversion improvements.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Benchmark Plano competitors and query intent by service.",
        },
        {
          title: "Capture",
          body: "Earn rankings with helpful, specific content.",
        },
        {
          title: "Conversion",
          body: "Drive calls with clear next steps and trust signals.",
        },
      ],
      proofTitle: "Next steps for plumbing in Plano",
      proofBody:
        "Scale Plano alongside Frisco, McKinney, and other cities with one coherent plan.",
    },
    "richardson-tx": {
      problemsTitle: "What plumbing owners in Richardson are up against",
      problemsBody:
        "Richardson’s mix of older homes and busy households drives diverse plumbing issues. Coverage must match real problems people type into search.",
      systemTitle: "The system: how Outwit captures plumbing demand in Richardson",
      systemIntro:
        "Map intent, publish authoritative local pages, and convert mobile traffic.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Align Richardson pages with the services you prioritize.",
        },
        {
          title: "Capture",
          body: "Target repair, replacement, and install intent clearly.",
        },
        {
          title: "Conversion",
          body: "Reduce friction from search result to call.",
        },
      ],
      proofTitle: "Next steps for plumbing in Richardson",
      proofBody:
        "Fold Richardson into your North Texas plumbing growth engine.",
    },
  },
  electrical: {
    "frisco-tx": {
      problemsTitle: "What electrical owners in Frisco are up against",
      problemsBody:
        "Frisco homeowners and growing commercial demand mean competition for panel upgrades, EV installs, and service calls. Generic electrician pages fail against specialists who look more credible.",
      systemTitle: "The system: how Outwit grows electrical demand in Frisco",
      systemIntro:
        "Connect service lines to search intent and strengthen the path from visibility to contact.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Prioritize Frisco services—residential vs. light commercial—by value.",
        },
        {
          title: "Capture",
          body: "Build pages for EV, panel, lighting, and repair intent.",
        },
        {
          title: "Conversion",
          body: "Clarify licensing, scope, and safety so visitors trust the next step.",
        },
      ],
      proofTitle: "Next steps for electrical in Frisco",
      proofBody:
        "See services, pricing, and the Growth Plan for a trades growth system that scales.",
    },
    "mckinney-tx": {
      problemsTitle: "What electrical owners in McKinney are up against",
      problemsBody:
        "McKinney searches blend emergency repair with planned upgrades. You need visibility across both—and a site that converts researchers and urgent callers.",
      systemTitle: "The system: how Outwit grows electrical demand in McKinney",
      systemIntro:
        "Intent mapping, authoritative pages, and conversion-focused UX for electrical contractors.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Separate emergency vs. project-based demand in McKinney.",
        },
        {
          title: "Capture",
          body: "Earn rankings for the services you want to grow.",
        },
        {
          title: "Conversion",
          body: "Make quoting and contact paths clear on mobile.",
        },
      ],
      proofTitle: "Next steps for electrical in McKinney",
      proofBody:
        "Talk to Outwit about McKinney and your wider North Texas footprint.",
    },
    "allen-tx": {
      problemsTitle: "What electrical owners in Allen are up against",
      problemsBody:
        "Allen homeowners compare electricians on trust and specificity—especially for panels, EV chargers, and older wiring. Thin pages lose to competitors who demonstrate expertise.",
      systemTitle: "The system: how Outwit grows electrical demand in Allen",
      systemIntro:
        "Build service depth and local relevance that stand up in competitive suburbs.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Focus Allen content on the jobs you want most.",
        },
        {
          title: "Capture",
          body: "Target high-intent electrical queries with substance.",
        },
        {
          title: "Conversion",
          body: "Surface credentials, warranties, and clear CTAs.",
        },
      ],
      proofTitle: "Next steps for electrical in Allen",
      proofBody:
        "Layer Allen into your regional electrical SEO strategy.",
    },
    "plano-tx": {
      problemsTitle: "What electrical owners in Plano are up against",
      problemsBody:
        "Plano’s market rewards specialists. Broad “electrician” pages underperform against targeted coverage for EV, remodels, and commercial-adjacent work.",
      systemTitle: "The system: how Outwit grows electrical demand in Plano",
      systemIntro:
        "Structured growth: intelligence, capture, conversion—aligned to Plano demand.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Benchmark Plano competitors and service-line opportunity.",
        },
        {
          title: "Capture",
          body: "Publish pages that match how Plano searches.",
        },
        {
          title: "Conversion",
          body: "Turn qualified traffic into booked estimates and jobs.",
        },
      ],
      proofTitle: "Next steps for electrical in Plano",
      proofBody:
        "Use Plano as a core node in your North Texas electrical growth plan.",
    },
    "richardson-tx": {
      problemsTitle: "What electrical owners in Richardson are up against",
      problemsBody:
        "Richardson includes diverse housing stock and growing commercial edges. Search intent spans quick repairs to larger upgrades—your pages need to route visitors to the right offer.",
      systemTitle: "The system: how Outwit grows electrical demand in Richardson",
      systemIntro:
        "Map intent, strengthen local pages, and convert searchers evaluating multiple electricians.",
      systemCards: [
        {
          title: "Intelligence",
          body: "Align Richardson messaging with the services you prioritize.",
        },
        {
          title: "Capture",
          body: "Compete for high-value electrical queries with depth.",
        },
        {
          title: "Conversion",
          body: "Make the next step obvious for residential and small commercial leads.",
        },
      ],
      proofTitle: "Next steps for electrical in Richardson",
      proofBody:
        "Integrate Richardson with your broader electrical marketing system.",
    },
  },
};

const nicheLabel: Record<WhoHelpNiche, string> = {
  hvac: "HVAC",
  plumbing: "Plumbing",
  electrical: "Electrical",
};

export function getCityPageTitle(
  niche: WhoHelpNiche,
  city: WhoHelpCitySlug
): string {
  const cityName = cityDisplayName[city];
  return `Outwit — ${nicheLabel[niche]} in ${cityName}, TX`;
}

export function getCityPageDescription(
  niche: WhoHelpNiche,
  city: WhoHelpCitySlug
): string {
  const cityName = cityDisplayName[city];
  const trade =
    niche === "hvac"
      ? "HVAC"
      : niche === "plumbing"
        ? "plumbing"
        : "electrical";
  return `${trade === "HVAC" ? "HVAC" : trade.charAt(0).toUpperCase() + trade.slice(1)} growth and local SEO in ${cityName}, TX—more calls, booked jobs, and less guesswork. Get the Outwit Growth Plan.`;
}

export function getCityH1(niche: WhoHelpNiche, city: WhoHelpCitySlug): string {
  const cityName = cityDisplayName[city];
  if (niche === "hvac") {
    return `${cityName} HVAC: rank for high-intent searches and book more jobs.`;
  }
  if (niche === "plumbing") {
    return `${cityName} plumbing: capture emergency and service demand.`;
  }
  return `${cityName} electrical: grow with intent-led local SEO.`;
}

export function getCityIntro(niche: WhoHelpNiche, city: WhoHelpCitySlug): string {
  const cityName = cityDisplayName[city];
  if (niche === "hvac") {
    return `Outwit builds a strategic SEO system for HVAC companies serving ${cityName} so you show up for high-intent searches and your site turns demand into booked jobs.`;
  }
  if (niche === "plumbing") {
    return `Outwit aligns your plumbing company’s site and local presence with how ${cityName} homeowners search—so you win calls when pipes fail, drains clog, or upgrades are on the table.`;
  }
  return `Outwit connects your electrical service map to how businesses and homeowners in ${cityName} search—panel work, EV charging, lighting, and repairs—then improves the path from visibility to contact.`;
}

/** Legacy /{trade}-seo/{city} path (mirrors who-we-help city pages). */
export function getLegacySeoPath(
  niche: WhoHelpNiche,
  city: WhoHelpCitySlug
): string {
  const legacy = citySlugToLegacyCity[city];
  const segment =
    niche === "hvac"
      ? "hvac-seo"
      : niche === "plumbing"
        ? "plumbing-seo"
        : "electrical-seo";
  return `/${segment}/${legacy}`;
}
