import React, { useState, useRef, useEffect } from "react";
import { FaChartSimple } from "react-icons/fa6";
import { RxRocket } from "react-icons/rx";
import { IoFlashOutline } from "react-icons/io5";
import { MdOutlineSegment } from "react-icons/md";

import { SlCalender } from "react-icons/sl";
import { CiViewTable } from "react-icons/ci";
import { CiViewTimeline } from "react-icons/ci";
import { TfiDashboard } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { MdLock } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaCalendarTimes, FaExclamationCircle } from "react-icons/fa";
import { TbClockStar } from "react-icons/tb";
import { LiaClockSolid } from "react-icons/lia";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import ProfileDropdown from "./ProfileDropdown";
import People from "./People";
import SideMenu from "./SideMenu";
import StarTooltip from "./StarTooltip";
import ReactModal from "react-modal";
import Shareboard from "../sharepopups/Shareboard";
import { HiOutlineUserAdd } from "react-icons/hi";

// Bind modal root
ReactModal.setAppElement("#root");
const Taskbar = ({ title = "My Trello Board" }) => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const dropdownRef = useRef(null);

  const [openShare, setOpenShare] = useState(false);

  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      padding: 0,
      border: "none",
      background: "transparent",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 1000,
    },
  };

  const handleOpen = () => {
    setOpenShare(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setOpenShare(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const views = [
    { name: "Table", icon: CiViewTable, ic: MdLock },
    { name: "Calendar", icon: SlCalender, ic: MdLock },
    { name: "Timeline", icon: CiViewTimeline, ic: MdLock },
    { name: "Dashboard", icon: TfiDashboard, ic: MdLock },
    { name: "Map", icon: LuMapPin, ic: MdLock },
  ];
  const filters = [
    { label: "No dates", icon: <FaCalendarTimes /> },
    { label: "Overdue", icon: <FaExclamationCircle /> },
    { label: "Due in the next day", icon: <LiaClockSolid /> },
    { label: "Due in the next week", icon: <TbClockStar /> },
  ];

  return (
    <>
      <nav className="w-full overflow-hidden bg-[#2c2655] text-white flex items-center justify-between px-5 py-3 shadow-md">
        <div className="flex items-center gap-3 relative">
          <span className="text-lg font-semibold">{title}</span>
          &nbsp;&nbsp;
          {/* Chart Icon + Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button className="flex" onClick={() => setOpen(!open)}>
              <FaChartSimple
                size={24}
                className="cursor-pointer hover:opacity-70"
              />
              <IoIosArrowDown className="mt-2" />
            </button>

            {open && (
              <div className="absolute left-0 mt-2 min-w-max bg-black text-white shadow-lg rounded-lg p-5 z-50">
                <h3 className="text-lg font-semibold mb-4">
                  Upgrade for Views
                </h3>

                <table className="text-white w-full">
                  <tbody className="space-y-2">
                    <tr className="hover:bg-gray-800 cursor-pointer">
                      <td className="w-10 py-2">
                        <FaChartSimple />
                      </td>
                      <td className="py-2 w-full">Board</td>
                      <td className="w-10"></td>
                    </tr>

                    {views.map((item) => {
                      const Icon = item.icon;
                      const Icon1 = item.ic;
                      return (
                        <tr
                          key={item.name}
                          className="opacity-50 hover:opacity-100 hover:bg-gray-800 cursor-pointer"
                        >
                          <td className="w-10 py-2">
                            <Icon />
                          </td>
                          <td className="py-2 w-full">
                            &nbsp;&nbsp;{item.name}
                          </td>
                          <td className="w-10">
                            <Icon1 />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <p className="text-gray-300">See your works in new ways</p>
                <br />
                <p className="text-gray-300">
                  View key timelines,assignments,data, <br />
                  and more directly from your trello <br /> board with Trello
                  premium
                </p>

                <button className="mt-6 bg-indigo-500 w-full text-white py-2 rounded-md hover:bg-indigo-600">
                  Upgrade Workspace to Premium
                </button>

                <p className="mt-3 text-sm text-gray-500 text-center cursor-pointer underline">
                  Learn more about Trello Premium
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex  items-center gap-4">
          <ProfileDropdown />

          <div className="relative">
            {/* Rocket Icon Button */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 hover:bg-gray-200 rounded-md"
            >
              <RxRocket className="text-xl text-white" />
            </button>

            {isOpen && (
              <div className="absolute top-12 right-0 bg-black text-white shadow-xl rounded-xl w-80 p-5 z-50 fade-in">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-lg"
                >
                  <IoClose />
                </button>

                <h2 className="text-center text-lg font-semibold mb-4">
                  Power-Ups
                </h2>

                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center text-white">
                    <img
                      src="https://trello.com/assets/42f8533548e4eeb72589.png"
                      alt=""
                    />
                  </div>
                </div>

                <p className="text-center text-sm mb-5">
                  Bring additional features to your boards and integrate apps
                  like Google Drive, Slack, and more.
                </p>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2">
                  Add Power-Ups
                </button>
              </div>
            )}
          </div>

          {/* flashicon */}
          <div className="relative">
            {" "}
            <button
              onClick={() => setOpenPopup(true)}
              className="p-2 rounded-lg hover:bg-gray-200"
            >
              {" "}
              <IoFlashOutline size={22} className="text-white" />{" "}
            </button>{" "}
            {/* Popup */}{" "}
            {openPopup && (
              <div className="absolute top-12 right-0 bg-black text-white rounded-xl p-5 w-80 shadow-xl">
                {" "}
                {/* Close Button */}{" "}
                <button
                  onClick={() => setOpenPopup(false)}
                  className="absolute top-3 right-3 text-gray-300 hover:text-white"
                >
                  {" "}
                  <IoClose size={20} />{" "}
                </button>{" "}
                <h2 className="text-lg font-semibold mb-4 text-center">
                  Automation
                </h2>{" "}
                <div className="space-y-4 text-sm">
                  {" "}
                  <div>
                    {" "}
                    <p className="font-medium">⚙ Rules</p>{" "}
                    <p>
                      Create rules that automatically respond to actions,
                      schedules, or a card's due date.
                    </p>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="font-medium">🎛 Buttons</p>{" "}
                    <p>
                      Create custom buttons on the back of every card or at the
                      top of the board.
                    </p>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="font-medium">📧 Email reports</p>{" "}
                    <p>
                      Set up email reports like weekly summary of cards due
                      within 7 days.
                    </p>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="font-medium">📢 Send feedback</p>{" "}
                    <p>Help us improve your automations.</p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            )}{" "}
          </div>
          {/* <MdOutlineSegment className="cursor-pointer hover:opacity-75" /> */}

          <div className="relative">
            {" "}
            {/* 3 Line Icon Button */}{" "}
            <button
              onClick={() => setShowFilter(true)}
              className="p-2 hover:bg-gray-200 rounded-lg"
            >
              {" "}
              <MdOutlineSegment className="text-white" size={22} />{" "}
            </button>{" "}
            {/* Popup */}{" "}
            {showFilter && (
              <div className="absolute top-12 right-0 bg-black text-white w-80 p-5 rounded-xl shadow-xl overflow-y-auto max-h-[450px]">
                {" "}
                {/* Close Button */}{" "}
                <button
                  onClick={() => setShowFilter(false)}
                  className="absolute right-3 top-3 text-gray-300 hover:text-white"
                >
                  {" "}
                  <IoClose size={22} />{" "}
                </button>{" "}
                <h2 className="text-lg font-semibold mb-4">Filter</h2>{" "}
                <div className="space-y-6 text-sm">
                  {" "}
                  <div>
                    {" "}
                    <label className="text-gray-300">Keyword</label>{" "}
                    <input
                      type="text"
                      placeholder="Enter a keyword..."
                      className="w-full mt-2 p-2 rounded bg-gray-800 text-white outline-none border border-gray-600"
                    />{" "}
                    <p className="text-xs text-gray-400 mt-1">
                      {" "}
                      Search cards, members, labels, and more.{" "}
                    </p>{" "}
                  </div>
                  <div>
                    {" "}
                    <p className="font-medium mb-2">Members</p>{" "}
                    <div className="flex items-center gap-2">
                      {" "}
                      <input type="checkbox" />{" "}
                      <span className="flex">
                        <IoPersonCircleOutline className="mt-1" />
                        No members
                      </span>{" "}
                    </div>{" "}
                    <div className="flex items-center gap-2 mt-1">
                      {" "}
                      <input type="checkbox" />{" "}
                      <span className="flex">
                        {" "}
                        <section className="h-5 w-5 bg-blue-500 rounded-2xl text-sm">
                          &nbsp;ST
                        </section>
                        &nbsp;Cards assigned to me
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="font-medium mb-2">Card status</p>{" "}
                    <div className="flex items-center gap-2">
                      {" "}
                      <input type="checkbox" /> <span>Marked as complete</span>{" "}
                    </div>{" "}
                    <div className="flex items-center gap-2 mt-1">
                      {" "}
                      <input type="checkbox" />{" "}
                      <span>Not marked as complete</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="font-medium mb-2">Due date</p>{" "}
                    <div>
                      {filters.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 mt-2">
                          <input type="checkbox" />
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            )}{" "}
          </div>
          {/* <FaRegStar className="cursor-pointer hover:opacity-75" /> */}
          <StarTooltip />
          {/* <SlPeople className="cursor-pointer hover:opacity-75" /> */}
          <People />
          {/* <button className="px-4 py-2 bg-[#4c47a3] rounded-lg hover:bg-[#625de0] transition">
            Share
          </button> */}
          {/* <button><HiDotsHorizontal /></button> */}
          <button
            onClick={handleOpen}
            className="hover:bg-white flex gap-1 bg-[lightgray] px-2 py-1 rounded  cursor-pointer"
          >
            <HiOutlineUserAdd className="text-2xl text-blue-900" />
            Share
          </button>
          <SideMenu />
          {/* <FaRegStar className="cursor-pointer hover:opacity-75" /> */}
          {/* <SlPeople className="cursor-pointer hover:opacity-75" /> */}

          {/* <button className="px-4 py-2 bg-[#4c47a3] rounded-lg hover:bg-[#625de0] transition">
            Share
          </button> */}

          <ReactModal
            isOpen={openShare}
            onRequestClose={handleClose}
            style={customStyles}
            contentLabel="Share Modal"
          >
            <Shareboard close={handleClose} />
          </ReactModal>
        </div>
      </nav>
    </>
  );
};

export default Taskbar;
