import React from 'react'
import coffe from "../../assets/landing/coffe.jfif"

export default function AboutUs() {
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Image with Shape */}
          <div className="w-full md:w-1/2 relative">
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-600 rounded-[60%] -rotate-12 z-0"></div>
            <div className="absolute bottom-0 left-20 w-40 h-40 bg-green-300 rounded-full opacity-60 z-0"></div>

            {/* Image with clip shape */}
            <img
              src={coffe}
              alt="About Us"
              className="relative z-10 w-full max-w-sm mx-auto rounded-[45%_55%_60%_40%/55%_45%_55%_45%] shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Crafted with Passion Since 2018</h2>
            <p className="text-gray-600 leading-relaxed">
              JK Cafe was born from a simple vision: to create the perfect coffee experience that combines
              traditional brewing methods with modern innovation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we source our beans directly from sustainable farms around the world, ensuring every cup
              tells a story of quality, ethics, and exceptional taste.
            </p>

            {/* Stats */}
            <div className="flex space-x-12 mt-6">
              <div>
                <p className="text-3xl font-bold text-gray-900">50K+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">25+</p>
                <p className="text-sm text-gray-500">Coffee Varieties</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
