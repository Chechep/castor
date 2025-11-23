import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsAndPolicies() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-200 dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Terms and Conditions</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Essence of Risin. These terms and conditions outline the rules and regulations for the use of our website and services.
              </p>
              <p>
                By accessing this website and placing an order, you accept these terms and conditions in full. Do not continue to use Essence of Risin's website if you do not accept all of the terms and conditions stated on this page.
              </p>
            </section>

            {/* Orders and Payments */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Orders and Payments</h2>
              <h3 className="text-xl font-medium mb-3">2.1 Order Acceptance</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All orders are subject to availability and confirmation of the order price</li>
                <li>We reserve the right to refuse any order you place with us</li>
                <li>Your order constitutes an offer to us to buy the products</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">2.2 Payment Methods</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We accept M-Pesa and credit/debit card payments</li>
                <li>All payments are processed securely through encrypted channels</li>
                <li>Prices are in Kenyan Shillings (Ksh) and include all applicable taxes</li>
              </ul>
            </section>

            {/* Delivery */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Delivery</h2>
              <h3 className="text-xl font-medium mb-3">3.1 Delivery Areas</h3>
              <p className="mb-4">
                We deliver nationwide across Kenya. Delivery times may vary depending on your location.
              </p>

              <h3 className="text-xl font-medium mb-3">3.2 Delivery Times</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Nairobi Metropolitan: 1-2 business days</li>
                <li>Other Major Towns: 2-3 business days</li>
                <li>Remote Areas: 3-5 business days</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">3.3 Delivery Charges</h3>
              <p>
                Delivery charges vary based on your location and will be calculated at checkout.
              </p>
            </section>

            {/* Returns and Refunds */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Returns and Refunds</h2>
              <h3 className="text-xl font-medium mb-3">4.1 Return Policy</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Items can be returned within 7 days of delivery</li>
                <li>Products must be unopened and in original packaging</li>
                <li>Return shipping costs are the responsibility of the customer</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">4.2 Refund Process</h3>
              <p>
                Refunds will be processed within 5-7 business days after we receive the returned items.
              </p>
            </section>

            {/* Privacy and Data Protection */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data Protection</h2>
              <p className="mb-4">
                We are committed to protecting your privacy. Your personal information is used solely for order processing and delivery purposes.
              </p>
              <h3 className="text-xl font-medium mb-3">5.1 Data Collection</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We collect only necessary information for order fulfillment</li>
                <li>Your data is stored securely and not shared with third parties</li>
                <li>Payment information is processed through secure payment gateways</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p>
                All content on this website, including images, text, and logos, is the property of Essence of Risin and protected by copyright laws.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p>
                Essence of Risin shall not be liable for any indirect, special, or consequential damages arising out of the use or inability to use our products.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Kenya.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p className="mb-2"><strong>Email:</strong> support@essenceofrisin.com</p>
              <p className="mb-2"><strong>Phone:</strong> +254 700 000 000</p>
              <p><strong>Address:</strong> Nairobi, Kenya</p>
            </section>

            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Note:</strong> These terms and conditions are subject to change without prior notice. Please check this page regularly for updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}