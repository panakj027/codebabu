import {
  Cpu,
  Globe,
  LayoutTemplate,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import type { Service, ServiceIconName } from "@/data/services";
import { cn } from "@/lib/cn";

const icons: Record<ServiceIconName, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  cpu: Cpu,
  palette: Palette,
  "shopping-bag": ShoppingBag,
  layout: LayoutTemplate,
  sparkles: Sparkles,
};

type ServiceCardProps = {
  service: Service;
  tone?: "dark" | "light";
};

export function ServiceCard({ service, tone = "light" }: ServiceCardProps) {
  const Icon = icons[service.icon];
  const isDark = tone === "dark";

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border p-6 transition duration-300 sm:p-7",
        isDark
          ? "border-white/8 bg-navy-card/80 hover:border-accent/40 hover:bg-navy-card"
          : "border-snow bg-paper shadow-sm hover:-translate-y-1 hover:border-accent/30 hover:shadow-card",
      )}
    >
      <div
        className={cn(
          "mb-5 flex h-11 w-11 items-center justify-center rounded-xl",
          isDark
            ? "bg-white/6 text-accent-soft"
            : "bg-gradient-to-br from-accent/10 to-violet/10 text-accent",
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3
        className={cn(
          "font-display text-lg font-semibold tracking-tight",
          isDark ? "text-white" : "text-ink-text",
        )}
      >
        {service.title}
      </h3>
      <p
        className={cn(
          "mt-2 flex-1 text-sm leading-relaxed",
          isDark ? "text-muted" : "text-slate-body",
        )}
      >
        {service.shortDescription}
      </p>
      <Link
        href={`/services#${service.slug}`}
        className={cn(
          "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition",
          isDark
            ? "text-accent-soft hover:text-white"
            : "text-accent hover:text-violet",
        )}
      >
        Learn More
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
