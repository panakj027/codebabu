import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechnologyBadge } from "@/components/TechnologyBadge";
import { technologies } from "@/data/technologies";

export function TechStack() {
  return (
    <section className="relative border-t border-white/8 bg-navy">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Technology"
            title="Built With Modern Technology"
            description="We choose proven, current tools so products stay fast, maintainable, and ready to grow."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((technology, index) => (
            <Reveal key={technology.name} delay={index * 40}>
              <TechnologyBadge technology={technology} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
