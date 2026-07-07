"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SITE_LINKS } from "@/lib/siteContent";

export default function ResumeBubble() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={SITE_LINKS.resume}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download resume PDF"
      className="group fixed top-24 right-3 z-50 flex h-20 w-20 flex-col items-center justify-center gap-0.5 rounded-full border-[3px] border-gold bg-mid/80 text-center shadow-[0_0_24px_rgba(255,215,106,0.45)] backdrop-blur-sm sm:top-28 sm:right-6 sm:h-28 sm:w-28"
      animate={
        reduce
          ? undefined
          : {
              y: [0, -12, 0, 8, 0],
              x: [0, 5, 0, -5, 0],
            }
      }
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08 }}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-gold/40" aria-hidden="true" />
      <span className="font-pixel text-[10px] leading-tight text-gold group-hover:text-cream sm:text-xs">
        RESUME
      </span>

      <span
        role="tooltip"
        className="pixel-panel font-pixel pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap px-2 py-1 text-[9px] text-cream opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        Download Resume
      </span>

      {!reduce && (
        <span className="pointer-events-none absolute -top-1 left-1/2 -z-10" aria-hidden="true">
          <span
            className="absolute h-2 w-2 -translate-x-1/2 rounded-full border border-foam/50 bg-foam/10"
            style={{ animation: "sign-bubble 4.5s ease-in infinite" }}
          />
          <span
            className="absolute left-3 h-1.5 w-1.5 rounded-full border border-foam/50 bg-foam/10"
            style={{ animation: "sign-bubble 5.5s ease-in 1.5s infinite" }}
          />
        </span>
      )}
    </motion.a>
  );
}
