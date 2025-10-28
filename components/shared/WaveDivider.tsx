import { cn } from "@/utils/shadcn";

interface WaveDividerProps {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
  height?: number;
  color?: "primary" | "secondary" | "accent" | string;
  waves?: number;
  type?: "classic" | "custom" | "opacity" | "multiwave";
  opacity?: number;
}

export const WaveDivider = ({
  className,
  flipX = false,
  flipY = false,
  height = 80,
  color = "secondary",
  waves = 3,
  type = "classic",
  opacity,
}: WaveDividerProps) => {
  const colorMap = {
    primary: "fill-primary/10",
    secondary: "fill-secondary",
    accent: "fill-accent",
  };

  const isPresetColor =
    color &&
    (color === "primary" || color === "secondary" || color === "accent");
  const fillClass = isPresetColor
    ? colorMap[color as keyof typeof colorMap]
    : "";

  const generateWavePath = (numWaves: number) => {
    if (numWaves === 1) {
      return "M0,80 C150,30 350,30 600,60 C850,90 1050,40 1200,60 L1200,120 L0,120 Z";
    } else if (numWaves === 2) {
      return "M0,80 C100,40 200,40 300,70 C400,100 500,50 600,60 C700,70 800,30 900,50 C1000,70 1100,50 1200,60 L1200,120 L0,120 Z";
    } else {
      return "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";
    }
  };

  return (
    <div
      className={cn("w-full overflow-hidden", className)}
      style={{
        transform: `${flipX ? "scaleX(-1)" : ""} ${
          flipY ? "scaleY(-1)" : ""
        }`.trim(),
      }}
    >
      {
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={cn("w-full", fillClass)}
          style={{
            height: `${height}px`,
            fill: !isPresetColor ? color : undefined,
            opacity: type === "opacity" && opacity ? opacity : undefined,
          }}
        >
          <path d={generateWavePath(type === "multiwave" ? 5 : waves)} />
        </svg>
      }
    </div>
  );
};
