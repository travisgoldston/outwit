import Link from "next/link";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-neon-orange px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Outwit your competition?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/95">
          Tell us about your business, and we&apos;ll map the smartest way to turn your website and marketing into a growth system.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-neon-orange shadow-lg transition-all hover:bg-white/95 hover:shadow-xl"
        >
          Start a Strategy Conversation
        </Link>
      </div>
    </section>
  );
}
