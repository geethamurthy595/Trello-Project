import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import faviconicon from "../../assets/faviconicon.png";

const MarkableLink = ({
  showIcon,
  text,
  color = "#669DF1",
  checkedColor = "#626f86",
  underline = true,
  showFavicon = true,
  onCompleteChange, // <-- NEW
}) => {
  const [completed, setCompleted] = useState(false);
  const [radioHover, setRadioHover] = useState(false);

  const toggleCompleted = () => {
    const newState = !completed;
    setCompleted(newState);
    onCompleteChange?.(newState); // <-- send state to parent
  };

  return (
    <div className="relative flex items-center gap-2 transition-all duration-300">
      {/* Radio Button */}
      <div
        onClick={toggleCompleted}
        onMouseEnter={() => setRadioHover(true)}
        onMouseLeave={() => setRadioHover(false)}
        className={`
          w-5 h-5 rounded-full flex items-center justify-center cursor-pointer border transition-all duration-300
          absolute left-0
          ${completed ? "bg-green-400 border-green-500" : "border-[#669DF1]"}
          ${showIcon ? "opacity-100" : "opacity-0"}
        `}
      >
        {completed && <FaCheck className="text-black text-xs" />}
      </div>

      {/* Text + favicon */}
      <div
        className={`
          flex items-center gap-2 transition-all duration-300
          ${showIcon ? "translate-x-8" : "translate-x-0"}
        `}
      >
        {showFavicon && <img src={faviconicon} alt="" className="w-5 h-5" />}

        <Link
          className={`font-normal text-base px-1 rounded transition ${
            underline ? "underline" : "no-underline"
          }`}
          style={{ color: completed ? checkedColor : color }}
        >
          {text}
        </Link>
      </div>

      {/* Tooltip */}
      {radioHover && (
        <div className="absolute left-0 top-[-30px] bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
          {completed ? "Mark incomplete" : "Mark complete"}
        </div>
      )}
    </div>
  );
};

export default MarkableLink;
