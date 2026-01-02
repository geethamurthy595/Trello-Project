import React, { useState } from "react";
import { RiGridFill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import Cloud from "./Cloud";
import Resource from "./Resource";
import { Link } from "react-router-dom";

const HelpNavbar = () => {
  let [menu,setMenu] = useState(false);
  let [Resourcemenu,setResourceMenu] = useState(false);


  let handndleMenu = ()=>{
    menu?setMenu(false):setMenu(true);
    setResourceMenu(false);
  }
  let handndleResourceMenu = ()=>{
    Resourcemenu?setResourceMenu(false):setResourceMenu(true);
    setMenu(false);
  }
  return (
    <>
      <nav className="relative">
        <div className="h-[110px] w-full bg-blue-700 px-35 flex items-center justify-between">
          <div className="flex items-center">
            <RiGridFill className="text-4xl cursor-pointer text-white" onClick={handndleMenu} />
            <Link to="/help" className="text-2xl text-white font-semibold ml-5 hover:underline">
              Trello support
            </Link>
            <Link to="/trello/resources/" className="text-medium text-white font-xs ml-3  px-2 py-2 hover:bg-[#0747A6] cursor-pointer">
              Documentation
            </Link>
            <h3 onClick={handndleResourceMenu} className="text-medium text-white font-xs ml-5 flex px-2 py-2 hover:bg-[#0747A6] cursor-pointer">
              Resources
            <RiArrowDropDownLine className="text-2xl text-white" />
            </h3>
          </div>
          <div className="flex items-center">
            <h3 className="text-medium text-white font-xs px-2 py-2 hover:bg-[#0747A6] cursor-pointer">
              Contact Us
            </h3>
            <IoMdSearch className="text-2xl text-white" />
            <h3 className="text-medium text-white font-xs px-2 py-2 hover:bg-[#0747A6] ml-5 cursor-pointer">
              Sign In
            </h3>
          </div>
        </div>
      </nav>
      {
        menu?<Cloud/>:<></>
      }
      {
        Resourcemenu?<Resource/>:<></>
      }
    </>
  );
};

export default HelpNavbar;
