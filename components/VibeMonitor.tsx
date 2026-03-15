export default function VibeMonitor() {
  return (
    <section className="border-t border-white/10 bg-vibe-bg px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-sm">
            <p className="font-mono text-sm uppercase tracking-wider text-white/60">
              Lines of Code
            </p>
            <p className="mt-2 font-mono text-2xl font-semibold tabular-nums text-white lg:text-3xl">
              2,845
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-sm">
            <p className="font-mono text-sm uppercase tracking-wider text-white/60">
              Nights Tinker&apos;d
            </p>
            <p className="mt-2 font-mono text-2xl font-semibold tabular-nums text-white lg:text-3xl">
              41
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-sm">
            <p className="font-mono text-sm uppercase tracking-wider text-white/60">
              Next Baby
            </p>
            <p className="mt-2 font-mono text-xl font-semibold text-white lg:text-2xl">
              <span className="animate-pulse-soft">[LOADING...]</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
