import NavBar from "../../../NavBar";
import { Link } from "react-router-dom";
import clockifyicon from "../../../../assets/clockifyicon.svg";
import torch from "../../../../assets/torch.svg";
import thrbox from "../../../../assets/thrbox.svg";
import mailsumup from "../../../../assets/mailsumup.svg";
import isumup from "../../../../assets/isumup.svg";
import iblsumup from "../../../../assets/iblsumup.svg";
import locksumup from "../../../../assets/locksumup.svg";
import screen1 from "../../../../assets/screen1.png";
import screen2 from "../../../../assets/screen2.png";
import CompanyLogo from "../../../../assets/CompanyLogo";

const ClockifyIntegrationForTrello = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <p className="m-5 inline">
          {" "}
          <Link to="/power-ups" className="hover:underline ">
            power-ups{" "}
          </Link>
          /
          <span className="inline hover:underline">
            {" "}
            Clockify Integration for Trello
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-6 flex flex-col items-start md:items-start sticky top-20 self-start">
            <img
              src={clockifyicon}
              alt="Toggl"
              className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
            />

            <div>
              <p className="text-gray-700 font-medium flex items-center gap-1">
                <img src={torch} alt="Rocket Icon" className="w-4 h-4" />
                Made by Oleksii Smargunov
              </p>

              <div className="inline-flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded mt-2">
                <img src={thrbox} alt="Reporting Icon" className="w-4 h-4" />
                10,000 +
              </div>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <div>
              <h3 className="font-semibold text-medium mb-2">Categories</h3>

              <div className="flex flex-wrap gap-2">
                <span className="border border-gray-300 px-3 py-1 rounded text-xs">
                  Analytics & reporting
                </span>

                <span className="border border-gray-300 px-3 py-1 rounded text-xs">
                  IT & project management
                </span>
              </div>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <div className="text-sm text-gray-600 space-y-2">
              <p className="cursor-pointer hover:underline flex items-center gap-1">
                <img src={mailsumup} alt="Email Icon" className="w-4 h-4" />
                Contact support
              </p>

              <p className="cursor-pointer hover:underline flex items-center gap-1">
                <img src={isumup} alt="Info Icon" className="w-4 h-4" />
                Privacy policy
              </p>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <p className="text-sm text-gray-600">
              <img
                src={locksumup}
                alt="Compliance Icon"
                className="inline w-4 h-4 mr-1"
              />
              Clockify Integration for Trello is <br />
              in compliance with{" "}
              <span className="text-blue-600 cursor-pointer underline">
                Trello's data <br /> and privacy practices.
              </span>
            </p>
            <hr className="border-gray-300 w-full md:w-60" />
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl md:text-xl font-bold">
                Clockify Integration for Trello
              </h1>

              <button className="bg-blue-600  text-white px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
                Add Power-Up
              </button>
            </div>
            <h2 className="text-gray-900 text-2xl font-semibold">About</h2>
            <p className="text-gray-700">
              Clockify integration for Trello is an easy way to operate with
              time tracker inside a Trello board. You don't need to have any
              browser extension anymore to make it work.
            </p>
            <hr className="border-gray-300 w-full md:w-160" />
            <h1 className="text-gray-900 text-2xl font-semibold">Features</h1>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Just copy-paste your Clockify API Token and you are ready to go.
              </li>
              <li>Start/stop timer inside a Trello card</li>
              <li>
                Update time entry description or easily append a checklist item
                to it.
              </li>
              <li>
                Select workspace, project, tags, billing options before the
                start
              </li>
              <li>Showing a badge about running timer on the front of card</li>
              <li>Showing a badge with total time on the front of card</li>
              <li>Basic work-log functionality</li>
              <li>Two way synchronisation between Trello and Toggl</li>
              <li>
                Automatically start/stop a timer when Trello card is drag and
                drop to a specified column
              </li>
              <li>
                Remembers and preselects a timer options per user per board.
                Optionally it can be extended to a Trello column or card
              </li>
              <li>Switch Power-up subscription from one board to another</li>
              <li>Automatically assign card labels as Toggl tags</li>
            </ul>
            <hr className="border-gray-300 w-full md:w-160" />
            <h2 className="text-gray-900 text-2xl font-semibold">Price</h2>
            <p>
              All features are included in any subscription plan. 5 days trial.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                One board
                <ul className="pl-6 mt-1" style={{ listStyleType: "circle" }}>
                  <li>
                    2.5€ per month if billed annually (3.5€ billed monthly)
                  </li>
                </ul>
              </li>

              <li>
                Up to 5 boards
                <ul className="pl-6 mt-1" style={{ listStyleType: "circle" }}>
                  <li>9€ per month if billed annually (10€ billed monthly)</li>
                  <li>
                    Pay once and activate other boards from "License activation"
                    section
                  </li>
                </ul>
              </li>

              <li>
                Unlimited count of boards
                <ul className="pl-6 mt-1" style={{ listStyleType: "circle" }}>
                  <li>16€ per month if billed annually (17€ billed monthly)</li>
                  <li>
                    Pay once and activate other boards from "License activation"
                    section
                  </li>
                </ul>
              </li>
            </ul>
            <hr className="border-gray-300 w-full md:w-160" />
            <h2 className="text-gray-900 text-2xl font-semibold">Support</h2>
            <p>
              If you have any feature suggestions or run into any problems,
              please get in touch with me by sending an email to{" "}
              <span className="text-blue-600 underline">alex@sm-act.com</span>
            </p>
            <hr className="border-gray-300 w-full md:w-160 mb-7" />
            <div>
              <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>

              <div className="relative inline-block">
                <img
                  src={screen1}
                  alt="screenshot"
                  className="rounded-lg mb-6"
                />
                <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
                  <img
                    src={iblsumup}
                    alt="info"
                    title="External Media File"
                    className="w-5 h-5"
                  />
                </div>
              </div>

              <div className="relative inline-block">
                <img
                  src={screen2}
                  alt="screenshot"
                  className="rounded-lg mb-6"
                />
                <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
                  <img
                    src={iblsumup}
                    alt="info"
                    title="External Media File"
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="  items-center w-full h-[100%] text-[#BFC1C4]">
        <div className="flex gap-4 items-center justify-center pt-30">
          <p className="underline">Templates</p>
          <p className="underline">Pricing</p>
          <p className="underline">AppsJobs</p>
          <p className="underline">Blog</p>
          <p className="underline">Developers</p>
          <p className="underline">About</p>
          <p className="underline">Help</p>
          <p className="underline">Legal</p>
          <p className="underline">Privacy</p>
          <p className="underline">Integrations</p>
          <p className="underline">Contact us</p>
          <p className="underline">Terms</p>
        </div>
        <div className="  pb-20 flex items-center gap-3 justify-center">
          <p>
            <CompanyLogo />
          </p>
          <p>© Copyright 2025. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
export default ClockifyIntegrationForTrello;
