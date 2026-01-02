import React, { useState } from "react";
import myTrellobg from "../../assets/myboardbg.svg";
import { TbArrowsDiagonalMinimize } from "react-icons/tb";
import { CiMenuKebab } from "react-icons/ci";
import guideone from "../../assets/guideone.jpg";
import guidetwo from "../../assets/guidetwo.webp";
import faviconicon from "../../assets/faviconicon.png";
import { Link } from "react-router-dom";
import { BsArrowsAngleExpand } from "react-icons/bs";
import MarkableLink from "./MarkableLink";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiAttachment2 } from "react-icons/ri";
import { BsCheck2Square } from "react-icons/bs";
import guidethree from "../../assets/guidethree.webp";
import guidefour from "../../assets/guidefour.webp";
import guidefive from "../../assets/guidefive.webp";
import guidesix from "../../assets/guidesix.webp";
import { FaPlus } from "react-icons/fa6";
import CustomIcon from "./CustomIcon";
import ListActionsPopup from "./ListActionsPopup";
import { LiaEdit } from "react-icons/lia";
import { GoArchive } from "react-icons/go";

const MyTrelloBoardGuide = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  // ⬇️ ADD THESE 3 NEW STATES HERE ⬇️
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [dynamicCards, setDynamicCards] = useState([]);

  const [taskDone, setTaskDone] = useState(
    Array(6 + dynamicCards.length).fill(false)
  );

  return (
    <div className="relative w-94 h-screen">
      {/* Background */}
      {/* <img
        src={myTrellobg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      /> */}

      <div className="w-94 ">
        <div className="w-full bg-[#48245D] rounded-lg overflow-visible relative">
          {/* Card Header */}
          <div className="border-b border-black flex justify-between items-center p-3 relative">
            <p className="text-[#EED7FC] text-lg font-medium">
              Trello Starter Guide
            </p>

            <div className="flex text-[#EED7FC] text-lg gap-4 relative">
              <div className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-[#803FA5] transition cursor-pointer">
                <TbArrowsDiagonalMinimize size={20} className="rotate-135" />
              </div>

              {/* Kebab Menu */}
              <div
                className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-[#803FA5] transition cursor-pointer"
                onClick={() => setShowPopup(!showPopup)}
              >
                <CiMenuKebab size={20} className="rotate-90" />
              </div>

              {/* Popup */}
              {showPopup && (
                <ListActionsPopup onClose={() => setShowPopup(false)} />
              )}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="max-h-[65vh] overflow-y-auto p-4 space-y-4">
            {/* ---- CARD 1 ---- */}
            <div
              className="relative bg-[#242528] rounded-xl overflow-hidden hover:border-2 border-[#FFFFFF] cursor-pointer"
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)}
            >
              {/* ✅ NEW: Completed icon beside edit icon */}
              {taskDone[0] && (
                <div className="absolute top-2 right-12 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                  <GoArchive className="text-white" size={13} />
                </div>
              )}

              {/* Edit Icon on Image */}
              {hover1 && (
                <div className="absolute top-2 right-2 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                  <LiaEdit className="text-white" size={15} />
                </div>
              )}

              <img src={guideone} className="rounded-t-xl w-full" alt="" />

              <div className="p-2 flex flex-col gap-4">
                <MarkableLink
                  showIcon={hover1}
                  text="New to Trello? Start here"
                  underline={true}
                  showFavicon={true}
                  onCompleteChange={(status) => {
                    const updated = [...taskDone];
                    updated[0] = status;
                    setTaskDone(updated);
                  }}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img src={faviconicon} className="w-5 h-5" alt="" />
                    <Link className="font-normal text-base text-[#96999E]">
                      Loom
                    </Link>
                  </div>
                  <div className="border border-[#96999E] p-2 rounded hover:bg-[#E3E4F21F] cursor-pointer">
                    <BsArrowsAngleExpand className="text-[#96999E]" size={10} />
                  </div>
                </div>
              </div>
            </div>

            {/* ---- CARD 2 ---- */}
            <div
              className="relative bg-[#242528] rounded-xl overflow-hidden hover:border-2 border-[#FFFFFF] cursor-pointer"
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
            >
              {/* ✅ NEW: Completed icon beside edit icon */}
              {taskDone[1] && (
                <div className="absolute top-2 right-12 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                  <GoArchive className="text-white" size={13} />
                </div>
              )}

              {/* Edit Icon on Image */}
              {hover2 && (
                <div className="absolute top-2 right-2 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                  <LiaEdit className="text-white" size={15} />
                </div>
              )}

              <img src={guidetwo} className="rounded-t-xl w-full" alt="" />

              <div className="p-2 flex flex-col gap-4">
                <MarkableLink
                  showIcon={hover2}
                  showFavicon={false}
                  text="Capture from email, Slack, and Teams"
                  color="#96999E"
                  underline={false}
                  onCompleteChange={(status) => {
                    const updated = [...taskDone];
                    updated[1] = status;
                    setTaskDone(updated);
                  }}
                />

                <div className="flex items-center gap-4">
                  <HiOutlineMenuAlt2 className="text-[#BFC1C4]" size={15} />

                  <div className="flex items-center gap-1">
                    <RiAttachment2 className="text-[#BFC1C4]" size={15} />
                    <p className="text-[#BFC1C4] text-base font-normal">1</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <BsCheck2Square className="text-[#BFC1C4]" size={15} />
                    <p className="text-[#BFC1C4] text-base font-normal">0/6</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---- CARD 3 ---- */}
            <div
              className="relative bg-[#242528] rounded-xl overflow-hidden hover:border-2 border-[#FFFFFF] cursor-pointer"
              onMouseEnter={() => setHover3(true)}
              onMouseLeave={() => setHover3(false)}
            >
              {/* ✅ NEW: Completed icon beside edit icon */}
              {taskDone[2] && (
                <div className="absolute top-2 right-12 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                  <GoArchive className="text-white" size={13} />
                </div>
              )}

              {/* Edit Icon on Image */}
              {hover3 && (
                <div className="absolute top-2 right-2 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                  <LiaEdit className="text-white" size={15} />
                </div>
              )}

              <img src={guidethree} className="rounded-t-xl w-full" alt="" />

              <div className="p-2 flex flex-col gap-4">
                <MarkableLink
                  showIcon={hover3}
                  showFavicon={false}
                  text="Dive into Trello basics"
                  color="#96999E"
                  underline={false}
                  onCompleteChange={(status) => {
                    const updated = [...taskDone];
                    updated[2] = status;
                    setTaskDone(updated);
                  }}
                />

                <div className="flex items-center gap-4">
                  <HiOutlineMenuAlt2 className="text-[#BFC1C4]" size={15} />
                  <div className="flex items-center gap-1">
                    <RiAttachment2 className="text-[#BFC1C4]" size={15} />
                    <p className="text-[#BFC1C4]">1</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsCheck2Square className="text-[#BFC1C4]" size={15} />
                    <p className="text-[#BFC1C4]">0/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---- CARD 4 ---- */}
            <div
              className="relative bg-[#242528] rounded-xl overflow-hidden hover:border-2 border-[#FFFFFF] cursor-pointer"
              onMouseEnter={() => setHover4(true)}
              onMouseLeave={() => setHover4(false)}
            >
              {/* ✅ NEW: Completed icon beside edit icon */}
              {taskDone[3] && (
                <div className="absolute top-2 right-12 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                  <GoArchive className="text-white" size={13} />
                </div>
              )}

              {/* Edit Icon on Image */}
              {hover4 && (
                <div className="absolute top-2 right-2 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                  <LiaEdit className="text-white" size={15} />
                </div>
              )}

              <img src={guidefour} className="rounded-t-xl w-full" alt="" />

              <div className="p-2 flex flex-col gap-4">
                <MarkableLink
                  showIcon={hover4}
                  showFavicon={false}
                  text="Download the mobile app"
                  color="#96999E"
                  underline={false}
                  onCompleteChange={(status) => {
                    const updated = [...taskDone];
                    updated[3] = status;
                    setTaskDone(updated);
                  }}
                />

                <div className="flex items-center gap-4">
                  <HiOutlineMenuAlt2 className="text-[#BFC1C4]" size={15} />
                  <div className="flex items-center gap-1">
                    <RiAttachment2 className="text-[#BFC1C4]" size={15} />
                    <p className="text-[#BFC1C4]">1</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsCheck2Square className="text-[#BFC1C4]" size={15} />
                    <p className="text-[#BFC1C4]">0/3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---- CARD 5 ---- */}
            <div
              className="relative bg-[#242528] rounded-xl overflow-hidden hover:border-2 border-[#FFFFFF] cursor-pointer"
              onMouseEnter={() => setHover5(true)}
              onMouseLeave={() => setHover5(false)}
            >
              {/* ✅ NEW: Completed icon beside edit icon */}
              {taskDone[4] && (
                <div className="absolute top-2 right-12 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                  <GoArchive className="text-white" size={13} />
                </div>
              )}

              {/* Edit Icon on Image */}
              {hover5 && (
                <div className="absolute top-2 right-2 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                  <LiaEdit className="text-white" size={15} />
                </div>
              )}

              <img src={guidefive} className="rounded-t-xl w-full" alt="" />

              <div className="p-2 flex flex-col gap-4">
                <MarkableLink
                  showIcon={hover5}
                  showFavicon={false}
                  text="Work smarter"
                  color="#96999E"
                  underline={false}
                  onCompleteChange={(status) => {
                    const updated = [...taskDone];
                    updated[4] = status;
                    setTaskDone(updated);
                  }}
                />

                <div className="flex items-center gap-4">
                  <HiOutlineMenuAlt2 className="text-[#BFC1C4]" size={15} />
                  <div className="flex items-center gap-1">
                    <RiAttachment2 className="text-[#BFC1C4]" size={15} />
                    <p className="text-[#BFC1C4]">1</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsCheck2Square className="text-[#BFC1C4]" size={15} />
                    <p className="text-[#BFC1C4]">0/4</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---- CARD 6 ---- */}
            <div
              className="relative bg-[#242528] rounded-xl overflow-hidden hover:border-2 border-[#FFFFFF] cursor-pointer"
              onMouseEnter={() => setHover6(true)}
              onMouseLeave={() => setHover6(false)}
            >
              {/* ✅ NEW: Completed icon beside edit icon */}
              {taskDone[5] && (
                <div className="absolute top-2 right-12 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                  <GoArchive className="text-white" size={13} />
                </div>
              )}

              {/* Edit Icon on Image */}
              {hover6 && (
                <div className="absolute top-2 right-2 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                  <LiaEdit className="text-white" size={15} />
                </div>
              )}

              <img src={guidesix} className="rounded-t-xl w-full" alt="" />

              <div className="p-2 flex flex-col gap-4">
                <MarkableLink
                  showIcon={hover6}
                  showFavicon={false}
                  text="Manage your team's projects"
                  color="#96999E"
                  underline={false}
                  onCompleteChange={(status) => {
                    const updated = [...taskDone];
                    updated[5] = status;
                    setTaskDone(updated);
                  }}
                />

                <div className="flex items-center gap-4">
                  <HiOutlineMenuAlt2 className="text-[#BFC1C4]" size={15} />
                  <div className="flex items-center gap-1">
                    <RiAttachment2 className="text-[#BFC1C4]" size={15} />
                    <p className="text-[#BFC1C4]">1</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsCheck2Square className="text-[#BFC1C4]" size={15} />
                    <p className="text-[#BFC1C4]">0/2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------- DYNAMIC CARDS ------------- */}
            {dynamicCards.map((card, index) => (
              <div
                key={index}
                className="relative bg-[#242528] rounded-xl p-3 hover:border-2 border-[#FFFFFF] cursor-pointer"
                onMouseEnter={() => {
                  const updated = [...dynamicCards];
                  updated[index].hover = true;
                  setDynamicCards(updated);
                }}
                onMouseLeave={() => {
                  const updated = [...dynamicCards];
                  updated[index].hover = false;
                  setDynamicCards(updated);
                }}
              >
                {/* ✅ Completed icon shown ONLY for this card */}
                {taskDone[index] && (
                  <div className="absolute top-2 right-12 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                    <GoArchive className="text-white" size={13} />
                  </div>
                )}

                {/* ⭐ Edit icon on top-right */}
                {card.hover && (
                  <div className="absolute top-2 right-2 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black/90 transition">
                    <LiaEdit className="text-white" size={15} />
                  </div>
                )}

                <MarkableLink
                  showIcon={card.hover}
                  showFavicon={false}
                  text={card.title}
                  color="#96999E"
                  underline={false}
                  onCompleteChange={(status) => {
                    const updated = [...taskDone];
                    updated[index] = status; // ✅ THIS FIXES YOUR PROBLEM
                    setTaskDone(updated);
                  }}
                />
              </div>
            ))}

            {/* --- Add Input For New Card --- */}
            {isAddingCard && (
              <div className="bg-[#242528] rounded-xl p-3 space-y-3">
                <input
                  autoFocus
                  value={newCardTitle}
                  onChange={(e) => setNewCardTitle(e.target.value)}
                  placeholder="Enter card title..."
                  className="w-full bg-black text-white p-2 rounded outline-none border border-gray-600"
                />

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (newCardTitle.trim() !== "") {
                        setDynamicCards([
                          ...dynamicCards,
                          { title: newCardTitle, hover: false },
                        ]);
                        setNewCardTitle("");
                        setIsAddingCard(false);
                      }
                    }}
                    className="bg-[#803FA5] text-white px-3 py-1 rounded"
                  >
                    Add Card
                  </button>

                  <button
                    onClick={() => {
                      setIsAddingCard(false);
                      setNewCardTitle("");
                    }}
                    className="text-white text-xl"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Footer */}
          <div className="border-b border-black flex justify-between items-center p-3 gap-4">
            <button
              onClick={() => setIsAddingCard(true)}
              className="w-full text-[#EED7FC] text-base font-medium flex items-center gap-1 p-2 hover:bg-[#803FA5] rounded-lg cursor-pointer"
            >
              <FaPlus /> Add a card
            </button>

            <div className="flex text-[#EED7FC] text-lg ">
              <div className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-[#803FA5] transition cursor-pointer">
                <CustomIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTrelloBoardGuide;
