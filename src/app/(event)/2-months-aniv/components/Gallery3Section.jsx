"use client";

import { LightRays } from "@/components/ui/light-rays";
import { PixelImage } from "@/components/ui/pixel-image";
import { ShineBorder } from "@/components/ui/shine-border";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Gallery3Section() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white overflow-hidden h-screen w-full snap-start snap-always">
      <LightRays
        className="absolute inset-0 z-0 pointer-events-none"
        color="#60A5FA"
        count={2}
      />
      <LightRays
        className="absolute inset-0 z-0 pointer-events-none"
        color="#e77eaa"
        count={4}
      />

      <div className="relative z-10 flex items-center justify-center pl-12">
        <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
          <div className="w-1 flex-1 bg-gradient-to-b from-blue-300 to-blue-500"></div>
          <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
          <div className="w-1 flex-1 bg-gradient-to-b from-blue-500 to-blue-300"></div>
        </div>
        <Card className="relative flex flex-row items-center gap-6 rounded-[2rem] border-white/20 bg-white/80 p-6 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.6)] backdrop-blur-xl w-full max-w-[760px]">
          <ShineBorder
            shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            className="absolute inset-0 rounded-[2rem] pointer-events-none"
          />
          <div className="relative flex-none overflow-hidden rounded-[1.75rem] w-[320px] h-[240px]">
            <PixelImage
              src="/IMG_4_resized.JPG"
              pixelFadeInDuration={1000}
              maxAnimationDelay={2000}
            />
          </div>
          <CardContent className="relative flex-1 p-0">
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Satu Bulan Kisah Kita
              </CardTitle>
            </CardHeader>
            <p className="text-gray-600 dark:text-gray-400">
              Satu bulan ini nggak terasa terburu-buru. Kita jalan pelan-pelan,
              kenal satu sama lain, dan tanpa sadar… jadi saling butuh.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
