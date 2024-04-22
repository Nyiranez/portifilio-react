
import { Link } from "react-router-dom";
import logo from './images/Capture.PNG'
export function Header() {

    return (
        <div>

            <div className="w-full bg-zinc-700 h-24 flex flex-row items-center justify-around fixed">
                <div className="flex flex-row items-center ">
                <img src={logo} alt=""></img>
                <h1 className="text-4xl text-white">MLouise</h1>
                </div>
                <ul className=" flex flex-row">
                    <li className="ml-4 hover:text-black hover:underline text-white"><Link to="/Home">Home</Link></li>
                    <li className="ml-4 hover:text-black hover:underline text-white"><Link to="/About">About</Link></li>
                    <li className="ml-4 hover:text-black hover:underline text-white"><Link to="/Skills">Skills</Link></li>
                    <li className="ml-4 hover:text-black hover:underline text-white"><Link to="/project">Project</Link></li>
                    <li className="ml-4 hover:text-black hover:underline text-white"><Link to="/contact">Contact</Link></li>

                </ul>

            </div>




        </div>
    );
}

