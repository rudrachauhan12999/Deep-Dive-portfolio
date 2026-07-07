"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

export default function Sparkles({ count = 6, className = "" }: { count?: number; className?: string }) {
  const reduce = useReducedMotion();
  const sparks = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        top: 10 + Math.random() * 80,
        left: 10 + Math.random() * 80,
        size: 4 + Math.random() * 6,
        delay: Math.random() * 2,
        duration: 1.6 + Math.random() * 1.4,
      })),
    [count]
  );

  if (reduce) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {sparks.map((s, i) => (
        <span
          key={i}
          className="absolute block bg-gold"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
