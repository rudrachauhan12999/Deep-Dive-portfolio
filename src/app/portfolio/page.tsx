"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoomShell from "@/components/RoomShell";
import PixelSprite from "@/components/PixelSprite";
import Sparkles from "@/components/Sparkles";
import { CHEST_CLOSED, CHEST_OPEN } from "@/lib/sprites";
import { PROJECTS } from "@/lib/siteContent";

export default function PortfolioPage() {
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!opened) return;
    function handler(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        e.preventDefault();
        setActive((a) => (a + 1) % PROJECTS.length);
      } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        e.preventDefault();
        setActive((a) => (a - 1 + PROJECTS.length) % PROJECTS.length);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setFlipped((f) => ({ ...f, [active]: !f[active] }));
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, opened]);

  return (
    <RoomShell theme="treasure" eyebrow="TREASURE ROOM" title="PORTFOLIO" current="/portfolio">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="chest"
            className="flex flex-col items-center gap-6 py-16"
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="relative h-44 w-52">
              <motion.span
                className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gold/35 blur-2xl"
                animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.9, 1.15, 0.9] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <Sparkles count={6} />
              <motion.button
                type="button"
                onClick={() => setOpened(true)}
                className="relative h-full w-full focus-visible:outline-none"
                aria-label="Open the treasure chest to reveal projects"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <PixelSprite grid={CHEST_CLOSED} title="Treasure chest" className="h-full w-full" />
              </motion.button>
            </div>
            <p className="font-pixel text-xs text-gold sm:text-sm">CLICK THE CHEST</p>
            <p className="text-lg text-foam sm:text-xl">to reveal what&apos;s inside</p>
          </motion.div>
        ) : (
          <motion.div key="reveal" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="relative mx-auto mb-10 h-36 w-44">
              <motion.span
                className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gold/45 blur-2xl"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: [0.95, 0.55], scale: [1.35, 1] }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                aria-hidden="true"
              />
              <Sparkles count={12} />
              <motion.div
                className="relative h-full w-full"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "backOut" }}
              >
                <PixelSprite grid={CHEST_OPEN} title="Open treasure chest" className="h-full w-full" />
              </motion.div>
            </div>

            <p className="mb-8 text-center text-lg text-foam sm:text-xl">
              Use ← → (or A/D) to pick a project, Enter/Space to flip it. Or click a card.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PROJECTS.map((p, i) => {
                const isFlipped = !!flipped[i];
                const isActive = active === i;
                return (
                  <motion.div
                    key={p.title}
                    style={{ perspective: 1000 }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setActive(i);
                        setFlipped((f) => ({ ...f, [i]: !f[i] }));
                      }}
                      aria-pressed={isFlipped}
                      aria-label={`${p.title} project card, ${isFlipped ? "showing details" : "showing summary"}`}
                      className={`relative block h-64 w-full text-left ${
                        isActive ? "ring-4 ring-gold" : ""
                      }`}
                    >
                      <motion.div
                        className="relative h-full w-full"
                        style={{ transformStyle: "preserve-3d" }}
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Front */}
                        <div
                          className="pixel-panel absolute inset-0 flex flex-col items-center justify-center gap-3 p-5"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <h3 className="font-pixel text-sm text-gold">{p.title}</h3>
                          <p className="text-lg text-foam">{p.tagline}</p>
                          <p className="text-base text-cream/60">[ Enter to open ]</p>
                        </div>

                        {/* Back */}
                        <div
                          className="pixel-panel absolute inset-0 flex flex-col justify-between p-5"
                          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                        >
                          <div>
                            <h3 className="font-pixel text-xs text-gold">{p.title}</h3>
                            <p className="mt-2 text-lg text-cream">{p.detail}</p>
                          </div>
                          <div>
                            <div className="mb-3 flex flex-wrap gap-2">
                              {p.stack.map((s) => (
                                <span
                                  key={s}
                                  className="border-2 border-ink bg-mid px-2 py-1 text-xs text-foam"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <a
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="pixel-btn inline-block px-3 py-1.5 text-[9px]"
                              >
                                GITHUB →
                              </a>
                              {p.demo && (
                                <a
                                  href={p.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="pixel-btn inline-block px-3 py-1.5 text-[9px]"
                                >
                                  DEMO →
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </RoomShell>
  );
}
