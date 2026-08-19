import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredProjects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Portfolio"
            title="Selected Work"
            description="Platforms, storefronts, and AI products shipped for real businesses — from booking systems to multi-country commerce."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 50}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <Button href="/projects" variant="secondary" size="lg" className="w-full sm:w-auto">
              View all projects
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
