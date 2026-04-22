"use client";

import { useRef, useCallback } from "react";
import HeroSection from "./components/HeroSection";
import Gallery1Section from "./components/Gallery1Section";
import Gallery2Section from "./components/Gallery2Section";
import Gallery3Section from "./components/Gallery3Section";
import Gallery4Section from "./components/Gallery4Section";
import Gallery5Section from "./components/Gallery5Section";
import MarqueeSection from "./components/MarqueeSection";
import ClosingSection from "./components/ClosingSection";

export default function TwoMonthsAnivPage() {
  const scrollContainerRef = useRef(null);

  const handleScrollToTop = useCallback(() => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      ref={scrollContainerRef}
    >
      <HeroSection />
      <Gallery1Section />
      <Gallery2Section />
      <Gallery3Section />
      <Gallery4Section />
      <Gallery5Section />
      <MarqueeSection />
      <ClosingSection onScrollToTop={handleScrollToTop} />
    </div>
  );
}
