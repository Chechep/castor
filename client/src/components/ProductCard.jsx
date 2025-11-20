import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, onOpenDetail }) {
  const { addToCart } = useCart();

  return (
    <div className="p-4 border rounded-xl shadow-sm bg-white dark:bg-black">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl mb-3 cursor-pointer"
        onClick={onOpenDetail}
      />

      <h2
        className="font-semibold text-lg cursor-pointer"
        onClick={onOpenDetail}
      >
        {product.name}
      </h2>

      <p className="text-sm opacity-70">{product.size}</p>
      <p className="font-bold mt-2">Ksh {product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="flex items-center justify-center gap-2 mt-3 px-4 py-2 w-full bg-gray-300 dark:bg-gray-800 text-black dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700 transition"
      >
        <ShoppingCart className="w-5 h-5" />
        Add to Cart
      </button>
    </div>
  );
}
