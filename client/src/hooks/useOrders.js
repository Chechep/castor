import { useEffect, useState } from "react";

const STORAGE_KEY = "orders";

export function useOrders() {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  /* ================= PERSIST ================= */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  /* ================= ADD ORDER ================= */
  const addOrder = (order) => {
    const normalizedOrder = {
      id: order.id,
      items: order.items || [],
      total: order.total || 0,
      customer: order.customer || {},
      paymentMethod: order.paymentMethod,
      mpesaNumber: order.mpesaNumber,
      cardType: order.cardType,

      /* 🔥 IMPORTANT */
      status: order.status || "processing",

      read: false,
      createdAt: Date.now(),
    };

    setOrders((prev) => [normalizedOrder, ...prev]);
  };

  /* ================= READ ================= */
  const markAsRead = (id) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, read: true } : o
      )
    );
  };

  const markAllAsRead = () => {
    setOrders((prev) =>
      prev.map((o) => ({ ...o, read: true }))
    );
  };

  /* ================= REMOVE ================= */
  const removeOrder = (id) => {
    setOrders((prev) =>
      prev.filter((o) => o.id !== id)
    );
  };

  /* ================= UPDATE STATUS ================= */
  const updateOrderStatus = (id, status) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, status } : o
      )
    );
  };

  /* ================= DERIVED ================= */
  const unreadCount = orders.filter((o) => !o.read).length;

  return {
    orders,
    unreadCount,
    addOrder,
    markAsRead,
    markAllAsRead,
    removeOrder,
    updateOrderStatus, // 👈 ready for tracking
  };
}
