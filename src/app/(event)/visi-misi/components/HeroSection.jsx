"use client";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full snap-start flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 px-6 py-20 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Heart 1 */}
        <div
          className="absolute top-20 left-10 text-5xl opacity-20"
          style={{
            animation: "float 6s ease-in-out infinite",
            animationDelay: "0s",
          }}
        >
          💕
        </div>
        {/* Heart 2 */}
        <div
          className="absolute top-32 right-12 text-6xl opacity-20"
          style={{
            animation: "float 7s ease-in-out infinite",
            animationDelay: "1s",
          }}
        >
          ❤️
        </div>
        {/* Heart 3 */}
        <div
          className="absolute bottom-32 left-16 text-5xl opacity-20"
          style={{
            animation: "float 8s ease-in-out infinite",
            animationDelay: "2s",
          }}
        >
          💗
        </div>
        {/* Heart 4 */}
        <div
          className="absolute bottom-20 right-20 text-6xl opacity-20"
          style={{
            animation: "float 9s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        >
          ✨
        </div>
        {/* Rose Petals */}
        <div
          className="absolute top-1/4 right-1/4 text-4xl opacity-30"
          style={{
            animation: "float 10s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        >
          🌹
        </div>
        <div
          className="absolute bottom-1/4 left-1/3 text-4xl opacity-30"
          style={{
            animation: "float 11s ease-in-out infinite",
            animationDelay: "2.5s",
          }}
        >
          🌹
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-rose-200/30 opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-pink-200/40 opacity-40"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-purple-200/50 opacity-50"
          style={{
            animation: "spin 20s linear infinite reverse",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="text-center animate-fade-in relative z-10">
        {/* Decorative Top Line */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-rose-400 rounded-full"></div>
          <div className="text-3xl opacity-60">💖</div>
          <div className="h-1 w-12 bg-gradient-to-l from-transparent to-rose-400 rounded-full"></div>
        </div>

        <h1 className="text-6xl md:text-8xl font-playfair font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-8 tracking-tight leading-tight">
          Visi & Misi
        </h1>

        <p className="text-xl md:text-2xl font-lora text-rose-700 font-light tracking-wide mb-8">
          Hubungan kita 🥰😘😚🌹❣️✨
        </p>

        {/* Decorative Bottom */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-2xl">✨</span>
          <span className="text-2xl">💕</span>
          <span className="text-2xl">✨</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <p className="text-gray-500 font-lora text-sm">
          Hover mousenya juga sayang ✨
        </p>
      </div>
    </div>
  );
}
