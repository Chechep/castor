import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  updateUserProfile,
  updateUserEmail,
  updateUserPassword,
} from "../firebase";
import { toast } from "react-hot-toast";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Profile() {
  const { currentUser } = useAuth();

  const [name, setName] = useState(currentUser?.displayName || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password && password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      let photoURL = currentUser.photoURL;

      if (photo) {
        const reader = new FileReader();
        reader.readAsDataURL(photo);
        reader.onloadend = async () => {
          await updateUserProfile(name, reader.result);
        };
      } else {
        await updateUserProfile(name, photoURL);
      }

      if (email !== currentUser.email) {
        await updateUserEmail(email);
      }

      if (password) {
        await updateUserPassword(password);
        setPassword("");
        setConfirmPassword("");
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      toast.error(error.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-4">
      <div className="max-w-md w-full bg-white dark:bg-black p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
          Edit Profile
        </h2>

        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
            >
              <CheckCircle className="w-5 h-5" />
              Profile updated successfully
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-2">
            <img
              src={
                photo
                  ? URL.createObjectURL(photo)
                  : currentUser.photoURL || "/default-avatar.png"
              }
              alt="profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          </div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 dark:text-white"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 dark:text-white"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password (optional)"
              className="w-full p-4 pr-12 rounded-lg bg-white dark:bg-gray-800 dark:text-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              className="w-full p-4 pr-12 rounded-lg bg-white dark:bg-gray-800 dark:text-white"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-4 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
