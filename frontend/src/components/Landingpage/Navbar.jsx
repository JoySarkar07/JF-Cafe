import React, { useEffect, useRef, memo } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTargetRef = useRef(null);

  // Handle scrolling after navigation to landing page
  useEffect(() => {
    if (location.pathname === "/" && scrollTargetRef.current) {
      setTimeout(() => {
        scroller.scrollTo(scrollTargetRef.current, {
          smooth: true,
          duration: 150, // Reduced for faster scrolling
          offset: -80, // Adjust for fixed navbar height
        });
        scrollTargetRef.current = null; // Clear ref after scrolling
      }, 0); // Minimal delay to ensure DOM is ready
    }
  }, [location]);

  const handleScroll = (section) => {
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
  };

  return (
    <nav className="bg-gradient-to-r from-black/60 to-transparent absolute top-0 left-0 w-full z-50 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#dfb183]/70 to-[#e2d1c3]/80" />
      <div className="absolute inset-0 bg-gray-200 opacity-60" />
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <RouterLink to="/" className="text-2xl font-bold italic text-gray-900">
              JK Cafe
            </RouterLink>
          </div>
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <button
              onClick={() => handleScroll("home")}
              className="hover:text-black cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-black cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleScroll("menu")}
              className="hover:text-black cursor-pointer"
            >
              Menu
            </button>
            <button
              onClick={() => handleScroll("gallery")}
              className="hover:text-black cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="hover:text-black cursor-pointer"
            >
              Contact
            </button>
          </div>
          <div className="flex space-x-4">
            <RouterLink
              to="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black"
            >
              Login
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);