import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { LuPencil } from "react-icons/lu";
import { TbDots } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import ThisWeek from "../../boards/thisWeekList/ThisWeek";
import Today from "../today/Today";
import MyTrelloBoardGuide from "../MyTrelloBoardGuid";
import LaterList from "../../boards/laterList/LaterList";


export default function TrelloLikeBoard() {
    const STORAGE_KEY = "trelloData";

    const [lists, setLists] = useState([]);
    const [showListInput, setShowListInput] = useState(false);
    const [newListName, setNewListName] = useState("");
    const [openMenuListId, setOpenMenuListId] = useState(null);

    const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 });
    const [templatePosition, setTemplatePosition] = useState({ left: 0, top: 0 });
    const [showTemplateForListId, setShowTemplateForListId] = useState(null);

    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            try {
                setLists(JSON.parse(raw));
            } catch { }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
    }, [lists]);

    useEffect(() => {
        function handleClick() {
            setOpenMenuListId(null);
            setShowTemplateForListId(null);
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    function addList() {
        const title = newListName.trim();
        if (!title) return;
        setLists([...lists, { id: Date.now(), title, cards: [] }]);
        setNewListName("");
        setShowListInput(false);
    }

    function removeList(id) {
        setLists(lists.filter((l) => l.id !== id));
    }

    function addCard(listId, cardText) {
        if (!cardText.trim()) return;
        setLists(
            lists.map((l) =>
                l.id === listId
                    ? { ...l, cards: [...l.cards, { id: Date.now(), text: cardText }] }
                    : l
            )
        );
    }

    function updateCard(listId, cardId, newText) {
        setLists(
            lists.map((l) =>
                l.id === listId
                    ? {
                        ...l,
                        cards: l.cards.map((c) =>
                            c.id === cardId ? { ...c, text: newText } : c
                        ),
                    }
                    : l
            )
        );
    }

    function removeCard(listId, cardId) {
        setLists(
            lists.map((l) =>
                l.id === listId
                    ? { ...l, cards: l.cards.filter((c) => c.id !== cardId) }
                    : l
            )
        );
    }

    function openListActions(e, listId) {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();

        let left = rect.left;
        let top = rect.bottom + 8;

        const menuWidth = 288;
        if (left + menuWidth > window.innerWidth - 12) {
            left = window.innerWidth - menuWidth - 12;
        }
        if (left < 12) left = 12;

        setMenuPosition({ left, top });
        setOpenMenuListId(openMenuListId === listId ? null : listId);
    }

    function openTemplates(e, listId) {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();

        let left = rect.left;
        let top = rect.bottom + 10;

        const popupWidth = 360;
        if (left + popupWidth > window.innerWidth - 12) {
            left = window.innerWidth - popupWidth - 12;
        }
        if (left < 12) left = 12;

        setTemplatePosition({ left, top });
        setShowTemplateForListId(showTemplateForListId === listId ? null : listId);
    }

    return (
        <div className="p-6 overflow-x-scroll" >
            <div className="flex items-start space-x-4 pb-6 h-screen">
                <MyTrelloBoardGuide />
                <Today />
                <ThisWeek />
                <LaterList />

                
                {lists.map((list) => (
                    <div
                        key={list.id}
                        className="relative bg-black text-white rounded-xl w-71 p-4 flex-shrink-0 shadow overflow-visible "
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-3 ">
                            <strong className="">{list.title}</strong>

                            <button
                                onClick={(e) => openListActions(e, list.id)}
                                className=""
                            >
                                <TbDots />
                            </button>
                        </div>

                        {openMenuListId === list.id && (
                            <div
                                style={{ position: "fixed", left: menuPosition.left, top: menuPosition.top, zIndex: 60 }}
                                className="bg-white rounded-xl shadow-xl border w-72 p-4  "
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h2 className="text-md font-semibold">List actions</h2>

                                    <button
                                        onClick={() => setOpenMenuListId(null)}
                                        className="h-7  w-7 border border-blue-500 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-50"
                                    >
                                        <RxCross2 />
                                    </button>
                                </div>

                                <div className="space-y-1 text-gray-800">
                                    <button className="w-full text-left py-1 hover:bg-gray-100">Add card</button>
                                    <button className="w-full text-left py-1 hover:bg-gray-100">Copy list</button>
                                    <button className="w-full text-left py-1 hover:bg-gray-100">Move list</button>
                                    <button className="w-full text-left py-1 hover:bg-gray-100">Move all cards in this list</button>
                                    <button className="w-full text-left py-1 hover:bg-gray-100">Sort by...</button>
                                    <button className="w-full text-left py-1 hover:bg-gray-100">Watch</button>

                                    <hr className="my-2" />

                                    <button className="w-full text-left py-1 hover:bg-gray-100 flex items-center gap-2 text-blue-600">
                                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968875.png" className="h-4 w-4" />
                                        Add list from Jira work items
                                    </button>

                                    <hr className="my-2" />

                                    <div className="text-gray-500 text-xs font-semibold">Automation</div>
                                    <button className="w-full text-left py-1 hover:bg-gray-100">When a card is added to the list…</button>
                                    <button className="w-full text-left py-1 hover:bg-gray-100">Every day, sort list by…</button>
                                    <button className="w-full text-left py-1 hover:bg-gray-100">Every Monday, sort list by…</button>
                                    <button className="w-full text-left py-1 hover:bg-gray-100">Create a rule</button>

                                    <hr className="my-2" />

                                    <button onClick={() => removeList(list.id)} className="w-full text-left py-1 hover:bg-gray-100 text-red-600">Archive this list</button>
                                    <button className="w-full text-left py-1 hover:bg-gray-100 text-red-600">Archive all cards in this list</button>
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            {list.cards.map((card) => (
                                <EditableCard
                                    key={card.id}
                                    card={card}
                                    onRemove={() => removeCard(list.id, card.id)}
                                    onUpdate={(newText) => updateCard(list.id, card.id, newText)}
                                />
                            ))}
                        </div>

                        <AddCardInline onAdd={(text) => addCard(list.id, text)} onOpenTemplates={(e) => openTemplates(e, list.id)} />

                        {showTemplateForListId === list.id && (
                            <div
                                style={{ position: "fixed", left: templatePosition.left, top: templatePosition.top, zIndex: 55, width: 360 }}
                                className="bg-white rounded-xl shadow-xl border p-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-lg font-semibold">Card templates</h3>
                                    <button onClick={() => setShowTemplateForListId(null)} className="h-8 w-8 rounded-full border border-blue-300 flex items-center justify-center">
                                        <RxCross2 />
                                    </button>
                                </div>

                                <div className="text-gray-700">
                                    <p className="mb-3">You don’t have any templates. Create a template to make copying cards easy.</p>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Create a new template</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* FIX STARTS HERE */}
                <div className="flex-shrink-0 relative ">
                    {!showListInput ? (
                        <button
                            onClick={() => setShowListInput(true)}
                            className="flex items-center gap-2 bg-purple-200 text-purple-900 px-4 py-3 rounded-lg shadow hover:brightness-95"
                        >
                            <FaPlus className="text-[20px]" />
                            {lists.length === 0 ? "Add list" : "Add another list"}
                        </button>
                    ) : (
                        <div className="bg-black rounded-xl w-64 p-4 shadow relative overflow-visible border-red-500    ">
                            <input
                                autoFocus
                                value={newListName}
                                onChange={(e) => setNewListName(e.target.value)}
                                placeholder="Enter list name..."
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring text-white"
                            />

                            <div className="mt-3 flex items-center gap-3 relative">
                                <button onClick={addList} className="bg-[#478df7] hover:bg-[#669df1] text-black px-3 py-1 rounded">Add list</button>

                                <div className="relative">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setOpenMenuListId(openMenuListId === "addFrom" ? null : "addFrom");
                                        }}
                                        className="text-[#b6b7b8] flex items-center gap-1 "
                                    >
                                        Add from <FaAngleDown />
                                    </button>

                                    {openMenuListId === "addFrom" && (
                                        <div
                                            className="absolute left-0 top-[42px] w-56 bg-white rounded-xl shadow-xl border border-gray-300 z-30 p-3"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <p className="text-xs text-gray-600 mb-2 font-semibold">
                                                Add a list from:
                                            </p>

                                            <button
                                                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-500 hover:bg-blue-50 transition"
                                            >
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/512/5968/5968875.png"
                                                    className="h-4 w-4"
                                                />
                                                <span className="text-sm text-blue-600 font-medium">
                                                    Jira work items
                                                </span>
                                            </button>
                                        </div>
                                    )}

                                </div>

                                <button onClick={() => { setShowListInput(false); setNewListName(""); }} className="text-gray-500 ml-auto">
                                    <RxCross2 className="text-[20px]" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                {/* FIX ENDS */}

            </div>
        </div>
    );
}


/* --------------------------------------------------
    Editable CARD 
-------------------------------------------------- */
function EditableCard({ card, onRemove, onUpdate }) {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(card.text);
    const [completed, setCompleted] = useState(false);
    const [toast, setToast] = useState("");

    function save() {
        const trimmed = value.trim();
        if (trimmed) onUpdate(trimmed);
        setEditing(false);
    }

    return (
        <div
            className={`rounded p-2 flex items-center justify-between cursor-pointer relative
                ${editing ? "bg-white border border-blue-500 shadow-sm" : "bg-gray-100"}`}
            onClick={() => !editing && setEditing(true)}
        >
            {toast && (
                <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded shadow">
                    {toast}
                </div>
            )}

            <div
                onClick={(e) => {
                    e.stopPropagation();
                    const newState = !completed;
                    setCompleted(newState);
                    setToast(newState ? "Marked complete" : "Marked incomplete");
                    setTimeout(() => setToast(""), 1500);
                }}
                className={`mr-2 h-5 w-5 rounded-full border cursor-pointer flex items-center justify-center transition-all
                    ${completed ? "bg-green-500 border-green-600" : "bg-white border-gray-400"}`}
            >
                {completed && (
                    <span className="text-white text-[12px] font-bold">✓</span>
                )}
            </div>

            {editing ? (
                <input
                    autoFocus
                    className="flex-1 text-sm border border-gray-300 rounded px-2 py-1"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={save}
                    onKeyDown={(e) => e.key === "Enter" && save()}
                />
            ) : (
                <div className="flex-1 text-gray-800 text-sm">{card.text}</div>
            )}

            {editing ? (
                <LuPencil className="text-gray-500 text-lg ml-2" />
            ) : (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove();
                    }}
                    className="text-gray-400 hover:text-red-500 ml-2"
                >
                    <RxCross2 className="text-[20px]" />
                </button>
            )}
        </div>
    );
}


/* -----------------------------------------
  ADD CARD INLINE
----------------------------------------- */
function AddCardInline({ onAdd, onOpenTemplates }) {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    function submit() {
        if (!text.trim()) return;
        onAdd(text);
        setText("");
        setOpen(false);
    }

    if (!open) {
        return (
            <button onClick={() => setOpen(true)} className="mt-4 text-left text-sm text-white       flex items-center gap-2">
                <FaPlus className="text-[16px]" /> Add a card
            </button>
        );
    }

    return (
        <div className="mt-3 flex flex-col ">
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={3} className="w-full border border-gray-300 rounded px-2 py-2 text-sm focus:outline-none" />

            <div className="mt-2 flex gap-3 w-50 rounded">
                <button onClick={submit} className="text-white p-2 rounded text-sm hover:bg-[#2A2C21]">Add card</button>

                <button onClick={() => { setOpen(false); setText(""); }} className="text-gray-500"></button>
            </div>

            <img
                onClick={(e) => onOpenTemplates && onOpenTemplates(e)}
                className="h-7 w-7 ml-55 mt-[-35px] invert hover:rounded cursor-pointer"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zIDZWNUMzIDMuODk1NDMgMy44OTU0MyAzIDUgM0g2QzYuNTUyMjggMyA3IDMuNDQ3NzIgNyA0QzcgNC41NTIyOCA2LjU1MjI4IDUgNiA1SDVWNkM1IDYuNTUyMjggNC41NTIyOCA3IDQgN0MzLjQ0NzcyIDcgMyA2LjU1MjI4IDMgNloiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiA4QzYgNi44OTU0MyA2Ljg5NTQzIDYgOCA2SDE5QzIwLjEwNDYgNiAyMSA2Ljg5NTQzIDIxIDhWMThDMjEgMTkuMTA0NiAyMC4xMDQ2IDIwIDE5IDIwSDhDNi44OTU0MyAyMCA2IDE5LjEwNDYgNiAxOFY4Wk04IDhIMTlWMTRIOFY4Wk0xOCAxOEMxNy40NDc3IDE4IDE3IDE3LjU1MjMgMTcgMTdDMTcgMTYuNDQ3NyAxNy40NDc3IDE2IDE4IDE2QzE4LjU1MjMgMTYgMTkgMTYuNDQ3NyAxOSAxN0MxOSAxNy41NTIzIDE4LjU1MjMgMTggMTggMThaTTggMTdDOCAxNy41NTIzIDguNDQ3NzIgMTggOSAxOEgxMkMxMi41NTIzIDE4IDEzIDE3LjU1MjMgMTMgMTdDMTMgMTYuNDQ3NyAxMi41NTIzIDE2IDEyIDE2SDlDOC40NDc3MiAxNiA4IDE2LjQ0NzcgOCAxN1oiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjxwYXRoIGQ9Ik00IDE0QzMuNDQ3NzIgMTQgMyAxNC40NDc3IDMgMTVWMTZDMyAxNy4xMDQ2IDMuODk1NDMgMTggNSAxOFYxNUM1IDE0LjQ0NzcgNC41NTIyOCAxNCA0IDE0WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg+PHBhdGggZD0iTTMgOUMzIDguNDQ3NzIgMy40NDc3MiA4IDQgOEM0LjU1MjI4IDggNSA4LjQ0NzcyIDUgOVYxMkM1IDEyLjU1MjMgNC41NTIyOCAxMyA0IDEzQzMuNDQ3NzIgMTMgMyAxMi41NTIzIDMgMTJWOVoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjxwYXRoIGQ9Ik04IDRDOCAzLjQ0NzcyIDguNDQ3NzIgMyA5IDNIMTNDMTMuNTUyMyAzIDE0IDMuNDQ3NzIgMTQgNEMxNCA0LjU1MjI4IDEzLjU1MjMgNSAxMyA1SDlDOC40NDc3MiA1IDggNC41NTIyOCA4IDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBkPSJNMTYgM0MxNS40NDc3IDMgMTUgMy40NDc3MiAxNSA0QzE1IDQuNTUyMjggMTUuNDQ3NyA1IDE2IDVIMTlDMTkgMy44OTU0MyAxOC4xMDQ2IDMgMTcgM0gxNloiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg=="
            />
        </div>
    );
}
