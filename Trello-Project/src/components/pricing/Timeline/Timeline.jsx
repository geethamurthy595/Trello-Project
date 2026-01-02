import React from "react";
import p1 from "../../../assets/p1.png";
import p2 from "../../../assets/p2.png";
import p4 from "../../../assets/p4.png";
import p3 from "../../../assets/p3.png";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar";
import UniversalFooter from "../../UniversalFooter";
const Timeline = () => {
  return (
    <>
    <NavBar/>
    <section>
      {/* --- HERO SECTION --- */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-35 py-25 bg-white">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left ml-12">
          <h1 className="text-5xl font-semibold text-black-800">
            Trello Timeline view
          </h1>
          <p className="text-black-600 text-xl font-normal">
            Improve project planning with a visual <br /> overview to help you
            take any initiative from <br /> idea to reality.
          </p>

          <Link to="/free-trial" className="mt-6 px-5 py-3 border border-blue-500 rounded-md text-black-800 font-medium hover:bg-blue-200 transition">
            Get started
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center md:w-1/2 mt-10 md:mt-0">
          <img src={p1} alt="Timeline visual" className="w-full max-w-md" />
        </div>
      </div>

      {/* --- BLUE GRADIENT SECTION --- */}
      <div className="bg-gradient-to-b from-[#006BFD] to-[#00B4DB] text-white md:px-24 text-center py-40">
        <div className="max-w-3xl mx-auto space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold">
            Bring clarity to every project element
          </h1>
          <p className="text-xl leading-relaxed">
            Whether it’s a new start-up, marketing campaign, or a new product
            feature, <br /> build a solid roadmap by clearly laying out goals,
            milestones, and resources.
          </p>
          
          <img src={p2} alt="Timeline" className=" h-120 w-700" />
        </div>
      </div>

      {/* --- TEAMWORK SECTION --- */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-15 py-12 bg-white gap-1.5 h-100">
        <div className="md:w-1/2 text-center md:text-left p-40 mt-12 md:p-20 h-110 w-80 absolute  ml-20 ">
          <h1 className="text-4xl font-semibold text-black-800">
            Make team work fit <br /> together
          </h1>
          <p className="text-black-600 text-lg">
            Get a clear glimpse of your team’s project <br /> pipeline and get ahead of
            roadblocks. Quickly <br /> toggle Timeline view to group cards by list, <br />
            member, or label for additional perspective. <br /> Even on the go in the 
            Trello app.
          </p>
          </div>
          
          <img src={p4} alt="Timeline" className="flex ml-176 -translate-y-50 h-120  mt-160"/>
          
        
      </section>
       
      {/* --- PREVENT OVERLOAD + LEARN MORE --- */}
      <div className="flex justify-around gap-1.5 mt-0 mb-2.5 h-150 ">
      <img src={p3} alt="Timeline" className="h-80 w-130 ml-30  mt-70" />
      <div className=" py-16 px-8 bg-white mt-70 ">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-black-900">
          Prevent teamwork overload
        </h2>
        <p className="mt-6 text-black-600 ml-1  text-base md:text-lg max-w-2xl">
          Quickly adjust dates and assign new team <br /> resources from within
          Timeline view and you’ll <br /> be on your way to completing your projects on <br />
          time and on budget.
        </p>
      </div>
      </div>
       <br /> <br /> <br />
      {/* --- FINAL CALL TO ACTION SECTION --- */}
      <section className="flex flex-col items-center justify-center h-60 bg-gradient-to-b from-blue-600 to-cyan-400 text-white text-center ">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">
          Get a picture perfect view of your team's work
        </h1>
        <p className="text-base md:text-lg mb-6 opacity-90">
          Start a free trial today
        </p>
        <Link to="/free-trial"  className="bg-white text-gray-800 font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition">
          Get started
        </Link>
      </section>
    </section>
    <UniversalFooter/>
    </>
  );
};

export default Timeline;
