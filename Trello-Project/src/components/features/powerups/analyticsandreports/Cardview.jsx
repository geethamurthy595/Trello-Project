import React from "react";
import NavBar from "../../../NavBar";
import logo from "../../../../assets/analytics-cardviews/viewicon.svg";
import power from "../../../../assets/analytics-cardviews/powerupicon.png";
import inbox from "../../../../assets/analytics-cardviews/inbox.jpeg";
import online from "../../../../assets/analytics-cardviews/online.png";
import statistics from "../../../../assets/analytics-cardviews/statistics.gif";
import details from "../../../../assets/analytics-cardviews/details.png";
import inbox1 from "../../../../assets/analytics-cardviews/inbox1.png";
import permissions from "../../../../assets/analytics-cardviews/permissions.png";


const Cardview = () => {
  return (
    <>
      <NavBar />

      <div className="bg-gray-100 min-h-screen pt-4 pb-10 text-gray-700">

        {/* Main Container */}
        <div className="max-w-5xl mx-auto pl-12 pr-6 lg:pl-20 lg:pr-12">

          {/* Breadcrumb */}
          <p className="text-sm mt-4 mb-6 ml-6 lg:ml-1 text-black/80 hover:underline cursor-pointer">
            Power-Ups / Card Views & Board Visits
          </p>

          {/* Layout */}
          <div className="grid grid-cols-3 gap-8 min-h-[80vh]">

            {/* LEFT SIDE */}
            <div className="mt-6 sticky top-20 h-fit w-60 ml-0">

              <img
                src={logo}
                alt="logo"
                className="w-70 mx-auto mb-4"
              />

              {/* Made by */}
            <div className="flex items-center gap-2 mb-1">
              <span>🔌</span>
              <p>Made by Alaryx Tech</p>
            </div>
            
            <div className="bg-gray-200 inline-block px-3 py-1 rounded text-xs mb-3">
              500 +
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
              HR & Operations
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
          <hr className="border-gray-200 my-4" />
            
          {/* Compliance Section */}
          <div className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
            
            {/* Lock Icon */}
            <span className="text-base">🔒</span>
            
            {/* Text */}
            <p>
              Card Views & Board Visits is in compliance with{" "}
              <span className="text-blue-600 underline cursor-pointer hover:text-blue-700">
                Trello's data and privacy practices
              </span>.
            </p>
            
          </div>
          </div>
            {/* RIGHT SIDE */}
            <div className="col-span-2 pt-6">

              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">
                  Card Views & Board Visits
                </h1>

                <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 cursor-pointer">
                  Add Power-Up
                </button>
              </div>

              {/* Image Card */}
              <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-6 rounded-xl shadow-lg flex justify-center">
                <img
                  src={power}
                  alt="power"
                  className="w-3/4 h-100 max-w-xl rounded-lg shadow-md"
                />
              </div>

              {/* Description */}
              <p className="text-black mt-6 text-sm">
                Track views on boards and cards over time with board analytics,detailed card 
                activity and a live online users panel. Built for distributed and remote teams, 
                it helps you see which boards people rely on and when teammates are typically active,
                so you can coordinate work and keep important cards visible.
              </p>

              {/* Key Features */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>

                {/* Feature 1 */}
                <div className="mb-10">
                  <h3 className="text-lg font-bold mb-2">
                    📌 Card view badges
                  </h3>
                  <p className="text-sm text-gray-700 mb-8">
                    See how many times a card was viewed and how long it’s been since the last view,
                    right on the card badge and card back.
                  </p>
                  <img
                    src={inbox}
                    alt="inbox"
                    className="w-full max-w-2xl rounded-lg shadow-md"
                  />
                </div>

                {/* Feature 2 */}
                <div className="mb-10">
                  <h3 className="text-lg font-bold mb-2">
                    👥 Online users on the board
                  </h3>
                  <p className="text-sm text-gray-700 mb-8">
                    A compact online panel with avatars that shows who is currently on the board in real time, 
                    helping remote teams see who’s around without constant pings.
                  </p>
                  <img
                    src={online}
                    alt="online"
                    className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                  />
                </div>

                {/* Feature 3 */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-2">
                    📊 Board analytics dashboard
                  </h3>
                  <p className="text-black mt-6 mb-8 text-sm leading-relaxed">
                    High-level metrics, charts and sortable tables that show how often the board is visited, 
                    which cards are most viewed and how activity changes over time.
                  </p>
                  <img
                    src={statistics}
                    alt="statistics"
                    className="w-full max-w-2xl rounded-lg shadow-md"
                  />
                </div>

                {/*Feature 4*/}
                
                <div className="mt-10">
                  <h3 className="text-lg font-bold mb-2">
                    Card activity view
                  </h3>
                  <p className="text-sm text-gray-700 mb-8">
                    A dedicated “Card Views” panel with total and unique views, calendar-style activity by day 
                    and a per-user breakdown of when each person opened the card.
                  </p>
                  <img
                    src={details}
                    alt="details"
                    className="w-full max-w-2xl rounded-lg shadow-md"
                  />
                </div>

                {/* Feature 5 */}
                <div className="mt-12">
                  <h3 className="text-lg font-bold mb-2">
                    🔀 Sort cards by views and recency
                  </h3>

                  <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  Sort lists by most/least viewed or by recently/oldest viewed cards to surface important
                  work or find items that haven’t been looked at for a long time.
                  </p>

                 <img
                  src={inbox1}
                  alt="inbox1"
                  className="w-full max-w-2xl rounded-lg shadow-md"
                />
                </div>

                {/* Feature 6 */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-2">
                    ⚙️ Configurable display and permissions
                  </h3>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    Decide how badges look, who can see analytics, manage Power-Up and which users
                    should be excluded from tracking.
                  </p>
                </div>

                {/* Permissions Section */}
                <div className="mt-6">
                  <h2 className="text-2xl font-bold mb-2">🛡️ Permissions</h2>

                  <p className="text-sm text-gray-600 mb-6">
                    Manage who can access different features of the Power-Up
                  </p>

                  <img
                    src={permissions}
                    alt="permissions"
                    className="w-full max-w-3xl rounded-lg shadow-md border border-gray-200"
                  />
                </div>

                {/* CSV Export */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-2">📤 CSV export</h3>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    Export board and card statistics to CSV for spreadsheets, dashboards or other reporting tools.
                  </p>
                </div>

                {/* How to start */}
                <div className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">How to start?</h2>

                  <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                    <li>Add the Power-Up to your Trello board from the Power-Ups directory.</li>
                    <li>Reload the board page.</li>
                    <li>
                      Open the Power-Up page using the “Views” button in the board header.
                      If you don’t see this button, click the “Power-Ups” button in the top-right panel.
                    </li>
                    <li>When the page opens, authorize access to the Power-Up.</li>
                  </ol>
                </div>

                {/* Alaryx Tech Power-Ups */}
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Alaryx Tech Power-Ups
                  </h2>
                  
                  <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 leading-relaxed">
                    
                    <li>
                      <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                        SLA Timers & Deadlines
                      </span>{" "}
                      — keep work on time with SLA timers, custom start/pause/finish rules,
                      urgency badges, sorting, and simple team stats.
                    </li>
                  
                    <li>
                      <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                        Time Off Manager
                      </span>{" "}
                      — manage vacations & sick leaves in Trello: requests, approvals,
                      balances, and a team calendar.
                    </li>
                  
                    <li>
                      <span className="text-purple-600 font-medium cursor-pointer hover:underline">
                        Card Views & Board Visits
                      </span>{" "}
                      — see who visits your boards and cards, when, and for how long —
                      with clear, built-in analytics.
                    </li>
                  
                    <li>
                      <span className="text-purple-600 font-medium cursor-pointer hover:underline">
                        Card Required Fields
                      </span>{" "}
                      — set required fields for Trello cards. Show missing field badges.
                      Block moving cards until fixed.
                    </li>
                  
                  </ul>
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

export default Cardview;