export type ProjectFilter =
  | "all"
  | "web"
  | "mobile"
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
  technologies: string[];
  href?: string;
  featured?: boolean;
};

export const projectFilters: { label: string; value: ProjectFilter }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Software", value: "software" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "WordPress", value: "wordpress" },
  { label: "AI", value: "ai" },
];

export const projects: Project[] = [
  {
    slug: "google-business-profile-manager",
    title: "Google Business Profile Manager",
    description:
      "AI-powered SaaS dashboard for managing Google Business profiles, posts, reviews, and customer messages from one place — with automation and AI-assisted content.",
    category: "AI Solutions",
    filter: "ai",
    accent: "magenta",
    technologies: ["Next.js", "Node.js", "TypeScript", "MongoDB", "OpenAI", "Google APIs"],
    featured: true,
  },
  {
    slug: "ai-tutor",
    title: "AI Tutor",
    description:
      "Learning platform with an AI assistant trained on curated subject material. Students get structured modules, personalized explanations, and a subscription-based study experience.",
    category: "AI Solutions",
    filter: "ai",
    accent: "violet",
    technologies: ["React", "Node.js", "Express", "MongoDB", "OpenAI"],
    featured: true,
  },
  {
    slug: "salon-management-platform",
    title: "Salon Management Platform",
    description:
      "Marketplace-style platform where salons create profiles, list services, and manage appointments, with Google Business integrations for local visibility.",
    category: "Custom Software",
    filter: "software",
    accent: "cyan",
    technologies: ["React", "Node.js", "MongoDB", "Google APIs"],
    featured: true,
  },
  {
    slug: "sendtric",
    title: "Sendtric",
    description:
      "Email marketing widgets for countdown timers, polls, and weather — built for campaigns that need live, embeddable components inside messages.",
    category: "Web Application",
    filter: "web",
    accent: "blue",
    technologies: ["React", "Go", "Ruby"],
    href: "https://www.sendtric.com",
    featured: true,
  },
  {
    slug: "mud-australia",
    title: "MUD Australia",
    description:
      "Multi-country ecommerce storefront using BigCommerce, with Akeneo as the product data source and storefronts configured for regional catalogs.",
    category: "E-commerce",
    filter: "ecommerce",
    accent: "indigo",
    technologies: ["Node.js", "BigCommerce", "Akeneo"],
    href: "https://mudaustralia.com",
    featured: true,
  },
  {
    slug: "versalys",
    title: "Versalys",
    description:
      "Professional WordPress website for a business brand, with a clean content structure and a maintainable editorial setup.",
    category: "WordPress",
    filter: "wordpress",
    accent: "teal",
    technologies: ["WordPress"],
    href: "https://www.versalys.com",
    featured: true,
  },
  {
    slug: "cross-platform-mobile-app",
    title: "Cross-Platform Mobile App",
    description:
      "React Native application for iOS and Android with real-time features, push notifications, and a native-feeling interface.",
    category: "Mobile App Development",
    filter: "mobile",
    accent: "cyan",
    technologies: ["React Native", "TypeScript", "Firebase", "Node.js"],
  },
  {
    slug: "touchme",
    title: "TouchMe",
    description:
      "Real-time social platform with swipe matching, live chat, video messaging, subscriptions, and marketplace features on mobile and web.",
    category: "Mobile App Development",
    filter: "mobile",
    accent: "magenta",
    technologies: ["React Native", "React", "Node.js", "MongoDB", "WebSockets", "Stripe"],
  },
  {
    slug: "eyeon-portal",
    title: "EyeOn Portal",
    description:
      "Multi-tenant advertising platform for malls to schedule campaigns and manage digital displays, with role-based access for administrators and advertisers.",
    category: "Custom Software",
    filter: "software",
    accent: "blue",
    technologies: ["React", "Node.js", "Express", "MongoDB", "RBAC"],
  },
  {
    slug: "verisocial",
    title: "VeriSocial",
    description:
      "Vendor marketplace where companies submit products for verification before release, covering onboarding, evaluation workflows, and payment processing.",
    category: "E-commerce",
    filter: "ecommerce",
    accent: "violet",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Crypto payments"],
  },
  {
    slug: "explrar",
    title: "Explrar",
    description:
      "Travel booking platform for flights, hotels, trips, and activities, unified through third-party travel APIs so users can search, compare, and book in one place.",
    category: "Web Application",
    filter: "web",
    accent: "cyan",
    technologies: ["React", "Node.js", "MongoDB", "Travel APIs"],
  },
  {
    slug: "aikyam",
    title: "Aikyam",
    description:
      "Community support platform that connects people with essential social services through a structured, easy-to-navigate web experience.",
    category: "Web Development",
    filter: "web",
    accent: "teal",
    technologies: ["Angular", "Node.js", "Express", "MySQL"],
  },
  {
    slug: "prime-ride-access",
    title: "Prime Ride Access",
    description:
      "Non-emergency medical transportation platform for ride scheduling, realtime coordination, and communication between patients, providers, and healthcare teams.",
    category: "Custom Software",
    filter: "software",
    accent: "indigo",
    technologies: ["Angular", "Node.js", "Firebase", "Twilio"],
  },
  {
    slug: "master-pacific",
    title: "Master Pacific",
    description:
      "Ecommerce storefront on BigCommerce with MYOB Advanced as the operational data source for catalog and order workflows.",
    category: "E-commerce",
    filter: "ecommerce",
    accent: "blue",
    technologies: ["Node.js", "BigCommerce", "MYOB"],
    href: "https://www.masterpacific.com.au",
  },
  {
    slug: "urban-jungle-beauty",
    title: "Urban Jungle Beauty",
    description:
      "Multi-channel beauty ecommerce experience powered by BigCommerce APIs and a Nuxt storefront for catalog, cart, and checkout.",
    category: "E-commerce",
    filter: "ecommerce",
    accent: "violet",
    technologies: ["Node.js", "Nuxt.js", "Vue", "BigCommerce"],
    href: "https://urbanjunglebeauty.com",
  },
  {
    slug: "appelles",
    title: "Appelles",
    description:
      "Beauty brand storefront on a multi-channel BigCommerce setup, sharing catalog services with related brand sites.",
    category: "E-commerce",
    filter: "ecommerce",
    accent: "magenta",
    technologies: ["Node.js", "Nuxt.js", "Vue", "BigCommerce"],
    href: "https://appelles.com",
  },
  {
    slug: "micador",
    title: "Micador",
    description:
      "Ecommerce site using BigCommerce and Business Central for product data, plus Mailchimp for store, order, and cart-abandonment flows.",
    category: "E-commerce",
    filter: "ecommerce",
    accent: "cyan",
    technologies: ["Node.js", "Nuxt.js", "BigCommerce", "Business Central", "Mailchimp"],
    href: "https://micador.com.au",
  },
  {
    slug: "the-balcony-garden",
    title: "The Balcony Garden",
    description:
      "Garden and lifestyle storefront on BigCommerce, with QuickBooks Commerce keeping catalog and operations in sync.",
    category: "E-commerce",
    filter: "ecommerce",
    accent: "teal",
    technologies: ["Node.js", "Nuxt.js", "BigCommerce", "QuickBooks"],
    href: "https://thebalconygarden.com.au",
  },
  {
    slug: "agl-staff-portal",
    title: "AGL Staff Portal",
    description:
      "Internal staff portal for booking mobile broadband plans, built as a full-stack web application with a structured service catalog.",
    category: "Custom Software",
    filter: "software",
    accent: "indigo",
    technologies: ["Node.js", "Nuxt.js", "Vue", "MySQL"],
  },
  {
    slug: "safs-app",
    title: "SAFS App",
    description:
      "Mobile-friendly app for browsing The Status of Australian Fish Stocks Reports, making scientific stock data easier to search and read.",
    category: "Custom Software",
    filter: "software",
    accent: "blue",
    technologies: ["Node.js", "Ionic", "Angular", "PostgreSQL"],
  },
  {
    slug: "peersview",
    title: "PeersView",
    description:
      "Social network for students and alumni — a community for connecting, sharing, and discovering opportunities after campus.",
    category: "Web Application",
    filter: "web",
    accent: "violet",
    technologies: ["Node.js", "Angular", "MySQL"],
    href: "https://peersview.com",
  },
  {
    slug: "chica-locca-tours-crm",
    title: "Tour Activity Booking CRM",
    description:
      "CRM for managing tour and activity bookings — built for operations teams who need a clear view of reservations and customer activity.",
    category: "Custom Software",
    filter: "software",
    accent: "cyan",
    technologies: ["React", "Laravel"],
    href: "https://crm.chicaloccatours.com",
  },
  {
    slug: "euro-car-parts",
    title: "Euro Car Parts",
    description:
      "Automotive parts ecommerce experience where shoppers can look up a vehicle registration and find parts that match that car.",
    category: "E-commerce",
    filter: "ecommerce",
    accent: "indigo",
    technologies: ["PHP"],
    href: "https://www.eurocarparts.com",
  },
  {
    slug: "kiwi-for-gmail",
    title: "Kiwi for Gmail",
    description:
      "Productivity product for Gmail — a desktop-style experience focused on a simpler, more human workflow inside email.",
    category: "Custom Software",
    filter: "software",
    accent: "teal",
    technologies: ["PHP"],
    href: "https://kiwiforgmail.com",
  },
  {
    slug: "automessage",
    title: "AutoMessage",
    description:
      "UK vehicle safety web app that helps drivers stay informed and protect their vehicle through timely, targeted messaging.",
    category: "Web Application",
    filter: "web",
    accent: "blue",
    technologies: ["Laravel", "PHP"],
    href: "https://automessage.co.uk",
  },
  {
    slug: "signcatch",
    title: "SignCatch",
    description:
      "Scan2Pay and Scan2Buy product that lets customers place orders on the spot and gives businesses an extra sales channel.",
    category: "Custom Software",
    filter: "software",
    accent: "magenta",
    technologies: ["Yii", "PHP"],
    href: "https://www.signcatch.com",
  },
  {
    slug: "commerce-baas",
    title: "Commerce Backend-as-a-Service",
    description:
      "API layer that lets storefronts connect to BigCommerce, Shopify, and related commerce services without rebuilding those integrations each time.",
    category: "Custom Software",
    filter: "software",
    accent: "violet",
    technologies: ["Node.js", "BigCommerce", "Shopify"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
