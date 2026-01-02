import React from "react";
import Rightimg from "../assets/right.svg"

const Standard = () => {
  return (
    <div className="w-[270px] h-[540px]  p-5 pt-2  bg-white border shadow-md font-[\'Charlie_Display\']] flex flex-col justify-between ">
      <div className=" pt-1 flex flex-col h-full">
    
        <h3 className="text-[16px] mb-4 font-medium text-gray-900">STANDARD</h3>
        <div><span>$</span><span  className="mt-6 text-5xl font-medium text-gray-900">5</span> <span className="text-[16px] font-normal">USD</span></div>
        <p className="mt-2 text-[12px] text-gray-500">
        Per user/month if billed annually ($6 billed monthly)
        </p>
        <p className="text-[16px] text-[#091E42] mt-6  font-[\'Charlie_Display\']] mb-20 ">
           Get more stuff done with unlimited boards, card mirroring, and more automation.
        </p><br /><br /><br />
      <button className="border-1 border-blue-500 w-35 p-3 rounded-[5px]">Sign up now</button>
       <br />
       <a className="text-blue-600 text-lg font-medium  underline" href="">Learn more about Standard</a>
      </div>
      </div>
  )}
  export default Standard