import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products() {
  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onOpenDetail={() => {}} />
      ))}
    </div>
  );
}
