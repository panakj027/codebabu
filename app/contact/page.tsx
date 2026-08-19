import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Start a project with CodeBabu. Tell us about your idea, website, software, store, or AI workflow — we usually respond within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Great Together."
        subtitle="Have a project, idea, or business challenge? Tell us about it."
      />
      <section className="border-t border-white/8 bg-ink">
        <Container className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)] lg:gap-10 lg:py-20">
          <ContactForm />
          <ContactInfo />
        </Container>
      </section>
    </main>
  );
}
