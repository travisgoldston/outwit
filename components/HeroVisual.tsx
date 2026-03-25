import Image from "next/image";

/** Fox logo with neon flicker animation and soft aura glow behind it. */
export default function HeroVisual() {
  return (
    <div className="relative flex h-[280px] w-full max-w-lg items-center justify-center sm:h-[320px] lg:h-[380px] lg:max-w-none">
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
        className="neon-flicker relative z-10 h-44 w-44 object-contain sm:h-52 sm:w-52 lg:h-60 lg:w-60 xl:h-72 xl:w-72"
        priority
      />
    </div>
  );
}
