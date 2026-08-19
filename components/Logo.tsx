import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
}: {
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group flex min-w-0 items-center gap-2.5", className)}
      aria-label="CodeBabu home"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-accent to-violet font-display text-sm font-bold tracking-tight text-white shadow-[0_8px_20px_-8px_rgba(91,138,255,0.85)]"
        aria-hidden="true"
      >
        CB
      </span>
      <span className="truncate font-display text-base font-semibold tracking-tight text-white sm:text-[1.15rem]">
        Code <span className="font-normal text-muted">Babu</span>
      </span>
    </Link>
  );
}
