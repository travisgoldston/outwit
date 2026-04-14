export type CitySlug =
  | "mckinney"
  | "melissa"
  | "anna"
  | "sherman"
  | "allen"
  | "plano"
  | "prosper"
  | "celina"
  | "frisco"
  | "wylie"
  | "van-alstyne"
  | "gunter";

export type City = {
  slug: CitySlug;
  name: string;
  oneLiner: string;
  nearby: CitySlug[];
  /** Short “why unique” paragraphs (1–2) */
  why: string[];
  /** City-specific FAQ questions (answers are shared template in page) */
  faq: { q: string; a: string }[];
};

export const CITY_SLUGS: CitySlug[] = [
  "mckinney",
  "melissa",
  "anna",
  "sherman",
  "allen",
  "plano",
  "prosper",
  "celina",
  "frisco",
  "wylie",
  "van-alstyne",
  "gunter",
];

export const CITIES: Record<CitySlug, City> = {
  "mckinney": {
    slug: "mckinney",
    name: "McKinney",
    oneLiner: "Historic downtown + rapid suburban growth—and heavy competition in home services.",
    nearby: ["melissa", "allen", "anna"],
    why: [
      "McKinney is a mix of long-established local businesses and a fast-growing wave of new neighborhoods. That means buyers search with intent—and they compare options quickly.",
      "Home services in particular are crowded. The winners aren’t the loudest; they’re the ones with clear service pages, strong local signals, and a site that makes calling easy.",
    ],
    faq: [
      {
        q: "How competitive is SEO in McKinney?",
        a: "In home services and trades, it’s very competitive. The path is tighter site structure, Google Business optimization, and city/service pages that actually earn clicks.",
      },
      {
        q: "Do I need city pages for McKinney?",
        a: "Sometimes. We test city pages in the Lab and use them only when they can be unique and useful—not templated filler.",
      },
      {
        q: "Can you help if we serve all of Collin County?",
        a: "Yes—McKinney pages are usually the hub, then we expand to nearby cities where you already have demand.",
      },
    ],
  },
  "melissa": {
    slug: "melissa",
    name: "Melissa",
    oneLiner: "Outwit’s home base—fast growth along 75 with new families searching online first.",
    nearby: ["mckinney", "anna", "prosper"],
    why: [
      "Melissa is growing fast along US‑75. New residents move in and immediately search for plumbers, electricians, dentists, and local favorites.",
      "That’s good news: in a growth market, the businesses that show up early tend to keep the advantage.",
    ],
    faq: [
      { q: "Is Melissa too small for SEO?", a: "Not if your customers search locally. Growth markets often produce clearer wins than saturated metros." },
      { q: "What matters most for Melissa searches?", a: "A strong Google Business profile, tight service pages, and proof that you’re local and credible." },
      { q: "How fast can results happen here?", a: "Some businesses see movement quickly, but we plan in 3–6 month windows and track progress with Search Console." },
    ],
  },
  "anna": {
    slug: "anna",
    name: "Anna",
    oneLiner: "Exploding growth north of McKinney—early online visibility is a real advantage.",
    nearby: ["melissa", "mckinney", "van-alstyne"],
    why: [
      "Anna is one of those towns where population growth changes the demand curve every year. New homeowners and commuters search for local services constantly.",
      "The online landscape is still forming. Early movers who build clean pages and reputation signals can out-rank bigger brands.",
    ],
    faq: [
      { q: "What’s the fastest win in Anna?", a: "Google Business + reviews + a small set of high-intent service pages that match what people actually search." },
      { q: "Do you build city pages for Anna?", a: "Only when we can make them unique. We test city page indexing/ranking in the Lab and publish what happens." },
      { q: "We’re based in McKinney—can we still rank in Anna?", a: "Often yes, if you serve Anna and the site makes that clear with location signals and content." },
    ],
  },
  "sherman": {
    slug: "sherman",
    name: "Sherman",
    oneLiner: "An established regional hub with legacy businesses and rising competition.",
    nearby: ["van-alstyne", "gunter", "anna"],
    why: [
      "Sherman has long-standing businesses with real reputations—but also more competition as the region grows. Searchers still want the same thing: clear options and quick trust.",
      "For many categories, the opportunity is cleaning up your visibility (maps + organic) and making the website do the selling.",
    ],
    faq: [
      { q: "Is Sherman SEO mostly Google Maps?", a: "Maps is huge, but organic pages often win the long-tail searches that turn into steady calls." },
      { q: "We’ve been around forever—why don’t we rank?", a: "Usually it’s inconsistent listings, weak site structure, or competitors with stronger Google Business signals." },
      { q: "Can SEO work without a redesign?", a: "Sometimes. If the site loads fast and converts, we can start with SEO fundamentals and upgrade later." },
    ],
  },
  "allen": {
    slug: "allen",
    name: "Allen",
    oneLiner: "Busy corridors, strong incomes, and high expectations for web presence.",
    nearby: ["mckinney", "plano", "wylie"],
    why: [
      "Allen is a high-activity market—people compare providers, read reviews, and bounce fast if the site feels sketchy or slow.",
      "To win here, you need both visibility (maps + organic) and a website that makes choosing you feel obvious.",
    ],
    faq: [
      { q: "What’s the biggest Allen SEO mistake?", a: "Generic service pages that don’t match the local intent queries people actually use." },
      { q: "Do reviews matter more here?", a: "Yes—higher-expectation markets lean heavily on reviews and on-site proof." },
      { q: "Can you target Allen and nearby cities?", a: "Yes—Allen usually pairs naturally with McKinney, Plano, and Wylie." },
    ],
  },
  "plano": {
    slug: "plano",
    name: "Plano",
    oneLiner: "Mature, competitive market—differentiation is non-negotiable.",
    nearby: ["allen", "frisco", "prosper"],
    why: [
      "Plano is saturated in a lot of categories. You’re not just competing with local shops—you’re competing with well-funded teams and strong brands.",
      "The edge is clear positioning, better conversion paths, and content that answers the real questions buyers are asking.",
    ],
    faq: [
      { q: "Is Plano SEO worth it if it’s competitive?", a: "Yes, if you’re willing to do the fundamentals well and commit to consistency instead of quick hacks." },
      { q: "Will city pages alone work in Plano?", a: "Not by themselves. We treat them as one tool, not the whole strategy." },
      { q: "What usually moves the needle first?", a: "Google Business improvements, on-site clarity, and a small set of high-intent pages." },
    ],
  },
  "prosper": {
    slug: "prosper",
    name: "Prosper",
    oneLiner: "Affluent, fast-growing—service businesses compete hard for visibility.",
    nearby: ["celina", "frisco", "melissa"],
    why: [
      "Prosper has money and momentum. That’s great for service businesses, but it also attracts competition quickly.",
      "In markets like this, being “good” isn’t enough—you need to show up and look credible instantly.",
    ],
    faq: [
      { q: "What’s different about Prosper search behavior?", a: "Higher-intent searchers who want fast proof: reviews, clear offers, and an easy call/text path." },
      { q: "Do you target Prosper with landing pages?", a: "Yes—when we can make them useful and supported by internal links." },
      { q: "How do we avoid wasting money on SEO?", a: "We measure what’s happening in Search Console and publish the testing mindset in our Lab." },
    ],
  },
  "celina": {
    slug: "celina",
    name: "Celina",
    oneLiner: "Boom town—new residents searching for local services every week.",
    nearby: ["prosper", "gunter", "frisco"],
    why: [
      "Celina is expanding fast, and new residents search for everything from home services to healthcare to local favorites.",
      "That creates opportunity: if your site is structured well and your local signals are clean, you can earn visibility faster than in older markets.",
    ],
    faq: [
      { q: "What pages should a Celina business start with?", a: "A strong homepage + core services + a clear Celina-focused page only if it can be unique." },
      { q: "Does Google Business matter more than the website?", a: "They work together. Maps gets attention; the site closes the decision." },
      { q: "Can you help with ongoing tuning?", a: "Yes—SEO is never “set it and forget it.”" },
    ],
  },
  "frisco": {
    slug: "frisco",
    name: "Frisco",
    oneLiner: "Huge, crowded SERPs—standing out takes real strategy and proof.",
    nearby: ["plano", "prosper", "celina"],
    why: [
      "Frisco is one of the most competitive local markets in North Texas. There’s a new business on every corner—and many of them are investing online.",
      "You win here by making your offer clear, building real local proof, and tightening the conversion flow so traffic turns into calls.",
    ],
    faq: [
      { q: "How long does SEO take in Frisco?", a: "Usually longer than smaller towns. We plan for 3–6 months to see meaningful signal, then compound from there." },
      { q: "Can small businesses compete here?", a: "Yes—when the site is clearer and the local signals are stronger than the bigger competitors’." },
      { q: "Do you do paid ads too?", a: "Outwit focuses on SEO and web conversion, but we’ll tell you when paid is useful to bridge the gap." },
    ],
  },
  "wylie": {
    slug: "wylie",
    name: "Wylie",
    oneLiner: "Word of mouth is strong, but more buyers start on Google now.",
    nearby: ["allen", "mckinney", "plano"],
    why: [
      "Wylie has a strong community feel and a lot of referral business—but even referrals check Google before they call.",
      "The goal is simple: when someone searches, you show up—and your site makes the next step easy.",
    ],
    faq: [
      { q: "Do I need SEO if I get referrals?", a: "Referrals still google you. SEO helps you catch the people who didn’t get a name from a neighbor." },
      { q: "What’s the first lever to pull in Wylie?", a: "Google Business cleanup + clear service pages + conversion fixes." },
      { q: "Can you target Wylie and Allen together?", a: "Yes—those markets overlap heavily for service businesses." },
    ],
  },
  "van-alstyne": {
    slug: "van-alstyne",
    name: "Van Alstyne",
    oneLiner: "Small-town feel along 75—big advantage for early online visibility.",
    nearby: ["anna", "sherman", "melissa"],
    why: [
      "Van Alstyne still feels small-town, but growth along the corridor is changing how people find businesses.",
      "If you show up clearly now, you’re building an advantage that gets harder for competitors to take later.",
    ],
    faq: [
      { q: "Is there enough search volume in Van Alstyne?", a: "Often yes, especially when paired with nearby markets and the right service intent." },
      { q: "What helps you rank fastest here?", a: "Clean listings + strong Google Business + a focused set of pages that match local searches." },
      { q: "Do you cover nearby towns too?", a: "Yes—we usually plan for Van Alstyne + Anna + Sherman as a cluster." },
    ],
  },
  "gunter": {
    slug: "gunter",
    name: "Gunter",
    oneLiner: "North of Prosper/Celina—room to grow if you show up clearly online.",
    nearby: ["celina", "prosper", "sherman"],
    why: [
      "Gunter is smaller, but it’s surrounded by growth. That means searchers still look for nearby providers—and they’re willing to travel for someone trustworthy.",
      "Clarity wins: you need Google to understand what you do and where you serve, and you need visitors to feel confident calling you.",
    ],
    faq: [
      { q: "Can a Gunter business rank outside Gunter?", a: "Often, yes—if you serve the area and the site supports that with clear location signals." },
      { q: "What should we prioritize first?", a: "Google Business + a clean, fast site that explains your services without fluff." },
      { q: "Is SEO here cheaper than Frisco/Plano?", a: "Usually. Competition tends to be lower, which can make progress easier." },
    ],
  },
};

