import React, { useState, useRef } from "react";
import { Inbox, Calendar, LayoutGrid, Layers } from "lucide-react";
import Planner1 from "../../boards/Planner1";
import InboxMTB from "../inbox/InboxMTB";
import MyTrelloBoard from "../MyTrelloBoard";

const BottomNavbar = () => {
  // widths in %
  const [inboxWidth, setInboxWidth] = useState(30);
  const [plannerWidth, setPlannerWidth] = useState(30); // board is 100 - inbox - planner

  // Initially only Board is visible
  const [showInbox, setShowInbox] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);
  const [showBoard, setShowBoard] = useState(true);

  const containerRef = useRef(null);
  const dragTarget = useRef(null); // "inbox" or "planner"

  const startDrag = (target) => {
    dragTarget.current = target;
  };

  const stopDrag = () => {
    dragTarget.current = null;
  };

  const onDrag = (e) => {
    if (!dragTarget.current || !containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const x = e.clientX;
    const percent = (x / containerWidth) * 100;

    const MIN = 10;

    if (dragTarget.current === "inbox") {
      let newInbox = Math.min(Math.max(percent, 0), 90);
      setInboxWidth(newInbox);
      setShowInbox(newInbox >= MIN);
    } else if (dragTarget.current === "planner") { 
      const inboxEdge = showInbox ? inboxWidth : 0;
      let newPlanner = Math.min(
        Math.max(percent - inboxEdge, 0),
        90 - inboxEdge
      );
      setPlannerWidth(newPlanner);
      setShowPlanner(newPlanner >= MIN);
    }
  };

  // enforce rules:
  // If Inbox + Planner are closed → Board must open
  // If Inbox + Board are closed → Planner must open
  // If Planner + Board are closed → Inbox must open
  const enforceRules = (nextInbox, nextPlanner, nextBoard) => {
    if (!nextInbox && !nextPlanner) {
      nextBoard = true;
    }

    if (!nextInbox && !nextBoard) {
      nextPlanner = true;
    }

    if (!nextPlanner && !nextBoard) {
      nextInbox = true;
    }

    setShowInbox(nextInbox);
    setShowPlanner(nextPlanner);
    setShowBoard(nextBoard);
  };

  // compute final widths so total is 100%
  const effectiveInbox = showInbox ? inboxWidth : 0;
  const effectivePlanner = showPlanner ? plannerWidth : 0;
  const boardWidth =
    showBoard ? Math.max(0, 100 - effectiveInbox - effectivePlanner) : 0;

  return (
    <>
      {/* MAIN CONTENT */}
      <div
        ref={containerRef}
        className="flex h-screen relative overflow-hidden"
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {/* INBOX */}
        {showInbox && (
          <div
            style={{ width: `${effectiveInbox}%` }}
            className="h-full transition-all"
          >
            <InboxMTB />
          </div>
        )}

        {/* HANDLE 1: INBOX | PLANNER */}
        {showInbox && showPlanner && (
          <div
            onMouseDown={() => startDrag("inbox")}
            className="w-1 cursor-col-resize bg-gray-700 hover:bg-blue-500"
          />
        )}

        {/* PLANNER */}
        {showPlanner && (
          <div
            style={{ width: `${effectivePlanner}%` }}
            className="h-full transition-all"
          >
            <Planner1 />
          </div>
        )}

        {/* HANDLE 2: PLANNER | BOARD */}
        {showPlanner && showBoard && (
          <div
            onMouseDown={() => startDrag("planner")}
            className="w-1 cursor-col-resize bg-gray-700 hover:bg-blue-500"
          />
        )}

        {/* BOARD */}
        {showBoard && (
          <div
            style={{ width: `${boardWidth}%` }}
            className="h-full transition-all"
          >
            <MyTrelloBoard />
          </div>
        )}
      </div>

      {/* BOTTOM NAVBAR */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 bg-black/80 backdrop-blur-md px-2 py-1 rounded-xl shadow-lg">
          {/* Inbox toggle */}
          <button
            onClick={() => {
              const nextInbox = !showInbox;
              const nextPlanner = showPlanner;
              const nextBoard = showBoard;
              enforceRules(nextInbox, nextPlanner, nextBoard);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm
              ${
                showInbox
                  ? "bg-[#14315D] text-blue-500"
                  : "text-gray-300 hover:bg-white/10"
              }`}
          >
            <Inbox size={16} />
            Inbox
          </button>

          {/* Planner toggle */}
          <button
            onClick={() => {
              const nextPlanner = !showPlanner;
              const nextInbox = showInbox;
              const nextBoard = showBoard;
              enforceRules(nextInbox, nextPlanner, nextBoard);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm
              ${
                showPlanner
                  ? "bg-[#14315D] text-blue-500"
                  : "text-gray-300 hover:bg-white/10"
              }`}
          >
            <Calendar size={16} />
            Planner
          </button>

          {/* Board button: always opens full board page */}
          <button
  onClick={() => {
    let nextInbox = true;
    let nextPlanner = true;
    let nextBoard = false;
    enforceRules(nextInbox, nextPlanner, nextBoard);
  }}

            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm
              ${
                showBoard
                  ? "bg-[#14315D] text-blue-500"
                  : "text-gray-300 hover:bg-white/10"
              }`}
          >
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

export default BottomNavbar;