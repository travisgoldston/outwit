import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fox-orange": "#E86A1D",
        "neon-orange": "#FF5F1F",
        cream: "#FDF7F0",
        "deep-gray": "#2C2C2C",
        "strategy-navy": "#1F3A5F",
        "vibe-bg": "#0f1115",
        /** Outwit v2 brand kit (light UI) */
        ow: {
          charcoal: "#14283C",
          slate: "#283C50",
          orange: "#F06400",
          ember: "#DC3C00",
          sand: "#F0DCC8",
          cream: "#FDF8F4",
          mid: "#7A8FA0",
          "mid-light": "#A8BCC8",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        ow: "0 4px 20px rgba(20, 40, 60, 0.09)",
        "ow-lg": "0 12px 48px rgba(20, 40, 60, 0.12)",
        "ow-sm": "0 1px 4px rgba(20, 40, 60, 0.07)",
      },
      borderRadius: {
        ow: "10px",
        "ow-sm": "6px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
        "pulse-kicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        tick: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-up": "fade-up 0.7s ease forwards",
        "fade-up-delay": "fade-up 0.7s ease 0.15s forwards",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "pulse-kicker": "pulse-kicker 2s ease-in-out infinite",
        ticker: "tick 30s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
