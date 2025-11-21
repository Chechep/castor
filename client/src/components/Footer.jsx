import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-3xl font-serif italic font-extrabold tracking-wide mb-4">
            Essence of Risin
          </h2>

          <p className="mb-4 font-light">
          We believe in clean natural beauty. Every drop of our castor oil is made with care from sustainable harvesting to pure cold-pressed extraction.
          </p>

          {/* Eco Friendly Badge */}
          <div className="flex items-center space-x-2 rounded-xl px-4 py-2 w-fit mt-2 border border-green-500">
            <Leaf className="w-5 h-5 text-green-700" />
            <p className="text-green-700 font-serif italic text-sm">Eco-Friendly</p>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5" /> support@essenceofrisin.com
          </p>
          <p className="flex items-center gap-2 mb-2">
            <Phone className="w-5 h-5" /> +254 712 345 678
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Nairobi, Kenya
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4">

            <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Facebook className="w-5 h-5" />
            </a>

            <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Instagram className="w-5 h-5" />
            </a>

            <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Essence of Risin. All rights reserved.
      </div>
    </footer>
  );
}