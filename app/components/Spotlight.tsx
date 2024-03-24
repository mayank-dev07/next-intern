"use client";
import React, { useCallback, useState } from "react";
import { collection_detalis } from "../constants/cards";
import Image from "next/image";
import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { useTheme } from "../constants/theme";

const Spotlight = () => {
  const { isDark } = useTheme();
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  return (
    <>
      <div className="w-full flex flex-col justify-evenly items-center relative">
        <p className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold">
          Collection Spotlight
        </p>

        <div className="w-full container">
          <div className="flex flex-col justify-center items-center xl:mx-12 ">
            <p className="text-center text-sm py-12 w-8/12 ">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </p>
            <div className="absolute top-[450px] xl:left-[90px] lg:left-[70px] md:left-[50px] sm:left-[30px] left-[20px] z-30 border-[1px] p-1 border-[#2C9CF0] text-[#2C9CF0]">
              <button onClick={handlePrevious} className="text-5xl">
                &lt;
              </button>
            </div>
            <div className="absolute top-[450px] xl:right-[90px] lg:right-[70px] md:right-[50px] sm:right-[30px] right-[20px] z-30 border-[1px] p-1 border-[#2C9CF0] text-[#2C9CF0]">
              <button onClick={handleNext} className="text-5xl">
                &gt;
              </button>
            </div>

            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1}
              spaceBetween={10}
              modules={[FreeMode, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                //    /
                1040: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              loop={true}
              className="mySwiper !w-8/12 !container"
            >
              {collection_detalis.map((item) => (
                <SwiperSlide className=" relative h-[624px]" key={item.name}>
                  <div
                    className={`p-4 border-[1px] shadow-md mx-3 ${
                      isDark
                        ? "border-[#3B3E47] bg-[#3B3E47]"
                        : "border-[#F8F8F8] bg-[#F8F8F8]"
                    }`}
                  >
                    <Image
                      className="h-96 w-full transform md:object-cover"
                      src={item.image}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                    <div
                      className={`absolute top-[415px] left-[10px] h-6 w-4 ${
                        isDark ? "bg-[#1d1c29]" : "bg-[#E2E5EB]"
                      } 
             rounded-r-full`}
                    ></div>
                    <div
                      className={`absolute top-[415px] right-[10px] h-6 w-4 ${
                        isDark ? "bg-[#1d1c29]" : "bg-[#E2E5EB]"
                      } 
             rounded-l-full`}
                    ></div>
                    <div className="flex justify-center items-center">
                      <div className=" mb-4 mt-6 w-11/12 outline-1 outline-dashed "></div>
                    </div>

                    <div className=" flex flex-col justify-center items-center pb-4">
                      <p className="capitalize">{item.name}</p>
                      <div
                        className={`flex divide-x md:w-8/12 justify-center items-center py-2 ${
                          isDark ? "dvide-[#84868C]" : "divide-[#A0A0A0]"
                        }`}
                      >
                        <span className="text-sm px-2">Oct&nbsp;15</span>
                        <span className="text-sm px-2">Sun</span>
                        <span className="text-sm px-2">4:30&nbsp;PM</span>
                      </div>
                      <span className="capitalize text-sm text-center">
                        las vegas ballpark, las vegas, Nevada
                      </span>
                    </div>
                    <button className="w-full h-10 bg-black text-white text-sm capitalize ">
                      {item.text}
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spotlight;
