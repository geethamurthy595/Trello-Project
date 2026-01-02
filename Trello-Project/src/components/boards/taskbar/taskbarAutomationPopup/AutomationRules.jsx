import React from "react";
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
import { Link, Outlet } from "react-router-dom";
import { RiRobot2Line } from "react-icons/ri";

const AutomationRules = () => {
  return (
    <>
      {/* Main */}
      <main className="flex-1 overflow-y-auto p-9">
          <div className="flex justify-between items-center px-8 py-4">
            <h1 className="text-3xl font-semibold flex gap-2 items-center text-black">
              Rules <FaCircleInfo className="text-gray-600" />
            </h1>

            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/watch?v=WSMfGoXrL9I"
                target="_blank"
                rel="noreferrer"
                className="underline text-sm flex items-center gap-1 text-black"
              >
                <IoVideocam /> Watch video overview
              </a>

              <button className="bg-blue-600 text-white px-3 py-1 rounded">
                Create automation
              </button>

              <button className="bg-gray-200 w-8 h-8 hover:bg-gray-300 rounded-md flex items-center justify-center">
                <IoCopy />
              </button>
            </div>
          </div>

          <hr className="h-10 w-full text-gray-300" />

          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-2xl font-semibold mb-4 text-black">
                Rules are simple: when one thing happens, another happens
                automatically
              </p>
              <h2 className="text-xl text-black">Examples:</h2>

              <ul className="space-y-4 text-lg">
                <li className="flex gap-3 text-black">
                  <RiRobot2Line className="text-blue-800 h-7 w-7 text-center" />
                  <span>
                    When a <b>card is created in list</b>"To Do" by me,
                    <b> add the "Steps" checklist.</b>
                  </span>
                </li>

                <li className="flex gap-3 text-black">
                  <RiRobot2Line className="text-blue-800 h-12 w-12 text-center" />
                  <span>
                    When a <b> card is moved to list </b>"Done" by anyone,
                    <b>
                      {" "}
                      mark the due date as complete and remove all members from
                      the card.
                    </b>
                  </span>
                </li>

                <li className="flex gap-3 text-black">
                  <RiRobot2Line className="text-blue-800 h-10 w-10 text-center" />
                  <span>
                    <b> When I am added to a card, set the due date</b> in 5
                    working days and <b>post a comment saying</b> "I got this!"
                  </span>
                </li>
              </ul>

              <Link to="/b/sFTGFeIY/my-trello-board/butler/on-dates/new" className="mt-6 bg-blue-600 text-white font-semibold px-5 py-2 gap-4 flex items-center w-44 h-9 rounded">
                Create automation
              </Link>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden shadow">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/WSMfGoXrL9I"
                title="Automation video"
                allowFullScreen
              />
              <p className="text-center text-sm text-black mt-3">
                Watch a 65-second overview of rules
              </p>
            </div>
          </div>
        </main>
    </>
  );
};

export default AutomationRules;
