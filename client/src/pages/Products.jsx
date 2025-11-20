import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products() {
  return (
    <div className="p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onOpenDetail={() => {}} />
      ))}
    </div>
  );
}
