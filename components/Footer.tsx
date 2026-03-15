import Link from "next/link";

const outwitLinks = [
  { href: "#home", label: "About" },
  { href: "#experiments", label: "Experiments" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#blog", label: "Blog" },
];

const resourceLinks = [
  { href: "#experiments", label: "Marketing Experiments" },
  { href: "#blog", label: "SEO Insights" },
  { href: "#services", label: "Growth Strategy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-strategy-navy/10 bg-deep-gray text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-white">Outwit</h3>
            <ul className="mt-4 space-y-3">
              {outwitLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-fox-orange"
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
                    className="text-white/80 transition-colors hover:text-fox-orange"
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
                <a href="mailto:hello@outwit.com" className="hover:text-fox-orange transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fox-orange transition-colors">
                  Twitter / LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/70">
          Outwit — Smarter marketing through strategy and experimentation.
        </p>
        <p className="mt-4 text-center text-sm text-white/60">
          a thought project by{" "}
          <a
            href="https://boldspark.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 transition-colors hover:text-fox-orange"
          >
            boldspark
          </a>{" "}
          ⚡
        </p>
      </div>
    </footer>
  );
}
