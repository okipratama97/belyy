"use client";

import { ShineBorder } from "@/components/ui/shine-border";
import { useState } from "react";

const misiMimi = [
  "Membangun portofolio & pengalaman magang",
  "Melamar dan diterima di perusahaan impian",
  "Menyelesaikan kuliah dengan nilai terbaik",
];

const misiPipi = [
  "Meraih sertifikasi-sertifikasi kunci di bidangku",
  "Membangun jaringan profesional yang kuat",
  "Naik jabatan, peran, atau perusahaan yang lebih besar",
  "Meningkatkan penghasilan secara signifikan",
];

export default function MimiPipiSection() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const getBackgroundClass = () => {
    if (hoveredSection === "mimi") {
      return "bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100";
    } else if (hoveredSection === "pipi") {
      return "bg-gradient-to-br from-blue-100 via-cyan-100 to-sky-100";
    }
    return "bg-gradient-to-br from-rose-50 via-orange-50 to-blue-50";
  };

  return (
    <div
      className={`min-h-screen w-full snap-start flex items-center justify-center px-6 py-20 transition-all duration-500 ${getBackgroundClass()}`}
    >
      <div className="max-w-6xl w-full">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-blue-600 mb-12 text-center tracking-tight">
            Misi Mimi & Pipi
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mimi */}
            <div
              className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredSection("mimi")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <ShineBorder
                shineColor={["#D97706", "#F59E0B", "#FBBF24"]}
                className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
              />
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-amber-700 mb-8 flex items-center gap-3 tracking-tight">
                <span className="text-5xl">🎀</span>
                <span>Mimi</span>
              </h3>
              <ul className="space-y-5">
                {misiMimi.map((misi, idx) => (
                  <li key={idx} className="flex gap-3 items-start group">
                    <span className="text-amber-500 text-lg mt-1 group-hover:scale-110 transition-transform font-bold">
                      ✓
                    </span>
                    <span className="font-lora text-gray-700 group-hover:text-gray-900 transition-colors font-light">
                      {misi}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pipi */}
            <div
              className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredSection("pipi")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <ShineBorder
                shineColor={["#0EA5E9", "#06B6D4", "#3B82F6"]}
                className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
              />
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-blue-700 mb-8 flex items-center gap-3 tracking-tight">
                <span className="text-5xl">👔</span>
                <span>Pipi</span>
              </h3>
              <ul className="space-y-5">
                {misiPipi.map((misi, idx) => (
                  <li key={idx} className="flex gap-3 items-start group">
                    <span className="text-blue-500 text-lg mt-1 group-hover:scale-110 transition-transform font-bold">
                      ✓
                    </span>
                    <span className="font-lora text-gray-700 group-hover:text-gray-900 transition-colors font-light">
                      {misi}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
