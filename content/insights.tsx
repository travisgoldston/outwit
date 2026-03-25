import Link from "next/link";
import type { ReactNode } from "react";

export const INSIGHT_SLUGS = [
  "why-most-business-websites-fail",
  "how-much-should-a-website-cost-in-2026",
  "how-long-does-seo-take",
  "what-makes-a-high-converting-website",
  "local-seo-complete-guide",
  "marketing-funnels-explained-small-businesses",
  "seo-vs-paid-ads-which-to-choose",
] as const;

export type InsightSlug = (typeof INSIGHT_SLUGS)[number];

export type InsightEntry = {
  slug: InsightSlug;
  title: string;
  summary: string;
  readTime: string;
  metaDescription: string;
  body: () => ReactNode;
};

function ArticleLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-semibold text-neon-orange underline decoration-neon-orange/40 underline-offset-2 transition-colors hover:text-neon-orange/80 hover:decoration-neon-orange"
    >
      {children}
    </Link>
  );
}

export const INSIGHTS: Record<InsightSlug, InsightEntry> = {
  "why-most-business-websites-fail": {
    slug: "why-most-business-websites-fail",
    title: "Why most business websites fail",
    summary:
      "Most sites look fine—but fail at one job: turning the right visitors into conversations. Here's how to spot the leaks.",
    readTime: "7 min read",
    metaDescription:
      "Why most business websites fail at lead generation and trust, and how to fix the strategy before you redesign.",
    body: function WhyMostBusinessWebsitesFailBody() {
      return (
        <>
          <p className="leading-relaxed text-slate-700">
            You spent good money on a website. It looks clean, loads okay, and
            lists everything you do. So why does it feel like a digital
            brochure that nobody reads? The answer isn’t usually design or
            tech. It’s that the site was built without a clear job: to turn the
            right visitors into conversations and customers. When that job
            isn’t defined up front, you end up with a site that looks the part
            but doesn’t do the work.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            The real problem: clarity and direction
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Most business websites fail for a handful of repeat reasons. The
            first is unclear messaging. If a visitor can’t tell what you do,
            who it’s for, and why it matters in a few seconds, they leave. The
            second is no clear path to the next step. Contact pages buried in
            the footer, vague “Get in touch” buttons, and forms that feel like
            a black hole don’t inspire action. The third is a mismatch with how
            people actually search and decide. Your site might be built around
            your org chart instead of the questions and problems your customers
            have. When that happens, you’re invisible to the right people and
            unconvincing to the ones who land on the page.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            What actually moves the needle
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Fixing a failing site starts with strategy, not a new theme. You
            need a single clear message that speaks to your ideal customer’s
            problem and positions you as the guide. You need one primary call
            to action above the fold and a simple path from “I’m interested” to
            “I’ve taken the next step.” You also need to align the site with
            how people find you: the terms they search, the pages they expect,
            and the proof they need before they reach out. When we work with
            businesses on their websites, we start with that strategy. Only then
            do we talk design and build.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            The process we use
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            We don't jump straight to wireframes. We start by understanding who
            your best customers are, what problem they're in when they find you,
            and what one outcome you help them achieve. That becomes the spine of
            your message. Then we map the single action you want visitors to
            take: book a call, request a demo, download a guide. Every section
            of the site should support that action or build the trust required
            to take it. Finally we look at how people find you. If search is a
            channel, the structure and content need to match the queries that
            matter. That alignment is what turns a pretty site into one that
            generates leads.
          </p>

          <p className="mt-6 leading-relaxed text-slate-700">
            If your site feels like a brochure that doesn’t convert, the next
            step isn’t more pages or a flashy redesign. It’s clarifying the
            story, the audience, and the one action you want visitors to take.
            From there, a focused redesign or restructure can turn the site
            into a real growth asset. For a deeper look at what makes sites
            convert, see{" "}
            <ArticleLink href="/insights/what-makes-a-high-converting-website">
              what makes a high-converting website
            </ArticleLink>
            , and for how to think about budget when you’re ready to fix it,{" "}
            <ArticleLink href="/insights/how-much-should-a-website-cost-in-2026">
              how much a website should cost in 2026
            </ArticleLink>
            .
          </p>

          <p className="mt-8 leading-relaxed text-slate-700">
            If you’d like to turn your current site into one that consistently
            generates leads, we can help. Our{" "}
            <ArticleLink href="/services">website design</ArticleLink> work
            starts with strategy and messaging, then builds a site that’s built
            to sell.{" "}
            <ArticleLink href="/contact">Start a conversation</ArticleLink> and
            we’ll map the smartest path forward.
          </p>
        </>
      );
    },
  },

  "how-much-should-a-website-cost-in-2026": {
    slug: "how-much-should-a-website-cost-in-2026",
    title: "How much should a website cost in 2026?",
    summary:
      "A grounded way to think about website budgets, from simple builds to strategy-led redesigns.",
    readTime: "9 min read",
    metaDescription:
      "How to think about website cost in 2026: what you get at different budget levels and when to invest in strategy.",
    body: function HowMuchWebsiteCostBody() {
      return (
        <>
          <p className="leading-relaxed text-slate-700">
            “How much should a website cost?” is the wrong first question. The
            right one is: what do you need the website to do? A site that exists
            to show you’re legitimate costs one thing. A site that’s meant to
            generate leads, book consultations, or support a sales process
            costs another. In 2026, the range is still wide: from a few
            thousand for a simple, professional presence to tens of thousands
            for a strategy-led build that’s built to convert. Here’s how we
            think about it so you can decide what’s right for your business.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            What you’re really paying for
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Website cost breaks down into a few buckets: strategy and
            messaging, design, build and tech, and sometimes content and SEO.
            Low-cost options usually skip or minimize strategy. You get a
            template, your existing copy dropped in, and a launch. That can be
            fine if you only need a credible online presence and aren’t
            relying on the site for leads. The moment you need the site to
            persuade, capture leads, or support a sales process, strategy
            becomes non-negotiable. That means time spent on positioning,
            audience, messaging, and a clear plan for what each section and
            page is for. That work typically adds to the project scope and
            cost, but it’s what separates a site that looks good from one that
            performs.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            Rough ranges (and what to expect)
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            At the lower end, a simple marketing site (five to ten pages, no
            custom strategy, template-based design) might land in the $3k–$8k
            range. Mid-range projects that include messaging and conversion
            focus often sit in the $10k–$25k range. Above that, you’re usually
            looking at deeper strategy, custom design, more pages, and
            sometimes SEO or funnel work. The number isn’t what matters most.
            What matters is that the scope matches the job you need the site
            to do. Paying for a “cheap” site that can’t convert is more
            expensive in the long run than investing in a focused build that
            generates leads from day one.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            When to invest in strategy first
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            If your current site is underperforming, the issue is often
            strategy, not aesthetics. In that case, a strategy-first
            engagement (messaging, structure, conversion plan) before or as
            part of a redesign will get you further than a pure visual
            refresh. We outline this in our post on{" "}
            <ArticleLink href="/insights/why-most-business-websites-fail">
              why most business websites fail
            </ArticleLink>
            : fix the story and the path to action first, then build. If you
            want to see what a conversion-focused site looks like in practice,
            read{" "}
            <ArticleLink href="/insights/what-makes-a-high-converting-website">
              what makes a high-converting website
            </ArticleLink>
            .
          </p>          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            How to get a clear number
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            The best way to know what you should spend is to define the job
            first. We start every website conversation by asking what the site
            needs to do in the next 12 to 24 months: generate leads, support
            a sales team, rank for specific terms, or simply establish
            credibility. Once that's clear, we can scope the work: how much
            strategy and messaging, how many pages, whether SEO or content is
            in scope, and what platform makes sense. That scope drives the
            number. We'd rather give you a clear range tied to outcomes than
            a vague estimate that doesn't match the work. If you're comparing
            quotes, compare scope and deliverables, not just the bottom line.
          </p>

          <p className="mt-8 leading-relaxed text-slate-700">
            There’s no single “right” number for 2026. There’s only the right
            scope for your goals. If you’d like to talk through what your
            business actually needs and what that might cost, we’re happy to
            have that conversation. Our{" "}
            <ArticleLink href="/services">website design</ArticleLink> and
            strategy work is built around that clarity.{" "}
            <ArticleLink href="/contact">Start your project</ArticleLink> and
            we’ll give you a clear scope and investment.
          </p>
        </>
      );
    },
  },

  "how-long-does-seo-take": {
    slug: "how-long-does-seo-take",
    title: "How long does SEO really take?",
    summary:
      "What you can expect in the first 3, 6, and 12+ months—and how to know if your investment is working.",
    readTime: "8 min read",
    metaDescription:
      "Realistic timelines for SEO: what to expect at 3, 6, and 12 months and how to measure progress.",
    body: function HowLongSeoTakeBody() {
      return (
        <>
          <p className="leading-relaxed text-slate-700">
            “How long does SEO take?” is usually code for: “When will I see
            results?” The honest answer is that it depends on your market,
            your site’s current state, and how consistently you execute. But
            you can set reasonable expectations. Most businesses start to see
            meaningful movement in three to six months. Substantial, durable
            gains often take six to twelve months or more. Understanding that
            timeline helps you invest with confidence instead of guessing or
            quitting too early.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            The first three months: foundation and early signals
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            In the first few months, the work is mostly invisible to visitors.
            You’re fixing technical issues, clarifying site structure,
            publishing or updating content that targets the right keywords, and
            making sure Google can crawl and understand your pages. You might
            see small ranking or traffic shifts, but the main outcome is
            laying a solid foundation. If you skip this phase and chase quick
            wins, you usually pay for it later with inconsistent results or
            algorithm risk.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            Three to six months: traction and learning
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Between three and six months, you typically start to see which
            pages and topics gain traction. Rankings may still move around,
            but you’ll have data to optimize: which content to deepen, which
            keywords to double down on, and where to improve relevance and
            UX. This is also when you can start tying SEO to business outcomes:
            which rankings drive form fills, calls, or demo requests. For
            local businesses, progress can be faster; our{" "}
            <ArticleLink href="/insights/local-seo-complete-guide">
              local SEO guide
            </ArticleLink>{" "}
            goes deeper on that.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            Six to twelve months and beyond: compounding returns
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            After six months, well-executed SEO tends to compound. Pages that
            rank keep earning traffic; new content adds incremental gains. The
            key is consistency: a steady cadence of quality content and
            technical care beats sporadic pushes. If you’re comparing SEO to
            paid ads, the difference is timing: ads can drive traffic
            immediately, while SEO builds an asset that pays off over time.
            We break that tradeoff down in{" "}
            <ArticleLink href="/insights/seo-vs-paid-ads-which-to-choose">
              SEO vs paid ads: which one should you choose?
            </ArticleLink>
          </p>
          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            How we set expectations with clients
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            When we start an SEO engagement, we agree on what "meaningful
            movement" looks like for your business: which keywords or topics
            matter most, what traffic or lead volume you're aiming for, and
            how we'll measure it. We share a simple roadmap: what we'll do in
            the first 90 days, what you should expect to see, and when we'll
            review and adjust. That way you're not guessing whether SEO is
            working; you have clear milestones. We also flag when paid ads might
            make sense to run in parallel, so you're not waiting in the dark
            for organic to ramp. Transparency on timeline and next steps is
            part of the plan from day one.
          </p>
          <p className="mt-6 leading-relaxed text-slate-700">
            The best way to know if your investment is working isn’t just
            rankings. It’s whether search is sending the right visitors and
            whether those visitors are turning into leads or customers. If
            you’d like a strategy that’s built for that outcome, our{" "}
            <ArticleLink href="/growth-plan">Growth Plan</ArticleLink>{" "}
            and{" "}
            <ArticleLink href="/services">the Growth Engine</ArticleLink> are built around it.{" "}
            <ArticleLink href="/contact">Tell us about your goals</ArticleLink>{" "}
            and we’ll outline a realistic timeline and plan.
          </p>
        </>
      );
    },
  },

  "what-makes-a-high-converting-website": {
    slug: "what-makes-a-high-converting-website",
    title: "What makes a high-converting website",
    summary:
      "The structure, messaging, and proof we look for when we rebuild a homepage to actually sell.",
    readTime: "10 min read",
    metaDescription:
      "What makes a website convert: clear messaging, a single primary CTA, proof, and a simple path to action.",
    body: function WhatMakesHighConvertingBody() {
      return (
        <>
          <p className="leading-relaxed text-slate-700">
            A high-converting website doesn’t rely on tricks or one magic
            button. It does a few things consistently: it tells a clear story,
            makes one primary action obvious, backs that story with proof, and
            removes friction on the path from visitor to lead or customer. When
            we audit or rebuild sites, we look for those elements. Here’s what
            they are and how they fit together.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            One clear message above the fold
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            The first screen should answer three things in plain language: what
            you do, who it’s for, and why it matters. That’s the core of
            StoryBrand-style messaging. If visitors have to scroll or click
            around to “get it,” you lose people who are ready to act now. The
            headline and subhead should state the outcome you help achieve and
            who you help achieve it, not your internal jargon or a list of
            features. When we work on messaging, we start there and then carry
            that thread through the rest of the page.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            One primary call to action
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            High-converting sites don’t offer six equally weighted options.
            They have one main next step: book a call, request a demo, get a
            quote, or join a list. That CTA should be visible above the fold
            and repeated at natural decision points. Secondary actions (e.g.
            “Read our case studies”) support the main one; they don’t compete
            with it. If your analytics show traffic but few conversions, the
            first thing we check is whether the primary CTA is clear and easy
            to take.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            Proof and relevance
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Visitors need a reason to believe. That comes from social proof
            (testimonials, logos, results), a clear explanation of your
            process so they know what to expect, and content that speaks to
            their specific situation. Generic claims (“We’re the best”) don’t
            convert. Specific outcomes (“We helped X achieve Y in Z months”)
            do. If your site feels thin on proof, we often recommend starting
            with a few strong case studies or testimonials and placing them
            where they support the main CTA.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            A simple path, not a maze
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Every extra click or form field is friction. High-converting sites
            make the path from “I’m interested” to “I’ve taken the next step”
            as short as possible. That might mean a single, well-placed booking
            link, a short form, or a clear “Talk to us” that goes to a
            dedicated page. We also look at how the rest of the site supports
            that path: for example, a{" "}
            <ArticleLink href="/insights/marketing-funnels-explained-small-businesses">
              marketing funnel
            </ArticleLink>{" "}
            that nurtures leads without overwhelming them.
          </p>
          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            How we apply this in audits and rebuilds
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            When we audit a site, we map the current path from visitor to
            lead and identify where the message blurs, where the CTA gets
            lost, or where proof is missing. We don't recommend a full redesign
            until we've fixed the strategy: one clear message, one primary
            action, and the right proof in the right places. Often that means
            rewriting key sections, reorganizing the homepage, or adding a
            single strong case study above the fold. Then we look at design
            and UX to reduce friction. The result is a site that looks
            professional and converts, without unnecessary complexity. If you
            want to see how we think about the full picture, our post on{" "}
            <ArticleLink href="/insights/why-most-business-websites-fail">
              why most business websites fail
            </ArticleLink>{" "}
            ties this back to the bigger story.
          </p>
          <p className="mt-6 leading-relaxed text-slate-700">
            If your site has traffic but few conversions, the fix usually
            isn’t a new theme. It’s tightening the message, the CTA, and the
            path. We cover the “why” behind underperforming sites in{" "}
            <ArticleLink href="/insights/why-most-business-websites-fail">
              why most business websites fail
            </ArticleLink>
            . If you’re ready to turn your site into a conversion asset, our{" "}
            <ArticleLink href="/services">website design</ArticleLink> and{" "}
            <ArticleLink href="/services">the Growth Engine</ArticleLink>{" "}
            are built for that.{" "}
            <ArticleLink href="/contact">Start a project</ArticleLink> and we’ll
            map the changes that will move the needle.
          </p>
        </>
      );
    },
  },

  "local-seo-complete-guide": {
    slug: "local-seo-complete-guide",
    title: "Local SEO: The complete guide",
    summary:
      "How local brands can use Google Business, on-site content, and reviews to own their market.",
    readTime: "12 min read",
    metaDescription:
      "A complete guide to local SEO: Google Business, location pages, reviews, and on-site content for local visibility.",
    body: function LocalSeoCompleteGuideBody() {
      return (
        <>
          <p className="leading-relaxed text-slate-700">
            Local SEO is how businesses that serve a geographic area get found
            when people search for what they offer near them. It’s different
            from national or topic-based SEO: you’re competing for “near me”
            and city- or region-specific searches, and Google leans heavily on
            signals like your Google Business profile, reviews, and
            location-focused content. This guide walks through the pieces that
            matter most and how to use them together.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            Google Business Profile: your local storefront
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Your Google Business profile is often the first thing searchers see.
            It needs to be complete and consistent: accurate name, address,
            phone, hours, and category. The description should clearly state
            what you do and who you serve, using the same language your
            customers use. Photos, services, and attributes (e.g. “Women-owned,”
            “Online appointments”) all help. So does keeping the profile updated
            when anything changes. Inconsistent or thin profiles get outranked
            by competitors who’ve invested in theirs.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            Reviews and reputation
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Reviews influence both rankings and clicks. Google wants to show
            businesses that are relevant and trusted. A steady flow of genuine
            reviews, with thoughtful responses from you, supports both. We
            don’t recommend buying reviews or gaming the system; we do recommend
            a simple process that makes it easy for happy customers to leave a
            review (e.g. a short follow-up email or text with a direct link).
            How long SEO takes for local can be shorter than for national
            topics; we cover timelines in{" "}
            <ArticleLink href="/insights/how-long-does-seo-take">
              how long does SEO take?
            </ArticleLink>
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            On-site content and location pages
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Your website should support your local visibility. That means
            location-specific pages where it makes sense (e.g. “Service + city”
            or “Areas we serve”) that answer real questions and use the terms
            people search. It also means consistent NAP (name, address, phone)
            across the site and in your footer. Schema markup for local
            business can help Google understand and display your information
            correctly. The goal is to have your site and your Google profile
            tell the same story and target the same intents.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            How it fits with the rest of your marketing
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Local SEO works alongside paid search and other channels. If you’re
            deciding where to put budget, the tradeoffs are similar to the
            broader question we tackle in{" "}
            <ArticleLink href="/insights/seo-vs-paid-ads-which-to-choose">
              SEO vs paid ads
            </ArticleLink>
            : SEO builds a long-term asset; ads can fill the gap while you
            build. For local, many businesses use both: ads for immediate
            visibility in competitive periods, and ongoing local SEO for
            sustained presence and lower cost per lead over time.
          </p>
          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            What to do first: a practical order
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            If you're new to local SEO, start with your Google Business
            profile. Claim it if you haven't, then fill out every section
            accurately and add photos and a clear description. Next, gather
            a few genuine reviews and respond to them. Once that foundation
            is in place, add or update location-focused content on your site:
            a dedicated page per service area or a clear "Areas we serve"
            section that uses the terms people search. Consistency between
            your profile and your site (NAP, categories, language) matters
            more than volume. We often see businesses jump to content or
            backlinks before fixing the basics; the basics move the needle
            fastest for most local brands.
          </p>
          <p className="mt-8 leading-relaxed text-slate-700">
            If you want to own your local market, we can help. Our{" "}
            <ArticleLink href="/local-seo/north-dallas">North Dallas local SEO strategy</ArticleLink>{" "}
            and{" "}
            <ArticleLink href="/services">the Growth Engine</ArticleLink> include Google Business
            optimization, location content, and a repeatable process for reviews.{" "}
            <ArticleLink href="/contact">Start your project</ArticleLink> and
            we’ll outline a plan tailored to your market.
          </p>
        </>
      );
    },
  },

  "marketing-funnels-explained-small-businesses": {
    slug: "marketing-funnels-explained-small-businesses",
    title: "Marketing funnels explained for small businesses",
    summary:
      "A simple, non-academic way to understand funnels—and how to build one without 20 tools.",
    readTime: "6 min read",
    metaDescription:
      "Marketing funnels for small businesses: what they are, why they matter, and how to build one simply.",
    body: function MarketingFunnelsExplainedBody() {
      return (
        <>
          <p className="leading-relaxed text-slate-700">
            “Funnel” can sound like jargon, but the idea is straightforward:
            strangers become aware of you, some become interested, and a
            subset take a clear next step (sign up, book a call, buy). A
            marketing funnel is the path you create so that journey is clear
            and repeatable instead of random. For small businesses, you don’t
            need a dozen tools. You need a few key pieces: a way to attract
            the right people, a way to capture their interest, and a clear
            next step that fits how you sell.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            Why funnels matter for small teams
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Without a defined path, you’re hoping that random traffic turns
            into leads. With one, you’re guiding people from awareness to
            action. That means fewer wasted visitors, clearer metrics, and a
            process you can improve over time. For small businesses, the funnel
            doesn’t have to be complex. It might be: someone finds you via
            search or referral, lands on a page that speaks to their problem,
            and sees one obvious action (e.g. “Book a free call”). The “funnel”
            is that path plus any follow-up (email, retargeting) you use to
            stay in touch until they’re ready to act.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            The pieces you actually need
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            At minimum you need: (1) traffic that’s relevant (e.g. from SEO or
            targeted ads), (2) a landing or key page that matches their intent
            and has a clear CTA, and (3) a way to capture and follow up (form,
            booking link, email). You don’t need a separate tool for every
            stage. Many small businesses run a simple funnel with their
            website, a form or booking tool, and email. The important thing
            is that the path is intentional and that you’re not asking for too
            much too soon. A high-converting site supports that; we break down
            what that looks like in{" "}
            <ArticleLink href="/insights/what-makes-a-high-converting-website">
              what makes a high-converting website
            </ArticleLink>
            .
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            Keeping it simple
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            The biggest mistake is overbuilding. Start with one primary path:
            one offer, one main CTA, one follow-up sequence if you use email.
            Measure what’s working (traffic, conversion rate, cost per lead),
            then add or refine. As you grow, you might add more entry points or
            nurture sequences, but the principle stays the same: clarity and one
            clear next step at a time.
          </p>
          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            How we build funnels for small businesses
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            We don't hand you a stack of tools and wish you luck. We start
            with your one primary offer and the one action you want people to
            take. Then we map the path: where do they find you (search, ads,
            referral), what page do they land on, and what happens next. We
            keep the path short: one or two steps to capture the lead, then
            a simple follow-up sequence (email or retargeting) that stays
            on message. The goal is a funnel you can run and improve without
            a full-time marketing team. We tie it to your website so the
            experience is consistent and the data is in one place. For more
            on making the site itself convert, see{" "}
            <ArticleLink href="/insights/what-makes-a-high-converting-website">
              what makes a high-converting website
            </ArticleLink>.
          </p>
          <p className="mt-8 leading-relaxed text-slate-700">
            If you want to turn your website and marketing into a funnel that
            actually generates leads, we can help. Our{" "}
            <ArticleLink href="/services">the Growth Engine</ArticleLink> is built around that.{" "}
            <ArticleLink href="/contact">Start your project</ArticleLink> and
            we’ll map a funnel that fits your business.
          </p>
        </>
      );
    },
  },

  "seo-vs-paid-ads-which-to-choose": {
    slug: "seo-vs-paid-ads-which-to-choose",
    title: "SEO vs paid ads: which one should you choose?",
    summary:
      "When to invest in search, when to lean on ads, and how the two can work together instead of competing.",
    readTime: "7 min read",
    metaDescription:
      "SEO vs paid ads: when to use each, how they work together, and how to decide for your business.",
    body: function SeoVsPaidAdsBody() {
      return (
        <>
          <p className="leading-relaxed text-slate-700">
            “Should we do SEO or paid ads?” is often the wrong either/or. The
            better question is: what do you need right now, and what are you
            building for the long term? SEO builds an asset that can drive
            traffic and leads for years; paid ads can fill the gap while you
            build and can test messaging and demand quickly. Many businesses
            use both, with the mix depending on budget, timeline, and goals.
            Here’s how we think about choosing and combining them.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            When SEO makes sense first
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            SEO is the right priority when you have a longer time horizon and
            want to reduce cost per lead over time. It’s also strong when
            people are actively searching for what you offer; your job is to
            show up and convert. The downside is delay: results typically show
            in three to six months or more. We spell that out in{" "}
            <ArticleLink href="/insights/how-long-does-seo-take">
              how long does SEO take?
            </ArticleLink>{" "}
            If you can wait and you’re in a space where search demand exists,
            SEO is often the best foundation. For local businesses, that demand
            is often “near me” and category searches; our{" "}
            <ArticleLink href="/insights/local-seo-complete-guide">
              local SEO guide
            </ArticleLink>{" "}
            covers how to capture it.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            When paid ads make sense
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Paid search or social ads are useful when you need visibility now:
            a product launch, an event, or a seasonal push. They’re also useful
            for testing: you can try different messages and offers and see what
            converts before committing to content or SEO. The tradeoff is that
            traffic stops when spend stops. There’s no lasting asset. So ads
            are best as a complement or a short-term lever, not usually as the
            only channel for a business that wants to grow steadily.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            Using both together
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            A common pattern is to run paid at a modest level while building
            SEO. Ads bring in leads and signal what messaging and offers work;
            that insight informs your content and positioning. Over time, as
            organic traffic grows, you can dial paid up or down depending on
            goals and margin. The key is that both feed the same destination: a
            site and offer that convert. If your site doesn’t convert, neither
            channel will perform well. That’s why we focus on{" "}
            <ArticleLink href="/insights/what-makes-a-high-converting-website">
              high-converting websites
            </ArticleLink>{" "}
            and clear funnels before scaling traffic.
          </p>
          <h2 className="mt-10 text-xl font-semibold text-slate-900">
            How we help clients decide
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            When we work with a business on lead generation, we look at
            timeline, budget, and how people search for what they offer.
            If you need leads in the next 30 to 60 days and have some budget
            for ads, we often recommend a modest paid layer while we build
            SEO. If you're in a niche where search demand is strong and
            you can wait a few months, we might suggest going all in on
            organic first. There's no one-size-fits-all; we outline a mix
            that fits your goals and then execute so both channels feed the
            same converting site. We run tests in the Lab and share what
            we learn so our recommendations stay grounded in results.
          </p>
          <p className="mt-8 leading-relaxed text-slate-700">
            If you’re not sure which lever to pull first, we can help. Our{" "}
            <ArticleLink href="/growth-plan">Growth Plan</ArticleLink>{" "}
            and{" "}
            <ArticleLink href="/services">the Growth Engine</ArticleLink> are built to grow organic demand, and we often pair that with a
            clear plan for when and how to use paid. We also run experiments in
            the{" "}
            <ArticleLink href="/lab">Outwit Lab</ArticleLink> that inform how we
            recommend both.{" "}
            <ArticleLink href="/contact">Start a conversation</ArticleLink> and
            we’ll outline a mix that fits your budget and goals.
          </p>
        </>
      );
    },
  },
};

export const INSIGHTS_LIST: InsightEntry[] = INSIGHT_SLUGS.map(
  (slug) => INSIGHTS[slug]
);
