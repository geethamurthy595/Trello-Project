import React from "react";
import box from "../../../assets/Powerups-Madebytrello/box.png";
import calender from "../../../assets/Powerups-Madebytrello/calendar-icon.svg";
import card from "../../../assets/Powerups-Madebytrello/card.svg";
import Repeater from "../../../assets/Powerups-Madebytrello/Repeater.svg";
import snooze from "../../../assets/Powerups-Madebytrello/snooze.svg";
import dynamicIcon from "../../../assets/Powerups-Madebytrello/dynamicIcon.svg";
import evernote from "../../../assets/Powerups-Madebytrello/evernote.png";
import github from "../../../assets/Powerups-Madebytrello/github.png";
import hang from "../../../assets/Powerups-Madebytrello/hangouts-chat.png";
import drive from "../../../assets/Powerups-Madebytrello/drive.png";
import list from "../../../assets/Powerups-Madebytrello/list-limits.svg";
import mail from "../../../assets/Powerups-Madebytrello/Mail.png";
import blue from "../../../assets/Powerups-Madebytrello/blue.png";
import pac from "../../../assets/Powerups-Madebytrello/package.png";
import icon from "../../../assets/Powerups-Madebytrello/icon.png";
import sales from "../../../assets/Powerups-Madebytrello/salesforce.png";
import slack from "../../../assets/Powerups-Madebytrello/slack.svg";
import voting from "../../../assets/Powerups-Madebytrello/voting-icon.svg";
import logo from "../../../assets/Powerups-Madebytrello/logo.png";
import { FaHeart } from "react-icons/fa";

<FaHeart className="text-red-500" />


const powerUps = [
  {
    id: 1,
    name: "Box",
    desc: "See updated information and previews for any Box files or folders attached to a card.",
    installs: "50,000+",
    img:box,
  },
  {
    id: 2,
    name: "Calendar Power-Up",
    desc: "Visualize Trello cards in a calendar view.",
    installs: "11,000,000+",
    img: calender,
    staffPick: true,
  },
  {
    id: 3,
    name: "Card Aging",
    desc: "Quickly visualize inactive cards on your board.",
    installs: "500,000+",
    img: card,
  },
  {
    id: 4,
    name: "Card Repeater",
    desc: "Automatically copy Trello cards for repeated tasks.",
    installs: "500,000+",
    img: Repeater,
    staffPick: true,
  },
  {
    id: 5,
    name: "Card Snooze",
    desc: "Snooze (archive) a card until a certain time.",
    installs: "250,000+",
    img: snooze,
  },
  {
    id:6,
    name:"Dashcards",
    desc:"Turn any board into a dashboard and track work access Trello with a new type of card",
    installs:"100,000+",
    img: dynamicIcon,
  },
  {
    id: 7,
    name: "Evernote",
    desc: "Create and attach notes right to your Trello cards, and see when they were last edited.",
    installs: "100,000+",
    img: evernote,
  },
  {
    id:8,
    name: "GitHub",
    desc: "Attach branches, commits, issues, & pull requests to cards, and see the status of pull requests on your boards.",
    installs: "250,000+",
    img: github,
    whiteIcon: true,
  },
  {
    id: 9,
    name: "Google Chat",
    desc: "Send Trello alerts to Google Chat conversations.",
    installs: "50,000+",
    img: hang,
  },
  {
    id: 10,
    name: "Google Drive",
    desc: "Access your Drive files for a project directly from its card, or create and attach new Drive files to a card.",
    installs: "2,000,000+",
    img: drive,
  },
  {
    id: 11,
    name: "List Limits",
    desc: "Set a limit on your lists to highlight them if the number of cards in it passes the limit.",
    installs: "1,000,000+",
    img: list,
  },
  {
    id: 12,
    name: "MailChimp",
    desc: "At a glance, get up-to-date information and stats about templates and campaigns attached to a card.",
    installs: "25,000+",
    img: mail,
  },
  {
    id: 13,
    name: "OneDrive",
    desc: "Connect OneDrive and Trello to attach files or folders from OneDrive to your Trello cards.",
    installs: "100,000+",
    img: blue,
  },
  {
    id: 14,
    name: "Package Tracker",
    desc: "Track packages right from Trello and get always up-to-date info on orders and shipments.",
    installs: "100,000+",
    img:pac,
    staffPick: true,
  },
  {
    id: 15,
    name: "Read Me",
    desc: 'Write a "Read Me" for your board in Markdown!',
    installs: "100,000+",
    img:icon,
  },
  {
    id: 16,
    name: "Salesforce",
    desc: "Track your sales pipeline in Trello with cases, contacts, leads, & opportunities directly on cards.",
    installs: "50,000+",
    img:sales,
  },
  {
    id: 17,
    name: "Slack",
    desc: "Connect your communication and collaboration apps so that no ideas or tasks fall through the cracks.",
    installs: "1,000,000+",
    img: slack,
  },
  {
    id: 18,
    name: "Voting",
    desc: "Give power to the people, and allow users to vote on cards.",
    installs: "500,000+",
    img: voting,
    staffPick: true,
  },
  {
    id: 19,
    name: "Zendesk",
    desc: "Quickly search for and attach tickets and views to your cards.",
    installs: "50,000+",
    img: logo,
  },
];

const Madebytrello = () => {
  return (
    <div className="px-6 py-6 bg-black h-[90vh] overflow-scroll hide-scrollbar">

      <h2 className="text-xl font-semibold mb-6 text-white">
        Made by Trello
      </h2>

      <div className="w-[900px]">

        <div className="grid grid-cols-3 gap-4">

          {powerUps.map((item) => (

            <div
              key={item.id}
              className="bg-[#1E1E1E] rounded-lg p-3 border border-gray-700 
              hover:bg-[#2A2A2A] hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              
              {/* Image + Title */}
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={item.img}
                  alt={item.name}
                  //className="w-10 h-10 rounded"
                  className={`w-10 h-10 rounded ${item.name === "GitHub" ? "invert" : ""}`}
                />

                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded mb-3">
                Add
              </button>

              <p className="text-gray-300 text-sm mb-4">
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-400">

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
                    fill="currentColor"
                  />
                </svg>

                {item.installs}

                {item.staffPick && (
                  <div className="flex items-center gap-1 text-red-500 font-medium">
                    <FaHeart />
                    <span className="text-gray-300">Staff pick</span>
                  </div>
                )}
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Madebytrello;