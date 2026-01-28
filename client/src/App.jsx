import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RecoverPassword from "./pages/RecoverPassword";
import Cart from "./pages/Cart";
import Feature from "./pages/Feature";
import About from "./pages/About";
import Cashout from "./pages/Checkout";
import TermsAndPolicies from "./pages/TermsAndPolicies";
import Orders from "./pages/Orders";
import TrackOrder from "./pages/TrackOrder";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";

import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthContext";

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
      <Toaster position="top-right" />

      <Navbar />

      <main className="flex-1 w-full">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recover" element={<RecoverPassword />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Cashout />} />
          <Route path="/terms" element={<TermsAndPolicies />} />

          {/* Protected routes */}
          <Route
            path="/orders"
            element={
              <PrivateRoute>
                <Orders />
              </PrivateRoute>
            }
          />

          <Route
            path="/track"
            element={
              <PrivateRoute>
                <TrackOrder />
              </PrivateRoute>
            }
          />

          <Route
            path="/notifications"
            element={
              <PrivateRoute>
                <Notifications />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
