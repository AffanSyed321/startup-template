'use client';

import { HeroHeader } from '@/components/header';
import { EnhancedFooter } from '@/components/enhanced-footer';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <HeroHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-instrument-serif font-bold mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl font-instrument-serif text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Add your team and story here. This is a placeholder page for your about section.
          </p>
        </div>
      </section>

      {/* Placeholder Team Section */}
      <section className="relative py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start justify-items-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full max-w-xs text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-zinc-200 mb-4" />
                <h3 className="font-instrument-serif font-bold text-lg">Team Member {i}</h3>
                <p className="text-sm text-gray-500 font-instrument-serif">Role Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </main>
  );
}
