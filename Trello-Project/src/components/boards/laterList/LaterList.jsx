import React, { useState, useRef, useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { FaCheckCircle, FaRegEdit, FaArchive } from "react-icons/fa";
import templetIcon from "../../../assets/templetIcon.svg";
import { LuMinimize2 } from "react-icons/lu";
import { CiMaximize1 } from "react-icons/ci";
import { AnimatePresence } from "framer-motion";
import ListActions from "./ListActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LaterList = () => {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");

  // init todos from localStorage (laterTodos)
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("laterTodos");
    return stored ? JSON.parse(stored) : [];
  });

  const [minimmize, setMinimize] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [listColor, setListColor] = useState("#0F0F0F");
  const menuRef = useRef(null);
  const [isArchived, setIsArchived] = useState(false);

  // keep laterTodos in sync with todos
  useEffect(() => {
    localStorage.setItem("laterTodos", JSON.stringify(todos));
  }, [todos]);

  // close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // listen for "later-updated" (from Archieveditems restore)
  useEffect(() => {
    const handler = () => {
      const stored = localStorage.getItem("laterTodos");
      const parsed = stored ? JSON.parse(stored) : [];
      setTodos(parsed);
      setIsArchived(false);
    };

    window.addEventListener("later-updated", handler);
    return () => window.removeEventListener("later-updated", handler);
  }, []);

  const archiveAllTodos = () => {
    const archivedCards = [...todos];

    // 1) cards: archivedLaterTodos
    localStorage.setItem("archivedLaterTodos", JSON.stringify(archivedCards));

    // 2) lists: archivedLists
    const existingLists =
      JSON.parse(localStorage.getItem("archivedLists")) || [];

    const newList = {
      id: Date.now(),
      title: "Later", // or dynamic
      todos: archivedCards,
    };

    localStorage.setItem(
      "archivedLists",
      JSON.stringify([...existingLists, newList])
    );

    // 3) clear current list
    setTodos([]);
    setIsArchived(true);
    setShowMenu(false);

    // 4) toast with Undo for cards (same as your code)
    toast(
      ({ closeToast }) => (
        <div
          className="
            bg-[#2B2C2F] text-[#E5E7EB]
            px-4 py-3 rounded-lg min-w-[400px]
            shadow-[0_10px_25px_rgba(0,0,0,0.4)] h-[100px]"
        >
          {/* LEFT */}
          <div className="flex justify-between">
            <div className="flex gap-2">
              <FaCheckCircle className="text-green-500 text-lg" />
              <span className="text-sm font-medium">List archived</span>
            </div>
            <button
              onClick={closeToast}
              className="text-gray-400 hover:text-white text-sm"
            >
              ✕
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center h-20 ml-5">
            <button
              className="text-sm px-3 py-1 rounded-md 
                         bg-[#3A3B3F] hover:bg-[#4B4C50]
                         transition"
              onClick={() => {
                const restored = JSON.parse(
                  localStorage.getItem("archivedLaterTodos")
                );

                if (restored) {
                  setTodos(restored);
                  setIsArchived(false);
                  localStorage.removeItem("archivedLaterTodos");
                }

                closeToast();
              }}
            >
              Undo
            </button>
          </div>
        </div>
      ),
      {
        autoClose: 5000,
        hideProgressBar: true,
        closeButton: false,
        className: "!bg-transparent !shadow-none !p-0",
      }
    );
  };

  const handleAddCard = () => {
    if (!text.trim()) return;

    setTodos((prev) => [...prev, { id: Date.now(), text, checked: false }]);

    setText("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const editTodo = (id) => {
    const item = todos.find((t) => t.id === id);
    if (!item) return;
    setText(item.text);
    setShowInput(true);
    deleteTodo(id);
  };

  const toggleCheck = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        style={{ zIndex: 999999 }}
      />

      {!isArchived && !minimmize && (
        <div
          className="relative w-[280px] rounded-xl shadow-sm p-0.5 transition-colors duration-300 ml-[-15px]"
          style={{ backgroundColor: listColor }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pl-3 pr-4 p-2 w-[280px]">
            <h3 className="text-[#C4C7B7] font-semibold px-2">Later</h3>
            <div className="flex gap-3">
              <LuMinimize2
                className="text-[#C4C7B7] rotate-45 cursor-pointer"
                onClick={() => setMinimize((prev) => !prev)}
              />
              <HiOutlineDotsHorizontal
                className="text-[#C4C7B7] cursor-pointer"
                onClick={() => setShowMenu((prev) => !prev)}
              />
            </div>
          </div>

          {/* Todos */}
          <div className="px-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="
                  group bg-[#1A1A1A] text-[#C4C7B7] 
                  rounded-lg p-1 pl-2 mb-2 flex items-center gap-3
                  border border-transparent hover:border-white 
                  transition-all duration-200
                "
              >
                {/* RADIO */}
                <div className="relative group">
                  <div
                    className="absolute -top-6 left-1/2 -translate-x-1/2 
                               px-2 py-1 text-xs rounded-md
                               bg-black text-white whitespace-nowrap
                               opacity-0 group-hover:opacity-100 
                               transition-all duration-200 pointer-events-none"
                  >
                    {todo.checked ? "Mark incomplete" : "Mark complete"}
                  </div>

                  <div
                    onClick={() => toggleCheck(todo.id)}
                    className={`flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden
                      ${
                        todo.checked
                          ? "h-4 w-4 opacity-100"
                          : "h-0 w-0 opacity-0 group-hover:h-4 group-hover:w-4 group-hover:opacity-100"
                      }
                    `}
                  >
                    {todo.checked ? (
                      <FaCheckCircle className="text-green-400 h-4 w-4" />
                    ) : (
                      <div className="h-4 w-4 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                </div>

                {/* TEXT */}
                <span
                  className={`
                    flex-1 transition-all duration-200
                    break-words break-all whitespace-pre-wrap
                    overflow-hidden
                    ${!todo.checked ? "group-hover:translate-x-1 -ml-1" : ""}
                  `}
                >
                  {todo.text}
                </span>

                {/* ARCHIVE (per card delete) */}
                <FaArchive
                  size={13}
                  title="Archive (coming soon)"
                  onClick={(e) => e.stopPropagation()} // does nothing
                  className="
                    cursor-pointer text-[#BFC1C4]
                    opacity-0 translate-x-2
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-200
                  "
                />

                {/* EDIT */}
                <FaRegEdit
                  size={13}
                  onClick={() => editTodo(todo.id)}
                  className="
                    cursor-pointer text-[#BFC1C4]
                    opacity-0 translate-x-2 
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-200 delay-75
                  "
                />
              </div>
            ))}
          </div>

          {/* Add New Card */}
          {!showInput ? (
            <div className="flex items-center gap-1 p-1">
              <div
                className="hover:bg-[#242528] w-full rounded-lg flex items-center justify-between pl-3 p-1 h-8 cursor-pointer "
                onClick={() => setShowInput(true)}
              >
                <div className="flex items-center gap-2 text-[#C4C7B7]">
                  <IoMdAdd size={18} />
                  <span>Add a card</span>
                </div>
              </div>
              <span className="hover:bg-[#2A2C21] p-1 pl-2 pr-2 rounded-lg mr-3 mt-1">
                <img
                  src={templetIcon}
                  className="w-5 h-5 brightness-200 saturate-0 invert-[75%]"
                />
              </span>
            </div>
          ) : (
            <div className="p-2 px-3">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full bg-[#1A1A1A] text-[#C4C7B7] outline-[#4d73ff] rounded-lg p-2 outline-3 resize-none h-12 hover:outline-none"
                placeholder="Enter a title or paste a link"
              />

              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={handleAddCard}
                  className="bg-[#4d73ff] h-8 w-[84px] px-3 py-1 rounded-md text-sm"
                >
                  Add card
                </button>

                <button
                  className="text-[#C4C7B7] text-xl h-8 hover:text-white hover:bg-[#1A1A1A] p-1 -ml-2 rounded"
                  onClick={() => {
                    setShowInput(false);
                    setText("");
                  }}
                >
                  <IoMdClose />
                </button>
              </div>
            </div>
          )}

          <AnimatePresence>
            {showMenu && (
              <ListActions
                menuRef={menuRef}
                setShowMenu={setShowMenu}
                setShowInput={setShowInput}
                setListColor={setListColor}
                onArchiveAll={archiveAllTodos}
              />
            )}
          </AnimatePresence>
        </div>
      )}

      {!isArchived && minimmize && (
        <div
          className="rounded-lg h-30 w-10 flex items-center justify-center ml-[-15px]"
          style={{ backgroundColor: listColor }}
        >
          <span className="rotate-90 origin-center text-white font-medium flex items-center justify-between gap-1">
            <span className="hover:bg-[#242528] rounded-md p-1 ml-2">
              <CiMaximize1
                onClick={() => setMinimize((prev) => !prev)}
                className="text-white rotate-135 origin-center"
              />
            </span>
            Later <span className="text-white ml-4 mr-3 ">{todos.length}</span>
          </span>
        </div>
      )}
    </>
  );
};

export default LaterList;