import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <ShoppingCart className="w-6 h-6" /> Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="opacity-70 mt-2">Your cart is empty.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-2 rounded-lg"
            >
              <span>{item.name}</span>
              <span className="font-bold">Ksh {item.price}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Example: passing addToCart to ProductCard */}
      {/* 
      <ProductCard product={products[0]} onAddToCart={addToCart} /> 
      */}
    </div>
  );
}
