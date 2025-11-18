import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

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
    <button
      onClick={() => setDark(!dark)}
      className="
        w-14 h-7 rounded-full flex items-center relative
        backdrop-blur-xl 
        bg-white/30 dark:bg-gray-900/30
        border border-white/20 dark:border-gray-700/30
        shadow-lg
        transition-all duration-300
      "
    >
      {/* Sliding knob */}
      <span
        className={`
          w-6 h-6 rounded-full
          bg-white/70 dark:bg-gray-800/70
          shadow-md backdrop-blur-xl
          transition-all duration-300 
          ${dark ? "translate-x-7" : "translate-x-1"}
        `}
      ></span>

      {/* Sun Icon */}
      <span className="absolute left-1 text-xs text-yellow-400">
        <Sun className="w-3 h-3" />
      </span>

      {/* Moon Icon */}
      <span className="absolute right-1 text-xs text-blue-400">
        <Moon className="w-3 h-3" />
      </span>
    </button>
  );
}
