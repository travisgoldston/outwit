import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HashContactRedirect from "@/components/HashContactRedirect";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OUTWIT — SEO & Web That Proves Itself",
  description:
    "Real experiments on real sites—published with hypotheses, methodology, and Search Console data. No theory. No fluff.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.png", sizes: "any", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "OUTWIT — SEO & Web That Proves Itself",
    description:
      "Marketing experiments with real data. SEO, web, and conversion—tested in public.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <HashContactRedirect />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
