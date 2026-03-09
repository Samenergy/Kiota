import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Thermometer, 
  Wifi, 
  Battery, 
  Shield, 
  Smartphone, 
  AlertTriangle, 
  CheckCircle, 
  Zap,
  Cpu,
  Activity,
  Sun,
  Droplets,
  Wind
} from 'lucide-react';

const SmartBrooder = () => {
  const features = [
    {
      icon: Thermometer,
      title: 'Temperature Control',
      description: 'Maintains optimal brooding temperature with precision heating and cooling systems'
    },
    {
      icon: Wifi,
      title: 'Real-time Monitoring',
      description: 'Live data tracking and alerts sent directly to your mobile device'
    },
    {
      icon: Battery,
      title: 'Backup Power',
      description: 'Uninterrupted operation with solar battery backup during power outages'
    },
    {
      icon: Shield,
      title: 'Disease Prevention',
      description: 'Early warning system for environmental conditions that promote disease'
    },
    {
      icon: Smartphone,
      title: 'Mobile Control',
      description: 'Adjust settings and monitor your brooder from anywhere using our app'
    },
    {
      icon: AlertTriangle,
      title: 'Smart Alerts',
      description: 'Instant notifications for temperature fluctuations, power issues, and more'
    }
  ];

  const specs = [
    { label: 'Temperature Range', value: '20°C - 40°C ±0.5°C' },
    { label: 'Capacity', value: 'Up to 500 chicks per unit' },
    { label: 'Power Consumption', value: '150W (heating), 20W (monitoring)' },
    { label: 'Battery Life', value: '48 hours backup' },
    { label: 'Connectivity', value: 'WiFi, 4G, Bluetooth' },
    { label: 'Warranty', value: '2 years comprehensive' }
  ];

  const benefits = [
    {
      title: '95% Chick Survival',
      description: 'Maintain perfect conditions for maximum chick survival rates'
    },
    {
      title: 'Reduce Labor Costs',
      description: 'Automated monitoring eliminates need for constant manual checks'
    },
    {
      title: 'Prevent Disease Outbreaks',
      description: 'Early detection of environmental issues that lead to diseases'
    },
    {
      title: 'Energy Efficient',
      description: 'Smart heating reduces power consumption by up to 40%'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Cpu size={20} />
                <span className="font-semibold">Smart Hardware</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                Smart Brooder
                <br />
                <span className="text-3xl md:text-4xl">Intelligent Chick Management</span>
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Revolutionize your poultry brooding with our IoT-powered smart brooder system. 
                Monitor temperature, humidity, and chick health in real-time from your smartphone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Get Quote
                  <Zap className="ml-2" size={20} />
                </Link>
                <Link
                  to="/app"
                  className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  View App
                  <Smartphone className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <Thermometer className="text-white mx-auto mb-2" size={32} />
                    <div className="text-white font-semibold">Temp Control</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <Wifi className="text-white mx-auto mb-2" size={32} />
                    <div className="text-white font-semibold">IoT Ready</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <Battery className="text-white mx-auto mb-2" size={32} />
                    <div className="text-white font-semibold">Solar Power</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <Smartphone className="text-white mx-auto mb-2" size={32} />
                    <div className="text-white font-semibold">Mobile App</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Advanced <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology designed specifically for modern poultry farming
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-green-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Technical <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Specifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with precision engineering for reliable performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
                <div className="text-sm text-gray-500 mb-1">{spec.label}</div>
                <div className="text-xl font-bold text-gray-800">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Why Choose <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Smart Brooder?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your brooding operations with measurable benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Monitoring */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Environmental <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Monitoring</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sensor network for optimal chick conditions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <Thermometer className="text-green-600" size={40} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Temperature</h3>
              <p className="text-gray-600">Precise control within ±0.5°C</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <Droplets className="text-blue-600" size={40} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Humidity</h3>
              <p className="text-gray-600">Optimal moisture levels maintained</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <Wind className="text-cyan-600" size={40} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Air Quality</h3>
              <p className="text-gray-600">CO2 and ammonia monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="text-purple-600" size={40} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Activity</h3>
              <p className="text-gray-600">Chick behavior analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Transform Your Brooding?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join hundreds of farmers who have improved their chick survival rates with Smart Brooder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Request Demo
              <Activity className="ml-2" size={20} />
            </Link>
            <Link
              to="/app"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              Download App
              <Smartphone className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartBrooder;
