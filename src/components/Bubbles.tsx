"use client";

import { useMemo } from "react";

interface BubbleDef {
  left: number;
  size: number;
  delay: number;
  duration: number;
}

interface PlanktonDef {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

export default function Bubbles({ count = 22 }: { count?: number }) {
  const bubbles = useMemo<BubbleDef[]>(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        size: 4 + Math.random() * 14,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
      })),
    [count]
  );

  const plankton = useMemo<PlanktonDef[]>(
    () =>
      Array.from({ length: Math.round(count / 2) }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1.5 + Math.random() * 2,
        delay: Math.random() * 6,
        duration: 5 + Math.random() * 6,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {bubbles.map((b, i) => (
        <span
          key={`b-${i}`}
          className="absolute bottom-0 rounded-full border-2 border-foam/60 bg-foam/10"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            animation: `rise ${b.duration}s linear ${b.delay}s infinite`,
          }}
        />
      ))}
      {plankton.map((p, i) => (
        <span
          key={`p-${i}`}
          className="absolute rounded-full bg-foam/40"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animation: `bob ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
