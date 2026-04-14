"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/lab", label: "Lab" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-[200] flex h-[68px] items-center justify-between border-b border-[rgba(20,40,60,0.12)] bg-[rgba(253,248,244,0.95)] px-5 backdrop-blur-[18px] lg:px-12">
      <Link href="/" className="flex items-center gap-2.5 no-underline" aria-label="Outwit home">
        <Image
          src="/assets/logo-icon.png"
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
        />
        <span className="font-sans text-[1.2rem] font-extrabold tracking-tight text-ow-charcoal">
          OUT<span className="text-ow-orange">WIT</span>
        </span>
      </Link>

      <ul className="hidden list-none items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[0.84rem] font-medium tracking-wide text-ow-mid transition hover:text-ow-charcoal"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/#contact"
            scroll={true}
            className="text-[0.84rem] font-medium tracking-wide text-ow-mid transition hover:text-ow-charcoal"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden items-center gap-3 md:flex">
        <Link
          href="/lab"
          className="whitespace-nowrap rounded-full border border-[rgba(240,100,0,0.22)] bg-[rgba(240,100,0,0.1)] px-3 py-1.5 font-mono text-[0.67rem] tracking-[0.06em] text-ow-orange transition hover:bg-[rgba(240,100,0,0.16)]"
        >
          🦊 Lab is open
        </Link>
        <a
          href="mailto:hello@outwit.digital"
          className="rounded-ow-sm bg-ow-charcoal px-[22px] py-2 text-[0.82rem] font-semibold tracking-wide text-white transition hover:-translate-y-px hover:bg-ow-slate"
        >
          Say hello →
        </a>
      </div>

      <button
        type="button"
        className="flex flex-col gap-1.5 rounded p-2 text-ow-charcoal md:hidden"
        onClick={() => setMobileOpen((o) => !o)}
        aria-expanded={mobileOpen}
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-6 bg-current transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`h-0.5 w-6 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
        <span
          className={`h-0.5 w-6 bg-current transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-[68px] border-b border-[rgba(20,40,60,0.12)] bg-ow-cream px-5 py-4 shadow-ow md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-[0.9rem] font-medium text-ow-charcoal"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                scroll
                className="block text-[0.9rem] font-medium text-ow-charcoal"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <a
                href="mailto:hello@outwit.digital"
                className="inline-block rounded-ow-sm bg-ow-orange px-5 py-2.5 text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Say hello →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
