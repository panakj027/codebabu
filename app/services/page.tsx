import { PageHero } from "@/components/PageHero";
import { ServiceCTA, ServiceList } from "@/components/services/ServiceList";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Services",
  description:
    "CodeBabu offers web development, custom software, UI/UX design, e-commerce, WordPress, and AI solutions built around your business.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Services"
        title="Technology Solutions Built Around Your Business."
        subtitle="Pick a starting point — or tell us the outcome you need. We'll recommend the right mix of design, engineering, and AI."
      />
      <ServiceList />
      <ServiceCTA />
    </main>
  );
}
