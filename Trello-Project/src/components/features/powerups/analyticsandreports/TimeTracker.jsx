import React from 'react'
import img1 from '../../../../assets/timetrackerimg1.png'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'
import img2 from "../../../../assets/timetrackerimg2.gif"
import img4 from "../../../../assets/timetrackerimg3.svg"
import img5 from "../../../../assets/timetrackerimg4.png"
import { CiMail } from 'react-icons/ci'
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'

const TimeTracker = () => {
    const HowToStart1=['Add the Time Tracker by TimeCamp Power-Up in Trello',`Open the Power-Up settings and choose "Edit Power-Up settings".`,'Sign in or sign up to TimeCamp']
    const HowToStart2=['Register new account','Authorize the integration',`Select the boards you'd like to allow for tracking`,'Choose card and start timer by Power-Up','Track time with pleasure :)']
    const BenifitsOfFreePlan=['one integration available - use it for Trello :)','unlimited users','unlimited projects and tasks','timesheets']
    const WhatYouGetInPaidPlans=['custom reports','invoicing','timesheet approvals',' unlimited integrations']
    const WhyUsersLoveTimeCamp=[
        {
            para1:`I've been using Timecamp as an extension to Trello and it's made life so much easier. I can track time on a project at the click of a button and stop that timer in the very same way.`,
            para2:'Ryan L., Digital Designer'
        },
        {
            para1:'I use TimeCamp with Trello and it helps tremendously to keep my project on time and under budget. Seeing how long tasks are taking allows constant evaluation and improvement.',
            para2:'Valerian B., Managing Director'
        },
        {
            para1:'There are a lot of time tracking options out there but TimeCamp provides low friction ways to get the job done. It syncs with a bunch of other project platforms which prevents the need for entering my projects in two systems.',
            para2:'Joel O., Consultant'
        }
    ]
  return (
    <div>
           <>
      <NavBar/>
      <div className="ml-75 mt-10 sticky top-20 ">
        <p>
          <Link>Power-Ups</Link>/ <Link>Time Tracker by TimeCamp</Link>
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
            <p className="mt-2 flex justify-center gap-3"><img className='w-5 h-5' src={img4} alt="" />Made by TimeCamp, Inc.</p>
            <p className="bg-gray-100 w-20 ml-25 flex justify-center gap-3"><img className='w-5 h-5' src={img5} alt="" />50,000+</p>
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
                Analytic & Reporting
              </a>
              <a
                href="Board utilities"
                className=" items-center text-xs px-3 py-1 border w-[120px] border-gray-200 rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300 "
              >
                oard Utitlities
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
  <p className='font-medium text-gray-600 text-left'>Time Tracker by TimeCamp is in compliance with </p>
  <a href="#" className="flex items-center text-blue-500 underline gap-1 mt-1">
    <AiTwotoneLock className="w-6 h-6" />
    Trello's data and privacy practices.
  </a>
</div>

          </div>
          
        </div>
      
        <div class="w-full md:w-[70%] m-auto mb-6 ">
          <div class="flex justify-between items-center ">
           
            <h1 class="text-2xl font-bold text-black">Time Tracker by TimeCamp</h1>
            <a href="Power-up">
              <button class="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                Add Power-up
              </button>
            </a>
          </div> <br />
          <h1 class="text-2xl font-bold text-black">Track time in Trello cards with one click ⏱️</h1>

          <div className='flex flex-col gap-3'>
            <p class="text-gray-700 text-base leading-relaxed text-justify mt-4">
            Enable the <u className='underline text-blue-700 hover:cursor-pointer'>TimeCamp time tracking Power-Up</u> to gain the ability to track time and generate time reports on any card. Toggle the TimeCamp button on your cards to track time automatically. Most useful for projects that need to gain insights about how much time things take to accomplish. Harvest your timesheet with TimeCamp.
          </p>
          <h1 className='text-2xl font-semibold'>How to start</h1>
          <ul className='list-disc'>
            {
            HowToStart1.map((para)=>{
                return(
                    <li key={para}>{para}</li>
                )
            })
          }
          </ul>
          <h1>If you're signing up:</h1>
          <ul className='list-disc'>
            {
                HowToStart2.map((para)=>{
                    return(
                        <li key={para}>{para}</li>
                    )
                })
            }
          </ul>
          <h1 className='font-medium text-2xl'>How it works</h1>
          <p>After enabling the Power-Up, the “Track Time” button will be added to your cards. You’ll also get the information about the time recorded for the card by different users. After the first time entry, TimeCamp Time Report will appear in the card.</p>
          <img src={img2} alt="" />
          <h1 className='font-medium text-2xl'>Use TimeCamp for free</h1>
          <p>You can use the Time Tracker Power-Up for free with the TimeCamp Free Plan. If you need more advanced features like invoicing or custom reports, check our paid plans.</p>
          <h2>Benefits of Free Plan:</h2>
          <ul>
                {
            BenifitsOfFreePlan.map((para)=>{
                return(
                   <li key={para} className='font-light'>✅{para}</li>
                )
            })
          
        }
          </ul>
        <h2>What you get in Paid Plans:</h2>
          <ul>
             {
            WhatYouGetInPaidPlans.map((para)=>{
                return(
                   <li key={para} className='font-light'>✅{para}</li>
                )
            })
          
        }
          </ul>
        <p>Read more on our <u className='underline text-blue-600 hover:cursor-pointer'>pricing</u> page.</p>
        <h1 className='font-medium text-2xl'>Why users ❤️  TimeCamp</h1>
        {
            WhyUsersLoveTimeCamp.map(({para1,para2})=>{
                return <div className=' italic'>
                    <p>{para1}</p>
                    <p>{para2}</p>
                </div>
            })
        }
          </div>
        </div>

      </section>
      <div className='mt-20'><AtlassianFooter/></div>
    </>
    </div>
  )
}

export default TimeTracker
