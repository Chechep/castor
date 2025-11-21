import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ArrowLeft, Shield, Truck, CreditCard, Lock, Zap, X } from "lucide-react";

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

  // Check if this is a QuickBuy checkout
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
    if (quickBuyProduct) {
      removeFromCart(quickBuyProduct.id);
    }
    navigate("/products");
  };

  const handlePayment = () => {
    // Handle payment processing here
    console.log("Processing payment with:", paymentMethod);
    console.log("Customer info:", customerInfo);
    console.log("M-Pesa number:", mpesaNumber);
    setCheckoutStep("complete");
    if (quickBuyProduct) {
      removeFromCart(quickBuyProduct.id);
    } else {
      clearCart();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (checkoutStep === "complete") {
    return (
      <div className="p-6 max-w-2xl mx-auto text-center">
        <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
            Order Confirmed!
          </h2>
          <p className="text-green-700 dark:text-green-300 mb-4">
            Thank you for your purchase. Your order has been received.
          </p>
          <Link
            to="/products"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Continue Shopping
          </Link>
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
          <p className="text-gray-500 dark:text-gray-400 text-center py-4">No items to checkout</p>
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
              <span className="font-semibold">Ksh {item.price * item.quantity}</span>
            </div>
          ))
        )}
        <div className="flex justify-between items-center pt-4 mt-2 border-t">
          <span className="text-lg font-bold">Total:</span>
          <span className="text-lg font-bold">Ksh {totalAmount}</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Customer Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Customer Information</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={customerInfo.name}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={customerInfo.email}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Contact)"
            value={customerInfo.phone}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={customerInfo.address}
            onChange={handleInputChange}
            rows="3"
            className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        {/* Payment Method */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Payment Method</h3>
          
          <div className="space-y-3">
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200">
              <input
                type="radio"
                name="payment"
                value="mpesa"
                checked={paymentMethod === "mpesa"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <div>
                <div className="font-medium">M-Pesa</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Pay via M-Pesa mobile money
                </div>
              </div>
            </label>

            {paymentMethod === "mpesa" && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <label className="block text-sm font-medium mb-2">
                  M-Pesa Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="07XX XXX XXX"
                  value={mpesaNumber}
                  onChange={(e) => setMpesaNumber(e.target.value)}
                  className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <p className="text-sm text-blue-600 dark:text-blue-300 mt-2">
                  Enter the phone number registered with M-Pesa
                </p>
              </div>
            )}

            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <div>
                <div className="font-medium">Credit/Debit Card</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Pay with Visa, MasterCard, or American Express
                </div>
              </div>
            </label>
          </div>

          {/* Card Payment Details */}
          {paymentMethod === "card" && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          )}

          {/* Terms and Conditions */}
          <div className="border-t pt-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm">
                I agree to the{" "}
                <Link 
                  to="/terms" 
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Terms and Conditions
                </Link>
              </span>
            </label>
          </div>

          <div className="border-t pt-4">
            <button
              onClick={handlePayment}
              disabled={!paymentMethod || !customerInfo.name || !customerInfo.phone || 
                       (paymentMethod === "mpesa" && !mpesaNumber) || !agreeToTerms || displayItems.length === 0}
              className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200 font-semibold transform hover:scale-[0.98]"
            >
              Complete Payment
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-12 border-t pt-8">
        <h3 className="text-xl font-bold text-center mb-8">Our Services</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Security & Privacy */}
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-center mb-3">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-semibold mb-2">Security & Privacy</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your data is protected with industry-standard security measures
            </p>
          </div>

          {/* Fast Delivery */}
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-center mb-3">
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-semibold mb-2">Fast Delivery</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Quick and reliable delivery across Kenya within 2-3 business days
            </p>
          </div>

          {/* Safe Payments */}
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-center mb-3">
              <Lock className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-semibold mb-2">Safe Payments</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Secure payment processing with encryption and fraud protection
            </p>
          </div>

          {/* Customer Support */}
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-center mb-3">
              <CreditCard className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="font-semibold mb-2">24/7 Support</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Round the clock customer support for all your queries and concerns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}