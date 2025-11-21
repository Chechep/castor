import { ShoppingCart, CreditCard } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProductCard({ product, onOpenDetail }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleQuickBuy = () => {
    addToCart(product);
    navigate("/checkout", { state: { quickBuy: true, productId: product.id } });
  };

  const handleAddToCart = () => {
    addToCart(product);

    // ⭐ SHOW TOAST
    toast.success(`${product.name} added to cart`, {
      duration: 2000,
    });
  };

  return (
    <div
      className="
        relative p-4 border rounded-2xl bg-white dark:bg-black
        shadow-sm hover:shadow-lg transition-shadow duration-300
        transform hover:-translate-y-2 hover:scale-105
        group overflow-hidden
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-56 object-cover rounded-xl transition-transform duration-500 
            group-hover:scale-110
          "
        />
      </div>

      {/* CONTENT */}
      <h2
        className="font-semibold text-lg mt-3 cursor-pointer transition-colors duration-300 hover:text-yellow-500"
        onClick={onOpenDetail}
      >
        {product.name}
      </h2>

      <p className="text-sm opacity-70">{product.size}</p>

      <p className="text-sm opacity-90 mt-1">{product.description}</p>

      <p className="font-bold mt-2">Ksh {product.price}</p>

      {/* BUTTONS */}
      <div className="flex gap-2 mt-3">
        {/* ADD TO CART */}
        <button
          onClick={handleAddToCart}
          className="
            flex items-center justify-center gap-2 px-4 py-2 flex-1 
            bg-gray-300 dark:bg-gray-800 text-black dark:text-white 
            rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700 
            transition transform hover:scale-[1.02] active:scale-[0.98]
          "
        >
          <ShoppingCart className="w-4 h-4" />
        </button>

        {/* QUICK BUY */}
        <button
          onClick={handleQuickBuy}
          className="
            flex items-center justify-center gap-2 px-4 py-2 flex-1 
            bg-black dark:bg-white text-white dark:text-black 
            rounded-lg hover:bg-gray-900 dark:hover:bg-gray-200
            transition transform hover:scale-[1.02] active:scale-[0.98]
          "
        >
          <CreditCard className="w-4 h-4" />
          Buy
        </button>
      </div>
    </div>
  );
}
