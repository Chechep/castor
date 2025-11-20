import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products() {
  return (
    <div className="p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p, index) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="
            w-full
            sm:w-full
            md:w-auto
            lg:w-99
            xl:w-85
          "
        >
          <ProductCard product={p} onOpenDetail={() => {}} />
        </motion.div>
      ))}
    </div>
  );
}
