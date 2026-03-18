import React from "react";
import pivot from "../../../../assets/Analytics-Pivot/logo.png";
import pivotImg from "../../../../assets/Analytics-Pivot/pivot-table-customise.gif";
import speed from "../../../../assets/Analytics-Pivot/pivot-table-speed.gif";
import filters from "../../../../assets/Analytics-Pivot/pivot-table-filters.gif";
import flexible from "../../../../assets/Analytics-Pivot/pivot-table-drag-n-drop.gif";
import NavBar from "../../../NavBar";

const PivotTable = () => {
  return (

    <>
    <NavBar/>

    <div className="bg-gray-100 min-h-screen pt-14 pb-10 font-medium text-gray-700 font-sans">

      {/* Main Container */}
      <div className="px-20">
        <div className="max-w-4xl mx-auto">

          {/* Layout */}
          <div className="grid grid-cols-3 gap-10 min-h-[80vh]">

          {/* Left Side */}
          <div className="mt-12 sticky top-20 h-fit w-64 text-base text-gray-700">
            
            <img src={pivot} alt="pivot" className="w-60 mb-3" />
            
            {/* Made by */}
            <div className="flex items-center gap-2 mb-1">
              <span>🔌</span>
              <p>Made by Conjointly</p>
            </div>
            
            <div className="bg-gray-200 inline-block px-3 py-1 rounded text-xs mb-3">
              5,000 +
            </div>
            
            {/* Light Divider */}
            <hr className="border-gray-200 mb-3"/>
            
           {/* Categories */}
          <h3 className="font-semibold mb-2">Categories</h3>
            
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="border border-gray-300 px-3 py-1 rounded text-xs 
              hover:bg-gray-200 hover:cursor-pointer transition">
              Board utilities
            </span>
            
            <span className="border border-gray-300 px-3 py-1 rounded text-xs 
              hover:bg-gray-200 hover:cursor-pointer transition">
              Analytics & reporting
            </span>
          </div>
            
            {/* Light Divider */}
            <hr className="border-gray-200 mb-3"/>
            
            {/* Links */}
            <div className="space-y-1 mb-3 text-gray-600">
              <div className="flex items-center gap-2 hover:cursor-pointer hover:text-blue-800 transition">
                <span>✉️</span>
                <p>Contact support</p>
              </div>
            
              <div className="flex items-center gap-2 hover:cursor-pointer hover:text-blue-800 transition">
                <span>ℹ️</span>
                <p>Privacy policy</p>
              </div>
            </div>
            
            {/* Light Divider */}
            <hr className="border-gray-200 mb-3"/>
            
            {/* Compliance Text */}
            <p className="text-xs text-gray-600 leading-snug">
              Pivot Table (by Conjoint.ly) is in compliance with{" "}
              <span className="text-blue-600 font-semibold underline hover:cursor-pointer">
                Trello's data and privacy practices
              </span>.
            </p>
            
          </div>
            
            {/* Right Side */}
            <div className="col-span-2 pt-12 pr-4">

              {/* Header */}
              <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold">
                  Pivot Table (by Conjoint.ly)
                </h1>

                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                  Add Power-Up
                </button>
              </div>

              <h2 className="text-2xl text-gray-700 mt-4 mb-4">
                Add pivot table functionality to Trello!
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                The pivot table functionality power-up was developed by the
                Conjoint.ly development team as a quick way to count to-do and
                completed cards, as well as tally total hours budgeted for cards.
              </p>

              <p className="text-sm text-gray-600 mb-6">
                Pivot tables are the perfect solution when you need to summarise
                and analyse large amounts of data.
              </p>

              <p className="text-sm text-gray-600 mb-4">
                Pivot tables are the perfect solution when you need to summarise
                and analyse large amounts of data. In just a few clicks, you can
                review project efficiency and productivity data in a simple display.
              </p>

              <p className="text-sm mb-6">🆓 Free (no registration required)</p>

              <h3 className="text-base mb-3">
                <span className="text-blue-600 font-semibold text-2xl underline">
                  Conjoint.ly
                </span>{" "}
                Pivots are particularly useful for:
              </h3>

              <ul className="text-sm text-gray-600 space-y-3 mb-8">
                <li>🗓️ Project Planning(i.e., identify and categorise development hours)</li>
                <li>👀 Project Tracking(i.e., track project costs, group and sort project stages)</li>
                <li>✔️ Project Reporting(i.e., measure performance, create custom reports)</li>
              </ul>

              <h2 className="text-xl font-bold mb-6">
                Main benefits of <span className="text-blue-600 font-semibold text-2xl underline">
                  Conjoint.ly
                </span>{" "} Pivots:
              </h2>

              {/* Simplicity */}
              <div className="mb-10">
                <h3 className="text-base font-bold mb-2">😊 Simplicity</h3>

                <p className="text-sm text-gray-600 mb-4">
                 You don’t need to be a pivot wiz to start using this tool. 
                 The drag and drop functionality allows you to organise and 
                 summarise your Trello board data in moments.
                </p>

                <img src={pivotImg} alt="pivot example" className="rounded shadow-md" />
              </div>

              {/* Speed */}
              <div className="mb-10">
                <h3 className="text-base font-bold mb-2">⚡ Speed</h3>

                <p className="text-sm text-gray-600 mb-4">
                  Create a functional, visually-appealing report with a pivot table in minutes.
                   Pivot tables are fast to set up and require minimum effort.
                  Track on-going changes to your data. A pivot table will display new data as it’s added.
                </p>

                <img src={speed} alt="speed example" className="rounded shadow-md" />
              </div>

              {/* Filtering */}
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-2">🔑 Filtering</h3>

                <p className="text-sm text-gray-600 mb-4">
                  Using custom tags, each parameter can be modified with filters. 
                  Pick and choose which values you want to see and remove the rest.
                  Want to look at completed or in-progress cards, but exclude pre-planning?
                  A pivot table makes it simple.
                </p>

                <img src={filters} alt="filter example" className="rounded shadow-md" />
              </div>

              {/* Flexibility */}
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-2">🔗 Flexibility</h3>

                <p className="text-sm text-gray-600 mb-4">
                  Rearrange the pivot table to suit your needs for displaying board data.
                  Group your cards any way you like. Sort by date, project, individual,
                  or a custom field to access your data the way you want it.
                </p>

                <img src={flexible} alt="flexibility example" className="rounded shadow-md" />
              </div>

              {/* Bugs Section */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                  Bugs, feedback, and feature requests
                </h2>

                <p className="text-sm text-gray-600 mb-4">
                  This project is open source, and contributions are welcome. You can use{" "}
                  <a href="#" className="text-blue-600 underline">
                    GitHub issues
                  </a>{" "}
                  to report issues or request features.
                </p>

                <p className="text-sm text-gray-600 mb-4">
                  Learn more about{" "}
                  <a href="#" className="text-blue-600 underline">
                    Conjoint.ly
                  </a>{" "}
                  and the{" "}
                  <a href="#" className="text-blue-600 underline">
                    project itself
                  </a>.
                </p>

                <p className="text-sm text-gray-600">
                  🎤 Suggest more uses for this Pivot tool at{" "}
                  <a
                    href="mailto:support@conjointly.com"
                    className="text-blue-600 underline"
                  >
                    support@conjointly.com
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <footer className="w-full mt-8 pt-4 text-sm text-gray-600">
  
      <div className="max-w-4xl mx-auto pl-20">
      
        <div className="flex flex-wrap gap-4 mb-3">
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
      
        <div className="flex items-center gap-2 text-gray-700 font-bold mt-1 pl-40">
          <span className="text-3xl">▲</span>
          <span classname="text-3xl">ATLASSIAN</span>
          <span className="text-sm font-normal ml-2">
            © Copyright 2026. All rights reserved.
          </span>
        </div>
      
  </div>

</footer>

    </div>
    </>
  );
};

export default PivotTable;