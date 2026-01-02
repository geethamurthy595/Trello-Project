import React, { useState } from "react";

import slide1 from "../../../assets/designSprint.jpg";
import slide2 from "../../../assets/desigHurdle.jpg";
import slide3 from "../../../assets/researchProject.jpg";

const Productivity = () => {
  const [slide, setSlide] = useState(slide1);

  // Helper to check active slide
  const isActive = (s) => slide === s;

  return (
    <>
      <div className="mx-50 pt-10 text-center">
        <h1 className="text-[36px] font-medium">Your Team’s Workspace</h1>
        <br />
        <p className="text-[20px] font-normal">
          These template boards make it easier for creative teams to manage requests, drafts, revisions, cross-functional projects, and focus on what they do best—crafting beautiful designs.


        </p>
        <br />
        <p className="text-[20px] font-normal text-[#0052CC] underline">Explore all design templates</p>
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
                Design Sprint
              </h2>
              <p className="text-gray-600 mt-2">
                Help your team move from problem to solution by using this template to run a design sprint. Easily ideate on early concepts, test ideas, and hit the ground running.
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
                Design Huddle
              </h2>
              <p className="text-gray-600 mt-2">
                Design critique is a tenet of any good design practice. This design huddle template encourages collaboration, feedback, and better future design decisions.



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
                Research Project
              </h2>
              <p className="text-gray-600 mt-2">
                Use this board to share the work with your team, automate steps, and create a thorough analysis of your project.
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
