import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RecoverPassword from "./pages/RecoverPassword";
import Cart from "./pages/Cart";
import Feature from "./pages/Feature";
import Cashout from "./pages/Checkout";
import About from "./pages/About";
import Footer from "./components/Footer";
import TermsAndPolicies from './pages/TermsAndPolicies';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      
      <main className="flex-1">
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
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}