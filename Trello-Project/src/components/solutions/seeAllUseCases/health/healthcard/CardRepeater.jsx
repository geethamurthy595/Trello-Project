import React from "react";
import { CiMail } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import AtlassianFooter from "../../../taskManagement/AtlassianFooter";
import { Link } from "react-router-dom";
import NavBar from "../../../../NavBar";

const CardRepeater = () => {
  return (
    <div>
      <NavBar />
      <section className="w-[900px] flex flex-row gap-6 m-auto mt-15 ">
        <div id="left" className="h-[750px] pt-10 sticky top-10 transition-all"> 
          <p>
            <a href="" className=" ">
              Power-Ups / CardRepeater
            </a>
          </p>
          <img
            src="https://recurring-cards.trello.services/images/card-repeater-icon.svg"
            alt=""
            className="w-60 mt-10"
          />
          <br />
          <p className="ml-8">Made by Trello Inc</p>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyA1QzMgMy44OTU0MyAzLjg5NTQzIDMgNSAzSDE5QzIwLjEwNDYgMyAyMSAzLjg5NTQzIDIxIDVWMTlDMjEgMjAuMTA0NiAyMC4xMDQ2IDIxIDE5IDIxSDVDMy44OTU0MyAyMSAzIDIwLjEwNDYgMyAxOVY1Wk01IDZDNSA1LjQ0NzcyIDUuNDQ3NzIgNSA2IDVIMTBDMTAuNTUyMyA1IDExIDUuNDQ3NzIgMTEgNlYxNkMxMSAxNi41NTIzIDEwLjU1MjMgMTcgMTAgMTdINkM1LjQ0NzcyIDE3IDUgMTYuNTUyMyA1IDE2VjZaTTE0IDVDMTMuNDQ3NyA1IDEzIDUuNDQ3NzIgMTMgNlYxMkMxMyAxMi41NTIzIDEzLjQ0NzcgMTMgMTQgMTNIMThDMTguNTUyMyAxMyAxOSAxMi41NTIzIDE5IDEyVjZDMTkgNS40NDc3MiAxOC41NTIzIDUgMTggNUgxNFoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg=="
            className="-mt-6"
            alt=""
          />{" "}
          <br />
          <div className="flex ">
            {" "}
            <p className="bg-gray-100 w-25  rounded-sm">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJvbGU9InByZXNlbnRhdGlvbiIgZm9jdXNhYmxlPSJmYWxzZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyA1QzMgMy44OTU0MyAzLjg5NTQzIDMgNSAzSDE5QzIwLjEwNDYgMyAyMSAzLjg5NTQzIDIxIDVWMTlDMjEgMjAuMTA0NiAyMC4xMDQ2IDIxIDE5IDIxSDVDMy44OTU0MyAyMSAzIDIwLjEwNDYgMyAxOVY1Wk01IDZDNSA1LjQ0NzcyIDUuNDQ3NzIgNSA2IDVIMTBDMTAuNTUyMyA1IDExIDUuNDQ3NzIgMTEgNlYxNkMxMSAxNi41NTIzIDEwLjU1MjMgMTcgMTAgMTdINkM1LjQ0NzcyIDE3IDUgMTYuNTUyMyA1IDE2VjZaTTE0IDVDMTMuNDQ3NyA1IDEzIDUuNDQ3NzIgMTMgNlYxMkMxMyAxMi41NTIzIDEzLjQ0NzcgMTMgMTQgMTNIMThDMTguNTUyMyAxMyAxOSAxMi41NTIzIDE5IDEyVjZDMTkgNS40NDc3MiAxOC41NTIzIDUgMTggNUgxNFoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvc3ZnPg=="
                className="-mt-"
                alt=""
              />
              <p className="-mt-6 ml-7">500,000 +</p>{" "}
            </p>
            <button className="h-7 w-26 ml-3 rounded  bg-pink-100">
              💗Staff Pick
            </button>
          </div>
          <br />
          <br />
          <hr className="text-gray-400" />
          <h1 className="font-semibold ">Categories</h1>
          <div className="flex">
            <Link
              to="/power-ups/category/automation"
              className="bg-none border-gray-400 border-1 inline-flex items-center justify-center h-8 w-30 rounded-sm mt-5"
            >
              Automation
            </Link>
            <br />
            <Link
              to="/power-ups/category/board-utilities"
              className=" bg-none border-1 inline-flex items-center justify-center border-gray-400 h-8 w-30 rounded-sm  ml-4  mt-5"
            >
              Board Utilities
            </Link>
          </div>
          <br />
          <hr className="text-gray-400" />
          <br />
          <a
            href="https://support.atlassian.com/contact/#/"
            className="hover:underline hover:text-blue-400"
          >
            <CiMail className="size-5" />{" "}
            <aside className="ml-6 -mt-6">Contact Support</aside>
          </a>
          <br />
          <a
            href="https://www.atlassian.com/legal/privacy-policy"
            className="hover:underline hover:text-blue-400"
          >
            <CiCircleInfo className="size-5" />
            <aside className="ml-6 -mt-6">Privacy Policy</aside>
          </a>
          <br />
          <br />
          <hr className="-mt-5 text-gray-400" />
          <img
            src="https://trello.com/assets/ae7e63776f2f61b39c2b.svg"
            className="size-6 mt-8"
            alt=""
          />
          <p className="-mt-11 mb-5 ml-8">
            Card Repeater is in compliance <br /> with
            <Link
              to="/legal/privacy-policy"
              href="https://www.atlassian.com/legal/privacy-policy"
              className="text-blue-500  underline"
            >
              Trello's data and privacy <br /> practices.
            </Link>
          </p>
          <hr className="text-gray-400" />
        </div>
        <div id="right" className="w-230 ">
          <div className="flex gap-100">
            <h1 className="text-3xl  w-55 font-medium ">Card Repeater</h1>
            <Link
              to="/power-ups/57b47fb862d25a30298459b1/enable"
              className="bg-blue-700 rounded-sm h-9 w-32 -ml-25 mb-10 inline-flex items-center justify-center text-white hover:bg-blue-800"
            >
              Add Power-Up
            </Link>
          </div>
          <h3 className="font-extrabold text-medium text-gray-700 -mt-7">
            Put regular tasks on repeat.
          </h3>
          <br />
          <p>
            The Card Repeater Power-Up for Trello automates the creation of
            Trello cards for repeated <br /> tasks, giving you one less thing to
            have to think about. Simply set the schedule on a card <br /> and
            Trello will automatically make an exact copy of that card at the
            given date and time. <br /> This makes it easy to establish a
            process for weekly to-dos, retrospectives, end of the <br /> month
            closing out the books, or a reminder to get your mom a birthday
            present.
          </p>
          <ul className="list-disc ml-10 space-y-1">
            <li>
              Schedule cards to repeat on a daily, weekly, monthly, or yearly
              basis.
            </li>
            <li>Cards will be copied to a specified list automatically.</li>
            <li>
              Build a process into your workflow and make sure nothing falls
              through the cracks.
            </li>
          </ul>
          <br />
          <img
            src="https://recurring-cards.trello.services/images/Card_Repeater_1.jpg"
            alt=""
            className="w-170 rounded-sm"
          />
          <br />
          <img
            src="https://recurring-cards.trello.services/images/Card_Repeater_2.jpg"
            alt=""
            className="w-170 rounded-sm"
          />
          <br />

          <br />
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <AtlassianFooter />
    </div>
  );
};

export default CardRepeater;
