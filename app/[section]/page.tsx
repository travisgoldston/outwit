import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

const VALID_SECTIONS = [
  "home",
  "experiments",
  "services",
  "case-studies",
  "blog",
  "contact",
];

const SECTION_LABELS: Record<string, string> = {
  home: "Home",
  experiments: "Experiments",
  services: "Services",
  "case-studies": "Case Studies",
  blog: "Blog",
  contact: "Contact",
};

const sharedDescription =
  "A clever digital marketing strategy lab that helps companies outsmart growth problems. Smart strategy, experiments, and growth systems — not brute force.";

type Props = { params: Promise<{ section: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params;
  if (!VALID_SECTIONS.includes(section)) {
    return { title: "Outwit — Not Found" };
  }
  const label = SECTION_LABELS[section];
  return {
    title: `Outwit — ${label}`,
    description: sharedDescription,
    openGraph: {
      title: `Outwit — ${label}`,
      description: sharedDescription,
    },
  };
}

export default async function SectionPage({ params }: Props) {
  const { section } = await params;
  if (!VALID_SECTIONS.includes(section)) notFound();
  return <HomeContent scrollTo={section} />;
}
