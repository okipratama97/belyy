"use client";

import { ShineBorder } from "@/components/ui/shine-border";

const misiUmum = [
  "Saling mendukung dalam mengejar karier dan peluang usaha tanpa menjatuhkan satu sama lain.",
  "Menjadikan hubungan sebagai tempat pulang yang nyaman, bukan penghambat untuk berkembang.",
  "Konsisten menabung, mengatur keuangan, dan punya tujuan finansial yang jelas.",
  "Belajar dan berkembang bersama dalam dunia bisnis, dari nol sampai bisa sukses bareng.",
  "Saling jujur, terbuka, dan dewasa dalam menghadapi masalah, terutama soal uang dan masa depan.",
  "Membagi peran dengan adil, saling bantu, dan tetap satu tujuan...maju bareng, bukan sendiri-sendiri.",
  "Tetap menjaga komunikasi, quality time, dan rasa cinta di tengah kesibukan mengejar mimpi.",
  "Saling mengingatkan untuk tetap disiplin, fokus, dan tidak mudah menyerah dalam proses mencapai tujuan.",
  "Menghargai setiap proses kecil dan pencapaian satu sama lain tanpa membandingkan.",
  "Menjaga kepercayaan dan komitmen sebagai fondasi utama hubungan.",
  "Saling memberi ruang untuk bertumbuh tanpa merasa dibatasi, dituntut atau dikekang.",
  "Menghadapi tantangan bersama dengan sikap saling menguatkan, bukan saling menyalahkan.",
  "Menjaga keseimbangan antara ambisi, hubungan, dan kesehatan mental.",
  "Terus memperbaiki diri menjadi versi terbaik untuk diri sendiri dan pasangan",
];

export default function MisiSection() {
  return (
    <div className="min-h-screen w-full snap-start flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 px-6 py-20">
      <div className="max-w-5xl w-full">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-purple-600 mb-12 text-center tracking-tight">
            Misi
          </h2>

          <div className="relative bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 md:p-12 border border-pink-200/50 hover:shadow-lg transition-shadow duration-300">
            <ShineBorder
              shineColor={["#EC4899", "#A855F7", "#F43F5E"]}
              className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
            />
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-pink-700 mb-8 flex items-center gap-3 tracking-tight">
              <span className="text-5xl">💖</span>
              <span>Misi Hubungan Kita</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {misiUmum.map((misi, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1.5">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 group-hover:scale-150 transition-transform"></div>
                  </div>
                  <p className="font-lora text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors font-light">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
