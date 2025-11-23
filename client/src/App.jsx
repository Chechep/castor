import { Routes, Route } from "react-router-dom";
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
import { Toaster } from "react-hot-toast";
import Orders from "./pages/Orders";
import TrackOrder from "./pages/TrackOrder";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">

      <Toaster position="top-right" />

      <Navbar />

      <main className="flex-1 w-full">
        <Routes>
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
          <Route path="/orders" element={<Orders />} />
          <Route path="/track" element={<TrackOrder />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
