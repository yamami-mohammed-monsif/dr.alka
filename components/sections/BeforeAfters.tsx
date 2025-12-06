"use client";

import Section from "../UI/Section";
import { BeforeAfterData } from "@/constants";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import CTABtn from "../UI/CTABtn";
import useOnScreen from "@/hooks/useOnScreen";
import Image from "next/image";
import { useRef, useState } from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const BeforeAfters = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <Section ref={sectionRef}>
      <div className="flex flex-col items-center mb-10 md:mb-12">
        <h2
          className={`max-w-xl mb-8 md:mb-10  ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          See What We Can Do
        </h2>
        <p
          className={`section-description text-center ${
            isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"
          }`}
        >
          These are real patients who started just like you with a free smile
          makeover consultation.
        </p>
      </div>
      <div>
        {/* Swiper Slider */}
        <div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={setSwiperInstance} // Capture swiper instance
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              type: "bullets",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="pb-8"
          >
            {BeforeAfterData.map((img) => (
              <SwiperSlide key={img.id}>
                <div className="relative w-[300px] mx-auto aspect-3/4 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 300px, 280px"
                    priority={img.id === 1}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-between mt-6 md:mt-8">
            {/* Pagination Bullets */}
            <div ref={paginationRef} className="beforeafters-pagination" />

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className="beforeafters-swiper-button-prev flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 border border-text bg-white rounded-full cursor-pointer hover:scale-105 transition-transform duration-100 ease-in-out"
                aria-label="Previous before/after"
              >
                <IoMdArrowBack className="text-text" size={20} />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="beforeafters-swiper-button-next flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 border border-text bg-white rounded-full cursor-pointer hover:scale-105 transition-transform duration-100 ease-in-out"
                aria-label="Next before/after"
              >
                <IoMdArrowForward className="text-text" size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <CTABtn className="mt-6 md:mt-8 animate-fade-in-up animate-delay-200">
            Book Your Free Smile Makeover Consultation
          </CTABtn>
        </div>
      </div>
    </Section>
  );
};

export default BeforeAfters;
