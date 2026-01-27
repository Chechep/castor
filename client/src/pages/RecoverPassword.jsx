import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function RecoverPassword() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    if (!email) {
      setMessage("Please enter your email address");
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-black p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Reset Password
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Enter your email address and we’ll send you a reset link.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {message && (
            <div className={`p-4 rounded-lg text-sm ${
              message.includes("Error")
                ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                : "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
            }`}>
              {message}
            </div>
          )}

          <button
            onClick={handleReset}
            disabled={loading}
            className="w-full p-4 bg-black text-white rounded-lg disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </div>

        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-sm underline text-black dark:text-white"
          >
            Back to login
          </Link>
        </div>

      </div>
    </div>
  );
}
