import React from "react";
import MyBoardNavBar from "../boards/myBoardNavBar/myBoardNavBar";
import ButtomNavbar from "./buttomnavbar/ButtomNavbar";
import MyTrelloBoard from "./MyTrelloBoard";

const TrelloBoardsHome = () => {
  return (
    <>
      <MyBoardNavBar />
      {/* <MyTrelloBoard /> */}
      <ButtomNavbar />
    </>
  );
};

export default TrelloBoardsHome;
