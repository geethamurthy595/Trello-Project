import React from "react";
import { LuListFilter } from "react-icons/lu";
import { BiWorld } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { PiGreaterThan } from "react-icons/pi";
import Remotebg from "../../../../../assets/Remotebg.jpg";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import jan from "../../../../../assets/Remotejan.png";
import giphy from "../../../../../assets/giphy.gif";
const TeamCard = ({ preview = false }) => {
  return (
    <main
      className={`w-full ${
        preview ? " fixed  h-full" : "h-[100vh]"
      } bg-cover bg-center  overflow-x-scroll relative`}
      style={{ backgroundImage: `url(${Remotebg})` }}
    >
      {/* Header */}
      <div
        className={`w-full h-20 flex items-center shadow-md bg-opacity-60 backdrop-blur-sm z-50   bg-pink-100 ${
          preview ? "relative" : "sticky top-0"
        }`}
      >
        <div className="fixed  w-full   flex justify-between items-center ">
          <div className=" flex gap-4 items-center">
            <h1 className="text-[#172B4D] text-xl font-semibold leading-normal">
              Remote Team Meetings
            </h1>
            <p className="bg-gray-300 bg-opacity-40 text-[#172b4d] rounded text-base w-fit px-1 flex items-center justify-center">
              Template
            </p>
          </div>

          <div className="flex items-center gap-4">
            <LuListFilter className="text-2xl text-[#172B4D] hover:bg-gray-200 rounded " />
            <BiWorld className="text-2xl text-[#172B4D] hover:bg-gray-200 rounded " />
          </div>
        </div>
      </div>{" "}
      <br />
      <div
        className={`${
          preview ? "absolute top-20 left-0" : "relative mt-0"
        } w-full overflow-x-auto scrollbar-hide`}
      >
        {" "}
        <br />
        {/* CARD1 */}
        <div className="bg-[#f5f7fa] w-72 rounded-xl overflow-x-auto p-4 h-120 flex flex-col space-y-3 shadow-md -mt-5 ml-2 ">
          <div className="flex items-center justify-between border-b pb-2 ">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
              <span>This week</span>
            </h2>
            <span className="text-gray-400 text-lg cursor-pointer flex ">
              <HiArrowSmRight />
              <HiArrowSmLeft />
            </span>
          </div>
          <div className="bg-white border border-transparent border-t-32 border-t-green-400 rounded-lg p-3 shadow-sm hover:shadow-md cursor-pointer hover:border-blue-600 transition">
            <p className="text-sm text-gray-700 leading-snug flex items-center justify-between">
              How to use this List
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA1QzMuNDQ3NzIgNSAzIDUuNDQ3NzIgMyA2QzMgNi41NTIyOCAzLjQ0NzcyIDcgNCA3SDIwQzIwLjU1MjMgNyAyMSA2LjU1MjI4IDIxIDZDMjEgNS40NDc3MiAyMC41NTIzIDUgMjAgNUg0Wk00IDlDMy40NDc3MiA5IDMgOS40NDc3MiAzIDEwQzMgMTAuNTUyMyAzLjQ0NzcyIDExIDQgMTFIMjBDMjAuNTUyMyAxMSAyMSAxMC41NTIzIDIxIDEwQzIxIDkuNDQ3NzIgMjAuNTUyMyA5IDIwIDlINFpNMyAxNEMzIDEzLjQ0NzcgMy40NDc3MiAxMyA0IDEzSDIwQzIwLjU1MjMgMTMgMjEgMTMuNDQ3NyAyMSAxNEMyMSAxNC41NTIzIDIwLjU1MjMgMTUgMjAgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0Wk00IDE3QzMuNDQ3NzIgMTcgMyAxNy40NDc3IDMgMThDMyAxOC41NTIzIDMuNDQ3NzIgMTkgNCAxOUgxNEMxNC41NTIzIDE5IDE1IDE4LjU1MjMgMTUgMThDMTUgMTcuNDQ3NyAxNC41NTIzIDE3IDE0IDE3SDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
                alt=""
                className="w-4 h-4"
              />
            </p>
          </div>

          <div className="bg-white rounded-lg p-3  hover:border hover: border-blue-600 shadow-sm hover:shadow-md cursor-pointer transition">
            <p className="text-sm text-gray-700 leading-snug ">
              ---Discuss during next meeting <br />
              ---
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA1QzMuNDQ3NzIgNSAzIDUuNDQ3NzIgMyA2QzMgNi41NTIyOCAzLjQ0NzcyIDcgNCA3SDIwQzIwLjU1MjMgNyAyMSA2LjU1MjI4IDIxIDZDMjEgNS40NDc3MiAyMC41NTIzIDUgMjAgNUg0Wk00IDlDMy40NDc3MiA5IDMgOS40NDc3MiAzIDEwQzMgMTAuNTUyMyAzLjQ0NzcyIDExIDQgMTFIMjBDMjAuNTUyMyAxMSAyMSAxMC41NTIzIDIxIDEwQzIxIDkuNDQ3NzIgMjAuNTUyMyA5IDIwIDlINFpNMyAxNEMzIDEzLjQ0NzcgMy40NDc3MiAxMyA0IDEzSDIwQzIwLjU1MjMgMTMgMjEgMTMuNDQ3NyAyMSAxNEMyMSAxNC41NTIzIDIwLjU1MjMgMTUgMjAgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0Wk00IDE3QzMuNDQ3NzIgMTcgMyAxNy40NDc3IDMgMThDMyAxOC41NTIzIDMuNDQ3NzIgMTkgNCAxOUgxNEMxNC41NTIzIDE5IDE1IDE4LjU1MjMgMTUgMThDMTUgMTcuNDQ3NyAxNC41NTIzIDE3IDE0IDE3SDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
                alt=""
              />
            </p>
          </div>
          <div className="bg-white  rounded-lg p-3 shadow-sm  hover:border hover: border-blue-600 hover:shadow-md cursor-pointer transition">
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/images/stickers/star.png"
              alt=""
            />
            <p className="text-sm text-gray-700 leading-snug ">
              Meeting Lead
              <div className="flex">
                {" "}
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNjQyNiAxNy45NjQ3QzEwLjExMjMgMTkuNDYgNy42MjczNiAxOS40NjA2IDYuMTAwOTIgMTcuOTY5MUM0LjU3NTA1IDE2LjQ3OCA0LjU3NzY5IDE0LjA0NjcgNi4xMDI1MyAxMi41NTY2TDEzLjI1MDUgNS41NzE4NEMxNC4xNDc2IDQuNjk1MiAxNS41ODYxIDQuNjkyNTEgMTYuNDgzMiA1LjU2OTIxQzE3LjM3NjMgNi40NDE4NCAxNy4zNzc4IDcuODUxMzUgMTYuNDg2OSA4LjcyMTk5TDkuNzgzNjEgMTUuMjcyMkM5LjUzMjg4IDE1LjUxNzIgOS4xMjgwNyAxNS41MTYzIDguODY5NTQgMTUuMjYzNkM4LjYxMDczIDE1LjAxMDcgOC42MDk2MyAxNC42MTU4IDguODY5NTQgMTQuMzYxOEwxNS4wOTg5IDguMjc0NjNDMTUuNDgxMiA3LjkwMTA5IDE1LjQ4MTIgNy4yOTU0NiAxNS4wOTg5IDYuOTIxOTJDMTQuNzE2NyA2LjU0ODM4IDE0LjA5NjkgNi41NDgzOCAxMy43MTQ2IDYuOTIxOTJMNy40ODUyMyAxMy4wMDkxQzYuNDU5MTEgMTQuMDExOCA2LjQ2MzU2IDE1LjYxOCA3LjQ4NTIzIDE2LjYxNjNDOC41MDY3NCAxNy42MTQ1IDEwLjE1MTEgMTcuNjE4NiAxMS4xNjc5IDE2LjYyNDlMMTcuODcxMiAxMC4wNzQ3QzE5LjUyNzQgOC40NTYzMiAxOS41MjQ0IDUuODM1NTUgMTcuODY3NiA0LjIxNjVDMTYuMjA0NyAyLjU5MTU2IDEzLjUyNjYgMi41OTY1NyAxMS44NjYyIDQuMjE5MTNMNC43MTgyMiAxMS4yMDM5QzIuNDI5NTEgMTMuNDQwNCAyLjQyNTU1IDE3LjA4MyA0LjcxNjYxIDE5LjMyMThDNy4wMDc3NCAyMS41NjA2IDEwLjczMjMgMjEuNTU5NyAxMy4wMjY5IDE5LjMxNzRMMTkuNzEzMyAxMi43ODM3QzIwLjA5NTYgMTIuNDEwMSAyMC4wOTU2IDExLjgwNDUgMTkuNzEzMyAxMS40MzFDMTkuMzMxIDExLjA1NzQgMTguNzExMyAxMS4wNTc0IDE4LjMyOSAxMS40MzFMMTEuNjQyNiAxNy45NjQ3WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg+PC9zdmc+"
                  alt=""
                />
                <h1>1</h1>
              </div>
            </p>
          </div>
          <div className="bg-white  rounded-lg p-3 shadow-sm hover:shadow-md  hover:border hover: border-blue-600 cursor-pointer transition">
            <div className="h-3 w-14  rounded-2xl bg-green-500"></div>
            <p className="text-sm text-gray-700 leading-snug ">
              Team Updates (2 mins per team)
              <div className="flex">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA1QzMuNDQ3NzIgNSAzIDUuNDQ3NzIgMyA2QzMgNi41NTIyOCAzLjQ0NzcyIDcgNCA3SDIwQzIwLjU1MjMgNyAyMSA2LjU1MjI4IDIxIDZDMjEgNS40NDc3MiAyMC41NTIzIDUgMjAgNUg0Wk00IDlDMy40NDc3MiA5IDMgOS40NDc3MiAzIDEwQzMgMTAuNTUyMyAzLjQ0NzcyIDExIDQgMTFIMjBDMjAuNTUyMyAxMSAyMSAxMC41NTIzIDIxIDEwQzIxIDkuNDQ3NzIgMjAuNTUyMyA5IDIwIDlINFpNMyAxNEMzIDEzLjQ0NzcgMy40NDc3MiAxMyA0IDEzSDIwQzIwLjU1MjMgMTMgMjEgMTMuNDQ3NyAyMSAxNEMyMSAxNC41NTIzIDIwLjU1MjMgMTUgMjAgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0Wk00IDE3QzMuNDQ3NzIgMTcgMyAxNy40NDc3IDMgMThDMyAxOC41NTIzIDMuNDQ3NzIgMTkgNCAxOUgxNEMxNC41NTIzIDE5IDE1IDE4LjU1MjMgMTUgMThDMTUgMTcuNDQ3NyAxNC41NTIzIDE3IDE0IDE3SDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
                  alt=""
                />
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiA0QzQuODk1NDMgNCA0IDQuODk1NDMgNCA2VjE4QzQgMTkuMTA0NiA0Ljg5NTQzIDIwIDYgMjBIMThDMTkuMTA0NiAyMCAyMCAxOS4xMDQ2IDIwIDE4VjEzQzIwIDEyLjQ0NzcgMTkuNTUyMyAxMiAxOSAxMkMxOC40NDc3IDEyIDE4IDEyLjQ0NzcgMTggMTNWMThINlY2TDE2IDZDMTYuNTUyMyA2IDE3IDUuNTUyMjggMTcgNUMxNyA0LjQ0NzcyIDE2LjU1MjMgNCAxNiA0SDZaTTguNzM1MzQgMTAuMzIyM0M4LjM2MTA1IDkuOTE2MTggNy43Mjg0MSA5Ljg5MDM4IDcuMzIyMyAxMC4yNjQ3QzYuOTE2MTkgMTAuNjM5IDYuODkwMzkgMTEuMjcxNiA3LjI2NDY3IDExLjY3NzdMMTAuODc2OCAxNS41OTdDMTEuNDE0MyAxNi4xMjMxIDEyLjIxNDUgMTYuMTIzMSAxMi43MTExIDE1LjYyNjRMMTMuMDc1NCAxNS4yNjgzQzEzLjM2OTkgMTQuOTc4NSAxMy42OTgxIDE0LjY1NTYgMTQuMDUxNiAxNC4zMDc1QzE1LjA2MTQgMTMuMzEzIDE2LjA3MTMgMTIuMzE2OSAxNy4wMTQgMTEuMzg0OEwxNy4wNTQzIDExLjM0NDlDMTguNzI5MSA5LjY4ODY5IDIwLjAwMDQgOC40MjM2NSAyMC43MTIgNy43MDIyM0MyMS4wOTk4IDcuMzA5MDQgMjEuMDk1NCA2LjY3NTg5IDIwLjcwMjIgNi4yODgwNUMyMC4zMDkgNS45MDAyMiAxOS42NzU5IDUuOTA0NTcgMTkuMjg4MSA2LjI5Nzc3QzE4LjU4NDMgNy4wMTEzMSAxNy4zMTY5IDguMjcyNDQgMTUuNjQ4IDkuOTIyODFMMTUuNjA3NyA5Ljk2MjYzQzE0LjY2NjIgMTAuODkzNyAxMy42NTcyIDExLjg4ODkgMTIuNjQ4MyAxMi44ODI1TDExLjgzMjkgMTMuNjg1MUw4LjczNTM0IDEwLjMyMjNaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
                  alt=""
                />
                <h1>0/6</h1>
              </div>
            </p>
          </div>
          <div className="bg-white  rounded-lg p-3 shadow-sm hover:shadow-md cursor-pointer  hover:border hover: border-blue-600 transition">
            <div className="h-3 w-14  rounded-2xl bg-green-500"></div>
            <p className="text-sm text-gray-700 leading-snug ">
              Wednesday Woes
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA1QzMuNDQ3NzIgNSAzIDUuNDQ3NzIgMyA2QzMgNi41NTIyOCAzLjQ0NzcyIDcgNCA3SDIwQzIwLjU1MjMgNyAyMSA2LjU1MjI4IDIxIDZDMjEgNS40NDc3MiAyMC41NTIzIDUgMjAgNUg0Wk00IDlDMy40NDc3MiA5IDMgOS40NDc3MiAzIDEwQzMgMTAuNTUyMyAzLjQ0NzcyIDExIDQgMTFIMjBDMjAuNTUyMyAxMSAyMSAxMC41NTIzIDIxIDEwQzIxIDkuNDQ3NzIgMjAuNTUyMyA5IDIwIDlINFpNMyAxNEMzIDEzLjQ0NzcgMy40NDc3MiAxMyA0IDEzSDIwQzIwLjU1MjMgMTMgMjEgMTMuNDQ3NyAyMSAxNEMyMSAxNC41NTIzIDIwLjU1MjMgMTUgMjAgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0Wk00IDE3QzMuNDQ3NzIgMTcgMyAxNy40NDc3IDMgMThDMyAxOC41NTIzIDMuNDQ3NzIgMTkgNCAxOUgxNEMxNC41NTIzIDE5IDE1IDE4LjU1MjMgMTUgMThDMTUgMTcuNDQ3NyAxNC41NTIzIDE3IDE0IDE3SDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
                alt=""
              />
            </p>
          </div>
          <div className="bg-white  rounded-lg p-3 shadow-sm hover:shadow-md cursor-pointer  hover:border hover: border-blue-600 transition">
            <div className="h-3 w-14  rounded-2xl bg-green-500"></div>
            <p className="text-sm text-gray-700 leading-snug ">
              Team Bravo 👏
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA1QzMuNDQ3NzIgNSAzIDUuNDQ3NzIgMyA2QzMgNi41NTIyOCAzLjQ0NzcyIDcgNCA3SDIwQzIwLjU1MjMgNyAyMSA2LjU1MjI4IDIxIDZDMjEgNS40NDc3MiAyMC41NTIzIDUgMjAgNUg0Wk00IDlDMy40NDc3MiA5IDMgOS40NDc3MiAzIDEwQzMgMTAuNTUyMyAzLjQ0NzcyIDExIDQgMTFIMjBDMjAuNTUyMyAxMSAyMSAxMC41NTIzIDIxIDEwQzIxIDkuNDQ3NzIgMjAuNTUyMyA5IDIwIDlINFpNMyAxNEMzIDEzLjQ0NzcgMy40NDc3MiAxMyA0IDEzSDIwQzIwLjU1MjMgMTMgMjEgMTMuNDQ3NyAyMSAxNEMyMSAxNC41NTIzIDIwLjU1MjMgMTUgMjAgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0Wk00IDE3QzMuNDQ3NzIgMTcgMyAxNy40NDc3IDMgMThDMyAxOC41NTIzIDMuNDQ3NzIgMTkgNCAxOUgxNEMxNC41NTIzIDE5IDE1IDE4LjU1MjMgMTUgMThDMTUgMTcuNDQ3NyAxNC41NTIzIDE3IDE0IDE3SDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
                alt=""
              />
            </p>
          </div>
        </div>
        {/* CARD2 */}
        <div className="bg-[#f5f7fa] w-72 rounded-xl p-4 flex flex-col space-y-3 shadow-md ml-76 -mt-119">
          <div className="flex items-center justify-between border-b pb-2">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
              <span>Previous Meetings</span>
              <span className="text-blue-500 text-sm">➡️</span>
            </h2>
            <span className="text-gray-400 text-lg cursor-pointer flex">
              <HiArrowSmRight />
              <HiArrowSmLeft />
            </span>
          </div>

          <div className="bg-white border border-transparent border-t-32 border-t-blue-400 rounded-lg p-3 shadow-sm hover:shadow-md cursor-pointer hover:border-blue-600 transition">
            <p className="text-sm text-gray-700 leading-snug">
              Create a new list for each meeting and move cards over after they
              are discussed -------
              <PiGreaterThan className="ml-25 -mt-4" />
            </p>
          </div>
        </div>
        {/* CARD3 */}
        <div class="bg-gray-100 h-110 w-80 rounded-xl p-3 shadow-md flex flex-col ml-150 -mt-47">
          <div className="flex">
            <h2 class="text-lg font-semibold  text-gray-800 mb-3">
              January 25th
            </h2>
            <span className="text-gray-400 text-lg cursor-pointer flex  ml-35 mt-1.5">
              <HiArrowSmRight />
              <HiArrowSmLeft />
            </span>
          </div>
          <div class="bg-white rounded-xl p-3 mb-4 shadow-sm border border-gray-200 ">
            <p class="text-sm text-gray-600 font-medium mb-3 bg-gray-50 rounded-lg px-3 py-2 border hover:border hover:border-blue-600 border-gray-200">
              #embraceremote campaign <br /> update
            </p>
            <div className="hover:border hover:border-blue-600 h-52 rounded-2xl">
              <div class="relative rounded-lg overflow-hidden mb-3 ">
                <div class=" bg-opacity-40 flex flex-col items-center justify-center text-center px-3">
                  <img className="h-30 w-170 rounded-2xl " src={jan} alt="" />
                </div>
              </div>

              <p class="text-sm font-semibold text-gray-800 mb-3">
                Brief Discussion on Artificial <br /> Harmony
              </p>

              <div class="flex items-center justify-between h-2 text-xs text-gray-600 ">
                <div class="flex items-center gap-3">
                  <span>
                    <img
                      className="cursor-pointer"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA1QzMuNDQ3NzIgNSAzIDUuNDQ3NzIgMyA2QzMgNi41NTIyOCAzLjQ0NzcyIDcgNCA3SDIwQzIwLjU1MjMgNyAyMSA2LjU1MjI4IDIxIDZDMjEgNS40NDc3MiAyMC41NTIzIDUgMjAgNUg0Wk00IDlDMy40NDc3MiA5IDMgOS40NDc3MiAzIDEwQzMgMTAuNTUyMyAzLjQ0NzcyIDExIDQgMTFIMjBDMjAuNTUyMyAxMSAyMSAxMC41NTIzIDIxIDEwQzIxIDkuNDQ3NzIgMjAuNTUyMyA5IDIwIDlINFpNMyAxNEMzIDEzLjQ0NzcgMy40NDc3MiAxMyA0IDEzSDIwQzIwLjU1MjMgMTMgMjEgMTMuNDQ3NyAyMSAxNEMyMSAxNC41NTIzIDIwLjU1MjMgMTUgMjAgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0Wk00IDE3QzMuNDQ3NzIgMTcgMyAxNy40NDc3IDMgMThDMyAxOC41NTIzIDMuNDQ3NzIgMTkgNCAxOUgxNEMxNC41NTIzIDE5IDE1IDE4LjU1MjMgMTUgMThDMTUgMTcuNDQ3NyAxNC41NTIzIDE3IDE0IDE3SDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
                      alt=""
                    />
                  </span>
                  <span>
                    <img
                      className="cursor-pointer"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNjQyNiAxNy45NjQ3QzEwLjExMjMgMTkuNDYgNy42MjczNiAxOS40NjA2IDYuMTAwOTIgMTcuOTY5MUM0LjU3NTA1IDE2LjQ3OCA0LjU3NzY5IDE0LjA0NjcgNi4xMDI1MyAxMi41NTY2TDEzLjI1MDUgNS41NzE4NEMxNC4xNDc2IDQuNjk1MiAxNS41ODYxIDQuNjkyNTEgMTYuNDgzMiA1LjU2OTIxQzE3LjM3NjMgNi40NDE4NCAxNy4zNzc4IDcuODUxMzUgMTYuNDg2OSA4LjcyMTk5TDkuNzgzNjEgMTUuMjcyMkM5LjUzMjg4IDE1LjUxNzIgOS4xMjgwNyAxNS41MTYzIDguODY5NTQgMTUuMjYzNkM4LjYxMDczIDE1LjAxMDcgOC42MDk2MyAxNC42MTU4IDguODY5NTQgMTQuMzYxOEwxNS4wOTg5IDguMjc0NjNDMTUuNDgxMiA3LjkwMTA5IDE1LjQ4MTIgNy4yOTU0NiAxNS4wOTg5IDYuOTIxOTJDMTQuNzE2NyA2LjU0ODM4IDE0LjA5NjkgNi41NDgzOCAxMy43MTQ2IDYuOTIxOTJMNy40ODUyMyAxMy4wMDkxQzYuNDU5MTEgMTQuMDExOCA2LjQ2MzU2IDE1LjYxOCA3LjQ4NTIzIDE2LjYxNjNDOC41MDY3NCAxNy42MTQ1IDEwLjE1MTEgMTcuNjE4NiAxMS4xNjc5IDE2LjYyNDlMMTcuODcxMiAxMC4wNzQ3QzE5LjUyNzQgOC40NTYzMiAxOS41MjQ0IDUuODM1NTUgMTcuODY3NiA0LjIxNjVDMTYuMjA0NyAyLjU5MTU2IDEzLjUyNjYgMi41OTY1NyAxMS44NjYyIDQuMjE5MTNMNC43MTgyMiAxMS4yMDM5QzIuNDI5NTEgMTMuNDQwNCAyLjQyNTU1IDE3LjA4MyA0LjcxNjYxIDE5LjMyMThDNy4wMDc3NCAyMS41NjA2IDEwLjczMjMgMjEuNTU5NyAxMy4wMjY5IDE5LjMxNzRMMTkuNzEzMyAxMi43ODM3QzIwLjA5NTYgMTIuNDEwMSAyMC4wOTU2IDExLjgwNDUgMTkuNzEzMyAxMS40MzFDMTkuMzMxIDExLjA1NzQgMTguNzExMyAxMS4wNTc0IDE4LjMyOSAxMS40MzFMMTEuNjQyNiAxNy45NjQ3WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg+PC9zdmc+"
                      alt=""
                    />
                  </span>
                  <span>
                    <img
                      className="cursor-pointer"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiA0QzQuODk1NDMgNCA0IDQuODk1NDMgNCA2VjE4QzQgMTkuMTA0NiA0Ljg5NTQzIDIwIDYgMjBIMThDMTkuMTA0NiAyMCAyMCAxOS4xMDQ2IDIwIDE4VjEzQzIwIDEyLjQ0NzcgMTkuNTUyMyAxMiAxOSAxMkMxOC40NDc3IDEyIDE4IDEyLjQ0NzcgMTggMTNWMThINlY2TDE2IDZDMTYuNTUyMyA2IDE3IDUuNTUyMjggMTcgNUMxNyA0LjQ0NzcyIDE2LjU1MjMgNCAxNiA0SDZaTTguNzM1MzQgMTAuMzIyM0M4LjM2MTA1IDkuOTE2MTggNy43Mjg0MSA5Ljg5MDM4IDcuMzIyMyAxMC4yNjQ3QzYuOTE2MTkgMTAuNjM5IDYuODkwMzkgMTEuMjcxNiA3LjI2NDY3IDExLjY3NzdMMTAuODc2OCAxNS41OTdDMTEuNDE0MyAxNi4xMjMxIDEyLjIxNDUgMTYuMTIzMSAxMi43MTExIDE1LjYyNjRMMTMuMDc1NCAxNS4yNjgzQzEzLjM2OTkgMTQuOTc4NSAxMy42OTgxIDE0LjY1NTYgMTQuMDUxNiAxNC4zMDc1QzE1LjA2MTQgMTMuMzEzIDE2LjA3MTMgMTIuMzE2OSAxNy4wMTQgMTEuMzg0OEwxNy4wNTQzIDExLjM0NDlDMTguNzI5MSA5LjY4ODY5IDIwLjAwMDQgOC40MjM2NSAyMC43MTIgNy43MDIyM0MyMS4wOTk4IDcuMzA5MDQgMjEuMDk1NCA2LjY3NTg5IDIwLjcwMjIgNi4yODgwNUMyMC4zMDkgNS45MDAyMiAxOS42NzU5IDUuOTA0NTcgMTkuMjg4MSA2LjI5Nzc3QzE4LjU4NDMgNy4wMTEzMSAxNy4zMTY5IDguMjcyNDQgMTUuNjQ4IDkuOTIyODFMMTUuNjA3NyA5Ljk2MjYzQzE0LjY2NjIgMTAuODkzNyAxMy42NTcyIDExLjg4ODkgMTIuNjQ4MyAxMi44ODI1TDExLjgzMjkgMTMuNjg1MUw4LjczNTM0IDEwL
                jMyMjNaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
                      alt=""
                    />
                  </span>
                  <span className="cursor-pointer">0/8</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-3 h-19 -mt-3 shadow-sm border border-gray-200 hover:border hover:border-blue-600">
            <p class="text-sm font-semibold text-gray-800">
              Strategic Influence At Work: <br /> Bootcamp Takeaways
            </p>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA1QzMuNDQ3NzIgNSAzIDUuNDQ3NzIgMyA2QzMgNi41NTIyOCAzLjQ0NzcyIDcgNCA3SDIwQzIwLjU1MjMgNyAyMSA2LjU1MjI4IDIxIDZDMjEgNS40NDc3MiAyMC41NTIzIDUgMjAgNUg0Wk00IDlDMy40NDc3MiA5IDMgOS40NDc3MiAzIDEwQzMgMTAuNTUyMyAzLjQ0NzcyIDExIDQgMTFIMjBDMjAuNTUyMyAxMSAyMSAxMC41NTIzIDIxIDEwQzIxIDkuNDQ3NzIgMjAuNTUyMyA5IDIwIDlINFpNMyAxNEMzIDEzLjQ0NzcgMy40NDc3MiAxMyA0IDEzSDIwQzIwLjU1MjMgMTMgMjEgMTMuNDQ3NyAyMSAxNEMyMSAxNC41NTIzIDIwLjU1MjMgMTUgMjAgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0Wk00IDE3QzMuNDQ3NzIgMTcgMyAxNy40NDc3IDMgMThDMyAxOC41NTIzIDMuNDQ3NzIgMTkgNCAxOUgxNEMxNC41NTIzIDE5IDE1IDE4LjU1MjMgMTUgMThDMTUgMTcuNDQ3NyAxNC41NTIzIDE3IDE0IDE3SDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
              alt=""
            />
          </div>
        </div>
        {/* CARD4 */}
        <div class="bg-gray-100 h-132 w-80 rounded-xl p-3 shadow-md flex flex-col ml-232 -mt-110">
          <div className="flex">
            <h2 class="text-lg font-semibold  text-gray-800 mb-3">
              January 18th
            </h2>
            <span className="text-gray-400 text-lg cursor-pointer flex  ml-35 mt-1.5">
              <HiArrowSmRight />
              <HiArrowSmLeft />
            </span>
          </div>
          <div class="bg-white rounded-xl p-3 mb-4 shadow-sm border border-gray-200  ">
            <div class="text-sm text-gray-600 hover:border hover:border-blue-600 font-medium mb-3 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 mt-2">
              Nordic Launch Update
            </div>
            <div className="hover:border hover:border-blue-600 rounded-2xl h-78 ">
              {" "}
              <br />
              <div class="relative rounded-lg overflow-hidden mb-3 ">
                <div class=" bg-opacity-40 flex flex-col items-center justify-center text-center px-3">
                  <img className="h-50 w-150 rounded-2xl " src={giphy} alt="" />
                </div>
              </div>
              <p class="text-sm font-semibold text-gray-800 mb-3">
                Remote work Campaign:The <br />
                Scoop
              </p>
              <div class="flex items-center justify-between h-2 text-xs text-gray-600 ">
                <div class="flex items-center gap-3">
                  <span>
                    <img
                      className="cursor-pointer"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA1QzMuNDQ3NzIgNSAzIDUuNDQ3NzIgMyA2QzMgNi41NTIyOCAzLjQ0NzcyIDcgNCA3SDIwQzIwLjU1MjMgNyAyMSA2LjU1MjI4IDIxIDZDMjEgNS40NDc3MiAyMC41NTIzIDUgMjAgNUg0Wk00IDlDMy40NDc3MiA5IDMgOS40NDc3MiAzIDEwQzMgMTAuNTUyMyAzLjQ0NzcyIDExIDQgMTFIMjBDMjAuNTUyMyAxMSAyMSAxMC41NTIzIDIxIDEwQzIxIDkuNDQ3NzIgMjAuNTUyMyA5IDIwIDlINFpNMyAxNEMzIDEzLjQ0NzcgMy40NDc3MiAxMyA0IDEzSDIwQzIwLjU1MjMgMTMgMjEgMTMuNDQ3NyAyMSAxNEMyMSAxNC41NTIzIDIwLjU1MjMgMTUgMjAgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0Wk00IDE3QzMuNDQ3NzIgMTcgMyAxNy40NDc3IDMgMThDMyAxOC41NTIzIDMuNDQ3NzIgMTkgNCAxOUgxNEMxNC41NTIzIDE5IDE1IDE4LjU1MjMgMTUgMThDMTUgMTcuNDQ3NyAxNC41NTIzIDE3IDE0IDE3SDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
                      alt=""
                    />
                  </span>
                  <span>
                    <img
                      className="cursor-pointer"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNjQyNiAxNy45NjQ3QzEwLjExMjMgMTkuNDYgNy42MjczNiAxOS40NjA2IDYuMTAwOTIgMTcuOTY5MUM0LjU3NTA1IDE2LjQ3OCA0LjU3NzY5IDE0LjA0NjcgNi4xMDI1MyAxMi41NTY2TDEzLjI1MDUgNS41NzE4NEMxNC4xNDc2IDQuNjk1MiAxNS41ODYxIDQuNjkyNTEgMTYuNDgzMiA1LjU2OTIxQzE3LjM3NjMgNi40NDE4NCAxNy4zNzc4IDcuODUxMzUgMTYuNDg2OSA4LjcyMTk5TDkuNzgzNjEgMTUuMjcyMkM5LjUzMjg4IDE1LjUxNzIgOS4xMjgwNyAxNS41MTYzIDguODY5NTQgMTUuMjYzNkM4LjYxMDczIDE1LjAxMDcgOC42MDk2MyAxNC42MTU4IDguODY5NTQgMTQuMzYxOEwxNS4wOTg5IDguMjc0NjNDMTUuNDgxMiA3LjkwMTA5IDE1LjQ4MTIgNy4yOTU0NiAxNS4wOTg5IDYuOTIxOTJDMTQuNzE2NyA2LjU0ODM4IDE0LjA5NjkgNi41NDgzOCAxMy43MTQ2IDYuOTIxOTJMNy40ODUyMyAxMy4wMDkxQzYuNDU5MTEgMTQuMDExOCA2LjQ2MzU2IDE1LjYxOCA3LjQ4NTIzIDE2LjYxNjNDOC41MDY3NCAxNy42MTQ1IDEwLjE1MTEgMTcuNjE4NiAxMS4xNjc5IDE2LjYyNDlMMTcuODcxMiAxMC4wNzQ3QzE5LjUyNzQgOC40NTYzMiAxOS41MjQ0IDUuODM1NTUgMTcuODY3NiA0LjIxNjVDMTYuMjA0NyAyLjU5MTU2IDEzLjUyNjYgMi41OTY1NyAxMS44NjYyIDQuMjE5MTNMNC43MTgyMiAxMS4yMDM5QzIuNDI5NTEgMTMuNDQwNCAyLjQyNTU1IDE3LjA4MyA0LjcxNjYxIDE5LjMyMThDNy4wMDc3NCAyMS41NjA2IDEwLjczMjMgMjEuNTU5NyAxMy4wMjY5IDE5LjMxNzRMMTkuNzEzMyAxMi43ODM3QzIwLjA5NTYgMTIuNDEwMSAyMC4wOTU2IDExLjgwNDUgMTkuNzEzMyAxMS40MzFDMTkuMzMxIDExLjA1NzQgMTguNzExMyAxMS4wNTc0IDE4LjMyOSAxMS40MzFMMTEuNjQyNiAxNy45NjQ3WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg+PC9zdmc+"
                      alt=""
                    />
                  </span>

                  <span className="cursor-pointer">1</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl p-3 h-19 -mt-3 shadow-sm border border-gray-200 hover:border hover:border-blue-600">
            <p class="text-sm font-semibold text-gray-800">
              Webinar Post-Mortem
            </p>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA1QzMuNDQ3NzIgNSAzIDUuNDQ3NzIgMyA2QzMgNi41NTIyOCAzLjQ0NzcyIDcgNCA3SDIwQzIwLjU1MjMgNyAyMSA2LjU1MjI4IDIxIDZDMjEgNS40NDc3MiAyMC41NTIzIDUgMjAgNUg0Wk00IDlDMy40NDc3MiA5IDMgOS40NDc3MiAzIDEwQzMgMTAuNTUyMyAzLjQ0NzcyIDExIDQgMTFIMjBDMjAuNTUyMyAxMSAyMSAxMC41NTIzIDIxIDEwQzIxIDkuNDQ3NzIgMjAuNTUyMyA5IDIwIDlINFpNMyAxNEMzIDEzLjQ0NzcgMy40NDc3MiAxMyA0IDEzSDIwQzIwLjU1MjMgMTMgMjEgMTMuNDQ3NyAyMSAxNEMyMSAxNC41NTIzIDIwLjU1MjMgMTUgMjAgMTVINEMzLjQ0NzcyIDE1IDMgMTQuNTUyMyAzIDE0Wk00IDE3QzMuNDQ3NzIgMTcgMyAxNy40NDc3IDMgMThDMyAxOC41NTIzIDMuNDQ3NzIgMTkgNCAxOUgxNEMxNC41NTIzIDE5IDE1IDE4LjU1MjMgMTUgMThDMTUgMTcuNDQ3NyAxNC41NTIzIDE3IDE0IDE3SDRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
              alt=""
            />
          </div>
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
};

export default TeamCard;
