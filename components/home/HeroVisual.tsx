import type { ReactNode } from "react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem] min-w-0">
      <div
        className="animate-glow absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent/40 via-violet/25 to-cyan/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="bg-grid animate-grid-drift absolute inset-6 rounded-[2rem] opacity-70"
        aria-hidden="true"
      />
      <div
        className="animate-orbit pointer-events-none absolute inset-[12%] rounded-full border border-dashed border-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-[22%] rounded-full border border-white/8"
        aria-hidden="true"
      />

      <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/15 bg-navy-card/80 shadow-glow backdrop-blur-md sm:h-32 sm:w-32">
        <span className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          CB
        </span>
      </div>

      <CodeCard className="animate-float absolute left-[2%] top-[10%] w-[58%] max-w-[15.5rem] sm:left-[4%]">
        <span className="text-cyan/80">const</span> product = {"{"}
        <br />
        {"  "}stack: <span className="text-accent-soft">&quot;Next.js&quot;</span>,
        <br />
        {"  "}status: <span className="text-violet">&quot;shipping&quot;</span>
        <br />
        {"}"}
      </CodeCard>

      <CodeCard className="animate-float-slow absolute bottom-[14%] left-[6%] w-[52%] max-w-[14rem]">
        deploy() <span className="text-muted">→</span>{" "}
        <span className="text-cyan">live</span>
      </CodeCard>

      <CodeCard className="animate-float absolute right-[2%] top-[28%] w-[48%] max-w-[13.5rem] sm:right-[6%]">
        AI.integrate(
        <br />
        {"  "}
        <span className="text-accent-soft">workflow</span>
        <br />)
      </CodeCard>

      <span
        className="absolute right-[18%] top-[12%] h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_16px_rgba(58,208,255,0.9)]"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-[22%] right-[16%] h-2 w-2 rounded-full bg-violet shadow-[0_0_14px_rgba(139,108,255,0.9)]"
        aria-hidden="true"
      />
      <span
        className="absolute left-[18%] top-[46%] h-1.5 w-1.5 rounded-full bg-accent"
        aria-hidden="true"
      />
    </div>
  );
}

function CodeCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/12 bg-ink/70 p-3 font-mono text-[11px] leading-relaxed text-white/85 shadow-lg backdrop-blur-md sm:p-4 sm:text-xs ${className ?? ""}`}
    >
      <div className="mb-2 flex gap-1" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
      </div>
      <pre className="overflow-hidden whitespace-pre-wrap break-words">{children}</pre>
    </div>
  );
}
