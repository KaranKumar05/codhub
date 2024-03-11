"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function ContactUs() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg border p-4 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
          <input
            type="text"
            placeholder="Email"
            className="rounded-lg border p-4 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
          <textarea
            placeholder="Message"
            className="rounded-lg border p-4 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
          <input
            className="rounded-lg border p-4 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-[#111827] cursor-pointer hover:bg-transparent transition-all duration-300 placeholder:text-neutral-700"
            type="submit"
            value={"Send Message"}
          />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
