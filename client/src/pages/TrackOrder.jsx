import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Truck,
  ShoppingCart,
  X,
  Clock,
  Package,
  Home,
} from "lucide-react";

export default function TrackOrder() {
  const location = useLocation();
  const [trackingNumber, setTrackingNumber] = useState(
    location.state?.orderId || ""
  );
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const stages = [
    { label: "Processing", icon: Clock },
    { label: "Shipped", icon: Package },
    { label: "Out for Delivery", icon: Truck },
    { label: "Delivered", icon: Home },
  ];

  useEffect(() => {
    if (trackingNumber) {
      const recentOrder = JSON.parse(localStorage.getItem("recentOrder"));
      if (
        recentOrder &&
        recentOrder.id.toString() === trackingNumber.toString()
      ) {
        setOrder(recentOrder);
      }
    }
  }, [trackingNumber]);

  const handleTrackOrder = () => {
    setError("");
    const recentOrder = JSON.parse(localStorage.getItem("recentOrder"));

    if (
      recentOrder &&
      recentOrder.id.toString() === trackingNumber.toString()
    ) {
      setOrder(recentOrder);
    } else {
      setOrder(null);
      setError("Order not found. Please check your tracking number.");
    }
  };

  const currentStageIndex = order
    ? Math.min(order.items.length % stages.length, stages.length - 1)
    : 0;

  return (
    <div className="py-20 px-3 text-center max-w-4xl mx-auto bg-gray-50 dark:bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Track Your Order</h1>

      {/* Tracking input */}
      <div className="mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Enter Order ID"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="flex-1 p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button
          onClick={handleTrackOrder}
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
        >
          Track
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg">
          {error}
        </div>
      )}

      {!order ? (
        <div className="p-6 bg-yellow-100 dark:bg-yellow-900 rounded-lg text-center">
          <X className="w-12 h-12 text-yellow-600 dark:text-yellow-300 mx-auto mb-4" />
          <p className="text-yellow-700 dark:text-yellow-300">
            Enter your order ID above to track your order.
          </p>
        </div>
      ) : (
        <div className="mb-8 p-6 rounded-lg bg-white dark:bg-black shadow-md">
          {/* Order header */}
          <h2 className="text-xl font-semibold mb-6">
            Order ID: {order.id}
          </h2>

          {/* Order Progress */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Order Progress</h3>

            <div className="flex items-center justify-between relative">
              {stages.map((stage, idx) => {
                const Icon = stage.icon;
                const completed = idx <= currentStageIndex;

                return (
                  <div
                    key={stage.label}
                    className="flex-1 flex flex-col items-center relative"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        completed
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-sm mt-2 text-center">
                      {stage.label}
                    </span>

                    {idx < stages.length - 1 && (
                      <div
                        className={`absolute top-6 left-1/2 w-full h-1 -z-10 ${
                          completed ? "bg-emerald-600" : "bg-gray-300"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Customer Info */}
          <div className="mb-4 text-centered">
            <h3 className="font-semibold mb-2">Info</h3>
            <p>Name: {order.customer.name}</p>
            <p>Email: {order.customer.email}</p>
            <p>Phone: {order.customer.phone}</p>
            <p>Address: {order.customer.address}</p>
          </div>

          {/* Items */}
          <div className="mb-4 text-left">
            <h3 className="font-semibold mb-2">Items</h3>
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between py-2 border-b last:border-b-0 text-gray-600 dark:text-gray-400"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image || "/api/placeholder/40/40"}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                </div>
                <span>Ksh. {item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4 pt-4 border-t font-bold">
            <span>Total:</span>
            <span>Ksh. {order.total}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-8 justify-center">
            <Link
              to="/products"
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
