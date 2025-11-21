import { useState } from "react";
import { resetPassword } from "../firebase";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

export default function RecoverPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      await resetPassword(email);
      setMessage("Password reset link sent! Check your email.");
    } catch (error) {
      console.error("Reset error:", error);
      setMessage("Error sending reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Reset Password</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <div className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-10 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition duration-200"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>

          {/* Message Display */}
          {message && (
            <div className={`p-4 rounded-lg text-sm ${
              message.includes("Error") 
                ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300" 
                : "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
            }`}>
              {message}
            </div>
          )}

          {/* Send Reset Link Button */}
          <button 
            onClick={handleReset} 
            disabled={loading}
            className="w-full p-4 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200 font-semibold transform hover:scale-[0.98] active:scale-[0.96]"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </div>

        {/* Additional Help */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Remember your password?{" "}
            <Link 
              to="/login" 
              className="text-black dark:text-white underline hover:text-gray-700 dark:hover:text-gray-300 font-medium transition duration-200"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}