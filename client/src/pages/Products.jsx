import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Products() {
  const { cartItems } = useCart();

  return (
    <div className="md:flex md:gap-6 p-6">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Cart Sidebar */}
      <div className="mt-6 md:mt-0 w-full md:w-1/3 border rounded-xl p-4 shadow-sm bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" /> Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="opacity-70 mt-2">Your cart is empty.</p>
        ) : (
          <ul className="mt-4 space-y-2 max-h-[400px] overflow-y-auto">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border p-2 rounded-lg"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span className="font-bold">
                  Ksh {item.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>
        )}

        {cartItems.length > 0 && (
          <p className="mt-4 font-bold">
            Total: Ksh{" "}
            {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </p>
        )}
      </div>
    </div>
  );
}
