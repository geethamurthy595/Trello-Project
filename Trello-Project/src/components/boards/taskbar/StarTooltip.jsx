import React, { useState, useRef } from "react";
import { FaRegStar } from "react-icons/fa6";

const StarTooltip = () => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const starRef = useRef(null);

  const handleMouseEnter = () => {
    const rect = starRef.current.getBoundingClientRect();
    setPosition({
      top: rect.bottom + 8,
      left: rect.left + rect.width / 2,
    });
    setShow(true);
  };

  return (
    <>
      <button
        ref={starRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShow(false)}
        className="text-white hover:bg-gray-500 text-xl hover:text-yellow-600 p-1 rounded"
      >
        <FaRegStar />
      </button>

      {show && (
        <div
          className="fixed bg-gray-950 text-gray-300 text-xs px-3 py-2 rounded shadow-lg whitespace-nowrap z-[9999]"
          style={{
            top: position.top,
            left: position.left,
            transform: "translateX(-50%)",
          }}
        >
          Click to star or unstar this board.
          <br />
          Starred boards show up at the top of
          <br />
          your boards list.
        </div>
      )}
    </>
  );
};

export default StarTooltip;
