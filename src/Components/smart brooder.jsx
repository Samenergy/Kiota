import React from "react";
import { Link } from "react-router-dom";
import {
  Thermometer,
  Wifi,
  Shield,
  Smartphone,
  AlertTriangle,
  CheckCircle,
  Zap,
  Cpu,
  Activity,
  Droplets,
  Wind,
  Scale,
} from "lucide-react";

const SmartBrooder = () => {
  const features = [
    {
      icon: Wind,
      title: "Ammonia Monitoring",
      description:
        "MQ-132 gas sensor detects harmful NH3 levels to prevent respiratory issues in chicks.",
    },
    {
      icon: Scale,
      title: "Precision Weighing",
      description:
        "Integrated HX711 bridge interface for real-time tracking of bird growth and feed consumption.",
    },
    {
      icon: Thermometer,
      title: "Dual-Zone Climate",
      description:
        "Redundant DHT22 sensors provide highly accurate temperature and humidity averaging.",
    },
    {
      icon: Wifi,
      title: "IoT Connectivity",
      description:
        "ESP32-powered system with built-in Wi-Fi and Bluetooth for seamless cloud data sync.",
    },
    {
      icon: Shield,
      title: "IP-Rated Durability",
      description:
        "Components are housed in a dust-proof, transparent enclosure designed for farm conditions.",
    },
    {
      icon: AlertTriangle,
      title: "Instant Alerts",
      description:
        "Get push notifications the moment environmental conditions drift outside safe parameters.",
    },
  ];

  const specs = [
    { label: "Microcontroller", value: "ESP32 Dual-Core (Wi-Fi/BLE)" },
    { label: "Air Quality Sensor", value: "MQ-132 (Ammonia/NH3)" },
    { label: "Climate Sensors", value: "2x DHT22 (Temp & Humidity)" },
    { label: "Weight Interface", value: "HX711 24-Bit ADC" },
    { label: "Data Protocol", value: "MQTT / HTTP REST API" },
    { label: "Power Input", value: "5V USB / Battery Backup Ready" },
  ];

  const benefits = [
    {
      title: "Data-Driven Decisions",
      description:
        "Understand exactly how environmental quality impacts your feed conversion ratio.",
    },
    {
      title: "Reduced Mortality",
      description:
        "Early detection of high ammonia or temperature spikes saves lives.",
    },
    {
      title: "Remote Oversight",
      description:
        "Manage multiple brooding units across different locations from one dashboard.",
    },
    {
      title: "Transparent Design",
      description:
        "Visual status checks via a clear enclosure and integrated OLED display.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-700 to-green-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <Cpu size={18} sm:size={20} className="text-green-300" />
                <span className="font-semibold uppercase tracking-wider text-xs sm:text-sm">
                  Industrial IoT Hardware
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                Precision Monitoring
                <br />
                <span className="text-green-400">For Smarter Poultry</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
                The Kiota IoT Node tracks Ammonia, Temperature, and Weight with
                surgical precision, ensuring your poultry environment is always
                optimized for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-xl font-bold text-base sm:text-lg shadow-xl hover:bg-green-400 transition-all duration-300"
                >
                  Request the Hardware
                </Link>
              </div>
            </div>
            {/* Sensor Image Container */}
            <div className="relative hidden md:block">
              <img
                src="sensor.png"
                alt="Kiota Smart Sensor Hardware"
                className="w-full max-w-[600px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sensor Grid Component Visualization */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
              Inside the <span className="text-green-600">IoT Node</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium px-2">
              A high-performance sensor array built on the ESP32 platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-8 hover:bg-white border border-transparent hover:border-green-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-3 transition-transform">
                  <feature.icon className="text-white" size={24} sm:size={28} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Technical Specs Table */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8">
                Hardware Architecture
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 sm:py-4 border-b border-white/10 gap-2"
                  >
                    <span className="text-gray-400 font-medium text-sm sm:text-base">
                      {spec.label}
                    </span>
                    <span className="text-green-400 font-bold text-sm sm:text-base text-right sm:text-left">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <Activity className="text-green-500" size={20} sm:size={24} />
                <h3 className="text-lg sm:text-xl font-bold">Real-time Telemetry</h3>
              </div>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Our system samples data every 5 seconds, performing local
                filtering before broadcasting updates to the dashboard via MQTT
                protocol.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/10 rounded-xl p-3 sm:p-4">
                  <div className="text-xs text-gray-400 uppercase mb-1">
                    Latency
                  </div>
                  <div className="text-lg sm:text-xl font-bold">&lt; 200ms</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 sm:p-4">
                  <div className="text-xs text-gray-400 uppercase mb-1">
                    Uptime
                  </div>
                  <div className="text-lg sm:text-xl font-bold">99.9%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="text-green-600" size={20} sm:size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-2">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
    </div>
  );
};

export default SmartBrooder;
