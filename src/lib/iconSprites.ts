import type { Grid } from "./sprites";

// Simple, original pixel glyphs (not copies of brand logos) in the site's
// gold/cream palette so they read as part of the same pixel-art language.

export const ICON_PALETTE_EXTRA: Record<string, string> = {
  Y: "#ffd76a",
  K: "#14202b",
  W: "#f4ecd8",
};

export const ICON_GITHUB: Grid = [
  "  KKKKKK  ",
  " KYYYYYYK ",
  "KYYWYYWYYK",
  "KYYYYYYYYK",
  "KYYKKKKYYK",
  "KYYYYYYYYK",
  " KKY  YKK ",
  " KK    KK ",
];

export const ICON_LINKEDIN: Grid = [
  "KKKKKKKKKK",
  "KYYKYYYYYK",
  "KYYKYYYYYK",
  "KYYKYYKKYK",
  "KYYKYYKYYK",
  "KYYKYYKYYK",
  "KYYKYYKYYK",
  "KKKKKKKKKK",
];

export const ICON_EMAIL: Grid = [
  "KKKKKKKKKKKK",
  "KYYYYYYYYYYK",
  "KYWKYYYYKWYK",
  "KYWWKYYKWWYK",
  "KYWWWKKWWWYK",
  "KYWWWWWWWWYK",
  "KYYYYYYYYYYK",
  "KKKKKKKKKKKK",
];
