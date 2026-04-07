import React from "react";
import {
  MdEmail,
  MdPrivacyTip,
  MdInfoOutline,
  MdImage,
  MdLockOutline,
  MdInfo,
} from "react-icons/md";
import { BsGrid } from "react-icons/bs";
import NavBar from "../../../NavBar";


const Critical = () => {
  return (
    <>
    <NavBar/>
    <div className="bg-white min-h-screen pt-4 pb-10 text-black">

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:pl-12 md:pr-6 lg:pl-20 lg:pr-12">

        {/* Breadcrumb */}
        <p className="text-sm mt-4 mb-6 md:ml-6 lg:ml-1 text-black">
          <span className="hover:underline cursor-pointer">Power-Ups</span> 
          / <span className="hover:underline cursor-pointer">Critical Value Calculator</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[80vh]">

          {/* LEFT SIDEBAR */}
          <div className="mt-6 md:sticky md:top-20 h-fit w-full md:w-48 lg:w-52 ml-0 border-b md:border-b-0 pb-6 md:pb-0">

            {/* Image Placeholder */}
            <div className="w-full h-8 border border-gray-300 rounded mb-4 flex items-center p-1 overflow-hidden">

               {/* Tiny image inside */}
               <div className="w-6 h-full bg-blue-100 rounded-sm overflow-hidden flex items-center justify-center">
                   <MdImage className="text-blue-500 text-sm" />
               </div>
            </div>

            {/* Made by */}
            <div className="flex items-center gap-2 text-black mb-3 text-sm">
              <span>🔌</span>
              <span>Made by Enzipe Apps</span>
            </div>

            {/* Downloads */}
            <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 w-fit px-3 py-1 rounded text-sm mb-4 text-black">
              <BsGrid className="text-gray-900" />
              <span>100 +</span>
            </div>

            <hr className="mb-4" />

            {/* Categories */}
            <h3 className="font-medium mb-2 text-sm text-black">Categories</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="border border-gray-300 px-3 py-1 rounded text-sm text-black hover:bg-gray-200 transition cursor-pointer">
                Board utilities
              </span>
              <span className="border border-gray-300 px-3 py-1 rounded text-sm text-black hover:bg-gray-200 transition cursor-pointer">
                Analytics & reporting
              </span>
            </div>

            <hr className="mb-4" />

            {/* Contact */}
            <div className="flex items-center gap-2 text-gray-900 mb-2 cursor-pointer hover:text-blue-800 text-sm">
              <MdEmail />
              <span>Contact support</span>
            </div>

            {/* Privacy */}
            <div className="flex items-center gap-2 text-gray-900 mb-4 cursor-pointer hover:text-blue-800 text-sm">
              <MdInfoOutline />
              <span>Privacy policy</span>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-900 leading-snug">
              <MdLockOutline className="mt-0.5 flex-shrink-0 text-black" />
              <p>
                Critical Value Calculator is in compliance with{" "}
                <span className="text-blue-700 underline cursor-pointer hover:text-blue-800">
                  Trello's data and privacy practices
                </span>.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-2 pt-0 md:pt-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
              <h1 className="text-2xl font-bold text-black">
                Critical Value Calculator
              </h1>
              <button className="bg-blue-600 text-white px-4 py-1.5 rounded font-medium hover:bg-blue-700 w-full sm:w-auto">
                Add Power-Up
              </button>
            </div>

            {/* Description */}
            <p className="text-black mb-6 leading-relaxed text-sm">
              Critical value calculator is the Trello’s first power-up used for
              calculating the T-critical value, z-critical value, F-value,
              CHI square value, and R value of the given data. The critical
              value calculator gives the accurate answer according to the
              statistical tables.
              <br />
              Power up Developed by{" "}
              <span className="text-blue-700 underline cursor-pointer hover:text-blue-800">
                criticalvaluecalculator.com
              </span>
            </p>

            {/* How to use */}
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-black mb-3 flex items-center">
                How to use this power up:<span className="font-normal text-gray-700 ml-1">#</span>
              </h2>

              <div className="text-sm text-black space-y-1.5">
                <p>-Enable the power up.</p>
                <p>-Open your card.</p>
                <p>-Check the “critical value calculator” in the Power-Ups list</p>
                <p>-Click on “calculate in card description”.</p>
              </div>
            </div>

            {/* Preview Box */}
            <div className="w-[260px] h-48 bg-[#f4f5f7] rounded-lg flex flex-col relative overflow-hidden mx-auto my-10 border border-gray-100">
              <div className="absolute top-3 right-3 bg-white rounded-[4px] flex items-center justify-center p-0.5 shadow-sm">
                <MdInfo className="text-gray-800 text-xl" />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <MdImage className="text-orange-400 text-4xl mb-2" />
                <span className="text-gray-500 font-medium text-sm">Preview unavailable</span>
              </div>
            </div>

            {/* Additional Steps */}
            <div className="text-sm text-black space-y-2 mb-8">
              <p>-Select your desired calculation, by clicking on “T Value”, a dropdown will be shown like:</p>
              <p>-Enter the data.</p>
              <p>-Click on “calculate” button</p>
              <p>
                -To save the result click on “add comment” button, the result will be added in the<br/>
                comment section
              </p>
            </div>
          </div>
        </div>
      </div>
       <footer className="w-full mt-8 pt-4 text-sm text-gray-600">
  
      <div className="max-w-4xl mx-auto px-4 md:pl-20">
      
        <div className="flex flex-wrap gap-4 mb-3 justify-center md:justify-start">
          <a href="#" className="underline">Templates</a>
          <a href="#" className="underline">Pricing</a>
          <a href="#" className="underline">Apps</a>
          <a href="#" className="underline">Jobs</a>
          <a href="#" className="underline">Blog</a>
          <a href="#" className="underline">Developers</a>
          <a href="#" className="underline">About</a>
          <a href="#" className="underline">Help</a>
          <a href="#" className="underline">Legal</a>
          <a href="#" className="underline">Privacy</a>
          <a href="#" className="underline">Integrations</a>
          <a href="#" className="underline">Contact us</a>
          <a href="#" className="underline">Terms</a>
        </div>
      
        <div className="flex flex-col md:flex-row items-center gap-2 text-gray-700 font-bold mt-4 md:mt-1 md:pl-40 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="text-3xl">▲</span>
            <span className="text-3xl">ATLASSIAN</span>
          </div>
          <span className="text-sm font-normal md:ml-2 mt-2 md:mt-0">
            © Copyright 2026. All rights reserved.
          </span>
        </div>
      
  </div>

</footer>
    </div>
    </>
  );
};

export default Critical;