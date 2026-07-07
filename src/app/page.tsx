"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import OceanBackground from "@/components/OceanBackground";
import Bubbles from "@/components/Bubbles";
import Creatures from "@/components/Creatures";
import PixelSprite from "@/components/PixelSprite";
import SignPost from "@/components/SignPost";
import { EXPLORER, RUINS_SILHOUETTE, CHEST_OPEN, CAVE_ENTRANCE, LIGHTHOUSE } from "@/lib/sprites";
import { useDirectionNav, type Direction } from "@/hooks/useDirectionNav";
import EasterEgg from "@/components/EasterEgg";

const ROUTES: Record<Direction, { href: string; label: string }> = {
  up: { href: "/about", label: "ABOUT ME" },
  right: { href: "/portfolio", label: "PORTFOLIO" },
  down: { href: "/side-hustles", label: "SIDE HUSTLES" },
  left: { href: "/contact", label: "CONTACT" },
};

type Phase = "idle" | "swimming" | "transitioning";

export default function Home() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement | null>(null);
  const signRefs = useRef<Partial<Record<Direction, HTMLButtonElement | null>>>({});

  const [phase, setPhase] = useState<Phase>("idle");
  const [dir, setDir] = useState<Direction | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const goTo = useCallback(
    (direction: Direction) => {
      if (phase !== "idle") return;
      const sign = signRefs.current[direction];
      const stage = stageRef.current;
      if (!sign || !stage) {
        router.push(ROUTES[direction].href);
        return;
      }
      const signRect = sign.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      const targetX = signRect.left + signRect.width / 2 - (stageRect.left + stageRect.width / 2);
      const targetY = signRect.top + signRect.height / 2 - (stageRect.top + stageRect.height / 2);

      setDir(direction);
      setOffset({ x: targetX, y: targetY });
      setPhase("swimming");

      const swimMs = reduce ? 50 : 900;
      window.setTimeout(() => setPhase("transitioning"), swimMs);
      window.setTimeout(() => router.push(ROUTES[direction].href), swimMs + 420);
    },
    [phase, reduce, router]
  );

  useDirectionNav(goTo, phase === "idle");

  const parallax = useMemo(() => {
    if (phase === "idle" || !dir) return { x: 0, y: 0 };
    return { x: -offset.x * 0.04, y: -offset.y * 0.04 };
  }, [phase, dir, offset]);

  return (
    <OceanBackground theme="ocean">
      <motion.div
        animate={{ x: parallax.x, y: parallax.y }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Bubbles count={26} />
        <Creatures />
      </motion.div>

      <EasterEgg />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-8">
        <header className="mb-4 text-center">
          <h1 className="font-pixel text-xl text-gold crt-glow sm:text-3xl">
            RUDRA CHAUHAN
          </h1>
          <p className="font-pixel mt-3 text-xs text-foam sm:text-sm">Dive Deeper</p>
          <p className="mt-3 text-base text-foam/70 sm:text-lg">
            Arrow keys, WASD, or click a signboard to explore.
          </p>
        </header>

        {/* Compass stage */}
        <div
          ref={stageRef}
          className="relative grid h-[540px] w-[min(96vw,780px)] place-items-center sm:h-[680px]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <SignPost
              label="ABOUT ME"
              dir="up"
              active={dir === "up"}
              onSelect={goTo}
              registerRef={(el) => {
                signRefs.current.up = el;
              }}
              vignette={
                <div className="pointer-events-none absolute -top-14 left-1/2 h-14 w-32 -translate-x-1/2 opacity-40">
                  <PixelSprite grid={RUINS_SILHOUETTE} title="" className="h-full w-full" />
                </div>
              }
            />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <SignPost
              label="PORTFOLIO"
              dir="right"
              active={dir === "right"}
              onSelect={goTo}
              registerRef={(el) => {
                signRefs.current.right = el;
              }}
              vignette={
                <div className="pointer-events-none absolute -top-12 left-1/2 h-14 w-14 -translate-x-1/2 opacity-70 animate-bob">
                  <PixelSprite grid={CHEST_OPEN} title="" className="h-full w-full" />
                </div>
              }
            />
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <SignPost
              label="SIDE HUSTLES"
              dir="down"
              active={dir === "down"}
              onSelect={goTo}
              registerRef={(el) => {
                signRefs.current.down = el;
              }}
              vignette={
                <div className="pointer-events-none absolute -top-14 left-1/2 h-14 w-36 -translate-x-1/2 opacity-40">
                  <PixelSprite grid={CAVE_ENTRANCE} title="" className="h-full w-full" />
                </div>
              }
            />
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <SignPost
              label="CONTACT"
              dir="left"
              active={dir === "left"}
              onSelect={goTo}
              registerRef={(el) => {
                signRefs.current.left = el;
              }}
              vignette={
                <div className="pointer-events-none absolute -top-16 left-1/2 h-20 w-14 -translate-x-1/2 opacity-50">
                  <PixelSprite grid={LIGHTHOUSE} title="" className="h-full w-full" />
                </div>
              }
            />
          </div>

          {/* Diver + bubble trail — stays visible and travels to the sign */}
          <motion.div
            className="relative h-36 w-32 sm:h-44 sm:w-40"
            animate={
              phase === "idle"
                ? { x: 0, y: [0, -10, 0], scale: 1, opacity: 1 }
                : { x: offset.x, y: offset.y, scale: 0.55, opacity: phase === "transitioning" ? 0 : 1 }
            }
            transition={
              phase === "idle"
                ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                : { duration: phase === "swimming" ? 0.9 : 0.4, ease: "easeIn" }
            }
          >
            <PixelSprite grid={EXPLORER} title="Pixel explorer" className="h-full w-full" />

            {phase !== "idle" &&
              !reduce &&
              Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute h-2 w-2 rounded-full border border-foam/60 bg-foam/20"
                  style={{
                    left: "50%",
                    top: "60%",
                    animation: `sign-bubble ${0.7 + i * 0.15}s ease-out ${i * 0.08}s infinite`,
                  }}
                  aria-hidden="true"
                />
              ))}
          </motion.div>
        </div>

        <p className="mt-6 text-center text-base text-foam/80 sm:text-lg" aria-live="polite">
          {dir && phase !== "idle" ? `Swimming to ${ROUTES[dir].label}…` : "Pick a direction to explore."}
        </p>
      </div>

      <AnimatePresence>
        {phase === "transitioning" && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-40 bg-abyss"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
    </OceanBackground>
  );
}
