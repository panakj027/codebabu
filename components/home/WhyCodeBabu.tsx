import { Code2, Layers, Rocket, Users } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const features = [
  {
    title: "Experienced Development",
    description:
      "We plan, build, and ship with care — from architecture decisions to the last interface detail.",
    icon: Code2,
  },
  {
    title: "Modern Technology",
    description:
      "We work with current, proven tools so your product stays fast, maintainable, and ready to grow.",
    icon: Layers,
  },
  {
    title: "Scalable Solutions",
    description:
      "We design systems that start focused and can expand as your users, catalog, or operations grow.",
    icon: Rocket,
  },
  {
    title: "Client-Focused Approach",
    description:
      "Clear communication, honest timelines, and work that maps to your actual business goals.",
    icon: Users,
  },
];

export function WhyCodeBabu() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="mesh pointer-events-none absolute inset-0 opacity-70" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Approach"
            title="Why CodeBabu"
            description="We treat every project as a product — not a pile of pages or tickets."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 60}>
              <article className="h-full rounded-2xl border border-white/8 bg-navy-card/70 p-6 transition duration-300 hover:border-accent/35">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/6 text-accent-soft">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
