"use client";

import Link from "next/link";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-rose-950 font-sans">
      <FlickeringGrid
        className="absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#ec4899"
        flickerChance={0.1}
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-6xl font-playfair font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent max-w-2xl text-center px-6">
            Welcome, My Dearest Love
          </h1>
          <p className="font-lora text-lg text-rose-400 dark:text-rose-300 font-light tracking-wide">
            ✨ A special place, just for us ✨
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row">
          <Link
            href="/2-months-aniv"
            className="group relative px-10 py-4 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-lora font-medium rounded-full shadow-lg hover:shadow-2xl hover:shadow-rose-400/50 transition-all duration-300 hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              💕 2 Months Anniversary
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/visi-misi"
            className="group relative px-10 py-4 bg-gradient-to-r from-amber-300 via-rose-300 to-pink-400 hover:from-amber-400 hover:via-rose-400 hover:to-pink-500 text-white font-lora font-medium rounded-full shadow-lg hover:shadow-2xl hover:shadow-rose-300/50 transition-all duration-300 hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              🌹 Visi & Misi
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
