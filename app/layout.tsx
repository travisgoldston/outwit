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
  title: "Outwit — Travis Goldston",
  description:
    "Outwit the ordinary—strategy, experiments, and marketing craft. Websites, SEO, and growth systems from Travis Goldston.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Outwit — Travis Goldston",
    description:
      "Creative playground for vibe coding, digital marketing experiments, and insights—plus the full Outwit growth story.",
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
