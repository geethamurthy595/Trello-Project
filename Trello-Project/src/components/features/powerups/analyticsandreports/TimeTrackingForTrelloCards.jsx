import React, { useState } from 'react'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'
import img1 from "../../../../assets/TandMimg.png"
import img4 from "../../../../assets/timetrackerimg3.svg"
import img5 from "../../../../assets/timetrackerimg4.png"
import { CiMail } from 'react-icons/ci'
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'

const TimeTrackingForTrelloCards = () => {
    let[state,setState]=useState(true);
    const keyFs=[
        {
            h:'Simple Time Tracking:',
            p:'Add time spent in a convenient format (days, hours, minutes)'
        },
        {
            h:'Flexible Dating',
            p:' Choose the work completion date via calendar (not necessarily today)'
        },
        {
            h:'Team Collaboration:',
            p:'Ability to add entries on behalf of different board members'
        },
        {
            h:'Activity History:',
            p:'Complete log of all entries with performer and date information'
        },
        {
           h:'Data Export:',
           p:'Export time reports in CSV format with date filtering options' 
        },
        {
            h:'Visual Display:',
            p:'Badges on cards and a section on the back of cards with time information'
        },
        {
            h:'Flexible Settings:',
            p:'Options to clear cache and completely reset data when needed'
        }
    ]
    const howTm=[
        {
            h:'Simplifies employee time tracking -',
            p:'managers can easily monitor how much time is spent on projects and tasks, which is critical for companies working on a Time & Materials model.'
        },
        {
            h:'Increases process transparency –',
            p:'the entire team sees how much time is spent on specific tasks, which contributes to more open communication and efficient planning.'
        },
        {
            h:'Facilitates reporting and billing –',
            p:'the data export function to CSV allows quick generation of reports for clients or internal use, saving hours of manual work.'
        },
        {
            h:'Integrates with existing processes – ',
            p:`the Power-Up is embedded in the familiar Trello interface, requiring no switching between different services and maintaining a convenient workflow.`
        },
        {
            h:'Contributes to more accurate planning – ',
            p:'based on historical data on team time spent, teams can more accurately estimate future tasks, improving project planning quality.'
        }
    ]
    const newFs=['Configurable hours per day: choose between 8-hour workday or 24-hour calendar day','Optimized board statistics: 10+ times faster for large boards','Automatic badge updates when settings change']
    const techImps=['Enhanced caching with smart invalidation','Batch queries for statistics']

  return (
    <div>
      <>
      <NavBar/>
      <div className="ml-75 mt-10 sticky top-20 ">
        <p>
          <Link>Power-Ups</Link>/ <Link>T&M: Time tracking for Trello cards</Link>
        </p>
      </div>
      <section className="flex mt-5 w-[60%] m-auto gap-16  ">
        <div className="flex w-90 h-130 justify-start sticky top-35">
          <div className="   rounded-lg    text-center">
            <img
              src={img1}
              alt=""
              className="block mx-auto w-56 h-56"
            />
            <p className="mt-2 flex justify-center gap-3"><img className='w-5 h-5' src={img4} alt="" />Made by Bank Blender</p>
            <p className="bg-gray-100 w-20 ml-25 flex justify-center gap-3"><img className='w-5 h-5' src={img5} alt="" />100+</p>
            <br />
            <hr className="border-t border-gray-300"></hr>
            <br></br>

            <h1 className="text-l font-bold text-black flex justify-start">
              Categories
            </h1>
            <div className="flex space-x-2 flex-col">
              <a
                href="Analytic&reporting"
                className="text-xs px-3 py-1 border border-gray-200 w-[140px] rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300"
              >
                HR and Operations
              </a>
              <a
                href="IT & project management"
                className=" text-xs px-2 py-1 border w-[140px] border-gray-200 rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300 "
              >
                Analytic & Reporting
              </a>
            </div>
            <br />
            <hr className="border-t border-gray-300"></hr>

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
            <hr className="border-t border-gray-300"></hr>
          <div>
            <br />
  <p className='font-medium text-gray-600 text-left'>T&M: Time tracking for Trello cards is in compliance with</p>
  <a href="#" className="flex items-center text-blue-500 underline gap-1 mt-1">
    <AiTwotoneLock className="w-6 h-6" />
    Trello's data and privacy practices.
  </a>
</div>

          </div>
          
        </div>
      
        <div className="  w-full md:w-[70%] m-auto mb-6 ">
          <div className="flex justify-between items-center ">
           
            <h1 className="text-2xl font-bold text-black">T&M: Time tracking for Trello cards</h1>
            <a href="Power-up">
              <button className="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                Add Power-up
              </button>
            </a>
          </div> <br />
          <div className='flex flex-col'>
            <div className='flex gap-5 border-b border-gray-400'>
            <p className={state?"text-blue-700":"text-black"} onClick={()=>setState(true)}>Description</p>
            <p className={!state?"text-blue-700":"text-black"} onClick={()=>setState(false)}>Updates</p>
          </div> <br />
          {
            state?
            <div>
                <h1 className='text-2xl font-medium'>T&M Power-Up for Trello Description</h1>
                <p className=''>T&M is a Trello Power-Up for easy time tracking on tasks. It allows users to add, monitor, and analyze time spent on cards.</p>
                <div>
                    <h1 className='text-xl font-medium'>Key Features:</h1>
                    {
                        keyFs.map(({h,p})=>{
                            return(
                                <li><h4 className='font-semibold'>{h}</h4><p>{p}</p></li>
                            )
                        })
                    } <br />
                    <p>The Power-Up has been designed with teams in mind who need to keep detailed records of time spent on tasks.</p>
                </div> <br />
                <div>
                    <h1 className='text-xl font-medium'>What this Power-Up adds to Trello functionality:</h1>
                    <p>T&M extends Trello's standard features by providing a comprehensive time tracking system that doesn't exist in the base product. Unlike simple checklist and date tracking, T&M offers detailed monitoring of time spent with flexible parameters.</p>
                </div><br />
                <div>
                    <h1 className='text-xl font-medium'>How T&M improves the work of Trello:</h1> 
                    {
                        howTm.map(({h,p})=>{
                            return(
                                <li><h1>{h}</h1><p>{p}</p></li>
                            )
                        })
                    }
                    <br />
                    <p>Users, especially in consulting companies, agencies, and development teams, get a simple but powerful time tracking tool that naturally complements Trello's existing capabilities and significantly increases the efficiency of working with project boards.</p>
                </div><br />
                <h1 className='text-xl font-medium'>This Power-Up will be free</h1> <br />
                <div>
                    <p>The T&M Power-Up is provided completely free of charge to all Trello users, without any paid subscriptions or premium features. All functionality, including time tracking, data export, and team collaboration, is available without limitations.</p>
                    <p>Our goal is to make effective time tracking accessible to all teams, regardless of their size or budget. We believe this will help improve workflows and increase productivity for the Trello community.</p>
                    <p>The Power-Up will be maintained and updated on a regular basis while maintaining its free status.</p>
                </div> <br />
                <h1 className='text-xl font-medium'>The Power-Up does not require creating an account on a third-party platform</h1> <br />
                <div>
                    <p>The T&M Power-Up works entirely within the Trello ecosystem and does not require registration on any external platforms or services. All data is stored exclusively in standard Trello storage accessible through the Power-Up API.</p>
                    <p>Users only need a standard Trello account to work with all the extension's features. The Power-Up does not collect or transmit data to external servers, ensuring complete confidentiality of information and no dependency on third-party services.</p>
                    <p>The entire setup and usage process takes place directly in the Trello interface without the need for additional authorization or registration.</p>
                </div>
            </div>
            :
            <div className='rounded-xl h-80 w-135 p-3 bg-gray-100'>
                <div className='flex gap-10'>
                    <h1 className='text-xl font-bold'>Version 3.0 - Flexible Time Display</h1>
                    <p className='text-black-300'>22 Dec 2025</p>
                </div>
                <h1 className='font-medium'>New Features:</h1>
                <div className='pl-7'>
                    {
                        newFs.map((list)=>{
                            return (
                                <li key={list}>{list}</li>
                            )
                        })
                    }
                </div>
                <h1 className='font-medium'>Technical Improvements:</h1>
                <div className='pl-7'>
                    {
                        techImps.map((list)=>{
                            return(
                                <li key={list}>{list}</li>
                        )
                        })
                    }
                </div>
                <p>Now you can easily switch between "2d 1h" and "17h" display modes depending on your needs!</p>
            </div>
        }
          </div>
        </div>
        

      </section>
      <div className='mt-25'><AtlassianFooter/></div>
    </>
    </div>
  )
}

export default TimeTrackingForTrelloCards
