import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";


const ListActions = ({
  menuRef,
  setShowMenu,
  setShowInput,
  setListColor,
  onArchiveAll,
}) => {
  const [showAutomation, setShowAutomation] = useState(false);

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, scale: 0.95, y: -8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-12 right-2 w-[300px] bg-[#1E1E1E] rounded-xl shadow-xl z-50"
    >
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-[#2A2A2A]">
        <span className="text-[#C4C7B7] font-semibold">List actions</span>
        <IoMdClose
          className="cursor-pointer text-[#C4C7B7] hover:text-white"
          onClick={() => setShowMenu(false)}
        />
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="flex flex-col text-sm text-[#C4C7B7]">
        <button
          className="text-left px-4 py-2 hover:bg-[#2A2A2A]"
          onClick={() => {
            setShowInput(true);
            setShowMenu(false);
          }}
        >
          Add card
        </button>

        <button
          className="text-left px-4 py-2 hover:bg-[#2A2A2A]"
          onClick={() => {
            setTodos([...todos]); // placeholder copy logic
            setShowMenu(false);
          }}
        >
          Copy list
        </button>

        <button
          className="text-left px-4 py-2 hover:bg-[#2A2A2A]"
          onClick={() => alert("Move list logic")}
        >
          Move list
        </button>

        <button
          className="text-left px-4 py-2 hover:bg-[#2A2A2A]"
          onClick={() => alert("Move all cards logic")}
        >
          Move all cards in this list
        </button>

        <button className="text-left px-4 py-2 hover:bg-[#2A2A2A]">
          Watch
        </button>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-[#2A2A2A] my-2" />

      {/* ================= COLOR PICKER ================= */}
      <div className="px-4 pb-3">
        <p className="text-xs text-[#9CA3AF] mb-2">Change list color</p>

        <div className="grid grid-cols-5 gap-2">
          {[
            "#1F845A",
            "#946F00",
            "#B65C02",
            "#AE2A19",
            "#5E4DB2",
            "#0C66E4",
            "#227D9B",
            "#4C6B1F",
            "#943D73",
            "#626F86",
          ].map((color) => (
            <div
              key={color}
              onClick={() => setListColor(color)}
              className="h-8 w-12 rounded cursor-pointer hover:scale-110 transition"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <button
          onClick={() => setListColor("#0F0F0F")}
          className="mt-3 w-full flex items-center justify-center gap-2
                     bg-[#2A2A2A] hover:bg-[#343434]
                     text-[#C4C7B7] text-sm py-2 rounded-md"
        >
          <span>✕</span>
          <span>Remove color</span>
        </button>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-[#2A2A2A] my-2" />

      {/* ================= AUTOMATION ================= */}
      <button
        onClick={() => setShowAutomation((prev) => !prev)}
        className="w-full flex items-center justify-between
                   px-4 py-2 text-sm text-[#C4C7B7]
                   hover:bg-[#2A2A2A]"
      >
        <span>Automation</span>
        <MdKeyboardArrowDown
          className={`transition-transform ${
            showAutomation ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {showAutomation && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col text-sm text-[#C4C7B7]">
              <button className="text-left px-6 py-2 hover:bg-[#2A2A2A]">
                When a card is added to the list...
              </button>

              <button className="text-left px-6 py-2 hover:bg-[#2A2A2A]">
                Every day, sort list by...
              </button>

              <button className="text-left px-6 py-2 hover:bg-[#2A2A2A]">
                Every Monday, sort list by...
              </button>

              <button className="text-left px-6 py-2 hover:bg-[#2A2A2A]">
                Create a rule
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-[#2A2A2A]" />

      {/* ================= ARCHIVE ================= */}
      <div className="flex flex-col text-sm">
        <button
          className="text-left text-[#9CA3AF] px-4 py-2 hover:bg-[#2A2A2A]"
          onClick={onArchiveAll}
        >
          Archive this list
        </button>

        <button
  className="text-left px-4 py-2 hover:bg-[#2A2A2A] text-[#9CA3AF]"
  onClick={onArchiveAll}
>
  Archive all cards in this list
</button>

      </div>
    </motion.div>
  );
};

export default ListActions;