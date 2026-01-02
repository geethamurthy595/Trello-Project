import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaLink } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Shareboard = ({close}) => {
   const [isClicked, setIsClicked] = useState(false);
   
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      close();
    }, 200);
  };

  return (
    <>
      <div className="mx-auto mt-13 flex items-center justify-center p-4 md:p-6 md:pb-2 w-full max-w-[600px] bg-neutral-700 rounded-xl pt-3">
        <div className="w-full">

          <div className="flex justify-between items-center mb-2">
            <p className="text-2xl text-[lightgray]">Share board</p>
            <button onClick={handleClick} className="cursor-pointer text-[lightgray]">
                {isClicked ? <MdOutlineCancel size={30} /> : <MdCancel size={30} />}
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <input
              type="text"
              placeholder="Email address or name"
              className="border border-gray-400 bg-neutral-800 rounded-sm py-1 pl-2 
                         focus:border-2 focus:bg-neutral-800 focus:border-blue-500 outline-none w-full md:w-85 
                         placeholder:text-gray-400 hover:bg-neutral-700 caret-white text-[lightgray]"
            />
            <div className="flex items-center px-2 py-1 border border-gray-600 
                            rounded-sm cursor-pointer justify-center w-full md:w-auto">
              <span className="text-[lightgray]">Member</span>
              <RiArrowDropDownLine size={26} className="ml-1 text-[lightgray]" />
            </div>

            <button className="w-full md:w-20 py-1.5 rounded-sm bg-[royalblue] 
                               hover:bg-[skyblue] cursor-pointer font-medium">
              Share
            </button>
          </div>

          <div className="h-5"></div>

          <div className="flex items-start gap-2">
            <div className="bg-[gray] w-8 h-8 rounded flex items-center justify-center">
              <FaLink size={12} className="text-[lightgray]"/>
            </div>

            <div className="-mt-1 -space-y-1">
              <p className="text-[lightgray] text-sm">Share this board with a link</p>
              <button className="text-xs font-semibold underline text-blue-500 cursor-pointer">
                Create link
              </button>
            </div>
          </div>

          <div className="flex border-b mt-4">
            <div className="pb-2 border-b-2 border-blue-500 cursor-pointer">
              <span className="text-blue-500">Board members</span>
              <span className="px-2 ml-1 text-xs bg-[lightgray] rounded-sm">1</span>
            </div>

            <div className="pb-2 ml-4 cursor-pointer">
              <span className="text-[lightgray]">Join requests</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between md:items-center mt-3">

            <div className="flex items-start md:items-center">
              <div className="w-8 h-8 bg-[orange] font-semibold rounded-full 
                              flex items-center justify-center">
                <span>SK</span>
              </div>

              <div className="ml-3 text-[lightgray]">
                <p>Sadhu Hemanth Kumar</p>
                <p className="text-xs">@sadhuhemanthkumar</p>
                <p className="text-xs">Workspace admin</p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end w-full md:w-auto mt-3 md:mt-0">
              <button className="flex items-center border border-gray-600 text-[lightgray] 
                                 px-2 py-1 rounded-sm w-24 justify-center cursor-pointer">
                Admin
                <RiArrowDropDownLine size={20} className="ml-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Shareboard;
