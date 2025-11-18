import { useState } from "react";
import { resetPassword } from "../firebase";

export default function RecoverPassword() {
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    await resetPassword(email);
    alert("Reset link sent!");
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Recover Password</h1>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2 border rounded mb-3"
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={handleReset} className="w-full p-2 bg-purple-600 text-white rounded">
        Send Reset Link
      </button>
    </div>
  );
}
