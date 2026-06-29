"use client";
import { BorderBeam } from "./magicui/border-beam";

export default function MainFeatures() {
  return (
    <div className="relative flex flex-col gap-8 w-full items-center justify-center pb-8 pt-0 md:pt-2 px-2 md:px-0">
      {/* Demo Placeholder Box */}
      <div className="relative inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background mx-auto max-w-6xl overflow-hidden rounded-xl border p-2 md:p-4 shadow-lg shadow-zinc-950/15 ring-1">
        <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 w-full relative rounded-xl border border-border/25 flex items-center justify-center aspect-video">
          <div className="text-center">
            <p className="text-zinc-400 text-lg font-instrument-serif">Your demo video here</p>
            <p className="text-zinc-300 text-sm font-instrument-serif mt-1">Add a video to /public and update the src</p>
          </div>
        </div>
        <BorderBeam applyInset={false} colorFrom="#89CFF0" colorTo="#89CFF0" borderWidth={3} />
      </div>
    </div>
  );
}
