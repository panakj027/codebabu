import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the problem, audience, constraints, and what success should look like.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Shape the experience, structure, and visual system before a line of production code.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build with clean, maintainable code, solid engineering, and regular progress reviews.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Ship a confident release, then support the handoff so the product can keep moving.",
  },
];

export function Process() {
  return (
    <section className="relative bg-fog">
      <div className="bg-grid-light pointer-events-none absolute inset-0" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Process"
            title="How we work"
            description="A simple path from idea to launch — with room to iterate once the product is in people's hands."
          />
        </Reveal>
        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-accent/0 via-accent/40 to-violet/0 lg:block"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 70}>
              <article className="relative h-full rounded-2xl border border-snow bg-paper p-6 shadow-sm">
                <p className="font-mono text-sm font-semibold text-accent">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
