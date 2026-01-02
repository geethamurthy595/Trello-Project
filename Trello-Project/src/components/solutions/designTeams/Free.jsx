import React from "react";

const Free = () => {
  return (
    <div className="w-[270px] h-[650px] ml-16 p-5 pt-2  bg-white border border-gray-400  shadow-md font-[\'Charlie_Display\']] flex flex-col justify-between ">
      <div className=" pt-1 flex flex-col h-full ">
    
        <h3 className="text-[16px] mb-4 font-medium text-gray-900">FREE</h3>
        <div><span>$</span><span  className="mt-6 text-5xl font-medium text-gray-900">0</span> <span className="text-[16px] font-normal">USD</span></div>
        <p className="mt-2 text-[12px] text-gray-500">
        Free for up to 10 collaborators per Workspace
        </p>
        <p className="text-[16px] text-[#091E42] mt-6  font-[\'Charlie_Display\']] mb-20 ">
           Capture your to-dos, get organized, and get sh*t done.
        </p><br /><br /><br /><br /><br />
      <button className="border-1 border-blue-500 w-35 p-3 rounded-[5px] hover:cursor-pointer">Get started</button><br />
      
    </div>
    </div>
  );
};

export default Free;