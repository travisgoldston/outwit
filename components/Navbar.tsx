"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/lab", label: "Lab" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

const navLinkClass =
  "text-sm font-medium text-white/80 decoration-neon-orange decoration-2 underline-offset-[6px] transition-all hover:underline focus-visible:underline focus-visible:outline-none";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-vibe-bg/95 backdrop-blur-md border-b border-white/5" : "bg-vibe-bg"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-90"
          aria-label="Outwit home"
        >
          <Image
            src="/assets/logo-icon.png"
            alt="Outwit"
            width={44}
            height={44}
            className="h-10 w-10 object-contain lg:h-11 lg:w-11"
          />
          <span className="text-xl font-bold tracking-tight text-white lg:text-2xl">
            Outwit
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={navLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="shrink-0 rounded-lg bg-neon-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-neon-orange/20 transition-all hover:bg-neon-orange/90"
          >
            Get a Strategy Call
          </Link>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 rounded p-2 text-white md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-current transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-vibe-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block w-fit ${navLinkClass}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-neon-orange px-5 py-2.5 text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get a Strategy Call
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
