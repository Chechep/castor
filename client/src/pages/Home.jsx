import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { motion } from "framer-motion";
import { CheckCircle, Star, Heart, Truck } from "lucide-react";

export default function Home() {
  const features = [
    { icon: <CheckCircle className="w-8 h-8 text-black dark:text-white mx-auto" />, title: "Natural Formula", desc: "Carefully crafted from natural ingredients to nourish your skin." },
    { icon: <Star className="w-8 h-8 text-black dark:text-white mx-auto" />, title: "Expert Approved", desc: "Trusted by skincare experts for effectiveness and safety." },
    { icon: <Heart className="w-8 h-8 text-black dark:text-white mx-auto" />, title: "Gentle on Skin", desc: "Soft and soothing formula, perfect for all skin types." },
    { icon: <Truck className="w-8 h-8 text-black dark:text-white mx-auto" />, title: "Fast Shipping", desc: "Get your favorite products delivered quickly and safely." },
  ];

  return (
    <div className="relative top-0">
      <Hero />

      {/* Feature Section */}
      <section id="feature" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Our Products
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
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
              <p className="text-gray-700 dark:text-gray-300 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.slice(0, 9).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
