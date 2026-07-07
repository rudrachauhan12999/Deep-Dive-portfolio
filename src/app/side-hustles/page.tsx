"use client";

import RoomShell from "@/components/RoomShell";
import PixelSprite from "@/components/PixelSprite";
import { SKULL, COIN } from "@/lib/sprites";
import { SIDE_HUSTLES } from "@/lib/siteContent";

export default function SideHustlesPage() {
  return (
    <RoomShell theme="cave" eyebrow="PIRATE CAVE" title="SIDE HUSTLES" current="/side-hustles">
      <p className="mb-8 text-lg italic text-foam sm:text-xl">
        &ldquo;Haww, you don&apos;t believe me? That&apos;s okay, detective. Here&apos;s the evidence.&rdquo;
      </p>

      <div className="space-y-10">
        {SIDE_HUSTLES.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-4 flex items-center gap-3 font-pixel text-sm text-gold sm:text-base">
              <span className="h-6 w-6">
                <PixelSprite grid={COIN} title="" className="h-full w-full" />
              </span>
              {section.heading}
            </h2>
            <ul className="space-y-4">
              {section.entries.map((e) => (
                <li key={e.title} className="pixel-panel flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xl text-cream">{e.title}</p>
                    <p className="text-lg text-foam/80">
                      {e.org} · {e.year}
                    </p>
                  </div>
                  {e.proof && (
                    <a
                      href={e.proof}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-btn self-start px-3 py-2 text-[10px] sm:self-auto"
                    >
                      PROOF (PDF) ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mx-auto mt-14 h-20 w-24 opacity-80">
        <PixelSprite grid={SKULL} title="Pirate skull marker" className="h-full w-full" />
      </div>
    </RoomShell>
  );
}
