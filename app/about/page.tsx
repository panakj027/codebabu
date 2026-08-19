import {
  AboutIntro,
  Approach,
  MissionVision,
  WhyChooseUs,
} from "@/components/about/AboutSections";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { TeamSection } from "@/components/TeamSection";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About",
  description:
    "Meet the CodeBabu team and learn how we create modern websites, web applications, e-commerce platforms, software solutions, and AI-powered products.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About"
        title="We Turn Ideas Into Digital Experiences."
        subtitle="CodeBabu focuses on creating modern websites, web applications, e-commerce platforms, software solutions, and AI-powered products for teams that want technology to work harder for the business."
      />
      <AboutIntro />
      <TeamSection tone="dark" anchorId="team" />
      <MissionVision />
      <WhyChooseUs />
      <Approach />
      <CTASection
        heading="Want to work together?"
        description="Share the idea, the constraint, or the product you have in mind. We'll take it from there."
        buttonLabel="Start a Conversation"
      />
    </main>
  );
}
