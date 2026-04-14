import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Meet Travis Goldston. Outwit is a North Texas SEO and web design agency backed by a public lab of real experiments and Search Console data.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[960px] items-start gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
        <div className="mx-auto flex h-[180px] w-[180px] shrink-0 items-center justify-center overflow-hidden rounded-[20px] border border-[rgba(20,40,60,0.18)] bg-white p-5 shadow-ow lg:mx-0">
          <Image
            src="/assets/logo-icon.png"
            alt="Outwit"
            width={200}
            height={200}
            className="h-full w-full object-contain"
            priority
          />
        </div>
        <div>
          <p className="ow-label">About</p>
          <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
            Hi, I&apos;m Travis.
          </h1>
          <p className="mt-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ow-orange">
            Outwit
          </p>

          <div className="mt-8 max-w-none space-y-6 text-base leading-relaxed text-ow-mid">
            <p>
              I grew up in North Texas. I built my career in digital marketing: strategy, SEO,
              content, and the messy middle where data meets judgment.
            </p>
            <p>
              These days I&apos;m building a portfolio of brands and businesses—not just advising
              from the sidelines.
            </p>
            <p>
              <strong>Outwit is my personal marketing lab.</strong> I run SEO and marketing
              experiments on real sites, publish the data, and write down what I learned—so the work
              is visible and the conclusions are earned.
            </p>
            <p>
              This site isn&apos;t a pitch deck. I publish{" "}
              <Link href="/insights" className="font-semibold text-ow-orange no-underline hover:underline">
                insights
              </Link>
              , share tests in the{" "}
              <Link href="/lab" className="font-semibold text-ow-orange no-underline hover:underline">
                Lab
              </Link>
              , and show work in public. I believe in showing your work. That&apos;s what this site
              is for.
            </p>
          </div>

          <p className="mt-12 border-t border-[rgba(20,40,60,0.12)] pt-10 text-base leading-relaxed text-ow-mid">
            If you&apos;re a local business that needs help getting found on Google, that&apos;s what
            Outwit does.{" "}
            <Link href="/services" className="font-semibold text-ow-orange no-underline hover:underline">
              Check out our services
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-ow-orange no-underline hover:underline">
              book a strategy call
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
