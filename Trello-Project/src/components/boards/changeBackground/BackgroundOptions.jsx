import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import myBoardBg from "../../../assets/myboardbg.svg"; // adjust the path

const BackgroundOptions = ({ onClose, onDelete, setBackground }) => {
  const [displayType, setDisplayType] = useState("cover");
  const [boardText, setBoardText] = useState("light");

  return (
    <div className="absolute inset-0 bg-[#2f3136] z-50 rounded-xl shadow-xl h-[360px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-600">
        <h3 className="text-base font-semibold text-[#A9ABAF] w-full text-center">
          Background options
        </h3>

        <button
          onClick={onClose}
          className="p-1.5 text-[#A9ABAF] rounded-lg hover:bg-gray-700"
        >
          <IoClose size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="px-3 py-2 space-y-3 text-gray-300 overflow-y-auto p-6">
        {/* Display type */}
        <div>
          <p className="text-sm font-medium mb-1 text-[#A9ABAF]">
            Display type
          </p>

          <div
            onClick={() => setDisplayType("cover")}
            className="flex justify-between py-1.5 cursor-pointer"
          >
            <span className="text-base">Cover</span>
            {displayType === "cover" && <span>✓</span>}
          </div>

          <div
            onClick={() => setDisplayType("tile")}
            className="flex justify-between py-1.5 cursor-pointer"
          >
            <span className="text-base">Tile</span>
            {displayType === "tile" && <span>✓</span>}
          </div>
        </div>

        <hr className="border-gray-700" />

        {/* Board text */}
        <div>
          <p className="text-sm font-medium mb-1 text-[#A9ABAF]">Board text</p>

          <div
            onClick={() => setBoardText("light")}
            className="flex justify-between py-1.5 cursor-pointer"
          >
            <span className="text-base">Light</span>
            {boardText === "light" && <span>✓</span>}
          </div>

          <div
            onClick={() => setBoardText("dark")}
            className="flex justify-between py-1.5 cursor-pointer"
          >
            <span className="text-base">Dark</span>
            {boardText === "dark" && <span>✓</span>}
          </div>
        </div>

        {/* Delete */}
        <button
          onClick={() => {
            onDelete(); // remove custom image
            setBackground({ type: "image", value: myBoardBg }); // reset to default
            onClose(); // close options panel
          }}
          className="mt-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg w-full"
        >
          Delete background
        </button>
      </div>
    </div>
  );
};

export default BackgroundOptions;
