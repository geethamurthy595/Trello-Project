import React, { useState, useRef } from "react";
import { Inbox, Calendar, LayoutGrid, Layers } from "lucide-react";
import Planner1 from "../../boards/Planner1";
import InboxMTB from "../inbox/InboxMTB";

const ButtomNavbar = () => {
  const [showInbox, setShowInbox] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);
  const [inboxWidth, setInboxWidth] = useState(50); // % width

  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const startDrag = () => {
    isDragging.current = true;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

 const onDrag = (e) => {
  if (!isDragging.current || !containerRef.current) return;

  const containerWidth = containerRef.current.offsetWidth;
  const newWidth = (e.clientX / containerWidth) * 100;

  // Clamp width
  if (newWidth < 0 || newWidth > 100) return;

  setInboxWidth(newWidth);

  // 🔥 AUTO OPEN LOGIC
  if (newWidth <= 20) {
    // Board takes over
    setShowInbox(false);
    setShowPlanner(true);
  } 
  else if (newWidth >= 85) {
    // Inbox takes over
    setShowPlanner(false);
    setShowInbox(true);
  } 
  else {
    // Both visible
    setShowInbox(true);
    setShowPlanner(true);
  }
};


  return (
    <>
      {/* MAIN CONTENT AREA */}
      <div
        ref={containerRef}
        className="flex h-screen relative"
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {showInbox && (
          <div
            style={{
              width: showPlanner ? `${inboxWidth}%` : "100%",
            }}
            className="transition-all"
          >
            <InboxMTB />
          </div>
        )}

        {/* DRAG HANDLE */}
        {showInbox && showPlanner && (
          <div
            onMouseDown={startDrag}
            className="w-1 cursor-col-resize bg-gray-700 hover:bg-blue-500"
          />
        )}

        {showPlanner && (
          <div
            style={{
              width: showInbox ? `${100 - inboxWidth}%` : "100%",
            }}
            className="transition-all"
          >
            <Planner1 />
          </div>
        )}
      </div>

      {/* BOTTOM NAVBAR */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 bg-black/80 backdrop-blur-md px-2 py-1 rounded-xl shadow-lg">

          <button
            onClick={() => setShowInbox(prev => !prev)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm
              ${showInbox ? "bg-[#14315D] text-blue-500" : "text-gray-300 hover:bg-white/10"}`}
          >
            <Inbox size={16} />
            Inbox
          </button>

          <button
            onClick={() => setShowPlanner(prev => !prev)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm
              ${showPlanner ? "bg-[#14315D] text-blue-500" : "text-gray-300 hover:bg-white/10"}`}
          >
            <Calendar size={16} />
            Planner
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10">
            <LayoutGrid size={16} />
            Board
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10">
            <Layers size={16} />
            Switch boards
          </button>

        </div>
      </div>
    </>
  );
};

export default ButtomNavbar;
