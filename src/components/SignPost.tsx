"use client";

import { motion, useReducedMotion } from "framer-motion";
import PixelSprite from "./PixelSprite";
import { SIGN_POST, SEAWEED } from "@/lib/sprites";
import type { Direction } from "@/hooks/useDirectionNav";

export default function SignPost({
  label,
  dir,
  vignette,
  active,
  onSelect,
  registerRef,
}: {
  label: string;
  dir: Direction;
  vignette?: React.ReactNode;
  active: boolean;
  onSelect: (d: Direction) => void;
  registerRef: (el: HTMLButtonElement | null) => void;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex flex-col items-center">
      {vignette}

      {/* seaweed either side of the post */}
      <div className="pointer-events-none absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-24 opacity-80 sm:gap-32">
        <span className="block h-10 w-4 origin-bottom animate-[sway_3.4s_ease-in-out_infinite]">
          <PixelSprite grid={SEAWEED} title="" className="h-full w-full" />
        </span>
        <span className="block h-8 w-3 origin-bottom animate-[sway_2.6s_ease-in-out_infinite_0.4s]">
          <PixelSprite grid={SEAWEED} title="" className="h-full w-full" />
        </span>
      </div>

      <motion.button
        type="button"
        ref={registerRef}
        onClick={() => onSelect(dir)}
        aria-label={`Swim ${dir} to ${label}`}
        className="group relative flex flex-col items-center focus-visible:outline-none"
        animate={reduce ? undefined : { rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.06 }}
        whileFocus={{ scale: 1.06 }}
      >
        <div
          className={`relative h-24 w-40 drop-shadow-[4px_5px_0_rgba(0,0,0,0.5)] transition-[filter] duration-200 sm:h-32 sm:w-56 ${
            active ? "brightness-125" : "group-hover:brightness-125 group-focus-visible:brightness-125"
          }`}
        >
          <PixelSprite grid={SIGN_POST} title="" className="h-full w-full" />
          <span className="font-pixel absolute inset-x-0 top-[22%] flex flex-col items-center gap-[8%] text-center text-[10px] leading-tight text-[#2b1a10] sm:text-sm">
            {label.split(" ").map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </span>
        </div>
        <span
          className={`pointer-events-none absolute -inset-3 -z-10 rounded-full bg-gold/0 blur-md transition-colors duration-300 group-hover:bg-gold/25 group-focus-visible:bg-gold/25 ${
            active ? "bg-gold/25" : ""
          }`}
          aria-hidden="true"
        />

        {!reduce && (
          <div className="pointer-events-none absolute -top-2 left-1/2 -z-10" aria-hidden="true">
            <span
              className="absolute h-2 w-2 rounded-full border border-foam/50 bg-foam/10"
              style={{ animation: "sign-bubble 5s ease-in infinite" }}
            />
            <span
              className="absolute left-3 h-1.5 w-1.5 rounded-full border border-foam/50 bg-foam/10"
              style={{ animation: "sign-bubble 6.5s ease-in 2s infinite" }}
            />
          </div>
        )}
      </motion.button>
    </div>
  );
}
