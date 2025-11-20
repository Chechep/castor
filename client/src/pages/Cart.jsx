import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-3">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border p-3 rounded-lg"
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
        <p className="mt-4 text-xl font-bold">
          Total: Ksh{" "}
          {cartItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          )}
        </p>
      )}
    </div>
  );
}
