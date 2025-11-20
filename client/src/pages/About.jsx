import { motion } from "framer-motion";
import facedrop from "../assets/images/facedrop.png";
import serum from "../assets/images/serum.png";
import onface1 from "../assets/images/onface1.png";
import onface2 from "../assets/images/onface2.png";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-6 md:p-12 font-serif">

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
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

        {/* Right Text */}
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

          {/* Eco-friendly card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Eco-Friendly <span className="italic font-light">Packaging</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Carefully crafted materials to care for the planet as much as your skin.
            </p>
            <img src={serum} alt="Serum Bottle" className="w-24" />
          </div>
        </motion.div>
      </div>

      {/* NEW: Two Image Section */}
      <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

        {/* Image 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={onface1}
            alt="Model applying oil"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>

        {/* Image 2 + Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
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

    </div>
  );
}
