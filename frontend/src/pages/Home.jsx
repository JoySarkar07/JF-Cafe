import React from "react";
import Navbar from "../components/Landingpage/Navbar"; // Adjust path
import Footer from "../components/Landingpage/Footer"; // Adjust path
// import { LazyLoadImage } from "react-lazy-load-image-component";
import AboutUs from "../components/Landingpage/AboutUs"; // Adjust path
import Menu from "../components/Landingpage/MenuSection"; // Adjust path
import Gallery from "../components/Landingpage/CarouselGallery"; // Adjust path
import Contact from "../components/Landingpage/ContactSection"; // Adjust path
import CoffeeLanding from "../components/Landingpage/CoffeeLanding";

export default function Home() {
  return (
    <div>
      <div>
      <Navbar />
        <section id="home" className="min-h-screen">
         <CoffeeLanding />
        </section>
        <section id="about" className="min-h-screen bg-white">
          <AboutUs />
        </section>
        <section id="menu" className="min-h-screen bg-gray-100">
          <Menu />
        </section>
        <section id="gallery" className="min-h-screen bg-white">
          <Gallery />
        </section>
        <section id="contact" className="min-h-screen bg-gray-100">
          <Contact />
        </section>
      </div>
    </div>
  );
}