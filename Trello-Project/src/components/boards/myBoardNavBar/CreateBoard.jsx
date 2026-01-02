import cb1 from "../../../assets/cb1.svg";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const CreateBoard = () => {
  const backgrounds = [
    "https://images.unsplash.com/photo-1741812191037-96bb5f12010a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    "https://images.unsplash.com/photo-1742937163916-78fd07cc3b49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    "https://images.unsplash.com/photo-1742845918430-c6093f93f740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    "https://images.unsplash.com/photo-1741812191037-96bb5f12010a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  ];

  const colors = [
    "#0079bf",
    "#d29034",
    "#519839",
    "#b04632",
    "#89609e",
    "#cd5a91"
  ];

  const [selectedBg, setSelectedBg] = useState(backgrounds[2]);
  const [boardTitle, setBoardTitle] = useState("");


  return (
    <div className="bg-[#2b2c2f] mt-[-60px] w-[320px] max-h-[570px] overflow-y-auto rounded p-5 text-amber-50">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <MdKeyboardArrowLeft className="text-lg cursor-pointer" />
        <p className="text-sm font-semibold">Create board</p>
        <RxCross2 className="text-base cursor-pointer" />
      </div>

      {/* Preview */}
      <img src={cb1} alt="Create Board" 
        className="h-28 w-full rounded mb-4 bg-cover bg-center"
        style={{
          backgroundImage: selectedBg.startsWith("http")
            ? `url(${selectedBg})`
            : "none",
          backgroundColor: !selectedBg.startsWith("http")
            ? selectedBg
            : "transparent",
        }}
      />

      {/* Background Images */}
      <div className="mb-4">
        <h2 className="text-zinc-200 mb-1 text-xs font-semibold">
          Background
        </h2>

        <div className="flex gap-2 overflow-x-auto">
          {backgrounds.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedBg(img)}
              className={`h-10 w-20 rounded cursor-pointer bg-cover bg-center transition
                ${selectedBg === img ? "ring-2 ring-purple-500" : "hover:opacity-80"}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>

      {/* Color Themes */}
      <div className="mb-4">
        <h2 className="text-zinc-200 mb-1 text-xs font-semibold">
          Colors
        </h2>

        <div className="flex gap-2 flex-wrap">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => setSelectedBg(color)}
              className={`h-8 w-8 rounded cursor-pointer border transition
                ${selectedBg === color ? "ring-2 ring-purple-500" : "border-zinc-500 hover:scale-105"}`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Board title */}
      <label className="text-xs font-medium">
        Board title <span className="text-red-400">*</span>
      </label>

      <input
        type="text"
        value={boardTitle}
        onChange={(e) => setBoardTitle(e.target.value)}
        className={`w-full mt-1 mb-1 bg-[#1d1e20] border rounded px-2 py-1 text-xs
          ${boardTitle ? "border-gray-500" : "border-red-400"}`}
      />


      <p className="text-[11px] text-red-400 mb-3">
        👋 Board title is required
      </p>

      {/* Visibility */}
      <label className="text-xs font-medium">Visibility</label>

      <select className="w-full mt-1 bg-[#1d1e20] border border-gray-500 rounded px-2 py-1 text-xs mb-3">
        <option>Workspace</option>
        <option>Private</option>
        <option>Public</option>
      </select>

      <p className="text-[11px] text-zinc-300 mb-2">
        This Workspace has 7 boards remaining. Free Workspaces can only have
        10 open boards.
      </p>

      <button className="w-full bg-purple-700 py-1 rounded text-xs mb-2">
        Upgrade
      </button>

      {boardTitle ? (
          <Link to={`/new/${encodeURIComponent(boardTitle)}`} 

            className="w-full py-1 rounded text-xs mb-3 transition
                      bg-blue-600 hover:bg-blue-700 cursor-pointer
                      text-center block"
          >
            Create
          </Link>
        ) : (
          <div
            className="w-full py-1 rounded text-xs mb-3
                      bg-[#2f3033] text-gray-400 cursor-not-allowed
                      text-center"
          >
            Create
          </div>
        )}



      {/* Template */}
      <div className="bg-[#1f2023] rounded p-3 mb-2 cursor-pointer hover:bg-[#26272b] transition">
        <p className="text-xs text-center font-medium">
          Start with a template
        </p>
      </div>

      {/* Footer */}
      <p className="text-[10px] text-zinc-400">
        By using images from Unsplash, you agree to their{" "}
        <Link to="https://unsplash.com/license" className="underline">
          license
        </Link>{" "}
        and{" "}
        <Link to="https://unsplash.com/terms" className="underline">
          Terms of Service
        </Link>
      </p>
    </div>
  );
};

export default CreateBoard;
