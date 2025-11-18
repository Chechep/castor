import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <div className="p-6">
      <Hero />

      {/* Featured Products Section */}
      <section id="featured" className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.slice(0, 6).map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
