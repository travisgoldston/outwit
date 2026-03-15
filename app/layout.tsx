import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Outwit — Smarter Marketing Through Strategy and Experimentation",
  description:
    "A clever digital marketing strategy lab that helps companies outsmart growth problems. Smart strategy, experiments, and growth systems — not brute force.",
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
