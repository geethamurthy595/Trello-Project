import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  FaMagic,
  FaRocket,
  FaTags,
  FaRegStickyNote,
  FaRegEye,
  FaStar,
  FaBolt,
} from "react-icons/fa";
import {
  MdOutlineArchive,
  MdOutlineContentCopy,
  MdOutlineEmail,
  MdInfoOutline,
  MdWorkspacePremium,
  MdPeopleOutline,
} from "react-icons/md";
import { IoClose, IoShareSocial } from "react-icons/io5";
import { IoIosSettings, IoIosPersonAdd } from "react-icons/io";

import ChangeBackground from "../changeBackground/ChangeBackground";
import Archieveditems from "./menu/Archieveditems";
import { useBackground } from "../../context/BackgroundContext";
import AutomationPopup from "./taskbarAutomationPopup/AutomationPopup";

const SideMenu = () => {
  const [drawer, setDrawer] = useState(null);
  const { background, setBackground } = useBackground();
  const [showAutomation, setShowAutomation] = useState(false);

  return (
    <>
      {/* ===== 3 DOTS BUTTON ===== */}
      <button
        onClick={() => setDrawer("menu")}
        className="p-2 rounded hover:bg-gray-700"
      >
        <BsThreeDots size={22} />
      </button>

      {/* ===== MENU DRAWER ===== */}
      {drawer === "menu" && (
        <div className="fixed inset-0 flex justify-end z-50 bg-black/40">
          <div className="w-80 bg-black text-white h-full p-4 overflow-y-auto shadow-xl animate-slide-left">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Menu</h2>
              <button onClick={() => setDrawer(null)} className="text-2xl">
                <IoClose />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <IoIosPersonAdd /> Share
              </div>

              <hr />

              <div className="flex items-start gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <MdInfoOutline />
                <div>
                  <p>About this board</p>
                  <p className="text-sm text-gray-400">
                    Add a description to your board
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <MdPeopleOutline /> Visibility: Workspace
              </div>

              <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <IoShareSocial /> Print, export, and share
              </div>

              <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <FaStar /> Star
              </div>

              <hr />

              <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <IoIosSettings /> Settings
              </div>

              {/* CHANGE BACKGROUND */}
              <div
                className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
                onClick={() => setDrawer("changeBackground")}
              >
                <div className="h-6 w-6 rounded bg-gradient-to-br from-purple-400 to-pink-400" />
                Change background
              </div>

              {/* UPGRADE */}
              <div className="border-t pt-4">
                <div className="flex items-center gap-3 bg-gray-800 p-2 rounded cursor-pointer hover:bg-gray-700">
                  <MdWorkspacePremium /> Upgrade
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  <strong>Upgrade to add custom fields.</strong>
                  <br />
                  Add dropdowns, text fields, dates and more.
                </p>
              </div>

              <hr />

              <div
                className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
                onClick={() => {
                  setShowAutomation(true);
                  setDrawer(false);
                }}
              >
                <FaBolt /> Automation
              </div>

              <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <FaMagic /> Automation
              </div>

              <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <FaRocket /> Power-Ups
              </div>

              <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <FaTags /> Labels
              </div>

              <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <FaRegStickyNote /> Stickers
              </div>

              <div
                onClick={() => setDrawer("archived")}
                className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
              >
                <MdOutlineArchive /> Archived items
              </div>

              <hr />

              <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <FaRegEye /> Watch
              </div>

              <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <MdOutlineContentCopy /> Copy board
              </div>

              <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
                <MdOutlineEmail /> Email-to-board
              </div>

              <button className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded text-red-400">
                Close Board
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== CHANGE BACKGROUND ===== */}
      {drawer === "changeBackground" && (
        <div className="fixed top-0 right-0  flex justify-end z-50 ">
          <ChangeBackground
            currentBackground={background}
            setBackground={setBackground}
            onBackToMenu={() => setDrawer("menu")}
            onClose={() => setDrawer(null)}
          />
        </div>
      )}

      {/* ===== ARCHIVED ITEMS ===== */}
      {drawer === "archived" && (
        <div className="fixed top-0 right-0  flex justify-end z-50  ">
          <Archieveditems onBack={() => setDrawer("menu")} />
        </div>
      )}

      {/* Automation Modal */}
      {showAutomation && (
        <AutomationPopup onClose={() => setShowAutomation(false)} />
      )}
    </>
  );
};

export default SideMenu;
