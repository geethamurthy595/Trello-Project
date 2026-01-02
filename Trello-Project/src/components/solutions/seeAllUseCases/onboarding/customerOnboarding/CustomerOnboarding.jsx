import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import NavBar from "../../../../NavBar";
import TrelloIconCustomer from "../../../../../assets/Trello_LogoMarkOne.svg"
import { IoEyeOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import robot from "../../../../../assets/robot.png"
import { Link } from "react-router-dom";
import powerup from "../../../../../assets/powerups.svg"
import Salesforce from "../../../../../assets/salesforceTemp.png"
import Calender from "../../../../../assets/calendartemp.svg"
import Voting from "../../../../../assets/votingtemp.svg"
import Crmble from "../../../../../assets/crmbletemp.svg"
import ContractReview from "../../../../../assets/contractReview.jpg"
import CustomerSuccessBoard from "../../../../../assets/customerSuccessBoard.jpg"
import HugoIcon from "../../../../../assets/hugoIcon.png"
import SalesPipeline from "../../../../../assets/salesPipeline.jpg"
import Scan2Cad from "../../../../../assets/Scan2Cad.png"
import AtlassianFooter from "../../../taskManagement/AtlassianFooter"
import CustomerOnboardingTemplate from "./CustomerOnboardingTemplate";

const CustomerOnboarding = () => {
  let flexdata = [
    {
      img : Salesforce,
      title : "Salesforce",
      cont : "Track your sales pipeline in Trello with cases, contacts, leads, & opportunities directly on cards."
    },
    {
      img :Calender ,
      title : "Calendar Power-Up",
      cont : "Visualize Trello cards in a calendar view."
    },
    {
      img : Voting,
      title : "Voting",
      cont : "Give power to the people, and allow users to vote on cards."
    },
    {
      img : Crmble,
      title : "Crmble",
      cont : "Gestiona la relación con tus clientes mediante la integración de correo electrónico y enlace de Whatsapp para cerrar más tratos"
    },
  ]
  let reldata = [
    {
      img : ContractReview,
      icon : TrelloIconCustomer,
      title : "Contract Review",
      desc : "by Trello team",
      cont: "Coordinate contract and security reviews with your Legal and IT Departments without email.",
      copy : "2.2K",
      views : "15.7K",
    },
    {
      img : CustomerSuccessBoard,
      icon : HugoIcon,
      title : "Customer Success Board",
      desc : "by Darren Chait, Co-Founder team @ Hugo",
      cont: "A lightweight, visual way to track customers at-a glance!",
      copy : "6.5K",
      views : "36.5K",
    },
    {
      img : SalesPipeline,
      icon : Scan2Cad,
      title : "Sales Pipeline",
      desc : "by Scan2CAD",
      cont: "A Simple and actionable way of keep tracking of your deals.",
      copy : "25K",
      views : "122.8K",
    },
  ]
  return (
    <>
      <NavBar />
      <div className="w-[74%] m-auto mt-16 flex gap-8 ">
        <div className="w-120 h-screen  bg-white sticky top-10">
          <div className="flex items-center border border-gray-200 rounded py-1 text-gray-800 px-3 w-full mb-3">
            <input
              className="w-full text-sm outline-none"
              type="text"
              name="findPowerUP"
              placeholder="Find template"
            />
            <IoSearchSharp className="text-xl text-gray-600" />
          </div>

          <div className="flex items-center gap-2  p-2 rounded mb-2  cursor-pointer">
            <FaRegStar className="text-xl" />
            <p className="w-full font-semibold text-[15px] m-0 p-0">Featured</p>
          </div>

          {/* Category List */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">Business</p>
            </div>
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">Design</p>
            </div>
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">Education</p>
            </div>
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">Engineering</p>
            </div>
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">Marketing</p>
            </div>
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">HR & operations</p>
            </div>
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">Personal</p>
            </div>
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">Productivity</p>
            </div>
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">
                Product management
              </p>
            </div>
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">
                Project management
              </p>
            </div>
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">Remote Work</p>
            </div>
            <div className="flex items-center gap-2 py-1 text-blue-700 pl-6 bg-blue-100 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-semibold text-[15px]">Sales</p>
            </div>
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">Support</p>
            </div>
            <div className="flex items-center gap-2 py-1 text-gray-800 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer">
              <p className="w-full font-normal text-[15px]">Team management</p>
            </div>
          </div>
        </div>

        <section>
          <div className="w-[825px]">
          <h1 className="flex gap-2 text-[15px]">
            <span className="hover:underline cursor-pointer">Template gallery</span> / 
            <span className="hover:underline cursor-pointer">Sales</span> /
            <span className="hover:underline cursor-pointer">Customer Onboarding</span>
          </h1>
          <div className="flex items-center justify-between bg-white pt-6">
            
            <div className="flex gap-6 justify-start items-center">
              <img src={TrelloIconCustomer} alt="" className="h-[60px] w-[60px]" />
              <div>
                <h2 className="text-[24px] text-gray-900 font-semibold">Customer Onboarding</h2>
                <p className="text-sm">Created by Trello Team</p>
                <div className="flex items-center gap-2 text-gray-700/86 font-semibold text-sm">
                  <span className="flex items-center gap-1">
                    <MdContentCopy /> 7.6K Copies
                  </span>
                  <span className="flex items-center gap-1">
                    <IoEyeOutline /> 58.3K Views
                  </span>
                </div>
                {/* Premium */}
                <p className="text-[12px] flex gap-1 text-black/60 mt-1">
                  <div className="flex">
                    <img src={robot} alt="robot"  className="h-[16px] w-[16px] gap-1 invert-[0.5] sepia-[1] saturate-[5] hue-rotate-[300deg] brightness-[1.1] contrast-[1.2]"/>
                    <span >Works best with </span>
                  </div>
                  <Link to="/premium" className="text-blue-500  underline cursor-pointer">Premium</Link>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-5">
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-gray-200">
                Share
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-blue-700">
                Use template
              </button>
            </div>
          </div>
          </div>

          <div className="mt-6">
            <h1 className="text-[20px] text-black/86 font-semibold">About this template</h1>
            <p className="mt-2 text-[15px] tracking-wide text-black/87">Enable seamless customer onboarding by inviting new customers to a shared Trello board.</p>
            <p className="mt-2 text-[15px] tracking-wide text-black/87">Create cards to share important resources like knowledge centers, guides, and customer service contact information.</p>
            <p className="mt-2 text-[15px] tracking-wide text-black/87">Add onboarding tasks for new customers as they get oriented with your product.</p>
            <p className="mt-2 text-[15px] tracking-wide text-black/87">Know when your customers might need help by having a clear view into their onboarding process.</p>
            <p className="mt-2 text-[15px] tracking-wide text-black/87">Check out our <Link to="/teams" className="text-blue-500 underline">Trello Team playbooks</Link></p>
          </div>

          <div  className="w-[809px] mt-10 mb-30 overflow-scroll">
            <CustomerOnboardingTemplate shownav = "true"/>
          </div>
          <Link to="/b/2gUieAwh" className="text-blue-500 underline pl-170">View template</Link>
          <div className="mt-6">
            <h1 className="flex gap-2 items-center font-semibold text-[20px]">
              <img src={powerup} alt="" className="h-[24px] w-[24px]" />
              <p>Power-Ups</p>
            </h1>
            <p className="mt-2 text-[17px] tracking-wide text-black/80">Add features to your boards and integrate your favorite apps right into Trello. This template works best with <Link to="/premium" className="underline text-blue-500">Premium</Link> which allows you to use unlimited Power-Ups</p>

            <div className="flex flex-wrap gap-2 w-[825px]">
              {flexdata.map( (obj)=>{
                let {img,title,cont} = obj;
                return(
                  <div className="flex flex-col gap-1 w-[264px] mt-6">
                    <div className="flex gap-2">
                      <img src={img} alt="" className="h-[32px] w-[32px]" />
                      <h1 className="font-semibold text-[17px]">{title}</h1>
                    </div>
                    <p className="text-black/80">{cont}</p>
                  </div>
                  )
                }
              )}
            </div>
            <Link to="/premium" className="flex items-center gap-2 bg-[#803FA5] mt-10 w-50 p-2 rounded-sm">
              <div className="bg-white p-1"><img src={robot} alt="" className="h-[16px] w-[16px] gap-1 invert-[0.5] sepia-[1] saturate-[5] hue-rotate-[300deg] brightness-[1.1] contrast-[1.2]" /></div>              
              <p className="text-white">Upgrade to Premium</p>
            </Link>
          </div>
          <div className="p-5 bg-[#FCEDFC] mt-6">
            <h1 className="font-semibold text-xl">Related templates</h1>
            <div className="flex gap-1 mt-3">
              {reldata.map((obj)=>{
                let {img,icon,title,desc,cont,copy,views} = obj;
                return(
                  <div className="flex flex-col gap-1">
                    <div className="relative">
                      <img src={img} alt="" className="h-[132px] w-[247px]" />
                      <div className="bg-white p-[4px] ml-2 flex flex-start rounded-sm h-[48px] w-[48px] -mt-9 shadow-md relative z-[3]">
                        <img src={icon} alt="" className="h-[45px] w-[45px]" />
                      </div>
                    </div>
                    <h1 className="font-semibold text-[16px] px-2 font-black/80">{title}</h1>
                    <p className="text-[13px] font-black/80 px-2">{desc}</p>
                    <p className="text-[13px] font-black/80 px-2 w-[223px]">{cont}</p>
                    <div className="flex px-2 text-[13px] items-center gap-2 text-gray-700/86 font-semibold text-sm">
                      <span className="flex items-center gap-1">
                        <MdContentCopy /> {copy}
                      </span>
                      <span className="flex items-center gap-1">
                        <IoEyeOutline /> {views}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
      <div className="border-b border-gray-300 mt-10 w-[90%] m-auto"></div>
      <div className="flex justify-center items-center mt-15 ">
      <select className="border border-gray-400 rounded-md px-3 py-2 text-sm w-[110px] focus:outline-none focus:ring-1 focus:ring-blue-500"
        defaultValue="English">
        <option>English</option>
        <option>Portugues</option>
        <option>Francais</option>
      </select>
    </div>
      <AtlassianFooter /> 
    </>
  );
};

export default CustomerOnboarding;
