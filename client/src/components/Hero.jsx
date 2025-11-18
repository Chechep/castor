import React from "react";
import heroImg from "../assets/images/hero.png";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  // Scroll down by one viewport height
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // scroll down by one screen
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-screen pt-20"> {/* padding-top equals navbar height */}
      {/* Full-screen background image */}
      <img
        src={heroImg}
        alt="Hero"
        className="absolute -top-20 left-0 w-full h-[calc(100%+5rem)] object-cover z-0"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 dark:bg-black/40 -top-20 left-0 w-full h-[calc(100%+5rem)] object-cover z-0"></div>

      {/* Hero content slightly below center */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
          Natural Castor Oil for Glowing Skin
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow-md">
          Explore our premium cold-pressed castor oil products for hydration, repair, and natural beauty.
        </p>
        <a
          href="#featured"
          className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 rounded-full font-semibold text-lg shadow-lg"
        >
          Explore
        </a>
      </div>

      {/* Scroll-down arrow pinned at bottom */}
      <div className="absolute bottom-6 w-full flex justify-center z-20">
        <button
          onClick={handleScrollDown}
          className="animate-bounce text-white"
          aria-label="Scroll Down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
