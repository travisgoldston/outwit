"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type RevealProps = {
  children?: React.ReactNode;
  className?: string;
  /**
   * Milliseconds to delay the reveal once in view.
   * Use small values (0-200) for subtle staggering.
   */
  delayMs?: number;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  const shouldReduceMotion = useMemo(() => prefersReducedMotion(), []);

  useEffect(() => {
    if (shouldReduceMotion) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { root: null, threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [shouldReduceMotion]);

  return (
    <div
      ref={ref}
      className={[
        "motion-reduce:transform-none motion-reduce:transition-none",
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4",
        "transition-all duration-700 ease-out will-change-transform",
        className ?? "",
      ].join(" ")}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}

