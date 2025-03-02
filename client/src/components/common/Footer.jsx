import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">TrendHive</h3>
          <p className="text-gray-500">
            Your trusted online store for the latest fashion trends, electronics, and more.  
            Quality products at unbeatable prices.
          </p>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Support</h3>
          <ul className="text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-gray-800 transition-all">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-800 transition-all">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-gray-800 transition-all">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-gray-800 transition-all">Contact Us</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-gray-800 transition-all">About Us</a></li>
            <li><a href="#" className="hover:text-gray-800 transition-all">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-800 transition-all">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-800 transition-all">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Get 10% off your first order and stay updated with exclusive deals!
          </p>
          <form action="" className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-3 rounded-l-md w-full text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-orange-700 text-white px-6 py-3 text-sm hover:bg-orange-800 transition-all rounded-r-md"
            >
              Subscribe
            </button>
          </form>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-600 hover:text-gray-800"><Facebook size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><Twitter size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><Instagram size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TrendHive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
