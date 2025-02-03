// import React, { useState } from "react";

import profile from "../images/IMG_8265.HEIC";
import tag from "../images/tag.png";
// import { Text } from "./text";
import { MdOutlineLightMode } from "react-icons/md";

import { RiLinkedinFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { useContext } from "react";
import { AppContext } from "./context";
import { MdDarkMode } from "react-icons/md";
export const Home = () => {
  const { mode, setMode } = useContext(AppContext);
  // const [text, setText] = useState(false);
  // const closeText = () => {
  //   setText(false);
  // };
  return (
    <div
      className={`${
        mode
          ? "bg-gradient-to-r from-[#0F0715] to-[#281744]"
          : "bg-gradient-to-r from-white to-blue-400"
      }  h-screen md:pt-32 flex md:flex-row flex-col space-y-4 md:justify-between pb-16 t-24 pl-44 `}
    >
      <div className=" space-y-4 mt-16 ">
        <h2
          className={`md:text-2xl opacity:0  md:font-bold ${
            mode ? "md: text-white" : "md: text-black"
          }`}
        >
          I am Louise,
        </h2>
        <div>
          {" "}
          <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-700 to-white bg-clip-text text-transparent">
            Next-Level Front-End
          </h2>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-700 to-white bg-clip-text text-transparent">
            Developer.
          </h2>
        </div>

        <div>
          {" "}
          <p
            className={`md:text-2xl opacity:0  md:font-bold ${
              mode ? "md: text-white" : "md: text-black"
            }`}
          >
            I break down complex user experinece problems to
          </p>
          <p
            className={`md:text-2xl opacity:0  md:font-bold ${
              mode ? "md: text-white" : "md: text-black"
            }`}
          >
            create integritiy focussed solutions that connect
          </p>
          <p
            className={`md:text-2xl opacity:0  md:font-bold ${
              mode ? "md: text-white" : "md: text-black"
            }`}
          >
            big Number of people.
          </p>
        </div>

        {/* <button
          className=" bg-red-600 px-4 py-2 hover:bg-white rounded-md hover:border-2 hover: border-black"
          onClick={() => {
            setText(true);
          }}
        >
          Say Hello{" "}
        </button>

        {text && <Text onClose={closeText} />} */}
        <div className="flex flex-row items-center justify-center space-x-4 mb-16 ">
          <div className="flex flex-row space-x-4">
            <div className="rounded-full text-purple-700 border border-purple-700 h-10 w-10 flex flex-col justify-center items-center hover:bg-purple-600 hover:text-white">
              <a href="https://www.linkedin.com/in/nyiraneza-mlouise/">
                <RiLinkedinFill className="w-6 h-6" />
              </a>
            </div>
            <div className="rounded-full text-purple-700 border border-purple-700 h-10 w-10 flex flex-col justify-center items-center hover:bg-purple-600 hover:text-white">
              <RiFacebookFill className="w-6 h-6" />
            </div>
            <div className="rounded-full text-purple-700 border border-purple-700 h-10 w-10 flex flex-col justify-center items-center hover:bg-purple-600 hover:text-white">
              <LuInstagram className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black relative rounded-2xl flex flex-col justify-center items-center hover:border-2 hover:border-purple-600 border border-purple-900 opacity-75">
        <img
          src={profile}
          alt=""
          className="w-96 h-fit rounded-2xl transform transition-transform duration-500 translate-x-0 hover:translate-x-10"
        ></img>
        <div className="absolute top-0 right-40 w-full h-full rounded-2xl bg-slate-500 opacity-35">
          <img src={tag} alt="" className="w-16 h-16 rounded-2xl"></img>
          <p className="text-white text-xl flex flex-col ml-2">
            <span>w</span>
            <span>e</span>
            <span>l</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
            <span>!</span>
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col ${
          mode ? "justify-center items-center" : "justify-center items-center"
        }`}
      >
        {" "}
        <button
          className={`flex flex-col ${
            mode ? "justify-center items-center" : "justify-end items-end"
          } bg-gradient-to-r from-purple-700 to-purple-950 fixed mr-8 px-4 py-2 rounded-l-full cursor-pointer text-white h-fit`}
          onClick={() => setMode(!mode)}
        >
          {mode ? (
            <MdDarkMode className="text-black" />
          ) : (
            <MdOutlineLightMode />
          )}
        </button>
      </div>
    </div>
  );
};
