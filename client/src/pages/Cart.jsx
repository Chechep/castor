import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const increaseQuantity = (item) => {
    handleQuantityChange(item.id, item.quantity + 1);
  };

  const decreaseQuantity = (item) => {
    handleQuantityChange(item.id, item.quantity - 1);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to="/products"
        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Shop
      </Link>

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Your cart is empty</p>
          <Link
            to="/products"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-600"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border p-4 rounded-lg bg-white dark:bg-gray-800"
            >
              <img
                src={item.image || "/api/placeholder/80/80"}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">Ksh {item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQuantity(item)}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <Minus className="w-4 h-4" />
                </button>
                
                <span className="font-medium w-8 text-center">{item.quantity}</span>
                
                <button
                  onClick={() => increaseQuantity(item)}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="text-right min-w-20">
                <p className="font-bold">Ksh {item.price * item.quantity}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          <div className="border-t pt-4 mt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">Total: Ksh {totalAmount}</span>
            </div>
            
            <Link
              to="/checkout"
              className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg hover:bg-gray-700 text-lg font-semibold text-center block"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}