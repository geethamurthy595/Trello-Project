import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineRestore } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const Archieveditems = ({ onBack }) => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("lists"); // default LISTS

  // cards are NEVER archived
  // const [archivedCards, setArchivedCards] = useState([]);
  const [archivedLists, setArchivedLists] = useState([]);

  /* ---------------- LOAD DATA ---------------- */
  useEffect(() => {
    // cards intentionally empty
    // setArchivedCards([]);

    const lists = JSON.parse(localStorage.getItem("archivedLists")) || [];
    setArchivedLists(lists);
  }, []);

  /* ---------------- RESTORE LIST ---------------- */
  const restoreList = (list) => {
    const updatedLists = archivedLists.filter((l) => l.id !== list.id);
    localStorage.setItem("archivedLists", JSON.stringify(updatedLists));
    setArchivedLists(updatedLists);

    const laterTodos =
      JSON.parse(localStorage.getItem("laterTodos")) || [];

    localStorage.setItem(
      "laterTodos",
      JSON.stringify([...laterTodos, ...list.todos])
    );

    window.dispatchEvent(new Event("later-updated"));
  };

  /* ---------------- DELETE LIST ---------------- */
  const deleteList = (id) => {
    const updatedLists = archivedLists.filter((l) => l.id !== id);
    localStorage.setItem("archivedLists", JSON.stringify(updatedLists));
    setArchivedLists(updatedLists);
  };

  /* ---------------- FILTERS ---------------- */
  // const filteredCards = []; // always empty

  const filteredLists = archivedLists.filter((list) =>
    (list.title || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-[340px] bg-[#2b2f33] text-[#b6c2cf] rounded-xl shadow-xl p-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={onBack} className="p-1 rounded-md hover:bg-[#3a3f44]">
          <RiArrowLeftSLine size={18} />
        </button>

        <span className="text-sm font-semibold text-[#e6edf3]">
          Archived items
        </span>

        <button onClick={onBack} className="p-1 rounded-md hover:bg-[#3a3f44]">
          <IoCloseOutline size={18} />
        </button>
      </div>

      {/* Search + Switch */}
      <div className="flex gap-2 mb-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search archive..."
          className="flex-1 bg-[#22272b] text-sm px-3 py-2 rounded-md
                     text-[#e6edf3] placeholder-[#8c9bab]
                     border border-[#3a3f44] outline-none
                     focus:border-[#579dff]"
        />

        <button
          onClick={() => setView(view === "cards" ? "lists" : "cards")}
          className="bg-[#32373c] px-3 py-2 rounded-md text-sm
                     text-[#e6edf3] hover:bg-[#3a3f44]"
        >
          {view === "cards" ? "Switch to lists" : "Switch to cards"}
        </button>
      </div>

      {/* CONTENT */}
      <div className="bg-[#32373c] rounded-md px-4 py-4">
        {view === "cards" ? (
          /* -------- CARDS (EMPTY ALWAYS) -------- */
          <div className="text-center py-6">
            <span className="text-sm text-[#9fadbc]">
              No archived cards
            </span>
          </div>
        ) : (
          /* -------- LISTS -------- */
          filteredLists.length === 0 ? (
            <div className="text-center py-6">
              <span className="text-sm text-[#9fadbc]">
                No archived lists
              </span>
            </div>
          ) : (
            filteredLists.map((list) => (
              <div
                key={list.id}
                className="flex items-center justify-between
                           bg-[#2b2f33] px-3 py-2 rounded-md mb-2"
              >
                <div>
                  <div className="text-sm text-[#e6edf3]">
                    {list.title}
                  </div>
                  <div className="text-xs text-[#9fadbc]">
                    {list.todos?.length || 0} items
                  </div>
                </div>

                <div className="flex gap-1">
                  <button
                    onClick={() => restoreList(list)}
                    title="Restore"
                    className="p-2 rounded-md flex gap-1 justify-center items-center  text-[#9fadbc]
                               hover:bg-[#3a3f44] hover:text-[#e6edf3]"
                  >
                    <MdOutlineRestore size={18} /> <p>Restore</p>
                  </button>

                  <button
                    onClick={() => deleteList(list.id)}
                    title="Delete"
                    className="p-2 rounded-md text-[#9fadbc]
                               hover:bg-gray-400 hover:text-white"
                  >
                    <RiDeleteBinLine size={16} />
                  </button>
                </div>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
};

export default Archieveditems;
