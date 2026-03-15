"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const VALID_SECTIONS = [
  "home",
  "experiments",
  "services",
  "case-studies",
  "blog",
  "contact",
];

export default function HashRedirect() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only on the root page: if URL has a section hash, replace with path so we never show #
    if (pathname !== "/") return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const section = hash.split("/")[0];
    if (VALID_SECTIONS.includes(section)) {
      router.replace(`/${section}`, { scroll: false });
    }
  }, [pathname, router]);

  return null;
}
