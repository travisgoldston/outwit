import Image from "next/image";
import Link from "next/link";

export default function HomeAboutStrip() {
  return (
    <section className="border-t border-[rgba(20,40,60,0.12)] bg-ow-cream px-5 pb-0 pt-16 sm:px-8 lg:px-12 lg:pt-20">
      <div className="mx-auto grid max-w-[960px] items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
        <div className="mx-auto flex h-[180px] w-[180px] shrink-0 items-center justify-center overflow-hidden rounded-[20px] border border-[rgba(20,40,60,0.18)] bg-white p-5 shadow-ow sm:mx-0">
          <Image
            src="/assets/logo-icon.png"
            alt="Outwit"
            width={200}
            height={200}
            className="h-full w-full object-contain"
            priority
          />
        </div>
        <div>
          <p className="text-2xl font-extrabold tracking-tight text-ow-charcoal">Travis Goldston.</p>
          <p className="mt-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ow-orange">
            Founder · Outwit
          </p>
          <p className="mt-4 text-[0.96rem] leading-[1.82] text-ow-mid">
            I have way too many hobbies. Vibe coding is my crack cocaine.{" "}
            <strong className="font-semibold text-ow-slate">Outwit is where I show my work</strong>{" "}
            — real experiments, real data, no theory.
          </p>
          <p className="mt-2 text-[0.96rem] leading-[1.82] text-ow-mid">
            I build sites, run SEO tests, and document what works (and doesn&apos;t) in public. The
            lab isn&apos;t a content strategy—it&apos;s how I stay honest about what actually moves
            the needle.
          </p>
          <p className="mt-2 text-[0.96rem] leading-[1.82] text-ow-mid">
            Based in North Texas. Running live experiments and building brands in the open.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href="https://travisgoldston.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-ow-sm border-[1.5px] border-[rgba(20,40,60,0.18)] px-3.5 py-1.5 text-[0.8rem] font-semibold text-ow-slate transition hover:border-ow-orange hover:text-ow-orange"
            >
              travisgoldston.com →
            </a>
            <a
              href="mailto:hello@outwitdigital.com"
              className="inline-flex items-center gap-1.5 rounded-ow-sm border-[1.5px] border-[rgba(20,40,60,0.18)] px-3.5 py-1.5 text-[0.8rem] font-semibold text-ow-slate transition hover:border-ow-orange hover:text-ow-orange"
            >
              hello@outwitdigital.com
            </a>
            <a
              href="https://x.com/outwitdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-ow-sm border-[1.5px] border-[rgba(20,40,60,0.18)] px-3.5 py-1.5 text-[0.8rem] font-semibold text-ow-slate transition hover:border-ow-orange hover:text-ow-orange"
            >
              @outwitdigital
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 rounded-ow-sm border-[1.5px] border-[rgba(20,40,60,0.18)] px-3.5 py-1.5 text-[0.8rem] font-semibold text-ow-slate transition hover:border-ow-orange hover:text-ow-orange"
            >
              Full about →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
