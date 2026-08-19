import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="relative bg-fog">
      <div className="bg-grid-light pointer-events-none absolute inset-0" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Services"
            title="What We Do"
            description="From websites and software to design, commerce, and AI — we build digital products around the problem you actually need solved."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 50}>
              <ServiceCard service={service} tone="light" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
