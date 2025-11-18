import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id == id);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img src={product.image} className="rounded-xl mb-6" />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="opacity-70">{product.size}</p>

      <p className="mt-4">{product.description}</p>

      <p className="text-xl font-bold mt-6">Ksh {product.price}</p>
    </div>
  );
}
