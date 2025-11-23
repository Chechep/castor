import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Truck, CreditCard, CheckCircle } from "lucide-react";

export default function Orders() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const recentOrder = JSON.parse(localStorage.getItem("recentOrder"));
    if (recentOrder) setOrders([recentOrder]);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {/* Always visible buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => navigate("/track")}
          className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700"
        >
          Track Order
        </button>
        <button
          onClick={() => navigate("/products")}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Browse Products
        </button>
      </div>

      {orders.length === 0 ? (
        <div className="p-6 max-w-2xl mx-auto text-center">
          <div className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
              No Orders Yet
            </h2>
            <p className="text-yellow-700 dark:text-yellow-300 mb-4">
              You haven’t made any orders yet.
            </p>
          </div>
        </div>
      ) : (
        orders.map((order, idx) => (
          <div
            key={idx}
            className="mb-8 p-6 border rounded-lg bg-white dark:bg-gray-800 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Order #{order.id}</h2>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle className="w-6 h-6" />
                <span>Confirmed</span>
              </div>
            </div>

            {/* Customer Info */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Customer Info</h3>
              <p>{order.customer.name}</p>
              <p>{order.customer.phone}</p>
              <p>{order.customer.email}</p>
              <p>{order.customer.address}</p>
            </div>

            {/* Items */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Items</h3>
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between py-2 border-b last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image || "/api/placeholder/40/40"}
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 block">
                        x {item.quantity}
                      </span>
                    </div>
                  </div>
                  <span className="font-semibold">Ksh. {item.price * item.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 mt-2 border-t">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold">Ksh. {order.total}</span>
              </div>
            </div>

            {/* Payment & Actions */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-4">
                {order.paymentMethod === "mpesa" && (
                  <img src="/assets/images/mpesa.png" alt="M-Pesa" className="h-6" />
                )}
                {order.paymentMethod === "card" && order.cardType === "visa" && (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                    alt="Visa"
                    className="h-6"
                  />
                )}
                {order.paymentMethod === "card" && order.cardType === "mastercard" && (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="MasterCard"
                    className="h-6"
                  />
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
