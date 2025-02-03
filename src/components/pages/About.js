import { GoArrowDown } from "react-icons/go";
import React from "react";
import { useContext } from "react";
import { AppContext } from "./context";

export const About = () => {
  const { mode } = useContext(AppContext);
  return (
    <div
      className={`${
        mode ? "bg-black" : "bg-gradient-to-r from-yellow-600 to-pink-600"
      } flex md:items-center flex-col`}
    >
      <h1
        className={`text-4xl font-bold ${
          mode
            ? "bg-gradient-to-r from-purple-700 to-white bg-clip-text pt-44 text-transparent"
            : "text-purple-700 mt-44"
        }`}
      >
        Know Me More
      </h1>
      <div className="flex md:flex-row flex-col  md:justify-around md:items-center px-44 space-x-4 h-screen">
        <div className=" w-44 h-44 z-9 transform transition-transform duration-500 translate-x-0 hover:translate-x-20">
          <div className="bg-[#140C1C] rounded-full border-l border-white hover:bg-black w-dull h-full flex flex-col justify-center items-center text-8xl text-yellow-900">
            6
          </div>
          <p className="text-white mt-4 bg-[#140C1C] flex flex-col justify-center items-center rounded-3xl py-2">
            Years of Experience
          </p>
        </div>
        <div className="  py-8 px-8 w-1/2 h-fit bg-[#140C1C] rounded-3xl space-y-8">
          <h1 className="text-white">
            I am a passionate software developer based in Kigali, Rwanda,{" "}
          </h1>
          <p className="text-white">
            with experience in the industry since 2019. Over the years, I’ve
            honed my skills in building high-quality, well-designed websites
            that not only look great but also perform seamlessly.
          </p>
          <p className="text-white">
            I take pride in my work ethic, always striving for excellence. I am
            dedicated, detail-oriented, and committed to delivering the best
            possible results.
          </p>
          <p className="text-white">
            Whether it's collaborating with a team or working independently, I
            approach every project with enthusiasm and a strong sense of
            responsibility.
          </p>
          <div className=" px-8 py-4 rounded-full text-purple-700 border border-purple-700 hover:bg-purple-600 hover:text-white mt-4">
            {" "}
            <a href="https://docs.google.com/document/d/16h6EZmAXpRv3GitkkTjhz7XNI9rqrMDCxDoUQV7eAtM/edit?tab=t.0">
              <div className="flex flex-row justify-center items-center">
                {" "}
                <p>Download CV</p>
                <span>
                  <GoArrowDown />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
