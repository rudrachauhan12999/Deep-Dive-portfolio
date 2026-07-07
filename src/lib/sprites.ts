// Pixel-art sprite data, hand-authored to match the reference palette,
// proportions, and level of detail (not literal copies — see project README
// for why: several reference images are watermarked/licensed stock assets).
// v4: pushed resolution and shading further on the diver, cat, and treasure
// chest specifically, since those were the most-flagged for clarity.
// Each sprite is a grid of palette keys; " " (space) is transparent.
// Rendered via <PixelSprite/> as crisp SVG rects.

export type Grid = string[];

export const PALETTE: Record<string, string> = {
  " ": "transparent",
  K: "#14202b", // outline
  W: "#f7f5ef", // explorer suit / cat paw white
  S: "#d9d4c4", // suit shade
  B: "#2e5fae", // mask blue
  b: "#1f4586", // mask blue dark
  L: "#d7e6fb", // lens light
  l: "#f4faff", // lens highlight / lighthouse white
  G: "#7fc24c", // snorkel green
  g: "#4f9a2e", // snorkel green dark
  Z: "#8a95a3", // mouthpiece grey
  Y: "#ffd76a", // gold
  y: "#e0a93a", // gold dark
  O: "#ff8c42", // orange
  R: "#ff6b6b", // coral red
  r: "#d94f4f",
  P: "#b47cdb", // jelly purple
  p: "#8452ad",
  C: "#49c7cf", // teal
  c: "#2f9aa1",
  T: "#e6c99a", // tan cat
  t: "#b9865a", // tan cat dark (ears / mask / tail)
  N: "#8a5a37", // wood
  n: "#5c3620", // wood dark
  A: "#e8c07d", // sand / chest interior / plank face
  a: "#c9975a", // sand dark / wood grain
  F: "#7691ad", // shark
  f: "#e9eef3", // shark belly
  H: "#4d7fb0", // whale
  h: "#cfe4f2", // whale belly
  J: "#5a8f5a", // turtle
  j: "#3f6b3f", // turtle shell
  E: "#4a9c4a", // leaf
  e: "#2f6b2f",
  X: "#171310", // eye
  Q: "#ffffff", // eye shine
  i: "#7a3d2e", // muzzle / mask marking dark
  "5": "#e8a2a0", // pink nose
  V: "#3a2a1c", // wood post shadow
  u: "#6fae52", // seaweed light
  U: "#3f7a34", // seaweed dark
  x: "#ffe38a", // glow / sparkle bright
  w: "#9fb8c9", // ruins stone
  v: "#6f8797", // ruins stone dark
  q: "#4a3222", // chest wood dark
  "2": "#caa24a", // chest / lighthouse metal gold
  "6": "#e0b563", // chest gold highlight
  "3": "#c0392b", // lighthouse red stripe
  o: "#f3d9a4", // glass bottle
  "4": "#b98f5e", // cork
  d: "#4c5860", // slate / dark stone accent
  m: "#c98a4b", // paper / scroll tone
};

// ---------------------------------------------------------------------------
// EXPLORER — clearly humanoid pixel diver: round head with goggle-style
// mask lenses, distinct neck, torso with a chest-stripe accent, separate
// arms/legs, flippers, and a short snorkel accent by the shoulder.
// ---------------------------------------------------------------------------
export const EXPLORER: Grid = [
  "           K          ",
  "        SSSSSSS       ",
  "       KSSSSSSSK      ",
  "       KWWWWWWWK GG   ",
  "       KBWWWWWBK  g   ",
  "      KBBBWWWBBBK g   ",
  "      BBXBBBBBXBB G   ",
  "       BBBWWWBBB  G   ",
  "       KBWWWWWBK  Z   ",
  "        KKSWSKK       ",
  "           S          ",
  "                      ",
  "         SSSS         ",
  "     KKKKKKKKKKKK     ",
  "  KKKKWWWWWWWWWWKKKK  ",
  "  KWKKWWWWWWWWWWKKWK  ",
  "  KWKKWCCCCCCCCWKKWK  ",
  "  KWKKWCCCCCCCCWKKWK  ",
  "  KWKKWWWWWWWWWWKKWK  ",
  "  SSSKWWWWWWWWWWKSSS  ",
  "  SSSKWWWWWWWWWWKSSS  ",
  "     KKKKKKKKKKKK     ",
  "                      ",
  "       KKKK KKKK      ",
  "       KWWK KWWK      ",
  "       KWWK KWWK      ",
  "       KWWK KWWK      ",
  "       KKKK KKKK      ",
  "      KKKKKKKKKKK     ",
  "      KKKKKKKKKKK     ",
  "                      ",
  "                      ",
];

// ---------------------------------------------------------------------------
// CAT_HD — full sitting-cat silhouette (round body, small triangular ears,
// curled tail, two front paws) in the tan colorway, higher resolution than
// the earlier face-only bust so it unmistakably reads as a cat.
// ---------------------------------------------------------------------------
export const CAT_HD: Grid = [
  "    K        K      ",
  "   KtK      KtK     ",
  "  KttTK    KTttK    ",
  "  KTTTTKKKKTTTTK    ",
  " KTTTTTTTTTTTTTTK   ",
  " KTTTTTTTTTTTTTTK   ",
  " KTTXTTTTTTTTXTTK   ",
  " KTTTTTTTTTTTTTTK   ",
  " KTTTT5TTTT5TTTTK   ",
  " KTTTTTiiiiTTTTTK   ",
  " KTTTTTTTTTTTTTTK  t",
  "  KTTTTTTTTTTTTTK tT",
  "  KTTTTTTTTTTTTTKtTt",
  "  KWWTTTTTTTTWWTKtTt",
  "  KWWKTTTTTTKWWKK tT",
  "  KWWKTTTTTTKWWK  t ",
  "   KKTTTTTTTTKK     ",
  "    KTTTTTTTTK      ",
  "     KKKKKKKK       ",
];

// ---------------------------------------------------------------------------
// SIGN_POST — one large legible plank on a post, wood-grain shading, ready
// for an HTML label overlay. Dominant nav element on the landing page.
// ---------------------------------------------------------------------------
export const SIGN_POST: Grid = [
  "        V      V        ",
  "        N      N        ",
  "  NNNNNNNNNNNNNNNNNNNN  ",
  " NAAAAAAAAAAAAAAAAAAAAN ",
  " NAaAAAAAAAAAAAAAAAAaAN ",
  " NAAAAAAAAAAAAAAAAAAAAN ",
  " NAaAAAAAAAAAAAAAAAAaAN ",
  " NAAAAAAAAAAAAAAAAAAAAN ",
  "  NNNNNNNNNNNNNNNNNNNN  ",
  "        N      N        ",
  "        V      V        ",
  "        V      V        ",
  "        V      V        ",
  "       VVVVVVVV        ",
];

export const SEAWEED: Grid = [
  " U ",
  " u ",
  "U u",
  " u ",
  " U ",
  "u u",
  " U ",
  " u ",
];

// ---------------------------------------------------------------------------
// CHEST_CLOSED / CHEST_OPEN — detailed pirate chest: domed lid with gold
// banding, wood-plank body with a highlight pass, corner studs, and a
// visible lock. CHEST_OPEN spills gold with a bright glow + sparkles.
// ---------------------------------------------------------------------------
export const CHEST_CLOSED: Grid = [
  "     qqqqqqqqqqqqqqqq     ",
  "    q2222222222222222q    ",
  "   qNNNNNNNNNNNNNNNNNNq   ",
  "  qN6NAAAAAAAAAAAAAA6Nq   ",
  " qN66NAAAAAAAAAAAAAA66Nq  ",
  " qN AAAAAAAAAAAAAAAAA Nq  ",
  " qN2222222222222222222Nq ",
  "qNNNNNNNNNNNNNNNNNNNNNNNq",
  "qN2NAA AAAAAAAAAAAA ANN2Nq",
  "qN NAA AAAAyy2yyAA A Nq  ",
  "qN NAA AAAyy22yyA A  Nq  ",
  "qN NAA AAAAyy2yyAA A Nq  ",
  "qNNAAAAAAAAAAAAAAAAAAANq ",
  "qN2NAAAAAAAAAAAAAAAAAN2Nq",
  " qNNNNNNNNNNNNNNNNNNNNq  ",
  "  qqqqqqqqqqqqqqqqqqqq   ",
];

export const CHEST_OPEN: Grid = [
  "  x   x     x    x   x  ",
  "     q2222222222q       ",
  "    qNNNNNNNNNNNNq      ",
  "   qN6AAAAAAAAAA6Nq     ",
  "  qN66AAAAAAAAAA66Nq    ",
  "   qNNNNNNNNNNNNNNq     ",
  " qNNNNNNNNNNNNNNNNNNq   ",
  " qNxxxxxxxxxxxxxxxxNq   ",
  " qNxxYYYYYYYYYYYYxxNq   ",
  "  qNxYy222222222yYxNq   ",
  "  qNAAAAAAAAAAAAAANq    ",
  "  qN2NAAAAAAAAAAN2Nq    ",
  "   qNNNNNNNNNNNNNNq     ",
  "    qqqqqqqqqqqqqq      ",
];

// ---------------------------------------------------------------------------
// LIGHTHOUSE — tall, tapered tower with red stripe bands, glowing lantern
// room, and a stone base. Clearly readable as a lighthouse.
// ---------------------------------------------------------------------------
export const LIGHTHOUSE: Grid = [
  "       2  2       ",
  "      YxxxxY      ",
  "      Yxxxxx      ",
  "       YYYY       ",
  "      llllll      ",
  "     lllllll      ",
  "    l3lllll3l     ",
  "    l3lllll3l     ",
  "    lllllllll     ",
  "    l3lllll3l     ",
  "    l3lllll3l     ",
  "    lllllllll     ",
  "   lllllllllll    ",
  "   l3lllllll3l    ",
  "   l3lllllll3l    ",
  "   llllllllllll   ",
  "  llllllllllllll  ",
  "  lNNNNNNNNNNNNl  ",
  "  lNdNNNNNNNNdNl  ",
  " NNNNNNNNNNNNNNNN ",
];

// ---------------------------------------------------------------------------
// BOTTLE — rounded message bottle: cork, tapered neck, glass shine, and a
// clearly visible rolled scroll with end-caps and "text" lines inside.
// ---------------------------------------------------------------------------
export const BOTTLE: Grid = [
  "       KKKK       ",
  "       K44K       ",
  "       KKKK       ",
  "       KKKK       ",
  "       KKKK       ",
  "      KAAAAK      ",
  "     lAAAAAAK     ",
  "    KlAAAAAAAK    ",
  "   KAlAAAAAAAAK   ",
  "   KAlAAAAAAAAK   ",
  "   KAiimmmmiiAK   ",
  "   KAiimiimiiAK   ",
  "    KiimiimiiK    ",
  "    KiimmmmiiK    ",
  "     KAAAAAAK     ",
  "      KKKKKK      ",
];

// ---------------------------------------------------------------------------
// Environment vignettes (background hints behind each signboard)
// ---------------------------------------------------------------------------
export const RUINS_SILHOUETTE: Grid = [
  " w    w    w ",
  " w    w    w ",
  " wwww w wwww ",
  " w    w    w ",
  " w    w    w ",
  "vwwwwwwwwwwwv",
];

export const CAVE_ENTRANCE: Grid = [
  "vvvvvvvvvvvvvv",
  "vv          vv",
  "v            v",
  "v            v",
  "v            v",
  "vv          vv",
  "vvvv      vvvv",
];

// ---------------------------------------------------------------------------
// Reef creatures
// ---------------------------------------------------------------------------
export const FISH_BODY: Grid = [
  "    RRRRRR    ",
  "   RRRRRRRR   ",
  "  RRRRRRRRRR  ",
  " ORRRrrRRRRRR ",
  "OORRrrrRRRRRRR",
  "OORRXrrRRRRRRR",
  "OORRrrrRRRRRRR",
  " ORRRrrRRRRRR ",
  "  RRRRRRRRRR  ",
  "   RRRRRRRR   ",
  "    RRRRRR    ",
];
export const fishVariant = (main: string, fin: string): Grid =>
  FISH_BODY.map((row) => row.replaceAll("R", main).replaceAll("r", main).replaceAll("O", fin));

// A small school template (same silhouette, smaller) used to render a tight
// cluster of same-colored fish for schooling behaviour.
export const SCHOOL_FISH: Grid = [
  "  RR  ",
  " RRRR ",
  "ORRRRR",
  "ORXRRR",
  "ORRRRR",
  " RRRR ",
  "  RR  ",
];
export const schoolVariant = (main: string, fin: string): Grid =>
  SCHOOL_FISH.map((row) => row.replaceAll("R", main).replaceAll("O", fin));

export const SHARK: Grid = [
  "          FF          ",
  "        FFFFFF        ",
  "     FFFFFFFFFFFF     ",
  "   FFFFFFFFFFFFFFFF   ",
  " FFFFFFFFFFFFFFFFFFF F",
  "FFFFFFFFFFFFFFFFFFFFFF",
  "fffFFFFFXFFFFFFFFFFFFF",
  "fffffffFFFFFFFFFFFFF F",
  " fffffffffFFFFFF      ",
  "   fffffffff  F       ",
  "                F     ",
];

export const WHALE: Grid = [
  "     HHHHHHHHHHHHH     ",
  "   HHHHHHHHHHHHHHHHH   ",
  " HHHHHHHHHHHHHHHHHHHH H",
  "HHHHHHHHHHHHHHHHHHHHHHH",
  "HHHHHXHHHHHHHHHHHHHHHHH",
  "hhhhhhHHHHHHHHHHHHHH HH",
  "hhhhhhhhhHHHHHHHHHH    ",
  " hhhhhhhhhhhhHHH       ",
  "   hhhhhhhhhh    H     ",
];

export const JELLY: Grid = [
  "  PPPPPPPPP  ",
  " PPPPPPPPPPP ",
  "PPPPPPPPPPPPP",
  "PPPpppppppPPP",
  " ppppppppppp ",
  " p  p  p  p  ",
  "p  p  p  p  p",
  " p  p  p  p  ",
  "p  p  p  p  p",
  " p    p    p ",
];

export const TURTLE: Grid = [
  "    JJJJJJJJ    ",
  "  JJjjjjjjjjJJ  ",
  " JJjjjjjjjjjjJJ ",
  "JJjjjJjjjjJjjjJJ",
  "JjjjjjXjjjjjjjjJ",
  "JJjjjjjjjjjjjjJJ",
  " JJjjjjjjjjjjJJ ",
  "  JJjjjjjjjjJJ  ",
  "J    JJJJJJ    J",
  "J              J",
];

// ---------------------------------------------------------------------------
// Misc props
// ---------------------------------------------------------------------------
export const SKULL: Grid = [
  " QQQQQQQQ ",
  "QQQQQQQQQQ",
  "QQXQQQQXQQ",
  "QQXQQQQXQQ",
  "QQQQQQQQQQ",
  "QQQQdQQQQQ",
  " QQQQQQQQ ",
  " Q Q  Q Q ",
];

export const CORAL_PILLAR: Grid = [
  "  KKKKKK  ",
  " KAAAAAAK ",
  " KAaAAaAK ",
  " KAAAAAAK ",
  " KAaAAaAK ",
  " KAAAAAAK ",
  " KAaAAaAK ",
  " KAAAAAAK ",
  "KKKKKKKKKK",
];

export const COIN: Grid = [
  " YYY ",
  "YyyyY",
  "Yy2yY",
  "YyyyY",
  " YYY ",
];
