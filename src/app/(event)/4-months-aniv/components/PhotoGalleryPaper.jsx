"use client";

import Image from "next/image";
import { useState } from "react";

export default function PhotoGalleryPaper({
  images = [],
  title = "Gallery",
  description = "",
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) {
    return <div className="text-center text-gray-500">No images available</div>;
  }

  return (
    <div
      className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
      style={{
        backgroundColor: "#fff8f7",
        borderRadius: "24px",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {/* Paper Content */}
      <div className="p-8 md:p-12">
        {/* Photo Gallery at Top */}
        <div className="mb-8 flex flex-col items-center gap-4">
          {/* Main Photo Display */}
          <div
            className="relative w-full flex justify-center"
            style={{
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            <div
              className="bg-white rounded-2xl shadow-md relative"
              style={{
                width: "280px",
                height: "280px",
                padding: "1px",
              }}
            >
              <Image
                src={images[currentImageIndex]}
                alt={`${title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover rounded-xl"
                style={{
                  objectPosition: "center 20%",
                  transform: "scale(0.85)",
                }}
                width={440}
                height={440}
                loading="eager"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <div className="flex gap-4 items-center">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full hover:bg-rose-100 transition-colors duration-300"
                style={{ color: "#9d5564" }}
                aria-label="Previous image"
              >
                ←
              </button>
              <span
                className="text-sm font-medium"
                style={{ color: "#9d5564" }}
              >
                {currentImageIndex + 1} / {images.length}
              </span>
              <button
                onClick={goToNext}
                className="p-2 rounded-full hover:bg-rose-100 transition-colors duration-300"
                style={{ color: "#9d5564" }}
                aria-label="Next image"
              >
                →
              </button>
            </div>
          )}

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex ? "bg-rose-400" : "bg-rose-200"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Title */}
        <h2
          className="text-3xl font-bold mb-6 uppercase tracking-widest text-center"
          style={{
            color: "#9d5564",
            fontStyle: "italic",
            fontFamily: "var(--font-literata)",
          }}
        >
          {title}
        </h2>

        {/* Description Text */}
        <p
          className="text-base leading-relaxed mb-8 text-justify"
          style={{
            color: "#6b5966",
            fontFamily: "var(--font-lora)",
            lineHeight: "1.8",
          }}
        >
          {description}
        </p>

        {/* Decorative End */}
        <div className="text-center text-2xl">💕</div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
