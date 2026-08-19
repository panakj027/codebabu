import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TechStack } from "@/components/home/TechStack";
import { WhyCodeBabu } from "@/components/home/WhyCodeBabu";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "CodeBabu | Web Development & Digital Solutions",
  description:
    "CodeBabu builds modern websites, web applications, e-commerce platforms, software solutions, and AI-powered digital experiences for growing businesses.",
  path: "/",
});

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <TechStack />
      <ServicesPreview />
      <WhyCodeBabu />
      <Process />
      <CTASection
        heading="Have an Idea? Let's Build It Together."
        description="Tell us what you want to launch. We'll help you shape the approach and start building."
        buttonLabel="Start a Conversation"
      />
    </main>
  );
}
