import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const { signupUser } = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    await signupUser(email, pass);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Create Account</h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded mb-3"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded mb-3"
        onChange={e => setPass(e.target.value)}
      />

      <button onClick={handleSignup} className="w-full p-2 bg-green-600 text-white rounded">
        Sign Up
      </button>

      <p className="mt-4">
        Already have an account? <Link to="/login" className="underline">Login</Link>
      </p>
    </div>
  );
}
