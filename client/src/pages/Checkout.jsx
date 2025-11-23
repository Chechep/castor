import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ArrowLeft, Shield, Truck, CreditCard, Lock, Zap, X, CheckCircle } from "lucide-react";
import mpesaLogo from "../assets/images/mpesa.png";

export default function Checkout() {
  const { cartItems, clearCart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [checkoutStep, setCheckoutStep] = useState("checkout");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [mpesaNumber, setMpesaNumber] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [quickBuyProduct, setQuickBuyProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  // QuickBuy checkout
  useEffect(() => {
    if (location.state?.quickBuy && location.state.productId) {
      const product = cartItems.find(item => item.id === location.state.productId);
      setQuickBuyProduct(product);
    }
  }, [location.state, cartItems]);

  const displayItems = quickBuyProduct ? [quickBuyProduct] : cartItems;

  const totalAmount = displayItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemoveQuickBuy = () => {
    if (quickBuyProduct) removeFromCart(quickBuyProduct.id);
    navigate("/products");
  };

  const handlePayment = () => {
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      const orderId = Date.now();
      const cardNumber = ""; // replace with actual input if needed
      let cardType = "";
      if (paymentMethod === "card" && cardNumber.startsWith("4")) cardType = "visa";
      if (paymentMethod === "card" && cardNumber.startsWith("5")) cardType = "mastercard";

      const order = {
        id: orderId,
        customer: { ...customerInfo },
        items: displayItems,
        total: totalAmount,
        paymentMethod,
        cardType,
        mpesaNumber: paymentMethod === "mpesa" ? mpesaNumber : null,
      };

      // Save order to localStorage (or send to backend)
      localStorage.setItem("recentOrder", JSON.stringify(order));

      setCheckoutStep("complete");
      setLoading(false);

      // Clear cart
      if (quickBuyProduct) removeFromCart(quickBuyProduct.id);
      else clearCart();
    }, 2000); // 2s loading
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  if (checkoutStep === "complete") {
    return (
      <div className="p-6 max-w-2xl mx-auto text-center">
        <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-300" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
            Order Confirmed!
          </h2>
          <p className="text-green-700 dark:text-green-300 mb-4">
            Thank you for your purchase. Your order has been received.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/orders"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              View Order
            </Link>
            <Link
              to="/products"
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        {quickBuyProduct ? "Back to Products" : "Back to Cart"}
      </button>

      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Order Summary */}
      <div className="mb-8 p-4 border rounded-lg bg-white dark:bg-gray-800">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        {displayItems.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-4">
            No items to checkout
          </p>
        ) : (
          displayItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
              <div className="flex items-center gap-3">
                <img
                  src={item.image || "/api/placeholder/40/40"}
                  alt={item.name}
                  className="w-10 h-10 object-cover rounded"
                />
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 block">x {item.quantity}</span>
                </div>
              </div>
              <span className="font-semibold">Ksh. {item.price * item.quantity}</span>
            </div>
          ))
        )}
        <div className="flex justify-between items-center pt-4 mt-2 border-t">
          <span className="text-lg font-bold">Total:</span>
          <span className="text-lg font-bold">Ksh. {totalAmount}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Customer Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Customer Information</h3>
          <input type="text" name="name" placeholder="Full Name" value={customerInfo.name} onChange={handleInputChange} className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500" required />
          <input type="email" name="email" placeholder="Email Address" value={customerInfo.email} onChange={handleInputChange} className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500" required />
          <input type="tel" name="phone" placeholder="Phone Number" value={customerInfo.phone} onChange={handleInputChange} className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500" required />
          <textarea name="address" placeholder="Delivery Address" value={customerInfo.address} onChange={handleInputChange} rows="3" className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500" required />
        </div>

        {/* Payment Method */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Payment Method</h3>

          <div className="space-y-3">
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-200">
              <input type="radio" name="payment" value="mpesa" checked={paymentMethod === "mpesa"} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-3" />
              <div className="items-center gap-2">
                <span className="text-sm font-medium">M-Pesa</span>
                <img src={mpesaLogo} alt="M-Pesa" className="h-6" />
              </div>
            </label>

            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-200">
              <input type="radio" name="payment" value="card" checked={paymentMethod === "card"} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-3" />
              <div className="items-center gap-2">
                <span className="text-sm font-medium">Credit/Debit Card</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-6" />
              </div>
            </label>
          </div>

          {/* Loading spinner */}
          {loading && (
            <div className="flex justify-center items-center mt-4">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Processing payment...</span>
            </div>
          )}

          {/* Card input */}
          {paymentMethod === "card" && !loading && (
            <div className="space-y-3">
              <input type="text" placeholder="Card Number" className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500" />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="MM/YY" className="p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500" />
                <input type="text" placeholder="CVV" className="p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500" />
              </div>
              <input type="text" placeholder="Cardholder Name" className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500" />
            </div>
          )}

          {paymentMethod === "mpesa" && !loading && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <label className="block text-sm font-medium mb-2">M-Pesa Phone Number</label>
              <input type="tel" placeholder="07XX XXX XXX" value={mpesaNumber} onChange={(e) => setMpesaNumber(e.target.value)} className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500" />
            </div>
          )}

          {/* Terms */}
          <div className="border-t pt-4">
            <label className="flex items-start gap-3">
              <input type="checkbox" checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} className="mt-1" />
              <span className="text-sm">
                I agree to the{" "}
                <Link to="/terms" target="_blank" className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300">
                  Terms and Conditions
                </Link>
              </span>
            </label>
          </div>

          <div className="border-t pt-4">
            <button onClick={handlePayment} disabled={!paymentMethod || !customerInfo.name || !customerInfo.phone || (paymentMethod === "mpesa" && !mpesaNumber) || !agreeToTerms || displayItems.length === 0 || loading} className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200 font-semibold transform hover:scale-[0.98]">
              Complete Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
