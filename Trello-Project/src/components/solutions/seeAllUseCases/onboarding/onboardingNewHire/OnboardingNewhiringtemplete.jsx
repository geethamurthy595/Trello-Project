import React, { useState, useEffect } from "react";
// import onboardingbg from "../../../../../assets/onboaringbg.jpg";
import onboardingbg from "../../../../../assets/onboardbg.jpg";
import { MdFilterList } from "react-icons/md";
import { FaGlobeAmericas, FaListUl } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// All card data arrays (same as previous)
const cardDatas = ["Xenia: New Hire Template"];
const billy = ["Billy McFally", "Jenny Ling", "Justin Wong"];
const Assign = ["Jenet Webber"];



const OnboardingNewHireTemplate = ({ shownav = false }) => {
  // STATE to track card completion, controls NavBar visibility
  const [cardsComplete, setCardsComplete] = useState(false);

  useEffect(() => {
    // Simulate completion check: Replace with your real logic
    const timer = setTimeout(() => {
      setCardsComplete(true);
    }, 3000); // e.g., 3 seconds for demonstration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      
      <div
        // Responsive background container, fills screen, centers image
        className="w-full min-h-screen h-full bg-no-repeat bg-cover bg-center flex flex-col overflow-x-hidden"
        style={{ backgroundImage: `url(${onboardingbg})` }}
      >
        {/* Navigation Bar */}
        <nav className="flex flex-wrap justify-between items-center p-4 bg-gray-100 w-full shrink-0">
          <div className="flex gap-4 items-center">
            <p className="font-bold text-[17px] text-gray-600">
              Onboarding Process For New Hires
            </p>
            <p className="text-[12px] bg-gray-300">Template</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="rounded-full p-2 hover:bg-gray-300">
              <MdFilterList className="h-8 w-8" />
            </p>
            <p className="rounded-full p-3 hover:bg-gray-300">
              <FaGlobeAmericas />
            </p>
          </div>
        </nav>

        {/* Full Card Board, horizontal scroll */}
        <section className="flex-1 min-h-0 w-full overflow-x-auto overflow-y-hidden p-3 gap-6 flex flex-nowrap scrollbar-hide">
          {/* --- Card Template Column --- */}
          <div className="w-[22vw] min-w-[260px] h-[20vh] bg-[#181A1B] shadow-md rounded-xl flex flex-col flex-shrink-0 overflow-hidden border-[2px] ">
            {/* Header: white text, no background change */}
            <div className="flex justify-between mb-2 px-2 pt-2">
              <h1 className="text-md font-semibold text-white">Card Template</h1>
              <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-[#202124]">
                <FaArrowRight className="size-2 text-white" />
                <FaArrowLeft className="size-2 text-white" />
              </span>
            </div>
            {/* Card Content: sub-card styling  */}
            <div className="overflow-y-auto space-y-3 px-2 pb-2 flex-1 flex flex-col gap-3 scrollbar-hide">
              {cardDatas.map((title, index) => (
                <div
                  key={index}
                  className="bg-[#202124] flex flex-col gap-1 rounded-lg shadow-sm border border-[#383838] p-3 hover:border-blue-400 cursor-pointer text-white"
                >
                  <p className="text-sm font-medium text-white">{title}</p>
                  <div className="flex justify-start gap-2 items-center">
                    <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-xs">
                      This card is a template.
                    </span>
                    <FaListUl size={14} className="text-white" />
                  </div>
                  <span className="text-xs text-gray-400">#271</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- Xenia Queue Column --- */}
          <div className="w-[22vw] min-w-[260px] h-[30vh] bg-[#181A1B] shadow-md rounded-xl flex flex-col flex-shrink-0 overflow-hidden border-[2px] ">
            <div className="flex justify-between mb-2 px-2 pt-2">
              <h1 className="text-md font-semibold text-white">Xenia Queue</h1>
              <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-[#202124]">
                <FaArrowRight className="size-2 text-white" />
                <FaArrowLeft className="size-2 text-white" />
              </span>
            </div>
            <div className="overflow-y-auto space-y-3 px-2 pb-2 flex-1 flex flex-col gap-3 scrollbar-hide">
              {billy.map((title, index) => (
                <div
                  key={index}
                  className="bg-[#202124] flex flex-col gap-1 rounded-lg shadow-sm border border-[#383838] p-3 hover:border-blue-400 cursor-pointer text-white"
                >
                  <p className="text-sm font-medium text-white">{title}</p>
                  <div className="flex gap-2 items-center">
                    <FaListUl size={14} className="text-white" />
                    <span className="text-xs text-gray-400">{"#" + (559 + index)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- On Deck for Week of XX/XX --- */}
          <div className="w-[22vw] min-w-[260px] h-[10vh] bg-[#181A1B] shadow-md rounded-xl flex flex-col flex-shrink-0 overflow-hidden border-[2px]">
            <div className="flex justify-between mb-2 px-2 pt-2">
              <h1 className="text-md font-semibold text-white">On Deck for Week of XX/XX</h1>
              <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-[#202124]">
                <FaArrowRight className="size-2 text-white" />
                <FaArrowLeft className="size-2 text-white" />
              </span>
            </div>
            <div className="overflow-y-auto space-y-3 px-2 pb-2 flex-1 flex flex-col gap-3 scrollbar-hide"></div>
          </div>

          {/* --- Assign Xenia Groups --- */}
          <div className="w-[22vw] min-w-[260px] h-[30vh] bg-[#181A1B] shadow-md rounded-xl flex flex-col flex-shrink-0 overflow-hidden border-[2px] ">
            <div className="flex justify-between mb-2 px-2 pt-2">
              <h1 className="text-md font-semibold text-white">Assign Xenia Groups</h1>
              <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-[#202124]">
                <FaArrowRight className="size-2 text-white" />
                <FaArrowLeft className="size-2 text-white" />
              </span>
            </div>
            <div className="overflow-y-auto space-y-3 px-2 pb-2 flex-1 flex flex-col gap-3 scrollbar-hide">
              {Assign.map((title, index) => (
                <div
                  key={index}
                  className="bg-[#202124] flex flex-col gap-1 rounded-lg shadow-sm border border-[#383838] p-3 hover:border-blue-400 cursor-pointer text-white"
                >
                  <p className="text-sm font-medium text-white">{title}</p>
                  <FaListUl size={14} className="text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* --- Welcome Email Sent --- */}
          <div className="w-[22vw] min-w-[260px] h-[10vh] bg-[#181A1B] shadow-md rounded-xl flex flex-col flex-shrink-0 overflow-hidden border-[2px] ">
            <div className="flex justify-between mb-2 px-2 pt-2">
              <h1 className="text-md font-semibold text-white">Welcome Email Sent</h1>
              <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-[#202124]">
                <FaArrowRight className="size-2 text-white" />
                <FaArrowLeft className="size-2 text-white" />
              </span>
            </div>
            <div className="overflow-y-auto space-y-3 px-2 pb-2 flex-1 flex flex-col gap-3 scrollbar-hide">
              
            </div>
          </div>

          {/* --- Send Call/Calendar Invites --- */}
          <div className="w-[22vw] min-w-[260px] h-[10vh] bg-[#181A1B] shadow-md rounded-xl flex flex-col flex-shrink-0 overflow-hidden border-[2px] ">
            <div className="flex justify-between mb-2 px-2 pt-2">
              <h1 className="text-md font-semibold text-white">Send Call/Calendar Invites</h1>
              <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-[#202124]">
                <FaArrowRight className="size-2 text-white" />
                <FaArrowLeft className="size-2 text-white" />
              </span>
            </div>
            <div className="overflow-y-auto space-y-3 px-2 pb-2 flex-1 flex flex-col gap-3 scrollbar-hide">
              
            </div>
          </div>

          {/* --- Added To Learning Pathway --- */}
          <div className="w-[22vw] min-w-[260px] h-[10vh] bg-[#181A1B] shadow-md rounded-xl flex flex-col flex-shrink-0 overflow-hidden border-[2px] ">
            <div className="flex justify-between mb-2 px-2 pt-2">
              <h1 className="text-md font-semibold text-white">Added To Learning Pathway</h1>
              <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-[#202124]">
                <FaArrowRight className="size-2 text-white" />
                <FaArrowLeft className="size-2 text-white" />
              </span>
            </div>
            <div className="overflow-y-auto space-y-3 px-2 pb-2 flex-1 flex flex-col gap-3 scrollbar-hide">
              
            </div>
          </div>

          {/* --- Added To Slack Class Room --- */}
          <div className="w-[22vw] min-w-[260px] h-[10vh] bg-[#181A1B] shadow-md rounded-xl flex flex-col flex-shrink-0 overflow-hidden border-[2px] ">
            <div className="flex justify-between mb-2 px-2 pt-2">
              <h1 className="text-md font-semibold text-white">Added To Slack Class Room</h1>
              <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-[#202124]">
                <FaArrowRight className="size-2 text-white" />
                <FaArrowLeft className="size-2 text-white" />
              </span>
            </div>
            <div className="overflow-y-auto space-y-3 px-2 pb-2 flex-1 flex flex-col gap-3 scrollbar-hide">
              
            </div>
          </div>

          {/* --- Xenia Onboarding:Week 1 --- */}
          <div className="w-[22vw] min-w-[260px] h-[10vh] bg-[#181A1B] shadow-md rounded-xl flex flex-col flex-shrink-0 overflow-hidden border-[2px] ">
            <div className="flex justify-between mb-2 px-2 pt-2">
              <h1 className="text-md font-semibold text-white">Xenia Onboarding:Week 1</h1>
              <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-[#202124]">
                <FaArrowRight className="size-2 text-white" />
                <FaArrowLeft className="size-2 text-white" />
              </span>
            </div>
            <div className="overflow-y-auto space-y-3 px-2 pb-2 flex-1 flex flex-col gap-3 scrollbar-hide">
              
            </div>
          </div>

          {/* --- Xenia Onboarding Complete 2019 --- */}
          <div className="w-[22vw] min-w-[260px] h-[10vh] bg-[#181A1B] shadow-md rounded-xl flex flex-col flex-shrink-0 overflow-hidden border-[2px] ">
            <div className="flex justify-between mb-2 px-2 pt-2">
              <h1 className="text-md font-semibold text-white">Xenia Onboarding Complete 2019 (Now In Develop In Role)</h1>
              <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-[#202124]">
                <FaArrowRight className="size-2 text-white" />
                <FaArrowLeft className="size-2 text-white" />
              </span>
            </div>
            <div className="overflow-y-auto space-y-3 px-2 pb-2 flex-1 flex flex-col gap-3 scrollbar-hide">
              
            </div>
          </div>

          {/* --- Xenia Onboarding Complete 2018 --- */}
          <div className="w-[22vw] min-w-[260px] h-[10vh] bg-[#181A1B] shadow-md rounded-xl flex flex-col flex-shrink-0 overflow-hidden border-[2px] ">
            <div className="flex justify-between mb-2 px-2 pt-2">
              <h1 className="text-md font-semibold text-white">Xenia Onboarding Complete 2018 (Now In Develop In Role)</h1>
              <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-[#202124]">
                <FaArrowRight className="size-2 text-white" />
                <FaArrowLeft className="size-2 text-white" />
              </span>
            </div>
            <div className="overflow-y-auto space-y-3 px-2 pb-2 flex-1 flex flex-col gap-3 scrollbar-hide">
              
            </div>
          </div>
        </section>
        {/* Hide browser scrollbar for horizontal scroll */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </>
  );
};

export default OnboardingNewHireTemplate;
