import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Startup Template",
  description:
    "Meet the team building the platform. Leadership in AI, marketing, and engineering working to help creators dominate their niche.",
  keywords: [
    "team",
    "leadership",
    "AI team",
    "startup team",
  ],
  openGraph: {
    title: "Our Team | Startup Template",
    description:
      "Meet the team building the platform.",
  },
  twitter: {
    title: "Our Team | Startup Template",
    description:
      "Meet the team building the platform.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
