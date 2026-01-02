import React from "react";
import NavBar from "../../../../NavBar";
import EK from "../../../../../assets/EK.png";
import EKArrow from "../../../../../assets/EKArrow.png";
import { LuListFilter } from "react-icons/lu";
import { BiWorld } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { CgArrowsV } from "react-icons/cg";
import { HiMenuAlt2 } from "react-icons/hi";
import templateone from "../../../../../assets/templateone.jpeg";

// ✅ Example banner images
import office1 from "../../../../../assets/officeone.jpg";
import office2 from "../../../../../assets/officetwo.jpg";
import person1 from "../../../../../assets/modelone.png";
import person2 from "../../../../../assets/modeltwo.png";
import team1 from "../../../../../assets/modelfour.png";
import desk1 from "../../../../../assets/modelfive.png";

const NewHireTemplate = ({ preview = false }) => {
  // ✅ Cards with tasks and selective images
  const cardData = [
    {
      title: "Before First Day",
      tasks: [
        { text: "Send welcome email", button: "View" },
        { text: "Prepare workstation" },
        { text: "Grant system access", button: "Done" },
        {
          text: "Assign mentor",
          extraImage: office1, // ✅ 4th task image
        },
        { text: "Set up calendar invite" },
        { text: "Complete HR docs" },
        { text: "Send intro video" },
        { text: "Share Slack invite" },
        { text: "Verify IT setup" },
        {
          text: "Confirm Day 1 schedule",
          button: "Check",
          extraImage: office2, // ✅ last task image
        },
      ],
    },
    {
      title: "Preboarding",
      tasks: [
        { text: "Complete paperwork" },
        { text: "Meet your buddy" },
        {
          text: "Get company swag",
          extraImage: person2, // ✅ added model image
        },
        { text: "Confirm first-day logistics" },
      ],
    },
    {
      title: "First Week",
      tasks: [
        { text: "Set up HR profile", image: EK },
        { text: "Attend product demo", button: "View", image: EKArrow },
        {
          text: "Shadow senior team",
          image: EK,
          extraImage: person1, // ✅ person image
        },
        { text: "Review onboarding checklist", image: EKArrow },
        { text: "Join daily standups", image: EK },
      ],
    },
    {
      title: "On First Day - First Week",
      tasks: [
        { text: "Check Employee Manual", image: EK },
        {
          text: "Join first team meeting",
          image: EKArrow,
          extraImage: team1, // ✅ team image
        },
        { text: "Read onboarding guide", image: EK },
      ],
    },
    {
      title: "Learning Phase",
      tasks: [
        { text: "Review company values", image: EK },
        { text: "Explore internal wiki", image: EKArrow },
        { text: "Attend Q&A with manager", image: EK },
        { text: "Join team meetings", image: EKArrow },
      ],
    },
    {
      title: "First Month",
      tasks: [
        {
          text: "Complete onboarding goals",
          extraImage: desk1, // ✅ desk photo at top task
        },
        { text: "Schedule 1:1 with manager", button: "Done" },
        { text: "Review feedback" },
        { text: "Plan next steps" },
      ],
    },
    {
      title: "Engagement Activities",
      tasks: [
        { text: "Join team lunch", image: EK },
        { text: "Play onboarding quiz", image: EKArrow },
        { text: "Participate in standup", image: EK },
        { text: "Team bonding activity", image: EKArrow },
      ],
    },
  ];

  return (
    <main
      className={`w-full ${
        preview ? "h-full" : "h-[100vh]"
      } bg-cover bg-center overflow-hidden relative`}
      style={{ backgroundImage: `url(${templateone})` }}
    >
      {!preview && <NavBar />}

      {/* Header */}
      <div
        className={`w-full h-20 flex items-center shadow-md bg-opacity-60 backdrop-blur-sm z-10 ${
          preview ? "relative" : "sticky top-0"
        }`}
      >
        <div className="w-[98%] h-fit m-auto flex justify-between items-center">
          <div className="w-1/3 h-fit flex gap-4 items-center">
            <h1 className="text-[#172B4D] text-xl font-semibold leading-normal">
              New Hire Onboarding
            </h1>
            <p className="bg-gray-300 bg-opacity-40 text-[#172b4d] rounded text-base w-fit px-1 flex items-center justify-center">
              Template
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-fit">
              <img src={EK} alt="Base" className="w-7" />
              <img
                src={EKArrow}
                alt="Overlay"
                className="absolute bottom-0 right-0 w-3"
              />
            </div>
            <LuListFilter className="text-2xl text-[#172B4D]" />
            <BiWorld className="text-2xl text-[#172B4D]" />
            <CiMenuKebab className="rotate-90 text-2xl text-[#172B4D]" />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div
        className={`${
          preview ? "absolute top-20 left-0" : "relative mt-0"
        } w-full overflow-x-auto scrollbar-hide`}
      >
        <div className="flex gap-6 px-8 py-6 w-max">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-[22vw] min-w-[260px] h-[75vh] rounded-lg bg-[#000000] bg-opacity-60 text-center shadow-md flex flex-col flex-shrink-0 overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3">
                <p className="text-lg font-semibold text-white">{card.title}</p>
                <CgArrowsV className="text-[#FFFFFF] rotate-90 text-2xl" />
              </div>

              {/* Tasks */}
              <div className="w-full flex-1 flex flex-col justify-start items-start text-white space-y-3 px-4 pb-6 overflow-y-auto scrollbar-hide">
                {card.tasks.map((taskObj, i) => (
                  <div key={i} className="w-full">
                    {/* ✅ Extra image above specific tasks */}
                    {taskObj.extraImage && (
                      <img
                        src={taskObj.extraImage}
                        alt=""
                        className="w-full h-20 object-cover rounded-lg mb-2 shadow-md"
                      />
                    )}

                    <div className="w-full flex justify-between items-center bg-[#2f3033] px-3 py-2 rounded">
                      <div className="flex items-center gap-2">
                        {taskObj.image && (
                          <img
                            src={taskObj.image}
                            alt=""
                            className="w-5 h-5 rounded object-cover"
                          />
                        )}
                        <HiMenuAlt2 className="text-lg text-gray-300" />
                        <p className="text-sm">{taskObj.text}</p>
                      </div>
                      {taskObj.button && (
                        <button className="bg-[#4b83f0] text-white text-xs px-3 py-1 rounded hover:bg-[#6c9df5]">
                          {taskObj.button}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
};

export default NewHireTemplate;
