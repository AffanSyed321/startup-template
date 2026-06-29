# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 marketing website template, configured for standalone deployment with enhanced security headers and performance optimizations.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Development server runs on `http://localhost:3000` with hot-reload enabled.

### Building for Production
```bash
npm run build
```
Creates an optimized production build in standalone mode.

### Running Production Build
```bash
npm run start
```
Starts the production server (requires a build first).

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality (configured with Next.js TypeScript rules).

## Architecture

### Framework Configuration

**Next.js Config** (`next.config.ts`):
- Standalone output mode for Docker/containerized deployments
- Security headers: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- ETag generation enabled, compression enabled, powered-by header disabled
- Cache headers for sitemap.xml and robots.txt (24h max-age, 12h stale-while-revalidate)

**TypeScript Config**:
- ES2017 target with strict mode enabled
- Path alias: `@/*` maps to project root
- Next.js plugin included for type safety

### UI Component System

**shadcn/ui Integration** (`components.json`):
- Style: "new-york" variant
- React Server Components (RSC) enabled
- Base color: "neutral" with CSS variables
- Icon library: lucide-react
- Path aliases configured for components, utils, ui, lib, and hooks

**Styling**:
- Tailwind CSS v4 with PostCSS
- tw-animate-css for animations
- Custom CSS variables for theming (light/dark modes)
- Oklahoma LCH (oklch) color space for consistent color perception

### Component Organization

**Active Components** (`components/` directory):
- `hero-section.tsx` - Main hero/landing section with custom videos
- `features-5.tsx` - Features section with MainFeatures carousel and feature grid
- `MainFeatures.tsx` - Interactive feature carousel with videos
- `pricing.tsx` - Pricing table/cards
- `call-to-action.tsx` - CTA section
- `enhanced-footer.tsx` - Footer component
- `header.tsx` - Navigation header
- `logo.tsx` - Site logo component
- `theme-provider.tsx` - Theme management wrapper

**Unused Components** (`components/trash/` directory):
- Components moved here are not deleted but archived

**UI Primitives** (`components/ui/`):
- Radix UI components wrapped with consistent styling

### Theme System

**ThemeProvider** (`components/theme-provider.tsx`):
- Wraps entire application in `app/layout.tsx`
- **Forced light mode**: `defaultTheme="light"`, `forcedTheme="light"`
- System theme detection disabled
- Storage key: "app-theme"

**Fonts**:
- Geist Sans (variable: `--font-geist-sans`)
- Geist Mono (variable: `--font-geist-mono`)
- Instrument Serif (variable: `--font-instrument-serif`)

### Key Dependencies

**UI/Animation**:
- Radix UI primitives (accordion, avatar, dialog, label, slot)
- Motion for animations
- Embla Carousel with autoplay
- Lucide React for icons
- Sonner for toast notifications

**Styling**:
- class-variance-authority (cva) for component variant management
- clsx & tailwind-merge combined in cn() utility

### Common Tasks

**Change text in hero section**: Edit `components/hero-section.tsx`
**Add/remove landing page sections**: Edit `app/page.tsx`
**Modify feature cards**: Edit `components/features-5.tsx`
**Update pricing**: Edit `components/pricing.tsx`
**Change site metadata**: Edit `app/layout.tsx`
