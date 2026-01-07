import { FaRegCalendarAlt } from "react-icons/fa";
import { TiCreditCard } from "react-icons/ti";
import { FaTrello, FaCircleInfo } from "react-icons/fa6";
import {
  IoSettingsOutline,
  IoVideocam,
  IoCopy,
  IoClose,
} from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { LuRefreshCcw } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiRobot2Line } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
// import SideScrollBar from "./SideScrollBar";

export default function AutomationPopup({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center ">
      <div className="relative w-[100%] max-w-7xl bg-white rounded-lg mt-35 shadow-xl flex overflow-hidden ">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <IoClose size={24} />
        </button>
        <div className="flex">
          <main className="flex w-60 items-center text-black h-150 overflow-y-scroll overflow-x-hidden">
            {/* <SideScrollBar /> */}
            {/* Sidebar */}
            <aside className="w-64 bg-white overflow-y-auto px-4 py-4">
              <div className=" font-semibold text-[#2780e8] text-2xl gap-4 flex items-center">
                <RiRobot2Line className="text-blue-500 h-8 w-8" /> Automation
              </div>
              <h3 className="font-medium p-4">Automations</h3>

              <nav className="px-2 space-y-1 text-sm">
                <SidebarItem active>
                  <Link
                    to="/b/sFTGFeIY/my-trello-board/butler/rules"
                    className="flex items-center gap-3"
                  >
                    <img
                      className=""
                      src="https://app.butlerfortrello.com/5e05f6acc0baa83ea828bdeebd258cfc75d47c5b/img/preferences.svg"
                      alt="error"
                    />
                    Rules
                  </Link>
                </SidebarItem>

                <SidebarItem>
                  <Link
                    to="/b/sFTGFeIY/my-trello-board/butler/schedule"
                    className="flex items-center gap-3 "
                  >
                    <FaRegCalendarAlt className="w-4 h-4" />
                    <span>Scheduled</span>
                  </Link>
                </SidebarItem>

                <SidebarItem>
                  <Link to="" className="flex items-center gap-3">
                    <FaRegCalendarAlt className="w-4 h-4" />
                    Due date
                  </Link>
                </SidebarItem>

                <div className="mt-4 text-medium px-2 font-medium">
                  Custom buttons
                </div>
                <SidebarItem>
                  <Link to="/b/sFTGFeIY/my-trello-board/cardbuttons" className="flex items-center gap-3">
                    <TiCreditCard className="w-5 h-5" />
                    <span>Card buttons</span>
                  </Link>
                </SidebarItem>

                <SidebarItem>
                  <Link to="/b/sFTGFeIY/my-trello-board/boardbuttons" className="flex items-center gap-3">
                    <FaTrello className="w-4 h-4" />
                    <span>Board buttons</span>
                  </Link>
                </SidebarItem>

                <div className="mt-4 text-medium font-medium px-2">
                  App automations
                </div>
                <SidebarItem>
                  <Link to="/b/sFTGFeIY/my-trello-board/viewapps" className="flex items-center gap-3">
                    <IoSettingsOutline className="w-4 h-4" />
                    <span>View apps</span>
                  </Link>
                </SidebarItem>
                <div className="mt-4 text-medium font-medium px-2 ">More</div>

                <SidebarItem>
                  <div className="flex items-center gap-3">
                    <BsStars className="w-4 h-4" />
                    <span>Suggestions</span>
                  </div>
                </SidebarItem>

                <SidebarItem>
                  <div className="flex items-center gap-3">
                    <LuRefreshCcw className="w-4 h-4" />
                    <span>Activity</span>
                  </div>
                </SidebarItem>

                <SidebarItem>
                  <div className="flex items-center gap-3">
                    <GrAnnounce className="w-4 h-4" />
                    <span>Send feedback</span>
                  </div>
                </SidebarItem>

                <SidebarItem>
                  <div className="flex items-center gap-3">
                    <AiOutlineQuestionCircle className="w-4 h-4" />
                    <span>Help</span>
                  </div>
                </SidebarItem>
              </nav>
            </aside>
          </main>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

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
