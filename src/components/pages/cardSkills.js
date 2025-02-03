import React from "react";

const Card = ({ icon, title, text, onHover }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center transform transition-transform duration-500 translate-x-0 hover:translate-y-10">
        {" "}
        <div
          className="bg-[#140C1C] hover:bg-[#2A1454] hover:text-white rounded-3xl shadow-lg p-6 max-w-xs mx-auto w-44 h-48 text-gray-800 flex flex-col items-center space-y-4 justify-center "
          onHover={onHover}
        >
          <div className="text-4xl ">{icon}</div>
          <h3 className="text-xl font-semibold hover:text-[#8750F7]  mb-2">
            {text}
          </h3>
        </div>
        <p className="text-purple-600 mt-4">{title}</p>
      </div>
    </div>
  );
};

export default Card;
