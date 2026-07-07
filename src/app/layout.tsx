import type { Metadata } from "next";
import "@fontsource/press-start-2p";
import "@fontsource/vt323";
import "./globals.css";
import HomeButton from "@/components/HomeButton";
import ResumeBubble from "@/components/ResumeBubble";

export const metadata: Metadata = {
  title: "Deep Dive // Pixel Portfolio",
  description:
    "A pixel-art underwater adventure portfolio. Explore About Me, Portfolio, Side Hustles, and Contact by swimming through the reef.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 pixel-btn px-3 py-2 text-xs"
        >
          Skip to content
        </a>
        <HomeButton />
        <ResumeBubble />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
