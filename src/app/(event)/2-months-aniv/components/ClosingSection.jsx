"use client";

import { Dock, DockIcon } from "@/components/ui/dock";

export default function ClosingSection({ onScrollToTop }) {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white overflow-hidden h-screen w-full snap-start snap-always">
      <h1 className="relative z-10 text-4xl font-bold text-gray-800 dark:text-gray-200 max-w-4xl text-center px-6">
        Dua bulan mungkin bukan waktu yang panjang bagi dunia.
      </h1>
      <p className="relative z-10 mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-4xl text-center px-6">
        Tapi buat aku, dua bulan ini penuh dengan banyak hal kecil yang berarti.
        Terima kasih sudah hadir, sudah bertahan, dan sudah memilih untuk tetap
        di sini bersama aku. Aku nggak tahu ke mana kita akan pergi setelah ini,
        tapi untuk hari ini… aku bersyukur kita masih `kita`. Selamat 2 bulan
        anniversary, sayang. Semoga kita selalu punya alasan untuk tetap saling
        memilih, pelan-pelan, setiap hari.
      </p>
      <p className="relative z-10 mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-4xl text-center px-6">
        Happy 2 Months Anniversary, My Dearest Love ❤️.
      </p>

      <Dock direction="middle" iconMagnification={60} iconDistance={100}>
        <DockIcon key={1}>
          <svg
            onClick={onScrollToTop}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#60A5FA"
            className="cursor-pointer"
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
        </DockIcon>
      </Dock>
    </div>
  );
}
