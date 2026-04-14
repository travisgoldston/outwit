import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(20,40,60,0.12)] bg-ow-cream px-5 pb-8 pt-14 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
        <div>
          <div className="mb-2.5 flex items-center gap-2">
            <Image
              src="/assets/logo-icon.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="font-sans text-[1.1rem] font-extrabold tracking-tight text-ow-charcoal">
              OUT<span className="text-ow-orange">WIT</span>
            </span>
          </div>
          <p className="max-w-[230px] text-[0.84rem] leading-relaxed text-ow-mid">
            Marketing experiments with real data. SEO, web, and notes from the lab—North Texas.
          </p>
        </div>

        <div>
          <h4 className="mb-3.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ow-charcoal">
            Lab
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/lab" className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal">
                All experiments
              </Link>
            </li>
            <li>
              <Link
                href="/lab/can-ai-content-rank-on-google"
                className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal"
              >
                AI content
              </Link>
            </li>
            <li>
              <Link
                href="/lab/testing-city-pages-for-local-seo"
                className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal"
              >
                Local SEO
              </Link>
            </li>
            <li>
              <Link
                href="/lab/can-a-200-niche-site-make-money"
                className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal"
              >
                Niche sites
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ow-charcoal">
            Insights
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/insights"
                className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal"
              >
                All articles
              </Link>
            </li>
            <li>
              <Link
                href="/insights/how-long-does-seo-take"
                className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal"
              >
                SEO
              </Link>
            </li>
            <li>
              <Link
                href="/insights/how-much-should-a-website-cost-in-2026"
                className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal"
              >
                Web design
              </Link>
            </li>
            <li>
              <Link
                href="/insights/what-makes-a-high-converting-website"
                className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal"
              >
                Conversion
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ow-charcoal">
            Connect
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/about" className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal">
                About
              </Link>
            </li>
            <li>
              <Link href="/#contact" scroll className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="mailto:hello@outwit.digital"
                className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal"
              >
                hello@outwit.digital
              </a>
            </li>
            <li>
              <a
                href="https://x.com/outwitdotco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal"
              >
                @outwitdotco
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/outwitdotco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.84rem] text-ow-mid transition hover:text-ow-charcoal"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-[rgba(20,40,60,0.12)] pt-6 sm:flex-row">
        <p className="font-mono text-[0.63rem] tracking-[0.07em] text-ow-mid/70">
          © {new Date().getFullYear()} OUTWIT Digital · North Texas
        </p>
        <p className="font-mono text-[0.63rem] tracking-[0.07em] text-ow-mid/70">
          <span aria-hidden>🦊</span> Made by{" "}
          <a
            href="https://travisgoldston.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ow-charcoal underline decoration-[rgba(20,40,60,0.25)] underline-offset-2 transition hover:text-ow-orange"
          >
            Travis Goldston
          </a>
        </p>
      </div>
    </footer>
  );
}
