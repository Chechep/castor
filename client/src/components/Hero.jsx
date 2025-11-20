import React from "react";
import heroImg from "../assets/images/hero.png";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-screen pt-20">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Hero"
        className="absolute -top-20 left-0 w-full h-[calc(100%+5rem)] object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/60 -top-20 left-0 w-full h-[calc(100%+5rem)] z-0"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="italic font-serif text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
          Natural Castor Oil for Glowing Skin
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8 drop-shadow-md">
          Explore our premium cold-pressed castor oil products for hydration, repair, and natural beauty.
        </p>

        <a
          href="Products"
          className="px-8 py-3 text-white rounded-full font-semibold text-lg shadow-lg backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-black/10"
        >
          Explore
        </a>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-6 w-full flex justify-center z-20">
        <button
          onClick={handleScrollDown}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-bounce text-white"
          aria-label="Scroll Down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}