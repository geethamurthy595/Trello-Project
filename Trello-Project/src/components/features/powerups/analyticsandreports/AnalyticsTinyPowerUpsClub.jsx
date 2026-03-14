import React from "react";
import img1 from "../../../../assets/timetrackerimg1.png";
import NavBar from "../../../NavBar";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from "../../../solutions/taskManagement/AtlassianFooter";

import club from "../../../../assets/analyticsTinyPowerUpsClub.png";
import plug from "../../../../assets/plug.png";
import img5 from "../../../../assets/timetrackerimg4.png";
import img2 from "../../../../assets/yTaGtdh.png"
import img3 from "../../../../assets/LLE2UvI.png"
import img4 from "../../../../assets/LiMbrtK.png"
import img6 from "../../../../assets/YQND8HB.png"

const AnalyticsTinyPowerUpsClub = () => {
  const HowToStart1 = [
    "Add the Time Tracker by TimeCamp Power-Up in Trello",
    `Open the Power-Up settings and choose "Edit Power-Up settings".`,
    "Sign in or sign up to TimeCamp",
  ];

  const HowToStart2 = [
    "Register new account",
    "Authorize the integration",
    `Select the boards you'd like to allow for tracking`,
    "Choose card and start timer by Power-Up",
    "Track time with pleasure :)",
  ];

  const BenifitsOfFreePlan = [
    "one integration available - use it for Trello :)",
    "unlimited users",
    "unlimited projects and tasks",
    "timesheets",
  ];

  const WhatYouGetInPaidPlans = [
    "custom reports",
    "invoicing",
    "timesheet approvals",
    "unlimited integrations",
  ];

  const powerUpsList = [
  "File Manager",
  "External Share",
  "Board Chat",
  "Card Approvals",
  "Board and Card Keys",
  "Analytics",
  "Office File Viewer",
  "Archive Manager",
  "Durations",
  "Gallery View",
  "Table View",
  "Polls",
  "Advanced Card Covers",
  "Show fields on card front",
  "Bookmarks for Trello",
  "Forms for Trello",
  "Saved Filters",
  "Conditional List Colors"
  
];

  return (
    <>
      <NavBar />

      <div className="ml-50 mt-10 sticky top-20">
        <p>
          <Link to="/power-ups" className="hover:underline">
            Power-Ups
          </Link>{" "}
          /{" "}
          <Link className="hover:underline">
            Analytics - Tiny Power-Ups Club
          </Link>
        </p>
      </div>

      <section className="flex mt-5 w-[70%] m-auto gap-20">

       
        <div className="flex w-90 h-130 justify-start sticky top-35">
          <div className="rounded-lg text-center">

            <img src={club} alt="" className="block mx-auto" />

            <p className="mt-2 flex justify-center gap-3">
              <img className="w-5 h-5" src={plug} alt="" />
              Made by Tiny Power-Ups Club
            </p>

            <p className="bg-gray-100 w-26 h-7 ml-25 flex justify-center items-center gap-3 p-4">
              <img className="w-5 h-5" src={img5} alt="" />
              <p>1,000+</p>
            </p>

            <br />

            <hr className="border-gray-300" />

            <br />

            <h1 className="text-l font-bold text-black flex justify-start">
              Categories
            </h1>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-xs p-2 border border-gray-200 w-[140px] rounded hover:bg-gray-100"
              >
                Analytic & Reporting
              </a>

              <a
                href="#"
                className="text-xs p-2 border w-[200px] border-gray-200 rounded hover:bg-gray-100"
              >
                Marketing & social media
              </a>
            </div>

            <br />

            <hr className="border-gray-300" />

            <div className="flex items-center mt-3">
              <CiMail />
              <a
                href="#"
                className="text-xs px-2 hover:underline hover:text-blue-600"
              >
                Contact Support
              </a>
            </div>

            <div className="flex items-center mt-2">
              <MdOutlinePrivacyTip />
              <a
                href="#"
                className="text-xs px-2 hover:underline hover:text-blue-600"
              >
                Privacy Policy
              </a>
            </div>

            <br />

            <hr className="border-gray-300" />

            <div className="mt-4 flex gap-2 items-center">
              <AiTwotoneLock className="w-10 h-10" />

              <p className="text-sm text-gray-700">
                Analytics - Tiny Power-Ups Club is in compliance with{" "}
                <a href="#" className="text-blue-600 underline">
                  Trello's data and privacy practices
                </a>
              </p>
            </div>

          </div>
        </div>

   
        <div className="w-full md:w-[70%] mb-6">

         
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              Analytics - Tiny Power-Ups Club
            </h1>

            <button className="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Add Power-Up
            </button>
          </div>

          <p className="mt-4 text-gray-700">
            Free for 7 days (no CC required), then just $3/month or $30/year.
          </p>

          <p className="text-gray-700">
            Or grab the whole Tiny Power-Ups Club suite for just $9.99/month.
          </p>

          <hr className="my-6" />

         
          <h2 className="text-2xl font-semibold">
            Simple & sleek metrics for all your boards and cards
          </h2>

          <p className="text-gray-600 mt-2">
            Easy view-tracking on boards and cards!
          </p>

          
          <div className="w-full h-[350px] bg-gray-100 mt-4">
            <img src={img2} alt="" />
          </div>

       
          <h2 className="text-2xl font-semibold mt-10">
            Board Analytics
          </h2>

          <p className="mt-3 text-gray-700">
            Tap the Analytics Power-Up icon to open the Analytics modal.
          </p>

         
          <div className="w-full h-[350px] bg-gray-100 mt-4">
            <img src={img3} alt="" />
          </div>

          <p className="mt-6 text-gray-700">
            See who’s viewed your boards and when, and even see who’s currently
            active.
          </p>

          
          <div className="w-full h-[350px] bg-gray-100   mt-4">
            <img src={img4} alt="" />
          </div>

         
          <h2 className="text-2xl font-semibold mt-5">
            Card Analytics
          </h2>

          <p className="mt-3 text-gray-700">
            Click the card icon to view metrics for all the cards on the board.
          </p>

     
          <div className="w-full h-[350px] bg-gray-100  mt-6">
            <img src={img6} alt="" />
          </div>

          
          <h2 className="text-2xl font-semibold mt-10">
            Who can view Analytics?
          </h2>

          <p className="mt-3 text-gray-700">
            Board & Card counts are free for anyone on the board to view.
            However, you'll need a membership to view the Analytics modal
            containing more detailed information.
          </p>

          <hr className="my-8" />

          
          <h2 className="text-2xl font-semibold">
            ⭐ Analytics is part of the Tiny Power-Ups Club
          </h2>

          <p className="mt-3 text-gray-700">
            Pay just $9.99 per user per month for unlimited access to all
            Power-Ups.
          </p>

          <ul className="list-disc ml-6 mt-4 text-blue-600 flex flex-col gap-1">
              {powerUpsList.map((item, index) => (
                      <li key={index} className="underline hover:no-underline cursor-pointer">
                                 {item}
          </li>
         ))}
         <li className="text-black">(and automatically get any new releases!)</li>
         </ul>

         <p className="mb-2 mt-3">Add your entire team to the club with <a href="" className="text-blue-600 underline hover:no-underline">Workspace billing</a>!</p>
         <p>Check out the full Tiny Power-Ups club suite <a href="" className="text-blue-600 underline">here</a>.</p>

          <hr className="my-8" />

       
          <h2 className="text-2xl font-semibold">
            Privacy & Security
          </h2>

          <p className="mt-3 text-gray-700">
            Your board data is safe with us. We're up to par with Trello's data
            & security standards our <a href="" className="text-blue-600 underline hover:no-underline">privacy policy here.</a>.
          </p>

      
          <h2 className="text-2xl font-semibold mt-10">
            Support
          </h2>

          <p className="mt-3 text-gray-700">
            If you need help or wish to report a bug, just shoot us an email at <a href="" className="text-blue-600 underline hover:no-underline">http://help@samchop.com</a>.
          </p>
          <p className="mt-2">Enjoy!</p>
        </div>
      </section>

      <div className="mt-50">
        <AtlassianFooter />
      </div>
    </>
  );
};

export default AnalyticsTinyPowerUpsClub;