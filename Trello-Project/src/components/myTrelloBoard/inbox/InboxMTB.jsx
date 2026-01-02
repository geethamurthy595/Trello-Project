import React, { useEffect, useState } from "react";
import { HiOutlineInbox } from "react-icons/hi";
import { FaRegEdit, FaRegImage } from "react-icons/fa";
import { MdOutlineContentCopy, MdDateRange, MdOpenInNew } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { BiMoveHorizontal } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";


export default function InboxMTB() {
  const STORAGE_KEY = "inboxExactCards_v1";

  const [cards, setCards] = useState([]);
  const [openInput, setOpenInput] = useState(false);
  const [text, setText] = useState("");

  // Inline editor state
  const [openInlineId, setOpenInlineId] = useState(null);
  const [inlineText, setInlineText] = useState("");

  // Modal editor state
  const [openModalId, setOpenModalId] = useState(null);
  const [modalText, setModalText] = useState("");

  const [toast, setToast] = useState(null); // archive toast
  const [undoData, setUndoData] = useState(null); // for undo archive

  const [checkToast, setCheckToast] = useState(null); // radio toast
  const [undoCheck, setUndoCheck] = useState(null); // for undo radio action

  const [openConsolidate, setOpenConsolidate] = useState(false);

  // inject small keyframes once
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes drawerUp {
        0% { transform: translateY(90px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes modalUp {
        0% { transform: translateY(24px) scale(.98); opacity: 0; }
        100% { transform: translateY(0) scale(1); opacity: 1; }
      }
      .animate-drawerUp { animation: drawerUp .32s cubic-bezier(.22,.9,.35,1) both; }
      .animate-fadeIn { animation: fadeIn .24s ease both; }
      .animate-modalUp { animation: modalUp .22s cubic-bezier(.22,.9,.35,1) both; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // load cards
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setCards(JSON.parse(raw));
  }, []);

  // save cards
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  }, [cards]);

  // lock body scroll when overlays open
  useEffect(() => {
    const anyOpen = openConsolidate || openInlineId !== null || openModalId !== null;
    document.body.style.overflow = anyOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openConsolidate, openInlineId, openModalId]);

  // add card
  function addCard() {
    if (!text.trim()) return;
    setCards((p) => [...p, { id: Date.now(), text: text.trim(), completed: false }]);
    setText("");
    setOpenInput(false);
  }

  // open inline editor
  function openInlineEditor(card) {
    setOpenInlineId(card.id);
    setInlineText(card.text);
    // ensure modal closed
    setOpenModalId(null);
  }

  // save inline edit
  function saveInline() {
    if (openInlineId === null) return;
    setCards((prev) =>
      prev.map((c) => (c.id === openInlineId ? { ...c, text: inlineText.trim() } : c))
    );
    setOpenInlineId(null);
    setInlineText("");
  }

  // open modal editor (from inline menu or otherwise)
  function openModal(card) {
    setOpenModalId(card.id);
    setModalText(card.text);
    // close inline (so only one editor visible)
    setOpenInlineId(null);
  }

  // save modal edit
  function saveModal() {
    if (openModalId === null) return;
    setCards((prev) =>
      prev.map((c) => (c.id === openModalId ? { ...c, text: modalText.trim() } : c))
    );
    setOpenModalId(null);
    setModalText("");
  }

  // archive card
  function archiveCard(id) {
    const card = cards.find((c) => c.id === id);
    if (!card) return;
    setUndoData(card);
    setToast(`${card.text} archived`);
    setCards((prev) => prev.filter((c) => c.id !== id));
    setOpenInlineId(null);
    setOpenModalId(null);

    setTimeout(() => {
      setToast(null);
      setUndoData(null);
    }, 4000);
  }

  // undo archive
  function undo() {
    if (!undoData) return;
    setCards((p) => [...p, undoData]);
    setUndoData(null);
    setToast(null);
  }

  // toggle complete (radio) with undo snapshot
  function toggleComplete(card) {
    const prevState = card.completed;
    const nextState = !prevState;
    setUndoCheck({ id: card.id, prevState });
    setCards((p) => p.map((c) => (c.id === card.id ? { ...c, completed: nextState } : c)));
    setCheckToast(`${card.text} ${nextState ? "marked complete" : "marked incomplete"}`);
    setTimeout(() => setCheckToast(null), 3000);
  }

  // undo radio action
  function undoRadio() {
    if (!undoCheck) return;
    setCards((prev) => prev.map((c) => (c.id === undoCheck.id ? { ...c, completed: undoCheck.prevState } : c)));
    setUndoCheck(null);
    setCheckToast(null);
  }

  return (
    <>
      <div className="min-h-screen bg-[#0b2A47] text-white p-6">
        {/* header */}
        <div className="flex items-center gap-3 mb-6">
          <HiOutlineInbox className="text-[24px]" />
          <span className="font-semibold text-lg">Inbox</span>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* add */}
          {!openInput ? (
            <button
              onClick={() => setOpenInput(true)}
              className="w-full bg-[#1F1F1F] border border-gray-700 p-3 rounded-xl text-left text-gray-300"
            >
              Add a card
            </button>
          ) : (
            <div className="bg-[#1F1F1F] border border-gray-700 rounded-xl">
              <textarea
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full bg-[#2A2A2A] p-3 text-gray-100 rounded-t-xl outline-none"
                placeholder="Enter a title"
              />
              <div className="flex gap-3 p-3">
                <button onClick={addCard} className="bg-blue-600 px-4 py-1 rounded">Add</button>
                <button onClick={() => { setOpenInput(false); setText(""); }} className="text-gray-300">Cancel</button>
              </div>
            </div>
          )}

          {/* card list */}
          <div className="mt-4 space-y-3">
            {cards.map((c) =>
              openInlineId === c.id ? (
                /* inline editor view */
                <div key={c.id} className="flex gap-6 bg-[#0E1A1F] p-4 rounded-xl border border-gray-700">
                  <div className="flex-1">
                    <textarea
                      rows={6}
                      value={inlineText}
                      onChange={(e) => setInlineText(e.target.value)}
                      className="w-full bg-[#111] text-white p-3 rounded-lg border border-gray-600 outline-none"
                    />
                    <div className="flex gap-3 mt-3">
                      <button onClick={saveInline} className="bg-blue-600 px-4 py-2 rounded">Save</button>
                      <button onClick={() => { setOpenInlineId(null); setInlineText(""); }} className="text-gray-300">Cancel</button>
                    </div>
                  </div>

                  {/* right menu */}
                  <div className="flex flex-col gap-2 w-44">
                    <button className="menu-btn" onClick={() => openModal(c)}>
                      <MdOpenInNew className="inline mr-2 align-middle" /> Open card
                    </button>

                    <button className="menu-btn">
                      <FaRegImage className="inline mr-2 align-middle" /> Change cover
                    </button>

                    <button className="menu-btn">
                      <MdDateRange className="inline mr-2 align-middle" /> Edit dates
                    </button>

                    <button className="menu-btn">
                      <BiMoveHorizontal className="inline mr-2 align-middle" /> Move
                    </button>

                    <button className="menu-btn">
                      <MdOutlineContentCopy className="inline mr-2 align-middle" /> Copy card
                    </button>

                    <button className="menu-btn">
                      <AiOutlineLink className="inline mr-2 align-middle" /> Copy link
                    </button>

                    <button onClick={() => archiveCard(c.id)} className="menu-btn bg-red-600 text-white">
                      🗄 Archive
                    </button>
                  </div>
                </div>
              ) : (
                /* normal card */
                <div key={c.id} className="group flex items-center justify-between bg-[#111] px-3 py-2 rounded-lg border border-gray-700 hover:border-white transition">
                  <div className="flex items-center gap-3">
                    <div
                      onClick={() => toggleComplete(c)}
                      className={`h-4 w-4 rounded-full border flex items-center justify-center cursor-pointer
                        ${c.completed ? "bg-green-500 border-green-600 text-white" : "bg-white border-gray-400"}
                        opacity-0 group-hover:opacity-100 transition`}
                      title="Mark complete"
                    >
                      {c.completed && <span className="text-[10px]">✓</span>}
                    </div>

                    <div className={c.completed ? "text-gray-400" : ""}>{c.text}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={() => openInlineEditor(c)} className="opacity-0 group-hover:opacity-100 transition">
                      <FaRegEdit className="text-gray-300 text-[18px]" />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {/* consolidate widget */}
            <div className="mt-100 ml-[20%]">
              <ConsolidateWidget open={openConsolidate} setOpen={setOpenConsolidate} />
            </div>
      </div>

      {/* radio toast */}
      {checkToast && (
        <div className="fixed bottom-6 left-6 bg-[#151515] text-white px-6 py-4 rounded-lg border border-gray-700 shadow-xl">
          <div className="font-semibold">{checkToast}</div>
          <button onClick={undoRadio} className="text-blue-400 text-sm mt-2">Undo</button>
        </div>
      )}

      {/* archive toast */}
      {toast && (
        <div className="fixed bottom-6 left-6 bg-[#151515] text-white px-6 py-4 rounded-lg border border-gray-700 shadow-xl">
          <div className="font-semibold">{toast}</div>
          <button onClick={undo} className="text-blue-400 text-sm mt-2">Undo</button>
        </div>
      )}

      {/* modal editor */}
      {openModalId !== null && (
        <ModalEditor
          card={cards.find((c) => c.id === openModalId)}
          value={modalText}
          setValue={setModalText}
          onSave={saveModal}
          onClose={() => { setOpenModalId(null); setModalText(""); }}
          onArchive={() => archiveCard(openModalId)}
        />
      )}

      {/* consolidate widget
      <ConsolidateWidget open={openConsolidate} setOpen={setOpenConsolidate} /> */}

      {/* inline menu css */}
      <style>{`
        .menu-btn {
          background: #1a1d20;
          border: 1px solid #2c2f33;
          padding: 8px 10px;
          border-radius: 8px;
          text-align: left;
          font-size: 14px;
          color: #ddd;
          display: flex;
          align-items: center;
        }
        .menu-btn:hover { background: #2b2f33; }
      `}</style>
    </>
  );
}

/* Modal editor component (center overlay) */
function ModalEditor({ card, value, setValue, onSave, onClose, onArchive }) {
  // close if card removed
  useEffect(() => {
    if (!card) onClose();
  }, [card, onClose]);

  if (!card) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center animate-fadeIn">
      <div className="w-[70%] max-w-2xl bg-[#0E1620] rounded-xl border border-[#1F2730] shadow-2xl p-6 animate-modalUp">
        <div className="flex items-center justify-between mb-4">
          <div className="h-2 w-10 rounded-full bg-[#15181A] opacity-80" />
          <button onClick={onClose} className="text-gray-300 text-sm hover:text-white">Close</button>
        </div>

        <h3 className="text-white text-lg font-semibold mb-2">Edit card</h3>
        <p className="text-gray-400 text-sm mb-4">Change the card title and save.</p>

        <textarea
          rows={6}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-[#0B1216] text-white p-4 rounded-lg border border-[#22272b] outline-none"
        />

        <div className="mt-4 flex items-center gap-3 justify-between">
          <button onClick={onArchive} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Archive</button>

          <div className="flex gap-3">
            <button onClick={onClose} className="px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-[#111]">Cancel</button>
            <button onClick={onSave} className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ConsolidateWidget + Circle */
/* ConsolidateWidget – with real icons */
function ConsolidateWidget({ open, setOpen }) {
  const minimized = !open;

  const IconCircle = ({ color, glow, children }) => (
    <div
      className="h-20 w-20 rounded-full flex items-center justify-center bg-[#0E1A25]"
      style={{
        border: `2px solid ${color}`,
        boxShadow: `0 0 16px ${glow}`,
      }}
    >
      {children}
    </div>
  );

  return (
    <>
      {/* MINIMIZED BAR */}
      {minimized && (
        <div
          onClick={() => setOpen(true)}
          className=" w-[75%] max-w-4xl cursor-pointer z-[999] "
        >
          <div className="bg-[#151819] border border-[#2A2F33] rounded-full px-6 py-4 flex items-center justify-between shadow-xl">
            <div className="flex gap-2">
              <img src="https://trello.com/assets/19f179843a3db14b1b3b.png" className="h-10" alt="" />
            </div>

            <div className="text-gray-300 text-[15px]">
              Consolidate your to-dos
            </div>

            <svg width="16" height="16" stroke="#cbd5e1" fill="none" strokeWidth="2">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </div>
        </div>
      )}

      {/* OPEN PANEL */}
      {!minimized && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[999] animate-fadeIn  ">
          <div className="w-[65%] max-w-3xl rounded-[26px] bg-[#0F1623] border border-[#1E2630]  animate-drawerUp animate-fadeOut ">

            {/* HEADER */}
             
              <button onClick={() => setOpen(false)} className="text-gray-300 flex items-center gap-5     hover:bg-[#323741] rounded-tr-3xl  ml-161  mt-0 rounded  p-3 ">
                Minimize
                 <IoIosArrowDown />
              </button>
             

            <div className="mb-8 ">
              <div />
              <h2 className="text-[#B6B8BB] text-xl font-semibold ml-70 ">
                Consolidate your to-dos
              </h2>
             
            </div>
            
            <p className="text-gray-400 text-center text-sm">
              Email it, say it, forward it — however it comes, get it into Trello fast.
            </p>

            {/* ICON LAYOUT (EXACT LIKE IMAGE) */}
            <div className="mt-12 flex flex-col items-center gap-14 fixed">

              {/* TOP ROW */}
              <div className="flex gap-16">
                {/* EMAIL */}
                <IconCircle color="#3B82F6" glow="#3B82F688">
                  <svg width="28" height="28" stroke="#3B82F6" fill="none" strokeWidth="1.8">
                    <rect x="4" y="6" width="20" height="14" rx="3" />
                    <path d="M4 6l10 7 10-7" />
                  </svg>
                </IconCircle>

                {/* CHROME */}
                <IconCircle color="#FACC15" glow="#FACC1588" >
                 <img className="h-7" src="https://trello.com/assets/36255fdc284b77527b67.svg" alt="" />
                </IconCircle>
              </div>

              {/* CENTER */}
              <IconCircle color="#FACC15" glow="#FACC1588">
                <svg width="22" height="28" stroke="#FACC15" fill="none" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="3" />
                  <circle cx="12" cy="18" r="1.5" fill="#FACC15" />
                </svg>
              </IconCircle>

              {/* BOTTOM ROW */}
              <div className="flex gap-16">
                {/* SLACK */}
                <IconCircle color="#22C55E" glow="#22C55E88">
                 <img className="h-7" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtdGVzdGlkPSJTbGFja0NvbG9ySWNvbiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ljg2NjMyIDRDOC45ODE4NiA0LjAwMDY1IDguMjY2MDYgNC43MTY5OCA4LjI2NjcxIDUuNTk5NjdDOC4yNjYwNiA2LjQ4MjM2IDguOTgyNTEgNy4xOTg3IDkuODY2OTcgNy4xOTkzNUgxMS40NjcyVjUuNjAwMzNDMTEuNDY3OSA0LjcxNzY0IDEwLjc1MTQgNC4wMDEzIDkuODY2MzIgNEM5Ljg2Njk3IDQgOS44NjY5NyA0IDkuODY2MzIgNFpNOS44NjYzMiA4LjI2NjY3SDUuNjAwMjZDNC43MTU4IDguMjY3MzIgMy45OTkzNSA4Ljk4MzY1IDQgOS44NjYzNEMzLjk5ODY5IDEwLjc0OSA0LjcxNTE1IDExLjQ2NTQgNS41OTk2MSAxMS40NjY3SDkuODY2MzJDMTAuNzUwOCAxMS40NjYgMTEuNDY3MiAxMC43NDk3IDExLjQ2NjYgOS44NjY5OUMxMS40NjcyIDguOTgzNjUgMTAuNzUwOCA4LjI2NzMyIDkuODY2MzIgOC4yNjY2N1oiIGZpbGw9IiMzNkM1RjAiPjwvcGF0aD48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5Ljk5OTggOS44NjYzNEMyMC4wMDA0IDguOTgzNjUgMTkuMjg0IDguMjY3MzIgMTguMzk5NSA4LjI2NjY3QzE3LjUxNTEgOC4yNjczMiAxNi43OTg2IDguOTgzNjUgMTYuNzk5MyA5Ljg2NjM0VjExLjQ2NjdIMTguMzk5NUMxOS4yODQgMTEuNDY2IDIwLjAwMDQgMTAuNzQ5NyAxOS45OTk4IDkuODY2MzRaTTE1LjczMzEgOS44NjYzNFY1LjU5OTY3QzE1LjczMzcgNC43MTc2NCAxNS4wMTc5IDQuMDAxMyAxNC4xMzM1IDRDMTMuMjQ5IDQuMDAwNjUgMTIuNTMyNiA0LjcxNjk4IDEyLjUzMzIgNS41OTk2N1Y5Ljg2NjM0QzEyLjUzMTkgMTAuNzQ5IDEzLjI0ODQgMTEuNDY1NCAxNC4xMzI4IDExLjQ2NjdDMTUuMDE3MyAxMS40NjYgMTUuNzMzNyAxMC43NDk3IDE1LjczMzEgOS44NjYzNFoiIGZpbGw9IiMyRUI2N0QiPjwvcGF0aD48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjEzMzUgMjBDMTUuMDE3OSAxOS45OTk0IDE1LjczNDQgMTkuMjgzMSAxNS43MzM3IDE4LjQwMDRDMTUuNzM0NCAxNy41MTc3IDE1LjAxNzkgMTYuODAxMyAxNC4xMzM1IDE2LjgwMDdIMTIuNTMzMlYxOC40MDA0QzEyLjUzMjUgMTkuMjgyNCAxMy4yNDkgMTkuOTk4NyAxNC4xMzM1IDIwWk0xNC4xMzM1IDE1LjczMjdIMTguNDAwMkMxOS4yODQ2IDE1LjczMjEgMjAuMDAxMSAxNS4wMTU3IDIwLjAwMDQgMTQuMTMzQzIwLjAwMTcgMTMuMjUwMyAxOS4yODUzIDEyLjUzNCAxOC40MDA4IDEyLjUzMjdIMTQuMTM0MUMxMy4yNDk3IDEyLjUzMzQgMTIuNTMzMiAxMy4yNDk3IDEyLjUzMzkgMTQuMTMyNEMxMi41MzMyIDE1LjAxNTcgMTMuMjQ5IDE1LjczMjEgMTQuMTMzNSAxNS43MzI3WiIgZmlsbD0iI0VDQjIyRSI+PC9wYXRoPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCAxNC4xMzMxQzMuOTk5MzUgMTUuMDE1OCA0LjcxNTggMTUuNzMyMSA1LjYwMDI2IDE1LjczMjhDNi40ODQ3MiAxNS43MzIxIDcuMjAxMTggMTUuMDE1OCA3LjIwMDUyIDE0LjEzMzFWMTIuNTMzNEg1LjYwMDI2QzQuNzE1OCAxMi41MzQxIDMuOTk5MzUgMTMuMjUwNCA0IDE0LjEzMzFaTTguMjY2NzEgMTQuMTMzMVYxOC4zOTk4QzguMjY1NCAxOS4yODI1IDguOTgxODYgMTkuOTk4OCA5Ljg2NjMyIDIwLjAwMDFDMTAuNzUwOCAxOS45OTk1IDExLjQ2NzIgMTkuMjgzMSAxMS40NjY2IDE4LjQwMDRWMTQuMTM0NEMxMS40Njc5IDEzLjI1MTcgMTAuNzUxNCAxMi41MzU0IDkuODY2OTcgMTIuNTM0MUM4Ljk4MTg2IDEyLjUzNDEgOC4yNjYwNiAxMy4yNTA0IDguMjY2NzEgMTQuMTMzMVoiIGZpbGw9IiNFMDFFNUEiPjwvcGF0aD48L3N2Zz4=" alt="" />
                </IconCircle>

                {/* TEAMS */}
                <IconCircle color="#A855F7" glow="#A855F788">
                 <img className="h-7" src="data:image/svg+xml;base64,PHN2ZyBkYXRhLXRlc3RpZD0ibWljcm9zb2Z0LXRlYW1zLWljb24iIGRhdGEtY2xpcC1wYXRoLWlkPSJjbGlwLTpyMjoiIGRhdGEtZ3JhZGllbnQtaWQ9ImdyYWRpZW50LTpyMjoiIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDE2IDE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwLTpyMjopIj48cGF0aCBkPSJNMTAuNjMzMyA2LjQ0OTcxSDE0LjA3NzRDMTQuNDAyNyA2LjQ0OTcxIDE0LjY2NjUgNi43MTM0NiAxNC42NjY1IDcuMDM4ODRWMTAuMTc1OUMxNC42NjY1IDExLjM3MTggMTMuNjk3MSAxMi4zNDEyIDEyLjUwMTIgMTIuMzQxMkgxMi40OTFDMTEuMjk1MiAxMi4zNDEzIDEwLjMyNTYgMTEuMzcyMSAxMC4zMjU0IDEwLjE3NjJDMTAuMzI1NCAxMC4xNzYxIDEwLjMyNTQgMTAuMTc2IDEwLjMyNTQgMTAuMTc1OVY2Ljc1NzYxQzEwLjMyNTQgNi41ODc1NCAxMC40NjMzIDYuNDQ5NzEgMTAuNjMzMyA2LjQ0OTcxWiIgZmlsbD0iIzUwNTlDOSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMi45NjEzIDUuODI5NzZDMTMuNzMxOSA1LjgyOTc2IDE0LjM1NjYgNS4yMDUwNCAxNC4zNTY2IDQuNDM0NDFDMTQuMzU2NiAzLjY2Mzc4IDEzLjczMTkgMy4wMzkwNiAxMi45NjEzIDMuMDM5MDZDMTIuMTkwNiAzLjAzOTA2IDExLjU2NTkgMy42NjM3OCAxMS41NjU5IDQuNDM0NDFDMTEuNTY1OSA1LjIwNTA0IDEyLjE5MDYgNS44Mjk3NiAxMi45NjEzIDUuODI5NzZaIiBmaWxsPSIjNTA1OUM5Ij48L3BhdGg+PHBhdGggZD0iTTguNjIwMDIgNS44Mjk4OEM5LjczMzE2IDUuODI5ODggMTAuNjM1NSA0LjkyNzUgMTAuNjM1NSAzLjgxNDM1QzEwLjYzNTUgMi43MDEyMSA5LjczMzE2IDEuNzk4ODMgOC42MjAwMiAxLjc5ODgzQzcuNTA2ODcgMS43OTg4MyA2LjYwNDQ5IDIuNzAxMjEgNi42MDQ0OSAzLjgxNDM1QzYuNjA0NDkgNC45Mjc1IDcuNTA2ODcgNS44Mjk4OCA4LjYyMDAyIDUuODI5ODhaIiBmaWxsPSIjN0I4M0VCIj48L3BhdGg+PHBhdGggZD0iTTExLjMwNzUgNi40NDk3MUg1LjYyMjU2QzUuMzAxMDggNi40NTc2NiA1LjA0NjcxIDYuNzI0NDcgNS4wNTQxOSA3LjA0NjAxVjEwLjYyNEM1LjAwOTI2IDEyLjU1MzQgNi41MzU3NCAxNC4xNTQ0IDguNDY1MDcgMTQuMjAxNkMxMC4zOTQ0IDE0LjE1NDQgMTEuOTIwOCAxMi41NTM0IDExLjg3NTkgMTAuNjI0VjcuMDQ2MDFDMTEuODgzNCA2LjcyNDQ3IDExLjYyOTEgNi40NTc2NiAxMS4zMDc1IDYuNDQ5NzFaIiBmaWxsPSIjN0I4M0VCIj48L3BhdGg+PHBhdGggb3BhY2l0eT0iMC4xIiBkPSJNOC43NzUwNSA2LjQ0OTcxVjExLjQ2MzdDOC43NzM1IDExLjY5MzcgOC42MzQxNyAxMS45MDAyIDguNDIxNTYgMTEuOTg3N0M4LjM1Mzg0IDEyLjAxNjQgOC4yODExIDEyLjAzMTEgOC4yMDc1OCAxMi4wMzEySDUuMzI2OTZDNS4yODY2NCAxMS45Mjg5IDUuMjQ5NDQgMTEuODI2NSA1LjIxODQ1IDExLjcyMTFDNS4xMDk5MyAxMS4zNjUzIDUuMDU0NTMgMTAuOTk1NCA1LjA1NDEyIDEwLjYyMzRWNy4wNDUwNkM1LjA0NjY0IDYuNzI0MDUgNS4zMDA1OCA2LjQ1NzY2IDUuNjIxNTMgNi40NDk3MUg4Ljc3NTA1WiIgZmlsbD0iYmxhY2siPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik04LjQ2NDk5IDYuNDQ5NzFWMTEuNzczOEM4LjQ2NDk5IDExLjg0NzMgOC40NTAyMiAxMS45MiA4LjQyMTU2IDExLjk4NzdDOC4zMzQwNCAxMi4yMDAzIDguMTI3NDggMTIuMzM5NyA3Ljg5NzUyIDEyLjM0MTJINS40NzI2OUM1LjQxOTk5IDEyLjIzODkgNS4zNzA0IDEyLjEzNjYgNS4zMjY5NiAxMi4wMzEyQzUuMjgzNTMgMTEuOTI1OCA1LjI0OTQ0IDExLjgyNjUgNS4yMTg0NSAxMS43MjExQzUuMTA5OTMgMTEuMzY1MyA1LjA1NDUzIDEwLjk5NTQgNS4wNTQxMiAxMC42MjM0VjcuMDQ1MDZDNS4wNDY2NCA2LjcyNDA1IDUuMzAwNTggNi40NTc2NiA1LjYyMTUzIDYuNDQ5NzFIOC40NjQ5OVoiIGZpbGw9ImJsYWNrIj48L3BhdGg+PHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNOC40NjQ5OSA2LjQ0OTcxVjExLjE1MzZDOC40NjI2IDExLjQ2NiA4LjIwOTk3IDExLjcxODcgNy44OTc1OCAxMS43MjFINS4yMTg0NUM1LjEwOTkzIDExLjM2NTIgNS4wNTQ1MyAxMC45OTUzIDUuMDU0MTIgMTAuNjIzM1Y3LjA0NTA2QzUuMDQ2NjQgNi43MjQwNSA1LjMwMDU4IDYuNDU3NjYgNS42MjE1MyA2LjQ0OTcxSDguNDY0OTlaIiBmaWxsPSJibGFjayI+PC9wYXRoPjxwYXRoIG9wYWNpdHk9IjAuMiIgZD0iTTguMTU0ODggNi40NDk3MVYxMS4xNTM2QzguMTUyNDggMTEuNDY2IDcuODk5ODUgMTEuNzE4NyA3LjU4NzQ2IDExLjcyMUg1LjIxODQ1QzUuMTA5OTMgMTEuMzY1MiA1LjA1NDUzIDEwLjk5NTMgNS4wNTQxMiAxMC42MjMzVjcuMDQ1MDZDNS4wNDY2NCA2LjcyNDA1IDUuMzAwNTggNi40NTc2NiA1LjYyMTUzIDYuNDQ5NzFIOC4xNTQ4OFoiIGZpbGw9ImJsYWNrIj48L3BhdGg+PHBhdGggb3BhY2l0eT0iMC4xIiBkPSJNOC43NzUxNyA0Ljg0NjY1VjUuODIzNDNDOC43MjI0NyA1LjgyNjU0IDguNjcyODggNS44Mjk2NSA4LjYyMDExIDUuODI5NjVDOC41NjczNSA1LjgyOTY1IDguNTE3ODIgNS44MjY1NCA4LjQ2NTA1IDUuODIzNDNDOC4zNjAzNyA1LjgxNjQ5IDguMjU2NTcgNS43OTk4NiA4LjE1NSA1Ljc3MzgzQzcuNTI3MSA1LjYyNTEyIDcuMDA4MzMgNS4xODQ3NiA2Ljc1OTY1IDQuNTg5MzVDNi43MTY4NyA0LjQ4OTM5IDYuNjgzNjEgNC4zODU1NCA2LjY2MDQgNC4yNzkzSDguMjA3N0M4LjUyMDYzIDQuMjgwNDMgOC43NzM5OCA0LjUzMzc4IDguNzc1MTcgNC44NDY2NVoiIGZpbGw9ImJsYWNrIj48L3BhdGg+PHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNOC40NjUxNyA1LjE1NzJWNS44MjM5MUM4LjM2MDQ5IDUuODE2OTcgOC4yNTY2OSA1LjgwMDM0IDguMTU1MTIgNS43NzQzMkM3LjUyNzIyIDUuNjI1NiA3LjAwODQ1IDUuMTg1MjUgNi43NTk3NyA0LjU4OTg0SDcuODk3NzZDOC4yMTA2MyA0LjU5MDk4IDguNDYzOTggNC44NDQzMyA4LjQ2NTE3IDUuMTU3MloiIGZpbGw9ImJsYWNrIj48L3BhdGg+PHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNOC40NjUxNyA1LjE1NzJWNS44MjM5MUM4LjM2MDQ5IDUuODE2OTcgOC4yNTY2OSA1LjgwMDM0IDguMTU1MTIgNS43NzQzMkM3LjUyNzIyIDUuNjI1NiA3LjAwODQ1IDUuMTg1MjUgNi43NTk3NyA0LjU4OTg0SDcuODk3NzZDOC4yMTA2MyA0LjU5MDk4IDguNDYzOTggNC44NDQzMyA4LjQ2NTE3IDUuMTU3MloiIGZpbGw9ImJsYWNrIj48L3BhdGg+PHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNOC4xNTUxMiA1LjE1NzI2VjUuNzc0MzJDNy41MjcyMiA1LjYyNTYgNy4wMDg0NSA1LjE4NTI1IDYuNzU5NzcgNC41ODk4NEg3LjU4NzdDNy45MDA1NyA0LjU5MTA0IDguMTUzOTIgNC44NDQzOSA4LjE1NTEyIDUuMTU3MjZaIiBmaWxsPSJibGFjayI+PC9wYXRoPjxwYXRoIGQ9Ik0xLjkwMTYyIDQuNTg5ODRINy41ODY1OEM3LjkwMDQ2IDQuNTg5ODQgOC4xNTQ5NSA0Ljg0NDMzIDguMTU0OTUgNS4xNTgyMVYxMC44NDMyQzguMTU0OTUgMTEuMTU3MSA3LjkwMDQ2IDExLjQxMTUgNy41ODY1OCAxMS40MTE1SDEuOTAxNjJDMS41ODc3NCAxMS40MTE1IDEuMzMzMjUgMTEuMTU3MSAxLjMzMzI1IDEwLjg0MzJWNS4xNTgyMUMxLjMzMzI1IDQuODQ0MzMgMS41ODc3NCA0LjU4OTg0IDEuOTAxNjIgNC41ODk4NFoiIGZpbGw9InVybCgjZ3JhZGllbnQtOnIyOikiPjwvcGF0aD48cGF0aCBkPSJNNi4yNDAxOCA2Ljc1MzY0SDUuMTAzNzRWOS44NDgyM0g0LjM3OTcxVjYuNzUzNjRIMy4yNDg1NFY2LjE1MzMySDYuMjQwMThWNi43NTM2NFoiIGZpbGw9IndoaXRlIj48L3BhdGg+PC9nPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQtOnIyOiIgeDE9IjIuNTE4MzIiIHkxPSI0LjE0NTczIiB4Mj0iNi45Njk4OSIgeTI9IjExLjg1NTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNUE2MkMzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIwLjUiIHN0b3AtY29sb3I9IiM0RDU1QkQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzOTQwQUIiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxjbGlwUGF0aCBpZD0iY2xpcC06cjI6Ij48cmVjdCB3aWR0aD0iMTMuMzMzMyIgaGVpZ2h0PSIxMi40MDMxIiBmaWxsPSJ0cmFuc3BhcmVudCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4zMzMyNSAxLjc5ODgzKSI+PC9yZWN0PjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==" alt="" />
                </IconCircle>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-12 flex justify-center items-center gap-2 text-gray-400 text-sm  mb-10">
              <svg width="16" height="16" stroke="#9ca3af" fill="none" strokeWidth="1.5">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
              Inbox is only visible to you
            </div>
          </div>
        </div>
      )}
    </>
  );
}
