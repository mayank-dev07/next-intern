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
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Spotlight: React.FC = () => {
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
            <div className="absolute top-[450px] xl:left-[120px] lg:left-[70px] md:left-[50px] sm:left-[60px] left-[14px] z-30 border-[1px] p-1 border-[#2C9CF0] text-[#2C9CF0]">
              <button onClick={handlePrevious} className="text-2xl lg:text-3xl">
                <LeftOutlined />
              </button>
            </div>
            <div className="absolute top-[450px] xl:right-[120px] lg:right-[70px] md:right-[50px] sm:right-[60px] right-[14px] z-30 border-[1px] p-1 border-[#2C9CF0] text-[#2C9CF0]">
              <button onClick={handleNext} className="text-2xl lg:text-3xl">
                <RightOutlined />
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
                1040: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              loop={true}
              className="mySwiper md:!w-8/12 sm:!w-6/12 !w-9/12 !container"
            >
              {collection_detalis.map((item, index) => (
                <SwiperSlide className=" relative h-[624px] px-4" key={index}>
                  <div
                    className={`lg:p-2 border-[1px] shadow-md mx-0 xl:mx-1 ${
                      isDark
                        ? "border-[#3B3E47] bg-[#3B3E47]"
                        : "border-[#F8F8F8] bg-[#F8F8F8]"
                    }`}
                  >
                    <Image
                      className="h-96 w-full transform md:object-cover p-2 lg:p-1"
                      src={item.image}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                    <div
                      className={`absolute top-[400px] lg:top-[408px] left-[12px] xl:left-[16px] h-6 w-4 ${
                        isDark ? "bg-[#1d1c29]" : "bg-[#E2E5EB]"
                      } 
             rounded-r-full`}
                    ></div>
                    <div
                      className={`absolute top-[400px] lg:top-[408px] right-[12px] xl:right-[16px] h-6 w-4 ${
                        isDark ? "bg-[#1d1c29]" : "bg-[#E2E5EB]"
                      } 
             rounded-l-full`}
                    ></div>
                    <div className="flex justify-center items-center">
                      <hr
                        className={`mb-4 mt-6 w-10/12 border-t-2  border-dashed ${
                          isDark ? "border-[#585D67]" : "border-[#D3D5D8]"
                        }`}
                      />
                    </div>
                    <div className="pb-3 flex flex-col px-3 justify-center items-center">
                      <div className=" flex flex-col justify-center items-center pb-4">
                        <span className="capitalize text-base">
                          {item.name}
                        </span>
                        <div
                          className={`flex divide-x justify-center items-center py-2 w-full ${
                            isDark ? "dvide-[#84868C]" : "divide-[#A0A0A0]"
                          }`}
                        >
                          <span className="text-sm px-[5px]">{item.month}</span>
                          <span className="text-sm px-[5px]">{item.day}</span>
                          <span className="text-sm px-[5px]">{item.time}</span>
                        </div>
                        <span className="capitalize text-base text-center min-h-10">
                          {item.Address}
                        </span>
                      </div>
                      <button className="w-full h-10 bg-black text-white text-sm capitalize ">
                        {item.text}
                      </button>
                    </div>
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
