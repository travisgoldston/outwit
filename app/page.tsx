import Hero from "@/components/Hero";
import VibeMonitor from "@/components/VibeMonitor";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import Experiments from "@/components/Experiments";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Philosophy from "@/components/Philosophy";
import FinalCta from "@/components/FinalCta";

export default function Home() {
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
