import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DevelopersSubNavbar = () => {
  return (
    <div className="w-full  bg-white border-b  pl-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <nav className="h-12 flex items-center gap-9 text-sm font-medium text-gray-700 overflow-x-auto whitespace-nowrap pl-5">
          
          <p className=" flex text-xl  items-center">
            Trello
          </p>

          <a className="hover:text-blue-600 cursor-pointer mt-1 flex items-center">
            Guides
          </a>

          <div className="relative group">
            <button className="flex items-center cursor-pointer  mt-1 hover:text-blue-600">
              Reference
              <FaAngleDown className="ml-1 text-xs" />
            </button>
          </div>

          <Link
            to="changelog/"
            className="hover:text-blue-600 flex mt-1 cursor-pointer items-center"
          >
            Changelog
          </Link>

        </nav>

      </div>
    </div>
  );
};

export default DevelopersSubNavbar;