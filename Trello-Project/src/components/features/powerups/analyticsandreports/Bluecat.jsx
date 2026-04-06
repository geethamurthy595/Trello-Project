import React from 'react'
import NavBar from '../../../NavBar';
import logo from "../../../../assets/analytics-bluecat/logo.png";
import project from "../../../../assets/analytics-bluecat/project.png";
import Mock from "../../../../assets/analytics-bluecat/Mock.png";
import past from "../../../../assets/analytics-bluecat/Past.png";

const Bluecat = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white-100 min-h-screen pt-4 pb-10 text-gray-700">

        {/* Main Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:pl-12 md:pr-6 lg:pl-20 lg:pr-12">

          {/* Breadcrumb */}
          <p className="text-sm mt-4 mb-6 md:ml-6 lg:ml-1 text-black/80 hover:underline cursor-pointer">
            Power-Ups / Time in List by Blue Cat
          </p>

          {/* Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[80vh]">

            {/* LEFT SIDE */}
            <div className="mt-6 md:sticky md:top-20 h-fit w-full md:w-60 ml-0 border-b md:border-b-0 pb-6 md:pb-0">

              <img
                src={logo}
                alt="logo"
                className="w-48 sm:w-60 mx-auto md:mx-0 mb-4"
              />

              {/* Made by */}
            <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
              <span>🔌</span>
              <p className="text-sm">Made by Cherry wood software</p>
            </div>
            
            <div className="bg-gray-200 inline-block px-3 py-1 rounded text-xs mb-3">
              50000 +
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
              Time in List by Blue Cat stores personal data and is in compliance with{" "}
              <span className="text-blue-600 underline cursor-pointer hover:text-blue-700">
                Trello's data and privacy practices
              </span>.
            </p>
            
          </div>
          </div>
            {/* RIGHT SIDE */}
            <div className="md:col-span-2 pt-0 md:pt-6">
                {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
                <h1 className="text-2xl font-bold">
                  Time in List by Blue Cat
                </h1>

                <button className="bg-blue-600 text-white px-4 py-2 sm:py-1 rounded hover:bg-blue-700 cursor-pointer w-full sm:w-auto">
                  Add Power-Up
                </button>
              </div>
              <div className="text-gray-800 space-y-6">

<<<<<<< HEAD
                 {/* Top Info */}
                 <p className="text-sm font-medium">
                   One of the{" "}
                   <span className="text-blue-600 underline cursor-pointer font-semibold">
                     fastest growing power-ups of 2023
                   </span>
                 </p>

                 <p className="text-sm font-medium">
                   From the creators of{" "}
                   <span className="text-blue-600 underline cursor-pointer font-semibold">
                     Blue Cat Reports
                   </span>
                 </p>

                 {/* Testimonials */}
                 <div className="border-l-4 border-gray-300 pl-4 italic text-sm space-y-5 font-medium">

                   <div>
                     <p>
                       "This instantly became one of my favorite Trello Powerups. Knowing how long individual tasks have remained in a given state (list) is incredibly powerful for our use case."
                     </p>
                     <p className="not-italic font-semibold mt-2">
                       Natalie Heker <span className="font-normal">[Success Academies]</span>
                     </p>
                   </div>

                   <div>
                     <p>"Like Card Aging but done well"</p>
                     <p className="not-italic font-semibold mt-2">
                       Tom Sandford <span className="font-normal">[Founder Future Content]</span>
                     </p>
                   </div>

                   <div>
                     <p>
                       "We utilized this board HEAVILY for full scale kanban production cards. Time in List was a game changer..."
                     </p>
                     <p className="not-italic font-semibold mt-2">
                       Robby Baker <span className="font-normal">[Marketing Director Holtz Leather co.]</span>
                     </p>
                   </div>

                 </div>

                 {/* Get Started */}
                 <div>
                   <h2 className="text-xl font-bold mb-2">
                     Get started right now
                   </h2>

                   <p className="text-sm font-medium">
                     It couldn't be simpler!{" "}
                     <span className="font-semibold">
                       Add the Time In List Power-Up
                     </span>{" "}
                     to your boards and see...
                   </p>
                 </div>

                 {/* Feature Section */}
                 <div>
                   <h3 className="text-lg font-semibold mb-2">
                     How long each card has been in the current list
                   </h3>

                   <p className="text-sm text-gray-600 font-medium">
                     On the front of every card, and (optionally) how long it has been on the current board.
                   </p>
                 </div>

            {/* Bullet Points */}
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 font-medium">
                <li>Spot slow cards</li>
                <li>Track performance against SLAs</li>
                <li>See which tasks need to get moving today</li>
              </ul>
              {/* Feature Image */}
            <div className="mt-4">
              <img
                src={project}
                alt="project"
                className="w-full h-64 sm:h-[400px] md:h-[420px] object-cover rounded-md"
              />
            </div>
            {/* Feature Section */}
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  How long cards spent in past lists
                </h3>
            
                <p className="text-sm text-gray-600 font-medium">
                  On the back of your cards.
                </p>
              </div>
            
            {/* Bullet Points */}
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 font-medium">
                <li>For each card, see which part of the process took the longest</li>
                <li>We load and display a full history for all cards as soon as the Power-Up is enabled</li>
              </ul>
              {/* Feature Image */}
            <div className="mt-4">
              <img
                src={Mock}
                alt="Mock"
                className="w-full h-48 sm:h-[250px] md:h-[300px] object-cover rounded-md"
              />
            </div>
            
             {/* Feature Section*/}
            <div>
              <h3 className="text-lg font-semibold mb-0">
                Charts showing aggregate data
              </h3>
            
            {/* Bullet Points */}
              <ul className="list-disc pl-5 text-gray-700 text-sm font-medium mt-0">
                <li>See which parts of your process are consistently the slowest</li>
                <li>Get averages per list</li>
                <li>Filter <span className="font-bold">member</span> or{" "}
                  <span className="font-bold">label</span></li>
              </ul>
            </div>
              {/* Feature Image */}
            <div className="mt-4">
              <img
                src={past}
                alt="past"
                className="w-full h-64 sm:h-[400px] md:h-[420px] object-cover rounded-md"
              />
            </div>
             {/* Feature Section*/}
            <div>
              <h3 className="text-lg font-semibold mb-0">
                Time In List for Trello is the Power-Up your team is missing right now.
              </h3>
            
            {/* Bullet Points */}
              <ul className="list-disc pl-5 text-gray-700 text-sm font-medium mt-0">
                <li>Spot the stuck cards, <span className="font-bold">who needs help today?</span></li>
                <li>See which parts of your process take the longest, <span className="font-bold">How could you go faster in future?</span></li>
                <li>Track performance against SLAs</li>
                <li>See which cards never make it off your todo list</li>
                <li>Measure your process and improve :)</li>
              </ul>
            </div>
            {/* PRICING SECTION */}
            <div className="space-y-4 mt-8">
            
              <p className="text-sm font-medium text-gray-800">
                Start your free trial{" "}
                <span className="font-semibold">
                  add Time In List to your Trello boards today
                </span>
              </p>
            
              <div>
                <h2 className="text-xl font-semibold mb-2">Pricing</h2>
            
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 font-medium">
                  <li>Monthly $3/member on your board/s</li>
                  <li>Annual (2 months free!) $30/member</li>
                  <li>
                    Note: the same member on multiple boards only counts once
                  </li>
                </ul>
              </div>
            
              <p className="text-sm text-gray-700">
                Got questions? Drop us a line at{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  support@timeinlist.com
                </span>{" "}
                :)
              </p>
            </div>
            
            {/* OTHER POWER-UPS SECTION */}
            <div className="mt-10 space-y-4">
            
              <h2 className="text-2xl font-semibold">
                Our other Power-Ups for Trello
              </h2>
            
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            
                <p>
                  <span className="font-semibold">Blue Cat </span>
                  <span className="text-blue-600 underline cursor-pointer">
                    Trello Reporting
                  </span>
                  . Our general purpose Reporting solution for Trello. Build the charts you want, drag and drop to create the dashboard how your team needs it.
                </p>
            
                <p>
                  <span className="text-blue-600 underline cursor-pointer">
                    Trello Forms
                  </span>
                  . The easiest to use, most complete Forms solution for Trello.
                </p>
            
                <p>
                  <span className="font-semibold">Corrello </span>
                  <span className="text-blue-600 underline cursor-pointer">
                    Scrum and Kanban charts
                  </span>
                  . Burndowns, CFDs, Cycle Time, Release Forecasts and more.
                </p>
            
                <p>
                  <span className="text-blue-600 underline cursor-pointer">
                    Agile Tools
                  </span>
                  . Lets you add story points to cards (integrates with Corrello) and set WIP limits for individual lists.
                </p>
            
                <p>
                  <span className="text-blue-600 underline cursor-pointer">
                    Burndown Charts for Trello
                  </span>
                  . The best Burndown Charts for Trello, with daily Slack and Email updates.
                </p>
            
                <p>
                  <span className="text-blue-600 underline cursor-pointer">
                    Kanban WIP
                  </span>
                  . Allows you to set up WIP limits which will apply across multiple lists.
                </p>
            
                <p>
                  <span className="text-blue-600 underline cursor-pointer">
                    Import to Trello by Blue Cat
                  </span>{" "}
                  lets you easily import CSV, Excel and Google Sheets into Trello.
                </p>
            
              </div>
            </div>
            {/* EXPORTS SECTION */}
            <div className="mt-10 space-y-3">
            
              <h3 className="text-lg font-semibold text-blue-600 underline cursor-pointer hover:text-blue-800">
                Exports for Trello
              </h3>
            
              <p className="text-sm text-gray-700 leading-relaxed">
                Export your data from Trello, manually for free or pay to get scheduled
                exports direct to your inbox. Our{" "}
                <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
                  Exports Power-Up
                </span>{" "}
                does just that.
              </p>
            </div>
            
            {/* GUIDES SECTION */}
            <div className="mt-8 space-y-3">
            
              <h2 className="text-2xl font-semibold">
                Our Trello guides
              </h2>
            
              <p className="text-sm text-gray-700">
                See our guide to{" "}
                <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
                  every free Trello power-up
                </span>
              </p>
            
              <p className="text-sm text-gray-700">
                Check out our reviews of{" "}
                <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
                  every Trello reporting power-up
                </span>
              </p>
            
            </div>
            </div>
=======
  {/* Top Info */}
  <p className="text-sm font-medium">
    One of the{" "}
    <span className="text-blue-600 underline cursor-pointer font-semibold">
      fastest growing power-ups of 2023
    </span>
  </p>

  <p className="text-sm font-medium">
    From the creators of{" "}
    <span className="text-blue-600 underline cursor-pointer font-semibold">
      Blue Cat Reports
    </span>
  </p>

  {/* Testimonials */}
  <div className="border-l-4 border-gray-300 pl-4 italic text-sm space-y-5 font-medium">

    <div>
      <p>
        "This instantly became one of my favorite Trello Powerups. Knowing how long individual tasks have remained in a given state (list) is incredibly powerful for our use case."
      </p>
      <p className="not-italic font-semibold mt-2">
        Natalie Heker <span className="font-normal">[Success Academies]</span>
      </p>
    </div>

    <div>
      <p>"Like Card Aging but done well"</p>
      <p className="not-italic font-semibold mt-2">
        Tom Sandford <span className="font-normal">[Founder Future Content]</span>
      </p>
    </div>

    <div>
      <p>
        "We utilized this board HEAVILY for full scale kanban production cards. Time in List was a game changer..."
      </p>
      <p className="not-italic font-semibold mt-2">
        Robby Baker <span className="font-normal">[Marketing Director Holtz Leather co.]</span>
      </p>
    </div>

  </div>

  {/* Get Started */}
  <div>
    <h2 className="text-xl font-bold mb-2">
      Get started right now
    </h2>

    <p className="text-sm font-medium">
      It couldn't be simpler!{" "}
      <span className="font-semibold">
        Add the Time In List Power-Up
      </span>{" "}
      to your boards and see...
    </p>
  </div>

  {/* Feature Section */}
  <div>
    <h3 className="text-lg font-semibold mb-2">
      How long each card has been in the current list
    </h3>

    <p className="text-sm text-gray-600 font-medium">
      On the front of every card, and (optionally) how long it has been on the current board.
    </p>
  </div>

{/* Bullet Points */}
  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 font-medium">
    <li>Spot slow cards</li>
    <li>Track performance against SLAs</li>
    <li>See which tasks need to get moving today</li>
  </ul>
  {/* Feature Image */}
<div className="mt-4">
  <img
    src={project}
    alt="project"
    className="w-full h-64 sm:h-[400px] md:h-[420px] object-cover rounded-md"
  />
</div>
{/* Feature Section */}
  <div>
    <h3 className="text-lg font-semibold mb-2">
      How long cards spent in past lists
    </h3>

    <p className="text-sm text-gray-600 font-medium">
      On the back of your cards.
    </p>
  </div>

{/* Bullet Points */}
  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 font-medium">
    <li>For each card, see which part of the process took the longest</li>
    <li>We load and display a full history for all cards as soon as the Power-Up is enabled</li>
  </ul>
  {/* Feature Image */}
<div className="mt-4">
  <img
    src={Mock}
    alt="Mock"
    className="w-full h-48 sm:h-[250px] md:h-[300px] object-cover rounded-md"
  />
</div>

 {/* Feature Section*/}
<div>
  <h3 className="text-lg font-semibold mb-0">
    Charts showing aggregate data
  </h3>

{/* Bullet Points */}
  <ul className="list-disc pl-5 text-gray-700 text-sm font-medium mt-0">
    <li>See which parts of your process are consistently the slowest</li>
    <li>Get averages per list</li>
    <li>Filter <span className="font-bold">member</span> or{" "}
      <span className="font-bold">label</span></li>
  </ul>
</div>
  {/* Feature Image */}
<div className="mt-4">
  <img
    src={past}
    alt="past"
    className="w-full h-64 sm:h-[400px] md:h-[420px] object-cover rounded-md"
  />
</div>
 {/* Feature Section*/}
<div>
  <h3 className="text-lg font-semibold mb-0">
    Time In List for Trello is the Power-Up your team is missing right now.
  </h3>

{/* Bullet Points */}
  <ul className="list-disc pl-5 text-gray-700 text-sm font-medium mt-0">
    <li>Spot the stuck cards, <span className="font-bold">who needs help today?</span></li>
    <li>See which parts of your process take the longest, <span className="font-bold">How could you go faster in future?</span></li>
    <li>Track performance against SLAs</li>
    <li>See which cards never make it off your todo list</li>
    <li>Measure your process and improve :)</li>
  </ul>
</div>
{/* PRICING SECTION */}
<div className="space-y-4 mt-8">

  <p className="text-sm font-medium text-gray-800">
    Start your free trial{" "}
    <span className="font-semibold">
      add Time In List to your Trello boards today
    </span>
  </p>

  <div>
    <h2 className="text-xl font-semibold mb-2">Pricing</h2>

    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 font-medium">
      <li>Monthly $3/member on your board/s</li>
      <li>Annual (2 months free!) $30/member</li>
      <li>
        Note: the same member on multiple boards only counts once
      </li>
    </ul>
  </div>

  <p className="text-sm text-gray-700">
    Got questions? Drop us a line at{" "}
    <span className="text-blue-600 underline cursor-pointer">
      support@timeinlist.com
    </span>{" "}
    :)
  </p>
</div>

{/* OTHER POWER-UPS SECTION */}
<div className="mt-10 space-y-4">

  <h2 className="text-2xl font-semibold">
    Our other Power-Ups for Trello
  </h2>

  <div className="space-y-3 text-sm text-gray-700 leading-relaxed">

    <p>
      <span className="font-semibold">Blue Cat </span>
      <span className="text-blue-600 underline cursor-pointer">
        Trello Reporting
      </span>
      . Our general purpose Reporting solution for Trello. Build the charts you want, drag and drop to create the dashboard how your team needs it.
    </p>

    <p>
      <span className="text-blue-600 underline cursor-pointer">
        Trello Forms
      </span>
      . The easiest to use, most complete Forms solution for Trello.
    </p>

    <p>
      <span className="font-semibold">Corrello </span>
      <span className="text-blue-600 underline cursor-pointer">
        Scrum and Kanban charts
      </span>
      . Burndowns, CFDs, Cycle Time, Release Forecasts and more.
    </p>

    <p>
      <span className="text-blue-600 underline cursor-pointer">
        Agile Tools
      </span>
      . Lets you add story points to cards (integrates with Corrello) and set WIP limits for individual lists.
    </p>

    <p>
      <span className="text-blue-600 underline cursor-pointer">
        Burndown Charts for Trello
      </span>
      . The best Burndown Charts for Trello, with daily Slack and Email updates.
    </p>

    <p>
      <span className="text-blue-600 underline cursor-pointer">
        Kanban WIP
      </span>
      . Allows you to set up WIP limits which will apply across multiple lists.
    </p>

    <p>
      <span className="text-blue-600 underline cursor-pointer">
        Import to Trello by Blue Cat
      </span>{" "}
      lets you easily import CSV, Excel and Google Sheets into Trello.
    </p>

  </div>
</div>
{/* EXPORTS SECTION */}
<div className="mt-10 space-y-3">

  <h3 className="text-lg font-semibold text-blue-600 underline cursor-pointer hover:text-blue-800">
    Exports for Trello
  </h3>

  <p className="text-sm text-gray-700 leading-relaxed">
    Export your data from Trello, manually for free or pay to get scheduled
    exports direct to your inbox. Our{" "}
    <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
      Exports Power-Up
    </span>{" "}
    does just that.
  </p>
</div>

{/* GUIDES SECTION */}
<div className="mt-8 space-y-3">

  <h2 className="text-2xl font-semibold">
    Our Trello guides
  </h2>

  <p className="text-sm text-gray-700">
    See our guide to{" "}
    <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
      every free Trello power-up
    </span>
  </p>

  <p className="text-sm text-gray-700">
    Check out our reviews of{" "}
    <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
      every Trello reporting power-up
    </span>
  </p>

</div>
</div>
>>>>>>> bluecat


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

export default Bluecat
