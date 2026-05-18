"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function FoldablePhotoCard() {
  const [isUnfolded, setIsUnfolded] = useState(false);

  const description =
    'Pada tanggal 15 Februari 2026, aku memantapkan hati memilih kamu, Hilya, sebagai wanita yang paling aku cintai dan sayangi. Hari itu terasa sangat lekat di ingatanku, dimulai saat aku tergesa-gesa menuju toko bunga dengan keringat yang mengucur deras hingga membasahi rambut dan wajahku. Jujur aku sempat merasa malu saat bertemu denganmu dalam kondisi berantakan seperti itu, namun semua rasa canggung langsung menguap ketika kamu dengan senang hati mengusap keringat di wajahku. Momen manis itu berlanjut saat kita saling bertukar kado; kamu membawa sebuah hadiah berkesan berupa foto berbingkai yang mengukir pertemuan pertama kita, sementara aku memberikan sepasang gantungan kunci mimi dan pipi yang kini menjadi ikon mini cinta kita—kamu mimi dan aku pipi. Sambil menikmati es kopi dan stroberi, aku sempat memintamu untuk tidak melihat karena aku ingin memberikan kejutan berupa tiga tangkai mawar ungu warna kesukaanmu yang membawa arti mendalam, "I Love You", dan aku tidak akan pernah lupa betapa bahagianya wajahmu saat itu. Di hari yang sama, aku juga sudah mempersiapkan momen update penting untuk hubungan kita; dengan hati yang sangat tegang, aku memberanikan diri bertanya maukah engkau menjadi pacarku, dan seketika rasa gugup itu berubah menjadi kebahagiaan yang luar biasa saat kamu menjawab bersedia menjadi pacarku, sayang.';

  useEffect(() => {
    if (isUnfolded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isUnfolded]);

  return (
    <>
      {/* Normal State - Clickable Circular Photo */}
      <div
        className={`relative z-20 transition-all duration-500 ${
          isUnfolded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div
          onClick={() => setIsUnfolded(true)}
          className="mb-8 p-2 bg-white rounded-full shadow-lg relative cursor-pointer group"
          style={{ width: "220px", height: "220px" }}
        >
          {/* Side Emojis for Photo */}
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-2xl group-hover:scale-125 transition-transform duration-300">
            💞
          </div>
          <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-2xl group-hover:scale-125 transition-transform duration-300">
            💞
          </div>

          <Image
            src="/IMG_2_resized.JPG"
            alt="in love for"
            className="w-full h-full object-cover rounded-full group-hover:opacity-90 transition-opacity duration-300"
            width={220}
            height={220}
            loading="eager"
          />

          {/* Hover Indicator */}
          <div className="absolute inset-0 rounded-full border-2 border-rose-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Unfolded State - Paper with Photo and Description */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
          isUnfolded
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: isUnfolded
            ? "rgba(0, 0, 0, 0.4)"
            : "rgba(0, 0, 0, 0)",
        }}
        onClick={() => setIsUnfolded(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white rounded-3xl shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto transition-all duration-500 scrollbar-hide ${
            isUnfolded ? "scale-100" : "scale-95"
          }`}
          style={{
            backgroundColor: "#fff8f7",
            borderRadius: "24px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsUnfolded(false)}
            className="absolute top-6 right-6 p-2 hover:bg-rose-100 rounded-full transition-colors duration-300 z-10"
            style={{ color: "#9d5564" }}
          >
            X
          </button>

          {/* Paper Content */}
          <div className="p-8 md:p-12">
            {/* Photo at Top */}
            <div className="mb-8 flex justify-center">
              <div
                className="p-2 bg-white rounded-2xl shadow-md"
                style={{
                  width: "280px",
                  height: "280px",
                }}
              >
                <Image
                  src="/IMG_2_resized.JPG"
                  alt="in love for"
                  className="w-full h-full object-cover rounded-xl"
                  width={280}
                  height={280}
                  loading="eager"
                />
              </div>
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
              Our fateful day
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

            {/* Date Badge */}
            <div
              className="flex justify-center mb-6"
              style={{
                color: "#9d5564",
              }}
            >
              <div
                className="px-6 py-3 rounded-full inline-block"
                style={{
                  backgroundColor: "rgba(244, 172, 183, 0.1)",
                  border: "1px solid rgba(244, 172, 183, 0.3)",
                }}
              >
                <span className="font-semibold">15 Februari 2026</span>
              </div>
            </div>

            {/* Decorative End */}
            <div className="text-center text-2xl">💕</div>
          </div>
        </div>
      </div>
    </>
  );
}
