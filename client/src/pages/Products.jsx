import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
