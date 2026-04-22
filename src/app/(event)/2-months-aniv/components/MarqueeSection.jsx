"use client";

import { LightRays } from "@/components/ui/light-rays";
import { Marquee } from "@/components/ui/marquee";

export default function MarqueeSection() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white overflow-hidden h-screen w-full snap-start snap-always">
      <div className="absolute inset-0 z-0">
        <LightRays
          className="absolute inset-0 z-0 pointer-events-none"
          color="#60A5FA"
          count={2}
        />
      </div>
      <div className="relative z-10 w-full">
        <Marquee className="[--duration:30s]" pauseOnHover>
          {[
            "/IMG_1_resized.JPG",
            "/IMG_2_resized.JPG",
            "/IMG_4_resized.JPG",
            "/IMG_5_resized.JPG",
            "/IMG_6_resized.JPG",
            "/IMG_7_resized.JPG",
            "/IMG_8_resized.JPG",
            "/IMG_9_resized.JPG",
          ].map((src, index) => (
            <div key={index} className="mx-4 flex-shrink-0">
              <div className="h-80 w-64 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={src}
                  alt={`Memory ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
