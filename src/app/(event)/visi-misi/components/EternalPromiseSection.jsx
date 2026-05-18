"use client";

import { ShineBorder } from "@/components/ui/shine-border";
import { useState } from "react";

const promiseMimi =
  "i promise to u, mas Okky. u r the last man i want to fight for. ❤️ it's not abt who came first, but abt who i want to stay with until the very end.🥰 i promise to protect this love, stay loyal to the heart that has chosen u, and keep loving u even on the difficult days. cause to me, u r not just love... u are a part of the future i want to have. 🥺✨💍🫂💕💞💋";

const promisePipi =
  "Akuu jaanjiii cayaangkuu bbykuuu Hilyaa, sebagaaii wanita pertama dan terakhir akuu 🥰🥰💕❤️🫰✨✨💍";

export default function EternalPromiseSection() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const getBackgroundClass = () => {
    if (hoveredSection === "mimi") {
      return "bg-gradient-to-br from-amber-50 via-rose-50 to-purple-100";
    } else if (hoveredSection === "pipi") {
      return "bg-gradient-to-br from-slate-50 via-sky-50 to-violet-100";
    }
    return "bg-gradient-to-br from-white via-amber-50 to-purple-50";
  };

  return (
    <div
      className={`min-h-screen w-full snap-start flex items-center justify-center px-6 py-20 transition-all duration-500 ${getBackgroundClass()}`}
    >
      <div className="max-w-6xl w-full">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 mb-12 text-center tracking-tight">
            Eternal Promise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mimi */}
            <div
              className="relative bg-gradient-to-br from-white via-amber-50 to-purple-50 rounded-3xl p-8 border border-amber-200/30 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredSection("mimi")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <ShineBorder
                shineColor={["#F9A8D4", "#FDE68A", "#C4B5FD"]}
                className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
              />
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-purple-700 mb-8 flex items-center gap-3 tracking-tight">
                <span className="text-5xl">💕</span>
                <span>Mimi</span>
              </h3>
              <p className="font-lora text-gray-700 hover:text-gray-900 transition-colors font-light leading-relaxed text-lg">
                {promiseMimi}
              </p>
            </div>

            {/* Pipi */}
            <div
              className="relative bg-gradient-to-br from-white via-slate-100 to-sky-100 rounded-3xl p-8 border border-slate-200/40 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredSection("pipi")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <ShineBorder
                shineColor={["#C7D2FE", "#A5B4FC", "#F8B4D9"]}
                className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
              />
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-slate-800 mb-8 flex items-center gap-3 tracking-tight">
                <span className="text-5xl">💖</span>
                <span>Pipi</span>
              </h3>
              <p className="font-lora text-gray-700 hover:text-gray-900 transition-colors font-light leading-relaxed text-lg">
                {promisePipi}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
