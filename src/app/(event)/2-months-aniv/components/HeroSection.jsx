"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white overflow-hidden h-screen w-full snap-start snap-always">
      <FlickeringGrid
        className="absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        flickerChance={0.1}
      />
      <h1 className="relative z-10 text-4xl font-bold text-gray-800 dark:text-gray-200 max-w-6xl text-center px-6">
        Ini bukan tentang kisah yang sempurna, tapi tentang kita yang terus
        memilih satu sama lain, setiap hari.
      </h1>
      <p className="relative z-10 mt-4 text-lg text-gray-600 dark:text-gray-400">
        Welcome, My Dearest Love. This is a special place where I pour out my
        heart and soul.
      </p>
    </div>
  );
}
