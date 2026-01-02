import React, { useState } from "react";

import slide1 from "../../../assets/imgi_22_Startup-CompanyOverview.png";
import slide2 from "../../../assets/imgi_23_Startup-GoalSetting.png";
import slide3 from "../../../assets/imgi_24_Startup-CompanyMeetings.png";

const Productivity = () => {
  const [slide, setSlide] = useState(slide1);

  // Helper to check active slide
  const isActive = (s) => slide === s;

  return (
    <>
      <div className="mx-50 pt-10 text-center">
        <h1 className="text-[36px] font-medium">Workspaces For Growing Businesses</h1>
        <br />
        <p className="text-[20px] font-normal">
          Kick your business off on the right foot by working within pre-built templates <br />
          that your small but mighty team can adapt and scale as the company <br />
          grows.
        </p>
        <br />
        <p className="text-[20px] font-normal text-[#0052CC] underline">Explore all business templates</p>
      </div>

      <div className="flex items-start justify-center relative px-50 py-20">
        {/* Slide Dots */}
        <div className="flex gap-1 absolute right-50 top-10">
          {[slide1, slide2, slide3].map((s, i) => (
            <p
              key={i}
              onClick={() => setSlide(s)}
              className={`cursor-pointer transition-all h-2 rounded-full ${
                isActive(s) ? "w-18 bg-gray-500" : "w-2 bg-black"
              }`}
            ></p>
          ))}
        </div>

        {/* Left Section */}
        <div className="w-1/3 pr-10 cursor-pointer">
          {/* Slide 1 */}
          <div
            className={`flex relative mb-8 pr-4 rounded-md transition-all ${
              isActive(slide1) ? "shadow-lg" : ""
            }`}
            onClick={() => setSlide(slide1)}
          >
            <div
              className={`w-3 bg-sky-500 mr-3 rounded-l ${
                isActive(slide1) ? "block" : "hidden"
              }`}
            ></div>
            <div className="mx-2 my-4">
              <h2 className="text-xl font-bold text-[16px] text-blue-800 underline">
                COMPANY OVERVIEW
              </h2>
              <p className="text-gray-600 mt-2">
                Give employees a high-level overview of what's happening throughout your growing company,
                with the ability to find details about teams, projects, and resources.
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`flex relative mb-8 pr-4 rounded-md transition-all ${
              isActive(slide2) ? "shadow-lg" : ""
            }`}
            onClick={() => setSlide(slide2)}
          >
            <div
              className={`w-3 bg-sky-500 mr-3 rounded-l ${
                isActive(slide2) ? "block" : "hidden"
              }`}
            ></div>
            <div className="mx-2 my-4">
              <h2 className="text-xl font-bold text-[16px] text-blue-800 underline">
                TEAM GOAL SETTING
              </h2>
              <p className="text-gray-600 mt-2">
                Store documents, tips, presentations, answers to common questions all in one place, 
                and easily break down top-level goals into smaller, achievable tasks.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className={`flex relative mb-8 pr-4 rounded-md transition-all ${
              isActive(slide3) ? "shadow-lg" : ""
            }`}
            onClick={() => setSlide(slide3)}
          >
            <div
              className={`w-3 bg-sky-500 mr-3 rounded-l ${
                isActive(slide3) ? "block" : "hidden"
              }`}
            ></div>
            <div className="mx-2 my-4">
              <h2 className="text-xl font-bold text-[16px] text-blue-800 underline">
                COMPANY MEETINGS
              </h2>
              <p className="text-gray-600 mt-2">
                Allow employees to ask questions, discuss what’s on their minds,
                and share progress on initiatives. Company leaders can discuss priorities,
                promote cross-team collaboration, and keep transparency top of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-[800px] h-[500px] shadow overflow-hidden rounded-lg">
          <img src={slide} alt="Slide" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default Productivity;
