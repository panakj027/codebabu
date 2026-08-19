import type { Technology } from "@/data/technologies";

export function TechnologyBadge({ technology }: { technology: Technology }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-navy-card/70 px-4 py-3.5 transition duration-300 hover:border-accent/40 hover:bg-navy-card">
      <span
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-violet/20 font-mono text-xs font-semibold text-accent-soft"
        aria-hidden="true"
      >
        {technology.mark}
      </span>
      <span className="font-medium text-white">{technology.name}</span>
    </div>
  );
}
