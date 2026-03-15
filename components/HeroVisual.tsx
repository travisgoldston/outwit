import Image from "next/image";

/** Fox logo with neon flicker animation and soft aura glow behind it. */
export default function HeroVisual() {
  return (
    <div className="relative flex h-[320px] w-full max-w-lg items-center justify-center sm:h-[380px] lg:h-[440px]">
      {/* Soft radial aura centered behind the neon logo */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          className="h-[120%] w-[120%] max-w-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 95, 31, 0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <Image
        src="/assets/logo-icon.png"
        alt="Outwit"
        width={320}
        height={320}
        className="neon-flicker relative z-10 h-48 w-48 object-contain sm:h-56 sm:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72"
        priority
      />
    </div>
  );
}
