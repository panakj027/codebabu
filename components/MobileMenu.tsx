"use client";

import { useEffect, useId } from "react";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      className={cn(
        "overflow-hidden border-b border-white/8 bg-navy/95 backdrop-blur-xl md:hidden",
        "transition-[max-height,opacity] duration-300 ease-out",
        open ? "max-h-[28rem] opacity-100" : "pointer-events-none max-h-0 opacity-0",
      )}
      inert={!open || undefined}
      aria-hidden={!open}
      aria-labelledby={titleId}
    >
      <div className="px-5 py-4 sm:px-6">
        <p id={titleId} className="sr-only">
          Site navigation
        </p>
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const current =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-base font-medium transition",
                      current
                        ? "bg-white/8 text-white"
                        : "text-muted hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button href="/contact" className="mt-4 w-full" onClick={onClose}>
          Let&apos;s Talk
        </Button>
      </div>
    </div>
  );
}
