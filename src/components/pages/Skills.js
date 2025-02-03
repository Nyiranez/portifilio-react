import React from "react";
import Card from "./cardSkills";
import { FaFigma } from "react-icons/fa6";
import { GrHtml5 } from "react-icons/gr";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { RiFlutterFill } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "./context";


export const Skills = () => {
 const {mode}= useContext(AppContext)
  return (
    <div
      className={`h - auto py-16 bg-gradient-to-r ${
        mode
          ? "bg-gradient-to-r from-[#0F0715] to-[#281744]"
          : "bg-gradient-to-r from-yellow-600 to-pink-600"
      } flex flex-col items-center`}
    >
      <div>
        {" "}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-white bg-clip-text text-transparent w-full">
          My Skills
        </h1>
      </div>
      <div>
        {" "}
        <p className="text-white mt-12">
          We put your ideas and thus your wishes in the form of a unique web
          project that
        </p>
      </div>
      <div>
        {" "}
        <p className="text-white">inspires you and you customers.</p>
      </div>
      <div className=" flex flex-row space-x-4  mt-8">
        <div>
          <Card icon={<FaFigma />} text="85%" title="Figma" />
        </div>
        <div>
          <Card icon={<GrHtml5 />} text="98%" title="html" />
        </div>
        <div>
          <Card icon={<FaCss3 />} text="95%" title="css" />
        </div>
        <div>
          <Card icon={<SiTailwindcss />} text="97%" title="Tailwind" />
        </div>
        <div>
          <Card icon={<IoLogoJavascript />} text="90%" title="Javascript" />
        </div>
        <div>
          <Card icon={<GrReactjs />} text="96%" title="React" />
        </div>
        <div>
          <Card icon={<RiFlutterFill />} text="80%" title="Flutter" />
        </div>
      </div>
    </div>
  );
};
