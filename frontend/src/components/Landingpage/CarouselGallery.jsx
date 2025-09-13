import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import img1 from "../../assets/gallery/Desserts.png";
import img2 from "../../assets/gallery/parties.png";
import img3 from "../../assets/gallery/Pasta.png";
import img4 from "../../assets/gallery/Pizza.png";
import img5 from "../../assets/gallery/Shake.png";
import img6 from "../../assets/gallery/Smoothies.png";
import img7 from "../../assets/gallery/Snaks.png";

const CarouselGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className="h-screen bg-gray-50 flex flex-col justify-between items-center px-6 py-10">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Gallery
        </h2>
        <div className="w-24 h-1 bg-gray-800 mx-auto mt-2 mb-4"></div>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Step inside our world of coffee craftsmanship and discover the
          atmosphere that makes{" "}
          <span className="font-semibold text-gray-900">JK Cafe</span> special.
        </p>
      </div>

      {/* Carousel */}
      <div className="flex-1 flex items-center w-full max-w-7xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}   // 2 left + 1 center + 2 right
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full"
        >

          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-[460px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CarouselGallery;
