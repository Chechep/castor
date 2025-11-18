import React from "react";
import { CheckCircle, Star, Heart, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function Feature() {
  const features = [
    { icon: <CheckCircle className="w-8 h-8 text-yellow-500 mx-auto" />, title: "Natural Formula" },
    { icon: <Star className="w-8 h-8 text-yellow-500 mx-auto" />, title: "Expert Approved" },
    { icon: <Heart className="w-8 h-8 text-yellow-500 mx-auto" />, title: "Gentle on Skin" },
    { icon: <Truck className="w-8 h-8 text-yellow-500 mx-auto" />, title: "Fast Shipping" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose Our Products
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {f.icon}
            <h3 className="text-xl font-semibold mt-4">{f.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
