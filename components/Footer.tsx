import Link from "next/link";

const outwitLinks = [
  { href: "/", label: "Home" },
  { href: "/lab", label: "Lab" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

const workLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/contact", label: "Contact" },
];

const footerLinkClass = "link-underline-ltr text-white/80";

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
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Work</h3>
            <ul className="mt-4 space-y-3">
              {workLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="mailto:hello@outwit.digital" className={footerLinkClass}>
                  hello@outwit.digital
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/outwitdotco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClass}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/outwitdotco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClass}
                >
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/70">
            <span className="mr-1.5" aria-hidden>
              🦊
            </span>
            Made with <span aria-hidden>❤️</span> by{" "}
            <a
              href="https://travisgoldston.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline-ltr text-white/90"
            >
              Travis Goldston
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
