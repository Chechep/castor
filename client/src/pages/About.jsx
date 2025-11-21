import { motion } from "framer-motion";
import facedrop from "../assets/images/facedrop.png";
import serum from "../assets/images/serum.png";
import onface1 from "../assets/images/onface1.png";
import onface2 from "../assets/images/onface2.png";
import oil from "../assets/images/oil.png";
import castor from "../assets/images/castor.png";
import bottle from "../assets/images/bottle.png";
import smile from "../assets/images/smile.png";
import cas from "../assets/images/cas.png"; // HERO PRODUCT IMAGE

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
        {/* Background image */}
        <motion.img
          src={cas}
          alt="Castor Product"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0.8 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        />

        {/* Overlay for darkened text */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start md:items-start px-6 md:px-16 text-left space-y-4">
          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            Eco-Friendly,
          </motion.h1>

          <motion.h2
            custom={2}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl md:text-5xl italic font-light text-gray-300"
          >
            Skin-Friendly
          </motion.h2>

          <motion.p
            custom={3}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed"
          >
            100% natural means every ingredient is carefully selected from nature to provide 
            safe, effective, and gentle care for your skin.
          </motion.p>

          <div className="space-y-2 mt-4 text-gray-300">
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
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={facedrop}
            alt="Skincare model"
            className="w-full h-[480px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
            Why Your Skin <br />
            <span className="italic font-light">Deserves the Best</span>
          </h1>

          <div className="flex items-center space-x-3">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              473,309 Reviews
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Eco-Friendly <span className="italic font-light">Packaging</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Carefully crafted materials to care for the planet as much as your skin.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <img src={serum} alt="Serum Bottle" className="w-24" />
              <img src={castor} alt="Castor Oil Bottle" className="w-24" />
              <img src={bottle} alt="Product Bottle" className="w-24" />
              <img src={oil} alt="Oil Bottle" className="w-24" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* MIDDLE IMAGES */}
      <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={onface1}
            alt="Model applying oil"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <img
            src={onface2}
            alt="Skin close-up"
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />

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

      {/* SMILE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-16 flex flex-col items-center text-center space-y-6"
      >
        <img
          src={smile}
          alt="Smiling customer"
          className="w-[280px] md:w-[360px] rounded-2xl shadow-lg object-cover"
        />

        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-xl leading-relaxed px-4">
          It feels healthier, smoother and more than ever knowing that I am using natural products.
        </p>
      </motion.div>
    </div>
  );
}
