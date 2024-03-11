"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffect() {
  const words = [
    {
      text: "Unlock",
    },
    {
      text: "The",
    },
    {
      text: "Power",
    },
    {
      text: "of",
    },
    {
      text: "<Programming/>",
      className: "text-blue-500 dark:text-[#01F7F7]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black/[.3] border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
      </div>
    </div>
  );
}
