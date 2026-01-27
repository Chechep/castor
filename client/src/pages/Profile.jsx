import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { updateUserProfile, updateUserEmail, updateUserPassword } from "../firebase";
import { toast } from "react-hot-toast";

export default function Profile() {
  const { currentUser } = useAuth();

  const [name, setName] = useState(currentUser?.displayName || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update profile name & photo
      let photoURL = currentUser.photoURL;
      if (photo) {
        // Convert to a base64 URL (simplest approach for now)
        const reader = new FileReader();
        reader.readAsDataURL(photo);
        reader.onloadend = async () => {
          photoURL = reader.result;
          await updateUserProfile(name, photoURL);
          toast.success("Profile updated successfully!");
        };
      } else {
        await updateUserProfile(name, photoURL);
        toast.success("Profile updated successfully!");
      }

      // Update email
      if (email !== currentUser.email) {
        await updateUserEmail(email);
        toast.success("Email updated successfully!");
      }

      // Update password
      if (password) {
        await updateUserPassword(password);
        toast.success("Password updated successfully!");
        setPassword("");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Edit Profile
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Profile Photo */}
          <div className="flex flex-col items-center gap-2">
            <img
              src={photo ? URL.createObjectURL(photo) : currentUser.photoURL || "/default-avatar.png"}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="text-sm text-gray-700 dark:text-gray-200"
            />
          </div>

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="New Password (leave blank to keep)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full p-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
