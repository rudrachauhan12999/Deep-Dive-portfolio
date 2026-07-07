"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PixelSprite from "./PixelSprite";
import { fishVariant, schoolVariant, SHARK, WHALE, JELLY, TURTLE } from "@/lib/sprites";

const fishPalettes: [string, string][] = [
  ["#ff8fa3", "#ff6b8a"],
  ["#5aa4d8", "#3d7cb8"],
  ["#ffb84d", "#e8952a"],
  ["#6fd6a8", "#3fae7d"],
  ["#c98fe8", "#a95fd0"],
  ["#ffe066", "#e0b830"],
];

interface Drifter {
  Sprite: string[];
  top: number;
  size: number;
  duration: number;
  delay: number;
  flip: boolean;
  z: number;
  opacity?: number;
}

interface Bobber {
  Sprite: string[];
  top: number;
  left: number;
  size: number;
  delay: number;
  z: number;
}

export default function Creatures() {
  const reduce = useReducedMotion();

  const drifters = useMemo<Drifter[]>(() => {
    const list: Drifter[] = [];

    // Individual fish — varied size, speed, depth, color (8 total)
    fishPalettes.forEach((p, i) => {
      list.push({
        Sprite: fishVariant(p[0], p[1]),
        top: 6 + i * 12 + Math.random() * 6,
        size: 26 + Math.random() * 30,
        duration: 14 + Math.random() * 16,
        delay: i * 2.2,
        flip: i % 2 === 0,
        z: 1,
      });
    });
    // A couple of extra fast, small fish for variety
    for (let i = 0; i < 2; i++) {
      const p = fishPalettes[i];
      list.push({
        Sprite: fishVariant(p[0], p[1]),
        top: 20 + i * 30 + Math.random() * 10,
        size: 18 + Math.random() * 8,
        duration: 9 + Math.random() * 4,
        delay: 1 + i,
        flip: i % 2 === 0,
        z: 1,
        opacity: 0.85,
      });
    }

    // Occasional big passes — long duration relative to a typical visit
    // means they read as rare/occasional rather than a constant loop.
    list.push({ Sprite: SHARK, top: 14, size: 100, duration: 42, delay: 3, flip: false, z: 2 });
    list.push({ Sprite: TURTLE, top: 74, size: 46, duration: 46, delay: 10, flip: false, z: 1 });
    list.push({ Sprite: TURTLE, top: 40, size: 34, duration: 52, delay: 26, flip: true, z: 1, opacity: 0.8 });
    list.push({ Sprite: WHALE, top: 66, size: 120, duration: 55, delay: 6, flip: true, z: 1, opacity: 0.9 });

    return list;
  }, []);

  // A tight schooling cluster: same base fish, small individual offsets,
  // all drifting together at slightly different phase for organic motion.
  const school = useMemo<Bobber[]>(() => {
    const [main, fin] = fishPalettes[1];
    const sprite = schoolVariant(main, fin);
    return Array.from({ length: 7 }, (_, i) => ({
      Sprite: sprite,
      top: 45 + Math.sin(i) * 6,
      left: 8 + i * 3.2,
      size: 16 + (i % 3) * 2,
      delay: i * 0.18,
      z: 1,
    }));
  }, []);

  const jellies = useMemo<Bobber[]>(
    () => [
      { Sprite: JELLY, top: 24, left: 78, size: 40, delay: 0, z: 1 },
      { Sprite: JELLY, top: 48, left: 88, size: 28, delay: 1.2, z: 1 },
      { Sprite: JELLY, top: 15, left: 55, size: 22, delay: 0.6, z: 1 },
      { Sprite: JELLY, top: 60, left: 30, size: 32, delay: 1.8, z: 1 },
    ],
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Schooling cluster — drifts left together, each fish bobbing slightly out of phase */}
      <motion.div
        className="absolute"
        style={{ top: "45%", left: "100%" }}
        animate={reduce ? undefined : { x: [0, -1500] }}
        transition={{ duration: 30, delay: 4, repeat: Infinity, ease: "linear" }}
      >
        {school.map((f, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: f.top, left: f.left * 4, width: f.size, height: f.size * 0.75 }}
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 2.4, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <PixelSprite grid={f.Sprite} className="h-full w-full" title="" />
          </motion.div>
        ))}
      </motion.div>

      {drifters.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${c.top}%`,
            width: c.size,
            height: c.size * 0.7,
            zIndex: c.z,
            left: "100%",
            opacity: c.opacity ?? 1,
          }}
          animate={reduce ? undefined : { x: [0, -1500] }}
          transition={{ duration: c.duration, delay: c.delay, repeat: Infinity, ease: "linear" }}
        >
          <PixelSprite
            grid={c.Sprite}
            className="h-full w-full drop-shadow-md"
            title="marine life"
            style={{ transform: c.flip ? "scaleX(-1)" : undefined }}
          />
        </motion.div>
      ))}

      {jellies.map((j, i) => (
        <motion.div
          key={`jelly-${i}`}
          className="absolute"
          style={{ top: `${j.top}%`, left: `${j.left}%`, width: j.size, height: j.size * 1.1 }}
          animate={reduce ? undefined : { y: [0, -16, 0], x: [0, 6, 0] }}
          transition={{ duration: 5 + i, delay: j.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <PixelSprite grid={j.Sprite} className="h-full w-full" title="" />
        </motion.div>
      ))}
    </div>
  );
}
