import React, { useState, useEffect } from "react";
import Huza from "../images/huzaImage.png";
import edaz from "../images/edaz.jpeg";
import Amis from "../images/Amis.png";
import { useContext } from "react";
import { AppContext } from "./context";

export const Project = () => {
  const { mode } = useContext(AppContext);
  const [selection, setSelection] = useState("all");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const translateY = scrollPosition * 0.1;

  const handleChangeSelection = (selected) => {
    setSelection(selected);
  };

  const projects = [
    {
      id: "huza",
      image: Huza,
      description: "A solution of job.",
      link: "https://neza-huza.netlify.app/",
    },
    {
      id: "edaz",
      image: edaz,
      description: "Restaurant Management System.",
      link: "https://main--edaz-app.netlify.app/",
    },
    {
      id: "amis",
      image: Amis,
      description: "A digital Solution for Farmers.",
      link: "#",
      inProgress: true,
    },
  ];

  return (
    <div
      className={`${
        mode
          ? "bg-gradient-to-r from-[#0F0715] to-[#281744]"
          : "bg-white"
      } h-screen`}
    >
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-white bg-clip-text text-transparent">
          My Recent Works
        </h1>
        <p className="text-white">
          We put your ideas and thus your wishes in the form of a unique web
          project that
        </p>

        <p className="text-white">inspires you and your customers.</p>
        <div
          className="bg-black text-white space-x-12 px-6 py-6 rounded-xl transition-transform duration-100 ease-out"
          style={{
            transform: `translateX(-${translateY}px)`, // Move the element up based on scroll position
          }}
        >
          <button
            className={`${
              selection === "all" ? "bg-purple-700 rounded-full w-12 h-12" : ""
            } hover:bg-purple-700 hover:rounded-full w-12 h-12 `}
            onClick={() => handleChangeSelection("all")}
          >
            All
          </button>
          <button
            className={`${
              selection === "huza" ? "bg-purple-700 rounded-full w-12 h-12" : ""
            } hover:bg-purple-700 hover:rounded-full w-12 h-12 `}
            onClick={() => handleChangeSelection("huza")}
          >
            Huza
          </button>
          <button
            className={`${
              selection === "edaz" ? "bg-purple-700 rounded-full w-12 h-12" : ""
            } hover:bg-purple-700 hover:rounded-full w-12 h-12 `}
            onClick={() => handleChangeSelection("edaz")}
          >
            E-Daz
          </button>
          <button
            className={`${
              selection === "amis" ? "bg-purple-700 rounded-full w-12 h-12" : ""
            } hover:bg-purple-700 hover:rounded-full w-12 h-12 `}
            onClick={() => handleChangeSelection("amis")}
          >
            AMIS
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center space-x-8 items-center mt-8 bg-[#2A1454] w-fit px-4 py-4 rounded-md ">
          {selection === "all"
            ? projects.map((project) => (
                <div
                  key={project.id}
                  className="space-y-4 bg-[#140C1C] flex flex-col justify-center items-center px-2 py-2 rounded-3xl transform transition-transform duration-500 translate-x-0 hover:translate-y-10"
                >
                  <img
                    src={project.image}
                    alt={project.id}
                    className="h-80 w-80 rounded-2xl"
                  />
                  <p className="text-white">
                    {project.description}
                    <a
                      href={project.link}
                      className="text-blue-600 ml-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit the site ->
                    </a>
                  </p>
                </div>
              ))
            : projects
                .filter((project) => project.id === selection)
                .map((project) => (
                  <div
                    key={project.id}
                    className="space-y-4 bg-[#140C1C] flex flex-col justify-center items-center px-2 py-2 rounded-3xl transform transition-transform duration-500 translate-x-0 hover:translate-y-10"
                  >
                    <img
                      src={project.image}
                      alt={project.id}
                      className="h-80 w-80 rounded-2xl"
                    />
                    <p className="text-white">
                      {project.description}
                      <a
                        href={project.link}
                        className="text-blue-600 ml-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit the site ->
                      </a>
                      {project.inProgress && (
                        <span className="text-slate-400 ml-4">
                          ! In Progress
                        </span>
                      )}
                    </p>
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
};
