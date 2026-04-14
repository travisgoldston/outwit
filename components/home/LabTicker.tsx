const ITEMS = [
  { tag: "AI Content", text: "Can it rank? We tested it." },
  { tag: "New Domain", text: "0 to traffic — how long, really?" },
  { tag: "$200 Niche Site", text: "Can it make money? Data's in." },
  { tag: "City Pages", text: "Do they rank or sit ignored?" },
  { tag: "Local SEO Agency", text: "Building one live. Posting screenshots." },
  { tag: "Next Test", text: "Coming soon. Real data only." },
];

export default function LabTicker() {
  const row = (
    <>
      {ITEMS.map((item) => (
        <span
          key={item.tag + item.text}
          className="inline-flex items-center gap-2.5 whitespace-nowrap px-7 font-mono text-[0.68rem] tracking-[0.06em] text-white/30"
        >
          <span className="font-medium text-ow-orange">{item.tag}</span>
          <span className="inline-block h-[3px] w-[3px] rounded-full bg-white/20" />
          {item.text}
        </span>
      ))}
    </>
  );

  return (
    <div className="overflow-hidden border-t border-white/5 bg-ow-charcoal py-3">
      <div className="flex w-max animate-ticker">{row}{row}</div>
    </div>
  );
}
