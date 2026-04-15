"use client";

import { useRef } from "react";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { LightRays } from "@/components/ui/light-rays";
import { PixelImage } from "@/components/ui/pixel-image";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { Dock, DockIcon } from "@/components/ui/dock";
import { ShineBorder } from "@/components/ui/shine-border";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";

export default function Home() {
  const scrollContainerRef = useRef(null);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory"
    >
      {/* Scroll #1: Home area, introduction to the page */}
      <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white overflow-hidden h-screen w-full snap-start snap-always">
        <FlickeringGrid
          className="absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          // maxOpacity={0.5}
          flickerChance={0.1}
        />

        <h1 className="relative z-10 text-4xl font-bold text-gray-800 dark:text-gray-200">
          Ini bukan tentang kisah yang sempurna, tapi tentang kita yang terus
          memilih satu sama lain, setiap hari.
        </h1>
        <p className="relative z-10 mt-4 text-lg text-gray-600 dark:text-gray-400">
          Welcome, My Dearest Love. This is a special place where I pour out my
          heart and soul.
        </p>
        {/* <ShimmerButton className="relative z-10 mt-6">Click Me</ShimmerButton> */}
      </div>

      {/* Scroll #2.1: Gallery area to show our pictures */}
      <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white overflow-hidden h-screen w-full snap-start snap-always">
        <LightRays
          className="absolute inset-0 z-0 pointer-events-none "
          // squareSize={4}
          // gridGap={6}
          color="#60A5FA"
          maxOpacity={0.3}
          flickerChance={0.1}
          count={2}
        />
        <LightRays
          className="absolute inset-0 z-0 pointer-events-none "
          // squareSize={4}
          // gridGap={6}
          color="#e77eaa"
          maxOpacity={0.3}
          flickerChance={0.1}
          count={4}
        />

        <div className="relative z-10 flex items-center justify-center pl-12">
          <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
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
                src="/IMG_1.JPG"
                pixelFadeInDuration={1000}
                maxAnimationDelay={2000}
              />
            </div>
            <CardContent className="relative flex-1 p-0">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Di awal kita berjumpa..
                </CardTitle>
              </CardHeader>
              <p className="text-gray-600 dark:text-gray-400">
                Di tengah ramainya MOI, di antara suara dan cahaya dari event
                Sonic itu… aku nggak nyangka, justru di sana aku menemukan awal
                dari cerita kita.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll #2.2: Gallery area to show our pictures */}
      <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white overflow-hidden h-screen w-full snap-start snap-always">
        <LightRays
          className="absolute inset-0 z-0 pointer-events-none "
          // squareSize={4}
          // gridGap={6}
          color="#60A5FA"
          maxOpacity={0.3}
          flickerChance={0.1}
          count={2}
        />
        <LightRays
          className="absolute inset-0 z-0 pointer-events-none "
          // squareSize={4}
          // gridGap={6}
          color="#e77eaa"
          maxOpacity={0.3}
          flickerChance={0.1}
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
                src="/IMG_2.JPG"
                grid="8x8"
                pixelFadeInDuration={1000}
                maxAnimationDelay={2000}
              />
            </div>
            <CardContent className="relative flex-1 p-0">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Bunga Pertama 🌺
                </CardTitle>
              </CardHeader>
              <p className="text-gray-600 dark:text-gray-400">
                Valentine mungkin sudah lewat, tapi perasaanku baru benar-benar
                berani hari itu. Dengan satu bunga di tangan, aku mencoba
                memulai cerita &apos;Kita&apos;.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll #2.2: Gallery area to show our pictures */}
      <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white overflow-hidden h-screen w-full snap-start snap-always">
        <LightRays
          className="absolute inset-0 z-0 pointer-events-none "
          // squareSize={4}
          // gridGap={6}
          color="#60A5FA"
          maxOpacity={0.3}
          flickerChance={0.1}
          count={2}
        />
        <LightRays
          className="absolute inset-0 z-0 pointer-events-none "
          // squareSize={4}
          // gridGap={6}
          color="#e77eaa"
          maxOpacity={0.3}
          flickerChance={0.1}
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
                src="/IMG_4.JPG"
                grid="8x8"
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
                Satu bulan ini nggak terasa terburu-buru. Kita jalan
                pelan-pelan, kenal satu sama lain, dan tanpa sadar… jadi saling
                butuh.”
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll #2.2: Gallery area to show our pictures */}
      <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white overflow-hidden h-screen w-full snap-start snap-always">
        <LightRays
          className="absolute inset-0 z-0 pointer-events-none "
          // squareSize={4}
          // gridGap={6}
          color="#60A5FA"
          maxOpacity={0.3}
          flickerChance={0.1}
          count={2}
        />
        <LightRays
          className="absolute inset-0 z-0 pointer-events-none "
          // squareSize={4}
          // gridGap={6}
          color="#e77eaa"
          maxOpacity={0.3}
          flickerChance={0.1}
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
                src="/IMG_5.JPG"
                grid="8x8"
                pixelFadeInDuration={1000}
                maxAnimationDelay={2000}
              />
            </div>
            <CardContent className="relative flex-1 p-0">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Film Pertama Kita
                </CardTitle>
              </CardHeader>
              <p className="text-gray-600 dark:text-gray-400">
                Film pertama kita jatuhnya horror. Tapi anehnya, yang paling
                bikin deg-degan bukan di layar… melainkan karena ada kamu di
                sebelahku.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll #2.3: Gallery area to show our pictures */}
      <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white overflow-hidden h-screen w-full snap-start snap-always">
        <LightRays
          className="absolute inset-0 z-0 pointer-events-none "
          // squareSize={4}
          // gridGap={6}
          color="#60A5FA"
          maxOpacity={0.3}
          flickerChance={0.1}
          count={2}
        />
        <LightRays
          className="absolute inset-0 z-0 pointer-events-none "
          // squareSize={4}
          // gridGap={6}
          color="#e77eaa"
          maxOpacity={0.3}
          flickerChance={0.1}
          count={4}
        />

        <div className="relative z-10 flex items-center justify-center pl-12">
          <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
            <div className="w-1 flex-1 bg-gradient-to-b from-blue-300 to-blue-500"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
          </div>
          <Card className="relative flex flex-row items-center gap-6 rounded-[2rem] border-white/20 bg-white/80 p-6 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.6)] backdrop-blur-xl w-full max-w-[760px]">
            <ShineBorder
              shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              className="absolute inset-0 rounded-[2rem] pointer-events-none"
            />
            <div className="relative flex-none overflow-hidden rounded-[1.75rem] w-[320px] h-[240px]">
              <PixelImage
                src="/IMG_6.JPG"
                pixelFadeInDuration={1000}
                maxAnimationDelay={2000}
              />
            </div>
            <CardContent className="relative flex-1 p-0">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Masih Kamu, Sampai Hari Ini
                </CardTitle>
              </CardHeader>
              <p className="text-gray-600 dark:text-gray-400">
                Dua bulan sudah berlalu, dan lucunya… rasanya masih kamu orang
                yang sama yang aku pilih di awal. Bedanya, sekarang aku jauh
                lebih yakin.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll #2.6: Photo Marquee */}
      <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white overflow-hidden h-screen w-full snap-start snap-always">
        <div className="absolute inset-0 z-0">
          <LightRays
            className="absolute inset-0 z-0 pointer-events-none"
            color="#60A5FA"
            maxOpacity={0.2}
            flickerChance={0.1}
            count={2}
          />
        </div>
        <div className="relative z-10 w-full">
          <Marquee className="[--duration:30s]" pauseOnHover>
            {[
              "/IMG_1.JPG",
              "/IMG_2.JPG",
              "/IMG_4.JPG",
              "/IMG_5.JPG",
              "/IMG_6.JPG",
              "/IMG_7.JPG",
              "/IMG_8.JPG",
              "/IMG_9.JPG",
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

      {/* Scroll #3: Finish area, back to start button */}
      <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white overflow-hidden h-screen w-full snap-start snap-always">
        {/* <NoiseTexture
          className="absolute inset-0 z-0 pointer-events-none"
          frequency={0.4} // note: size of noise features, bigger values mean smaller features
          octaves={6}
          slope={0.1} // note: how quickly the noise changes across space or roughness of the noise
          noiseOpacity={0.5} // note: opacity of the noise layer, between 0 and 1
        />
        <div className="absolute inset-0 z-5 bg-white/10 pointer-events-none"></div> */}
        <h1 className="relative z-10 text-4xl font-bold text-gray-800 dark:text-gray-200 max-w-4xl text-center px-6">
          Dua bulan mungkin bukan waktu yang panjang bagi dunia.
        </h1>
        <p className="relative z-10 mt-4 text-lg text-gray-600 dark:text-gray-400  max-w-4xl text-center px-6">
          Tapi buat aku, dua bulan ini penuh dengan banyak hal kecil yang
          berarti. Terima kasih sudah hadir, sudah bertahan, dan sudah memilih
          untuk tetap di sini bersama aku. Aku nggak tahu ke mana kita akan
          pergi setelah ini, tapi untuk hari ini… aku bersyukur kita masih
          `kita`. Selamat 2 bulan anniversary, sayang. Semoga kita selalu punya
          alasan untuk tetap saling memilih, pelan-pelan, setiap hari.
        </p>
        <p className="relative z-10 mt-4 text-lg text-gray-600 dark:text-gray-400  max-w-4xl text-center px-6">
          Happy 2 Months Anniversary, My Dearest Love ❤️.
        </p>

        <Dock direction="middle" iconMagnification={60} iconDistance={100}>
          <DockIcon key={1}>
            <svg
              onClick={scrollToTop}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#60A5FA"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
}
