import logo from "./images/myLogo.png";
import { useContext } from "react";
import { AppContext } from "./pages/context";

export function Header() {
  const { mode } = useContext(AppContext);
  return (
    <div>
      <div
        className={`w-full ${
          mode
            ? "bg-gradient-to-r from-[#0F0715] to-[#281744]"
            : "bg-gradient-to-r from-white to-blue-400"
        } h-24 flex flex-row items-center justify-around fixed z-10`}
      >
        <div className="flex flex-row items-center space-x-4">
          <img src={logo} alt="" className="h-10 w-10 "></img>
          <h1
            className={`text-4xl  ${!mode ? "text-purple-800" : "text-white"}`}
          >
            nyiranezalouise93@gmail
          </h1>
        </div>
        <ul className=" flex flex-row">
          <li className="ml-4   hover:border-b hover: border-blue-700 text-white">
            <a href="#home">Home</a>
          </li>
          <li className="ml-4   hover:border-b hover: border-blue-700 text-white">
            <a href="#about">About</a>
          </li>
          <li className="ml-4   hover:border-b hover: border-blue-700 text-white">
            <a href="#skills">Skills</a>
          </li>
          <li className="ml-4  hover:border-b hover: border-blue-700 text-white">
            <a href="#project">Project</a>
          </li>
          <button className="bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-gradient-to-r hover:from-purple-950 hover:to-purple-700 ml-4 px-4 py-2 rounded-md">
            {" "}
            <li className="  text-white">
              <a href="#contact">Hire Me !</a>
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
}
