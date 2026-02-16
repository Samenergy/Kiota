/* ========================================
   COMPLETE PRODUCTS PAGE - FINAL VERSION
   FILE: src/pages/Products.jsx
   
   FEATURES:
   - Two tabs: Farm App and Smart Brooder
   - Click to switch between products
   - Farm App shows screenshots and download buttons
   - Smart Brooder shows IoT hardware details
   
   Copy this entire code to src/pages/Products.jsx
   ======================================== */

import React from 'react';
import { Link } from 'react-router-dom';
import { Thermometer, Droplets, Wind, Sun, TrendingUp, Brain, Smartphone, Cloud, Shield, BarChart3, Bell, Database, Check, ArrowRight } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState('smart-brooder'); // 'smart-brooder' or 'farm-app'
  
  const products = [
    {
      icon: Thermometer,
      title: 'Environmental Sensors',
      description: 'Complete sensor network for monitoring all critical farm conditions',
      color: 'from-orange-500 to-red-600',
      features: [
        'Temperature monitoring (±0.1°C accuracy)',
        'Humidity tracking (±2% accuracy)',
        'Ammonia/CO₂ level detection',
        'Light intensity measurement',
        'Wireless connectivity (WiFi/LoRa)',
        'Battery backup & solar powered',
        'Weather-resistant housing',
        'Real-time data transmission'
      ],
      specs: {
        'Operating Range': '-20°C to 60°C',
        'Humidity Range': '0-100% RH',
        'Connectivity': 'WiFi 802.11 b/g/n, LoRa',
        'Power': 'Solar + Battery (72hr backup)',
        'Data Update': 'Every 30 seconds',
        'Coverage': 'Up to 500m² per sensor'
      }
    },
    {
      icon: Brain,
      title: 'Smart Control Hub',
      description: 'Central processing unit that manages all sensors and automates responses',
      color: 'from-blue-500 to-indigo-600',
      features: [
        'AI-powered analytics engine',
        'Automated ventilation control',
        'Smart lighting management',
        'Temperature regulation',
        'Alert system (SMS, Email, Push)',
        'Data logging and storage',
        'Remote configuration',
        'Multi-farm support'
      ],
      specs: {
        'Processing': 'ARM Cortex processor',
        'Storage': '64GB onboard storage',
        'Connectivity': 'WiFi, 4G LTE, Ethernet',
        'Display': '7-inch touchscreen',
        'Sensors Supported': 'Up to 50 sensors',
        'Power': '12V DC / Battery backup'
      }
    },
    {
      icon: Shield,
      title: 'Installation & Support',
      description: 'Professional installation, training, and ongoing technical support',
      color: 'from-green-500 to-emerald-600',
      features: [
        'Professional on-site installation',
        'Farm mapping and sensor placement',
        'Staff training (2-day workshop)',
        '24/7 technical support',
        'Regular maintenance visits',
        'Software updates (lifetime)',
        'Hardware warranty (2 years)',
        'Replacement parts available'
      ],
      specs: {
        'Installation Time': '1-2 days',
        'Training': 'Full hands-on workshop',
        'Support Hours': '24/7 availability',
        'Response Time': 'Under 2 hours',
        'Warranty': '2 years hardware',
        'Maintenance': 'Quarterly visits'
      }
    }
  ];

  const addons = [
    {
      icon: Shield,
      title: 'Health Monitoring Add-on',
      description: 'Advanced biosecurity and health tracking features',
      price: '+$50/month'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deeper insights with custom AI models',
      price: '+$75/month'
    },
    {
      icon: Database,
      title: 'Extended Data Storage',
      description: 'Unlimited historical data with advanced search',
      price: '+$25/month'
    },
    {
      icon: Cloud,
      title: 'API Access',
      description: 'Integrate with your existing farm management systems',
      price: '+$100/month'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: 'one-time',
      monthly: '$49',
      description: 'Perfect for small farms getting started',
      features: [
        '2 IoT sensor units',
        'Basic mobile app access',
        'Real-time monitoring',
        'Email alerts',
        'Standard support',
        '1 farm location',
        'Basic analytics',
        '30-day data retention'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: 'one-time',
      monthly: '$99',
      description: 'Most popular for growing farms',
      features: [
        '5 IoT sensor units',
        'Full mobile & web app',
        'AI-powered analytics',
        'SMS + Email + Push alerts',
        'Priority support',
        'Up to 3 farm locations',
        'Advanced analytics',
        '90-day data retention',
        'Custom reports',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      monthly: 'Custom',
      description: 'For large-scale operations',
      features: [
        'Unlimited sensors',
        'Custom deployment',
        'Dedicated AI models',
        'All alert channels',
        '24/7 premium support',
        'Unlimited farm locations',
        'Custom integrations',
        'Unlimited data retention',
        'API access',
        'On-site training',
        'Custom features'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Our Products</h1>
          <p className="text-xl opacity-90 mb-8">
            Choose which product you'd like to learn about
          </p>
          
          {/* Product Selector Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setSelectedProduct('farm-app')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                selectedProduct === 'farm-app'
                  ? 'bg-white text-orange-600 shadow-xl scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              📱 Farm App
            </button>
            <button
              onClick={() => setSelectedProduct('smart-brooder')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                selectedProduct === 'smart-brooder'
                  ? 'bg-white text-orange-600 shadow-xl scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              🔧 Smart Brooder
            </button>
          </div>
        </div>
      </section>

      {/* Smart Brooder Content */}
      {selectedProduct === 'smart-brooder' && (
        <>
      {/* Products Detail */}
      {products.map((product, index) => (
        <section key={index} className={`py-20 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-white' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className={`w-20 h-20 bg-gradient-to-br ${product.color} rounded-3xl flex items-center justify-center mb-6 shadow-xl`}>
                  <product.icon className="text-white" size={40} />
                </div>
                <h2 className="text-4xl font-black text-gray-800 mb-4">{product.title}</h2>
                <p className="text-xl text-gray-700 mb-8">{product.description}</p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h3>
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
                  <div className="space-y-4">
                    {Object.entries(product.specs).map(([key, value], idx) => (
                      <div key={idx} className="flex justify-between items-start pb-4 border-b border-orange-200 last:border-0">
                        <span className="text-gray-600 font-semibold">{key}</span>
                        <span className="text-gray-800 font-bold text-right ml-4">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Optional <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Upgrades</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your Smart Brooder system with powerful add-ons
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <addon.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{addon.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-black text-orange-600">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Simple <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your farm's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`rounded-3xl shadow-2xl overflow-hidden ${plan.popular ? 'ring-4 ring-orange-500 transform scale-105' : 'bg-white'}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-center py-2 font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-black text-gray-800">{plan.price}</span>
                      {plan.period !== 'pricing' && <span className="text-gray-600 ml-2">hardware</span>}
                    </div>
                    {plan.monthly !== 'Custom' && (
                      <div className="text-orange-600 font-bold text-lg mt-2">
                        ${plan.monthly}/month subscription
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center px-6 py-4 rounded-xl font-bold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                        : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom solution?</p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <span>Contact Sales</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      </>
      )}

      {/* Farm App Content */}
      {selectedProduct === 'farm-app' && (
        <>
      {/* Farm App Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Farm <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">App</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor and manage your entire poultry farm from your smartphone
            </p>
          </div>

          {/* App Screenshots */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 aspect-[9/16] flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📊</div>
                <div className="text-xl font-bold">Dashboard</div>
                <div className="text-sm opacity-75">Real-time monitoring</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 aspect-[9/16] flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🔔</div>
                <div className="text-xl font-bold">Alerts</div>
                <div className="text-sm opacity-75">Instant notifications</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 aspect-[9/16] flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📈</div>
                <div className="text-xl font-bold">Analytics</div>
                <div className="text-sm opacity-75">Trends & reports</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="text-green-500 mt-1">✓</div>
                  <span className="text-gray-700">Real-time environmental monitoring (temperature, humidity, ammonia, light)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-green-500 mt-1">✓</div>
                  <span className="text-gray-700">Instant alerts via push notifications, SMS, and email</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-green-500 mt-1">✓</div>
                  <span className="text-gray-700">Historical data and trend analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-green-500 mt-1">✓</div>
                  <span className="text-gray-700">Multi-farm management from one app</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-green-500 mt-1">✓</div>
                  <span className="text-gray-700">Export reports as PDF or Excel</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-green-500 mt-1">✓</div>
                  <span className="text-gray-700">Offline mode with automatic sync</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Platforms:</span>
                  <span className="text-gray-800 font-bold">iOS & Android</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Languages:</span>
                  <span className="text-gray-800 font-bold">English, Swahili</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Updates:</span>
                  <span className="text-gray-800 font-bold">Automatic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Offline Mode:</span>
                  <span className="text-gray-800 font-bold">7 days cache</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">Cost:</span>
                  <span className="text-gray-800 font-bold">Included with hardware</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl shadow-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-black mb-4">Download Farm App</h3>
            <p className="text-xl opacity-90 mb-8">Available for iOS and Android devices</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:scale-105 transition-all flex items-center justify-center space-x-3">
                <span>🍎</span>
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="text-lg">App Store</div>
                </div>
              </button>
              <button className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:scale-105 transition-all flex items-center justify-center space-x-3">
                <span>🤖</span>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg">Google Play</div>
                </div>
              </button>
            </div>
            <p className="text-sm opacity-75 mt-6">Note: App requires Smart Brooder hardware to function</p>
          </div>
        </div>
      </section>
      </>
      )}
    </div>
  );
};

export default Products;