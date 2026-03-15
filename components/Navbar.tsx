"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#experiments", label: "Experiments" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

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
        scrolled ? "bg-cream/95 backdrop-blur-sm shadow-sm" : "bg-cream"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
          aria-label="Outwit home"
        >
          <Image
            src="/assets/logo-icon.png"
            alt="Outwit"
            width={44}
            height={44}
            className="h-10 w-10 object-contain lg:h-11 lg:w-11"
          />
          <span className="text-xl font-bold tracking-tight text-strategy-navy lg:text-2xl">
            Outwit
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-deep-gray transition-colors hover:text-fox-orange"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#contact"
            className="rounded-lg bg-strategy-navy px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-strategy-navy/90 hover:shadow-md"
          >
            Get a Strategy Call
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex flex-col gap-1.5 rounded p-2 text-deep-gray md:hidden"
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
        <div className="border-t border-strategy-navy/10 bg-cream px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm font-medium text-deep-gray hover:text-fox-orange"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="inline-block rounded-lg bg-strategy-navy px-5 py-2.5 text-sm font-semibold text-white"
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
