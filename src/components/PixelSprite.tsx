import { PALETTE, type Grid } from "@/lib/sprites";

export default function PixelSprite({
  grid,
  className = "",
  title,
  style,
}: {
  grid: Grid;
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}) {
  const rows = grid.length;
  const cols = Math.max(...grid.map((r) => r.length));

  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated", ...style }}
    >
      {grid.map((row, y) =>
        row.split("").map((ch, x) => {
          const color = PALETTE[ch];
          if (!color || color === "transparent") return null;
          return <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={color} />;
        })
      )}
    </svg>
  );
}
