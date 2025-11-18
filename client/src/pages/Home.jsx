import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { motion } from "framer-motion";

export default function Home() {
  const reasons = [
    { title: "Gentle on Skin", desc: "Organic ingredients nourish and protect your skin without harsh chemicals." },
    { title: "Eco-Friendly", desc: "Made from sustainable sources that are good for the planet." },
    { title: "Rich in Nutrients", desc: "Packed with natural vitamins and antioxidants for healthy skin." },
    { title: "Free from Toxins", desc: "No parabens, sulfates, or synthetic fragrances that can irritate skin." },
  ];

  return (
    <div className="relative top-0">
      <Hero />

      {/* 4 Reasons Section */}
      <section id="reasons" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Our Organic Products
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.slice(0, 6).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
