import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outwit — Start Your Project",
  description:
    "Start your project with Outwit. Tell us about your business, have a strategy conversation, and get a clear proposal with next steps.",
};

const steps = [
  {
    step: "01",
    title: "Tell us about your project",
    copy: "Share where you are today, what you’re trying to achieve, and where you feel things are stuck.",
  },
  {
    step: "02",
    title: "Strategy conversation",
    copy: "We’ll have a focused call to clarify your goals, challenges, and the smartest way to move forward.",
  },
  {
    step: "03",
    title: "Proposal and next steps",
    copy: "You’ll get a clear scope, timeline, and investment—no jargon, no surprise line items.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Start your project.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Tell us about your business, and we&apos;ll map the smartest way to turn your website,
          SEO, and marketing into a growth system.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-4xl grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.step}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
              {step.step}
            </span>
            <h2 className="mt-3 text-base font-semibold text-slate-900">{step.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.copy}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-4xl grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(0,1.2fr)]">
        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Project details</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Share as much as you comfortably can. We&apos;ll reply within one business day with
            next steps.
          </p>
          <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-neon-orange/80"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-neon-orange/80"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-slate-700">
                Company
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-neon-orange/80"
                placeholder="Company or brand name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-slate-700">
                What do you need help with?
              </label>
              <textarea
                className="mt-2 min-h-[120px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-neon-orange/80"
                placeholder="Share a quick snapshot of your current website, marketing, and goals."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-700">
                  Approximate budget
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-neon-orange/80"
                  placeholder="$5k–$15k, $15k–$40k, etc."
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-700">
                  Ideal timeline
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-neon-orange/80"
                  placeholder="When would you like to launch?"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-neon-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon-orange/25 transition-all hover:bg-neon-orange/90"
            >
              Submit project details
            </button>
          </form>
        </section>

        <aside className="space-y-6 rounded-2xl border border-transparent p-1 lg:p-0">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Prefer email?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              You can also reach Outwit directly at{" "}
              <a
                href="mailto:hello@outwit.com"
                className="font-semibold text-neon-orange hover:text-neon-orange/80"
              >
                hello@outwit.com
              </a>
              . Share a link to your current site and a short note about what you&apos;re hoping to
              improve.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">What happens next</h3>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
              <li>• We read every submission carefully—no junior intake bots.</li>
              <li>• If it&apos;s a fit, we&apos;ll reply within one business day.</li>
              <li>• You&apos;ll get a clear agenda for a strategy conversation, not a vague sales call.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

