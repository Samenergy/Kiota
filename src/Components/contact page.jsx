import React, { useState } from "react";
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  X,
} from "lucide-react";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formContext, setFormContext] = useState("general"); // "general" or "join"
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const openForm = (context) => {
    setFormContext(context);
    setShowForm(true);
    setSubmitted(false);
  };

  const closeForm = () => {
    setShowForm(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject =
      formContext === "join"
        ? "Join Now Inquiry - Kiota Poultry"
        : "Contact Inquiry - Kiota Poultry";

    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    // Opens the user's email client with a pre-filled message
    window.location.href = `mailto:kihiupurity29@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Have questions? We'd love to hear from you.
          </p>
          <button
            onClick={() => openForm("general")}
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Send us a message
            <ArrowRight className="ml-2" size={18} />
          </button>
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
                href="https://wa.me/254720762411"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:underline flex items-center"
              >
                <span className="mr-1">+254 720762411</span>
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
              <button
                onClick={() => openForm("general")}
                className="text-green-600 font-semibold hover:underline flex items-center"
              >
                <span className="mr-1">Contact Us</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Visit Card */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visit us</h3>
              <p className="text-gray-600 mb-4">
                Elysee Plaza, Kilimani Road
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Elysee+Plaza+Kilimani+Road+Nairobi"
                target="_blank"
                rel="noopener noreferrer"
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
                href="tel:+254746416361"
                className="text-green-600 font-semibold hover:underline flex items-center"
              >
                <span className="mr-1">+254 746416361</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="Kiota Poultry Office Location"
            src="https://www.google.com/maps?q=Elysee+Plaza,+Kilimani+Road,+Nairobi&output=embed"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
          <button
            onClick={() => openForm("join")}
            className="px-8 py-4 bg-white text-green-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Join Now
          </button>
        </div>
      </section>

      {/* Contact / Join Now Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative animate-fade-in">
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Close form"
            >
              <X size={22} />
            </button>

            {!submitted ? (
              <>
                <h3 className="text-2xl font-black text-gray-800 mb-1">
                  {formContext === "join" ? "Join Kiota Poultry" : "Send us a message"}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {formContext === "join"
                    ? "Tell us about your farm and we'll reach out to get you started."
                    : "Fill out the form and we'll get back to you shortly."}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder={
                        formContext === "join"
                          ? "Tell us about your farm size and needs..."
                          : "How can we help you?"
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {formContext === "join" ? "Submit Inquiry" : "Send Message"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-green-600" size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Almost done!
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Your email app should have opened with your message ready to
                  send. If it didn't, email us directly at{" "}
                  <a
                    href="mailto:kihiupurity29@gmail.com"
                    className="text-green-600 font-semibold hover:underline"
                  >
                    kihiupurity29@gmail.com
                  </a>
                  .
                </p>
                <button
                  onClick={closeForm}
                  className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;