import Link from "next/link";
import OceanBackground from "./OceanBackground";
import Bubbles from "./Bubbles";
import MiniMap from "./MiniMap";

const ROOMS = [
  { href: "/about", label: "About Me" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/side-hustles", label: "Side Hustles" },
  { href: "/contact", label: "Contact" },
];

export default function RoomShell({
  theme,
  eyebrow,
  title,
  current,
  children,
}: {
  theme: "ruins" | "treasure" | "cave";
  eyebrow: string;
  title: string;
  current: string;
  children: React.ReactNode;
}) {
  return (
    <OceanBackground theme={theme}>
      <Bubbles count={14} />
      <MiniMap current={current} />
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-10 sm:px-8">
        <header className="mb-8">
          <Link
            href="/"
            className="font-pixel text-[10px] text-gold hover:text-foam sm:text-xs"
          >
            ← BACK TO DIVE POINT
          </Link>
          <p className="mt-4 font-pixel text-[10px] text-teal sm:text-xs">{eyebrow}</p>
          <h1 className="mt-2 font-pixel text-lg text-cream crt-glow sm:text-2xl">{title}</h1>
        </header>

        <div className="flex-1">{children}</div>

        <nav
          aria-label="Other rooms"
          className="mt-14 flex flex-wrap justify-center gap-3 border-t-2 border-dashed border-cream/20 pt-6"
        >
          {ROOMS.filter((r) => r.href !== current).map((r) => (
            <Link key={r.href} href={r.href} className="pixel-btn font-pixel px-3 py-2 text-[9px] sm:text-[10px]">
              {r.label}
            </Link>
          ))}
        </nav>
      </div>
    </OceanBackground>
  );
}
