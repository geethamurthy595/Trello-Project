import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TiCreditCard } from "react-icons/ti";
import { FaTrello } from "react-icons/fa6";
import { IoSettingsOutline, IoClose } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { LuRefreshCcw } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiRobot2Line } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

import ActivityPopup from "./ActivityPopup";

export default function AutomationPopup({ onClose }) {
  const [showActivity, setShowActivity] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="relative w-full max-w-7xl bg-white text-black rounded-lg mt-10 shadow-xl flex overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <IoClose size={24} />
        </button>

        <div className="flex w-full">
          {/* Sidebar */}
          <aside className="w-64 bg-white overflow-y-auto px-4 py-4 border-r">
            <div className="font-semibold text-[#2780e8] text-2xl gap-4 flex items-center">
              <RiRobot2Line className="text-blue-500 h-8 w-8" />
              Automation
            </div>

            <h3 className="font-medium p-4">Automations</h3>

            <nav className="px-2 space-y-1 text-sm">
              <SidebarItem active>
                <Link
                  to="/b/sFTGFeIY/my-trello-board/butler/rules"
                  className="flex items-center gap-3"
                >
                  <img
                    src="https://app.butlerfortrello.com/5e05f6acc0baa83ea828bdeebd258cfc75d47c5b/img/preferences.svg"
                    alt="rules"
                  />
                  Rules
                </Link>
              </SidebarItem>

              <SidebarItem>
                <Link
                  to="/b/sFTGFeIY/my-trello-board/butler/schedule"
                  className="flex items-center gap-3"
                >
                  <FaRegCalendarAlt className="w-4 h-4" />
                  Scheduled
                </Link>
              </SidebarItem>

              <SidebarItem>
                <div className="flex items-center gap-3">
                  <FaRegCalendarAlt className="w-4 h-4" />
                  Due date
                </div>
              </SidebarItem>

              <div className="mt-4 font-medium px-2">Custom buttons</div>

              <SidebarItem>
                <div className="flex items-center gap-3">
                  <TiCreditCard className="w-5 h-5" />
                  Card buttons
                </div>
              </SidebarItem>

              <SidebarItem>
                <div className="flex items-center gap-3">
                  <FaTrello className="w-4 h-4" />
                  Board buttons
                </div>
              </SidebarItem>

              <div className="mt-4 font-medium px-2">App automations</div>

              <SidebarItem>
                <div className="flex items-center gap-3">
                  <IoSettingsOutline className="w-4 h-4" />
                  View apps
                </div>
              </SidebarItem>

              <div className="mt-4 font-medium px-2">More</div>

              <SidebarItem>
                <div className="flex items-center gap-3">
                  <BsStars className="w-4 h-4" />
                  Suggestions
                </div>
              </SidebarItem>

              <SidebarItem>
                <button
                  onClick={() => setShowActivity(true)}
                  className="flex items-center gap-3 w-full text-left"
                >
                  <LuRefreshCcw className="w-4 h-4" />
                  Activity
                </button>
              </SidebarItem>

              <SidebarItem>
                <div className="flex items-center gap-3">
                  <GrAnnounce className="w-4 h-4" />
                  Send feedback
                </div>
              </SidebarItem>

              <SidebarItem>
                <div className="flex items-center gap-3">
                  <AiOutlineQuestionCircle className="w-4 h-4" />
                  Help
                </div>
              </SidebarItem>
            </nav>
          </aside>

          <div className="flex-1 relative">
            <Outlet />
          </div>
        </div>

        {showActivity && (
          <ActivityPopup onClose={() => setShowActivity(false)} />
        )}
      </div>
    </div>
  );
}

/* Sidebar Item */
function SidebarItem({ children, active }) {
  return (
    <div
      className={`px-3 py-2 rounded-md cursor-pointer ${
        active ? "bg-blue-100 text-blue-700 font-medium" : "hover:bg-[#cce0ff]"
      }`}
    >
      {children}
    </div>
  );
}
