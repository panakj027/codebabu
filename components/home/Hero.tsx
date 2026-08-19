import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { HeroVisual } from "@/components/home/HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mesh pointer-events-none absolute inset-0" />
      <div className="bg-grid animate-grid-drift pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-violet/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:py-20">
        <div className="min-w-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
            IT development studio
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.12]">
            We Build <span className="text-gradient">Digital Solutions</span>{" "}
            That Help Businesses Grow.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            CodeBabu helps businesses turn ideas into fast, scalable, and
            engaging digital products through modern web development, software
            solutions, UI/UX design, and AI technologies.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Start a Project
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              View Our Work
            </Button>
          </div>
        </div>
        <div className="min-w-0 overflow-hidden">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
