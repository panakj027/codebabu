export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavItem[] = [
  { label: "Web Development", href: "/services#web-development" },
  { label: "Software Development", href: "/services#custom-software" },
  { label: "UI/UX", href: "/services#ui-ux-design" },
  { label: "E-commerce", href: "/services#ecommerce-development" },
  { label: "WordPress", href: "/services#wordpress-development" },
  { label: "AI Solutions", href: "/services#ai-solutions" },
];
