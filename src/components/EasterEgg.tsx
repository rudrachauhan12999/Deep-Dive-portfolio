"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PixelSprite from "./PixelSprite";
import { CHEST_CLOSED, CHEST_OPEN } from "@/lib/sprites";

export default function EasterEgg() {
  const [found, setFound] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setFound(true);
          setOpen(true);
        }}
        aria-label="A half-buried chest in the sand"
        className="group absolute bottom-3 right-3 z-10 h-10 w-10 opacity-30 transition-opacity hover:opacity-90 focus-visible:opacity-90 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
      >
        <PixelSprite
          grid={found ? CHEST_OPEN : CHEST_CLOSED}
          title="Hidden chest"
          className="h-full w-full"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-abyss/85 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="classified-title"
          >
            <motion.div
              className="pixel-panel max-w-md p-6 text-center sm:p-8"
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
            >
              <h2 id="classified-title" className="font-pixel text-sm text-gold crt-glow sm:text-base">
                CLASSIFIED EVIDENCE
              </h2>
              <p className="mt-4 text-lg text-foam sm:text-xl">
                You found the buried chest. Unlocked file: <strong className="text-cream">FrameGuard</strong> —
                a forensic tool for detecting manipulated video frames, built to flag
                deepfake artifacts before they spread.
              </p>
              <p className="mt-3 text-base text-cream/70">
                Full writeup lives in the Treasure Room under Portfolio.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="pixel-btn mt-6 px-4 py-2 text-[10px]"
              >
                CLOSE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
