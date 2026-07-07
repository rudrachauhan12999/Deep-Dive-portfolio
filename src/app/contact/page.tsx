"use client";

import { motion } from "framer-motion";
import RoomShell from "@/components/RoomShell";
import PixelSprite from "@/components/PixelSprite";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { BOTTLE } from "@/lib/sprites";
import { SITE_LINKS } from "@/lib/siteContent";

export default function ContactPage() {
  return (
    <RoomShell theme="cave" eyebrow="TREASURE ISLAND" title="CONTACT" current="/contact">
      <p className="mb-10 text-lg text-foam sm:text-xl">
        Signal reaches the surface from here. Pick a channel to get in touch.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <motion.a
          href={SITE_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group pixel-panel relative flex flex-col items-center gap-4 p-8 transition-[filter] duration-200 hover:brightness-125"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ y: -6 }}
        >
          <span
            className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-cream/10 blur-md transition-colors duration-300 group-hover:bg-cream/20"
            aria-hidden="true"
          />
          <GitHubIcon className="h-24 w-24 sm:h-28 sm:w-28" />
          <span className="font-pixel text-xs text-gold sm:text-sm">GitHub</span>
          <span className="text-base text-foam/80">View my code</span>
        </motion.a>

        <motion.a
          href={SITE_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group pixel-panel relative flex flex-col items-center gap-4 p-8 transition-[filter] duration-200 hover:brightness-125"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -6 }}
        >
          <span
            className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-[#0a66c2]/20 blur-md transition-colors duration-300 group-hover:bg-[#0a66c2]/35"
            aria-hidden="true"
          />
          <LinkedInIcon className="h-24 w-24 sm:h-28 sm:w-28" />
          <span className="font-pixel text-xs text-gold sm:text-sm">LinkedIn</span>
          <span className="text-base text-foam/80">Let&apos;s connect</span>
        </motion.a>

        <motion.a
          href={`mailto:${SITE_LINKS.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group pixel-panel relative flex flex-col items-center gap-4 p-8 transition-[filter] duration-200 hover:brightness-125"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -6 }}
        >
          <span
            className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-gold/15 blur-md transition-colors duration-300 group-hover:bg-gold/35"
            aria-hidden="true"
          />
          <div className="h-24 w-24 animate-bob sm:h-28 sm:w-28">
            <PixelSprite grid={BOTTLE} title="Email" className="h-full w-full" />
          </div>
          <span className="font-pixel text-xs text-gold sm:text-sm">Email</span>
          <span className="text-base text-foam/80">Send a message in a bottle</span>
        </motion.a>
      </div>
    </RoomShell>
  );
}
