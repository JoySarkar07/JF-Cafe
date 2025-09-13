import React, { useEffect, useRef, memo } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTargetRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/" && scrollTargetRef.current) {
      setTimeout(() => {
        scroller.scrollTo(scrollTargetRef.current, {
          smooth: true,
          duration: 150,
          offset: -80,
        });
        scrollTargetRef.current = null;
      }, 0);
    }
  }, [location]);

  const handleScroll = (section) => {
    console.time(`Navigate to ${section}`);
    if (location.pathname !== "/") {
      scrollTargetRef.current = section;
      navigate("/");
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 150,
        offset: -80,
      });
    }
    console.timeEnd(`Navigate to ${section}`);
  };

  return (
    <footer className="bg-gray-800 text-gray-200 py-8 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">JK Cafe</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Delivering exceptional experiences with a focus on quality and privacy.
          </p>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-base font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                About Us
              </button>
            </li>
            <li>
              <RouterLink
                to="/privacy-policy"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/terms"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </RouterLink>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-base font-semibold text-white mb-3">Get in Touch</h3>
          <p className="text-gray-400 text-sm">
            Email:{" "}
            <a
              href="mailto:hello@jkcafe.com"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              hello@jkcafe.com
            </a>
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Phone: <span className="hover:text-blue-400 transition-colors duration-200">+91 894563217</span>
          </p>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-base font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://twitter.com/jkcafe"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://facebook.com/jkcafe"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com/jkcafe"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com/company/jkcafe"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} JK Cafe. All rights reserved.
      </div>
    </footer>
  );
}

export default memo(Footer);