import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CTASection } from "@/components/CTASection";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Selected websites, software, e-commerce, WordPress, and AI projects from CodeBabu — digital experiences built for real business needs.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Projects"
        title="Our Work"
        subtitle="Selected projects and digital experiences we've built."
      />
      <section className="bg-navy">
        <Container className="py-14 sm:py-16 lg:py-20">
          <ProjectGrid />
        </Container>
      </section>
      <CTASection
        heading="Have a similar project in mind?"
        description="Describe the product you want to launch. We'll help you map the path from idea to a working release."
        buttonLabel="Start a Conversation"
      />
    </main>
  );
}
