import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function Cashout() {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="p-4 border rounded-xl bg-white dark:bg-gray-800">
        <img src={product.image} className="rounded-xl mb-3" />
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="opacity-70">{product.size}</p>
        <p className="font-bold mt-2">Ksh {product.price}</p>
      </div>

      <button className="mt-5 w-full px-4 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700">
        Pay Now
      </button>
    </div>
  );
}
