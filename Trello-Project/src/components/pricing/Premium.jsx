import React from "react";
import Rightimg from "../../assets/right.svg"

const Premium = () => {
  return (
    <div className="w-[270px] h-[1150px] ml-0 p-5 pt-2  bg-white border-[2px] border-blue-400 shadow-md font-[\'Charlie_Display\']] flex flex-col justify-between ">
      <div className=" pt-1 flex flex-col h-full">
    
        <h3 className="text-[16px] mb-4 font-medium text-gray-900">PREMIUM</h3>
        <div><span>$</span><span  className="mt-6 text-5xl font-medium text-gray-900">10</span> <span className="text-[16px] font-normal">USD</span></div>
        <p className="mt-2 text-[12px] text-gray-500">
        Per user/month if billed annually ($12.50 billed monthly)
        </p>
        <p className="text-[16px] text-[#091E42] mt-6  font-[\'Charlie_Display\']] mb-20 ">
           Add AI to your boards and admin controls to your toolkit. Plus, get more perspective with views.
        </p><br /><br /><br />
      <button className="border-1 border-blue-600 w-35 p-3 rounded-[5px] bg-[#E6FCFF] hover:bg-white">Try for free</button><br />
      <hr className="text-[#ccc]" ></hr>
             <p className="mt-5 text-[16px] text-[#192E42] font-bold">EVERYTHING IN STANDARD, PLUS:</p>
<ul class="list-none pl-0 mt-4 space-y-2 text-[16px]  mb-[110px]">
  <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Atlassian Intelligence (AI)</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Views: Calendar, Timeline, Table, Dashboard, and Map</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Workspace views: Table and Calendar</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Unlimited Workspace command runs</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Admin and security features</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Workspace-level templates</span>
  </li>
     <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Collections</span>
  </li>
     <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Observers</span>
  </li>
    <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Simple data export</span>
  </li>
  <br /><br /><br /><br /><br /><br /><br />
    <a href="https://trello.com/premium " className="underline text-blue-900 ">Learn more about Premium</a>
    </ul>
    
    </div>
    </div>
  );
};

export default Premium;