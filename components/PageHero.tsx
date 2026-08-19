import { Container } from "@/components/Container";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8">
      <div className="mesh pointer-events-none absolute inset-0" />
      <div className="bg-grid animate-grid-drift pointer-events-none absolute inset-0" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-[2rem] font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
