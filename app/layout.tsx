import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HashRedirect from "@/components/HashRedirect";

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
  title: "Outwit — Smarter Marketing Through Strategy and Experimentation",
  description:
    "A clever digital marketing strategy lab that helps companies outsmart growth problems. Smart strategy, experiments, and growth systems — not brute force.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Outwit — Outsmart Your Growth",
    description:
      "Smart marketing isn't about doing more. It's about doing the right things. Strategy, experiments, and smarter digital marketing.",
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
        <HashRedirect />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
