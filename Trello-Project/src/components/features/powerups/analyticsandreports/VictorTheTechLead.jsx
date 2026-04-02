import React from "react";
import img1 from "../../../../assets/timetrackerimg1.png";
import NavBar from "../../../NavBar";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from "../../../solutions/taskManagement/AtlassianFooter";

import victor from "../../../../assets/victorTheLead.png";
import plug from "../../../../assets/plug.png";
import img5 from "../../../../assets/timetrackerimg4.png";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdImage } from "react-icons/md";



const VictorTheTechLead = () => {

  return (
    <>
      <NavBar />

      <div className="ml-50 text-lg mt-10 sticky top-20">
        <p>
          <Link to="/power-ups" className="hover:underline">
            Power-Ups
          </Link>{" "}
          /{" "}
          <Link className="hover:underline">
            Victor The Tech Lead
          </Link>
        </p>
      </div>

      <section className="flex mt-5 w-[70%] m-auto gap-20">

       
        <div className="flex w-90 h-130 justify-start sticky top-35">
          <div className="rounded-lg text-center">

            <img src={victor} alt="" className="block h-65 w-65" />

            <p className="mt-2 flex items-center gap-3 text-gray-800">
              <img className="w-4 h-4" src={plug} alt="" />
              Made by KnowCode
            </p>

            <p className="bg-gray-100 w-26 h-7  flex justify-center items-center gap-3 mt-2 p-4">
              <img className="w-5 h-5" src={img5} alt="" />
              <p>100+</p>
            </p>

            <br />

            <hr className="border-gray-300" />

            <br />

            <h1 className="text-xl text-gray-700 font-bold flex justify-start">
              Categories
            </h1>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm p-2 border border-gray-200 w-[200px] rounded hover:bg-gray-100"
              >
           
                IT & project management
              </a>

              <a
                href="#"
                className="text-sm p-2 border w-[200px] border-gray-200 rounded hover:bg-gray-100"
              >
                    Analytic & Reporting
              </a>
            </div>

            <br />

            <hr className="border-gray-300" />

            <div className="flex items-center mt-3">
              <CiMail />
              <a
                href="#"
                className="text-md px-2 hover:underline hover:text-blue-600"
              >
                Contact Support
              </a>
            </div>

            <div className="flex items-center mt-2">
              <MdOutlinePrivacyTip />
              <a
                href="#"
                className="text-md px-2 hover:underline hover:text-blue-600"
              >
                Privacy Policy
              </a>
            </div>

            <br />

            <hr className="border-gray-300" />

        <div className="mt-4 flex items-start  gap-2 text-[18px] text-left text-gray-500">
            <AiTwotoneLock className="w-4 h-4 mt-[2px] text-gray-400 flex-shrink-0" />
            <p className="leading-5">
             Victor The Tech Lead is in compliance with{" "}
                <a href="#" className="text-blue-600 hover:underline font-normal">
                Trello's data and privacy practices
                </a>.
            </p>

        </div>

    </div>
        </div>

   
        <div className="w-full md:w-[70%] mb-6">

         
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">
             Victor The Tech Lead
            </h1>

            <button className="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Add Power-Up
            </button>
          </div>

         <h3 className="font-bold text-gray-800">Meet Victor, the game-changing AI companion designed to revolutionize project development.</h3>

          <p className="text-gray-700 mt-5">
            As your Virtual Tech Lead, Victor simplifies user story execution by effortlessly generating tasks tailored to your project's unique needs.
            Just click on the Create Tasks button on your Trello Board.
          </p>

 

<div className="flex justify-center mt-5">
  <div className="w-[260px] h-[260px] bg-gray-200 rounded-2xl relative flex items-center justify-center">
    <div className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1">
      <AiOutlineInfoCircle className="w-4 h-4" />
    </div>
     <div className="flex flex-col items-center text-center">
      <MdImage className="text-yellow-500 w-10 h-10 mb-2" />
      <p className="text-gray-600 text-sm">Preview unavailable</p>
    </div>

  </div>
</div>

        <p className="mt-5">Fill up the form:</p>

      <div className="flex justify-center mt-5">
  <div className="w-[260px] h-[260px] bg-gray-200 rounded-2xl relative flex items-center justify-center">
    <div className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1">
      <AiOutlineInfoCircle className="w-4 h-4" />
    </div>
     <div className="flex flex-col items-center text-center">
      <MdImage className="text-yellow-500 w-10 h-10 mb-2" />
      <p className="text-gray-600 text-sm">Preview unavailable</p>
    </div>

  </div>
</div>

        <p className="mt-5">It will return to you a list of tasks and subtasks for you reach your goal! Also providing technological solutions for each task.</p>

        <div className="flex justify-center mt-5">
  <div className="w-[260px] h-[260px] bg-gray-200 rounded-2xl relative flex items-center justify-center">
    <div className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1">
      <AiOutlineInfoCircle className="w-4 h-4" />
    </div>
     <div className="flex flex-col items-center text-center">
      <MdImage className="text-yellow-500 w-10 h-10 mb-2" />
      <p className="text-gray-600 text-sm">Preview unavailable</p>
    </div>

  </div>
</div>

        <p className="mt-5">The list of tasks was not satisfactory? Just ,<b>Regenerate</b>! Want to add the list to your Trello Board? No problem, just hit the <b>Add to my board button</b> and wait!</p>
        <p>A new list called "Victor the Tech Leader" will be generated on your board!</p>

      <div className="flex justify-center mt-5">
  <div className="w-[260px] h-[260px] bg-gray-200 rounded-2xl relative flex items-center justify-center">
    <div className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1">
      <AiOutlineInfoCircle className="w-4 h-4" />
    </div>
     <div className="flex flex-col items-center text-center">
      <MdImage className="text-yellow-500 w-10 h-10 mb-2" />
      <p className="text-gray-600 text-sm">Preview unavailable</p>
    </div>

  </div>
</div>

        <p className="mt-5">But Victor doesn't just create tasks; it analyzes existing ones, offering insightful suggestions to enhance efficiency.</p>
        <p className="mt-5">If  you already have a project going on, just create a card labeled "Context" and inform the context of the project on the card's description. Then, you add your tasks that you need to do, just like this:</p>

        <div className="flex justify-center mt-5">
  <div className="w-[260px] h-[260px] bg-gray-200 rounded-2xl relative flex items-center justify-center">
    <div className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1">
      <AiOutlineInfoCircle className="w-4 h-4" />
    </div>
     <div className="flex flex-col items-center text-center">
      <MdImage className="text-yellow-500 w-10 h-10 mb-2" />
      <p className="text-gray-600 text-sm">Preview unavailable</p>
    </div>

  </div>
</div>

        <p className="mt-5">Open your cad with the tasks that you want to be analyzed and hit the "Use Victor" button and wait for a while. Victor will generate a complete analysis and improvement for your task and fill on the description field.</p>

       <div className="flex justify-center mt-5">
  <div className="w-[260px] h-[260px] bg-gray-200 rounded-2xl relative flex items-center justify-center">
    <div className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1">
      <AiOutlineInfoCircle className="w-4 h-4" />
    </div>
     <div className="flex flex-col items-center text-center">
      <MdImage className="text-yellow-500 w-10 h-10 mb-2" />
      <p className="text-gray-600 text-sm">Preview unavailable</p>
    </div>

  </div>
</div>
       
       <p className="mt-5">Done!</p>

       
       <div className="flex justify-center mt-5">
  <div className="w-[260px] h-[260px] bg-gray-200 rounded-2xl relative flex items-center justify-center">
    <div className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1">
      <AiOutlineInfoCircle className="w-4 h-4" />
    </div>
     <div className="flex flex-col items-center text-center">
      <MdImage className="text-yellow-500 w-10 h-10 mb-2" />
      <p className="text-gray-600 text-sm">Preview unavailable</p>
    </div>

  </div>
</div>

        <p className="mt-5 text-justify">With its intuitive interface, Victor ensures seamless collaboration among managers, scrum masters, and developers, transforming project management into a streamlined, organized experience. Say goodbye to complexity and hello to innovation as Victor empowers your team to craft exceptional projects faster. Elevate your workflow, refine tasks, and unlock the full potential of your team with Victor The Tech Lead. Transform your project management experience today!</p>
        </div>
      </section>

      <div className="mt-50">
        <AtlassianFooter />
      </div>
    </>
  );
};

export default VictorTheTechLead;