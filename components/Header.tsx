"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition duration-300",
        scrolled || open
          ? "border-b border-white/8 bg-ink/80 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const current =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-sm font-medium transition",
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
        <div className="hidden md:block">
          <Button href="/contact" size="sm">
            Let&apos;s Talk
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        pathname={pathname}
      />
    </header>
  );
}
