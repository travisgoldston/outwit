import Link from "next/link";

const outwitLinks = [
  { href: "/", label: "Home" },
  { href: "/lab", label: "Lab" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-vibe-bg text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
            <h3 className="text-lg font-bold text-white">Connect</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>
                <a
                  href="mailto:hello@outwit.digital"
                  className="transition-colors hover:text-neon-orange"
                >
                  hello@outwit.digital
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/outwitdotco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neon-orange"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/outwitdotco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neon-orange"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://travisgoldston.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neon-orange"
                >
                  travisgoldston.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/70">
            Outwit — writing, experiments, and marketing notes from Travis Goldston.
          </p>
        </div>
      </div>
    </footer>
  );
}
