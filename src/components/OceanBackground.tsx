"use client";

import { motion, useReducedMotion } from "framer-motion";

const themes = {
  ocean: "from-abyss via-deep to-mid",
  ruins: "from-[#04121c] via-[#0d2f3f] to-[#1a5a6e]",
  treasure: "from-[#1a1006] via-[#3d2410] to-[#6a4420]",
  cave: "from-[#050a12] via-[#12222c] to-[#26343a]",
} as const;

export default function OceanBackground({
  theme = "ocean",
  children,
}: {
  theme?: keyof typeof themes;
  children?: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden bg-gradient-to-b ${themes[theme]}`}
    >
      {/* light shafts */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen" aria-hidden="true">
        {[15, 45, 75].map((left, i) => (
          <motion.div
            key={i}
            className="absolute top-0 h-full w-24 bg-gradient-to-b from-foam/40 to-transparent"
            style={{ left: `${left}%`, transform: "skewX(-8deg)" }}
            animate={reduce ? undefined : { opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* seabed silhouette */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-abyss/80"
        style={{
          clipPath:
            "polygon(0% 40%, 5% 30%, 12% 45%, 20% 25%, 30% 40%, 40% 20%, 50% 38%, 62% 22%, 72% 40%, 82% 28%, 92% 42%, 100% 30%, 100% 100%, 0% 100%)",
        }}
        aria-hidden="true"
      />

      {children}
    </div>
  );
}
