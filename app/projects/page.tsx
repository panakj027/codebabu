import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CTASection } from "@/components/CTASection";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "CodeBabu portfolio — SaaS platforms, AI tools, ecommerce storefronts, booking systems, and WordPress sites built for real businesses.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Projects"
        title="Our Work"
        subtitle="Selected platforms, storefronts, and digital products we've built — from AI SaaS and booking systems to multi-country ecommerce."
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
