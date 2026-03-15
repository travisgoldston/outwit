import Image from "next/image";

/** Minimal strategy lab visual: fox logo + desk/charts. Blends on cream. */
export default function HeroVisual() {
  return (
    <div className="relative flex h-[280px] w-full max-w-md items-center justify-center sm:h-[320px] lg:h-[360px]">
      <Image
        src="/assets/logo-icon.png"
        alt=""
        width={200}
        height={200}
        className="relative z-10 h-40 w-40 object-contain sm:h-48 sm:w-48 lg:h-52 lg:w-52"
        priority
      />
      {/* Minimal desk + chart bars - strategy/lab feel */}
      <svg
        className="absolute bottom-0 left-1/2 w-full max-w-xs -translate-x-1/2 text-strategy-navy/20"
        viewBox="0 0 240 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect x="20" y="70" width="200" height="6" rx="2" fill="currentColor" />
        <rect x="20" y="76" width="200" height="20" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="40" y="50" width="24" height="26" rx="2" fill="currentColor" opacity="0.4" />
        <rect x="72" y="35" width="24" height="41" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="104" y="45" width="24" height="31" rx="2" fill="currentColor" opacity="0.4" />
        <rect x="136" y="25" width="24" height="51" rx="2" fill="#E86A1D" opacity="0.6" />
        <rect x="168" y="40" width="24" height="36" rx="2" fill="currentColor" opacity="0.4" />
      </svg>
    </div>
  );
}
