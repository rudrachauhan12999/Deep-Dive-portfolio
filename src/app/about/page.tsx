"use client";

import { motion } from "framer-motion";
import RoomShell from "@/components/RoomShell";
import PixelSprite from "@/components/PixelSprite";
import { EXPLORER, CORAL_PILLAR } from "@/lib/sprites";
import { PROFILE, SKILLS, TIMELINE, FUN_FACTS } from "@/lib/siteContent";

export default function AboutPage() {
  return (
    <RoomShell theme="ruins" eyebrow="SUNKEN RUINS" title="ABOUT ME" current="/about">
      {/* Hero */}
      <section className="mb-12 text-center">
        <p className="font-pixel text-[10px] text-teal sm:text-xs">
          Ancient ruins hold old secrets. This diver holds newer ones.
        </p>
      </section>

      {/* Profile */}
      <section className="pixel-panel mb-12 flex flex-col items-center gap-6 p-6 sm:flex-row sm:p-8">
        <div className="h-32 w-28 flex-shrink-0 sm:h-40 sm:w-36">
          <PixelSprite grid={EXPLORER} title="Explorer portrait" className="h-full w-full" />
        </div>
        <div>
          <h2 className="font-pixel text-sm text-gold sm:text-base">{PROFILE.name.toUpperCase()}</h2>
          <p className="mt-2 text-lg text-teal sm:text-xl">{PROFILE.role}</p>
          <p className="mt-3 text-lg leading-relaxed text-foam sm:text-xl">{PROFILE.bio}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {PROFILE.interests.map((tag) => (
              <span key={tag} className="border-2 border-ink bg-mid px-2 py-1 text-sm text-foam">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="mb-5 font-pixel text-sm text-teal sm:text-base">SKILLS</h2>
        <div className="pixel-panel space-y-5 p-6">
          {SKILLS.map((s, i) => (
            <div key={s.name}>
              <div className="mb-1 flex justify-between text-lg text-cream sm:text-xl">
                <span>{s.name}</span>
                <span className="text-gold">{s.level}%</span>
              </div>
              <div className="h-4 w-full border-2 border-ink bg-abyss">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal to-gold"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="mb-5 font-pixel text-sm text-teal sm:text-base">TIMELINE</h2>
        <ol className="relative space-y-8 border-l-4 border-dashed border-gold/50 pl-6">
          {TIMELINE.map((t, i) => (
            <motion.li
              key={t.year}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="absolute -left-[34px] top-1 h-4 w-4 border-2 border-ink bg-gold" aria-hidden="true" />
              <div className="pixel-panel p-4">
                <p className="font-pixel text-[10px] text-gold sm:text-xs">{t.year}</p>
                <h3 className="mt-1 text-xl text-cream">{t.title}</h3>
                <p className="mt-1 text-lg text-foam/90">{t.detail}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Fun Facts */}
      <section>
        <h2 className="mb-5 font-pixel text-sm text-teal sm:text-base">FUN FACTS</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FUN_FACTS.map((f, i) => (
            <motion.li
              key={f}
              className="pixel-panel p-4 text-lg text-foam sm:text-xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {f}
            </motion.li>
          ))}
        </ul>
      </section>

      <div className="mx-auto mt-12 h-16 w-12 opacity-60">
        <PixelSprite grid={CORAL_PILLAR} title="Ruined pillar" className="h-full w-full" />
      </div>
    </RoomShell>
  );
}
