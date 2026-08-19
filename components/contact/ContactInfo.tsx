import { Clock, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

const items: {
  title: string;
  body: string;
  href?: string;
  icon: typeof Mail;
}[] = [
  {
    title: "Email",
    body: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    title: "Availability",
    body: "Monday – Friday",
    icon: Clock,
  },
  {
    title: "Response",
    body: "We usually respond within 1 business day.",
    icon: MessageCircle,
  },
];

export function ContactInfo() {
  return (
    <aside className="space-y-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-navy-card/80 p-5"
        >
          <div className="flex items-start gap-3">
            <item.icon className="mt-0.5 h-5 w-5 text-accent-soft" aria-hidden="true" />
            <div>
              <h2 className="font-display text-base font-semibold text-white">
                {item.title}
              </h2>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-1 block text-sm text-muted transition hover:text-white"
                >
                  {item.body}
                </a>
              ) : (
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
}
