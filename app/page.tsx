"use client";
import React from "react";
import Card from "./components/Card";
import Spotlight from "./components/Spotlight";
import Toogle from "./components/Toogle";
import { useTheme } from "./constants/theme";
import { ConfigProvider } from "antd";

const Home: React.FC = () => {
  const { isDark } = useTheme();
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Switch: {
              colorPrimary: "black",
              colorPrimaryHover: "gray",
              handleBg: "skyblue",
            },
          },
        }}
      >
        <main
          className={`flex flex-col justify-center items-center w-full h-full relative ${
            isDark ? "text-white bg-[#292B32]" : "text-black bg-[#F7F7F8]"
          }`}
        >
          <div className="fixed top-0 right-0">
            <Toogle />
          </div>
          <section className=" flex justify-center items-center container">
            <div className=" px-5 py-12 mx-auto">
              <p className="text-3xl underline underline-offset-[14px] decoration-[#738FFF] font-bold">
                Sports
              </p>
              <div className="py-12">
                <Card />
              </div>
              <div className="w-full flex justify-center items-center pt-12">
                <button className={`bg-[#2C9CF0] p-3 text-white`}>
                  See More
                </button>
              </div>
            </div>
          </section>

          <div className="py-12 w-full flex justify-center ">
            <section
              className={`py-16 flex justify-center items-center container ${
                isDark
                  ? "bg-gradient-to-b from-[#18282A] to-[#221B2C]"
                  : "bg-[#E2E5EB]"
              } py-8`}
            >
              <Spotlight />
            </section>
          </div>
        </main>
      </ConfigProvider>
    </>
  );
};

export default Home;
