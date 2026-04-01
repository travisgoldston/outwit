import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Outwit — Marketing experiments with real data",
  description:
    "I build sites, run SEO experiments, and document what actually works. No theory. No fluff. Just tested, shown-in-public proof.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Outwit — Marketing experiments with real data",
    description:
      "I build sites, run SEO experiments, and document what actually works. No theory. No fluff. Just tested, shown-in-public proof.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-vibe-bg text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
