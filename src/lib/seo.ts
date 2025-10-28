import { Metadata } from "next";

const siteConfig = {
  name: "Cronboost",
  description: "Transform your vision into stunning web experiences. We build fast, beautiful, and scalable solutions that drive results.",
  url: "https://cronboost.com",
  ogImage: "https://cronboost.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/cronboost",
    github: "https://github.com/cronboost",
  },
};

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "web development",
      "web design",
      "UI/UX design",
      "digital agency",
      "Next.js development",
      "React development",
      "performance optimization",
      "SEO optimization",
    ],
    authors: [{ name: "Cronboost Team" }],
    creator: "Cronboost",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@cronboost",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  };
}

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.links.twitter, siteConfig.links.github],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@cronboost.com",
      contactType: "Customer Service",
    },
  };
}

export { siteConfig };
