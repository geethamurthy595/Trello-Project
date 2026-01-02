import React, { useState } from "react";
const Productivity = () => {
  let [bgimg, setBgimg] = useState("img1");
  let [boxshadow, setBoxshadow] = useState("boxshadow");
  let [b1, setB1] = useState(true);
  let [b2, setB2] = useState(false);
  let [b3, setB3] = useState(false);

  let handleImage1 = () => {
    setBgimg("img1");
    setB1(true);
    setB2(false);
    setB3(false);
  };
  let handleImage2 = () => {
    setBgimg("img2");
    setB2(true);
    setB1(false);
    setB3(false);
  };
  let handleImage3 = () => {
    setBgimg("img3");
    setB3(true);
    setB1(false);
    setB2(false);
  };

  return (
    <>
      <div className=" mx-50 pt-10 ">
        {/* Small Title */}
        <p className="uppercase text-sm text-gray-500 font-semibold">
          Trello 101
        </p>

        {/* Main Heading */}
        <h1 className="text-2xl font-bold text-gray-900 mt-2 ">
          Your productivity powerhouse
        </h1>

        {/* Paragraph */}
        <p className="text-gray-700 mt-4 w-150 text-xl leading-relaxed ">
          Stay organized and efficient with Inbox, Boards, and Planner. Every
          to-do, idea, or responsibility—no matter how small—finds its place,
          keeping you at the top of your game.
        </p>
      </div>
      <div className="flex items-start justify-center relative px-50 py-20">
        <div className="flex  gap-1 absolute  right-50 top-10 ">
          <p
            className={`${
              b1 ? "w-18 bg-gray-500 " : "w-2 bg-black rounded-full"
            } h-2 rounded transition-all cursor-pointer `}
            onClick={handleImage1}
          ></p>
          <p
            className={`${
              b2 ? "w-18 bg-gray-500 " : "w-2 bg-black rounded-full"
            } h-2  rounded transition-all cursor-pointer`}
            onClick={handleImage2}
          ></p>
          <p
            className={`${
              b3 ? "w-18 bg-gray-500 " : "w-2 bg-black rounded-full"
            } h-2 rounded transition-all cursor-pointer`}
            onClick={handleImage3}
          ></p>
        </div>
        {/* Left Section */}

        <div className="w-1/3 pr-10 cursor-pointer">
          {/* Inbox */}

          <div
            className={`flex  relative mb-8 pr-4 rounded-md ${
              b1 ? boxshadow : ""
            } transition-all`}
            onClick={handleImage1}
          >
            <div
              className={`w-3   top-0 rounded-l bg-sky-500 mr-3 ${
                b1 ? "block" : "hidden"
              } transition-all`}
            ></div>
            <div className="mx-2 my-4">
              <h2 className="text-xl font-semibold pl-3">Inbox</h2>
              <p className={`text-gray-600 mt-2 `}>
                When it’s on your mind, it goes in your Inbox. Capture your
                to-dos from anywhere, anytime.
              </p>
            </div>
          </div>

          {/* Boards */}
          <div
            className={`flex  relative mb-8 pr-4 rounded-md ${
              b2 ? boxshadow : ""
            } transition-all `}
            onClick={handleImage2}
          >
            <div
              className={`w-3    top-0 rounded-l bg-sky-500 mr-4 ${
                b2 ? "block" : "hidden"
              } transition-all`}
            ></div>
            <div className="mx-2 my-4">
              <h2 className="text-xl font-semibold pl-3">Boards</h2>
              <p className={`text-gray-600 mt-2 `}>
                Your to-do list may be long, but it can be manageable! Keep tabs
                on everything from “to-dos to tackle” to “mission accomplished!”
              </p>
            </div>
          </div>

          {/* Planner */}
          <div
            className={`flex relative mb-8 pr-4 rounded-md ${
              b3 ? boxshadow : ""
            } transition-all`}
            onClick={handleImage3}
          >
            <div
              className={`w-3  top-0 rounded-l bg-sky-500 mr-4 ${
                b3 ? "block" : "hidden"
              } transition-all`}
            ></div>
            <div className="mx-2 my-4">
              <h2 className="text-xl font-semibold pl-3">Planner</h2>
              <p className={`text-gray-600 mt-2 `}>
                Drag, drop, get it done. Snap your top tasks into your calendar
                and make time for what truly matters.
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div>
          <div className="mx-px float-right"></div>
        </div>

        <div className={`w-[800px] h-[500px] shadow bg-cover ${bgimg}  `}>
          {/* <img src={slide1} alt="" /> */}
          {/* <img src={slide2} alt="" /> */}
          {/* <img src={slide3} alt="" />/ */}
        </div>
      </div>
    </>
  );
};

export default Productivity;
