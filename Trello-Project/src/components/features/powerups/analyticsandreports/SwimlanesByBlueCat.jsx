
import React from "react";
import NavBar from "../../../NavBar";
import { Link } from "react-router-dom";
import AtlassianFooter from "../../../solutions/taskManagement/AtlassianFooter";

import { CiMail } from "react-icons/ci";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";

import bluecat from "../../../../assets/swimlanesByBluecat1.png";
import swimGif from "../../../../assets/swimlanes.gif";
import flight from "../../../../assets/flight.svg";
import slopecal from "../../../../assets/slopeCalculatorimg.svg";

const SwimlanesByBlueCat = () => {
  return (
    <>
      <NavBar />

     
      <div className="w-[60%] m-auto mt-10 ml-56">
        <p className="text-lg">
          <Link to="/power-ups" className="hover:underline">
            Power-Ups
          </Link>{" "}
          / <Link to='' className="hover:underline">Swimlanes by Blue Cat</Link>
        </p>
      </div>

      <section className="flex w-[70%] m-auto mt-6 gap-20 ">

       
        <div className="w-[250px] sticky top-32 h-fit">

          <img src={bluecat} alt="Blue Cat" className="" />

           <span className="flex items-center justify-center gap-2 mt-2">
                        <img src={flight} alt="" className="w-4 h-4" />
                        Made by Enzipe Apps
                      </span>
          
                      <span className="flex justify-center items-center gap-2 mt-3 border-gray-200 rounded bg-gray-200 px-2 py-1 w-24 m-auto">
                        <img src={slopecal} alt="" className="w-4 h-4" />
                        <p>100+</p>
                      </span>

          <br />
          <hr className="border-gray-300" />
          <br />

          <h1 className="text-xl font-bold text-left mb-2">
            Categories
          </h1>

          <div className="flex gap-2">
            <span className="text-xs px-3 py-2 border border-gray-200 rounded">
              Board utilities
            </span>

            <span className="text-xs px-3 py-2 border border-gray-200 rounded">
              Analytics & reporting
            </span>
          </div>

          <br />
          <hr className="border-gray-300" />
          <br />

          <div className="flex items-center gap-2 mb-2">
            <CiMail />
            <a href="#" className="hover:underline text-sm">
              Contact support
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MdOutlinePrivacyTip />
            <a href="#" className="hover:underline text-sm">
              Privacy policy
            </a>
          </div>

          <br />
          <hr className="border-gray-300" />

          <div className="mt-4 flex gap-2 items-center">
            <AiTwotoneLock className="w-10 h-10" />

            <p className="text-sm text-gray-700">
              Swimlanes by Blue Cat is in compliance with{" "}
              <a href="#" className="text-blue-600 underline">
                Trello's data and privacy practices
              </a>
            </p>
          </div>
          <br />
          <hr className="border-gray-300" />

        </div>

    
        <div className="flex-[2]">

          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">
              Swimlanes by Blue Cat
            </h1>

            <button className="w-[160px] bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Add Power-Up
            </button>
          </div>

        
          <p className="mt-5">
            One of the{" "}
            <a href="#" className="text-purple-600 underline">
              fastest growing power-ups of 2023
            </a>
          </p>

          <p className="mt-3">
            Finally! The Swimlanes you always wanted for your Trello Boards.
          </p>

          <p className="mt-3">
            Not only is Swimlanes by Blue Cat <b>free</b>, but it is also the only
            swim lanes tool to work with{" "}
            <a href="#" className="text-blue-600 underline">
              Trello custom fields
            </a>{" "}
            as well their Labels and Members.
          </p>

          <p className="mt-3">
            Swimlanes is built by the team behind{" "}
            <a href="#" className="text-purple-600 underline">
              Blue Cat Reports
            </a>
            , check out our other Power-Ups below.
          </p>

          <p className="mt-3 italic">
            Swimlanes is one of the{" "}
            <a href="#" className="text-blue-600 underline">
              fastest growing power-ups of 2022
            </a>
          </p>

          
          <h2 className="text-2xl font-bold mt-10">
            What are swimlanes?
          </h2>

          <p className="mt-3 text-gray-700">
            Swimlanes create a view of your Trello boards which looks like the
            same board shown multiple times stacked on top of itself. Each board
            only has specific cards. For example if you group by member each
            board only shows cards assigned to one member.
          </p>

          <div className="mt-6 flex justify-center">
            <img
              src={swimGif}
              alt="Swimlanes Demo"
              className="rounded-lg shadow-lg w-[1000px]"
            />
          </div>

          <p className="mt-6">
            This is a great way to get an overview of where each team member's
            work is at in your process.
          </p>

        
          <h2 className="text-2xl font-bold mt-10">
            How to show swimlanes in Trello
          </h2>

          <ol className="list-decimal ml-6 mt-3 space-y-2">
            <li>Add the Swimlanes by Blue Cat Power-Up to your Trello board</li>
            <li>
              Open the Swimlanes view by clicking the Swimlanes button at the
              top of your board
            </li>
            <li>
              Select how you want to group cards for your swim lanes
            </li>
            <li>
              You can group your swim lanes by Label, Member or any custom
              dropdown field
            </li>
          </ol>

          {/* How to use */}
          <h2 className="text-2xl font-bold mt-10">
            How to use swimlanes
          </h2>

          <p className="mt-3">
            Swimlanes are a great way of visualising work in Trello which goes
            beyond the simple Trello board view.
          </p>

          <h3 className="text-xl font-bold mt-6">
            Group by Member to get an overview of everyone's work
          </h3>

          <p className="mt-2 text-gray-700">
            By grouping by member you can easily see where each team member's
            workload is on the board.
          </p>

          <h3 className="text-xl font-bold mt-6">
            Group by Custom Field to see your process with your data
          </h3>

          <p className="mt-2">
            If you have a custom field for <b>Priority</b>, easily see where each
            priority work is in your process.
          </p>

          <p className="mt-2">
            Using a <b>Status</b> custom field? Then easily see a breakdown of
            work by status for your boards.
          </p>

          <p className="mt-2">
            Interested in more reporting options? Check out{" "}
            <a href="#" className="text-purple-600 underline">
              Blue Cat Reports
            </a>
          </p>

          {/* Drag Drop */}
          <h2 className="text-2xl font-bold mt-10">
            Drag and Drop between swimlanes
          </h2>

          <p className="mt-3 text-gray-700">
            You can even drag and drop cards within the swimlanes view. Doing
            this lets you add and remove members or labels and update custom
            fields.
          </p>

          {/* Other Powerups */}
          <h2 className="text-2xl font-bold mt-10">
            Our other Power-Ups
          </h2>

          <h3 className="text-purple-600 underline mt-4">
            Blue Cat Reports
          </h3>

          <p className="mt-2">
            Our reporting Power-Up is the number one reporting tool for Trello.
            You can{" "}
            <a href="#" className="text-purple-600 underline">
              check it out here
            </a>
          </p>

          <h3 className="text-blue-600 underline mt-4">
            Forms by Blue Cat
          </h3>

          <p className="mt-2">
            Our{" "}
            <a href="#" className="text-blue-600 underline">
              Forms Power-Up
            </a>{" "}
            lets people fill forms and create cards in Trello.
          </p>

          <h3 className="text-blue-600 underline mt-4">
            Import to Trello by Blue Cat
          </h3>

          <p className="mt-2">
            Easily import CSV, Excel and Google Sheets into Trello with our{" "}
            <a href="#" className="text-blue-600 underline">
              Imports Power-Up
            </a>
          </p>

          <h3 className="text-blue-600 underline mt-4">
            Exports for Trello
          </h3>

          <p className="mt-2">
            Export your data using our{" "}
            <a href="#" className="text-blue-600 underline">
              Exports Power-Up
            </a>
          </p>

        </div>
      </section>

      <AtlassianFooter />
    </>
  );
};

export default SwimlanesByBlueCat;

