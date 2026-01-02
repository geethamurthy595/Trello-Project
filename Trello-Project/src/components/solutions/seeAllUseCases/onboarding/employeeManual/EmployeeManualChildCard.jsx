import React from 'react'
import { LuListFilter } from "react-icons/lu";
import { BiWorld } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { PiGreaterThan } from "react-icons/pi";
import employeebg from "../../../../../assets/employeebg.jpg";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

import taco from '../../../../../assets/taco.png'
import download from '../../../../../assets/download.svg'
import download1 from '../../../../../assets/download1.svg'
import twodogs from '../../../../../assets/twodogs.jpg'
import im1 from '../../../../../assets/im1.png'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import NavBar from '../../../../NavBar'
import im2 from '../../../../../assets/im2.png'
import im3 from '../../../../../assets/im3.png'
import im4 from '../../../../../assets/im4.png'
import im5 from '../../../../../assets/im5.png'
import im6 from '../../../../../assets/im6.jpg'
import im7 from '../../../../../assets/im7.png'
import im8 from '../../../../../assets/im8.jpg'
import im9 from '../../../../../assets/im9.jpg'

const EmployeeManualChildCard = ({ preview = false }) => {
  return (
    <div>
      {
        preview ? <></> : <NavBar />
      }

      <div
        className={`w-full h-15 flex items-center shadow-md fixed top-[64px]  bg-opacity-40 backdrop-blur-sm z-10   bg-pink-50 ${preview ? "relative" : "sticky top-0"
          }`}
      >
        <div className="w-full    m-auto flex justify-between items-center ">
          <div className=" flex gap-4 items-center">
            <h1 className="text-[#172B4D] text-xl ml-4 font-semibold leading-normal">
              Employee Manual
            </h1>
            <p className="bg-gray-300 bg-opacity-40 text-[#172b4d] rounded text-base w-fit px-1 flex items-center justify-center">
              Template
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaUserCircle className='text-2xl text-[#172B4D] hover:bg-gray-200 cursor-pointer rounded ' />
            <LuListFilter className="text-2xl text-[#172B4D] hover:bg-gray-200 cursor-pointer rounded " />
            <BiWorld className="text-2xl text-[#172B4D] hover:bg-gray-200  cursor-pointer rounded " />
            <HiOutlineDotsHorizontal className='text-2xl text-[#172B4D] hover:bg-gray-200  cursor-pointer rounded' />
          </div>
        </div>
      </div>{" "}
      <main
  className={`w-full ${preview ? "h-full" : "h-[95vh] "}
    bg-cover bg-center rounded overflow-x-auto`}
  style={{ backgroundImage: `url(${employeebg})` }}
>
        {/* Header */}

        <br />
        <div className='flex gap-4 mt-1 overflow-x-auto w-600 overflow-auto '>
          {/* card1 */}
          <div className="bg-gray-100 w-72 rounded-xl  p-4 flex flex-col h-100 space-y-3 shadow-md">
            <div className="flex items-center justify-between border-b pb-2 ">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                <span>On Your First day</span>

              </h2>
              <span className="text-gray-400 text-lg cursor-pointer flex ">
                <HiArrowSmRight />
                <HiArrowSmLeft />

              </span>
            </div>

            <div className='hover:border hover: border-blue-600   rounded   '>
              <img src={taco} alt="" />
              <p>New Employee - Read On Your First Day</p>
              <div className='flex bg-white-400'><img src={download} />
                <img src={download1} />1</div>
            </div>
          </div>
          {/* CARD2 */}
          <div class="bg-gray-100 h-130 w-80 rounded-xl  p-3 shadow-md overflow-y-auto flex flex-col">
            <div className="flex">
              <h2 class="text-lg font-semibold  text-gray-800 mb-3">Benefits</h2>
              <span className="text-gray-400 text-lg cursor-pointer flex  ml-35 mt-1.5">
                <HiArrowSmRight />
                <HiArrowSmLeft />
              </span>
            </div>
            <div class="bg-white rounded-xl  p-3 mb-4 shadow-sm border border-gray-200 ">
              <p class="text-sm font-semibold text-gray-800 mb-3">
                We offer full time employees a range of great benefits! Learn all about them below:
              </p>

            </div>

            <div class="bg-white rounded-xl  p-3 h-19 -mt-3 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Health
                <div className='flex mt-2'>
                  <img src={download} alt="" /> <img src={download1} alt="" />
                </div>
              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Dental
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Disability Insurance
                <img src={download} alt="" />

              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-70 mt-2 shadow-sm border border-gray-200">
              <img src={twodogs} alt="" />
              <p class="text-sm font-semibold text-gray-800">
                family
                <div className='flex mt-2'>
                  <img src={download} alt="" /> <img src={download1} alt="" />1
                </div>
              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Primary mobile devices
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Gym
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-70 mt-2 shadow-sm border border-gray-200">
              <img src={im1} alt="" />
              <p class="text-sm font-semibold text-gray-800">
                Education
                <img src={download} alt="" />

              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Immigration legal services
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Expenses
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Retirement/401(k)
                <img src={download} alt="" />

              </p>
            </div>

          </div>
          {/* Card3 */}
          <div class="bg-gray-100 h-130 w-80 overflow-x-auto rounded-xl  p-3 shadow-md space-y-3 flex flex-col">
            <div className="flex">
              <h2 class="text-lg font-semibold  text-gray-800 mb-3">Vacation,Holidays,And Time off</h2>
              <span className="text-gray-400 text-lg cursor-pointer flex  ml-35 mt-1.5">
                <HiArrowSmRight />
                <HiArrowSmLeft />
              </span>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 -mt-3 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Vacation Policies
                <div className='flex mt-2'>
                  <img src={download} alt="" /> <img src={download1} alt="" />
                </div>
              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                sick leave
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Trello company holidays
                <img src={download} alt="" />

              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Reasonable work Schedule
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Jury duty pay
                <img src={download} alt="" />

              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Unpaid Time Off
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Parental leave policy
                <img src={download} alt="" />

              </p>
            </div>

          </div>
          {/* Card4 */}
          <div class="bg-gray-100 h-100 w-80 overflow-y-auto rounded-xl  p-3 shadow-md  flex flex-col">
            <div className="flex">
              <h2 class="text-lg font-semibold  text-gray-800 mb-3">Travel, Conferences & DevDollars</h2>
              <span className="text-gray-400 text-lg cursor-pointer flex  ml-35 mt-1.5">
                <HiArrowSmRight />
                <HiArrowSmLeft />
              </span>
            </div>

            <div class="bg-white rounded-xl  p-3 h-35  -mt-3 shadow-sm border border-gray-200">
              <img src={im2} className='h-15 w-15 ml-25 ' />
              <p class="text-sm font-semibold text-gray-800">
                Why conferences and professional development?
                <div className='flex mt-2'>
                  <img src={download} alt="" />
                </div>
              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-35 mt-2 shadow-sm border border-gray-200">
              <img src={im3} className='h-15 w-15 ml-25 ' />
              <p class="text-sm font-semibold text-gray-800">
                How it works.
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Speaking at conferences
                <img src={download} alt="" />

              </p>
            </div>

          </div>
          {/* Card5 */}
          <div class="bg-gray-100 h-130 w-80 overflow-y-auto rounded-xl  p-3 shadow-md  flex flex-col">
            <div className="flex">
              <h2 class="text-lg font-semibold  text-gray-800 mb-3">Other Travel</h2>
              <span className="text-gray-400 text-lg cursor-pointer flex  ml-35 mt-1.5">
                <HiArrowSmRight />
                <HiArrowSmLeft />
              </span>
            </div>

            <div class="bg-white rounded-xl  p-3 h-19 -mt-3 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Best Practices and Guidelines
                <div className='flex mt-2'>
                  <img src={download} alt="" />
                </div>
              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Travel Expenses and Reimbursements
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Flights
                <img src={download} alt="" />

              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-30 mt-2 shadow-sm border border-gray-200">
              <img src={im4} alt="" className='h-15 w-15 ml-25 ' />
              <p class="text-sm font-semibold text-gray-800">
                Lodging
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Meals
                <img src={download} alt="" />

              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Taxis
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Rental cars
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Flexible Stay
                <img src={download} alt="" />

              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Travel Documentation
                <img src={download} alt="" />

              </p>
            </div>


            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Miscellaneous Reimbursable Expenses
                <img src={download} alt="" />

              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Miscellaneous Non-Reimbursable Expenses
                <img src={download} alt="" />

              </p>
            </div>



          </div>
          {/* Card6 */}
          <div class="bg-gray-100 h-130 w-80 overflow-y-auto rounded-xl  p-3 shadow-md  flex flex-col">
            <div className="flex">
              <h2 class="text-lg font-semibold  text-gray-800 mb-3">Trello HQ</h2>
              <span className="text-gray-400 text-lg cursor-pointer flex  ml-35 mt-1.5">
                <HiArrowSmRight />
                <HiArrowSmLeft />
              </span>
            </div>

            <div class="bg-white rounded-xl  p-3 h-65 -mt-3 shadow-sm border border-gray-200">
              <img src={im5} alt="" className='' />
              <p class="text-sm font-semibold text-gray-800">
                Lunch
                <div className='flex mt-2'>
                  <img src={download} alt="" /> <img src={download1} alt="" />1
                </div>
              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-65 mt-2 shadow-sm border border-gray-200">
              <img src={im6} alt="" className='' />
              <p class="text-sm font-semibold text-gray-800">
                Biking to work
                <div className='flex mt-2'>
                  <img src={download} alt="" /> <img src={download1} alt="" />1
                </div>
              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-65 mt-2 shadow-sm border border-gray-200">
              <img src={im7} alt="" className='' />
              <p class="text-sm font-semibold text-gray-800">
                Free Metrocard
                <div className='flex mt-2'>
                  <img src={download} alt="" /> <img src={download1} alt="" />1
                </div>
              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-65 mt-2 shadow-sm border border-gray-200">
              <img src={im8} alt="" className='' />
              <p class="text-sm font-semibold text-gray-800">
                The Shower room.
                <div className='flex mt-2'>
                  <img src={download} alt="" /> <img src={download1} alt="" />1
                </div>
              </p>
            </div>

          </div>
          {/* Card7 */}
          <div class="bg-gray-100 h-130 w-80 overflow-y-auto rounded-xl  p-3 shadow-md  flex flex-col">
            <div className="flex">
              <h2 class="text-lg font-semibold  text-gray-800 mb-3">Working Remotely For Trello!</h2>
              <span className="text-gray-400 text-lg cursor-pointer flex  ml-35 mt-1.5">
                <HiArrowSmRight />
                <HiArrowSmLeft />
              </span>
            </div>


            <div class="bg-white rounded-xl  p-3 h-19 -mt-3 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Going Remote
                <div className='flex mt-2'>
                  <img src={download} alt="" />
                </div>
              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-28 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Remote Work Policy (Applies to temporary and permanent remote work.)
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Remote Benefits for US Employees
                <img src={download} alt="" />

              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Remote Benefits for International Employees
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <img src={im9} alt="" className='' />
              <p class="text-sm font-semibold text-gray-800">
                Coming to HQ
                <img src={download} alt="" />

              </p>
            </div>
            
          </div>
          {/* Card8 */}
          <div class="bg-gray-100 h-130 w-80 overflow-y-auto rounded-xl  p-3 shadow-md  flex flex-col">
            <div className="flex">
              <h2 class="text-lg font-semibold  text-gray-800 mb-3">Misc.</h2>
              <span className="text-gray-400 text-lg cursor-pointer flex  ml-35 mt-1.5">
                <HiArrowSmRight />
                <HiArrowSmLeft />
              </span>
            </div>


            <div class="bg-white rounded-xl  p-3 h-19 -mt-3 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Sexual Harassment Policy
                <div className='flex mt-2'>
                  <img src={download} alt="" />
                </div>
              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                2FA All The Things!
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Brand Book
                <img src={download} alt="" />

              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Compensation
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Training on how to use Help Scout
                <img src={download} alt="" />

              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Regarding UGC (User Generated Content)
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Leaving the company
                <img src={download} alt="" />

              </p>
            </div>
            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Need a link?
                <img src={download} alt="" />

              </p>
            </div>

            <div class="bg-white rounded-xl  p-3 h-19 mt-2 shadow-sm border border-gray-200">
              <p class="text-sm font-semibold text-gray-800">
                Assorted Policies
                <img src={download} alt="" />

              </p>
            </div>

          </div>

        </div>

      </main>
    </div>
  )
}

export default EmployeeManualChildCard;