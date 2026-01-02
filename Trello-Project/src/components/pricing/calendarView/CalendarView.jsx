import React from 'react'
import NavBar from "../../NavBar";
import UniversalFooter from "../../UniversalFooter";
import calender1 from "../../../assets/calender1.webp"
import calendervideo1 from "../../../assets/calendervideo1.mp4"
import calender2 from "../../../assets/calender2.webp"
import calender3 from "../../../assets/calender3.webp"
import calender4 from "../../../assets/calender4.webp"

const CalendarView = () => {
  return (
    <>
    <NavBar />
    <div className='w-full min-h-fit m-auto'>
        <div className="w-2/3 min-h-fit m-auto flex">
          <div className="w-[45%] flex pt-25 min-h-fit pb-20 ">
            <div className="p-2 pr-20">
              <h1 className="text-4xl leading-tight font-medium ">Trello Calendar view</h1>
              <p className="text-[#091e42] text-lg w-100 pt-3">
                Get an overview of what’s to come in the days, weeks, and months ahead.
              </p>
              <button className="text-[#172b4d] p-2 border-1 font-semibold  text-sm text-center bg-[#FFFFFF] mt-4 rounded-md transition-all duration-300 hover:bg-[#fdf6f6] cursor-pointer hover:border-1 border-[#f5ab0aee] hover:text-[#172b4d]">
              Get started
              </button>
            </div>
          </div>
          <div className="w-2/3 pt-10 flex items-center justify-center overflow-hidden">
            <img src={calender1} alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="w-full min-h-fit bg-gradient-to-b from-[rgb(214,38,136)] to-[rgb(255,143,115)]  bg-repeat bg-scroll bg-clip-border bg-origin-padding  mt-16">
          <div className="pt-16 w-[60%] min-h-fit m-auto text-center">
             <h2 className="text-3xl font-medium leading-snug p-4 text-[#FFFFFF]">
               Always see what work lies ahead
            </h2>
                <p className="text-center text-lg w-150 m-auto text-[#FFFFFF]">
               When your team relies on due dates and deadlines, Calendar provides a clearer view of your work while maintaining the ability to hone in on specific day-to-day details of what needs to be done.
             </p>
             <video src={calendervideo1} alt="" className="p-10 pt-13 pb-18" />
          </div>
        </div>

        <div className="w-full min-h-fit">
           <div className="w-2/3 m-auto pt-20 flex justify-between">
             <div className="w-[47%]">
               <h2 className="text-3xl w-80 border-1 leading-tight font-medium text-[#091e42]">
                 Take control of team workload
               </h2>
               <p className="w-92 text-lg text-[#091e42] pt-6 pb-10">
                Balance out assignments across your team by scheduling existing and new tasks. Arrange cards according to their due date. They’ll also display any labels, members, or checklists added to them. Check your calendar on your phone in the Trello app too.
               </p>
              </div>
              <div className="w-[55%]">
               <img src={calender2} alt="" className="w-full h-auto pl-9"/>
              </div>
            </div>
            <div className="w-2/3 m-auto pt-10 flex justify-between mb-10">
                <div className="w-[47%]">
                  <img src={calender3} alt="" className="w-full h-71" />
                </div>
             <div className="w-[50%]  pl-20">
               <h2 className="text-3xl leading-tight font-medium w-[82%]   text-[#091e42]">
                Prioritize and achieve full focus
               </h2>
               <p className=" text-lg text-[#091e42]  w-[84%] pt-6 pb-10">
                 Keep your working hours organized and productive. Zoom in to get a day-of view so you can stay focused and always know what’s coming next.
               </p>
              </div>
            </div>
            <div className="w-2/3 m-auto pt-10 flex justify-between">
              <div className="w-[47%]">
               <h2 className="text-3xl w-94  leading-tight font-medium text-[#091e42]">
                 Sync up work in third-party apps
               </h2>
               <p className="w-93 text-lg text-[#091e42] pt-6 pb-10">
                Visualize project due dates and deadlines, even on third party calendars! Easily add to other calendars in your digital life, like Google, Outlook, Apple, and more with just a few clicks.
               </p>
              </div>
              <div className="w-[55%]">
               <img src={calender4} alt="" className="w-full h-auto pl-9"/>
              </div>
            </div>
        </div>
        <div className="w-full min-h-fit bg-gradient-to-b from-[rgb(214,38,136)] to-[rgb(255,143,115)] bg-repeat bg-scroll bg-clip-border bg-origin-padding bg-transparent mt-8">
           <div className="pt-8 pl-10 w-4/5 min-h-fit m-auto text-center pb-14">
             <h2 className="text-3xl font-medium leading-snug p-2 text-[#FFFFFF]">
               Keep teamwork ahead of schedule
             </h2>
             <p className="text-center text-lg w-160 m-auto  text-[#FFFFFF] text-normal">
               Start a free trial today
             </p>
             <button
              className="text-[#172b4d] px-5 pt-[0.7rem] pb-[0.8rem] border-1 border-[#f5ab0aee] text-base text-center bg-[#FFFFFF] mt-4 rounded-md transition-all duration-300
               hover: cursor-pointer ">
               Get started
             </button>
           </div>
         </div>
      
    </div>
    <UniversalFooter />
    </>
  )
}

export default CalendarView