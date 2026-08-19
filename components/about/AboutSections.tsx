import { Handshake, MessageSquare, ShieldCheck, WandSparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  {
    title: "Quality First",
    description:
      "We care about the details that last — structure, performance, accessibility, and a codebase people can maintain.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Communication",
    description:
      "You will know what we are building, why we chose an approach, and where things stand — without status-report theater.",
    icon: MessageSquare,
  },
  {
    title: "Modern Development",
    description:
      "We use current frameworks and practices so your product is not stuck with yesterday's constraints.",
    icon: WandSparkles,
  },
  {
    title: "Long-Term Partnership",
    description:
      "Launch is a milestone, not an ending. We build in a way that supports iteration, support, and future features.",
    icon: Handshake,
  },
];

export function AboutIntro() {
  return (
    <section className="bg-fog">
      <Container className="grid items-start gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <Reveal>
          <SectionHeading
            align="left"
            tone="dark"
            eyebrow="Studio"
            title="A focused team for modern digital products"
            description="CodeBabu is an IT development studio that helps businesses turn ideas into working digital products. We create modern websites, web applications, e-commerce platforms, software solutions, and AI-powered products — with a focus on clarity, performance, and long-term usefulness."
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="rounded-3xl border border-snow bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-relaxed text-slate-body sm:text-base">
              We work as a technology partner, not a ticket mill. That means we
              take time to understand the problem, choose the right stack, and
              ship software that teams can actually use and grow with.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-body sm:text-base">
              Whether you need a new website, an internal tool, a store, or an
              AI-assisted workflow, the brief stays the same: make something
              that is reliable, understandable, and ready for the next version.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="mesh pointer-events-none absolute inset-0" />
      <Container className="relative grid gap-6 py-16 sm:py-20 lg:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-3xl border border-white/8 bg-navy-card/80 p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              To help businesses use technology to build better products,
              improve customer experiences, and grow digitally.
            </p>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="h-full rounded-3xl border border-white/8 bg-navy-card/80 p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Our Vision
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              To become a trusted technology partner for businesses looking to
              build meaningful digital products.
            </p>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-fog">
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Why choose us"
            title="Why Choose Us"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 50}>
              <article className="h-full rounded-2xl border border-snow bg-paper p-6 shadow-sm sm:p-7">
                <reason.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink-text">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">
                  {reason.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

const approach = ["Plan", "Design", "Develop", "Test", "Launch", "Improve"];

export function Approach() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <Container className="relative py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Development approach"
            title="A cycle built for real products"
            description="We do not stop at launch. Each stage feeds the next, so the product can keep getting clearer and stronger."
          />
        </Reveal>
        <Reveal delay={80}>
          <ol className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {approach.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-white/12 bg-navy-card px-4 py-2.5 font-display text-sm font-semibold text-white sm:px-5 sm:text-base">
                  {step}
                </span>
                {index < approach.length - 1 ? (
                  <span className="hidden text-muted sm:inline" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
