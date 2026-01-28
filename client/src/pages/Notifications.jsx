import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Clock,
  Package,
  Truck,
  Home,
} from "lucide-react";
import { useOrders } from "../hooks/useOrders";

const notificationSound = new Audio("/sounds/notification.mp3");

const statusConfig = {
  processing: {
    label: "Processing",
    icon: Clock,
    color: "text-yellow-500",
  },
  shipped: {
    label: "Shipped",
    icon: Package,
    color: "text-blue-500",
  },
  out_for_delivery: {
    label: "Out for delivery",
    icon: Truck,
    color: "text-emerald-500",
  },
  delivered: {
    label: "Delivered",
    icon: Home,
    color: "text-green-600",
  },
};

export default function Notifications({ open, onClose }) {
  const panelRef = useRef(null);
  const ordersHook = useOrders();

  /* 🛡️ SAFE FALLBACK */
  const orders =
    ordersHook?.orders ??
    (() => {
      const stored =
        JSON.parse(localStorage.getItem("orders")) || [];
      const recent =
        JSON.parse(localStorage.getItem("recentOrder"));
      return stored.length ? stored : recent ? [recent] : [];
    })();

  const { markAsRead, removeOrder } = ordersHook || {};

  /* ================= SOUND ON NEW ================= */
  useEffect(() => {
    if (orders.some((o) => !o.read)) {
      notificationSound.play().catch(() => {});
    }
  }, [orders]);

  /* ================= OUTSIDE CLICK ================= */
  useEffect(() => {
    function handleClick(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    }

    if (open) document.addEventListener("mousedown", handleClick);
    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full md:w-1/2 bg-white dark:bg-black z-50 shadow-xl p-6 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                Notifications
              </h2>
              <button onClick={onClose}>
                <X />
              </button>
            </div>

            {/* EMPTY STATE */}
            {orders.length === 0 && (
              <p className="text-gray-500 text-center">
                No notifications yet
              </p>
            )}

            {/* LIST */}
            {orders.map((order) => {
              const status =
                statusConfig[order.status] ||
                statusConfig.processing;
              const StatusIcon = status.icon;

              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`p-4 mb-4 rounded-lg border ${
                    order.read
                      ? "bg-gray-100 dark:bg-gray-900"
                      : "bg-emerald-50 dark:bg-emerald-900/20"
                  }`}
                  onClick={() =>
                    markAsRead?.(order.id)
                  }
                >
                  {/* Header */}
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold">
                      Order #{order.id}
                    </p>
                    <div
                      className={`flex items-center gap-1 text-sm ${status.color}`}
                    >
                      <StatusIcon size={16} />
                      <span>{status.label}</span>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {order.items?.map((item) => (
                      <p key={item.id}>
                        • {item.name} × {item.quantity}
                      </p>
                    ))}
                  </div>

                  {/* Total */}
                  <p className="text-sm font-medium">
                    Total: Ksh. {order.total}
                  </p>
                </motion.div>
              );
            })}

            <p className="text-xs text-gray-400 mt-4 text-center">
              Swipe left to dismiss
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
