import type { Metadata } from "next";
import {
  Cinzel,
  Cormorant_Garamond,
  Exo_2,
  Orbitron,
} from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-biology-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const exo2 = Exo_2({
  variable: "--font-biology-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cinzel = Cinzel({
  variable: "--font-music-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-music-body",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Helix",
  description:
    "Free Biology Olympiad and Music Theory education for students around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${exo2.variable} ${cinzel.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
