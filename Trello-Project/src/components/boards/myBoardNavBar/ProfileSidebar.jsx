import React from "react";
import { CiCreditCard1 } from "react-icons/ci";

import {
  User,
  Settings,
  Activity,
  CreditCard,
  LayoutGrid,
  Users,
  Plug,
  Receipt,
  Download,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const ProfileSidebar = () => {
  return (
    <>
      <section className="flex w-full">
        {/* ===== SIDEBAR ===== */}
        <aside className="w-65 h-screen bg-[#0F1113] text-gray-300 px-6 py-6 fixed left-0 top-0 overflow-y-auto">
          {/* Personal Settings */}
          <div className="mb-6 mt-5">
            <h3 className="text-xs font-bold tracking-wider text-gray-200 mb-3">
              Personal Settings
            </h3>

            <ul>
              <Link
                to="/side/Profile"
                className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5 cursor-pointer focus:border focus:border-blue-500  focus:bg-[#1F2A37]"
              >
                <User size={15} />
                <span className="text-sm font-medium">
                  Profile and Visibility
                </span>
              </Link>

              <Link
                to="/side/settings"
                className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5 cursor-pointer focus:border border-blue-500 focus:bg-[#1F2A37]"
              >
                <Settings size={15} />
                <span className="text-sm font-medium">Settings</span>
              </Link>

              <li className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5 cursor-pointer focus:border border-blue-500 focus:bg-[#1F2A37]">
                <Activity size={15} />
                <span className="text-sm font-medium">Activity</span>
              </li>

              <li className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5 cursor-pointer focus:border border-blue-500 focus:bg-[#1F2A37]">
                <CreditCard size={15} />
                <span className="text-sm font-medium">Cards</span>
              </li>
            </ul>
          </div>

          {/* 🔥 REMOVED the white border line here */}
          {/* <div className="border-t border-white/10 my-4" /> */}

          {/* Workspace */}
          <div className="mt-6">
            <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-3">
              Workspace
            </h3>

            <div className="flex items-center gap-3 px-3 py-1 mb-2">
              <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center text-xs font-bold text-white">
                T
              </div>
              <span className="text-sm font-medium">Trello Workspace</span>
            </div>

            <ul className="space-y-1">
              <li className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5 cursor-pointer focus:border border-blue-500 focus:bg-[#1F2A37]">
                <LayoutGrid size={15} />
                <span className="text-sm font-medium">Boards</span>
              </li>

              <li className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5 cursor-pointer focus:border border-blue-500 focus:bg-[#1F2A37]">
                <Users size={15} />
                <span className="text-sm font-medium">Members</span>
              </li>

              <Link
                to="/side/wsettings"
                className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5 cursor-pointer focus:border border-blue-500 focus:bg-[#1F2A37]"
              >
                <Settings size={15} />
                <span className="text-sm font-medium">Settings</span>
              </Link>

              <li className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5 cursor-pointer focus:border border-blue-500 focus:bg-[#1F2A37]">
                <CiCreditCard1 size={17} />
                <span className="text-sm font-medium">Upgrade workspace</span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <span className="ml-2 mt-1 px-1 py-0.5 h-5 text-[10px] rounded border  text-white font-semibold">
              FREE
            </span>
          </div>
        </aside>

        {/* ===== RIGHT SIDE CONTENT ===== */}
        <div className="ml-65 flex-1 min-h-screen overflow-y-auto">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default ProfileSidebar;
