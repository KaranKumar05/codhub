import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gray" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Programming
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          voluptatibus dolor consequuntur ducimus! Aliquid, molestias.
          Molestias, facilis quam assumenda praesentium optio facere commodi
          inventore vel eveniet! Ea nisi unde in.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
