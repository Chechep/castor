import { motion } from "framer-motion";
import facedrop from "../assets/images/facedrop.png";
import serum from "../assets/images/serum.png";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-12 font-serif">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left big image */}
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

        {/* Right text section */}
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

          {/* rating */}
          <div className="flex items-center space-x-3">
            <p className="text-gray-600 dark:text-gray-300 text-sm">473,309 Reviews</p>
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
    </div>
  );
}
