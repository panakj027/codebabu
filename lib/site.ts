import type { Metadata } from "next";

export const siteConfig = {
  name: "CodeBabu",
  tagline: "Building Digital Experiences That Move Businesses Forward.",
  description:
    "CodeBabu builds modern websites, mobile apps, web applications, e-commerce platforms, software solutions, and AI-powered digital experiences for growing businesses.",
  url: "https://codebabu.com",
  email: "hello@codebabu.com",
  social: {
    linkedin: "https://www.linkedin.com/company/codebabu",
    github: "https://github.com/codebabu",
    instagram: "https://www.instagram.com/codebabu",
  },
} as const;

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({
  title,
  description,
  path,
}: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title:
      path === "/"
        ? { absolute: title }
        : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
