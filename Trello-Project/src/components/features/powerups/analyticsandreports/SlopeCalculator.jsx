import React from "react";
import NavBar from "../../../NavBar";
import { Link } from "react-router-dom";
import AtlassianFooter from "../../../solutions/taskManagement/AtlassianFooter";

import slopecal from "../../../../assets/slopeCalculatorimg.svg";
import flight from "../../../../assets/flight.svg";
import slopeGif from "../../../../assets/slopegif.gif";

import { CiMail } from "react-icons/ci";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";

const SlopeCalculator = () => {
  return (
    <>
      <NavBar />

      
      <div className="w-[60%] m-auto mt-10">
        <p className="text-sm">
          <Link to="/power-ups" className="text-blue-600">
            Power-Ups
          </Link>{" "}
          /{" "}
          <Link
            to="/power-ups/63c930032c37b500c50e20d3"
            className="text-blue-600"
          >
            Slope Calculator
          </Link>
        </p>
      </div>

      <section className="flex w-[60%] m-auto mt-5 gap-16">
        
        
        <div className="w-[250px] sticky top-32 h-fit">

          <div className="rounded-lg text-center">

            <span className="flex items-center justify-center gap-2 mt-2">
              <img src={flight} alt="" className="w-4 h-4" />
              Made by Enzipe Apps
            </span>

            <span className="flex justify-center items-center gap-2 mt-3 border-gray-200 rounded bg-gray-200 px-2 py-1 w-24 m-auto">
              <img src={slopecal} alt="" className="w-4 h-4" />
              <p>100+</p>
            </span>

            <br />
            <hr className="border-gray-300" />
            <br />

            <h1 className="text-xl font-bold text-left mb-2">
              Categories
            </h1>

            <div className="flex gap-2">
              <Link
                to="category/board-utilities"
                className="text-xs px-3 py-2 border border-gray-200 rounded hover:bg-gray-100 transition"
              >
                Board Utilities
              </Link>

              <Link
                className="text-xs px-3 py-2 border border-gray-200 rounded hover:bg-gray-100 transition"
              >
                Analytic & Reporting
              </Link>
            </div>

            <br />
            <hr className="border-gray-300" />
            <br />

            <div className="flex items-center gap-2 mb-2">
              <CiMail />
              <a href="#" className="text-xxs px-2 py-1  border-gray-200 rounded hover:underline hover:text-blue-600 transition-all duration-300">
                Contact Support
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlinePrivacyTip />
              <a href="#" className="text-xxs px-2 py-1  border-gray-200 rounded hover:underline hover:text-blue-600 transition-all duration-300">
                Privacy Policy
              </a>
            </div>

            <br />
            <hr className="border-gray-300" />

            <div className="mt-4 flex gap-2 items-center" >
                 <AiTwotoneLock className="w-12 h-12" />
              <p className="text-md text-gray-700 text-left">
                
                Slope Calculator is in compliance with &nbsp;
                <a href="#" className=" text-blue-600 underline" >
               
                Trello's data and privacy practices
              </a>
              </p>

              
            </div>
          </div>
            <br />
            <hr className="border-gray-300" />
            <br />
        </div>
        

     
        <div className="flex-1">

          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              Slope Calculator
            </h1>

            <button className="w-[150px] bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Add Power-up
            </button>
          </div>

          <p className="text-gray-700 text-base leading-relaxed text-justify mt-4">
            The slope calculator is one of the top tools used to calculate
            the slope of a line. In Trello (the world of power-ups) this
            calculator is introduced for the first time. You can calculate
            the slope if you have two points or if you have an equation of
            a line.
          </p>

          <ul className="text-gray-700 space-y-1 text-justify mt-4 list-none">
            <h1 className="text-xl font-bold text-black mb-2">
              How to calculate the slope using this power-up:
            </h1>

            <li>- Enable the power-up by selecting “Slope Calculator”.</li>
            <li>- Open the card.</li>
            <li>- Check the “Slope Calculator” in the Power-Ups list.</li>
            <li>- Click on “Calculate in Card comment”.</li>
            <li>- There are two methods to find slope.</li>

            <li className="mt-2 font-semibold">
              - 1st Method: Calculating slope from two points
            </li>

            <li>- Enter values of X1, X2, Y1, Y2.</li>
            <li>- Click the calculate button.</li>

            <li className="mt-2">
              The procedure is shown in the GIF below:
            </li>
          </ul>

          <div className="mt-6 flex justify-center">
            <img
              src={slopeGif}
              alt="Slope Calculator Demo"
              className="rounded-lg shadow-lg w-[500px]"
            />
          </div>

          <ul className="text-gray-700 space-y-1 text-justify mt-6 list-none">
            <li className="font-semibold">
              - 2nd Method: Calculating slope from equation
            </li>

            <li>- Enter values of X, Y, and C.</li>
            <li>- Click the calculate button.</li>
            <li>
              - To save the result click “Add Comment”. The result will
              appear in the comment section.
            </li>
          </ul>

        </div>
      </section>

      <AtlassianFooter />
    </>
  );
};

export default SlopeCalculator;