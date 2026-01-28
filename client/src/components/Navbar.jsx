import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useOrders } from "../hooks/useOrders";
import {
  ShoppingCart,
  User,
  Sun,
  Moon,
  Home,
  Menu,
  Truck,
  X,
  LogOut,
  Bell,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Notifications from "../pages/Notifications";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const { cartItems } = useCart();
  const { unreadCount } = useOrders();
  const navigate = useNavigate();

  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  const [open, setOpen] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const audioRef = useRef(null);
  const prevUnread = useRef(unreadCount);

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  /* ================= THEME ================= */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  /* ================= NOTIFICATION SOUND ================= */
  useEffect(() => {
    if (unreadCount > prevUnread.current && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    prevUnread.current = unreadCount;
  }, [unreadCount]);

  /* ================= LOGOUT ================= */
  const handleLogout = async () => {
    try {
      await logout();
      setConfirmLogout(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <>
      {/* Sound */}
      <audio ref={audioRef} src="/notification.mp3" preload="auto" />

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] flex justify-between items-center px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 shadow-lg">
        {/* Left */}
        <Link to="/">
          <Home className="w-7 h-7" />
        </Link>

        {/* Center */}
        <div className="absolute left-1/2 -translate-x-1/2 font-bold font-montserrat">
          Essence of Risin
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex gap-5 items-center">
          {/* Profile */}
          {currentUser ? (
            <Link to="/profile">
              {currentUser.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt="profile"
                  className="w-8 h-8 rounded-full border"
                />
              ) : (
                <User />
              )}
            </Link>
          ) : (
            <Link to="/login">
              <User />
            </Link>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart />
            <AnimatePresence>
              {cartItemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2 w-5 h-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center"
                >
                  {cartItemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <Link to="/orders">
            <Truck />
          </Link>

          {/* Theme */}
          <button onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
            className="md:hidden fixed top-20 right-6 z-50 p-5 rounded-xl backdrop-blur-xl bg-white/10 dark:bg-gray-900/10"
          >
            <div className="flex flex-col gap-4 items-center">

              <Link to="/profile" onClick={() => setOpen(false)}>
                <User />
              </Link>

              <Link to="/cart" onClick={() => setOpen(false)}>
                <ShoppingCart />
              </Link>

              <Link to="/orders" onClick={() => setOpen(false)}>
                <Truck />
              </Link>

              <button onClick={() => setDark(!dark)}>
                {dark ? <Sun /> : <Moon />}
              </button>

              {currentUser && (
                <button
                  onClick={() => {
                    setConfirmLogout(true);
                    setOpen(false);
                  }}
                  className="col-span-2 text-red-500"
                >
                  <LogOut />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= LOGOUT CONFIRM ================= */}
      <AnimatePresence>
        {confirmLogout && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl text-center"
            >
              <p className="mb-4">Are you sure you want to logout?</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setConfirmLogout(false)}
                  className="px-4 py-2 rounded-lg border"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
