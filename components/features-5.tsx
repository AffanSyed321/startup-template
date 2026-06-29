import {
  Brain,
  Image,
  Focus,
  Captions,
  TrendingUp,
  FlaskConical,
  Zap,
  Scissors,
  FileCode,
} from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { Card } from "./ui/card";
import MainFeatures from "./MainFeatures";
import { TextEffect } from "./ui/text-effect";
import AudioVideoDemo from "./audio-video-demo";
import { PinnedContext } from "./pinned-context";

export default function FeaturesSection() {
  return (
    <section className="py-0 md:py-0" id="features">
      {/* How It Works Section - full width for seamless bg */}
      <PinnedContext />

      <div className="mx-auto max-w-full px-2 md:px-6 bg-[#FAF6ED] pb-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row mt-0 relative">
          <div className="w-full">

            {/* Core Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-48 md:-mt-[40vh] relative z-20 animate-in fade-in duration-500 slide-in-from-bottom-8">
              {[
                {
                  icon: Brain,
                  text: "AI-Powered Insights",
                  description: <><strong>Smart analytics</strong> that learn from your data. Connect your sources and get actionable insights tailored to your business.</>,
                  color: "text-purple-500",
                },
                {
                  icon: Zap,
                  text: "Lightning Fast",
                  description: "Built for speed. Our infrastructure ensures sub-second response times, no matter the scale.",
                  color: "text-yellow-500",
                },
                {
                  icon: Image,
                  text: "Beautiful Output",
                  description: "Studio-quality results with pixel-perfect precision. Consistency across every export.",
                  color: "text-green-500",
                },
                {
                  icon: TrendingUp,
                  text: "Growth Engine",
                  description: "Track what matters. Built-in analytics and optimization to help you grow faster.",
                  color: "text-emerald-500",
                },
                {
                  icon: Focus,
                  text: "Multi-Platform",
                  description: "Deploy everywhere. One input, optimized output for every platform and format.",
                  color: "text-orange-500",
                },
                {
                  icon: Captions,
                  text: "Smart Automation",
                  description: "Automate the repetitive work. Set rules, triggers, and workflows that run on autopilot.",
                  color: "text-pink-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden relative flex bg-transparent flex-col h-auto gap-3 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <item.icon className={`size-8 flex-shrink-0 ${item.color}`} />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-instrument-serif font-semibold text-gray-900">
                      {item.text}
                    </h3>
                    <p className="text-sm font-instrument-serif text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out absolute inset-0">
                    <BorderBeam duration={4} borderWidth={1.5} />
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Features Section */}
            <div className="flex flex-col justify-center gap-2 items-center mt-20">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h2"
                className="text-4xl font-instrument-serif lg:text-5xl [&>span:nth-last-child(-n+2)]:italic"
              >
                Additional Features
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="text-center font-instrument-serif max-w-3xl"
              >
                Everything you need to go from idea to production, with the tools to iterate fast.
              </TextEffect>
            </div>

            {/* Additional Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 animate-in fade-in duration-1000 slide-in-from-bottom-8">
              {[
                {
                  icon: Scissors,
                  text: "Smart Editing",
                  description: "Intelligent editing tools that adapt to your workflow and preferences.",
                  color: "text-rose-500",
                },
                {
                  icon: Captions,
                  text: "Auto-Captioning",
                  description: "Generate captions and metadata automatically, styled to match your brand.",
                  color: "text-cyan-500",
                },
                {
                  icon: FileCode,
                  text: "Export Anywhere",
                  description: "Export to any format. Compatible with your favorite professional tools.",
                  color: "text-amber-500",
                },
                {
                  icon: FlaskConical,
                  text: "A/B Testing",
                  description: "Create variations and test what works best before you ship.",
                  color: "text-violet-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden relative flex bg-transparent flex-col h-auto gap-3 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <item.icon className={`size-8 flex-shrink-0 ${item.color}`} />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-instrument-serif font-semibold text-gray-900">
                      {item.text}
                    </h3>
                    <p className="text-sm font-instrument-serif text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out absolute inset-0">
                    <BorderBeam duration={4} borderWidth={1.5} />
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 md:mt-16">
              <MainFeatures />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
