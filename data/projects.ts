export type ProjectFilter =
  | "all"
  | "web"
  | "software"
  | "ecommerce"
  | "wordpress"
  | "ai";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  filter: Exclude<ProjectFilter, "all">;
  accent: "blue" | "violet" | "cyan" | "magenta" | "indigo" | "teal";
};

export const projectFilters: { label: string; value: ProjectFilter }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Software", value: "software" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "WordPress", value: "wordpress" },
  { label: "AI", value: "ai" },
];

export const projects: Project[] = [
  {
    slug: "business-website",
    title: "Business Website",
    description:
      "Modern corporate website with a responsive UI, clear information architecture, and optimized performance.",
    category: "Web Development",
    filter: "web",
    accent: "blue",
  },
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "Scalable online shopping experience with product management, search, and a streamlined checkout flow.",
    category: "E-commerce",
    filter: "ecommerce",
    accent: "violet",
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    description:
      "Analytics and business management dashboard with a clean layout for monitoring activity and key metrics.",
    category: "Custom Software",
    filter: "software",
    accent: "cyan",
  },
  {
    slug: "ai-assistant",
    title: "AI Assistant",
    description:
      "AI-powered application with conversational workflows, context handling, and API integration.",
    category: "AI Solutions",
    filter: "ai",
    accent: "magenta",
  },
  {
    slug: "wordpress-business-website",
    title: "WordPress Business Website",
    description:
      "Custom WordPress website focused on performance, editorial control, and conversion-oriented page layouts.",
    category: "WordPress",
    filter: "wordpress",
    accent: "indigo",
  },
  {
    slug: "mobile-friendly-web-app",
    title: "Mobile-Friendly Web App",
    description:
      "Responsive web application designed for users across phones, tablets, and desktop — without a separate native app.",
    category: "Web Application",
    filter: "web",
    accent: "teal",
  },
];
