"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import VibeMonitor from "@/components/VibeMonitor";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import Experiments from "@/components/Experiments";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Philosophy from "@/components/Philosophy";
import FinalCta from "@/components/FinalCta";

const VALID_SECTIONS = [
  "home",
  "experiments",
  "services",
  "case-studies",
  "blog",
  "contact",
] as const;

type Section = (typeof VALID_SECTIONS)[number];

export default function HomeContent({
  scrollTo,
}: {
  scrollTo?: string;
}) {
  useEffect(() => {
    if (!scrollTo || !VALID_SECTIONS.includes(scrollTo as Section)) return;
    const el = document.getElementById(scrollTo);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [scrollTo]);

  return (
    <>
      <Hero />
      <VibeMonitor />
      <Problem />
      <Approach />
      <Experiments />
      <Services />
      <CaseStudies />
      <Philosophy />
      <FinalCta />
    </>
  );
}
