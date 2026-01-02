import React from "react";
import worklife from "../../../assets/worklife-white.svg";
import brandinglogo from "../../../assets/branding-logo-white.svg";

const CollapsobleFooter = () => {
  return (
    <>
      <div className="border-1 border-black w-full min-h-fit bg-[#091e42] mt-4">
        <div className="w-200 m-auto text-center flex flex-col justify-center mb-25">
          <p className="text-[#FFFFFF] font-medium uppercase text-base leading-normal tracking-widest pt-20">
            Join over 150,000 working professionals
          </p>
          <img src={worklife} alt="" className="w-100 m-auto pt-10" />
          <div className="flex gap-4 text-[#FFFFFF] text-lg leading-normal m-auto pt-6">
            <p>By</p>
            <img src={brandinglogo} alt="" />
          </div>
          <p className="leading-normal text-lg text-[#FFFFFF] pt-8">
            Culture, tech, teams, and tips, delivered twice a month
          </p>
          <div className="w-100 m-auto pt-6">
            <button className="bg-[#ffab00] text-xl font-medium leading-relaxed px-10 py-2 rounded text-[#172b4d] transition-all duration-300 hover:cursor-pointer hover:bg-[#ff9920] ">
              Sign me up!
            </button>
          </div>
        </div>
        <div className="w-full p-6 pl-20 pb-10">
          <div className="flex gap-6">
            <a
              href=""
              className="text-[#97a0af] text-lg font-medium transition-all duration-300 hover:underline cursor-pointer"
            >
              Atlassian.com
            </a>
            <a
              href=""
              className="text-[#97a0af] text-lg font-medium transition-all duration-300 hover:underline cursor-pointer"
            >
              Terms of Use
            </a>
            <a
              href=""
              className="text-[#97a0af] text-lg font-medium transition-all duration-300 hover:underline cursor-pointer"
            >
              Privacy Policy
            </a>
            <p href="" className="text-[#97a0af] text-lg font-medium">
              Copyright © 2025 Atlassian
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollapsobleFooter;
