import React from "react";
import Rightimg from "../../../../assets/j.svg"

const Premium = () => {
  return (
    <div className="w-[270px] h-[600px] ml-0 p-5 pt-2  bg-white border-[2px] border-blue-400 shadow-md font-[\'Charlie_Display\']] flex flex-col justify-between ">
      <div className=" pt-1 flex flex-col h-full">
    
        <h3 className="text-[16px] mb-4 font-medium text-gray-900">PREMIUM</h3>
        <div><span>$</span><span  className="mt-6 text-5xl font-medium text-gray-900">10</span> <span className="text-[16px] font-normal">USD</span></div>
        <p className="mt-2 text-[12px] text-gray-500">
        Per user/month if billed annually ($12.50 billed monthly)
        </p>
        <p className="text-[16px] text-[#091E42] mt-6  font-[\'Charlie_Display\']] mb-20 ">
           Add AI to your boards and admin controls to your toolkit. Plus, get more perspective with views.
        </p><br /><br /><br />
      <button className="border-1 border-blue-600 w-35 p-3 rounded-[5px] bg-[#E6FCFF] hover:border-blue-400">Try for free</button><br />
    <a href="https://trello.com/premium " className="underline text-blue-900 ">Learn more about Premium</a>
          
    </div>
    </div>
  );
};

export default Premium;