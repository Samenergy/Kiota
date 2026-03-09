import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Thermometer,
  TrendingUp,
  Sun,
  Shield,
  BarChart3,
  Smartphone,
  Check,
  AlertCircle,
  Play,
  Users,
  Target,
  Zap,
  Cpu,
  Wrench,
} from "lucide-react";

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-right bg-no-repeat relative"
        style={{ backgroundImage: "url('/we.png')", backgroundSize: '35% auto' }}
      >
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
                  Raise Smart.
                  <br />
                  Grow Strong.
                </span>
                <br />
                <span className="text-black text-4xl">
                  Transform Your Farm Today
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-black leading-relaxed font-medium">
                Kiota Poultry transforms your poultry farm with intelligent
                monitoring, real-time alerts, and smart automation that keeps
                your birds healthy and your business profitable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get a Demo</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-green-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-green-200"
                >
                  Talk to an Expert
                </Link>
              </div>
              <div className="pt-4">
                <p className="text-sm sm:text-base text-black italic">
                  Helping poultry farms move from guesswork to data-driven
                  decisions.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                <div className="relative flex justify-center gap-6 mt-10">
                  {/* LEFT IMAGE */}
                  <div className="w-full flex justify-center">
                    <img
                      src="/Group 1.svg"
                      alt="Decorative background"
                      className="w-[600px] max-w-none"
                    />
                  </div>
                </div>

                {/* Circular badge, similar to reference design */}
                <div className="hidden md:flex items-center gap-2 absolute -right-30 bottom-8 bg-white rounded-full shadow-xl px-4 py-2 border border-green-200">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Users className="text-green-600" size={18} />
                  </div>
                  <div className="text-xs font-semibold text-gray-700 leading-tight">
                    <div>More about us</div>
                    <div className="text-green-600">Smart farming team</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-md font-bold text-green-700 font-black text-gray-800 mb-4">
                About Kiota Poultry
              </h2>
              <h2 className="text-5xl font-bold font-black text-gray-800 mb-4">
                We Help Poultry Farmers Farm Smarter
              </h2>
              <p className="text-md text-gray-700 leading-relaxed">
                Kiota Poultry uses smart technology and real-time monitoring to
                help farmers protect their birds, greenuce losses, and improve
                farm performance. Our IoT-powegreen system gives you full
                visibility and control, turning everyday farm data into better
                decisions and stronger growth.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 mt-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To empower poultry farmers with smart technology that improves
                productivity, greenuces losses, and simplifies farm management.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To lead the digital transformation of poultry farming in Africa
                and beyond through innovative, affordable, and scalable
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-4">
              🧠 From Traditional Farming to Smart Farming
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600 mb-6">
                Poultry farming faces many challenges:
              </h3>
              <div className="space-y-4">
                {[
                  "Sudden bird deaths due to temperature changes",
                  "High feed waste",
                  "Disease outbreaks",
                  "Manual monitoring errors",
                  "Lack of real-time farm data",
                ].map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertCircle
                      className="text-green-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <p className="text-gray-700 font-medium">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">
                Kiota Poultry solves these problems:
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Using smart monitoring and automation systems that give farmers
                complete control and insight into their operations.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative bg-white">
        {/* Top half: background image only */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2 min-h-[500px] bg-cover  bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/11.jpg')" }}
        />
        <div className="absolute top-0 left-0 right-0 h-1/2 min-h-[500px] bg-black/50" />

        <div className="relative z-10">
          {/* Section Header - sits in the image half */}
          <div className="min-h-[50vh] min-h-[280px] flex flex-col items-center justify-center px-6 pt-16 pb-12">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              Our Smart Farm Solutions
            </h2>
            <p className="text-white/95 max-w-2xl mx-auto text-center">
              We help poultry farmers use technology to improve productivity,
              greenuce losses, and manage farms more efficiently.
            </p>
          </div>

          {/* Bottom half: solid background + service cards */}

          <div className="max-w-7xl mx-auto ">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
              {/* Service 1 */}
              <div className="bg-green-100 rounded-3xl rounded-br-none p-8 shadow-md border-b-4 border-green-600 hover:shadow-xl transition duration-300">
                <div className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center mb-6">
                  <Thermometer className="text-green-600" size={26} />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Smart Poultry Monitoring
                </h3>

                <p className="text-gray-600 mb-6">
                  IoT sensors track temperature, humidity, air quality, and
                  lighting conditions in real-time to maintain a healthy poultry
                  environment.
                </p>

                <button className="flex items-center text-green-700 font-semibold gap-2 hover:gap-3 transition-all">
                  Read More ➜
                </button>
              </div>

              {/* Service 2 */}
              <div className="bg-green-100 rounded-2xl rounded-br-none p-8 shadow-md border-b-4 border-green-600 hover:shadow-xl transition duration-300">
                <div className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center mb-6">
                  <AlertCircle className="text-green-600" size={26} />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Dashboard & Real-Time Alerts
                </h3>

                <p className="text-gray-600 mb-6">
                  Farmers view live farm data, growth trends, and receive
                  instant alerts for overheating, ventilation issues, or sudden
                  environmental changes.
                </p>

                <button className="flex items-center text-green-700 font-semibold gap-2 hover:gap-3 transition-all">
                  Read More ➜
                </button>
              </div>

              {/* Service 3 */}
              <div className="bg-green-100 rounded-2xl rounded-br-none p-8 shadow-md border-b-4 border-green-600 hover:shadow-xl transition duration-300">
                <div className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center mb-6">
                  <Cpu className="text-green-600" size={26} />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Farm Automation Support
                </h3>

                <p className="text-gray-600 mb-6">
                  Integration of smart ventilation, lighting control, and
                  automated feeding systems to greenuce manual work and improve
                  farm efficiency.
                </p>

                <button className="flex items-center text-green-700 font-semibold gap-2 hover:gap-3 transition-all">
                  Read More ➜
                </button>
              </div>

              {/* Service 4 */}
              <div className="bg-green-100 rounded-2xl rounded-br-none p-8 shadow-md border-b-4 border-green-600 hover:shadow-xl transition duration-300">
                <div className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="text-green-600" size={26} />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Installation & Technical Support
                </h3>

                <p className="text-gray-600 mb-6">
                  We handle device installation, system setup, farmer training,
                  and ongoing technical support to keep your farm running
                  smoothly.
                </p>

                <button className="flex items-center text-green-700 font-semibold gap-2 hover:gap-3 transition-all">
                  Read More ➜
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">
              Smart Farm in Action
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              We Help You Run
              <br />A Smarter Poultry Farm
            </h2>
            <p className="text-gray-600 text-lg">
              See how Kiota Poultry turns real-time data into better decisions,
              healthier birds, and more profitable farms.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Experience in smart poultry management",
                "Real-time monitoring that grows with your farm",
                "Solutions tailogreen to your farm’s needs",
                "Turning farm data into simple, clear insights",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Check
                    className="text-green-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200">
              Watch Demo Video
              <Play className="ml-2" size={18} />
            </button>
          </div>

          {/* Right video thumbnail */}
          <div className="relative rounded-3xl rounded-br-none  overflow-hidden shadow-2xl">
            <img
              src="/11.jpg"
              alt="Farmer using smart poultry monitoring"
              className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
            <button
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                <Play className="text-green-600" size={32} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Benefits / Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 text-xs font-semibold uppercase tracking-[0.15em] text-green-600 mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-3">
              Why Farmers Trust Kiota Poultry
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              A complete smart-farming partner focused on healthier birds, fewer
              losses, and simple, clear data every farmer can rely on.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-center">
            {/* Left column of benefits */}
            <div className="space-y-4">
              {[
                {
                  title: "greenuce bird mortality",
                  description:
                    "Keep birds in the ideal environment with smart alerts before conditions become dangerous.",
                },
                {
                  title: "Improve feed efficiency",
                  description:
                    "Use data to optimize feeding schedules and greenuce waste on every flock.",
                },
                {
                  title: "Early disease risk detection",
                  description:
                    "Spot unusual changes in temperature and behavior before they become outbreaks.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 py-4 border-b border-green-100 last:border-b-0"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                    <Check className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center circular image */}
            <div className="flex justify-center my-10 lg:my-0">
              <div className="relative">
                {/* Bigger Circle */}
                <div
                  className="w-[350px] h-[350px] 
                    sm:w-[450px] sm:h-[450px] 
                    lg:w-[350px] lg:h-[350px] 
                    rounded-full overflow-hidden 
                    shadow-2xl border-4 border-white"
                >
                  <img
                    src="/12 1.svg"
                    alt="Healthy poultry farm using Kiota Poultry"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full ring-8 ring-green-100 pointer-events-none" />
              </div>
            </div>

            {/* Right column of benefits */}
            <div className="space-y-4">
              {[
                {
                  title: "Save time with automation",
                  description:
                    "Automated monitoring and alerts mean fewer manual checks and more time for planning.",
                },
                {
                  title: "Make data‑driven decisions",
                  description:
                    "See clear trends and reports so you can decide based on facts, not guesswork.",
                },
                {
                  title: "Increase farm profitability",
                  description:
                    "Healthier birds and lower losses translate directly into better margins.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 py-4 border-b border-green-100 last:border-b-0"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                    <Check className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left: FAQ list */}
          <div className="space-y-4">
            {[
              {
                question: "How do I get started with Kiota Poultry?",
                answer:
                  "Book a free consultation, and we’ll assess your farm size, needs, and recommend the right smart monitoring setup.",
              },
              {
                question: "Do I need stable internet on my farm?",
                answer:
                  "Yes, you’ll need an internet connection, but our system is optimized to work reliably even in rural areas with limited connectivity.",
              },
              {
                question: "Can I monitor multiple poultry houses at once?",
                answer:
                  "Absolutely. You can track multiple houses from one dashboard, each with its own sensors and alerts.",
              },
              {
                question:
                  "What kind of support do you provide after installation?",
                answer:
                  "We offer ongoing technical support, training, and system checks to make sure your farm continues running smoothly.",
              },
            ].map((faq, index) => {
              const isActive = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border flex flex-col overflow-hidden ${
                    isActive
                      ? "bg-green-50 border-green-500 shadow-md"
                      : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full text-left px-6 py-4"
                  >
                    <div>
                      <p className="text-xs font-semibold text-gray-400 tracking-wide mb-1">
                        {`0${index + 1}.`}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-gray-900">
                        {faq.question}
                      </p>
                    </div>
                    <span
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {isActive ? "−" : "+"}
                    </span>
                  </button>
                  {isActive && (
                    <div className="px-6 pb-5 pt-0 text-sm text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: FAQ intro + social proof */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Do you have a question?
              <br />
              Find answers here.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              If you’re wondering how Kiota Poultry fits into your farm, you’re
              not alone. These are the questions farmers ask us most often
              before they get started with smart monitoring.
            </p>

            <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    src="/09.jpg"
                    alt="Happy farmer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/10.jpg"
                    alt="Farmer at poultry farm"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/11.jpg"
                    alt="Poultry farm"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white text-xs font-semibold flex items-center justify-center border-2 border-white">
                    +4
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    5 Farmers
                  </p>
                  <p className="text-xs text-gray-500">
                    Using Kiota Poultry to monitor their flocks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="relative overflow-hidden">
        {/* BACKGROUND LAYERS */}
        <div className="absolute inset-0 flex flex-col">
          {/* TOP 75% IMAGE */}
          <div className="h-[75%] relative">
            <img
              src="/14.avif"
              alt="Farm background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* BOTTOM 25% WHITE */}
          <div className="h-[25%] bg-white"></div>
        </div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 items-center gap-12">
          {/* LEFT TEXT */}
          <div className="text-white z-10 -mt-40">
            <p className="text-sm font-semibold text-green-200 tracking-wide mb-3">
              Need an Expert
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Upgrade Your Poultry Farm?
            </h2>

            <p className="text-lg opacity-90 mb-8 max-w-xl">
              Let Kiota Poultry help you turn your farm into a smart, efficient,
              and profitable operation using modern farm technology.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold shadow-lg transition"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* RIGHT IMAGE (sits partly over white area) */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <img
              src="/15.jpg"
              alt="Farm specialists"
              className="w-[450px] rounded-[28px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* News & Blog Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                News & Blog
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                Latest insights from Kiota Poultry
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                Learn how smart monitoring, data and automation are changing
                poultry farming for small and large producers across Africa.
              </p>
            </div>
            
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                image: "/04.jpg",
                tag: "Farmer Story",
                title:
                  "How real-time monitoring saved a farm during a heat wave",
                date: "Jan 2026",
              },
              {
                image: "/06.jpg",
                tag: "Smart Farming Tips",
                title: "5 data points every poultry farmer should track daily",
                date: "Dec 2025",
              },
              {
                image: "/02.jpg",
                tag: "Product Update",
                title: "What’s new in the Kiota Poultry dashboard this month",
                date: "Nov 2025",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-200 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 font-semibold">
                      {post.tag}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex-1">
                    Short, practical insights to help you protect your birds and
                    grow a more profitable farm.
                  </p>
                  <button className="mt-4 inline-flex items-center text-sm font-semibold text-green-700 hover:text-green-800">
                    Read article
                    <ArrowRight className="ml-1" size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
