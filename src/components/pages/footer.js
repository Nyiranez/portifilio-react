import React from "react";
import image1 from "../images/heart-icon-512x441-zviestnn.png";

export const Footer = () => {
  return (
    <div>
      <div className="w-full h-40 bg-[#140C1C] flex md:flex-col md:justify-center">
        <div className="flex flex-col items-center  ">
          <p className="text-white">
            Copyright ©{new Date().getFullYear()} All rights reserved |
          </p>
          <p className="text-white">This Portifolio is done with</p>
          <img className="w-8" src={image1} alt=""></img>
          <p className="text-red-400">By Louise</p>
        </div>
      </div>
    </div>
  );
};
