import Image from "next/image";

/** Minimal strategy lab visual: fox logo prominently displayed. Blends on cream. */
export default function HeroVisual() {
  return (
    <div className="relative flex h-[320px] w-full max-w-lg items-center justify-center sm:h-[380px] lg:h-[440px]">
      <Image
        src="/assets/logo-icon.png"
        alt=""
        width={320}
        height={320}
        className="relative z-10 h-48 w-48 object-contain sm:h-56 sm:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72"
        priority
      />
      {/* Subtle chart bars - strategy/lab feel */}
      <svg
        className="absolute bottom-4 left-1/2 w-full max-w-[200px] -translate-x-1/2 text-strategy-navy/15"
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect x="24" y="40" width="20" height="24" rx="3" fill="currentColor" />
        <rect x="52" y="28" width="20" height="36" rx="3" fill="currentColor" />
        <rect x="80" y="20" width="20" height="44" rx="3" fill="#E86A1D" opacity="0.5" />
        <rect x="108" y="32" width="20" height="32" rx="3" fill="currentColor" />
        <rect x="136" y="24" width="20" height="40" rx="3" fill="currentColor" />
      </svg>
    </div>
  );
}
