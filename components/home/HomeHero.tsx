import Link from "next/link";
import SearchCardMock from "./SearchCardMock";
import { LAB_SLUGS } from "@/content/lab";

const inProgressCount = LAB_SLUGS.length;

export default function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-68px)] overflow-hidden bg-ow-cream px-5 pb-16 pt-24 sm:px-8 lg:grid lg:min-h-0 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-[60px] lg:px-12 lg:pb-20 lg:pt-[120px]">
      {/* Dot grid + warm glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(20,40,60,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 72%)",
        }}
      />
      <div className="pointer-events-none absolute -right-[100px] -top-[100px] z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(240,100,0,0.09)_0%,transparent_65%)]" />

      <div className="relative z-[2] lg:pr-0">
        <div className="mb-7 inline-flex animate-[fade-up_0.5s_ease_0.1s_forwards] items-center gap-2 rounded-full border border-[rgba(240,100,0,0.22)] bg-[rgba(240,100,0,0.1)] px-3.5 py-1.5 opacity-0">
          <span className="h-1.5 w-1.5 animate-pulse-kicker rounded-full bg-ow-orange" />
          <span className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.1em] text-ow-orange">
            SEO & Web · Tested in public · North Texas
          </span>
        </div>

        <h1 className="animate-[fade-up_0.7s_ease_0.22s_forwards] font-sans text-[clamp(2.8rem,5.5vw,5.2rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ow-charcoal opacity-0">
          Marketing that
          <br />
          <span className="text-ow-orange">proves itself</span>
          <br />
          <span className="font-light italic text-ow-slate">out loud.</span>
        </h1>

        <p className="animate-[fade-up_0.7s_ease_0.38s_forwards] mt-5 max-w-[480px] text-[1.05rem] font-normal leading-[1.78] text-ow-mid opacity-0">
          I run real experiments on real sites and publish what the data says—hypotheses,
          methodology, and Search Console screenshots as the numbers come in.
        </p>

        <div className="animate-[fade-up_0.7s_ease_0.52s_forwards] mt-9 max-w-[560px] overflow-hidden rounded-ow border border-[rgba(20,40,60,0.18)] bg-white opacity-0 shadow-ow-sm">
          <div className="flex flex-wrap sm:flex-nowrap">
            <div className="min-w-[33%] flex-1 border-b border-r border-[rgba(20,40,60,0.12)] p-4 sm:border-b-0 sm:py-[18px] sm:pl-[22px] sm:pr-[22px]">
              <div className="font-sans text-[1.75rem] font-extrabold leading-none tracking-tight text-ow-charcoal">
                {inProgressCount}
                <span className="text-base font-bold text-ow-orange"> live</span>
              </div>
              <div className="mt-1 text-[0.73rem] font-normal leading-snug text-ow-mid">
                Active experiments
                <br />
                in the lab
              </div>
            </div>
            <div className="min-w-[33%] flex-1 border-b border-r border-[rgba(20,40,60,0.12)] p-4 sm:border-b-0 sm:py-[18px] sm:pr-[22px]">
              <div className="font-sans text-[1.75rem] font-extrabold leading-none tracking-tight text-ow-charcoal">
                41<span className="text-base font-bold text-ow-orange">+</span>
              </div>
              <div className="mt-1 text-[0.73rem] font-normal leading-snug text-ow-mid">
                Nights tinkering
                <br />
                on real sites
              </div>
            </div>
            <div className="min-w-[33%] flex-1 border-b border-[rgba(20,40,60,0.12)] p-4 sm:border-b-0 sm:py-[18px] sm:pr-[22px]">
              <div className="font-sans text-[1.75rem] font-extrabold leading-none tracking-tight text-ow-charcoal">
                0<span className="text-base font-bold text-ow-orange"> theory</span>
              </div>
              <div className="mt-1 text-[0.73rem] font-normal leading-snug text-ow-mid">
                Every claim backed
                <br />
                by Search Console
              </div>
            </div>
          </div>
        </div>

        <div className="animate-[fade-up_0.7s_ease_0.66s_forwards] mt-8 flex flex-wrap items-center gap-3 opacity-0">
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 rounded-ow-sm bg-ow-orange px-7 py-[13px] text-[0.88rem] font-bold text-white shadow-none transition hover:-translate-y-0.5 hover:bg-ow-ember hover:shadow-[0_8px_24px_rgba(240,100,0,0.3)]"
          >
            Explore the Lab →
          </Link>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-ow-sm border-[1.5px] border-[rgba(20,40,60,0.18)] bg-transparent px-[26px] py-3 text-[0.88rem] font-medium text-ow-slate transition hover:border-ow-charcoal hover:text-ow-charcoal"
          >
            Read insights
          </Link>
        </div>
      </div>

      <div className="relative z-[2] mt-12 opacity-0 animate-[fade-up_0.9s_ease_0.5s_forwards] lg:mt-0">
        <SearchCardMock />
      </div>
    </section>
  );
}
