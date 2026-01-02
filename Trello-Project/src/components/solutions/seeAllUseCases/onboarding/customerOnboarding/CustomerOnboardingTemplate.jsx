import React from "react";
import bgImg from "../../../../../assets/bgImgCOT.jpg";
import NavBar from "../../../../NavBar";
import { MdFilterList } from "react-icons/md";
import { FaGlobeAmericas, FaList } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import whale from "../../../../../assets/whale.gif";
import { GoPaperclip } from "react-icons/go";
import { FaListUl } from "react-icons/fa";
import { FaArrowLeft,FaArrowRight  } from "react-icons/fa6";
import powerUp from "../../../../../assets/WtIsPowerUp.png";
import powerUp2 from "../../../../../assets/wt.png";
import listimg from "../../../../../assets/listimg.png";

const CustomerOnboardingTemplate = ({shownav = false}) => {
  const cardData = [
    {
      img: whale,
      title: "Welcome to Trello Enterprise! Read Me First",
      labels: [
        "bg-orange-400",
        "bg-blue-400",
        "bg-cyan-400",
        "bg-green-400",
        "bg-pink-400",
      ],
      attachments: 2,
      comments: false,
    },
    {
      title: "Trello Upgrades by Team",
      labels: [
        "bg-orange-400",
        "bg-blue-400",
        "bg-cyan-400",
        "bg-green-400",
        "bg-pink-400",
      ],
      attachments: false,
      comments: true,
    },
    {
      title: "Create a Team",
      labels: ["bg-orange-400", "bg-blue-400"],
      attachments: 1,
      comments: true,
    },
    {
      title: "Add Team Members!",
      labels: ["bg-orange-400", "bg-blue-400", "bg-green-400", "bg-pink-400"],
      attachments: false,
      comments: true,
    },
    {
      title: "Creating Boards",
      labels: ["bg-orange-400", "bg-blue-400", "bg-green-400"],
      attachments: 1,
      comments: true,
    },
    {
      title: "Move Existing Boards",
      labels: ["bg-blue-400", "bg-green-400"],
      attachments: 2,
      comments: true,
    },
    {
      title: "Premium Support",
      labels: ["bg-blue-400", "bg-green-400", "bg-pink-400"],
      attachments: false,
      comments: true,
    },
  ];
  
  const resources = [
    "Help!",
    "Board Inspiration",
    "Trello Demo",
    "Trello Resources",
    "Trello Integrates with So Many Tools!",
  ];
  const todo = [
    {
      title: "Set up your security features!",
      labels: ["bg-orange-400"],
      cont : "IT"
    },
    {
      title: "Introductory call with Account Manager",
      labels: ["bg-orange-400", "bg-blue-400"],
    },
    {
      title: "Download the Trello App!",
      labels: [],
    },
    {
      title: "Set up Training with Your Account Manager",
      labels: ["bg-orange-400", "bg-blue-400"],
    },
  ];
  const doing = [
    {
      title: "Upgrade Teams",
      labels: ["bg-orange-400", "bg-blue-400"],
      attachments: 3,
    },
    {
      title: "Provide Admin Contact Information for Account Manager",
      labels: ["bg-blue-400"],
      m : "M",
      it : "IT"
    },
  ];
  const done = [
    {
      title: "Appoint a Super Admin",
      labels: ["bg-orange-400"],
    },
    {
      title: "Enterprise Account Manager + Technical Account Manager",
      labels: ["bg-blue-400"],
    },
  ];
  const faq = [
    {
      img: powerUp,
      title: "WHAT IS A POWER UP?",
      attachments: 1,
      comments : true,
      labels : false
    },
    {
      img : powerUp2,
      title: "WHERE DO I ADD MEMBERS?",
      attachments: 1,
      comments : true,
      labels : false
    },
    {
      title: "HOW DO I DEACTIVATE USERS?",
      attachments: false,
      comments : false,
      labels:false
    },
    {
      title: "HOW DO I ACTIVATE 2 FACTOR AUTHENTICATION?",
      attachments: false,
      comments : true,
      labels : false
    },
    {
      title: "Important Information: Adding Users to TEAMS vs. Adding Members to BOARDS",
      attachments: false,
      comments : true,
      labels: ["bg-orange-400", "bg-green-400", "bg-pink-400"],
    },
  ];
  const trelloTerminology = [
  {
    img : listimg,
    title: "TEAM",
    comments: true,
    attachments: 3,
  },
  {
    title: "BOARD",
    comments: true,
    attachments: false,
  },
  {
    title: "LIST",
    comments: true,
    attachments: 1,
  },
  {
    title: "CARD",
    comments: true,
    attachments: false,
  }
];

  return (
    <>
      {!shownav && <NavBar />}
      <div className="w-[1490px] h-[91vh] bg-no-repeat bg-cover bg-center bg-scroll flex flex-col overflow-x-hidden" style={{ backgroundImage: `url(${bgImg})` }} >
        <nav className="flex justify-around p-4 bg-gray-100 w-[1490px] shrink-0">
          <div className="flex gap-4 mr-220 justify-center items-center">
            <p className="font-bold text-[17px] text-gray-600">
              Customer Onboarding
            </p>
            <p className="text-[12px] bg-gray-300">Template</p>
          </div>
          <div className="flex items-center gap-3 w-50">
            <p className="bg-gray-300  h-[28px] w-[28px] rounded-[50%] text-center">
              IT
            </p>
            <p className="bg-gray-300  h-[28px] w-[28px] rounded-[50%] text-center">
              M
            </p>
            <p className="rounded-[50%] p-1 hover:bg-gray-300">
              <MdFilterList className="h[32px] w-[32px]" />
            </p>
            <p className="rounded-[50%] p-1 hover:bg-gray-300">
              <FaGlobeAmericas />
            </p>
            <p className="rounded-[50%] p-1 hover:bg-gray-300">
              <HiDotsHorizontal />
            </p>
          </div>
        </nav>
        <section className="flex-1 min-h-0 flex flex-nowrap overflow-x-auto overflow-y-hidden p-3 gap-3 w-[1490px]">
            <div className="bg-gray-100 shadow-md rounded-xl w-[275px] p-2 max-h-[550px] flex flex-col shrink-0 ">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-md font-semibold p-2">Getting Started</h1>
                <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-gray-200"> <FaArrowRight className="size-2"/><FaArrowLeft className="size-2"/> </span>
              </div>

              <div className="overflow-y-auto space-y-3 pr-2 h-[482px]">
                {cardData.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 hover:border-blue-600 cursor-pointer"
                  >
                    {card.img && (
                      <img
                        src={card.img}
                        alt=""
                        className="rounded-md w-full h-[120px] object-cover mb-2"
                      />
                    )}

                    {/* Labels */}
                    <div className="flex gap-1 mb-1">
                      {card.labels.map((label, j) => (
                        <span
                          key={j}
                          className={`${label} h-[8px] w-[30px] rounded-sm`}
                        ></span>
                      ))}
                    </div>

                    {/* Title */}
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {card.title}
                    </p>

                    {/* Icons */}
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <FaListUl size={14} />
                      {card.attachments && (
                        <div className="flex items-center gap-1">
                          <GoPaperclip size={14} />
                          <span>{card.attachments}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-100 shadow-md rounded-xl w-[275px] p-2 max-h-[476px] flex flex-col shrink-0 ">
            <div className="flex justify-between  mb-2">
              <h1 className="text-md font-semibold p-2">Additional Resources - After Upgrade</h1>
              <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-gray-200"> <FaArrowRight className="size-2"/><FaArrowLeft className="size-2"/> </span>
            </div>
            <div className="overflow-y-auto space-y-3 pr-2 h-[450px]">
              {resources.map((title, index) => (
                <div key={index} className="bg-white flex flex-col gap-1 rounded-lg shadow-sm border border-gray-200 p-3 hover:border-blue-600 cursor-pointer">
                  <p className="text-sm font-medium text-gray-700">{title}</p>
                  <FaListUl size={14} />
                </div>
              ))}
            </div>
            </div>

            <div className="bg-gray-100 shadow-md rounded-xl w-[275px] p-2 max-h-[430px] flex flex-col shrink-0 ">
              <div className="flex justify-between mb-2">
                <h1 className="text-md font-semibold p-2">TO DO</h1>
                <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-gray-200">
                  <FaArrowRight className="size-2" />
                  <FaArrowLeft className="size-2" />
                </span>
              </div>
              <div className="overflow-y-auto space-y-2 pr-2 h-[450px]">
                {todo.map((task, index) => (
                  <div key={index}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 hover:border-blue-600 cursor-pointer">
                    <div className="flex gap-1 mb-1">
                      {task.labels.map((label, j) => (
                        <span key={j} className={`${label} h-[8px] w-[30px] rounded-sm`}></span>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-gray-700">{task.title}</p>
                    <div className="flex justify-between mt-1">
                      <FaListUl size={14} />
                      {task.cont && (
                        <p className="bg-gray-300 h-[18px] w-[18px] rounded-[50%] text-[12px] text-center">
                          {task.cont}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 shadow-md rounded-xl w-[275px] p-2 max-h-[270px] flex flex-col shrink-0 ">
              <div className="flex justify-between mb-2">
                <h1 className="text-md font-semibold p-2">Doing</h1>
                <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-gray-200">
                  <FaArrowRight className="size-2" />
                  <FaArrowLeft className="size-2" />
                </span>
              </div>
              <div className="overflow-y-auto space-y-3 pr-2 h-[450px]">
                {doing.map((task, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 hover:border-blue-600 cursor-pointer"
                  >
                    <div className="flex gap-1 mb-1">
                      {task.labels.map((label, j) => (
                        <span
                          key={j}
                          className={`${label} h-[8px] w-[30px] rounded-sm`}
                        ></span>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {task.title}
                    </p>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <FaListUl size={14} />
                      {task.attachments && (
                        <div className="flex  justify-center items-center">
                          <GoPaperclip size={14} />
                          <span>{task.attachments}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {task.m && (
                        <p className="bg-gray-300 h-[18px] w-[18px] rounded-[50%] text-[12px] text-center">
                          {task.m}
                        </p>
                      )}
                      {task.it && (
                        <p className="bg-gray-300 h-[18px] w-[18px] rounded-[50%] text-[12px] text-center">
                          {task.it}
                        </p>
                      )}
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 shadow-md rounded-xl w-[275px] p-2 max-h-[270px] flex flex-col shrink-0 ">
              <div className="flex justify-between mb-2">
                <h1 className="text-md font-semibold p-2">Done!</h1>
                <span className="flex gap-1 cursor-pointer rounded-[30%] px-1 py-3 text-lg hover:bg-gray-200">
                  <FaArrowRight className="size-2" />
                  <FaArrowLeft className="size-2" />
                </span>
              </div>
              <div className="overflow-y-auto space-y-3 pr-2 h-[450px]">
                {done.map((task, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 hover:border-blue-600 cursor-pointer"
                  >
                    <div className="flex gap-1 mb-1">
                      {task.labels.map((label, j) => (
                        <span
                          key={j}
                          className={`${label} h-[8px] w-[30px] rounded-sm`}
                        ></span>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-gray-700 mb-3">{task.title}</p>
                    <FaListUl size={14} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 shadow-md rounded-xl w-[275px] p-2 max-h-[550px] flex flex-col shrink-0 ">
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-md font-semibold p-2">FAQ</h1>
              </div>
              {/* Scrollable list */}
              <div className="overflow-y-auto space-y-3 pr-2 h-[482px]">
                {faq.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 hover:border-blue-600 cursor-pointer">
                    {/* Image */}
                    {item.img && (
                      <img src={item.img} alt="faq-img" className="rounded-md w-[256px] h-[260px] object-cover mb-2"/>
                    )}
                    {/* Labels */}
                    {item.labels && Array.isArray(item.labels) && (
                      <div className="flex gap-1 mb-1">
                        {item.labels.map((label, j) => (
                          <span key={j} className={`${label} h-[8px] w-[30px] rounded-sm`}></span>
                        ))}
                      </div>
                    )}
                    {/* Title */}
                    <p className="text-sm font-medium text-gray-700 mb-2">{item.title}</p>

                    {/* Icons */}
                    <div className="flex justify-start items-center gap-2 text-sm">
                      {item.comments && (
                        <div className="flex items-center gap-1">
                          <FaList size={14} />
                        </div>
                      )}
                      {item.attachments && (
                        <div className="flex items-center gap-1">
                          <GoPaperclip size={14} />
                          <span>{item.attachments}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
          </div>

          <div className="bg-gray-100 shadow-md rounded-xl w-[275px] p-2 max-h-[550px] flex flex-col shrink-0">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-md font-semibold p-2">TRELLO TERMINOLOGY 101</h1>
            </div>

            {/* Scrollable list */}
            <div className="overflow-y-auto space-y-3 pr-2 h-[482px]">
              {trelloTerminology.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 hover:border-blue-600 cursor-pointer"
                >
                  {/* Image */}
                  {item.img && (
                    <img
                      src={item.img}
                      alt="terminology-img"
                      className="rounded-md w-[256px] h-[260px] object-cover mb-2"
                    />
                  )}

                  {/* Labels (not used) */}
                  {item.labels && Array.isArray(item.labels) && (
                    <div className="flex gap-1 mb-1">
                      {item.labels.map((label, j) => (
                        <span
                          key={j}
                          className={`${label} h-[8px] w-[30px] rounded-sm`}
                        ></span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {item.title}
                  </p>

                  {/* Icons */}
                  <div className="flex justify-start items-center gap-2 text-sm">
                    {item.comments && (
                      <div className="flex items-center gap-1">
                        <FaList size={14} />
                      </div>
                    )}

                    {item.attachments && (
                      <div className="flex items-center gap-1">
                        <GoPaperclip size={14} />
                        <span>{item.attachments}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomerOnboardingTemplate;
