import React from 'react'
import NavBar from '../../../NavBar'
import img1 from "../../../../assets/googleimg1.png"
import img2 from "../../../../assets/googleimg2.gif"
import img4 from "../../../../assets/habittrackimg4.svg"
import img5 from "../../../../assets/habittrackimg5.svg"
import { Link } from 'react-router-dom'
import { CiMail } from 'react-icons/ci'
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'

const GoogleCalendersync1 = () => {
  return (
    <div>
      <>
      <NavBar />
      <div className="ml-75 mt-10 sticky top-20 ">
        <p>
          <Link>Power-Ups</Link>/ <Link>Google Calendar Sync</Link>
        </p>
      </div>
      <section className="flex mt-5 w-[60%] m-auto gap-16  ">
              <div class="flex w-90 h-130 justify-start sticky top-35">
                <div class="   rounded-lg    text-center">
                  <img
                    src={img1}
                    alt=""
                    className="block mx-auto w-56 h-56"
                  />
                  <p className="mt-2 flex justify-center gap-3"><img className='w-5 h-5' src={img4} alt="" />Made by Mig</p>
                  <p className="bg-gray-100 w-20 ml-25 flex justify-center gap-3"><img className='w-5 h-5' src={img5} alt="" />25000+</p>
                  <br />
                  <hr class="border-t border-gray-300"></hr>
                  <br></br>
      
                  <h1 class="text-l font-bold text-black flex justify-start">
                    Categories
                  </h1>
                  <div class="flex space-x-2">
                    <a
                      href="Analytic&reporting"
                      class="text-xs px-3 py-1 border border-gray-200 w-[140px] rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300"
                    >
                      Automation
                    </a>
                    <a
                      href="Board utilities"
                      className=" items-center text-xs px-3 py-1 border w-[120px] border-gray-200 rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300 "
                    >
                     Board Utilities
                    </a>
                  </div>
                  <br />
                  <hr class="border-t border-gray-300"></hr>
      
                  <div className="flex items-center">
                    <CiMail />
                    <a
                      href="Contact Support"
                      className="  text-xxs px-2 py-1  border-gray-200 rounded hover:underline hover:text-blue-600 transition-all duration-300 "
                    >
                      Contact Support
                    </a>
                    <br />
                  </div>
                  <div className="flex items-center">
                    <MdOutlinePrivacyTip />
                    <a
                      href=" Privacy Policy"
                      className="  text-xxs px-2 py-1  border-gray-200 rounded hover:underline hover:text-blue-600 transition-all duration-300 "
                    >
                      Privacy Policy
                    </a>
                    <br />
                  </div>
                  <hr class="border-t border-gray-300"></hr>
                <div>
                  <br />
        <p className='font-medium text-gray-600 text-left'>Google Calendar Sync stores personal data and is in compliance with</p>
        <a href="#" className="flex items-center text-blue-500 underline gap-1 mt-1">
          <AiTwotoneLock className="w-6 h-6" />
          Trello's data and privacy practices.
        </a>
      </div>
      
                </div>
                
              </div>
            
              <div class="w-full md:w-[70%] m-auto mb-6 ">
                <div class="flex justify-between items-center ">
                 
                  <h1 class="text-2xl font-bold text-black">Google Calendar Sync</h1>
      
          
                  <a href="Power-up">
                    <button class="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                      Add Power-up
                    </button>
                  </a>
                </div>
      
                <div className='flex flex-col gap-3'>
                  <p class="text-gray-700 text-base leading-relaxed text-justify mt-4">
                  Connect your Trello board to your Google calendar and never miss a deadline. It's a simple integration that helps you stay on the right track with all dated tasks present in your boards.
                </p>
                <img src={img2} alt="" />
                <h1 className='text-2xl font-semibold'>What is synced to Google Calendar? ⬇️</h1>
                <p>Only cards with filled start or due date are synced to the calendar.</p>
                <h1 className='font-medium text-2xl'>Title & description</h1>
                <p>Card title & description are shared to Google Calendar to help you easily identify specific task in a calendar view.</p>
                <h1 className='font-medium text-2xl'>Start date</h1>
                <p>Start date is shared to Google Calendar to set a event starting date.</p>
                <h1 className='font-medium text-2xl'>Due date</h1>
                <p>Due date is shared to Google Calendar to set a event ending date.</p>
                <h1 className='font-medium text-2xl'>Pricing ⬇️</h1>
                <p>We offer a free 14-day trial. The pricing starts at $2.00 monthly and depends on the usage (active synchronizers).</p>
                <div className='border border-gray-400'></div>
                <h1 className='font-semibold text-2xl'>Support</h1>
                <p>If you have any questions or problems, please don't hesitate to reach out to us at support@mig.team </p>
                <h1 className='font-semibold text-2xl'>Our website 🍃</h1>
                <p className='text-blue-600 underline hover:cursor-pointer'>Visit us at <u className='underline text-blue-400'>mig.team</u></p>
            
                </div>
              </div>
      
            </section>
            <div className='mt-20'><AtlassianFooter/></div>
      </>
    </div>
  )
}

export default GoogleCalendersync1
