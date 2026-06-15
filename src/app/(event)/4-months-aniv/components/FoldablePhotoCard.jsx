"use client";

import Image from "next/image";

export default function FoldablePhotoCard({ toggleFolded }) {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
      `}</style>
      <style>{`
        @keyframes fading {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
      `}</style>

      {/* Normal State - Clickable Circular Photo */}
      <div
        className={`relative z-20 transition-all duration-500 ${"opacity-100"}`}
        style={{ animation: "fadeInUp 1.5s ease-out" }}
      >
        <div
          onClick={() => toggleFolded(true)}
          className="mb-8 p-2 bg-white rounded-full shadow-lg relative cursor-pointer group"
          style={{
            width: "440px",
            height: "440px",
          }}
        >
          {/* Side Emojis for Photo */}
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-2xl group-hover:scale-125 transition-transform duration-300">
            💞
          </div>
          <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-2xl group-hover:scale-125 transition-transform duration-300">
            💞
          </div>

          <Image
            src="/IMG_10.JPEG"
            alt="in love for"
            className="w-full h-full object-cover rounded-full group-hover:opacity-90 transition-opacity duration-300"
            style={{
              objectPosition: "center 30%",
              animation: "fading 3s ease-out",
            }}
            width={440}
            height={440}
            loading="eager"
          />

          {/* Hover Indicator */}
          <div className="absolute inset-0 rounded-full border-2 border-rose-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </>
  );
}
