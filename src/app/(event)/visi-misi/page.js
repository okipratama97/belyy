"use client";

import HeroSection from "./components/HeroSection";
import VisiSection from "./components/VisiSection";
import MisiSection from "./components/MisiSection";
import MimiPipiSection from "./components/MimiPipiSection";

export default function VisiMisiPage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <HeroSection />
      <VisiSection />
      <MisiSection />
      <MimiPipiSection />
    </div>
  );
}
