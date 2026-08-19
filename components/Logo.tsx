import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  light = true,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group flex min-w-0 items-center gap-2.5", className)}
      aria-label="CodeBabu home"
    >
      <span
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-gradient-to-br from-accent to-violet shadow-[0_8px_24px_-8px_rgba(91,138,255,0.8)]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
          <path
            d="M9.2 7.2 5.6 12l3.6 4.8M14.8 7.2 18.4 12l-3.6 4.8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={cn(
          "font-display text-[1.15rem] font-semibold tracking-tight",
          light ? "text-white" : "text-ink-text",
        )}
      >
        CodeBabu
      </span>
    </Link>
  );
}
