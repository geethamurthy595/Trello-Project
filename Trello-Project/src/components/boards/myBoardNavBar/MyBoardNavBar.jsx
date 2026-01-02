import React, { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import trellologo from "../../../assets/Trello_LogoMarkOne.svg";
import { IoIosSearch } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";

import MoreFromAtlassian from "./MoreFromAtlassian";
import Community from "./Community";
import Notifications from "./Notifications";
import Information from "./Information";
import Account from "./Account";
import { Link } from "react-router-dom";
import Create from "./Create";

const MyBoardNavBar = () => {
  const [open, setOpen] = useState(false);
  const [openCom, setOpenCom] = useState(false);
  const [notify, setNotify] = useState(false);
  const [info, setInfo] = useState(false);
  const [acc, setAcc] = useState(false);
  const [create,setCreate]=useState(false);

  const closeAll = () => {
    setOpen(false);
    setOpenCom(false);
    setNotify(false);
    setInfo(false);
    setAcc(false);
    setCreate(false);
  };

  return (
    <>
      <nav className="bg-black h-12 text-zinc-300">
        <ul className="flex items-center gap-4 p-2">
          {/* Grid */}
          <li className="p-1 hover:bg-[#242528] rounded">
            <HiOutlineViewGrid title="More from Atlassian"
              size={20}
              onClick={() => {
                closeAll();
                setOpen(true);
              }}
            />
          </li>

          {/* Logo */}
          <Link className="flex hover:bg-[#242528]" >
            <img src={trellologo} alt="Trello Logo" className="h-6 w-6" />
            <p className="ml-2">Trello</p>
          </Link>

          {/* Search */}
          <li className="flex border rounded border-gray-100 ml-45">
            <IoIosSearch size={20} className="mt-2 ml-3" />
            <input
              type="text"
              placeholder="Search"
              className="bg-black p-1 w-180 outline-none rounded ml-2"
            />
          </li>

          {/* Create */}
          <li title='share your thoughts on Trello'> 
            <button className="bg-blue-500 hover:bg-blue-300 p-1 rounded w-19" 
            onClick={()=>{
              closeAll();
              setCreate(true);
            }}>
              Create 
            </button>
          </li>

          {/* Community */}
          <li className="hover:bg-[#242528] p-1 rounded">
            <GrAnnounce
              size={20}
              className="ml-50"
              onClick={() => {
                closeAll();
                setOpenCom(true);
              }}
            />
          </li>

          {/* Notifications */}
          <li title='Notifications' className="hover:bg-[#242528] p-1 rounded">
            <IoMdNotificationsOutline
              size={20}
              onClick={() => {
                closeAll();
                setNotify(true);
              }}
            />
          </li>

          {/* Information */}
          <li title='Information' className="hover:bg-[#242528] p-1 rounded">
            <BsQuestionCircle
              size={20}
              onClick={() => {
                closeAll();
                setInfo(true);
              }}
            />
          </li>

          {/* Account */}
          <li title='Account' className="hover:bg-[#242528] p-1 rounded">
            <MdOutlineAccountCircle
              size={22}
              onClick={() => {
                closeAll();
                setAcc(true)
              }}
            />
          </li>
        </ul>
      </nav>

      {/* More From Atlassian */}
      {open && (
        <div className="fixed inset-0 z-50" onClick={closeAll}>
          <div
            className="absolute top-14 left-4"
            onClick={(e) => e.stopPropagation()}
          >
            <MoreFromAtlassian />
          </div>
        </div>
      )}

      {/* Community */}
      {openCom && (
        <div className="fixed inset-0 z-50" onClick={closeAll}>
          <div
            className="absolute top-14 right-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Community />
          </div>
        </div>
      )}

      {/* Notifications */}
      {notify && (
        <div className="fixed inset-0 z-50" onClick={closeAll}>
          <div
            className="absolute top-14 right-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Notifications />
          </div>
        </div>
      )}

      {/* Information */}
      {info && (
        <div className="fixed inset-0 z-50" onClick={closeAll}>
          <div
            className="absolute top-14 right-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Information />
          </div>
        </div>
      )}

      {/* Account */}
      {acc && (
        <div className="fixed inset-0 z-50" onClick={closeAll}>
          <div
            className="absolute top-14 right-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Account />
          </div>
        </div>
      )}

      {/* Create */}
      {create && (
        <div className="fixed inset-0 z-50" onClick={closeAll}>
          <div
            className="absolute top-14 right-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Create />
          </div>
        </div>
      )}
    </>
  );
};

export default MyBoardNavBar;
