import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { loginUser, googleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginUser(email, pass);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Login</h1>

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

      <button onClick={handleLogin} className="w-full p-2 bg-black text-white rounded mb-3">
        Login
      </button>

      <button
        onClick={googleLogin}
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Login with Google
      </button>

      <p className="mt-4">
        No account? <Link to="/signup" className="underline">Sign Up</Link>
      </p>

      <p className="mt-2">
        <Link to="/recover" className="underline text-sm">Forgot Password?</Link>
      </p>
    </div>
  );
}
