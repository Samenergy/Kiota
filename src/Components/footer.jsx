/* ========================================
   FILE: src/components/Footer.jsx
   Copy this entire code into that file
   ======================================== */

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C10.34 2 9 3.34 9 5c0 .74.27 1.42.71 1.95C8.88 7.55 8 8.68 8 10c0 1.66 1.34 3 3 3v9h2v-9c1.66 0 3-1.34 3-3 0-1.32-.88-2.45-2.71-3.05.44-.53.71-1.21.71-1.95 0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
              </div>
              <h4 className="font-bold text-lg">Kiota Poultry</h4>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empowering small-scale poultry farmers with smart technology for sustainable and profitable farming.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-green-400 transition-colors">Products</Link></li>
              <li><Link to="/app" className="text-gray-400 hover:text-green-400 transition-colors">Download App</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-green-400 transition-colors">Dashboard Demo</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-gray-400">info@kiotapoultry.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-gray-400">+254 700 000 000</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Kiota Poultry. All rights reserved. Built with ❤️ for farmers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;