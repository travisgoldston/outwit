import Link from "next/link";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-cream px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-deep-gray sm:text-4xl">
          Ready to outsmart your competition?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-deep-gray/85">
          Let&apos;s find the growth opportunities your competitors are missing.
        </p>
        <Link
          href="#contact"
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-fox-orange px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-fox-orange/90 hover:shadow-md"
        >
          Start a Strategy Conversation
        </Link>
      </div>
    </section>
  );
}
