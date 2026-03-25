import Link from "next/link";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-neon-orange px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Want an unfair advantage in North Dallas?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/95">
          Start with the Growth Plan. We’ll map the exact system to outrank competitors and turn
          high-intent search into inbound calls and booked jobs.
        </p>
        <Link
          href="/growth-plan"
          className="mt-10 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-neon-orange shadow-lg transition-all hover:bg-white/95 hover:shadow-xl"
        >
          Get the Growth Plan
        </Link>
      </div>
    </section>
  );
}
