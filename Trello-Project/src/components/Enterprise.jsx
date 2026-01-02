import React, { useState } from "react";
import Rightimg from "../assets/right.svg";
import Ilogo from "../assets/i-logo.png"

const Enterprise = () => {
  const [tusd, setTusd] = useState(50);
  const [fusd, setFusd] = useState(17.5);
  const [susd, setSusd] = useState(210);

  const handleRangeChange = (e) => {
    const value = Number(e.target.value);
    let newFusd = 17.5;
    let newSusd = 210;

    if (value > 250) {
      const ratio = (value - 250) / (5000 - 250);
      newFusd = 17.5 - ratio * (17.5 - 7.38);
      newSusd = 210 - ratio * (210 - 88.5);
    }

    setTusd(value);
    setFusd(newFusd);
    setSusd(newSusd);
  };

  return (
    <div className="w-[277px] h-[540px] ml-0 p-5 pt-2 bg-white border border-gray-300  shadow-md font-[\'Charlie_Display\'] flex flex-col justify-between">
      <div className="pt-1 flex flex-col h-full">
        <h3 className="text-[16px] mb-4 font-medium text-gray-900">ENTERPRISE</h3>
        <div>
          <span>$</span>
          <span className="mt-6 text-3xl font-bold text-gray-900">{fusd.toFixed(2)}</span>
          &nbsp;&nbsp;<span>USD</span>
        </div>
        <p className="mt-2 text-[12px] text-gray-500">
          Per user/month - billed annually (${susd.toFixed(2)} annual price per user)
        </p>
        <p className="text-[16px] text-[#091E42] mt-6 mb-3 font-['Charlie_Display']">
          Add enterprise-grade security and controls. This plan includes Atlassian Guard Standard and 24/7 Enterprise Admin support.
        </p>
        <p className="text-[20px] text-[#091e42] mt-2 font-['Charlie_Display']">
          Est. cost for{" "}
          <span className="inline-block border-b-2 w-20 pl-5 pr-5 font-bold">{tusd}</span> users
        </p>
        <input
          type="range"
          id="userslider"
          min={50}
          max={5000}
          value={tusd}
          onChange={handleRangeChange}
          className="mt-1 mb-3 bg-[#ffffff]"
        />


        {tusd >= 5000 && (
           <ul>
             <li className="flex items-start mb-2">
            <img src={Ilogo} className="w-3 h-3 mt-1 mr-2" alt="bullet" />
            <span className="text-[16px] text-[091e42]">For organizations with more than 5,000 users, please contact sales for pricing</span>
          </li>
           </ul>
        )}<br/><br/> <br />

        <button className="border-1 border-blue-500 w-35 p-3 rounded-[5px]">Contact sales </button><br />
        <a className="text-blue-600 text-lg font-semibold  underline" href="">Learn more about Enterprise</a>
        </div>
        </div>
  )
        }
        export default Enterprise