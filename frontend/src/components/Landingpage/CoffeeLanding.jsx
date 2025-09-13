import React from "react";
import { motion } from "framer-motion";
import backgroundImg from "../../assets/landing/background.jfif"
import coffe from "../../assets/landing/coffe.jfif"

export default function CoffeeLanding() {
    return (
        <section
            className="relative w-full h-[95vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: {backgroundImg} }}
        >


            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-11/12 max-w-6xl">

                {/* Left Text Section */}
                <div className="text-white max-w-lg space-y-6">
                    <h1 className="text-5xl font-bold leading-tight">
                        Premium <br />
                        <span className="font-light">Coffee Experience</span>
                    </h1>
                    <p className="text-lg text-gray-200">
                        Discover the perfect blend of artisan craftsmanship and modern elegance at JK Cafe
                    </p>

                    <div className="flex space-x-4">
                        <button className="px-6 py-3 bg-white text-black font-semibold rounded shadow hover:bg-gray-200">
                            Explore Menu
                        </button>
                        <button className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-black">
                            Our Story
                        </button>
                    </div>
                </div>

                {/* Right Image Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-10 md:mt-0 md:ml-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-sm"
                >
                    <img
                        src={coffe }
                        alt="Coffee"
                        className="rounded-lg w-full object-cover h-96"
                    />

                    <div className="mt-4 text-white">
                        <h3 className="text-xl font-bold">Signature Blend</h3>
                        <p className="text-sm text-gray-200">
                            Our carefully curated house blend, roasted to perfection
                            with notes of chocolate and vanilla
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
