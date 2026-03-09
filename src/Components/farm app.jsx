import React from "react";
import {
  Smartphone,
  Download,
  Check,
  BarChart3,
  Bell,
  Shield,
  Cloud,
  Zap,
  TrendingUp,
  Users,
} from "lucide-react";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const FarmApp = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Smartphone size={20} />
                <span className="font-semibold">Mobile App</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                Kiota Poultry
                <br />
                Farm App
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Monitor and manage your poultry farm from anywhere, anytime.
                Real-time alerts, smart analytics, and complete farm control in
                the palm of your hand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 px-6 py-4 bg-black rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <FaApple size={24} />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Download on the</div>
                    <div className="text-lg">App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 px-6 py-4 bg-black rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <IoLogoGooglePlaystore size={24} />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Get it on</div>
                    <div className="text-lg">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl"></div>
                <div className="relative flex justify-center items-center">
                  <img
                    src="/23.svg"
                    alt="Kiota Poultry Farm App on phone"
                    className="max-w-[900px] h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Powerful Features at Your Fingertips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run a successful poultry farm, all in one
              app
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Track temperature, humidity, and other critical parameters in
                real-time. Get instant updates on your farm's conditions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Bell className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">
                Smart Alerts
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Receive instant notifications when conditions exceed safe
                thresholds. Never miss a critical event.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">
                Secure & Reliable
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your data is encrypted and stogreen securely. Bank-level security
                for your farm's sensitive information.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">
                Cloud Sync
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Access your data from any device. Automatic cloud backup ensures
                you never lose important information.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">
                Fast & Responsive
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lightning-fast performance. Get instant access to your farm data
                without delays or lag.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">
                Analytics & Reports
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive analytics and detailed reports help you make
                data-driven decisions for better farm management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-green-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                    Download Now
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Start managing your poultry farm smarter today. Available
                    for iOS and Android devices.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        Free to Download
                      </h4>
                      <p className="text-gray-600">
                        No hidden costs. Download and start using immediately.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        Easy Setup
                      </h4>
                      <p className="text-gray-600">
                        Get started in minutes with our simple setup process.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        24/7 Support
                      </h4>
                      <p className="text-gray-600">
                        Our team is always ready to help you succeed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-black rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <FaApple size={28} />
                    <div className="text-left text-white">
                      <div className="text-xs opacity-90">Download on the</div>
                      <div className="text-xl">App Store</div>
                    </div>
                  </a>
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-black rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <IoLogoGooglePlaystore size={28} />
                    <div className="text-left text-white">
                      <div className="text-xs opacity-90">Get it on</div>
                      <div className="text-xl">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-gradient-to-br from-green-100 to-green-100 rounded-3xl p-8 border-2 border-green-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                      <Download className="text-green-600 mx-auto mb-2" size={32} />
                      <div className="text-2xl font-black text-gray-800">10K+</div>
                      <div className="text-sm text-gray-600">Downloads</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                      <Users className="text-green-600 mx-auto mb-2" size={32} />
                      <div className="text-2xl font-black text-gray-800">5K+</div>
                      <div className="text-sm text-gray-600">Active Users</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                      <Check className="text-green-600 mx-auto mb-2" size={32} />
                      <div className="text-2xl font-black text-gray-800">4.8★</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                      <Zap className="text-yellow-600 mx-auto mb-2" size={32} />
                      <div className="text-2xl font-black text-gray-800">99%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Scan to Download
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Use your phone camera to scan the QR code and download the app
            directly
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-2xl p-8 shadow-lg">
              <div className="w-48 h-48 bg-white rounded-xl mx-auto mb-6 flex items-center justify-center border-4 border-gray-200">
                <div className="text-center">
                  <FaApple size={64} className="text-gray-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">QR Code</div>
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-800 mb-2">
                iOS App Store
              </h3>
              <p className="text-gray-600">
                Scan with your iPhone camera to download
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-2xl p-8 shadow-lg">
              <div className="w-48 h-48 bg-white rounded-xl mx-auto mb-6 flex items-center justify-center border-4 border-gray-200">
                <div className="text-center">
                  <IoLogoGooglePlaystore size={64} className="text-gray-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">QR Code</div>
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-800 mb-2">
                Google Play Store
              </h3>
              <p className="text-gray-600">
                Scan with your Android camera to download
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmApp;
