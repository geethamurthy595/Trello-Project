import React from 'react'
import businesslogo from "../../../../assets/businesslogo.svg";
import EngineringTemp from "../../../../assets/EngineringTemp.svg";
import { MdOutlineFileCopy } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import EngineeringCards from "./EngineeringCards";
import Engtemplogo from "../../../../assets/Engtemplogo.svg";
import businesstrelloicon from "../../../../assets/businesstrelloicon.svg";
import Eng1 from '../../../../assets/Eng1.svg'
import { Link } from "react-router-dom";


const EngineeringTemplet = () => {
  return (
    <>
    <div className="flex flex-col w-[825px] mt-9">
        <div className="flex gap-2 text-[15px] px-5">
          <span>Template gallery</span> /<span>Engineering</span>
        </div>

        <div className="flex gap-2 items-center mt-9 px-5">
          <img src={EngineringTemp} alt="" className="h-[48px] w-[48px]" />
          <h1 className="font-semibold text-[24px] text-black/87">
            Engineering templates
          </h1>
        </div>

        <div className="w-full h-full">
          <EngineeringCards />
          <hr className="mt-15 border-t-1 border-gray-300 mb-10" />
          <div className="w-full h-fit flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl">
            {/* Left Section */}
            <div className="md:w-1/2 w-full flex flex-col gap-4">
              <h2 className="text-3xl font-semibold text-gray-900">
                What's Trello?
              </h2>
              <p className="text-base text-gray-700 w-110   leading-relaxed">
                Trello lets you work more collaboratively and get more done.
                Trello’s boards, lists, and cards enable you to organize and
                prioritize your projects in a fun, flexible, and rewarding way.
              </p>

              <div className="flex items-center flex-wrap gap-4 mt-2">
                <Link
                  to="/signUp"
                  className="bg-[#669DF1] text-base text-black font-medium py-3 px-6 rounded hover:bg-[#8FB8F6] transition-colors duration-300"
                >
                  Sign up – it's Free
                </Link>
                <Link
                  to="/"
                  className="underline decoration-[#A9ABAF] text-base font-normal text-[#A9ABAF] hover:text-gray-600 transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>
            

            {/* Right Section */}
            <div className="md:w-1/2 w-50 flex justify-center">
              <img
                src={Eng1}
                alt="Trello engineering"
                className="w-70 ml-10 -mt-10 h-auto rounded-lg object-cover"
              />
            </div>
          </div>
          <hr className="mt-15 border-t-1 border-gray-300 mb-10" />
          <div className="w-full h-fit flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl mt-10">
            {/* Left Section */}
            <div className=" flex  gap-3">
              <p className="text-xs text-gray-700  w-170 leading-relaxed">
                From scrum to sprints, we've got your development teams covered with software development templates from the Trello community. 
                You’ve got complex problems to figure out and pesky bugs to decode, so let Trello take the stress out of your engineering workflow. With Trello software development templates, 
                it’s easy to plan out your sprints, add cards to the backlog, and move work from doing to done. Customize any engineering board with Power-Ups to to set backlog limits, assign story points, 
                and even celebrate when tasks are shipped. Whether it’s learning to code, adopting Scrum or Kanban, or holding retrospectives as a team, Trello helps engineering teams deliver.
              </p>
              <img  src={Engtemplogo} alt="Trello engineering" className=" ml-10 h-25 w-25"/>
            </div> 
          </div>
        </div>
    </div>
    
    </>
  )
}

export default EngineeringTemplet;
