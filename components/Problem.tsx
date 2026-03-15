const bullets = [
  {
    title: "More ads don't fix broken strategy",
    icon: (
      <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M18 9l-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "More content doesn't guarantee traffic",
    icon: (
      <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    title: "More tools don't create better marketing",
    icon: (
      <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section className="border-t border-white/10 bg-vibe-bg px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Most marketing wastes time and money.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/80">
          Businesses are told to post more, run more ads, and produce more content. Growth rarely comes from doing more. It comes from understanding what actually works.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {bullets.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-orange/20 text-neon-orange">
                {item.icon}
              </span>
              <p className="mt-4 font-medium text-white/90">{item.title}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 text-center text-xl font-semibold text-white/90">
          Winning companies don&apos;t outspend competitors. They outthink them.
        </p>
      </div>
    </section>
  );
}
