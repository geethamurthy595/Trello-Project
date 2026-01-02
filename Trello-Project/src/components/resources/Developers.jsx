import { IoSearch } from "react-icons/io5";
import altassian from "../../assets/Atlassian.png";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import CompanyLogo from "../../assets/CompanyLogo";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const Developers = () => {
  const [openSections, setOpenSections] = useState(["powerup-first"]);
  const toggleSection = (id) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const isSectionOpen = (id) => openSections.includes(id);

  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(null);

  const tooltips = ["Unusable", "Poor", "Okay", "Good", "Excellent"];
  const footerLinks = [
    "Changelog",
    "System status",
    "Privacy",
    "Developer Terms",
    "Trademark",
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const menuItems = [
    {
      label: "COMPLIANCE",
      children: ["Personal Data Storage and GDPR"],
    },
    {
      label: "DEVELOPER TERMS",
      children: [
        "Trello Developer Terms",
        "Summary of Developer Terms Changes",
      ],
    },
    {
      label: "COMMUNITY",
      children: ["Community Projects"],
    },
    {
      label: "EMBEDDING",
      children: ["Embedding Cards", "Embedding Boards"],
    },
    {
      label: "COMPONENTS",
      children: ["Board Tile Component", "Card Component"],
    },
    {
      label: "TRELLO'S REST API",
      children: [
        "API Introduction",
        "Nested Resources",
        "Object Definitions",
        "Limits",
        "Rate Limits",
        "Getting Started With Custom Fields",
        "Authorization",
        "Webhooks",
        "Automating Exports",
        "Action Types",
        "Status Codes",
      ],
    },
    {
      label: "CLIENT.JS",
      children: ["client.js Reference", "Getting Started With client.js"],
    },
  ];

  return (
    <>
      <div>
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="h-16 flex items-center justify-between text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1.5 text-blue-800 border-r border-b-0 border-gray-300 pr-6 font-bold text-lg ">
                  <img
                    className="h-6 w-40"
                    src={altassian}
                    alt="Atlassian Logo"
                  />
                </div>
                <div className="text-xl font-medium text-gray-800 pr-6 ">
                  Developer
                </div>
                <div className="flex items-center space-x-8 text-base text-gray-700 font-normal">
                  <div className="group relative">
                    <button className="flex items-center hover:text-blue-600">
                      Documentation <FaAngleDown className="ml-1 text-xs" />
                    </button>
                  </div>
                  <div className="group relative">
                    <button className="flex items-center hover:text-blue-600">
                      Resources <FaAngleDown className="ml-1 text-xs" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-base text-gray-800 font-normal">
                <div className="flex items-center space-x-1 border-r border-b-0 border-gray-300 pr-6">
                  <a href="#" className="hover:text-blue-600 text-gray-700">
                    Get Support
                  </a>
                  <IoSearch className="text-lg" />
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-800 font-bold border border-transparent hover:bg-gray-200 px-3 py-1 rounded hover:text-blue-600 transition duration-150"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav className="h-12 flex items-center space-x-8 text-sm font-medium text-gray-700 ">
                <p href="#" className="font-bold h-full flex items-center">
                  Trello
                </p>
                <a
                  href="#"
                  className="hover:text-blue-600 h-full flex items-center"
                >
                  Guides
                </a>
                <div className="relative group">
                  <button className="flex items-center hover:text-blue-600">
                    Reference
                    <FaAngleDown className="ml-1 text-xs" />
                  </button>
                </div>
                <a
                  href="#"
                  className="hover:text-blue-600 h-full flex items-center"
                >
                  Changelog
                </a>
              </nav>
            </div>
          </div>
        </header>
        <hr className="w-full mt-5 text-gray-300" />

        <div className="flex relative">
          <aside className="w-[300px] pt-6 border-r border-gray-200">
            <div className="text-sm px-6 gap-2">
              <div className="">
                <h3 className="text-blue-600 border-b border-gray-300 font-bold mb-3 cursor-pointer hover:text-blue-500">
                  • Latest updates
                </h3>
              </div>
              <h2 className="uppercase font-bold text-gray-800 mb-4 cursor-pointer hover:text-blue-500">
                POWER-UPS
              </h2>
              <ul className="p-1 text-gray-600">
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  Your First Power-Up
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3 pl-4">
                  Building A Trello Power-Up: Part One
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3 pl-4">
                  Building A Trello Power-Up: Part Two
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3 pl-4">
                  Building A Trello Power-Up: Part Three
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  Managing Power-Ups
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  Listings
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3 pl-4">
                  Updates
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  Style Guide
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  Public Power-Up Guidelines
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  User Permissions In Power-Ups
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  Power-Up Button
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  Submit Your Power-Up
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  Power-Up Launch Playbook
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  Authentication
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  Security
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  Featured Power-Ups
                </li>
                <li className="cursor-pointer hover:text-blue-500 pb-3">
                  Topics
                </li>
              </ul>

              <div className="w-full bg-white font-sans text-sm mt-4">
                {menuItems.map((item, idx) => (
                  <div key={item.label}>
                    <div
                      className={`font-bold py-2 text-gray-800 uppercase flex justify-between items-center transition-colors duration-150 ${
                        item.children.length
                          ? "cursor-pointer"
                          : "cursor-default"
                      } ${openIndex === idx ? "text-blue-600" : ""}`}
                      onClick={() =>
                        item.children.length
                          ? setOpenIndex(openIndex === idx ? null : idx)
                          : null
                      }
                    >
                      <span>{item.label}</span>
                      {item.children.length ? (
                        <span className="ml-5 text-xl text-gray-400">
                          {openIndex === idx ? (
                            <FaAngleDown className="text-xs" />
                          ) : (
                            <MdKeyboardArrowRight />
                          )}
                        </span>
                      ) : null}
                    </div>
                    {item.children.length > 0 && openIndex === idx && (
                      <div className="pl-4 pb-1">
                        {item.children.map((link) => (
                          <div
                            key={link}
                            className="text-gray-600 my-1.5 cursor-pointer hover:text-blue-500"
                          >
                            {link}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1 pt-4 flex justify-center px-10">
            <div className="flex-1 max-w-3xl">
              <p className="text-xs text-gray-500 mb-6">
                Last updated Oct 3, 2025
              </p>
              <section className="mb-12">
                <h1 className="text-3xl font-bold text-gray-800">
                  Get Started Building On Trello
                </h1>
                <div className="text-gray-700">
                  <span>
                    The best way to build on top of Trello is to create a{" "}
                    <span className="font-semibold">Power-Up</span>! With
                    Power-Ups you can add buttons to cards and boards, show
                    previews of attachments on Trello cards, and much more - all
                    inside of Trello! Power-Ups add extra functionality inside
                    of Trello and let you and your team work with more
                    perspective. Some Power-Ups help you automate your
                    workflows, others give you a new view into the data you have
                    stored in cards.
                  </span>
                  <p>
                    Need to register a new Power-Up or manage an existing one?{" "}
                    <a href="#" className="text-blue-600 underline">
                      Managing Power-Ups
                    </a>
                  </p>
                  <p>
                    Have questions? Visit our{" "}
                    <a href="#" className="text-blue-600 underline">
                      developer community forums ↗
                    </a>
                    .
                  </p>
                  <p>
                    Need to contact us? Visit{" "}
                    <a href="#" className="text-blue-600 underline">
                      https://go.trello.com/dev-support ↗
                    </a>
                    .
                  </p>
                </div>
              </section>
              <hr className="my-8 border-gray-200" />
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Get Started In Five Minutes
                </h2>
                <div className="text-gray-700 leading-relaxed text-base">
                  <p>
                    Not sure where to start with building Power-Ups? We've got
                    you covered. Head over to{" "}
                    <a href="#" className="text-blue-600 underline">
                      Your First Power-Up
                    </a>{" "}
                    to have a custom Power-Up running on one of your Trello
                    boards in no time at all. Don't worry, Taco will still be
                    here when you get back.
                  </p>
                  <hr className="text-gray-300 pt-2" />
                  <p>
                    The sky's the limit in what you can deliver to Trello users
                    in your Power-Up! Try a few of these on for size:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li className="text-gray-700">
                      <span className="font-bold">
                        Add buttons to a Trello board
                      </span>{" "}
                      to trigger magic and delight!
                    </li>
                    <li className="text-gray-700">
                      Provide extra perspective on the front of a card with{" "}
                      <span className="font-bold">data in card badges</span>!
                    </li>
                    <li className="text-gray-700">
                      Add{" "}
                      <span className="font-bold">
                        dynamic buttons on the back of a card
                      </span>{" "}
                      so users can interact with your product!
                    </li>
                    <li className="text-gray-700">
                      Pull in data from third party services like image previews
                      or status updates and share it with users in{" "}
                      <span className="font-bold">attachment sections</span>!
                    </li>
                  </ul>
                  <p>
                    Ready to delight millions by sharing your Power-Up in the
                    marketplace?{" "}
                    <a href="#" className="text-blue-600 underline">
                      Submit your Power-Up
                    </a>{" "}
                    and get the review process started.
                  </p>
                </div>
              </section>
              <div className="flex items-center gap-2 mt-5 ml-120">
                <span className="text-gray-700 text-lg">Rate this page:</span>

                <div className="relative flex items-center">
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                      <div
                        key={ratingValue}
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => setRating(ratingValue)}
                      >
                        {/* Default outline star */}
                        <CiStar size={28} className="text-gray-400" />

                        {/* Filled star on hover or selected rating */}
                        {(hover || rating) >= ratingValue && (
                          <AiFillStar
                            size={28}
                            className="absolute top-0 left-0 text-gray-500"
                          />
                        )}

                        {/* Tooltip */}
                        {hover === ratingValue && (
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            {tooltips[index]}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="w-64 ml-10">
              <div className="sticky top-5">
                <h3 className="uppercase text-xs font-bold text-gray-500 mb-3 tracking-wider">
                  ON THIS PAGE
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-blue-600 font-semibold">
                    <a href="#">Get Started In Five Minutes</a>
                  </li>
                </ul>
              </div>
            </aside>
          </main>
        </div>

        <footer className="bg-gray-100 border-t border-gray-200">
          <div className="max-w-7xl mx-auto h-25 flex items-center justify-between text-sm text-gray-600 px-8">
            <div className="flex items-center space-x-1.5 text-blue-800 font-bold text-lg">
              <CompanyLogo />
            </div>
            <div className="flex items-center space-x-4">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:underline text-gray-700 hover:text-blue-600"
                >
                  {link}
                </a>
              ))}
              <span className="text-gray-700">© 2025 Atlassian</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Developers;
