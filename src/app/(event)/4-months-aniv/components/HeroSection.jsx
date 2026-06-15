"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useState, useEffect, useRef } from "react";
import FoldablePhotoCard from "./FoldablePhotoCard";
import PhotoGalleryPaper from "./PhotoGalleryPaper";

export default function HeroSection() {
  const [isFolded, setIsFolded] = useState(false);
  const [animateGallery, setAnimateGallery] = useState(false);
  const galleryListRef = useRef(null);

  useEffect(() => {
    if (isFolded && galleryListRef.current) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAnimateGallery(true);
      setTimeout(() => {
        galleryListRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      setAnimateGallery(false);
    }
  }, [isFolded]);

  return (
    <div
      className="relative w-full"
      style={{ backgroundColor: "#fff8f7", userSelect: "none" }}
    >
      <style>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      {/* Dot Grid Pattern Background */}
      <FlickeringGrid
        className="fixed inset-0 z-0 pointer-events-none [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        squareSize={7}
        gridGap={30}
        color="#cf8b96"
        flickerChance={0.5}
      />

      {/* FoldablePhotoCard - Main Photo */}
      <div
        className={`fixed inset-0 z-10 flex flex-col items-center justify-center transition-all duration-500 ${
          isFolded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <FoldablePhotoCard toggleFolded={setIsFolded} />

        {/* Title Section */}
        <h2
          className="text-4xl font-bold mb-12 uppercase tracking-widest"
          style={{
            color: "#9d5564",
            fontStyle: "italic",
            fontFamily: "var(--font-literata)",
          }}
        >
          Happy 4 Months Anniversary, My Dearest 🎉
        </h2>

        {/* Quote Section */}
        <p
          className="mt-4 text-center max-w-2xl px-6 text-lg leading-relaxed"
          style={{
            color: "#9d5564",
            fontStyle: "italic",
            fontFamily: "var(--font-literata)",
            fontWeight: 500,
          }}
        >
          &quot;Seperti Thumbelina yang menemukan pangeran bunganya, setiap
          detik bersamamu merubah dunia kecilku jadi penuh warna dan keajaiban.
          Happy 4 months, I am so blessed to have you! 🌹✨&quot;
        </p>
      </div>

      {/* PhotoGalleryPaper Components - Gallery List */}
      <div
        ref={galleryListRef}
        className={`relative z-10 flex flex-col items-center justify-start gap-12 py-12 transition-all duration-500 ${
          !isFolded
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        {/* Title and Quote Section */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <h1
            className="text-5xl font-bold uppercase tracking-widest text-center"
            style={{
              color: "#9d5564",
              fontStyle: "italic",
              fontFamily: "var(--font-literata)",
            }}
          >
            Our Moments
          </h1>
          <p
            className="text-lg text-center max-w-2xl px-4"
            style={{
              color: "#9d5564",
              fontFamily: "var(--font-lora)",
              fontStyle: "italic",
            }}
          >
            &quot;Setiap momen bersama adalah kenangan indah dan berharga untuk
            diingat&quot;
          </p>
        </div>

        <div
          style={
            animateGallery ? { animation: "fadeInRight 0.8s ease-out" } : {}
          }
        >
          <PhotoGalleryPaper
            images={[
              "/IMG_11.JPEG",
              "/IMG_12.JPEG",
              "/IMG_13.JPEG",
              "/IMG_14.JPEG",
            ]}
            title="Ancol: Basah-Basahan & Pelukan di Kala Sunset"
            description={`I'm so glad we spent time at Ancol, my dearest. Aku sangat bahagia karena hari ini kita pertama kali berenang bersama! Semoga kamu merasakan kebahagiaan yang sama indahnya denganku. 💖✨

Hari kita dimulai dengan sangat seru! Masih ingat kan betapa semangatnya kita membuat foto dan video bersama di awal hari? Oh iya, ada satu memori kecil yang lucu banget pas kita lihat kolam ikan. Kamu ingat kan ada satu ikan spesial warna putih polos yang langsung jadi favoritmu di sana? Gemas banget melihat antusiasme kamu waktu itu ><!

Petualangan air kita lalu berlanjut saat kita mengarungi kolam arus dan bermain banyak sekali di sana. Di tengah tenangnya arus, kamu ingat juga kan saat kita kiss di kolam ini? Bikin momennya jadi makin spesial 🫣❤️. Keseruan makin pecah pas kita pindah ke kolam ombak. Gimana rasanya diterjang ombak yang kuat banget ke badan kita? Rasanya sampai mau terpelanting ya, haha! Tapi justru itu yang bikin kita ketawa lepas banget.

Nggak kalah seru, kita juga sempat main semprotan sabun dan kejar-kejaran ikat rambut. Huhuuu, pokoknya aku tetap claim aku yang menang di sini, walaupun wleee... sebenarnya kita seri sih, I know 😜. Hari itu aku juga bangga banget sama kamu, kamu berani buat main seluncuran, pintell banget pacarku! Tapi dari semua itu, yang paling bikin aku senang dan tersentuh adalah melihat kamu mau belajar berenang. I'm so proud of you.

Setelah puas basah-basahan, kita menutup hari dengan main ke pantai. Huhuuu senang sekali rasanya bisa menikmati sunset yang indah sambil membuat foto dan video berdua. Kita saling mengobrol bersama, bertukar cerita, dan jujur... aku sukaaa banget sama foto kita berdua pas lagi pelukan (peyuk) di sini. Hangatnya berasa sampai ke hati. Terima kasih ya sudah membuat hari itu jadi salah satu hari terbaik!`}
          />
        </div>

        <div
          style={
            animateGallery
              ? { animation: "fadeInLeft 0.8s ease-out 0.2s both" }
              : {}
          }
        >
          <PhotoGalleryPaper
            images={["/IMG_17.JPEG", "/IMG_18.JPEG", "/IMG_19.JPEG"]}
            title="Kunjungan Event ke AWS"
            description={`Huhu waktunya belajar, Sayang! Di event AWS kemarin, aku senang dan kagum sekali melihat antusiasme kamu yang luar biasa. 

Kita memang belajar banyak konsep baru yang menarik, meskipun jujur materinya agak sedikit intermediate dan bikin pusing, I know. Tapi di balik semua pusing itu, aku bener-bener banggaaaa sekali sama kamu karena kamu hebat banget bisa tetap mengikuti alurnya dengan baik sewaktu kita belajar bareng di event ini. 

Terima kasih ya sudah mau berjuang dan belajar hal baru bareng aku. Pinter banget pacarku! 🥰✨`}
          />
        </div>

        <div
          style={
            animateGallery
              ? { animation: "fadeInRight 0.8s ease-out 0.4s both" }
              : {}
          }
        >
          <PhotoGalleryPaper
            images={[
              "/IMG_20.JPEG",
              "/IMG_21.JPEG",
              "/IMG_22.JPEG",
              "/IMG_23.JPEG",
              "/IMG_10.JPEG",
            ]}
            title={`Kondangan dan Thumbelina 🌸✨`}
            description={`Ini sebenarnya salah satu momen yang paling aku tunggu-tunggu, karena akhirnya kita bisa datang ke acara pernikahan bersama-sama sebagai pasangan. Huhu, dalam hati sempat mikir, kapan ya giliran kita yang menyusul mereka yang nikahan di hari itu? >< 

Dan yang paling spesial adalah sewaktu kita pulang... surprise!! Aku sudah menyiapkan bunga Thumbelina khusus untuk kekasih tercintaku. Ahh, alangkah senangnya aku melihat ekspresi wajah dan senyuman manis-mu waktu itu, Sayang. Kebahagiaanmu adalah kebahagiaan terbesar untukku juga.

Terima kasih ya sudah selalu membawakan hari-hari yang penuh warna seperti bunga-bunga ini di hidupku. I'm so glad and happy to be with you, My Dearest! 💖🌹`}
          />
        </div>
      </div>
    </div>
  );
}
