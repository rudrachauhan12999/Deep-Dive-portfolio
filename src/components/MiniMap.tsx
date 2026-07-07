"use client";

import Link from "next/link";

const NODES: { href: string; label: string; short: string; pos: string }[] = [
  { href: "/about", label: "About Me", short: "A", pos: "top-0 left-1/2 -translate-x-1/2" },
  { href: "/portfolio", label: "Portfolio", short: "P", pos: "top-1/2 right-0 -translate-y-1/2" },
  { href: "/side-hustles", label: "Side Hustles", short: "S", pos: "bottom-0 left-1/2 -translate-x-1/2" },
  { href: "/contact", label: "Contact", short: "C", pos: "top-1/2 left-0 -translate-y-1/2" },
];

export default function MiniMap({ current }: { current: string }) {
  const currentNode = NODES.find((n) => n.href === current);

  return (
    <div
      className="pixel-panel fixed top-4 left-4 z-40 hidden w-28 p-2 sm:block"
      aria-label="Site map"
    >
      <p className="font-pixel mb-1 text-center text-[8px] text-cream/60">MAP</p>
      <div className="relative h-24 w-24">
        {/* compass guide lines */}
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cream/10" aria-hidden="true" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-cream/10" aria-hidden="true" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foam/50" aria-hidden="true" />

        {NODES.map((n) => {
          const isCurrent = n.href === current;
          return (
            <Link
              key={n.href}
              href={n.href}
              title={n.label}
              className={`absolute flex h-7 w-7 items-center justify-center border-2 text-[11px] font-pixel transition-colors ${n.pos} ${
                isCurrent
                  ? "border-gold bg-gold text-ink shadow-[0_0_10px_rgba(255,215,106,0.7)]"
                  : "border-cream/70 bg-deep text-cream/90 hover:border-gold hover:text-gold"
              }`}
              aria-current={isCurrent ? "page" : undefined}
            >
              {n.short}
            </Link>
          );
        })}
      </div>
      {currentNode && (
        <p className="font-pixel mt-2 text-center text-[8px] text-gold">{currentNode.label}</p>
      )}
    </div>
  );
}
