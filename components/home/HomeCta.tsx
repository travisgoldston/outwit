import Link from "next/link";

export default function HomeCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ow-charcoal px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="pointer-events-none absolute -bottom-[120px] -right-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(240,100,0,0.2)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute -left-20 -top-[100px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(240,100,0,0.07)_0%,transparent_65%)]" />

      <div className="relative z-[2] mx-auto grid max-w-[1000px] items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div>
          <p className="mb-4 flex items-center gap-2.5 font-mono text-[0.67rem] font-medium uppercase tracking-[0.18em] text-ow-orange">
            <span className="inline-block h-0.5 w-4 rounded-sm bg-ow-orange" />
            Say hello
          </p>
          <h2 className="max-w-[600px] font-sans text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white">
            Want to talk shop about
            <br />
            SEO with <span className="text-ow-orange">receipts</span>?
          </h2>
          <p className="mt-4 max-w-[460px] text-base leading-[1.72] text-white/45">
            Outwit is a public lab—not a pitch deck. Email me for collaborations, questions about an
            experiment, or just to connect.
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-3">
          <a
            href="mailto:hello@outwitdigital.com"
            className="inline-flex items-center gap-2 rounded-ow-sm bg-ow-orange px-8 py-[15px] text-[0.92rem] font-bold text-white whitespace-nowrap transition hover:-translate-y-0.5 hover:bg-ow-ember hover:shadow-[0_8px_28px_rgba(240,100,0,0.35)]"
          >
            Say hello →
          </a>
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 rounded-ow-sm border-[1.5px] border-white/15 bg-transparent px-7 py-[13px] text-[0.88rem] font-medium text-white/50 whitespace-nowrap transition hover:border-white/40 hover:text-white"
          >
            See the experiments first
          </Link>
          <p className="w-full text-center text-[0.74rem] italic text-white/25 lg:text-left">
            No pressure. No pitch deck.
          </p>
        </div>
      </div>
    </section>
  );
}
