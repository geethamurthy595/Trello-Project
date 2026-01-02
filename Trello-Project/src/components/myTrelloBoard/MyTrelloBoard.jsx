// src/components/boards/MyTrelloBoard.jsx
import React from "react";
import Taskbar from "../boards/taskbar/Taskbar";
import BottomNavigation from "../boards/bottomNavigaion/BottomNavigation";
import TrelloLikeBoard from "./addlist/Addlist";
import { useBackground } from "../context/BackgroundContext";

const MyTrelloBoard = () => {
  const { background } = useBackground();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Taskbar />

      {/* Board Background */}
      {background.type === "image" && background.value ? (
        <img
          src={background.value}
          alt="board background"
          className="absolute inset-0 w-full h-full object-cover -z-10 transition-all duration-300"
        />
      ) : background.type === "color" && background.value ? (
        <div
          className={`absolute inset-0 -z-10 transition-all duration-300 ${background.value}`}
        />
      ) : (
        <div className="absolute inset-0 -z-10 bg-gray-100" />
      )}

      <TrelloLikeBoard />
      <BottomNavigation />
    </div>
  );
};

export default MyTrelloBoard;
