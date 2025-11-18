import React from "react";
import heroImg from "../assets/images/hero.png";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Natural Castor Oil for Glowing Skin ✨
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-2xl mx-auto">
          Explore our premium cold-pressed castor oil products for hydration, repair, and natural beauty.
        </p>
        <a
          href="#featured"
          className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 rounded-full font-semibold text-lg shadow-lg"
        >
          Shop Now
        </a>
      </div>

      {/* Scroll Down Icon */}
      <a href="#featured" className="absolute bottom-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </a>
    </section>
  );
}
