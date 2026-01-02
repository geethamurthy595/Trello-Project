import React from "react";
import Attlasian from "../../../assets/Atlas1.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const AtlansianNavbar = () => {
  return (
    <nav className="bg-blue-800 h-10 w-full ">
      <img
        className="h-10 w-30 absolute left-50 cursor-pointer"
        src={Attlasian}
        alt=""
      />
      <ul className="flex items-center justify-between px-100 py-3 text-gray-200 font-semibold text-sm ">
        <li className="cursor-pointer">WORK LIFE</li>
        <li className="cursor-pointer">PRODUCTS & NEWS</li>
        <li className="cursor-pointer">TEAM PLAYBOOK</li>
        <li className="cursor-pointer">COMMUNITY</li>
      </ul>
      <section className="border-b-3 border-gray-300 h-20 w-full absolute  top-10">
        <div className="border-r-3 border-gray-300 w-120 h-19.5 text-center flex items-center justify-center">
          <h1 className="font-bold text-2xl text-[#172B4D] italic cursor-pointer">
            PRODUCTS & NEWS
          </h1>
        </div>
        <div className="border-r-3 border-gray-300 h-19.5 w-130 absolute left-139.5 top-0">
          <ul className="text-blue-700 flex items-start  py-4.5">
            <li className="text-center flex items-center justify-center hover:bg-blue-300 h-10 w-23 rounded-3xl cursor-pointer">
              Products <RiArrowDropDownLine />
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="text-center flex items-center justify-center hover:bg-blue-300 h-10 w-20 rounded-3xl cursor-pointer">
              Topics <RiArrowDropDownLine />
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="text-center flex items-center justify-center hover:bg-blue-300 h-10 w-40 rounded-3xl cursor-pointer">
              Company News
            </li>
          </ul>
        </div>
        <div className="border-r-3 border-gray-300 h-19.5 w-50 absolute left-268.5 top-0 flex items-center justify-center italic cursor-pointer  text-[#172B4D] font-bold hover:text-blue-500 ">
          SUBSCRIBE
        </div>
        <h1 className="absolute left-320 top-8 ">
          <CiSearch className="text-blue-800 size-5 cursor-pointer" />
        </h1>
      </section>
    </nav>
  );
};

export default AtlansianNavbar;
