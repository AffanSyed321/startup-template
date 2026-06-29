import React from "react";

export interface Article {
  slug: string;
  title: string;
  category: string;
  dek: string;
  author: string;
  readTime: string;
  type: string;
  isFeatured?: boolean;
  related: { title: string; slug: string }[];
  Body: React.FC;
}

const GettingStartedBody: React.FC = () => (
  <>
    <p className="lead">
      <span className="drop">W</span>
      elcome to the Startup Template. This is a placeholder article to demonstrate the resources section layout and styling. Replace this content with your own blog posts, guides, or documentation.
    </p>

    <h2>What this template includes</h2>

    <p>This Next.js 15 template comes pre-configured with everything you need to launch a modern marketing site: responsive layouts, dark mode support, animation libraries, waitlist forms, and a full blog/resources section.</p>

    <p>Each article supports rich formatting including headings, pull quotes, figures, and call-to-action buttons. The layout is designed for long-form reading with a clean, editorial feel.</p>

    <div className="pull">Replace this content with your own story. The template handles the rest.</div>

    <h2>How to customize</h2>

    <p>Edit the articles array in <code>lib/articles.tsx</code> to add your own content. Each article is a React component, so you can include any JSX, images, videos, or interactive elements you need.</p>

    <div className="band">Your content. Your brand. <em>Ready to ship.</em></div>

    <div className="tagline">Get started<br /><span>today.</span></div>

    <div className="rsc-cta">
      <a className="rsc-btn" href="mailto:hello@example.com">Get in touch</a>
    </div>
  </>
);

const FeaturesGuideBody: React.FC = () => (
  <>
    <p className="lead">
      <span className="drop">T</span>
      his template is packed with features out of the box. Here is a quick overview of what you get and how to make the most of each section.
    </p>

    <h2>Hero Section</h2>

    <p>The hero section supports background video, animated text reveals, and interactive media cards. Swap out the placeholder video and images with your own assets in the <code>/public</code> folder.</p>

    <h2>Features Grid</h2>

    <p>A responsive grid of feature cards with hover animations and border beam effects. Each card is fully customizable with icons from Lucide React and your own copy.</p>

    <div className="pull">Every component is designed to be swapped, extended, or removed without breaking the layout.</div>

    <h2>Waitlist &amp; Pricing</h2>

    <p>Includes a two-step waitlist form connected to Firebase and Resend for email notifications. The pricing section supports badges, tiers, and call-to-action buttons.</p>

    <div className="band">Modify the components. <em>Make it yours.</em></div>

    <div className="rsc-cta">
      <a className="rsc-btn" href="mailto:hello@example.com">Get in touch</a>
    </div>
  </>
);

const CustomizationBody: React.FC = () => (
  <>
    <p className="lead">
      <span className="drop">E</span>
      very piece of this template is designed to be replaced with your own content. Here is a step-by-step guide to making it truly yours.
    </p>

    <h2>Step 1: Update branding</h2>

    <p>Replace the logo in <code>components/logo.tsx</code>, update the metadata in <code>app/layout.tsx</code>, and swap out the favicon in <code>/public</code>.</p>

    <h2>Step 2: Add your content</h2>

    <p>Edit the hero section copy, feature descriptions, pricing tiers, and resource articles. All content is defined inline in the component files for easy editing.</p>

    <div className="pull">The best template is the one you make your own.</div>

    <h2>Step 3: Connect your services</h2>

    <p>Set up your Firebase project for the waitlist, add your Resend API key for email notifications, and configure your deployment target (Vercel, Railway, Docker, etc.).</p>

    <div className="band">From template to production. <em>In record time.</em></div>

    <div className="rsc-cta">
      <a className="rsc-btn" href="mailto:hello@example.com">Get in touch</a>
    </div>
  </>
);

export const articles: Article[] = [
  {
    slug: "getting-started",
    title: "Getting Started with the Startup Template",
    category: "Guide",
    dek: "Everything you need to know to launch your marketing site with this Next.js template.",
    author: "Template Team",
    type: "Guide",
    readTime: "3 min read",
    isFeatured: true,
    related: [
      { title: "A Tour of the Built-in Features", slug: "features-guide" },
      { title: "How to Customize Everything", slug: "customization" },
    ],
    Body: GettingStartedBody,
  },
  {
    slug: "features-guide",
    title: "A Tour of the Built-in Features",
    category: "Documentation",
    dek: "Hero sections, feature grids, waitlist forms, and more. Here is what comes out of the box.",
    author: "Template Team",
    type: "Documentation",
    readTime: "4 min read",
    related: [
      { title: "Getting Started with the Startup Template", slug: "getting-started" },
      { title: "How to Customize Everything", slug: "customization" },
    ],
    Body: FeaturesGuideBody,
  },
  {
    slug: "customization",
    title: "How to Customize Everything",
    category: "Tutorial",
    dek: "A step-by-step guide to replacing the placeholder content and making this template your own.",
    author: "Template Team",
    type: "Tutorial",
    readTime: "3 min read",
    related: [
      { title: "Getting Started with the Startup Template", slug: "getting-started" },
      { title: "A Tour of the Built-in Features", slug: "features-guide" },
    ],
    Body: CustomizationBody,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
