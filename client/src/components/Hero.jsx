import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import heroDesktop from "../assets/images/hero.png";
import heroMobile from "../assets/images/Hero2.png";

export default function Hero() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

      {/* Desktop Background */}
      <motion.img
        src={heroDesktop}
        alt="Hero desktop background"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        className="
          hidden md:block
          absolute inset-0 w-full h-full
          object-cover object-center
          z-0
        "
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />

      {/* Mobile Background */}
      <motion.img
        src={heroMobile}
        alt="Hero mobile background"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        className="
          block md:hidden
          absolute inset-0 w-full h-full
          object-cover object-top
          z-0
        "
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-4 text-center">

        {/* Heading */}
        <motion.h1
          className="italic font-serif text-4xl md:text-6xl font-bold text-white drop-shadow-xl mb-6"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          Natural Castor Oil for Glowing Skin
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl text-white/80 mb-8"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          Explore premium cold-pressed castor oil products for hydration,
          repair and natural beauty.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollDown}
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ y: 4 }}
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>

    </section>
  );
}
