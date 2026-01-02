import React from "react";
import planner1 from "../../assets/planner1.svg";
import planner_icon from "../../assets/planner_icon.svg";
import { FaArrowsRotate } from "react-icons/fa6";
import planner2 from "../../assets/planner2.svg";

const Planner1 = () => {
  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 mb-6">
          {/* Left image */}
          <img
            src={planner1}
            alt=""
            className="w-20 sm:w-24 md:w-28 lg:w-30 md:ml-1 mr-10 md:mt-2"
          />

          {/* Text block */}
          <div className="flex-1 md:-ml-10 lg:-ml-16">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
              Planner
            </h1>
            <p className="text-gray-700 text-xs sm:text-sm lg:text-base mt-1 leading-5 sm:leading-6">
              Drag, drop, get it done. Schedule your to‑dos on your calendar and
              make time for what truly matters.
              <br className="hidden sm:block" />
              <span className="underline text-blue-700 hover:cursor-pointer">
                Upgrade
              </span>{" "}
              to schedule your to-dos on your Planner.
            </p>
            <img
              src={planner_icon}
              alt=""
              className="mt-3 max-w-[220px] sm:max-w-xs"
            />
            <p className="text-gray-600 text-[10px] sm:text-xs -mt-3 sm:-mt-4 ml-2 sm:ml-6">
              Only you can see your Planner.
            </p>
          </div>

          {/* Button */}
          <button className="self-stretch sm:self-auto px-3 sm:px-4 py-2 flex items-center justify-center text-xs sm:text-sm font-medium gap-1 sm:gap-2 md:mr-8 lg:mr-20 bg-blue-600 hover:cursor-pointer text-white rounded-lg">
            <FaArrowsRotate className="mt-[1px]" />
            Connect a calendar
          </button>
        </div>
      </div>

      {/* Main illustration */}
      <div className="w-full">
        <img
          src={planner2}
          alt=""
          className="mt-4 sm:mt-6 w-full max-w-none object-contain"
        />
      </div>
    </div>
  );
};

export default Planner1;
