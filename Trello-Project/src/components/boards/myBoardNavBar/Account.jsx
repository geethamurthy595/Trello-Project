import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <section className="w-72 rounded-md bg-[#2b2c2f] text-zinc-200 shadow-lg">
      
      {/* User Info */}
      <div className="flex items-center gap-3 border-b border-gray-600 p-4">
        <CgProfile size={32} />
        <div>
          <p className="text-sm font-medium">Username</p>
          <p className="text-xs text-zinc-400">username@email.com</p>
        </div>
      </div>

      {/* Account Actions */}
      <div className="border-b flex flex-col border-gray-600 p-3 text-sm">
        <Link to='https://id.atlassian.com/login/select-account?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback' className="cursor-pointer rounded px-2 py-1 hover:bg-[#3a3b3f]">
          Switch accounts
        </Link>
        <Link to='https://id.atlassian.com/manage-profile/profile-and-visibility' className="cursor-pointer rounded px-2 py-1 hover:bg-[#3a3b3f]">
          Manage account
        </Link>
      </div>

      {/* Trello Section */}
      <div className="p-3 text-sm">
        <p className="mb-2 text-zinc-400">Trello</p>

        <ul className="flex flex-col gap-3">
          <li className="menu-item">Profile and visibility</li>
          <li className="menu-item">Activity</li>
          <li className="menu-item">Cards</li>
          <li className="menu-item">Settings</li>

          <li className="menu-item flex items-center justify-between">
            Theme
            <FaAngleRight size={12} />
          </li>

          <hr className="my-1 border-gray-600" />

          <li className="menu-item">Create Workspace</li>
          <li className="menu-item">Help</li>
          <li className="menu-item">Shortcuts</li>

          <hr className="my-1 border-gray-600" />

          <li className="menu-item hover:bg-red-500/10">
            Logout
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Account;
