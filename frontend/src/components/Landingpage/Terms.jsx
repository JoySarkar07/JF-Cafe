import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Terms = () => {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" },
    },
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex justify-center items-start py-20 px-4">
        <motion.div
          className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-10 md:p-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-gray-500 text-sm mt-2 font-medium">
              Last Updated: January 12, 2025
            </p>
          </div>

          <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Welcome to JK Cafe. These Terms and Conditions ("Terms") govern your use of our website, services, and related offerings. By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our services.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
              Use of Services
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our website in any way that violates applicable laws or regulations.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
              User Conduct
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              You are responsible for your conduct while using our services. Prohibited actions include, but are not limited to:
              <ul className="list-disc list-inside mt-2">
                <li>Posting harmful or unlawful content.</li>
                <li>Attempting to gain unauthorized access to our systems.</li>
                <li>Interfering with the functionality of our website.</li>
              </ul>
            </p>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
              Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              All content on our website, including text, images, and logos, is the property of JK Cafe or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without prior written consent.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              JK Cafe is not liable for any damages arising from your use of our services, including but not limited to direct, indirect, incidental, or consequential damages, to the fullest extent permitted by law.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
              Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services constitutes acceptance of the revised Terms.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants} initial="hidden" animate="visible">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:hello@jkcafe.com" className="text-blue-600 hover:underline">
                hello@jkcafe.com
              </a>{" "}
              or call us at +91 894563217.
            </p>
          </motion.section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(Terms);