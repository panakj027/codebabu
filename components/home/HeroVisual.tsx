import type { CSSProperties } from "react";
import { heroOrbits } from "@/data/technologies";

const rings = [
  { key: "inner" as const, className: "inner", offset: 0 },
  { key: "mid" as const, className: "mid", offset: 45 },
  { key: "outer" as const, className: "outer", offset: 22 },
];

export function HeroVisual() {
  return (
    <div
      className="hero-scene relative mx-auto aspect-square w-full max-w-[17.5rem] min-w-0 sm:max-w-[24rem] lg:max-w-[34rem]"
      aria-hidden="true"
    >
      <div className="animate-glow absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent/45 via-violet/30 to-cyan/20 blur-3xl" />

      <div className="hero-ring-outer hero-ring" />
      <div className="hero-ring" />
      <div className="pointer-events-none absolute inset-[18%] rounded-full border border-dashed border-white/10" />

      {rings.map((ring) =>
        heroOrbits[ring.key].map((tech, index) => (
          <span
            key={tech.name}
            className={`hero-orbit-anchor ${ring.className}`}
            style={
              {
                "--i": index,
                "--a": `${index * 90 + ring.offset}deg`,
              } as CSSProperties
            }
          >
            <TechNode glow={ring.key !== "mid"}>{tech.name}</TechNode>
          </span>
        )),
      )}

      <div className="absolute left-1/2 top-1/2 z-20 flex h-[4.75rem] w-[4.75rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.28),transparent_34%),linear-gradient(160deg,#1b2744_0%,#0b1220_62%,#15102e_100%)] shadow-glow sm:h-[7.25rem] sm:w-[7.25rem]">
        <span className="absolute inset-2 rounded-full bg-gradient-to-tr from-accent/25 via-transparent to-cyan/20 blur-md" />
        <span className="relative font-display text-lg font-semibold tracking-tight text-white sm:text-2xl">
          CB
        </span>
      </div>
    </div>
  );
}

function TechNode({
  children,
  glow = false,
}: {
  children: string;
  glow?: boolean;
}) {
  return (
    <span
      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wide text-white shadow-lg backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[11px] ${
        glow
          ? "border-accent/40 bg-accent/20"
          : "border-white/15 bg-navy-card/80"
      }`}
    >
      {children}
    </span>
  );
}
