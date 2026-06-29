import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Startup Template",
    template: "%s | Startup Template",
  },
  description:
    "A modern startup landing page template built with Next.js, Tailwind CSS, and TypeScript.",
  keywords: [
    "startup template",
    "landing page",
    "Next.js template",
    "SaaS template",
    "content repurposing",
    "content creator tools",
  ],
  authors: [
    { name: "Template Team" }
  ],
  creator: "Template Team",
  publisher: "Template Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Startup Template",
    description: "A modern startup landing page template built with Next.js, Tailwind CSS, and TypeScript.",
    siteName: "Startup Template",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Startup Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Template",
    description: "A modern startup landing page template built with Next.js, Tailwind CSS, and TypeScript.",
    images: ["/og-image.png"],
  },
  category: "Technology",
  applicationName: "Startup Template",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-black.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/logo-black.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "white",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          themes={["light"]}
          disableTransitionOnChange
          enableSystem={false}
          storageKey="app-theme"
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
