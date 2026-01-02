import React, { useState, useRef } from "react";
import { SlPeople } from "react-icons/sl";

const People = () => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const peopleRef = useRef(null);

  const handleMouseEnter = () => {
    const rect = peopleRef.current.getBoundingClientRect();
    setPosition({
      top: rect.bottom + 8,
      left: rect.left + rect.width / 2,
    });
    setShow(true);
  };

  return (
    <>
      <button
        ref={peopleRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShow(false)}
        className="text-white hover:bg-gray-700 text-xl p-1 rounded"
      >
        <SlPeople />
      </button>

      {show && (
        <div
          className="fixed bg-gray-800 text-white text-xs px-3 py-2 rounded shadow-lg whitespace-nowrap z-[9999]"
          style={{
            top: position.top,
            left: position.left,
            transform: "translateX(-50%)",
          }}
        >
          Change Visibility.
        </div>
      )}
    </>
  );
};

export default People;
