import React, { useState, useRef, useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { FaCheckCircle, FaRegEdit, FaArchive } from "react-icons/fa";
import { LuMinimize2 } from "react-icons/lu";
import { CiMaximize1 } from "react-icons/ci";
import createT from '../../../assets/createT.svg';
import ListActions from "../../../components/boards/laterList/ListActions";
import { AnimatePresence } from "framer-motion";


const ThisWeek = () => {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [minimmize, setMinimize] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const [listColor, setListColor] = useState("#0F0F0F");


  useEffect(() => {
  const handler = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };
  document.addEventListener("mousedown", handler);
  return () => document.removeEventListener("mousedown", handler);
}, []);



  // ---------- Editable Title States ----------
  const [title, setTitle] = useState("ThisWeek");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const titleRef = useRef(null);

  // ---------- Detect Click Outside ----------
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (titleRef.current && !titleRef.current.contains(e.target)) {
        setIsEditingTitle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAddCard = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, checked: false }]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id) => {
    const item = todos.find((t) => t.id === id);
    setText(item.text);
    setShowInput(true);
    deleteTodo(id);
  };

  const toggleCheck = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <>
      {!minimmize && (
        <div className="  rounded-xl shadow-sm p-0.5 pb-5 relative " style={{backgroundColor:listColor}}>

          {/* ---------- Header with Editable Title ---------- */}
          <div className="flex items-center justify-between pl-3 pr-4 p-2 w-[280px]">
            <div ref={titleRef} className="w-full ">
              {!isEditingTitle ? (
                <h3
                  className="text-[#C4C7B7] font-semibold px-2 cursor-pointer"
                  onClick={() => setIsEditingTitle(true)}
                >
                  {title}
                </h3>
              ) : (
                <input
                  autoFocus
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && setIsEditingTitle(false)}
                  className="bg-[#1A1A1A] text-[#C4C7B7] rounded px-2 py-1 outline-[#4d73ff] w-[90%]"
                />
              )}
            </div>

            <div className="flex gap-3">
              <LuMinimize2
                className="text-[#C4C7B7] rotate-45 cursor-pointer"
                onClick={() => setMinimize((prev) => !prev)}
              />
              <HiOutlineDotsHorizontal
  className="text-[#C4C7B7] cursor-pointer"
  onClick={() => setShowMenu(prev => !prev)}
/>

            </div>

            <AnimatePresence>
                {showMenu && (
                  <ListActions
                    menuRef={menuRef}
                    setShowMenu={setShowMenu}
                    setShowInput={setShowInput}
                    todos={todos}
                    setTodos={setTodos}
                    setListColor={setListColor}
                  />
                )}
              </AnimatePresence>
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
                  <div className="
                    absolute -top-6 left-1/2 -translate-x-1/2 
                    px-2 py-1 text-xs rounded-md
                    bg-black text-white whitespace-nowrap
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-200 pointer-events-none
                  ">
                    {todo.checked ? "Mark incomplete" : "Mark complete"}
                  </div>

                  <div
                    onClick={() => toggleCheck(todo.id)}
                    className={`
                      flex items-center justify-center cursor-pointer
                      transition-all duration-200 overflow-hidden
                      ${todo.checked
                        ? "h-4 w-4 opacity-100"
                        : "h-0 w-0 opacity-0 group-hover:h-4 group-hover:w-4 group-hover:opacity-100"}
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
                    ${!todo.checked ? "group-hover:translate-x-1 -ml-1" : ""}
                  `}
                >
                  {todo.text}
                </span>

                {/* DELETE */}
                <FaArchive
                  size={13}
                  onClick={() => deleteTodo(todo.id)}
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

          {/* Add Card */}
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
                <img src={createT} className=" w-5 h-5 brightness-200 saturate-0 invert-[75%]" />
              </span>
            </div>
          ) : (
            <div className="p-2 px-3">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full bg-[#1A1A1A] text-[#C4C7B7] outline-[#4d73ff] rounded-lg p-2 h-12"
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
        </div>
      )}

      {/* Minimized View */}
      {minimmize && (
        <div className=" rounded-lg h-30 w-10 flex items-center justify-center " style={{backgroundColor:listColor}}>
          <span className="rotate-90 origin-center text-white font-medium flex items-center justify-between gap-1">
            <span className="hover:bg-[#242528] rounded-md p-1 ml-2">
              <CiMaximize1
                onClick={() => setMinimize((prev) => !prev)}
                className="text-white rotate-135 origin-center"
              />
            </span>
            {title} <span className="text-white ml-4 mr-3">{todos.length}</span>
          </span>
        </div>
      )}
    </>
  );
};

export default ThisWeek;
