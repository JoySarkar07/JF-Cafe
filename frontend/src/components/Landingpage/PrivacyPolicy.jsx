import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>
        <Navbar />
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-20 px-4">
      <motion.div
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-10 md:p-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mt-2 font-medium">
            Last Updated: January 12, 2025
          </p>
        </div>

        {/* Sections */}
        <motion.section
          className="mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            At JK Cafe, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you engage with our services.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Using Our Services
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            By accessing our website or services, you consent to the terms of this Privacy Policy. We may collect personal details such as your name, email address, or contact number to enhance your experience and provide tailored services.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Data Protection
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            We employ industry-standard security measures to protect your personal information. Your data is never sold or shared with third parties, except as required by applicable laws or with your explicit permission.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Third-Party Services
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            Our website may include links to third-party websites. Please be aware that we are not responsible for the privacy practices or content of these external sites.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
            Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
            <a
              href="mailto:hello@jkcafe.com"
              className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
            >
              hello@jkcafe.com
            </a>.
          </p>
        </motion.section>
      </motion.div>
    </div>
    <Footer />
    </div>
  );
};

export default PrivacyPolicy;