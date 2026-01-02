import React from "react";
import Rightimg from "../../assets/right.svg"

const Free = () => {
  return (
    <div className="w-[270px] h-[1150px] ml-16 p-5 pt-2  bg-white border border-gray-400 shadow-md font-[\'Charlie_Display\']] flex flex-col justify-between ">
      <div className=" pt-1 flex flex-col h-full">
    
        <h3 className="text-[16px] mb-4 font-medium text-gray-900">FREE</h3>
        <div><span>$</span><span  className="mt-6 text-5xl font-medium text-gray-900">0</span> <span className="text-[16px] font-normal">USD</span></div>
        <p className="mt-2 text-[12px] text-gray-500">
        Free for up to 10 collaborators per Workspace
        </p>
        <p className="text-[16px] text-[#091E42] mt-6  font-[\'Charlie_Display\']] mb-20 ">
           Capture your to-dos, get organized, and get sh*t done.
        </p><br /><br /><br /><br /><br />
      <button className="border-1 hover:bg-[#E6FCFF] transition-all border-blue-500 w-35 p-3 rounded-[5px]">Get started</button><br />
      <hr className="text-[#ccc]" ></hr>
             <p className="mt-5 text-[16px] text-[#192E42] font-bold">INCLUDED IN FREE:</p>
<ul class="list-none pl-0 mt-4 space-y-2 text-[16px]  mb-[110px]">
  <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Atlassian Intelligence (AI)</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Up to 10 boards per Workspace</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Quickly capture to-dos from email, Slack, and Teams</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Inbox</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Unlimited Power-Ups per board</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Unlimited storage (10MB/file)</span>
  </li>
     <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>250 Workspace command runs per month</span>
  </li>
     <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Custom backgrounds & stickers</span>
  </li>
    <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Custom backgrounds & stickers</span>
  </li>
  <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>iOS and Android mobile apps</span>
  </li>
  <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>2-factor authentication</span>
  </li>
    </ul>
    </div>
    </div>
  );
};

export default Free;