import React, { useState } from "react";
import logo from "../assets/logo-removebg-preview.png";
import { IoIosArrowDown } from "react-icons/io";
import {
  MdInbox,
  MdPower,
  MdSystemUpdateAlt,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";
import { FcPlanner } from "react-icons/fc";
import { TbSettingsAutomation } from "react-icons/tb";
import { SiGooglemarketingplatform } from "react-icons/si";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineEngineering } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { PiFolderSimpleStarThin } from "react-icons/pi";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { FaLightbulb, FaStar, FaBuilding } from "react-icons/fa";
import Plans from "./Plans";
import Resources from "./Resources";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const boxColors = [
  "bg-red-50",
  "bg-blue-50",
  "bg-green-50",
  "bg-yellow-50",
  "bg-purple-50",
  "bg-pink-50",
  "bg-indigo-50",
  "bg-teal-50",
];

const NavBar = () => {
  const [res1, setMenu] = useState(null);
  const [colorIndex, setColorIndex] = useState(0);

  const [hoveredInbox, setHoveredInbox] = useState(false);
  const [hoveredPlanner, setHoveredPlanner] = useState(false);
  const [hoveredPowerUps, setHoveredPowerUps] = useState(false);
  const [hoveredAutomation, setHoveredAutomation] = useState(false);
  const [hoveredTemplates, setHoveredTemplates] = useState(false);
  const [hoveredIntegrations, setHoveredIntegrations] = useState(false);

  const resetHover = () => {
    setHoveredInbox(false);
    setHoveredPlanner(false);
    setHoveredPowerUps(false);
    setHoveredAutomation(false);
    setHoveredTemplates(false);
    setHoveredIntegrations(false);
  };

  const handle = (setter) => {
    resetHover();
    setter(true);
    setColorIndex((prev) => (prev + 1) % boxColors.length);
  };
  const toggle = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const [hoveredMarketingTeams, setHoveredMarketingTeams] = useState(false);
  const [hoveredProductmanagement, setHoveredProductmanagement] =
    useState(false);
  const [hoveredEngineeringTeams, setHoveredEngineeringTeams] = useState(false);
  const [hoveredDesignTeams, setHoveredDesignTeams] = useState(false);
  const [hoveredStartups, setHoveredStartups] = useState(false);
  const [hoveredRemoteteams, setHoveredRemoteteams] = useState(false);

  const res = () => {
    setHoveredMarketingTeams(false);
    setHoveredProductmanagement(false);
    setHoveredEngineeringTeams(false);
    setHoveredDesignTeams(false);
    setHoveredStartups(false);
    setHoveredRemoteteams(false);
  };

  const handleHover = (setter) => {
    resetHover();
    setter(true);
    setColorIndex((prev) => (prev + 1) % boxColors.length);
  };
  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredStandard, setHoveredStandard] = useState(false);
  const [hoveredPremium, setHoveredPremium] = useState(false);
  const [hoveredEnterprise, setHoveredEnterprise] = useState(false);

  const Menu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const Hover = (setter) => {
    setHoveredStandard(false);
    setHoveredPremium(false);
    setHoveredEnterprise(false);
    setter(true);
  };

  const menuItems = ["features", "solutions", "plans", "resources", "pricing"];

  // Swap pricing and resources
  const reorderedMenu = menuItems.map((item) => {
    if (item === "resources") return "pricing";
    if (item === "pricing") return "resources";
    return item;
  });

  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="relative w-full">
          <nav className="bg-white shadow-xl overflow-hidden text-black z-10 w-full mx-auto flex items-center justify-between px-8 py-3 h-16">
            {/* Logo and Menu Section */}
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="Trello Logo" className="h-28 w-auto" />
              </Link>
              <ul className="flex ml-2 gap-4">
                {reorderedMenu.map((item) => {
                  if (item === "pricing") {
                    // Pricing is a simple link without a dropdown
                    return (
                      <li key={item}>
                        <Link
                          to="/pricing"
                          className="cursor-pointer text-black hover:text-blue-600"
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                      </li>
                    );
                  }

                  // Other menu items with dropdowns
                  return (
                    <li
                      key={item}
                      className={`flex items-center cursor-pointer hover:text-blue-600 ${
                        activeMenu === item ? "text-blue-600" : "text-black"
                      }`}
                      tabIndex={0}
                      role="button"
                      aria-expanded={activeMenu === item}
                      onClick={() => toggleMenu(item)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          toggleMenu(item);
                      }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      <IoIosArrowDown className="ml-1 text-sm" />
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Auth Buttons Section */}
            <div className="flex gap-10 items-center m-0">
              <Link to="/login" className="text-[20px] hover:text-blue-600">
                Log In
              </Link>
              <Link
                to="/signUp"
                className="flex items-center justify-center h-16 px-6 text-[18px] w-auto bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
              >
                Get Trello for Free
              </Link>
            </div>
          </nav>
          <div className="absolute w-full">
            {/* Dropdown content for Features */}
            {activeMenu === "features" && (
              <div className=" bg-white z-10 absolute w-full shadow-lg flex text-gray-900">
                <div className="flex-1 sticky sticky-top pr-8 p-6 border-red-500 w-[450px]">
                  <h2 className=" pl-50 font-semibold mb-3">
                    Explore the features that help your team succeed
                  </h2>
                  <hr className="border-gray-300 w-200 mb-6 mx-50" />

                  {/* First row */}
                  <div className="grid grid-cols-3 gap-3 pl-50 mb-6">
                    <Link
                      to="/inbox"
                      className={`p-3 rounded cursor-pointer ${
                        hoveredInbox ? boxColors[colorIndex] : "bg-transparent"
                      }`}
                      onMouseEnter={() => handleHover(setHoveredInbox)}
                      onMouseLeave={() => setHoveredInbox(false)}
                    >
                      <div className="flex items-center space-x-2 text-gray-900  mb-1">
                        <MdInbox /> <span>Inbox</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Capture every vital detail from emails,
                        <br /> Slack, and more directly into your <br /> Trello
                        Inbox.
                      </p>
                    </Link>

                    <Link
                      to="/planner"
                      className={`p-3 rounded cursor-pointer ${
                        hoveredPlanner
                          ? boxColors[colorIndex]
                          : "bg-transparent"
                      }`}
                      onMouseEnter={() => handleHover(setHoveredPlanner)}
                      onMouseLeave={() => setHoveredPlanner(false)}
                    >
                      <div className="flex items-center space-x-2 text-gray-900  mb-1">
                        <FcPlanner /> <span>Planner</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Sync your calendar and allocate
                        <br /> focused time slots and boost
                        <br /> productivity.
                      </p>
                    </Link>

                    <Link
                      to="/butler-automation"
                      className={`p-3 rounded cursor-pointer ${
                        hoveredAutomation
                          ? boxColors[colorIndex]
                          : "bg-transparent"
                      }`}
                      onMouseEnter={() => handleHover(setHoveredAutomation)}
                      onMouseLeave={() => setHoveredAutomation(false)}
                    >
                      <div className="flex items-center space-x-2 text-gray-900  mb-1">
                        <TbSettingsAutomation /> <span>Automation</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Automate tasks and workflows with Butler Automation.
                      </p>
                    </Link>
                  </div>

                  {/* Second row */}
                  <div className="grid grid-cols-3 gap-3 pl-50">
                    <Link
                      to="/power-ups"
                      className={`p-3 rounded cursor-pointer ${
                        hoveredPowerUps
                          ? boxColors[colorIndex]
                          : "bg-transparent"
                      }`}
                      onMouseEnter={() => handleHover(setHoveredPowerUps)}
                      onMouseLeave={() => setHoveredPowerUps(false)}
                    >
                      <div className="flex items-center space-x-2 text-gray-900  mb-1">
                        <MdPower /> <span>Power-Ups</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Power up your teams by linking their
                        <br /> favorite tools with Trello plugins.
                      </p>
                    </Link>

                    <Link
                      to="/templates"
                      className={`p-3 rounded cursor-pointer ${
                        hoveredTemplates
                          ? boxColors[colorIndex]
                          : "bg-transparent"
                      }`}
                      onMouseEnter={() => handleHover(setHoveredTemplates)}
                      onMouseLeave={() => setHoveredTemplates(false)}
                    >
                      <div className="flex items-center space-x-2 text-gray-900  mb-1">
                        <MdSystemUpdateAlt /> <span>Templates</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Give your team a blueprint for
                        <br /> success with easy-to-use templates
                        <br /> from industry leaders and the Trello
                        <br /> community
                      </p>
                    </Link>

                    <Link
                      to="/integrations"
                      className={`p-3 rounded cursor-pointer ${
                        hoveredIntegrations
                          ? boxColors[colorIndex]
                          : "bg-transparent"
                      }`}
                      onMouseEnter={() => handleHover(setHoveredIntegrations)}
                      onMouseLeave={() => setHoveredIntegrations(false)}
                    >
                      <div className="flex items-center space-x-2 text-gray-900  mb-1">
                        <MdOutlineIntegrationInstructions />{" "}
                        <span>Integrations</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Find the apps your team is already
                        <br /> using or discover new ways to get
                        <br /> work done in Trello.
                      </p>
                    </Link>
                  </div>
                </div>
                {/* Meet Trello */}
                <div className="p-6  rounded bg-purple-50 w-[500px] text-gray-900 ">
                  <h2 className="font-semibold text-lg mb-3 text-[15px]">
                    Meet Trello
                  </h2>
                  <hr className="border-purple-300 mb-3" />
                  <p className="mb-5 text-gray-400 indent-1 text-[13px]">
                    Trello makes it easy for your team to get work <br /> done.
                    No matter the project, workflow, or type of <br /> team,
                    Trello can help keep things organized. It’s <br /> simple –
                    sign-up, create a board, and you’re off! <br /> Productivity
                    awaits.
                  </p>
                  <Link
                    to="/tour"
                    className="border border-purple-600 bg-white py-2 px-4 rounded hover:bg-purple-100 hover:text-black"
                  >
                    Check out Trello
                  </Link>
                </div>
              </div>
            )}

            {/* Dropdown content for Solutions */}

            {activeMenu === "solutions" && (
              <div className=" bg-white z-10 absolute w-full transition-all shadow-lg flex text-gray-900">
                <div className="flex-1 pr-8 p-6 border-red-500 w-[450px]">
                  <h2 className="pl-50 font-semibold mb-3">
                    Take a page out of these pre-built Trello playbooks designed
                    for all teams
                  </h2>
                  <hr className="border-gray-300 w-200 mb-6 mx-50" />

                  <div className="grid grid-cols-3 gap-5 pl-50 mb-4">
                    <Link
                      to="/teams/marketing"
                      className={`p-3 rounded cursor-pointer ${
                        hoveredMarketingTeams
                          ? boxColors[colorIndex]
                          : "bg-transparent"
                      }`}
                      onMouseEnter={() => handleHover(setHoveredMarketingTeams)}
                      onMouseLeave={() => setHoveredMarketingTeams(false)}
                    >
                      <div className="flex items-center space-x-2 text-gray-900 mb-1">
                        <SiGooglemarketingplatform />
                        <span>Marketing teams</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Whether launching a new product, campaign, or creating
                        content, Trello helps marketing teams succeed.
                      </p>
                    </Link>

                    <Link
                      to="/teams/product"
                      className={`p-3 rounded cursor-pointer ${
                        hoveredProductmanagement
                          ? boxColors[colorIndex]
                          : "bg-transparent"
                      }`}
                      onMouseEnter={() =>
                        handleHover(setHoveredProductmanagement)
                      }
                      onMouseLeave={() => setHoveredProductmanagement(false)}
                    >
                      <div className="flex items-center space-x-2 text-gray-900 mb-1">
                        <AiFillProduct /> <span>Product management</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Use Trello's management boards and roadmap features to
                        simplify complex projects and processes.
                      </p>
                    </Link>

                    <Link
                      to="/teams/engineering"
                      className={`p-3 rounded cursor-pointer ${
                        hoveredEngineeringTeams
                          ? boxColors[colorIndex]
                          : "bg-transparent"
                      }`}
                      onMouseEnter={() =>
                        handleHover(setHoveredEngineeringTeams)
                      }
                      onMouseLeave={() => setHoveredEngineeringTeams(false)}
                    >
                      <div className="flex items-center space-x-2 text-gray-900 mb-1">
                        <MdOutlineEngineering />
                        <span>Engineering teams</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Ship more code, faster, and give your developers the
                        freedom to be more agile with Trello.
                      </p>
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pl-50 mb-4">
                    <Link
                      to="/teams/design"
                      className={`p-3 rounded cursor-pointer ${
                        hoveredDesignTeams
                          ? boxColors[colorIndex]
                          : "bg-transparent"
                      }`}
                      onMouseEnter={() => handleHover(setHoveredDesignTeams)}
                      onMouseLeave={() => setHoveredDesignTeams(false)}
                    >
                      <div className="flex items-center space-x-2 text-gray-900 mb-1">
                        <FaPencilAlt /> <span>Design teams</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Empower your design teams by using Trello to streamline
                        creative requests and promote more fluid cross-team
                        collaboration.
                      </p>
                    </Link>

                    <Link
                      to="/teams/startups"
                      className={`p-3 rounded cursor-pointer ${
                        hoveredStartups
                          ? boxColors[colorIndex]
                          : "bg-transparent"
                      }`}
                      onMouseEnter={() => handleHover(setHoveredStartups)}
                      onMouseLeave={() => setHoveredStartups(false)}
                    >
                      <div className="flex items-center space-x-2 text-gray-900 mb-1">
                        <PiFolderSimpleStarThin /> <span>Startups</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        From hitting revenue goals to managing workflows, small
                        businesses thrive with Trello.
                      </p>
                    </Link>

                    <Link
                      to="/teams/remote-team-management"
                      className={`p-3 rounded cursor-pointer ${
                        hoveredRemoteteams
                          ? boxColors[colorIndex]
                          : "bg-transparent"
                      }`}
                      onMouseEnter={() => handleHover(setHoveredRemoteteams)}
                      onMouseLeave={() => setHoveredRemoteteams(false)}
                    >
                      <div className="flex items-center space-x-2 text-gray-900 mb-1">
                        <HiOutlineGlobeAlt /> <span>Remote teams</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Keep your remote team connected and motivated, no matter
                        where they’re located around the world.
                      </p>
                    </Link>
                  </div>
                  <Link to="/teams" className="inline-flex mt-2 px-50">
                    <a href="#" className="font-medium flex items-center gap-3">
                      See all teams{" "}
                      <GoArrowRight className="text-blue-600 text-2xl font-bold" />
                    </a>
                  </Link>
                </div>

                <div className="p-6  rounded bg-purple-50 w-[530px]  h-[470px] text-gray-900 ">
                  <h2 className="font-semibold mb-4 text-[15px]">
                    Our product in action
                  </h2>
                  <hr className="border-gray-300 mb-6" />

                  <Link to="/use-cases/task-management" className="mb-6">
                    <span className="font-medium text-gray-700">
                      Use case: Task management
                    </span>
                    <p className="text-xs text-gray-400 w-[270px]">
                      Track progress of tasks in one convenient place with a
                      visual layout that adds 'ta-da' to your to-do's.
                    </p>
                  </Link>
                  <div className="mb-6"></div>
                  <Link to="/use-cases/resource-hub" className="mb-6">
                    <span className="font-medium text-gray-700">
                      Use case: Resource hub
                    </span>
                    <p className="text-xs text-gray-400 w-[270px]">
                      Save hours when you give teams a well-designed hub to find
                      information easily and quickly.
                    </p>
                  </Link>
                  <div className="mb-6"></div>
                  <Link to="/use-cases/project-management" className="mb-6">
                    <span className="font-medium text-gray-700">
                      Use case: Project management
                    </span>
                    <p className="text-xs text-gray-400 w-[270px]">
                      Keep projects organized, deadlines on track, and teammates
                      aligned with Trello.
                    </p>
                  </Link>
                  <Link
                    to="/use-cases"
                    className="font-medium flex items-center gap-3"
                  >
                    See all use cases{" "}
                    <GoArrowRight className="text-blue-600 text-2xl font-bold" />
                  </Link>
                </div>
              </div>
            )}

            {/* plans  */}

            {/* Plans dropdown content  */}
            {activeMenu === "plans" && (
              <div
                className="max-w-[1536px] z-10 absolute w-full transition-all mx-auto bg-white p-6 shadow-lg rounded-b-lg flex text-gray-900 justify-between"
                style={{ minWidth: "900px" }}
              >
                <Plans />
              </div>
            )}

            {activeMenu === "resources" && (
              <div
                className="max-w-[1536px] z-10 absolute w-full transition-all bg-white shadow-lg rounded-b-lg flex text-gray-900 justify-between"
                style={{ minWidth: "900px" }}
              >
                <Resources />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
