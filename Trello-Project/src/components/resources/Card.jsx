import React from "react";

let Card = () => {
  return (
    <div className="border-b-2 border-gray-400 h-[120px] w-[750px] ml-45  group   space-x-4">
          <div className="relative h-[100px] w-[100px] overflow-hidden">
            <div
              className="absolute inset-0 bg-[url('https://atlassianblog.wpengine.com/wp-content/uploads/2025/01/image-20250128-205529-400x400.png')] 
                 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
            ></div>

            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>

          <div className="flex-1 ">
            <a
              className="text-blue-700 font-bold text-sm  ml-30 absolute top-220 hover:underline cursor-pointer"
              href="#"
            >
              TRELLO
            </a>
            <h3 className="font-bold text-[#172B4D] -mt-19 ml-30 cursor-pointer">
            Start the New Year strong <br /> with Mirror cards and Jira <br /> lists
            </h3>
            <p className="  border-none h-20 w-200 ml-90 -mt-10   text-sm">
            As we get into the flow of a New Year, many of us have <br /> set resolutions to stay more organized,...
            </p>
          </div>
        </div>

  );
};

export default Card;
