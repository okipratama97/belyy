"use client";

import { ShineBorder } from "@/components/ui/shine-border";

export default function VisiSection() {
  return (
    <div className="min-h-screen w-full snap-start flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg border border-rose-200/50 hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
          <ShineBorder
            shineColor={["#F43F5E", "#EC4899", "#A855F7"]}
            className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
          />
          <div className="flex items-center gap-3 mb-8">
            <span className="text-6xl">✨</span>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-rose-600 tracking-tight">
              Visi
            </h2>
          </div>
          <p className="text-lg md:text-xl font-lora leading-relaxed text-gray-700 font-light">
            Membangun hubungan yang tidak hanya saling mencintai, tetapi juga
            saling menguatkan untuk berkembang, mandiri secara finansial, dan
            menciptakan masa depan yang stabil serta penuh kebahagiaan bersama
            🥰😘😚🌹❣️✨
          </p>
        </div>
      </div>
    </div>
  );
}
