import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ShoppingCart, User, Sun, Moon, Droplet, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  const [open, setOpen] = useState(false);

  const toggleTheme = () => setDark(!dark);
  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <>
      <header className="sticky top-4 z-50 mx-auto w-[95%] flex justify-between items-center px-6 py-3 rounded-2xl shadow-lg backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-white/10">
        <Link to="/">
          <Droplet className="w-7 h-7 text-black dark:text-white" />
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 text-xl font-bold text-gray-900 dark:text-white">
          Essence of Risin
        </div>

        <div className="hidden md:flex items-center gap-5">
          {currentUser ? (
            <button onClick={logout} className="text-gray-900 dark:text-white hover:text-red-500">
              <User className="w-6 h-6" />
            </button>
          ) : (
            <Link to="/login" className="text-gray-900 dark:text-white hover:text-green-500">
              <User className="w-6 h-6" />
            </Link>
          )}

          <Link to="/cart" className="text-gray-900 dark:text-white hover:text-yellow-500">
            <ShoppingCart className="w-6 h-6" />
          </Link>

          <button onClick={toggleTheme} className="text-gray-900 dark:text-white">
            {dark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>

        <button className="md:hidden text-gray-900 dark:text-white" onClick={toggleMenu}>
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 150, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-20 right-4 z-50 w-56 p-5 rounded-xl shadow-xl border border-white/20 backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 flex flex-col gap-4 text-gray-900 dark:text-white"
          >
            <Link to="/" onClick={toggleMenu}>Home</Link>
            {currentUser ? (
              <button onClick={() => { logout(); toggleMenu(); }}>Logout</button>
            ) : (
              <Link to="/login" onClick={toggleMenu}>Login</Link>
            )}
            <Link to="/cart" onClick={toggleMenu}>Cart</Link>
            <button onClick={toggleTheme} className="flex items-center gap-2">
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
