"use client";

import { TextEffect } from "./ui/text-effect";
import { HeroHeader } from "./header";

import { motion, useScroll, useTransform } from "framer-motion";
import { PinnedContext } from "./context-expansion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.5,
      },
    },
  },
};

export default function HeroSection() {
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [bgOpacity, setBgOpacity] = useState(1);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <div className="relative min-h-screen h-screen overflow-hidden" id="home">
      <HeroHeader />
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        <motion.video
          ref={bgVideoRef}
          src="/Trees_Swaying_in_Gentle_Breeze.mp4"
          className="absolute inset-0 w-full h-full object-[2%_center] md:object-[center_40%] object-cover -z-10 scale-125"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          controlsList="none"
          disablePictureInPicture
          disableRemotePlayback
          preload="metadata"
          initial={{ opacity: 0 }}
          animate={{ opacity: bgOpacity }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onTimeUpdate={() => {
            if (bgVideoRef.current) {
              const { currentTime, duration } = bgVideoRef.current;
              if (duration - currentTime <= 1) {
                setBgOpacity(0);
              } else if (currentTime <= 1) {
                setBgOpacity(1);
              }
            }
          }}
        />
        <section className="relative z-10 w-full flex-grow flex items-center">
          <div className="relative w-full pt-20 md:pt-0">
            <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-center text-center">
              <div className="relative mt-4 max-w-3xl">
                <div className="relative inline-block">
                  <motion.h1
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-4xl md:text-6xl xl:text-[4.5rem] font-instrument-serif bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-400 leading-[1.1]"
                  >
                    Build, Ship, Grow
                  </motion.h1>
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.8 }}
                    transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                    className="absolute top-[52%] left-0 w-full h-[3px] md:h-[4px] bg-red-500 -translate-y-1/2 rounded-full origin-left pointer-events-none"
                  />
                </div>
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.9}
                  as="h2"
                  className="mt-4 text-balance text-4xl md:text-6xl xl:text-[5rem] font-instrument-serif text-zinc-900 leading-[1.1]"
                >
                  Your next big thing starts here.
                </TextEffect>
                <div className="mt-8">
                  <TextEffect
                    per="line"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={1.1}
                    as="p"
                    className="text-balance text-base md:text-xl font-instrument-serif leading-relaxed text-gray-700"
                  >
                    A modern startup template with everything you need to launch. Built with Next.js 15, Tailwind CSS, and beautiful animations.
                  </TextEffect>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Indicator Arrow */}
        <motion.div
          style={{ opacity }}
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-10 h-10 rounded-full border-2 border-zinc-200 bg-white/80 backdrop-blur-md flex items-center justify-center text-zinc-900 shadow-lg">
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
