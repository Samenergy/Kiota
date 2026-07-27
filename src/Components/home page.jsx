import React, { useState, useEffect, useRef } from "react";
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
  const [visibleSections, setVisibleSections] = useState({});

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Scroll to a section if the URL contains a hash (e.g. coming from Footer's FAQ link)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Small delay ensures the page has rendered before scrolling
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="pt-20">
{/* Hero Section */}
<section className="relative overflow-hidden md:py-20 md:bg-[url('/we.png')] md:bg-right md:bg-no-repeat md:bg-[length:55%_auto] lg:bg-[length:35%_auto]">

  {/* Mobile-only hero banner: rounded, bordered image + headline overlay */}
  <div className="block md:hidden relative mx-3 mt-3 rounded-3xl overflow-hidden shadow-xl">
    <img
      src="/we.png"
      alt="Kiota Poultry chick"
      className="w-full h-[50vh] min-h-[320px] max-h-[420px] object-cover"
    />
    {/* Gradient overlay so text is readable over the image */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />

    <div className="absolute inset-0 flex flex-col justify-end p-6 pb-8">
      <h1 className="text-3xl sm:text-4xl font-black leading-tight">
        <span className="bg-gradient-to-r from-green-300 via-green-200 to-white bg-clip-text text-transparent">
          Raise Smart.
          <br />
          Grow Strong.
        </span>
      </h1>
      <p className="text-white text-xl sm:text-2xl font-bold mt-2">
        Transform Your Farm Today
      </p>
    </div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 pt-8 md:pt-0">
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="space-y-5 sm:space-y-8 animate-fade-in-up">

        {/* Desktop-only headline (shown next to the background image) */}
        <h1 className="hidden md:block text-3xl lg:text-4xl xl:text-5xl font-black leading-tight">
          <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
            Raise Smart.
            <br />
            Grow Strong.
          </span>
          <br />
          <span className="text-black text-2xl lg:text-3xl">
            Transform Your Farm Today
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed font-medium">
          Kiota Poultry transforms your poultry farm with intelligent
          monitoring, real-time alerts, and smart automation that keeps
          your birds healthy and your business profitable.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Get a Demo</span>
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            to="/contact"
            state={{ openForm: "general" }}
            className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-white text-green-600 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-2 border-green-200"
          >
            Talk to an Expert
          </Link>
        </div>

        <div className="pt-1 sm:pt-4">
          <p className="text-xs sm:text-sm text-black italic">
            Helping poultry farms move from guesswork to data-driven
            decisions.
          </p>
        </div>
      </div>

      {/* Desktop-only spacer column (image appears via section background above) */}
      <div className="relative hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
      </div>
    </div>
  </div>
</section>
      

      {/* About Us Section */}
      <section id="about" data-animate className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-700 ${visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                <div className="relative flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-10">
                  {/* LEFT IMAGE */}
                  <div className="w-full flex justify-center">
                    <img
                      src="/Group 1.svg"
                      alt="Decorative background"
                      className="w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md h-auto"
                    />
                  </div>
                </div>

                {/* Circular badge, similar to reference design */}
                <div className="hidden md:flex items-center gap-2 absolute -right-8 sm:-right-12 bottom-4 sm:bottom-8 bg-white rounded-full shadow-xl px-3 sm:px-4 py-2 border border-green-200">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Users className="text-green-600" size={14} sm:size={18} />
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-gray-700 leading-tight">
                    <div>More about us</div>
                    <div className="text-green-600">Smart farming team</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-sm sm:text-md font-bold text-green-700 font-black text-gray-800 mb-2 sm:mb-4">
                About Kiota Poultry
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-black text-gray-800 mb-3 sm:mb-4">
                We Help Poultry Farmers Farm Smarter
              </h2>
              <p className="text-sm sm:text-md text-gray-700 leading-relaxed">
                Kiota Poultry uses smart technology and real-time monitoring to
                help farmers protect their birds, reduce losses, and improve
                farm performance. Our IoT-powered system gives you full
                visibility and control, turning everyday farm data into better
                decisions and stronger growth.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 mt-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
                >
                  Contact Us
                  <ArrowRight className="ml-2" size={14} sm:size={18} />
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
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                To empower poultry farmers with smart technology that improves
                productivity, greenuces losses, and simplifies farm management.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
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
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Using smart monitoring and automation systems that give farmers
                complete control and insight into their operations.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section id="solutions" data-animate className={`relative bg-white transition-all duration-700 ${visibleSections['solutions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Top half: background image only */}
        <div
          className="absolute top-0 left-0 right-0 h-[45vh] sm:h-[50vh] md:h-[55vh] min-h-[280px] sm:min-h-[380px] md:min-h-[500px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/11.jpg')" }}
        />
        <div className="absolute top-0 left-0 right-0 h-[45vh] sm:h-[50vh] md:h-[55vh] min-h-[280px] sm:min-h-[380px] md:min-h-[500px] bg-black/50" />

        <div className="relative z-10">
          {/* Section Header - sits in the image half */}
          <div className="min-h-[240px] sm:min-h-[320px] md:min-h-[45vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-16 md:pb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 text-center">
              Our Smart Farm Solutions
            </h2>
            <p className="text-white/95 max-w-2xl mx-auto text-center text-sm sm:text-base">
              We help poultry farmers use technology to improve productivity,
              reduce losses, and manage farms more efficiently.
            </p>
          </div>

          {/* Bottom half: solid background + service cards */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {/* Service 1 */}
              <div className="bg-green-100 rounded-2xl sm:rounded-3xl rounded-br-none p-5 sm:p-6 md:p-8 shadow-md border-b-4 border-green-600 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-200 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-300 transition-colors duration-300">
                  <Thermometer className="text-green-600" size={22} sm:size={26} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-green-700 transition-colors duration-300">
                  Smart Poultry Monitoring
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  IoT sensors track temperature, humidity, air quality, and
                  lighting conditions in real-time to maintain a healthy poultry
                  environment.
                </p>

                <button className="flex items-center text-green-700 font-semibold gap-2 hover:gap-3 transition-all text-sm sm:text-base group-hover:text-green-800">
                  Read More ➜
                </button>
              </div>

              {/* Service 2 */}
              <div className="bg-green-100 rounded-2xl rounded-br-none p-5 sm:p-6 md:p-8 shadow-md border-b-4 border-green-600 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-200 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-300 transition-colors duration-300">
                  <AlertCircle className="text-green-600" size={22} sm:size={26} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-green-700 transition-colors duration-300">
                  Dashboard & Real-Time Alerts
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Farmers view live farm data, growth trends, and receive
                  instant alerts for overheating, ventilation issues, or sudden
                  environmental changes.
                </p>

                <button className="flex items-center text-green-700 font-semibold gap-2 hover:gap-3 transition-all text-sm sm:text-base group-hover:text-green-800">
                  Read More ➜
                </button>
              </div>

              {/* Service 3 */}
              <div className="bg-green-100 rounded-2xl rounded-br-none p-5 sm:p-6 md:p-8 shadow-md border-b-4 border-green-600 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-200 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-300 transition-colors duration-300">
                  <Cpu className="text-green-600" size={22} sm:size={26} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-green-700 transition-colors duration-300">
                  Farm Automation Support
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Integration of smart ventilation, lighting control, and
                  automated feeding systems to reduce manual work and improve
                  farm efficiency.
                </p>

                <button className="flex items-center text-green-700 font-semibold gap-2 hover:gap-3 transition-all text-sm sm:text-base group-hover:text-green-800">
                  Read More ➜
                </button>
              </div>

              {/* Service 4 */}
              <div className="bg-green-100 rounded-2xl rounded-br-none p-5 sm:p-6 md:p-8 shadow-md border-b-4 border-green-600 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-200 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-300 transition-colors duration-300">
                  <Wrench className="text-green-600" size={22} sm:size={26} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-green-700 transition-colors duration-300">
                  Installation & Technical Support
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  We handle device installation, system setup, farmer training,
                  and ongoing technical support to keep your farm running
                  smoothly.
                </p>

                <button className="flex items-center text-green-700 font-semibold gap-2 hover:gap-3 transition-all text-sm sm:text-base group-hover:text-green-800">
                  Read More ➜
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" data-animate className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-700 ${visibleSections['videos'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
            <p className="text-xs sm:text-sm font-semibold text-green-600 uppercase tracking-wide">
              Smart Farm in Action
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              We Help You Run
              <br />A Smarter Poultry Farm
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              See how Kiota Poultry turns real-time data into better decisions,
              healthier birds, and more profitable farms.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "Experience in smart poultry management",
                "Real-time monitoring that grows with your farm",
                "Solutions tailored to your farm's needs",
                "Turning farm data into simple, clear insights",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Check
                    className="text-green-600 mt-0.5 flex-shrink-0"
                    size={16} sm:size={20}
                  />
                  <p className="text-gray-700 font-medium text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-200 text-sm sm:text-base">
              Watch Demo Video
              <Play className="ml-2" size={16} sm:size={18} />
            </button>
          </div>

          {/* Right: Embedded demo video */}
          <div className="relative rounded-2xl sm:rounded-3xl rounded-br-none overflow-hidden shadow-2xl bg-black order-1 md:order-2 group">
            <video
              className="w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
              src="/try.mp4"
              controls
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Benefits / Why Choose Us Section */}
      <section id="benefits" data-animate className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-100 transition-all duration-700 ${visibleSections['benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-white/80 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-green-600 mb-3 sm:mb-4">
              Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-2 sm:mb-3">
              Why Farmers Trust Kiota Poultry
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
              A complete smart-farming partner focused on healthier birds, fewer
              losses, and simple, clear data every farmer can rely on.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-center">
            {/* Left column of benefits */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  title: "Reduce bird mortality",
                  description:
                    "Keep birds in the ideal environment with smart alerts before conditions become dangerous.",
                },
                {
                  title: "Improve feed efficiency",
                  description:
                    "Use data to optimize feeding schedules and reduce waste on every flock.",
                },
                {
                  title: "Early disease risk detection",
                  description:
                    "Spot unusual changes in temperature and behavior before they become outbreaks.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 py-3 sm:py-4 border-b border-green-100 last:border-b-0"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                    <Check className="text-green-600" size={16} sm:size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center circular image */}
            <div className="flex justify-center my-6 sm:my-8 lg:my-0 order-first lg:order-none">
              <div className="relative">
                {/* Bigger Circle */}
                <div
                  className="w-[200px] h-[200px]
                    sm:w-[280px] sm:h-[280px]
                    md:w-[320px] md:h-[320px]
                    lg:w-[350px] lg:h-[350px]
                    rounded-full overflow-hidden 
                    shadow-2xl border-4 border-white hover:scale-105 hover:shadow-3xl transition-all duration-300"
                >
                  <img
                    src="/12 1.svg"
                    alt="Healthy poultry farm using Kiota Poultry"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full ring-4 sm:ring-8 ring-green-100 pointer-events-none" />
              </div>
            </div>

            {/* Right column of benefits */}
            <div className="space-y-3 sm:space-y-4">
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
                  className="flex items-start gap-3 sm:gap-4 py-3 sm:py-4 border-b border-green-100 last:border-b-0"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                    <Check className="text-green-600" size={16} sm:size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
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
      <section id="faq" data-animate className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-700 ${visibleSections['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: FAQ list */}
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                question: "How do I get started with Kiota Poultry?",
                answer:
                  "Book a free consultation, and we'll assess your farm size, needs, and recommend the right smart monitoring setup.",
              },
              {
                question: "Do I need stable internet on my farm?",
                answer:
                  "Yes, you'll need an internet connection, but our system is optimized to work reliably even in rural areas with limited connectivity.",
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
                  className={`rounded-xl sm:rounded-2xl border flex flex-col overflow-hidden ${
                    isActive
                      ? "bg-green-50 border-green-500 shadow-md"
                      : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full text-left px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-wide mb-1">
                        {`0${index + 1}.`}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">
                        {faq.question}
                      </p>
                    </div>
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-base sm:text-lg font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {isActive ? "−" : "+"}
                    </span>
                  </button>
                  {isActive && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-gray-700 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: FAQ intro + social proof */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-xs sm:text-sm font-semibold text-green-600 uppercase tracking-wide">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Do you have a question?
              <br />
              Find answers here.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              If you're wondering how Kiota Poultry fits into your farm, you're
              not alone. These are the questions farmers ask us most often
              before they get started with smart monitoring.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex -space-x-2 sm:-space-x-3">
                  <img
                    src="/09.jpg"
                    alt="Happy farmer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/10.jpg"
                    alt="Farmer at poultry farm"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/11.jpg"
                    alt="Poultry farm"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  />
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600 text-white text-[10px] sm:text-xs font-semibold flex items-center justify-center border-2 border-white">
                    +4
                  </div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900">
                    5 Farmers
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    Using Kiota Poultry to monitor their flocks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section id="cta" data-animate className={`relative overflow-hidden transition-all duration-700 ${visibleSections['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* BACKGROUND LAYERS */}
        <div className="absolute inset-0 flex flex-col">
          {/* TOP 50% IMAGE on mobile, 75% on desktop */}
          <div className="h-[50%] sm:h-[60%] md:h-[70%] lg:h-[75%] relative">
            <img
              src="/14.avif"
              alt="Farm background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* BOTTOM WHITE */}
          <div className="h-[50%] sm:h-[40%] md:h-[30%] lg:h-[25%] bg-white"></div>
        </div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 grid lg:grid-cols-2 items-center gap-8 md:gap-12">
          {/* LEFT TEXT */}
          <div className="z-10 lg:-mt-32 order-2 lg:order-1">
            <p className="text-xs sm:text-sm font-semibold text-green-600 lg:text-green-200 tracking-wide mb-2 sm:mb-3">
              Need an Expert
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black lg:text-white mb-4 sm:mb-6 leading-tight">
              Ready to Upgrade Your Poultry Farm?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 lg:text-white lg:opacity-90 mb-6 sm:mb-8 max-w-xl">
              Let Kiota Poultry help you turn your farm into a smart, efficient,
              and profitable operation using modern farm technology.
            </p>

            <Link
              to="/contact"
              state={{ openForm: "general" }}
              className="inline-block text-white bg-green-600 hover:bg-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* RIGHT IMAGE (sits partly over white area) */}
          <div className="relative flex justify-center lg:justify-end z-10 order-1 lg:order-2">
            <img
              src="/15.jpg"
              alt="Farm specialists"
              className="w-full max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-md rounded-[20px] sm:rounded-[28px] shadow-2xl h-auto hover:scale-105 hover:shadow-3xl transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* News & Blog Section */}
      <section id="blog" data-animate className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-700 ${visibleSections['blog'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-green-600 uppercase tracking-wide">
                News & Blog
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                Latest insights from Kiota Poultry
              </h2>
              <p className="text-gray-600 mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base">
                Learn how smart monitoring, data and automation are changing
                poultry farming for small and large producers across Africa.
              </p>
            </div>
            
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
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
                title: "What's new in the Kiota Poultry dashboard this month",
                date: "Nov 2025",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
                    <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-green-50 text-green-700 font-semibold text-[10px] sm:text-xs">
                      {post.tag}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 flex-1">
                    Short, practical insights to help you protect your birds and
                    grow a more profitable farm.
                  </p>
                  <button className="mt-3 sm:mt-4 inline-flex items-center text-xs sm:text-sm font-semibold text-green-700 hover:text-green-800 group-hover:translate-x-1 transition-all duration-200">
                    Read article
                    <ArrowRight className="ml-1" size={12} sm:size={16} />
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