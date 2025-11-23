import { motion } from "framer-motion";
import facedrop from "../assets/images/facedrop.png";
import serum from "../assets/images/serum.png";
import onface1 from "../assets/images/onface1.png";
import onface2 from "../assets/images/onface2.png";
import oil from "../assets/images/oil.png";
import castor from "../assets/images/castor.png";
import bottle from "../assets/images/bottle.png";
import smile from "../assets/images/smile.png";
import cas from "../assets/images/cas.png";

import skin from "../assets/images/skin.png";
import onface from "../assets/images/onface.png";
import eye from "../assets/images/eye.png";
import seed from "../assets/images/seed.png";
import leaf from "../assets/images/leaf.png";

export default function About() {

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-6 md:p-12 font-serif">

      {/* ------------------ HERO PRODUCT SECTION WITH BACKGROUND IMAGE ------------------ */}
      <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
        <motion.img
          src={cas}
          alt="Castor Product"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0.8 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start md:items-start px-6 md:px-16 text-left space-y-4">
          <motion.h1 custom={1} variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="text-4xl md:text-7xl font-serif font-bold text-white">
            Eco-Friendly,
          </motion.h1>
          <motion.h2 custom={2} variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="text-4xl md:text-6xl italic font-light text-gray-300">
            Skin-Friendly
          </motion.h2>
          <div className="space-y-2 mt-4 md:text-2xl text-gray-200">
            <motion.p custom={4} variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="flex items-center gap-2">
              ✓ No Harsh Chemicals
            </motion.p>
            <motion.p custom={5} variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="flex items-center gap-2">
              ✓ Plant-Based Goodness
            </motion.p>
            <motion.p custom={6} variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="flex items-center gap-2">
              ✓ Ethically Sourced
            </motion.p>
          </div>
        </div>
      </div>

      {/* ------------------ ORIGINAL CONTENT BELOW ------------------ */}
      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden shadow-xl">
          <img src={facedrop} alt="Skincare model" className="w-full h-[480px] object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
            Why Your Skin <br />
            <span className="italic font-light">Deserves the Best</span>
          </h1>

          <div className="flex items-center space-x-3">
            <p className="text-gray-600 dark:text-gray-300 text-sm">473,309 Reviews</p>
          </div>

          {/* Eco-Friendly card with leaf */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 relative">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Eco-Friendly <span className="italic font-light">Packaging</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Carefully crafted materials to care for the planet as much as your skin.
            </p>

            <div className="flex items-center gap-4 mt-4 relative">
              <img src={castor} alt="Castor Oil Bottle" className="w-24" />
              <img src={leaf} alt="Leaf" className="w-24" />
              <img src={oil} alt="Oil Bottle" className="w-24" />
              <img src={serum} alt="Serum Bottle" className="w-24" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* MIDDLE IMAGES */}
      <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden shadow-lg">
          <img src={onface1} alt="Model applying oil" className="w-full h-[420px] object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-4">
          <img src={onface2} alt="Skin close-up" className="w-full h-[420px] object-cover rounded-2xl shadow-lg" />

          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Pure. Gentle. Effective.
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Our cold-pressed castor oil is designed to rejuvenate, hydrate, and restore your
            natural glow. Rich in essential nutrients and crafted with care, it blends
            seamlessly into your daily self-care ritual.
          </p>
        </motion.div>
      </div>

      {/* SMILE SECTION - UPDATED WITH 5 IMAGES IN HORIZONTAL LINE WITH HOVER ZOOM-OUT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-16 flex flex-col items-center text-center space-y-12"
      >
        {/* Main smile image */}
        <img
          src={smile}
          alt="Smiling customer"
          className="w-[320px] md:w-[600px] rounded-2xl shadow-lg object-cover"
        />

        {/* Main text */}
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-xl leading-relaxed px-4">
          Experience smoother, healthier skin and a natural glow with our carefully crafted products.
        </p>

        {/* 5 Images in horizontal line with descriptions below and hover effects */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full max-w-6xl">
          
          {/* Skin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center text-center space-y-3 group cursor-pointer"
            whileHover={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-20 h-20 md:w-28 md:h-28 rounded-2xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img 
                src={skin} 
                alt="Skin care" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
            <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-tight max-w-[120px] md:max-w-[140px]">
              Perfect for all skin & hair types
            </p>
          </motion.div>

          {/* OnFace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center space-y-3 group cursor-pointer"
            whileHover={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-20 h-20 md:w-28 md:h-28 rounded-2xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img 
                src={onface} 
                alt="On face application" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
            <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-tight max-w-[120px] md:max-w-[140px]">
              Smoothens for soft, radiant skin
            </p>
          </motion.div>

          {/* Eye */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center text-center space-y-3 group cursor-pointer"
            whileHover={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-20 h-20 md:w-28 md:h-28 rounded-2xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img 
                src={eye} 
                alt="Eye area care" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
            <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-tight max-w-[120px] md:max-w-[140px]">
              Softens eyebrows & enhances lashes
            </p>
          </motion.div>

          {/* Seed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center space-y-3 group cursor-pointer"
            whileHover={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-20 h-20 md:w-28 md:h-28 rounded-2xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img 
                src={seed}
                alt="Natural seeds"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
            <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-tight max-w-[120px] md:max-w-[140px]">
              Sourced from natural plants
            </p>
          </motion.div>

          {/* Bottle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center text-center space-y-3 group cursor-pointer"
            whileHover={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-28 h-28 md:w-28 md:h-28 rounded-2xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img 
                src={bottle} 
                alt="Product bottle" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
            <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-tight max-w-[120px] md:max-w-[140px]">
              Eco-friendly packaging
            </p>
          </motion.div>

        </div>
      </motion.div>

    </div>
  );
}