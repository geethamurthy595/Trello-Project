import React, { useState, useCallback } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import LaterList from "../../../components/boards/laterList/LaterList";

export default function AddListComponent() {
  // =========================
  // BOARD STATE
  // =========================
  const [lists, setLists] = useState([
    {
      id: "later-list-1",
      title: "Later",
      todos: [],
      color: "#0F0F0F",
    },
  ]);

  const [showInput, setShowInput] = useState(false);
  const [newListName, setNewListName] = useState("");

  // =========================
  // ADD NEW LIST
  // =========================
  const addList = useCallback(() => {
    const title = newListName.trim();
    if (!title) return;

    setLists((prev) => [
      ...prev,
      {
        id: `list-${Date.now()}`,
        title,
        todos: [],
        color: "#0F0F0F",
      },
    ]);

    setNewListName("");
    setShowInput(false);
  }, [newListName]);

  // =========================
  // UPDATE TODOS OF A LIST
  // =========================
  const updateListTodos = useCallback((listId, newTodos) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === listId ? { ...list, todos: newTodos } : list
      )
    );
  }, []);

  // =========================
  // UPDATE COLOR OF A LIST
  // =========================
  const updateListColor = useCallback((listId, color) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === listId ? { ...list, color } : list
      )
    );
  }, []);

  // =========================
  // RENDER
  // =========================
  return (
    <div className="p-6 overflow-x-auto">
      <div className="flex gap-4 items-start min-h-[200px]">
        {/* =========================
            ALL LISTS
        ========================= */}
        {lists.map((list) => (
          <LaterList
            key={list.id}
            title={list.title}
            todos={list.todos}
            setTodos={(newTodos) =>
              updateListTodos(list.id, newTodos)
            }
            listColor={list.color}
            setListColor={(color) =>
              updateListColor(list.id, color)
            }
          />
        ))}

        {/* =========================
            ADD LIST BUTTON / INPUT
        ========================= */}
        {!showInput ? (
          <button
            onClick={() => setShowInput(true)}
            className="
              bg-purple-200 text-purple-900
              px-4 py-3 rounded-lg shadow
              flex items-center gap-2
              min-w-[160px] h-fit
              hover:brightness-95
            "
          >
            <FaPlus />
            Add another list
          </button>
        ) : (
          <div className="bg-white p-4 rounded-xl shadow w-64">
            <input
              autoFocus
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              placeholder="Enter list name"
              className="
                w-full border border-gray-300
                rounded px-3 py-2 mb-3
                focus:outline-none focus:ring-2 focus:ring-blue-400
              "
              onKeyDown={(e) => {
                if (e.key === "Enter") addList();
                if (e.key === "Escape") {
                  setShowInput(false);
                  setNewListName("");
                }
              }}
            />

            <div className="flex items-center gap-2">
              <button
                onClick={addList}
                className="
                  bg-blue-600 text-white
                  px-3 py-1 rounded
                  hover:bg-blue-700 transition
                "
              >
                Add list
              </button>

              <button
                onClick={() => {
                  setShowInput(false);
                  setNewListName("");
                }}
                className="
                  text-gray-500 p-1 rounded
                  hover:bg-gray-100 hover:text-gray-700
                  transition
                "
              >
                <RxCross2 size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
