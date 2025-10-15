'use client';

import Timer from '../Timer/Timer';

export default function Header() {
  return (
    <header className="bg-[#1D5B43] w-full flex flex-col justify-center items-center gap-1 pt-2 sticky top-0 z-10">
      <p className="text-[24px] font-bold">Успейте открыть пробную неделю</p>
      <Timer />
    </header>
  );
}