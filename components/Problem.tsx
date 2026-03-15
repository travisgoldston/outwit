export default function Problem() {
  const bullets = [
    "More ads don't fix broken strategy",
    "More content doesn't guarantee traffic",
    "More tools don't create better marketing",
  ];

  return (
    <section className="border-t border-strategy-navy/10 bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-deep-gray sm:text-4xl">
          Most marketing wastes time and money.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-deep-gray/85">
          Businesses are told to post more, run more ads, and produce more
          content. But growth rarely comes from doing more. It comes from
          understanding what actually works.
        </p>
        <ul className="mt-10 space-y-4 text-left">
          {bullets.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-deep-gray/90 transition-colors hover:text-strategy-navy"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fox-orange/15 text-fox-orange" aria-hidden>
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-xl font-semibold text-strategy-navy">
          Winning companies don&apos;t outspend competitors. They outthink them.
        </p>
      </div>
    </section>
  );
}
