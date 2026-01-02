import React from "react";
import { IoMdHome } from "react-icons/io";
import jiralogo from "../../../assets/jira.png";
import trello from "../../../assets/trello.png";
import { FaUserGroup } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const MoreFromAtlassian = () => {
  return (
    <section className="absolute top-12 left-3 bg-[#2b2c2f] w-80 rounded-lg shadow-lg text-white z-50">
      <div className="p-4">
        <ul className="flex flex-col gap-2">

          {/* Organisation */}
          <li className="text-sm text-gray-300">
            Select Organisation
            <select>
              <option></option>
            </select>
          </li>

          {/* Home */}
          <Link to='https://home.atlassian.com/o/ba4a88ad-ac98-44b8-9db4-733e28ffe659/?cloudId=6895fe97-54f4-44a8-a6c7-0bd4658faeac' className="flex items-center gap-3 p-2 hover:bg-[#242528] rounded cursor-pointer">
            <IoMdHome className=" text-black bg-amber-50 h-6 w-6 rounded" />
            <span>Home</span>
          </Link>

          {/* Jira */}
          <li className="flex items-center gap-3 p-2 hover:bg-[#242528] rounded cursor-pointer">
            <img
              src={jiralogo}
              alt="Jira"
              className="h-7 w-7 p-1 bg-amber-50 rounded"
            />
            <span>Jira</span>
            <select className="ml-auto">
              <option></option>
            </select>
          </li>

          {/* Trello */}
          <li className="flex items-center gap-3 p-2 hover:bg-[#242528] rounded cursor-pointer">
            <img
              src={trello}
              alt="Trello"
              className="h-7 w-7 p-1 bg-amber-50 rounded"
            />
            <span>Trello</span>
          </li>

          {/* Teams */}
          <li className="flex items-center gap-3 p-2 hover:bg-[#242528] rounded cursor-pointer">
            <FaUserGroup className="bg-amber-50 text-black h-7 w-7 p-1 rounded" />
            <span>Teams</span>
          </li>

          {/* Administration */}
          <li className="flex items-center gap-3 p-2 hover:bg-[#242528] rounded cursor-pointer">
            <IoSettingsSharp className="bg-amber-50 text-black h-7 w-7 p-1 rounded" />
            <span>Administration</span>
          </li>

        </ul>
      </div>
    </section>
  );
};

export default MoreFromAtlassian;
