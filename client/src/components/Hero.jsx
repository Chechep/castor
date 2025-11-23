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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImg}
        alt="Hero"
        className="
          absolute inset-0 
          w-full h-full 
          object-cover 
          object-center 
          z-0
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60 z-0"></div>

      {/* Text */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 max-w-3xl text-center">
        <h1 className="italic font-serif text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
          Natural Castor Oil for Glowing Skin
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-8">
          Explore our premium cold-pressed castor oil products for hydration, repair, and natural beauty.
        </p>

        <a
          href="/products"
          className="px-8 py-3 text-white rounded-full font-semibold text-lg shadow-xl backdrop-blur-xl 
          bg-white/10 dark:bg-gray-900/20 border border-white/20">
          Explore
        </a>
      </div>

      {/* Scroll Arrow */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white"
        aria-label="Scroll Down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

    </section>
  );
}
