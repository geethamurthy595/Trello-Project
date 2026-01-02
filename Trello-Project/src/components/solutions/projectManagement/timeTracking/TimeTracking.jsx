import React from "react";
import NavBar from "../../../NavBar";
import { Link } from "react-router-dom";
// import icon from '../../../../assets/trelloicon1.svg'
// import icon1 from '../../../../assets/Atlas.png'
import logo1 from "../../../../assets/logo1.svg";
import logo2 from "../../../../assets/logo2.svg";
import logo3 from "../../../../assets/logo3.svg";
import logo4 from "../../../../assets/logo4.svg";
import logo5 from "../../../../assets/logo5.svg";
import video2 from "../../../../assets/video2.gif";
import timetracking1 from "../../../../assets/timetracking1.svg";
import timeimg1 from "../../../../assets/timeimg1.png";
import imagetime from "../../../../assets/imagetime.svg";
import AtlassianFooter from "../../taskManagement/AtlassianFooter";

const TimeTracking = () => {
  return (
    <div>
      <NavBar />
      <div className="h-400 w-200 m-auto mt-5">
        <div className=" text-gray-500 font-medium text-xs tracking-wide cursor-pointer ">
          <a href="" className=" hover:underline">
            Power-Ups
          </a>{" "}
          / <a className=" hover:underline">Time Tracking & Reporting</a>
        </div>
        <div className="flex flex-wrap justify-between  ">
          <div className="h-160 sticky top-16 w-55 mt-6">
            <img src={timetracking1} alt="" height={255} width={240} />
            <div className="mt-3 flex flex-wrap">
              <img src={logo1} alt="" height={3} width={15} />{" "}
              <span className="text-xs p-1 text-gray-900">Made by Kolekti</span>
            </div>
            <div className="  flex flex-wrap justify-around bg-blue-50 rounded mt-2  w-20">
              <img src={logo2} alt="" className=" h-5 w-5 relative left-1" />{" "}
              <span className="text-xs relative right-0 pt-0.5 ">100,000+</span>
            </div>
            <br />
            <hr className="border-gray-300 -mt-4" />
            <p className='mt-2 font-semibold "text-gray-700 '>Categories</p>
            <div className="mt-2">
              <button className="px-2 py-1 border-1 border-gray-300 text-xs rounded-md">
                Analytics & reporting
              </button>
              <button className="px-2  py-1 border-1 mt-2 border-gray-300 text-xs rounded-md">
                IT & project management
              </button>
            </div>
            <hr className="border-gray-300 mt-5" />
            <img
              src={logo3}
              alt=""
              className="h-4 w-7 relative top-3 right-2"
            />
            <Link className="text-xs font-sans no-underline relative -top-2.5 left-5  hover:text-blue-800 hover:underline">
              Contact support
            </Link>
            <br />
            <img
              src={logo4}
              alt=""
              className="h-4 w-7 relative -top-1.5 right-2"
            />
            <Link className="text-xs no-underline  relative -top-7 left-5 hover:text-blue-800  hover:underline">
              Privacy policy
            </Link>
            <hr className="border-gray-300 -mt-2.5" />
            <img
              src={logo5}
              alt=""
              className="h-5 w-8 relative top-15 right-1"
            />
            <p className="text-xs  text-gray-900  w-full pl-6  ">
              Time Tracking & Reporting stores <br /> personal data and is in{" "}
              <br /> compliance with <br />{" "}
              <span className='" text-blue-600 underline hover:cursor-pointer "'>
                Trello's data and privacy <br />
                practices.
              </span>
            </p>
            <hr className="border-gray-300 mt-2" />
          </div>
          <div className=" h-380 w-135 ml-2 mt-6 ">
            <div className="flex flex-wrap">
              <h1 className="text-xl font-bold  w-100  text-gray-800">
                Time Tracking & Reporting
              </h1>
              <button className="bg-blue-600 text-white px-2 py-2 rounded hover:bg-blue-700  transition  ml-110 -mt-8 text-xs font-semibold hover:cursor-pointer">
                Add Power-Up
              </button>
            </div>
            <p className="text-xl w-full   text-gray-800 font-medium mt-1">
              🕒 The easiest way for your team to log time directly in Trello##
            </p>
            <p className="text-xs/5 text-gray-800  font-medium pt-2">
              Help your team log time on Trello cards to track work. Create and
              export reports to see aggregated data.
            </p>
            <p className="text-sm mt-2  text-gray-900  font-semibold">
              New Feature
            </p>
            <p className="text-xs/5 text-gray-800  font-medium pt-2 w-120 ">
              ✅ Add a description to your work logs to gain a better
              understanding of the work performed.
            </p>
            <p className="text-xs/5 text-gray-800  font-medium pt-3 w-120 ">
              This Power-Up was built ground up for Trello and is not an
              integration. Everything you need is inside your Trello board.
            </p>
            <br />
            <img src={video2} alt="logo" />
            <p className="text-xs/5 text-gray-800  font-medium pt-3 w-120 ">
              To get started…
            </p>
            <ul className="list-inside list-disc flex flex-col text-left pl-6 ">
              <li className="text-xs/5 text-gray-800  font-medium pt-3 w-120 ">
                Open a card, pick a date, a team member, add a description of
                the work, and log the number of hours spent. If you forget to
                log time, you can pick a date back in time or do it all at once
                at the end of the week. It works either way.
              </li>
              <li className="text-xs/5 text-gray-800  font-medium pt-3 w-120 ">
                Create reports grouped by cards or team members within a date
                range to get a detailed view on the project’s progress. You’ll
                see where hours have been spent, who’s worked on what, and which
                tasks have accumulated the most time.
              </li>
              <li className="text-xs/5 text-gray-800  font-medium pt-3 w-120 ">
                Export reports into Excel or CSV for your records.
              </li>
            </ul>
            <br />

            <img
              src={timeimg1}
              className="items-center w-[450px] h-[100px] pl-12"
              alt=""
            />
            <p className="text-gray-800 text-xs/5 leading-relaxed font-medium pt-5 ">
              This Power-Up is a time tracker tool for logging work and viewing
              reports. Useful for billing and invoicing clients, keeping up with
              accounting, resource planning, timesheets, seeing how much time
              has been spent on projects, and more. Export formats include Excel
              (XLSX) and CSV.
            </p>
            <h1 className="text-sm mt-2  text-gray-700  font-semibold">
              Pricing
            </h1>
            <br />
            <p className="text-xs/5 text-gray-800  font-medium -mt-5 w-120 ">
              All users start on a 14-day free trial of the Power-up and can
              upgrade anytime to one of the below plans.
            </p>
            <ul className="list-inside list-disc flex flex-col text-left pl-6 ">
              <li className="text-xs/5 text-gray-800  font-medium pt-3 w-120 ">
                Annual billing: $96/year ($8/month) for one board with unlimited
                members OR{" "}
              </li>
              <li className="text-xs/5 text-gray-800  font-medium pt-3 w-120 ">
                Monthly billing: $10/month for one board with unlimited members
                Monthly billing: $10/month for one board with unlimited
                membersMonthly billing: $10/month for one board with unlimited
                membersMonthly billing: $10/month for one board with unlimited
                members
              </li>
              <li className="text-xs/5 text-gray-800  font-medium pt-3 w-120 ">
                We don’t charge per team member — you only pay for the boards
                you purchase a license for.
              </li>
            </ul>
            <h1 className="text-sm mt-2  text-gray-900  font-semibold">
              Looking to purchase this Power-Up for 5+ boards?
              <span className="text-blue-900 underline hover:no-underline cursor-pointer">
                {" "}
                Get in touch with us
              </span>{" "}
              for pricing details.
            </h1>
            <h1 className="text-sm mt-3  text-gray-900  font-semibold">
              FREE Trello Tutorials
            </h1>
            <p className="text-xs/5 text-gray-800  font-medium pt-1 w-120 ">
              Looking to do even more with Trello? Learn Trello tips, tricks,
              and automation with our{" "}
              <span className="text-blue-600 underline hover:no-underline cursor-pointer">
                free video tutorials
              </span>
            </p>
            <h1 className="text-2xl mt-7 text-gray-700  font-semibold">
              Legal
            </h1>

            <p className="text-xs/5 text-gray-800  font-medium pt-3 w-140 ">
              By using this Power-Up you agree to our{" "}
              <span className="text-blue-600 underline hover:no-underline cursor-pointer">
                EULA, Terms and Conditions,
              </span>{" "}
              and{" "}
              <span className="text-blue-600 underline hover:no-underline cursor-pointer">
                Privacy Policy.
              </span>
            </p>
            <p className="text-xs/5 text-gray-800  font-medium pt-3 w-120 ">
              Get in touch on our{" "}
              <span className="text-blue-600 underline hover:no-underline cursor-pointer">
                support portal.
              </span>
            </p>
            <p className="text-xs/5 text-gray-800  font-medium pt-3 w-120 ">
              Learn more about Kolekti and our full suite of Trello Power-Ups{" "}
              <span className="text-blue-600 underline hover:no-underline cursor-pointer">
                {" "}
                here.
              </span>
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <AtlassianFooter/>
    </div>
  );
};

export default TimeTracking;
