import React from "react";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { CgTemplate } from "react-icons/cg";
import { TfiHome } from "react-icons/tfi";
import { FiPlus } from "react-icons/fi";

const Sidebar = () => {
  const { setShowChangeBackground } = useBackground();
  return (
    <>
      <div className="h-screen w-64 bg-gray-900">
        <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
          <br />
          <br />

          <nav className="flex-1 space-y-3">
            <a
              href=""
              className=" px-3 py-2 rounded hover:bg-gray-700 flex items-center space-x-4 gap-3"
            >
              <TbLayoutBoardSplit className="h-6 w-6" /> Boards
            </a>
            <a
              href=""
              className=" px-3 py-2 rounded hover:bg-gray-700 flex items-center space-x-4 gap-3"
            >
              <CgTemplate className="h-6 w-6" /> Templates
            </a>
            <a
              href=""
              className=" px-3 py-2 rounded hover:bg-gray-700 flex items-center space-x-4 gap-3 "
            >
              <TfiHome className="h-6 w-6" /> Home
            </a>
            <hr />
            <a
              href=""
              className=" px-3 py-2 rounded hover:bg-gray-700 flex items-center space-x-4 gap-3"
            >
              <FiPlus className="h-6 w-6" /> Create a Workspace
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
