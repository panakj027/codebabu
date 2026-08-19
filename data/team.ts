export type TeamLink = {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  experience: string;
  initials: string;
  bio: string;
  skills: string[];
  links: TeamLink[];
};

export const team: TeamMember[] = [
  {
    slug: "pankaj",
    name: "Pankaj",
    role: "Senior Front-End Developer & UI/UX Designer",
    experience: "7+ years",
    initials: "P",
    bio: "Builds React and Next.js interfaces from Figma to production, with a focus on performance, accessibility, and clean component systems. Strong WordPress background.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "WordPress"],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/pankaj2027/" },
      { label: "GitHub", href: "https://github.com/panakj027" },
      {
        label: "Upwork",
        href: "https://www.upwork.com/freelancers/~016b5424f577d308ee",
      },
      {
        label: "Resume",
        href: "/resumes/pankaj-resume.docx",
        download: true,
      },
    ],
  },
  {
    slug: "vinod-bhatia",
    name: "Vinod Bhatia",
    role: "Full Stack Engineer",
    experience: "10+ years",
    initials: "VB",
    bio: "MERN stack engineer building SEO-ready Next.js apps, Node.js APIs, realtime systems, and ecommerce integrations across BigCommerce, Shopify, and custom platforms.",
    skills: ["Node.js", "React", "Next.js", "TypeScript", "MongoDB", "PostgreSQL"],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/vinod-bhatia/" },
      { label: "Upwork", href: "https://www.upwork.com/fl/vinodbhatia" },
      {
        label: "Resume",
        href: "/resumes/vinod-bhatia-resume.docx",
        download: true,
      },
    ],
  },
  {
    slug: "hemant-bhatia",
    name: "Hemant Bhatia",
    role: "Full Stack & AI Solutions Developer",
    experience: "5+ years",
    initials: "HB",
    bio: "Builds scalable web apps, SaaS platforms, and AI-driven systems across MERN and MEAN stacks — with a focus on realtime features, payments, secure APIs, and OpenAI workflows.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "OpenAI"],
    links: [
      {
        label: "Upwork",
        href: "https://www.upwork.com/freelancers/fullstackhemant?mp_source=share",
      },
      { label: "Resume", href: "/resumes/hemant-bhatia-resume.pdf" },
    ],
  },
];
