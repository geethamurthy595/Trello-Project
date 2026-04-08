import React from 'react'
import NavBar from '../../../NavBar';
import {
  MdEmail,
  MdPrivacyTip,
  MdInfoOutline,
  MdImage,
  MdLockOutline,
  MdInfo,
} from "react-icons/md";
import { BsGrid } from "react-icons/bs";

const Datahighlighter = () => {
  return (
    <>
    <NavBar/>
    <div className="bg-white min-h-screen pt-4 pb-10 text-black">
    
          {/* Main Container */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:pl-12 md:pr-6 lg:pl-20 lg:pr-12">
    
            {/* Breadcrumb */}
            <p className="text-sm mt-4 mb-6 md:ml-6 lg:ml-1 text-black">
              <span className="hover:underline cursor-pointer">Power-Ups</span> 
              / <span className="hover:underline cursor-pointer">Data Highlighter</span>
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[80vh]">
    
              {/* LEFT SIDEBAR */}
              <div className="mt-6 md:sticky md:top-20 h-fit w-full md:w-42 lg:w-54 ml-0 border-b md:border-b-0 pb-6 md:pb-0">
    
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
                  <span>Made by Data Highlighter Inc.</span>
                </div>
    
                {/* Downloads */}
                <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 w-fit px-3 py-1 rounded text-sm mb-4 text-black">
                  <BsGrid className="text-gray-900" />
                  <span>1,000 +</span>
                </div>
    
                <hr className="mb-4" />
    
                {/* Categories */}
                <h3 className="font-medium mb-2 text-base text-black">Categories</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="border border-gray-300 px-3 py-1 rounded text-xs text-black hover:bg-gray-200 transition cursor-pointer">
                    Board utilities
                  </span>
                  <span className="border border-gray-300 px-3 py-1 rounded text-xs text-black hover:bg-gray-200 transition cursor-pointer">
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
                  <h1 className="text-[26px] font-bold text-gray-900 leading-tight">
                    Data Highlighter
                  </h1>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 w-full sm:w-auto shadow-sm">
                    Add Power-Up
                  </button>
                </div>
                
                {/* Subtitle / Description */}
                <h2 className="text-[26px] font-medium text-gray-800 mb-4 leading-snug">
                  Powerful filters and highlights to give you just the data you need, in seconds.
                </h2>
                
                <p className="text-[15px] text-gray-700 mb-8 leading-relaxed sm:pr-8">
                  Data Highlighter sorts through your busy Trello cards to filter and arrange your data to give you a crisp, highlighted report.
                </p>
                
                {/* Divider */}
                <hr className="border-gray-200 mb-8 sm:w-[95%]" />
                
                {/* Target Audience */}
                <p className="text-[15px] text-gray-700 mb-10">
                  ## Designed to expedite work for project managers and industry leaders
                </p>
                
                {/* Features */}
                <h3 className="text-[22px] font-medium text-gray-800 mb-1">
                  Key Features
                </h3>
                
                <ul className="list-disc pl-5 space-y-1 text-[15px] text-gray-700 sm:pr-6">
                  <li>
                    <span className="font-bold text-gray-800 block">Tailored reports</span>
                    <p className="leading-relaxed">
                      It works through your data to create smart highlighted reports. you can customize
                      your report using different filters and highlighters.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold text-gray-800 block">Easy Sharing</span>
                    <p className="leading-relaxed">
                      Share the generated report with your team with a single link. Easily create a new link or
                      disable link when you need.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold text-gray-800 block">Fully Synced with Trello</span>
                    <p className="leading-relaxed">
                      Never miss any updates in your reports. Your reports sync real-time with your Trello
                      boards.
                    </p>
                  </li>
                </ul>

                {/* How it works preview */}
                <div className="mt-12 mb-10">
                  <h3 className="text-[22px] font-medium text-gray-800 mb-6">let's see how it works</h3>
                  <div className="w-[280px] h-48 bg-[#f4f5f7] rounded-lg flex flex-col relative overflow-hidden mx-auto border border-gray-100">
                    <div className="absolute top-4 right-4 text-gray-700 bg-white rounded-full">
                      <MdInfo className="text-gray-800 text-xl bg-blend-multiply" />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <MdImage className="text-orange-400 text-4xl mb-2" />
                      <span className="text-gray-500 text-[13px]">Preview unavailable</span>
                    </div>
                  </div>
                </div>

                {/* Additional Sections */}
                <div className="mt-12 space-y-10 sm:pr-8">
                  <div>
                    <h3 className="text-[22px] font-medium text-gray-800 mb-4">What makes the power-up Awesome?</h3>
                    <p className="text-[15px] text-gray-700 leading-relaxed">
                      Data highlighter creates powerful reports in seconds. The custom filters and highlighters
                      give you just the data you need. And not just it, you can also decide what and how should
                      the data to be highlighted.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[22px] font-medium text-gray-800 mb-4 sm:pr-10 leading-snug">
                      How will this power-up makes the lives of trello user better?
                    </h3>
                    <p className="text-[15px] text-gray-700 leading-relaxed">
                      It’s a power tool for data managers to create a quick, precise and highlighted report from
                      a busy Trello board. Data highlighter makes going through hoards of data very easy,
                      convenient and time saving.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[22px] font-medium text-gray-800 mb-4 sm:pr-10 leading-snug">
                      What does this power-up add to the experience that trello doesn't already provide?
                    </h3>
                    <p className="text-[15px] text-gray-700 leading-relaxed">
                      Data highlighter provides powerful, detailed filters which sort through multiple lists, due
                      time, Members, Labels, keywords all together as per your requirement. Not just this, you
                      can customize what data to highlight through multiple conditions and create a report
                      which can be shared with non-Trello users too. Trello’s basic tools do not offer any of
                      these functionalities.
                    </p>
                  </div>
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
  )
}

export default Datahighlighter
