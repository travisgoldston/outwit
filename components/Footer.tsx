import Link from "next/link";

const outwitLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/who-we-help", label: "Who We Help" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/lab", label: "Lab" },
  { href: "/insights", label: "Insights" },
];

const resourceLinks = [
  { href: "/lab", label: "Marketing Experiments" },
  { href: "/insights", label: "SEO & Strategy Insights" },
  { href: "/local-seo/north-dallas", label: "North Dallas Geo Strategy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-vibe-bg text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-white">Outwit</h3>
            <ul className="mt-4 space-y-3">
              {outwitLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-neon-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Resources</h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-neon-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>
                <a href="mailto:hello@outwit.com" className="hover:text-neon-orange transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/outwitdotco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon-orange transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/outwitdotco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon-orange transition-colors"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/70">
            Outwit — Smarter marketing through strategy and experimentation.
          </p>
          <p className="mt-3 text-sm text-white/60">
            🦊 Made with <span className="inline-block align-middle">♥</span> by{" "}
            <a
              href="https://travisgoldston.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition-colors hover:text-neon-orange"
            >
              Travis Goldston
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
