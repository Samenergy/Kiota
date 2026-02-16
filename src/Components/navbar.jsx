import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C10.34 2 9 3.34 9 5c0 .74.27 1.42.71 1.95C8.88 7.55 8 8.68 8 10c0 1.66 1.34 3 3 3v9h2v-9c1.66 0 3-1.34 3-3 0-1.32-.88-2.45-2.71-3.05.44-.53.71-1.21.71-1.95 0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Kiota Poultry
              </h1>
              <p className="text-xs text-gray-600 font-medium">Smart Farming Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/') ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg' : 'text-gray-700 hover:bg-orange-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/about') ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg' : 'text-gray-700 hover:bg-orange-100'
              }`}
            >
              About
            </Link>
            {/* Products Dropdown */}
            <div className="relative" onMouseEnter={() => setIsAppDropdownOpen(true)} onMouseLeave={() => setIsAppDropdownOpen(false)}>
              <button
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-1 ${
                  isActive('/products') || isActive('/app') ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg' : 'text-gray-700 hover:bg-orange-100'
                }`}
              >
                <span>Products</span>
                <ChevronDown size={16} className={`transition-transform ${isAppDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAppDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                  <Link
                    to="/app"
                    className="block px-6 py-4 text-gray-700 hover:bg-orange-50 transition-colors border-b border-gray-100"
                  >
                    <div className="font-semibold text-orange-600">Farm App</div>
                    <div className="text-sm text-gray-600">Mobile monitoring & management</div>
                  </Link>
                  <Link
                    to="/products"
                    className="block px-6 py-4 text-gray-700 hover:bg-orange-50 transition-colors"
                  >
                    <div className="font-semibold text-orange-600">Smart Brooder</div>
                    <div className="text-sm text-gray-600">IoT sensors & hardware</div>
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/contact') ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg' : 'text-gray-700 hover:bg-orange-100'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-orange-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-semibold ${
                isActive('/') ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'text-gray-700 hover:bg-orange-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-semibold ${
                isActive('/about') ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'text-gray-700 hover:bg-orange-50'
              }`}
            >
              About
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <div className="px-2 py-1 text-xs font-bold text-gray-500 uppercase">Products</div>
            <Link
              to="/app"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-6 py-3 rounded-lg font-semibold ${
                isActive('/app') ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'text-gray-700 hover:bg-orange-50'
              }`}
            >
              Farm App
            </Link>
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-6 py-3 rounded-lg font-semibold ${
                isActive('/products') ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'text-gray-700 hover:bg-orange-50'
              }`}
            >
              Smart Brooder
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-semibold ${
                isActive('/contact') ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'text-gray-700 hover:bg-orange-50'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;