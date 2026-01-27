import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import {
  ShoppingCart,
  User,
  Sun,
  Moon,
  Home,
  Menu,
  X,
  Truck,
  LogOut,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const { cartItems } = useCart();

  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  const [open, setOpen] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] flex justify-between items-center px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-gray-900/10  shadow-lg">
        <Link to="/">
          <Home className="w-7 h-7" />
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 font-bold">
          Essence of Risin
        </div>

        <div className="hidden md:flex gap-5 items-center">
          <Link to="/profile">
            {currentUser?.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt="profile"
                className="w-8 h-8 rounded-full border"
              />
            ) : (
              <User />
            )}
          </Link>

          <Link to="/cart" className="relative">
            <ShoppingCart />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>

          <Link to="/orders">
            <Truck />
          </Link>

          <button onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
            className="md:hidden fixed top-20 right-5 z-50 p-5 w-40 rounded-xl backdrop-blur-xl bg-white/10 dark:bg-gray-900/10"
          >
            <div className="grid grid-cols-2 gap-6 place-items-center">
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

      {/* Logout Confirmation */}
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
                  onClick={logout}
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
