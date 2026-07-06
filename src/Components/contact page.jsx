import React from "react";
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Chat Card */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Chat with us</h3>
              <p className="text-gray-600 mb-4">
                Our friendly team is here to help.
              </p>
              <a
                href="https://wa.me/23274314847"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:underline flex items-center"
              >
                <span className="mr-1">+232 74 314847</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email us</h3>
              <p className="text-gray-600 mb-4">
                We'll respond as soon as possible.
              </p>
              <a
                href="mailto:contact@kihiupurity29@gmail.com"
                className="text-green-600 font-semibold hover:underline flex items-center"
              >
                <span className="mr-1">Contact Us</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Visit Card */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visit us</h3>
              <p className="text-gray-600 mb-4">
                Come say hello at our office HQ.
              </p>
              <a
                href="#"
                className="text-green-600 font-semibold hover:underline flex items-center"
              >
                <span className="mr-1">View on map</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Call Card */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Call us</h3>
              <p className="text-gray-600 mb-4">
                Mon-Fri from 8am to 5pm.
              </p>
              <a
                href="tel:+23274314847"
                className="text-green-600 font-semibold hover:underline flex items-center"
              >
                <span className="mr-1">+232 74 314847</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Agricultural Revolution Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url("/13.avif")' }}
      >
        <div className="absolute inset-0 bg-green-900/60"></div>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Join the Agricultural Revolution
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your farming with smart technology and data-driven insights
          </p>
          <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Join Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default Contact;
