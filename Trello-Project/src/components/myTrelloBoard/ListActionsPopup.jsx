import React from "react";
import { IoClose } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const ListActionsPopup = ({ onClose }) => {
  const [open, setOpen] = useState(true);

  const options = [
    "Add card",
    "Copy list",
    "Move list",
    "Move all cards in this list",
    "Sort by...",
    "Watch",
  ];

  return (
    <div
      className="
        absolute 
        left-10 
        w-80 
        bg-[#4D4D4D] 
        text-white 
        rounded-lg 
        shadow-xl 
        p-4 
        z-50
        border border-[#4D4D4D]
      "
    >
      {/* Header */}
      <div className="flex items-center">
        <div className="flex items-center justify-center w-full">
          <h3 className="text-lg font-semibold text-[#A9ABAF]">List actions</h3>
        </div>

        <div
          className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-[#E3E4F21F] text-[#CECFD2] transition cursor-pointer"
          onClick={onClose}
        >
          <IoClose size={20} className="text-[#A9ABAF]" />
        </div>
      </div>

      {/* Options */}
      <ul className="mb-2">
        {options.map((item, index) => (
          <li
            key={index}
            className="text-[#A9ABAF] text-base font-medium p-2 hover:bg-[#3A3A3D] p-1 rounded cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <hr className="border-0.5 border-[#E3E4F21F]" />
      {/* Colors */}
      <div className="mt-4 mb-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <p className="text-base text-[#A9ABAF] font-semibold">
              Change list color
            </p>

            <button
              className="
              px-1 py-1 text-[11px] font-bold uppercase leading-[11px]
              border border-white rounded
              bg-gradient-to-tr from-[#6e5dc6] to-[#0c66e4]
              bg-clip-text text-transparent
            "
            >
              Premium
            </button>
          </div>

          {/* Arrow toggle */}
          <IoIosArrowDown
            className={`text-[#A9ABAF] cursor-pointer transition-transform duration-200 ${
              open ? "rotate-0" : "-rotate-90"
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* Accordion Content */}
        {open && (
          <>
            <div className="grid grid-cols-5 gap-2 mb-6">
              {[
                "#61BD4F",
                "#F2D600",
                "#FF9F1A",
                "#EB5A46",
                "#C377E0",
                "#0079BF",
                "#00C2E0",
                "#51E898",
                "#344563",
                "#B3BAC5",
              ].map((clr, idx) => (
                <div
                  key={idx}
                  className="w-13 h-10 rounded-sm cursor-pointer"
                  style={{ backgroundColor: clr }}
                />
              ))}
            </div>

            <div className="p-2 flex items-center justify-center gap-2 w-full bg-[#CECED912] text-[#BFC1C4] text-base font-medium hover:bg-[#E3E4F21F] cursor-pointer">
              <RxCross2 />
              <button>Remove Color</button>
            </div>
          </>
        )}
      </div>
      <hr className="border-0.5 border-[#E3E4F21F]" />
    </div>
  );
};

export default ListActionsPopup;
