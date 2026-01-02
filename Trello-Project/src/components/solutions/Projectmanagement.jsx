import React from "react";
import Window from "../../assets/Window.webp";
import Pro1 from "../../assets/Pro1.webp";
import Create from "../../assets/Create.webp";
import Square from "../../assets/Square.webp";
import Time1 from "../../assets/Time1.webp";
import Ring from "../../assets/Ring.png";
import Slack3 from "../../assets/Slack3.svg";
import Drive from "../../assets/Drive.svg";
import List from "../../assets/List.png";
import Ver2 from "../../assets/Ver2.svg";
import Ultra from "../../assets/Ultra.svg";
import Cat from "../../assets/Cat.webp";
import White2 from "../../assets/White2.webp";
import Total from "../../assets/Total.svg";
import { TbCircleLetterIFilled } from "react-icons/tb";
import { FaPen } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import UniversalFooter from "../UniversalFooter";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

let Projectmanagement = () => {
  const cards = [
    {
      title: "Time Tracking & Reporting",
      category: "Analytics & Reporting",
      description:
        "Help your team log time on Trello cards to track work. Create and export reports to see aggregated data.",

      image: Ring,
      bg: "bg-cyan-500",
      path:"/power-ups/5d367a59d5db032812ddbf22"
    },
    {
      title: "Slack",
      category: "Automation",
      description: "Keep your communication and collaboration apps connected.",
      image: Slack3,
      bg: "bg-purple-700",
      path:"/power-ups/55a5d917446f51777421000a"
    },
    {
      title: "Google Drive",
      category: "File management",
      description:
        "Search Google Drive right from Trello and attach relevant files and folders.",
      image: Drive,
      bg: "bg-blue-500",
      path:"/power-ups/55a5d916446f517774210006"
    },
    {
      title: "List Limit",
      category: "Board utilities",
      description:
        "Set a limit on your lists and we'll highlight the list if the number of cards in it passes this limit.",
      image: List,
      bg: "bg-cyan-500",
      path:"/power-ups/5c2462c384ab8949b1724a20"
    },
    {
      title: "Confluence",
      category: "Communication & collaboration",
      description:
        "Pull Confluence pages into your meeting board, or start a new one from a card.",
      image: Ver2,
      bg: "bg-blue-900",
      path: "/power-ups/586be37142f94dc0871fbcbb/confluence-cloud",
    },
    {
      title: "Jira",
      category: "Developer Tools",
      description:
        "Connect Jira and Trello to help all your teams work better together.",
      image: Ultra,
      bg: "bg-blue-700",
      path:"/power-ups"
    },
  ];

  const items = [
    {
      icon: <TbCircleLetterIFilled className="h-8 w-8 text-[#172B4D] flex" />,
      title: "The ultimate guide to team project management",
      description:
        "There’s no such thing as winging it when it comes to effective project management. Discover how to stay aligned as a team, identify risks, improve collaboration, and remove blockers.",
      link: "Read more",
    },
    {
      icon: <FaPen className="h-8 w-8 text-[#172B4D] flex" />,
      title: "How to unlock project management perfection with Trello",
      description:
        "Get your project off the ground in a matter of seconds by discovering the secret sauce to project planning. Hint: Trello is the main ingredient.",
      link: "Read more",
    },
    {
      icon: <MdOutlineMenuBook className="h-8 w-8 text-[#172B4D] flex" />,
      title: "Your team’s project roadmap: Gantt charts in Trello",
      description:
        "Building a project roadmap in Trello gives you an automatic way to generate Gantt charts on demand. Plan your project, and your chart will follow.",
      link: "Read more",
    },
    {
      icon: <FaFlag className="h-8 w-8 text-[#172B4D] flex" />,
      title: "The most common project blockers and ways to eliminate them",
      description:
        "Project blockers come in all shapes and sizes. The key to delivering work on time is knowing your project blockers or impediments.",
      link: "Read more",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="w-full bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-start pt-24">
        <img src={Window} alt="" className="max-w-3xl w-full mb-12" />
        <h1 className="font-bold text-4xl max-w-3xl text-center leading-13">
          Project management without the <br /> mayhem
        </h1>
        <p className="mt-4 max-w-2xl text-gray-700 text-lg text-center">
          From initiation to completion, Trello makes it easy to monitor every
          aspect of your next project. Designed for teams of any size, anywhere.
        </p>
        <button className="mt-10 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded">
          Get started with Trello
        </button>
        <h1 className="font-bold mt-14 text-3xl">
          Manage any project (big or small) with Trello
        </h1>
        <img className="w-230 mt-4" src={Pro1} alt="" />
        <h2 className="text-3xl font-bold text-[#091E42] p-10 mr-156">
          Manage all of your projects in one <br />
          powerful tool that makes project <br />
          management <span className="line-through">manageable</span> magical
        </h2>
        <div>
          <h2 className="font-bold text-3xl mr-184 mt-3">
            Custom fields: the only <br /> limitation is your <br /> imagination
          </h2>
          <hr className="mb-3 border-gray-500 w-100 mt-4" />
          <p className="text-[#091E42] text-[20px] mt-2.5">
            Whether it’s a simple to-do list or a complex <br /> workflow,
            custom fields are an effective way <br /> to save time and meet the
            demands of any <br /> project. Pro tip: combine custom fields with{" "}
            <br /> automation to supercharge your boards.
          </p>
          <img className="w-140 ml-140 mt-[-300px]" src={Create} alt="" />
        </div>
        <div className="flex mt-3">
          <div className="max-w-lg mr-44">
            <img src={Square} alt="" className="w-full  rounded" />
          </div>
          <div className="max-w-md ">
            <h2 className="text-3xl font-bold text-[#091E42] mb-6 leading-snug">
              Automation keeps work flowing
            </h2>
            <p className="text-base text-[#091E42] mb-6">
              Trello’s built in automation tool handles repetitive tasks such as
              creating agenda cards, adding team members, or tracking due dates.
            </p>
            <button className="border border-[#0065FF] px-6 py-2 rounded hover:bg-[#CCE0FF] transition-colors duration-300">
              Save time with automation
            </button>
          </div>
        </div>
        <div className="flex mt-19 mr-30">
          <div className="">
            <h2 className="text-3xl font-bold text-[#091E42] mt-2.5">
              See your projects from any <br /> angle
            </h2>
            <p className="text-[18px] text-[#091E42] mt-4">
              There are multiple ways to visualize your <br /> projects with
              Trello: view as a dashboard, a <br /> timeline, a table, and more.
              Using views helps <br /> visualize the work to be done, giving you
              the <br /> ability to see high-level project status down to <br />{" "}
              the day-to-day tasks.
            </p>
            <button className="border border-[#0065FF] px-6 py-2 rounded hover:bg-[#CCE0FF] transition-colors duration-300 mt-2.5">
              Learn about views
            </button>
          </div>
          <div className="w-170 pl-50 mt-[-40px]">
            <img src={Time1} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-10 w-full max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <Link
              key={idx}
              className="rounded shadow-2xl overflow-hidden bg-white"
              to={card.path}
            >
              <div className={`h-24 flex items-center ${card.bg}`}>
                <img
                  src={card.image}
                  alt=""
                  className="h-10 w-14 mt-20  bg-white rounded-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-2xl mb-2">{card.title}</h3>
                <span className="block text-gray-500 text-sm mb-2">
                  {card.category}
                </span>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>{" "}
        <br /> <br />
        <h1 className="font-bold text-3xl mr-140">
          {" "}
          No need to start from scratch. Use one of <br /> our customizable
          templates.
        </h1>
        <p className=" mr-158 mt-2 font-semibold text-[18px]">
          Jumpstart your board with a well-proven
          <a href="" className="underline text-blue-600 cursor-pointer">
            {" "}
            template
          </a>{" "}
          designed by <br /> our team. Customize it for yours.
        </p>{" "}
        <br />
        <div className="flex gap-8 mr-23">
          <div>
            <img className="w-130" src={Cat} alt="" />
            <h1 className="font-bold text-2xl mt-3">Project Management</h1>
            <p className="text-[18px] mt-2">
              Big dreams turn into bigger results with a killer project <br />{" "}
              plan. Use this basic structure to build your team’s ideal <br />{" "}
              workflow, for projects big or small.
            </p>{" "}
            <br />
            <a
              href=""
              className="underline text-blue-600 cursor-pointer text-2xl"
            >
              Get organized
            </a>
          </div>
          <div>
            <img className="w-130" src={White2} alt="" />
            <h1 className="font-bold text-2xl mt-3">
              Work Request and Intake Process
            </h1>
            <p className="text-[18px] mt-2">
              This board uses Google Forms, Zapier, Butler rules, and <br />{" "}
              Power-Ups to create a way for coworkers to request <br /> work
              from you.
            </p>{" "}
            <br />
            <a
              href=""
              className="underline text-blue-600 cursor-pointer text-2xl"
            >
              Improve your workflow
            </a>
          </div>
        </div>{" "}
        <br /> <br /> <br /> <br />
        <br />
        <h1 className="text-[20px] tracking-[1px]">
          Join a community of millions of users globally who are using Trello to
          get more done.
        </h1>{" "}
        <br />
        <img src={Total} alt="" /> <br />
        <br />
        <br />
        <div className="min-h-screen w-full bg-[#e0f6ff] py-12 px-4">
          <h1 className="font-bold ml-34 text-[23px] mt-3">
            Project management tips from the pros.
          </h1>
          <p className="ml-34 text-[18px] text-gray-500 mt-2">
            Read the Trello blog to find ways to improve efficiency, <br />{" "}
            productivity, and collaboration.
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10 mt-16">
            {items.map((card, i) => (
              <div key={i} className="flex items-start gap-4">
                {card.icon}
                <div>
                  <h2 className="text-[23px] font-bold text-[#172B4D] mb-2 w-100">
                    {card.title}
                  </h2>
                  <p className="text-[#172B4D] mb-3 w-100 text-[18px]">
                    {card.description}
                  </p>
                  <a
                    href=""
                    className="underline text-blue-600 cursor-pointer text-[19px]"
                  >
                    {card.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <UniversalFooter />
    </>
  );
};
export default Projectmanagement;
