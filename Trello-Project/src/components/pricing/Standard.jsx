import React from "react";
import Rightimg from "../../assets/right.svg"

const Standard = () => {
  return (
    <div className="w-[270px] h-[1150px]  p-5 pt-2  bg-white border border-gray-400 shadow-md font-[\'Charlie_Display\']] flex flex-col justify-between ">
      <div className=" pt-1 flex flex-col h-full">
    
        <h3 className="text-[16px] mb-4 font-medium text-gray-900">STANDARD</h3>
        <div><span>$</span><span  className="mt-6 text-5xl font-medium text-gray-900">5</span> <span className="text-[16px] font-normal">USD</span></div>
        <p className="mt-2 text-[12px] text-gray-500">
        Per user/month if billed annually ($6 billed monthly)
        </p>
        <p className="text-[16px] text-[#091E42] mt-6  font-[\'Charlie_Display\']] mb-20 ">
           Get more stuff done with unlimited boards, card mirroring, and more automation.
        </p><br /><br /><br />
      <button className="border-1 border-blue-500 hover:bg-[#E6FCFF] transition-all w-35 p-3 rounded-[5px]">Sign up now</button><br />
      <hr className="text-[#ccc]" ></hr>
             <p className="mt-5 text-[16px] text-[#192E42] font-bold">EVERYTHING IN FREE, PLUS:</p>
<ul class="list-none pl-0 mt-4 space-y-2 text-[16px]  mb-[110px]">
  <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Unlimited boards</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Quickly capture to-dos from email, Slack, and Teams — powered by AI</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Planner</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Advanced checklists</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Card mirroring</span>
  </li>
   <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Custom Fields</span>
  </li>
     <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>List colors</span>
  </li>
     <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Collapsible lists</span>
  </li>
    <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Unlimited storage (250MB/file)</span>
  </li>
  <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>1,000 Workspace command runs per month</span>
  </li>
  <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Single board guests</span>
  </li>
  <li class="flex items-start mb-2">
    <img src={Rightimg} class="w-4 h-4 mt-1 mr-2" alt="bullet" />
    <span>Saved searches</span>
  </li><br /><br /><br />
    <a href="https://trello.com/premium " className="underline text-blue-900 ">Learn more about Standard</a>
    </ul>
    
    </div>
    </div>
  );
};

export default Standard;