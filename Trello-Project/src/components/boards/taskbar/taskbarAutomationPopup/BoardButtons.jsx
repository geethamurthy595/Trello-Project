import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdVideocam } from "react-icons/io";
import addcard from "../../../../assets/addcard.svg";
const BoardButtons = () => {
  return (
    <div className="flex-1 px-8 py-6">
      
      {/* Header */}
      <div className="mb-8 py-5 border-b border-gray-400">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pr-12">

          {/* Left: Title */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-[30px] font-semibold">
              Board buttons
            </h1>
            <FaCircleInfo className="text-[16px] md:text-[21px]" />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <button className="text-[13px] md:text-md font-medium underline flex items-center gap-1">
              <IoMdVideocam className="text-[16px] md:text-[20px]" />
              <a href="https://www.youtube.com/watch?v=fBwJEfhPUYM" target="_blank">
                Watch video overview
              </a>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded-md text-sm font-bold hover:bg-blue-700">
              Create button
            </button>
          </div>

        </div>
      </div>



      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Make multiple board actions happen with a single button.
          </h1>

          <p className="text-lg mb-5">Examples:</p>

          <ul className="space-y-4 pl-5 text-lg">
            <li className="flex gap-3">
              <img src={addcard} alt="Add card icon" className="w-7 h-7 mt-1" />
              <span>
                <strong>Monday setup:</strong> Archive all cards in list "This Week", and move all cards in list "Last Week" to "This Week".
                <span className="font-medium"> "To do"</span> checklist to
                the card.
              </span>
            </li>

            <li className="flex gap-3">
              <img src={addcard} alt="Add card icon" className="w-7 h-7 mt-1" />
              <span>
                <strong>Prioritize:</strong> Sort the cards in list "Doing" by custom field "Priority" descending.
              </span>
            </li>

            <li className="flex gap-3">
              <img src={addcard} alt="Add card icon" className="w-7 h-7 mt-1" />
              <span>
                <strong>Shuffle pick:</strong> Move 2 random cards from list "Backlog" to list "Doing".
              </span>
            </li>
            <li>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-bold cursor-pointer hover:bg-blue-700">
                Create button
              </button>
            </li>
          </ul>
        </div>

        {/* Right Section */}
          <div className="w-full">
          <div className="w-full rounded-lg overflow-hidden shadow border bg-black">
            
            {/* Aspect ratio wrapper */}
            <div className="relative w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/fBwJEfhPUYM?si=AdlivANluGaaGZgN"
              title="YouTube video player"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          </div>
          <p className="text-md mt-3 text-center">
            Watch a 65-second overview of rules
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoardButtons;
