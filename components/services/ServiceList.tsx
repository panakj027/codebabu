import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/ServiceIcon";

export function ServiceList() {
  return (
    <section className="bg-fog">
      <Container className="space-y-6 py-16 sm:py-20">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 40}>
            <article
              id={service.slug}
              className="scroll-mt-28 rounded-3xl border border-snow bg-paper p-6 shadow-sm sm:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-violet/10 text-accent">
                  <ServiceIcon name={service.icon} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-text sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-body">
                    {service.description}
                  </p>
                  {service.technologies ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-snow bg-fog px-3 py-1 text-xs font-medium text-ink-text"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

export function ServiceCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="mesh pointer-events-none absolute inset-0" />
      <Container className="relative py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Not sure what you need?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Tell us about your idea and we&apos;ll help you find the right
              solution.
            </p>
            <Button href="/contact" size="lg" className="mt-8 w-full sm:w-auto">
              Talk to Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
