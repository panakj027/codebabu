import {
  Cpu,
  Globe,
  LayoutTemplate,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "@/data/services";

const icons: Record<ServiceIconName, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  cpu: Cpu,
  palette: Palette,
  "shopping-bag": ShoppingBag,
  layout: LayoutTemplate,
  sparkles: Sparkles,
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  const Icon = icons[name];
  return <Icon className="h-5 w-5" aria-hidden="true" />;
}
