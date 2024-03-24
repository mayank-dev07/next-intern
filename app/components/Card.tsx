import React from "react";
import Image from "next/image";
import { sport_detalis } from "../constants/cards";
import { useTheme } from "../constants/theme";

const Card = () => {
  const { isDark } = useTheme();
  return (
    <div className="flex flex-wrap justify-center items-center">
      {sport_detalis.map((item) =>
        item.type == "ad" ? (
          <div
            className="xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-[305.47px] p-2"
            key={item.name}
          >
            <div
              className={`p-3 shadow-xl min-h-[523px] relative ${
                isDark ? "bg-[#3B3E47]" : "bg-white"
              }`}
            >
              <Image
                className="h-[218px]  w-full transform object-fill "
                src={item.image}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <span className="absolute bg-black text-white z-50 text-sm top-0 right-0 m-4 px-2 font-bold">
                Ad
              </span>
              <div className="px-2">
                <h2 className="text-lg mb-4 mt-4 text-center font-bold text-xl">
                  Advertisement&nbsp;Title
                </h2>
                <p
                  className={`text-sm ${
                    isDark ? "text-[#D4D5D5]" : "text-[#7D828B]"
                  }`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  enim, ab incidunt iusto temporibus, ad aperiam sint nam
                  suscipit quasi totam. Officiis iusto esse, error harum dolores
                  suscipit
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 p-2 "
            key={item.name}
          >
            <div
              className={`p-3 shadow-xl min-h-[523px] relative ${
                isDark ? "bg-[#3B3E47]" : "bg-white"
              }`}
            >
              <Image
                className="h-[385px] w-full transform object-fill"
                src={item.image}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <h2 className="text-lg  mb-4 mt-4 ">{`${item.name}`}</h2>
              <div
                className={`w-full h-[54px] flex justify-between px-2 py-2 ${
                  isDark ? "bg-[#292B32]" : "bg-[#F7F7F8]"
                }`}
                // style={{ backgroundColor: "" }}
              >
                <div className="flex flex-col w-1/2">
                  <p
                    className={`text-sm ${
                      isDark ? "text-[#C8C8C9]" : "text-[#7B8089]"
                    }`}
                  >
                    Total events
                  </p>
                  <p>48 Events</p>
                </div>
                <div className="flex flex-col w-1/2">
                  <p
                    className={`text-sm ${
                      isDark ? "text-[#C8C8C9]" : "text-[#7B8089]"
                    }`}
                  >
                    Sports
                  </p>
                  <p>Baseball</p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
