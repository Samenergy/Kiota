import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeDropdownTimerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Ensure any pending dropdown-close timers are cleared on unmount.
    return () => {
      if (closeDropdownTimerRef.current) {
        clearTimeout(closeDropdownTimerRef.current);
      }
    };
  }, []);

  const openAppDropdown = () => {
    if (closeDropdownTimerRef.current) {
      clearTimeout(closeDropdownTimerRef.current);
      closeDropdownTimerRef.current = null;
    }
    setIsAppDropdownOpen(true);
  };

  const scheduleCloseAppDropdown = () => {
    if (closeDropdownTimerRef.current) {
      clearTimeout(closeDropdownTimerRef.current);
    }

    // Slight delay so moving from the trigger to the dropdown doesn't immediately close it.
    closeDropdownTimerRef.current = setTimeout(() => {
      setIsAppDropdownOpen(false);
      closeDropdownTimerRef.current = null;
    }, 500);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section - Cleaned */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/loggo.png"
              alt="Kiota Poultry Logo"
              className="w-36 h-auto"
            />
            
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                Kiota Poultry
              </h1>
              <p className="text-xs text-gray-600 font-medium">
                Smart Farming Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isActive("/")
                  ? "bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg"
                  : "text-gray-700 hover:bg-green-100"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isActive("/about")
                  ? "bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg"
                  : "text-gray-700 hover:bg-green-100"
              }`}
            >
              About
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={openAppDropdown}
              onMouseLeave={scheduleCloseAppDropdown}
            >
              <button
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-1 ${
                  isActive("/app") || isActive("/smart-brooder")
                    ? "bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg"
                    : "text-gray-700 hover:bg-green-100"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isAppDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isAppDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                  onMouseEnter={openAppDropdown}
                  onMouseLeave={scheduleCloseAppDropdown}
                >
                  <Link
                    to="/app"
                    className="block px-6 py-4 text-gray-700 hover:bg-green-50 transition-colors border-b border-gray-100"
                  >
                    <div className="font-semibold text-green-600">Farm App</div>
                    <div className="text-sm text-gray-600">Mobile monitoring</div>
                  </Link>
                  <Link
                    to="/smart-brooder"
                    className="block px-6 py-4 text-gray-700 hover:bg-green-50 transition-colors"
                  >
                    <div className="font-semibold text-green-600">Smart Brooder</div>
                    <div className="text-sm text-gray-600">IoT hardware</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isActive("/contact")
                  ? "bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg"
                  : "text-gray-700 hover:bg-green-100"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-green-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg font-semibold text-sm ${
                isActive("/")
                  ? "bg-gradient-to-r from-green-500 to-green-700 text-white"
                  : "text-gray-800 hover:bg-green-50"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg font-semibold text-sm ${
                isActive("/about")
                  ? "bg-gradient-to-r from-green-500 to-green-700 text-white"
                  : "text-gray-800 hover:bg-green-50"
              }`}
            >
              About
            </Link>

            {/* Products accordion-style dropdown on mobile */}
            <div className="border border-gray-100 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setIsAppDropdownOpen(!isAppDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-800 bg-white"
              >
                <span>Products</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isAppDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isAppDropdownOpen && (
                <div className="bg-gray-50">
                  <Link
                    to="/app"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAppDropdownOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                  >
                    Farm App
                  </Link>
                  <Link
                    to="/smart-brooder"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAppDropdownOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                  >
                    Smart Brooder
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg font-semibold text-sm ${
                isActive("/contact")
                  ? "bg-gradient-to-r from-green-500 to-green-700 text-white"
                  : "text-gray-800 hover:bg-green-50"
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