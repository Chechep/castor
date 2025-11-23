import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`
              w-full
              ${products.length % 2 !== 0 && index === products.length - 1 
                ? "col-span-2 md:col-span-2 lg:col-span-1" 
                : ""
              }
            `}
          >
            <ProductCard product={p} onOpenDetail={() => {}} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}