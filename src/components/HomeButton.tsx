"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PixelSprite from "./PixelSprite";
import { CAT_HD } from "@/lib/sprites";

export default function HomeButton() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      aria-label="Return to the dive point (home)"
      className="group pixel-btn fixed top-4 right-4 z-50 flex h-12 w-12 items-center justify-center p-1.5 sm:h-14 sm:w-14"
    >
      <PixelSprite grid={CAT_HD} title="" className="h-full w-full animate-bob" />
      <span
        role="tooltip"
        className="pixel-panel font-pixel pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap px-2 py-1 text-[9px] text-cream opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        HOME
      </span>
    </Link>
  );
}
