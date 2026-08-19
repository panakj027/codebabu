export type ServiceIconName =
  | "globe"
  | "smartphone"
  | "cpu"
  | "palette"
  | "shopping-bag"
  | "layout"
  | "sparkles";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies?: string[];
  icon: ServiceIconName;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Fast, responsive websites and web applications built for real users and real business goals.",
    description:
      "We design and build modern, fast, responsive websites and web applications. From marketing sites to product platforms, the focus stays on performance, accessibility, and a codebase that is easy to extend.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    icon: "globe",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile apps built for iOS and Android with smooth performance and polished UX.",
    description:
      "We design and build mobile applications for iOS and Android — from customer-facing apps to internal tools. Using React Native and modern mobile practices, we ship apps that feel fast, intuitive, and ready for real users.",
    technologies: ["React Native", "TypeScript", "iOS", "Android", "Firebase"],
    icon: "smartphone",
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    shortDescription:
      "Business-specific applications designed around the way your team actually works.",
    description:
      "We build software around unique workflows — internal tools, client portals, and operations platforms that replace spreadsheets and disconnected systems with something purpose-built.",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "React"],
    icon: "cpu",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "Interfaces shaped around usability, accessibility, and conversion — not decoration.",
    description:
      "We design modern interfaces that are easy to use, accessible, and aligned with conversion goals. The work covers structure, visual systems, and interaction details that help people move through a product with confidence.",
    icon: "palette",
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    shortDescription:
      "Online stores and custom shopping experiences that are ready to grow with the catalog.",
    description:
      "We build scalable online stores and custom e-commerce experiences — from catalog and checkout to integrations that keep operations running after launch.",
    technologies: ["WooCommerce", "Shopify", "Custom solutions"],
    icon: "shopping-bag",
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    shortDescription:
      "Professional WordPress websites with custom themes, plugins, and integrations.",
    description:
      "We create professional WordPress websites with custom themes, plugins, and integrations. The goal is a site that editors can manage, that loads quickly, and that does not feel like a generic template.",
    technologies: ["WordPress", "WooCommerce", "Custom themes"],
    icon: "layout",
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortDescription:
      "Practical AI features, automation, and API integrations that support real workflows.",
    description:
      "We build AI-powered applications, automation, intelligent workflows, and API integrations. The emphasis is on useful outcomes — assisting teams, speeding up processes, and connecting models to the systems you already use.",
    technologies: ["OpenAI APIs", "Custom workflows", "Node.js"],
    icon: "sparkles",
  },
];
