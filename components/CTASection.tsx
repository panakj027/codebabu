import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

type CTASectionProps = {
  heading: string;
  description?: string;
  buttonLabel: string;
  href?: string;
  tone?: "dark" | "light";
};

export function CTASection({
  heading,
  description,
  buttonLabel,
  href = "/contact",
  tone = "dark",
}: CTASectionProps) {
  const isDark = tone === "dark";

  return (
    <section className={cn("relative overflow-hidden", isDark ? "bg-ink" : "bg-fog")}>
      {isDark ? (
        <>
          <div className="mesh pointer-events-none absolute inset-0" />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        </>
      ) : (
        <div className="bg-grid-light pointer-events-none absolute inset-0" />
      )}
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div
          className={cn(
            "mx-auto flex max-w-3xl flex-col items-center rounded-3xl border px-6 py-12 text-center sm:px-10 sm:py-14",
            isDark
              ? "border-white/10 bg-navy-soft/80 shadow-glow"
              : "border-snow bg-paper shadow-card",
          )}
        >
          <h2
            className={cn(
              "font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
              isDark ? "text-white" : "text-ink-text",
            )}
          >
            {heading}
          </h2>
          {description ? (
            <p
              className={cn(
                "mt-4 max-w-xl text-base leading-relaxed",
                isDark ? "text-muted" : "text-slate-body",
              )}
            >
              {description}
            </p>
          ) : null}
          <Button href={href} size="lg" className="mt-8">
            {buttonLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
