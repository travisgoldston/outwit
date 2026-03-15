import Image from "next/image";

/** Fox logo with neon flicker animation. */
export default function HeroVisual() {
  return (
    <div className="relative flex h-[320px] w-full max-w-lg items-center justify-center sm:h-[380px] lg:h-[440px]">
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
