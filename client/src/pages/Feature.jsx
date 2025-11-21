import React from "react";
import { CheckCircle, Star, Heart, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function Feature() {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-black dark:text-white mx-auto" />,
      title: "Natural Formula",
      desc: "Carefully crafted from natural ingredients to nourish your skin.",
    },
    {
      icon: <Star className="w-8 h-8 text-black dark:text-white mx-auto" />,
      title: "Expert Approved",
      desc: "Trusted by skincare experts for effectiveness and safety.",
    },
    {
      icon: <Heart className="w-8 h-8 text-black dark:text-white mx-auto" />,
      title: "Gentle on Skin",
      desc: "Soft and soothing formula, perfect for all skin types.",
    },
    {
      icon: <Truck className="w-8 h-8 text-black dark:text-white mx-auto" />,
      title: "Fast Shipping",
      desc: "Get your favorite products delivered quickly and safely.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white/50 dark:bg-black backdrop-blur-xl rounded-xl p-6 text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {f.icon}
            <h3 className="text-xl font-semibold mt-4">{f.title}</h3>
            <p className="mt-2 text-gray-800 dark:text-gray-300 font-thin">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
