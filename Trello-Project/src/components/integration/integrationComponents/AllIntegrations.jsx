import React from 'react';
import jira1 from "../../../assets/jira1.png";
import Board from "../../../assets/Board.jpg";
import Slack1 from "../../../assets/Slack1.png";
import { IoSearchOutline } from "react-icons/io5";
import Slack from "../../../assets/slack.png";
import miro from "../../../assets/miro.png";
import jira from "../../../assets/jira.png";
import aha from "../../../assets/Aha.png";
import bluecat from "../../../assets/BlueCat.png";
import boardsync from "../../../assets/BoardSync.png";
import bridge24 from "../../../assets/Bridge24.png";
import capture from "../../../assets/CaptureforTrello.png";
import snooze from "../../../assets/CardSnooze.png";
import giphy from "../../../assets/Giphy.png";
import gitlab from "../../../assets/GitLab.png";
import jell from "../../../assets/Jell.png";
import LinkedBuddy from "../../../assets/LinkedBuddy.png";
import Publicate from "../../../assets/Publicate.png";
import HourStack from "../../../assets/HourStack.png";
import sunsama from "../../../assets/sunsama.png";
import timedoctor from "../../../assets/TimeDoctor.png";
import raygun from "../../../assets/Raygun.png";
import detectify from "../../../assets/Detectify.png";
import Gant from "../../../assets/GanttCharts.png";
import kanban from "../../../assets/Kanban.png";
import lokalise from "../../../assets/Lokalise.png";
import outlook from "../../../assets/outlook.png";
import numerics from "../../../assets/Numerics.png";
import gnattify from "../../../assets/Ganttify.png";
import hubstaff from "../../../assets/Hubstaff.png";
import gcs from "../../../assets/gcs.png";

const AllIntegrations = () => {
      const Integrations = [
    // --- FEATURED INTEGRATIONS ---
    {
      logo: Slack,
      imgurl: Slack1,
      name: "Slack Power-Up",
      description: "Share cards and activity, pin a Slack channel to a board.",
      isFeatured: true,
    },
    {
      logo: jira,
      imgurl: jira1,
      name: "JIRA Cloud",
      description:
        "Easily connect Trello cards to JIRA issues so you can see real-time progress at a glance.",
      isFeatured: true,
    },
    {
      logo: miro,
      imgurl: Board,
      name: "Miro",
      description:
        "Easily attach and create new Miro Boards without having to leave Trello.",
      isFeatured: true,
    },
  ];

  const allIntegrations = [
    {
      name: "Giphy Power-Up",
      description: "Upload fun GIFs to Trello cards with a click of a button.",
      isFeatured: false,
      logo: giphy,
    },
    {
      name: "Aha!",
      description: "Sync product plans in Aha! with Trello boards and cards.",
      isFeatured: false,
      logo: aha,
    },
    {
      name: "LinkedBuddy",
      description:
        "LinkedBuddy, the Chrome extension that turns LinkedIn profiles to Trello cards. Reduce a routine work for your team, copy Linkedin leads to your CRM in one click.",
      isFeatured: false,
      logo: LinkedBuddy,
    },
    {
      name: "Card Snooze",
      description:
        "Snooze (archive) a card until a certain time, when it will be restored to the board.",
      isFeatured: false,
      logo: snooze,
    },
    {
      name: "Publicate Power-Up",
      description: "Attach publications and view campaign stats.",
      isFeatured: false,
      logo: Publicate,
    },
    {
      name: "HourStack",
      description: "Time tracking and scheduling for Trello cards.",
      isFeatured: false,
      logo: HourStack,
    },
    {
      name: "Gantt for Trello",
      description: "Generate Gantt charts from your Trello boards.",
      isFeatured: false,
      logo: Gant,
    },
    {
      name: "Capture for Trello",
      description: "Take a screenshot and put it in a Trello card in seconds.",
      isFeatured: false,
      logo: capture,
    },
    {
      name: "Bridge24 for Trello",
      description:
        "Enhanced reporting & exporting capabilities for Trello cards across all boards with drill down charts.",
      isFeatured: false,
      logo: bridge24,
    },
    {
      name: "Jell",
      description: "Link to Trello cards from your daily standups.",
      isFeatured: false,
      logo: jell,
    },
    {
      name: "Blue Cat",
      description:
        "Easy, beautiful, fully customizable, drag and drop reports for Trello.",
      isFeatured: false,
      logo: bluecat,
    },
    {
      name: "Detectify",
      description:
        "Add Detectify security notifications to your favourite to-do list.",
      isFeatured: false,
      logo: detectify,
    },
    {
      name: "Lokalise",
      description:
        "Use this integration to automatically create Trello cards as your events fire.",
      isFeatured: false,
      logo: lokalise,
    },
    {
      name: "Send to Trello Add-in for Outlook",
      description:
        "This add-in makes it very easy to send the selected email to your Trello board where you or your team can then take action on it.",
      isFeatured: false,
      logo: outlook,
    },
    {
      name: "Sunsama",
      description:
        "Plan a calm and focused work day by combining Trello, calendars, emails and other tools.",
      isFeatured: false,
      logo: sunsama,
    },
    {
      name: "Board Sync by Unito",
      description:
        "Mirror entire boards or just a few cards from one Trello board to another.",
      isFeatured: false,
      logo: boardsync,
    },
    {
      name: "TimeDoctor",
      description: "Track Cards with TimeDoctor.",
      isFeatured: false,
      logo: timedoctor,
    },
    {
      name: "Ganttify",
      description:
        "Gantt charts for Trello. View, edit and share your project timeline in seconds.",
      isFeatured: false,
      logo: gnattify,
    },
    {
      name: "Hubstaff",
      description:
        "Track time to specific Trello cards via the Hubstaff desktop application.",
      isFeatured: false,
      logo: hubstaff,
    },
    {
      name: "Google Calendar Integration by Mig",
      description:
        "Connect your Trello board to your Google calendar and never miss a deadline. It's a simple integration that helps you stay on the right track with all dated tasks present in your boards.",
      isFeatured: false,
      logo: gcs,
    },
    {
      name: "GitLab",
      description: "Attach merge requests from Gitlab to a card.",
      isFeatured: false,
      logo: gitlab,
    },
    {
      name: "Kanban WIP",
      description:
        "Set WIP limits across one or more lists. Control your WIP, reduce your lead time!",
      isFeatured: false,
      logo: kanban,
    },
    {
      name: "Raygun",
      description: "Bring important errors to your team's attention on Trello.",
      isFeatured: false,
      logo: raygun,
    },
    {
      name: "Numerics",
      description:
        "A native KPI dashboard app to track and share your Trello metrics with teams in realtime.",
      isFeatured: false,
      logo: numerics,
    },
  ];
    return (
        <>
            <div>
                <div>
                    <h1 className="text-2xl mb-5 font-semibold">
                        Featured integrations
                    </h1>
                    <div>
                        <div>
                            <div className="grid grid-cols-3 gap-7">
                                {Integrations.map((integrate, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="pt-5 shadow-xl rounded w-[250px]"
                                        >
                                            <img
                                                className="rounded-t h-[250px] w-full"
                                                src={integrate.imgurl}
                                                alt=""
                                            />
                                            <div className="p-3 ">
                                                <div>
                                                    <div className="flex items-center px-2 mb-5 gap-3">
                                                        <img
                                                            className="w-11"
                                                            src={integrate.logo}
                                                            alt=""
                                                        />
                                                        <h3 className="text-xl font-semibold ">
                                                            {integrate.name}
                                                        </h3>
                                                    </div>
                                                    <p>{integrate.description}</p>
                                                </div>
                                                <button className="border-1 rounded px-4 py-3 mt-5 hover:bg-gray-200">
                                                    {integrate.isFeatured ? "Enable" : "Configure"}
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl mb-5 mt-10 font-semibold">
                        All integrations({allIntegrations.length})
                    </h1>
                    <div className="">
                        <div className="grid grid-cols-3 gap-7">
                            {allIntegrations.map((integrate, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="pt-5 shadow-xl relative rounded w-full"
                                    >
                                        <div className="p-3">
                                            <div className="flex gap-1 items-center">
                                                <img
                                                    className="w-12"
                                                    src={integrate.logo}
                                                    alt=""
                                                />
                                                <h3 className="text-xl font-semibold">
                                                    {integrate.name}
                                                </h3>
                                            </div>
                                            <p className="mb-20">{integrate.description}</p>
                                            <button className="border-1 rounded px-4 py-3 absolute bottom-5 hover:bg-gray-200">
                                                {integrate.isFeatured ? "Enable" : "Configure"}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="flex items-center ml-80 w-30 mb-12 mt-8 justify-center">
                                <button className="border-1  bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded">
                                    View all
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllIntegrations
