# Startup Template

A production-ready Next.js 15 marketing website template with waitlist functionality, animated feature sections, a blog/resources system, and full SEO configuration. Designed to be forked, customized, and deployed in minutes.

## Live Preview

Clone and run locally to see the full template in action.

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router, React 19) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4, CSS variables (oklch color space) |
| UI Components | shadcn/ui (new-york variant), Radix UI primitives |
| Animations | Framer Motion / Motion, tw-animate-css |
| Icons | Lucide React |
| Forms & Backend | Firebase Firestore (waitlist), Resend (email notifications) |
| Fonts | Geist Sans, Geist Mono, Instrument Serif (Google Fonts) + Beige Culture (local) |
| Deployment | Standalone mode (Vercel, Railway, Docker, any Node.js host) |

---

## Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/AffanSyed321/startup-template.git
cd startup-template
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
startup-template/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (metadata, fonts, theme)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles & CSS variables
│   ├── about/                    # About/team page
│   │   ├── page.tsx
│   │   └── layout.tsx            # About page metadata
│   ├── resources/                # Blog/resources section
│   │   ├── page.tsx              # Resources index
│   │   ├── resources.css         # Resources-specific styles
│   │   ├── layout.tsx            # Resources metadata
│   │   └── [slug]/page.tsx       # Individual article pages
│   ├── waitlist/page.tsx         # Dedicated waitlist page
│   ├── api/
│   │   └── waitlist/route.ts     # Waitlist email notification API
│   ├── robots.ts                 # SEO robots.txt generation
│   └── sitemap.ts                # SEO sitemap generation
├── components/                   # React components
│   ├── hero-section.tsx          # Hero with background video & animated text
│   ├── features-5.tsx            # Feature grid with icons & border animations
│   ├── MainFeatures.tsx          # Demo video showcase section
│   ├── pinned-context.tsx        # Scroll-triggered word reveal section
│   ├── context-expansion.tsx     # Interactive pipeline/timeline visualization
│   ├── audio-video-demo.tsx      # Input -> Output demo section
│   ├── pricing.tsx               # Waitlist/pricing card
│   ├── call-to-action.tsx        # CTA section
│   ├── header.tsx                # Responsive navigation header
│   ├── footer.tsx                # Footer with links
│   ├── enhanced-footer.tsx       # Footer wrapper
│   ├── logo.tsx                  # Site logo (text-based, easy to swap)
│   ├── waitlist-form.tsx         # Two-step waitlist form component
│   ├── hash-scroll-handler.tsx   # Smooth scroll to hash links
│   ├── theme-provider.tsx        # next-themes wrapper
│   ├── ProfileCard.tsx           # Team member profile card
│   ├── ProfileCard.css           # Profile card styles
│   ├── magicui/
│   │   └── border-beam.tsx       # Animated border beam effect
│   ├── ui/                       # shadcn/ui primitives
│   │   ├── accordion.tsx
│   │   ├── alert.tsx
│   │   ├── animated-group.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── platform-icons.tsx
│   │   ├── radio-group.tsx
│   │   └── text-effect.tsx
│   └── trash/                    # Archived components (not used, available for reference)
│       ├── faqs-3.tsx            # FAQ accordion section
│       ├── features-12.tsx       # Alternative features layout
│       ├── GitStars.tsx          # GitHub stars counter
│       ├── pricing.tsx           # Alternative pricing layout
│       └── speech-to-text-features.tsx
├── lib/                          # Utilities & data
│   ├── articles.tsx              # Blog article content & types
│   ├── firebase.ts               # Firebase initialization
│   ├── menuItems.ts              # Navigation menu items
│   └── utils.ts                  # cn() utility (clsx + tailwind-merge)
├── fonts/                        # Local font files
├── public/                       # Static assets
│   ├── Trees_Swaying_in_Gentle_Breeze.mp4  # Hero background video
│   └── favicon.ico
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind & postcss configs    # Styling configuration
├── firebase.json                 # Firebase project config
├── firestore.rules               # Firestore security rules
├── components.json               # shadcn/ui configuration
└── CLAUDE.md                     # AI assistant context file
```

---

## Page Breakdown

### Homepage (`app/page.tsx`)

The landing page renders these sections in order:

1. **HeroSection** - Full-screen hero with background video, animated headline text, and scroll indicator
2. **PinnedContext** (inside FeaturesSection) - Scroll-triggered word-by-word text reveal with sticky positioning
3. **ContextExpansion** (inside FeaturesSection) - Interactive pipeline visualization (Upload > Analyze > Process > Generate > Style > Export)
4. **Feature Cards** (inside FeaturesSection) - 6-card grid + 4-card grid with hover border beam animations
5. **MainFeatures** - Demo video showcase with border beam
6. **Pricing** - Waitlist card with early access badge
7. **CallToAction** - Final CTA
8. **EnhancedFooter** - Footer with navigation links

### Resources (`app/resources/`)

A full blog system with:
- Index page with featured article hero and article grid
- Individual article pages with rich formatting (`[slug]/page.tsx`)
- Articles defined as React components in `lib/articles.tsx`
- Editorial CSS styles in `resources/resources.css`

### About (`app/about/`)

Team/about page with placeholder profile cards.

### Waitlist (`app/waitlist/`)

Dedicated waitlist page.

---

## Customization Guide

### 1. Branding

**Logo** - Edit `components/logo.tsx`. Currently renders text; swap in an `<Image>` tag for a logo file:

```tsx
// components/logo.tsx
import Image from "next/image";

export const Logo = () => (
  <Image src="/your-logo.png" alt="Logo" width={120} height={40} />
);
```

**Site metadata** - Edit `app/layout.tsx` to update title, description, Open Graph tags, Twitter cards, and favicon references.

**Colors** - Edit CSS variables in `app/globals.css`. The template uses oklch color space for consistent perception across light/dark modes.

### 2. Content

| What to change | File to edit |
|---------------|-------------|
| Hero headline & subtext | `components/hero-section.tsx` |
| Feature cards (icons, titles, descriptions) | `components/features-5.tsx` |
| Scroll reveal text | `components/pinned-context.tsx` |
| Pipeline steps | `components/context-expansion.tsx` |
| Pricing/waitlist card | `components/pricing.tsx` |
| CTA text | `components/call-to-action.tsx` |
| Navigation links | `lib/menuItems.ts` |
| Footer copyright | `components/footer.tsx` |
| Blog articles | `lib/articles.tsx` |
| About/team page | `app/about/page.tsx` |

### 3. Media Assets

Place videos and images in `/public` and reference them as `src="/filename.ext"` (no `/public` prefix needed).

**Hero background video**: Replace `/public/Trees_Swaying_in_Gentle_Breeze.mp4` and update the `src` in `components/hero-section.tsx`.

**Demo video**: Update `components/MainFeatures.tsx` to point to your demo video.

### 4. Adding New Pages

Create a new folder in `app/`:

```
app/
  your-page/
    page.tsx      # Page component
    layout.tsx    # Optional: page-specific metadata
```

Add a navigation link in `lib/menuItems.ts`:

```ts
export const menuItems = [
  { name: "Features", href: "/#features" },
  { name: "Your Page", href: "/your-page" },
  // ...
];
```

---

## Waitlist Setup

The waitlist system has two backends:

### Firebase Firestore (data storage)

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Add environment variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

4. Deploy Firestore rules:

```bash
firebase deploy --only firestore:rules
```

The included rules (`firestore.rules`) allow anyone to create waitlist entries but prevent reading or modifying them.

### Resend (email notifications)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add environment variable:

```env
RESEND_API_KEY=re_your-api-key
```

4. Update the recipient email in `app/api/waitlist/route.ts`:

```ts
to: "your-email@yourdomain.com",
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | For waitlist | Firebase API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | For waitlist | Firebase auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | For waitlist | Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | For waitlist | Firebase storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | For waitlist | Firebase messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | For waitlist | Firebase app ID |
| `RESEND_API_KEY` | For email notifications | Resend API key |

The site runs without these variables, but the waitlist form submissions will fail silently.

---

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo directly in the [Vercel dashboard](https://vercel.com/new).

### Docker

The project is configured with `output: "standalone"` in `next.config.ts`. Example Dockerfile:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

### Railway / Render / Fly.io

Connect the GitHub repo and set the build command to `npm run build` and start command to `npm run start`.

---

## Security Headers

The following headers are applied to all routes via `next.config.ts`:

| Header | Value |
|--------|-------|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |

---

## Archived Components

The `components/trash/` directory contains unused components that may be useful:

- **`faqs-3.tsx`** - Accordion FAQ section with icons
- **`features-12.tsx`** - Tabbed features section with video previews
- **`pricing.tsx`** - Free/Pro tier pricing cards with feature lists
- **`speech-to-text-features.tsx`** - STT provider integration showcase
- **`GitStars.tsx`** - GitHub star count display

To restore a component, import it in the relevant page file.

---

## Key Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| `next` | 16.1.1 | React framework |
| `react` | 19.1.0 | UI library |
| `tailwindcss` | v4 | Utility-first CSS |
| `motion` / `framer-motion` | 12.x | Animations |
| `@radix-ui/*` | Latest | Accessible UI primitives |
| `lucide-react` | 0.541+ | Icon library |
| `embla-carousel-react` | 8.x | Carousel/slider |
| `sonner` | 2.x | Toast notifications |
| `next-themes` | 0.4.x | Theme management |
| `firebase` | 12.x | Firestore database |
| `resend` | 6.x | Email API |
| `react-markdown` | 10.x | Markdown rendering |

---

## License

MIT - Use this template for any personal or commercial project.
