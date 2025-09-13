import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiClock, FiPhone, FiMail } from "react-icons/fi";

const ContactSection = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Contact Section */}
      <div className="py-16 px-6 md:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Visit us today or get in touch to learn more about our coffee, events,
            or catering services
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Visit Our Cafe</h3>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-start space-x-3">
                <FiMapPin className="mt-1 text-yellow-500 w-6 h-6" />
                <div>
                  <p className="font-medium text-white">Address</p>
                  <p>123 Coffee Street</p>
                  <p>Downtown District</p>
                  <p>City, State 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FiClock className="mt-1 text-yellow-500 w-6 h-6" />
                <div>
                  <p className="font-medium text-white">Hours</p>
                  <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                  <p>Saturday: 8:00 AM - 9:00 PM</p>
                  <p>Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FiPhone className="mt-1 text-yellow-500 w-6 h-6" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p>+91 7894561239</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FiMail className="mt-1 text-yellow-500 w-6 h-6" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p>hello@jkcafe.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Send Us A Message</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Message *</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your inquiry, event, or feedback..."
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="w-full h-80">
            <iframe
              title="JK Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.896852014946!2d-73.98715568459395!3d40.74881707932708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18f9f5fb%3A0xc80b8f06e177fe62!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1694095173060!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-700 mt-12 py-6 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>© 2024 JK Cafe. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactSection;
