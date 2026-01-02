import React, { useState } from "react";
import NavBar from "../../../../NavBar";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Rocket from "../../../../../assets/Rocket.svg"
import Teamcard from "./Teamcard";
const RemoteTeam = () => {
  const [activeTemplate, setActiveTemplate] = useState("Remote work");
  const [workspaceOpen, setWorkspaceOpen] = useState(true);

  const templates = [
    "Business",
    "Design",
    "Education",
    "Engineering",
    "Marketing",
    "HR & Operations",
    "Personal",
    "Productivity",
    "Product management",
    "Project management",
    "Remote work",
    "Sales",
    "Support",
    "Team management",
    "Home",
  ];
  const templates1 = [
    {
      title: "Distributed Team Brainstorming",
      author: "Trello Team",
      description: "A better way to brainstorm new ideas.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/d2a11a39d6209e5b1e892b3a8e3ef576/photo-1458245375131-cf4fd90e78ac.jpg",
    
      downloads: "10K",
      views : "63.8K",
    },
    {
      title: "Remote Team Hub",
      author: "Trello Team",
      description: "A mission control center for your team productivity.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/b10c8bd87b80f7abeb56820f50c4db66/photo-1474487548417-781cb71495f3.jpg",
      downloads: "55.3K",
      views: "645.7K",
    },
    {
      title: "Remote Team Bonding Template",
      author: "Trello Team",
      description:
        "Create a space for your team to share experiences for remote activities.",
      image:
        "https://trello-backgrounds.s3.amazonaws.com/54278ede4ee6b3f180a77287/480x480/3fa86ff5627b63af3d2302a32b9bbe31/beach_times.jpg",
      downloads: "3.5K",
      views: "35.7K",
    },
  ];
  
  

  return (
    <>
      <NavBar />
      <div className="min-h-screen  flex justify-center  float-start ">
        <div className="w-80 max-w-md bg-white rounded-lg  shadow-sm   overflow-y-auto max-h-screen thin-scroll  ">
          <div className="p-4 border-b ">
            <div className="border-2 border-gray-300 h-10 rounded ">
              <h2 className="text-gray-400 ml-12 mt-2 ">
                Find Template <IoSearch className="ml-42 -mt-5 text-gray-800" />
              </h2>
            </div>{" "}
            <br />
            <div className="px-2 py-2 rounded text-gray-900 font-semibold mb-3">
              <FaRegStar />
              <h3 className="ml-6 -mt-5">Featured</h3>
            </div>
            <ul className="space-y-2 ml-6">
              {templates.map((item) => (
                <li
                  key={item}
                  onClick={() => setActiveTemplate(item)}
                  className={`cursor-pointer px-3 py-2 rounded hover:bg-gray-200 ${
                    activeTemplate === item
                      ? "bg-sky-50 text-sky-700 font-medium"
                      : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4">
            <h3 className="ml-5 font-semibold text-gray-500">Workspaces</h3>
            <br />
            <div className="flex items-start gap-3 ml-5">
              <div className="w-10 h-10 rounded bg-green-800 text-white flex items-center justify-center font-bold">
                T
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-md font-semibold">Trello Workspace</h3>
                  <button
                    onClick={() => setWorkspaceOpen(!workspaceOpen)}
                    className="ml-2 p-1 rounded hover:bg-gray-100"
                    title="Toggle"
                  >
                    {workspaceOpen ? (
                      <TiArrowSortedUp />
                    ) : (
                      <TiArrowSortedDown />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {workspaceOpen && (
              <div className="mt-4 rounded p-3">
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 px-2 py-2 rounded hover:bg-white cursor-pointer">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyA1QzMgMy44OTU0MyAzLjg5NTQzIDMgNSAzSDE5QzIwLjEwNDYgMyAyMSAzLjg5NTQzIDIxIDVWMTlDMjEgMjAuMTA0NiAyMC4xMDQ2IDIxIDE5IDIxSDVDMy44OTU0MyAyMSAzIDIwLjEwNDYgMyAxOVY1Wk01IDZDNSA1LjQ0NzcyIDUuNDQ3NzIgNSA2IDVIMTBDMTAuNTUyMyA1IDExIDUuNDQ3NzIgMTEgNlYxNkMxMSAxNi41NTIzIDEwLjU1MjMgMTcgMTAgMTdINkM1LjQ0NzcyIDE3IDUgMTYuNTUyMyA1IDE2VjZaTTE0IDVDMTMuNDQ3NyA1IDEzIDUuNDQ3NzIgMTMgNlYxMkMxMyAxMi41NTIzIDEzLjQ0NzcgMTMgMTQgMTNIMThDMTguNTUyMyAxMyAxOSAxMi41NTIzIDE5IDEyVjZDMTkgNS40NDc3MiAxOC41NTIzIDUgMTggNUgxNFoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg=="
                      alt=""
                    />
                    <span>Boards</span>
                  </li>
                  <li className="flex items-center gap-3 px-2 py-2 rounded hover:bg-white cursor-pointer">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNTA0OCA1LjY3MTY4QzExLjkwOTkgNS4zMjY2OSAxMS4yMzc0IDUuMTAwODIgMTAuNTE5OCA1LjAyNjdDMTEuMjA3NiAzLjgxNjM5IDEyLjUwODUgMyAxNCAzQzE2LjIwOTIgMyAxOCA0Ljc5MDg2IDE4IDdDMTggNy45OTE4NCAxNy42MzkgOC44OTkzNiAxNy4wNDEzIDkuNTk4MzVDMTkuOTUxMiAxMC43OTUzIDIyIDEzLjY1ODQgMjIgMTdDMjIgMTcuNTUyMyAyMS41NTIzIDE4IDIxIDE4SDE4Ljc3N0MxOC42MTc5IDE3LjI5ODcgMTguMzc2OCAxNi42Mjg1IDE4LjA2NDUgMTZIMTkuOTE3QzE5LjQ4OTIgMTMuNDQ5NyAxNy40NTI1IDExLjQ0NSAxNC44ODYzIDExLjA2NUMxNC45NjA4IDEwLjcyMTggMTUgMTAuMzY1NSAxNSAxMEMxNSA5LjU4OTA4IDE0Ljk1MDQgOS4xODk3NCAxNC44NTcgOC44MDc2M0MxNS41MzI4IDguNDg2NjggMTYgNy43OTc5MSAxNiA3QzE2IDUuODk1NDMgMTUuMTA0NiA1IDE0IDVDMTMuNDA1MyA1IDEyLjg3MTEgNS4yNTk2MSAxMi41MDQ4IDUuNjcxNjhaTTEwIDEyQzExLjEwNDYgMTIgMTIgMTEuMTA0NiAxMiAxMEMxMiA4Ljg5NTQzIDExLjEwNDYgOCAxMCA4QzguODk1NDMgOCA4IDguODk1NDMgOCAxMEM4IDExLjEwNDYgOC44OTU0MyAxMiAxMCAxMlpNMTQgMTBDMTQgMTAuOTkxOCAxMy42MzkgMTEuODk5NCAxMy4wNDEyIDEyLjU5ODRDMTUuOTUxMiAxMy43OTUzIDE4IDE2LjY1ODQgMTggMjBDMTggMjAuNTUyMyAxNy41NTIzIDIxIDE3IDIxSDNDMi40NDc3MiAyMSAyIDIwLjU1MjMgMiAyMEMyIDE2LjY1ODQgNC4wNDg3OSAxMy43OTUzIDYuOTU4NzUgMTIuNTk4NEM2LjM2MDk5IDExLjg5OTQgNiAxMC45OTE4IDYgMTBDNiA3Ljc5MDg2IDcuNzkwODYgNiAxMCA2QzEyLjIwOTEgNiAxNCA3Ljc5MDg2IDE0IDEwWk05Ljk5OTk5IDE0QzEyLjk3MyAxNCAxNS40NDEgMTYuMTYyMyAxNS45MTcgMTlINC4wODI5NUM0LjU1OTAyIDE2LjE2MjMgNy4wMjY5OSAxNCA5Ljk5OTk5IDE0WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg+PC9zdmc+"
                      alt=""
                    />
                    <span>Members</span>
                    <button className="ml-auto text-xl font-bold px-2 py-0.5 rounded  text-gray-600 hover:bg-white">
                      +
                    </button>
                  </li>
                  <li className="flex items-center gap-3 px-2 py-2 rounded hover:bg-white cursor-pointer">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDAxNyAxNy4wMDA5QzkuMjM4NjggMTcuMDAwOSA2Ljk5OTY4IDE0Ljc2MDkgNi45OTk2OCAxMS45OTg5QzYuOTk5NjggOS4yMzU4NiA5LjIzODY4IDYuOTk2ODYgMTIuMDAxNyA2Ljk5Njg2QzE0Ljc2NDcgNi45OTY4NiAxNy4wMDM3IDkuMjM1ODYgMTcuMDAzNyAxMS45OTg5QzE3LjAwMzcgMTQuNzYwOSAxNC43NjQ3IDE3LjAwMDkgMTIuMDAxNyAxNy4wMDA5Wk0yMC4zNjk3IDEzLjg4MzlDMTkuNTg2NyAxMy42MTE5IDE5LjAyMzcgMTIuODc0OSAxOS4wMjM3IDExLjk5ODlDMTkuMDIzNyAxMS4xMjI5IDE5LjU4NjcgMTAuMzg1OSAyMC4zNjg3IDEwLjExMzlDMjAuNjA1NyAxMC4wMzE5IDIwLjc1MTcgOS43ODA4NiAyMC42ODM3IDkuNTM5ODZDMjAuNDg0NyA4LjgzNTg2IDIwLjIwMTcgOC4xNjg4NiAxOS44NDc3IDcuNTQ2ODZDMTkuNzI5NyA3LjMzODg2IDE5LjQ3MDcgNy4yNjE4NiAxOS4yNDk3IDcuMzUxODZDMTguODY0NyA3LjUwOTg2IDE4LjQxOTcgNy41NTA4NiAxNy45NTg3IDcuNDMyODZDMTcuMjg0NyA3LjI1ODg2IDE2LjczMzcgNi43MDk4NiAxNi41NTU3IDYuMDM2ODZDMTYuNDMzNyA1LjU3Mzg2IDE2LjQ3NDcgNS4xMjY4NiAxNi42MzE3IDQuNzM5ODZDMTYuNzIwNyA0LjUxOTg2IDE2LjY0MzcgNC4yNjA4NiAxNi40MzU3IDQuMTQyODZDMTUuODE4NyAzLjc5Mzg2IDE1LjE1NjcgMy41MTM4NiAxNC40NjA3IDMuMzE2ODZDMTQuMjE4NyAzLjI0ODg2IDEzLjk2ODcgMy4zOTM4NiAxMy44ODY3IDMuNjMwODZDMTMuNjE0NyA0LjQxMzg2IDEyLjg3NzcgNC45NzY4NiAxMi4wMDE3IDQuOTc2ODZDMTEuMTI2NyA0Ljk3Njg2IDEwLjM4ODcgNC40MTM4NiAxMC4xMTc3IDMuNjMxODZDMTAuMDM0NyAzLjM5NDg2IDkuNzgzNjggMy4yNDg4NiA5LjU0MjY4IDMuMzE2ODZDOC44MzQ2OCAzLjUxNjg2IDguMTYzNjggMy44MDE4NiA3LjUzODY4IDQuMTU4ODZDNy4zMzc2OCA0LjI3Mzg2IDcuMjUyNjggNC41MjU4NiA3LjM0MDY4IDQuNzQwODZDNy40ODc2OCA1LjEwMTg2IDcuNTMyNjggNS41MTM4NiA3LjQzODY4IDUuOTQzODZDNy4yODM2OCA2LjY0OTg2IDYuNzI0NjggNy4yNDA4NiA2LjAyNTY4IDcuNDI3ODZDNS41Njc2OCA3LjU1MDg2IDUuMTI3NjggNy41MTE4NiA0Ljc0NTY4IDcuMzU5ODZDNC41MjU2OCA3LjI3MTg2IDQuMjY3NjggNy4zNDk4NiA0LjE1MDY4IDcuNTU1ODZDMy43OTc2OCA4LjE3Nzg2IDMuNTE1NjggOC44NDU4NiAzLjMxNzY4IDkuNTQ5ODZDMy4yNDk2OCA5Ljc4ODg2IDMuMzkyNjggMTAuMDM2OSAzLjYyNTY4IDEwLjEyMTlDNC4zOTY2OCAxMC4zOTk5IDQuOTQ4NjggMTEuMTMxOSA0Ljk0ODY4IDExLjk5ODlDNC45NDg2OCAxMi44NjU5IDQuMzk2NjggMTMuNTk3OSAzLjYyNDY4IDEzLjg3NTlDMy4zOTE2OCAxMy45NTk5IDMuMjQ5NjggMTQuMjA3OSAzLjMxNjY4IDE0LjQ0NjlDMy40OTM2OCAxNS4wNzM5IDMuNzM4NjggMTUuNjcyOSA0LjAzOTY4IDE2LjIzNjlDNC4xNTg2OCAxNi40NTg5IDQuNDM0NjggMTYuNTM0OSA0LjY2MzY4IDE2LjQyOTlDNS4yNTg2OCAxNi4xNTY5IDYuMDA2NjggMTYuMTY1OSA2Ljc2NzY4IDE2LjY2NzlDNi44ODQ2OCAxNi43NDQ5IDYuOTkyNjggMTYuODUyOSA3LjA2OTY4IDE2Ljk2ODlDNy41OTY2OCAxNy43Njc5IDcuNTgxNjggMTguNTQ4OSA3LjI2NzY4IDE5LjE1NTlDNy4xNTI2OCAxOS4zNzg5IDcuMjE5NjggMTkuNjU2OSA3LjQzNTY4IDE5Ljc4MzlDOC4wODk2OCAyMC4xNjc5IDguNzk3NjggMjAuNDcwOSA5LjU0NDY4IDIwLjY4MDlDOS43ODU2OCAyMC43NDg5IDEwLjAzMzcgMjAuNjA0OSAxMC4xMTQ3IDIwLjM2NzlDMTAuMzgzNyAxOS41ODE5IDExLjEyMzcgMTkuMDE0OSAxMi4wMDE3IDE5LjAxNDlDMTIuODc5NyAxOS4wMTQ5IDEzLjYxOTcgMTkuNTgxOSAxMy44ODg3IDIwLjM2NzlDMTMuOTY5NyAyMC42MDM5IDE0LjIxNzcgMjAuNzQ4OSAxNC40NTg3IDIwLjY4MDlDMTUuMTk1NyAyMC40NzM5IDE1Ljg5NDcgMjAuMTc0OSAxNi41NDI3IDE5Ljc5NzlDMTYuNzYwNyAxOS42NzA5IDE2LjgyNjcgMTkuMzg5OSAxNi43MDk3IDE5LjE2NjlDMTYuMzkxNyAxOC41NTg5IDE2LjM3MjcgMTcuNzczOSAxNi45MDA3IDE2Ljk3MTlDMTYuOTc3NyAxNi44NTU5IDE3LjA4NTcgMTYuNzQ2OSAxNy4yMDI3IDE2LjY2OTlDMTcuOTc0NyAxNi4xNTg5IDE4LjcyOTcgMTYuMTU2OSAxOS4zMjc3IDE2LjQzOTlDMTkuNTU2NyAxNi41NDc5IDE5LjgzNTcgMTYuNDcyOSAxOS45NTU3IDE2LjI0OTlDMjAuMjU5NyAxNS42ODU5IDIwLjUwNDcgMTUuMDg1OSAyMC42ODM3IDE0LjQ1NjlDMjAuNzUxNyAxNC4yMTU5IDIwLjYwNjcgMTMuOTY1OSAyMC4zNjk3IDEzLjg4MzlaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
                      alt=""
                    />
                    <span>Settings</span>
                  </li>
                </ul>

                <div className="mt-4 border-t pt-4">
                  <h4 className="text-sm font-semibold">
                    Upgrade this Workspace
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Get unlimited boards, advanced automation, and more.
                  </p>
                  <Link
                    to="/templates/remote-work/remote-team-meetings-lYdxML7x"
                    href="#"
                    className="inline-block mt-3 text-sm underline text-grey-200 font-semibold"
                  >
                    Upgrade
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" h-400 w-300  bg-white">
          <div className="flex ml-10 text-gray-800 mt-10  h-12">
            <Link to="/templates" className="underline" href="">
              Template Gallery
            </Link>
            <h1>&nbsp;&nbsp;/&nbsp;&nbsp;</h1>
            <Link to="/templates/remote-work" className="underline" href="">
              Remote Work
            </Link>
            <h1>&nbsp;&nbsp;/&nbsp;&nbsp;</h1>
            <Link
              to="/templates/remote-work/remote-team-meetings-lYdxML7x"
              className="underline"
              href=""
            >
              Remote Team Meetings
            </Link>
          </div>
          <div className=" h-30 w-250 flex ml-10">
            <img
              className="h-17 mt-1.5"
              src="https://trello-logos.s3.amazonaws.com/c58e11193c6dada6aa672b3c72345860/170.png"
              alt=""
            />
            <div className="ml-3">
              <h1 className="font-bold text-2xl text-gray-600 ">
                Remote Team Meetings{" "}
              </h1>
              <h3>Created by Trello Team</h3>
              <p className="flex font-bold text-[14px] text-gray-600 ">
                <IoCopyOutline className="mt-1" />
                &nbsp;76.8k Copies &nbsp;
                <MdOutlineRemoveRedEye className="mt-1" />
                &nbsp;152.4kView
              </p>
            </div>
            <div className="ml-90 mt-7">
              <button className="w-20 bg-gray-200 h-12 rounded">Share</button>
              &nbsp;&nbsp;
              <button className="w-30 bg-blue-600 h-12 rounded text-white hover:bg-blue-700">
                Use template
              </button>
            </div>
          </div>
          <div className=" w-220 h-50 ml-11">
            <h1 className="font-bold text-xl ">About this template</h1>
            <ul className="list-disc text-gray-700 ">
              Bring focus and transparency to your remote team meetings.
              <li className="ml-5">
                Save time with a dedicated board that creates a structured
                agenda for your team’s weekly (or daily) meetings.
              </li>
              <li className="ml-5">
                Create a democratic and open meeting structure by allowing any
                teammate to add cards to the “This Week” list.
              </li>
              <li className="ml-5">
                As items are discussed move them to a “Done” list, and when
                there are no more cards, the meeting’s done!
              </li>
              <li className="ml-5">
                Make sure to take the time to celebrate successes or commiserate
                roadblocks together each week to build team unity.
              </li>
              <li className="ml-5">
                Give everyone the spotlight by appointing a rotating meeting
                lead, and keep absentees in the loop by adding notes to <br /> cards.
              </li>
            </ul>
          </div><br />
          {/* boxxxxxxxx */}
          <div className=" h-150 ml-10 w-250">

            
        
       
       <Teamcard/>



          </div> <br /><br /><br /><br /><br />
          <Link to="/b/lYdxML7x" className="text-blue-400 underline ml-200" href=" ">View Template</Link> 
          <div >
          <img src={Rocket} alt="" /><h1 className="text-xl font-bold ml-7 -mt-6 text-gray-700">Power-Ups</h1>
          <p className="font-semibold text-gray-700 mt-2 ">Add features to your boards and integrate your favorite apps right into Trello. Here are the Power-Ups enabled <br /> on this template:</p>
        </div><br /><br />
        <div className=" h-25">
          <img className="h-12 rounded-3xl" src="https://calendar.trello.services/images/calendar-icon.svg" alt="" />
          <h1 className=" text-xl text-gray-700 font-semibold ml-15 -mt-10">Calender Power-Up</h1>
          <p className="text-gray-600 mt-4">Visualize Trello cards in a calendar <br /> view.</p>
        </div><br /><br />
<div className=" bg-purple-100 rounded ">
        <div className=" p-6 ">
      <h2 className="text-xl font-semibold mb-4">Related templates</h2>

      <div className="flex flex-wrap gap-6" >
        {templates1.map((template, index) => (
          <div
            key={index}
            className="w-80 rounded-lg overflow-hidden   transition-shadow duration-200 bg-purple-100"
          >
            <img
              src={template.image}
              alt={template.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">
                {template.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">by {template.author}</p>
              <p className="text-sm text-gray-700 mb-3">
                {template.description}
              </p>

              <div className="flex items-center text-gray-500 text-sm space-x-4 npm run decoration-violet-50">
                <span className="flex" ><IoCopyOutline /> {template.downloads }</span>
                <span className="flex"> <MdOutlineRemoveRedEye  />{template.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
        </div>
       
        {/* /// */}
        
        
      </div>
    </>
  );
};

export default RemoteTeam;
