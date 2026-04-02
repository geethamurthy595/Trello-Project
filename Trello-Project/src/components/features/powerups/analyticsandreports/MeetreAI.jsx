import React,{Fragment, useState} from 'react'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'
import img1 from '../../../../assets/meetreAi1.png'
import img4 from "../../../../assets/timetrackerimg3.svg"
import gif1 from "../../../../assets/gif1.gif"
import gif2 from "../../../../assets/gif2.gif"
import img2 from "../../../../assets/meetreAiImg2.png"
import img3 from "../../../../assets/meetreAiImg3.png"
import img5 from "../../../../assets/meetreAiImg5.png"
import { CiMail } from 'react-icons/ci'
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'
import { FaDivide } from 'react-icons/fa'

const MeetreAI = () => {
    let[state,setState]=useState(true);
    const meetreAI=[
        <><strong>Automation Engine:</strong>Set rules for auto-assignment, priority boosting, and smart labeling</>,
        <>🎯<strong>AI Task Generator:</strong> Create context-aware tasks, checklists, and dependencies</>,
        <> <strong>Team Collaboration Hub:</strong>Monitor workload, balance assignments, and track performance</>,
        <> <strong>Deep Analytics Dashboard:</strong> Gain insights into completion trends, overdue tasks, and productivity bottlenecks</>,
        <> <strong>Bulk Card Enhancement: </strong>Auto-generate descriptions, priorities, and due dates</>,
    ]
  
    const improvements=[
        'Complete Stripe payment integration (€4/month or €40/year per board)',
        'Professional dashboard with live metrics',
        'Feature gating system (Free vs Pro tiers)',
        'Fixed CORS for seamless API communication',
        'Improved board data loading and error handling'
    ]
   
    const features = [
        '✅ Dashboard Analytics (Free)',
        '✅ Deep Analytics & Reporting (Pro)',
        '✅ Automations (Pro)',
        '✅ Team Hub (Pro)',
        '✅ Settings Management (Free)'
    ]
  return (
    <div>
       <>
      <NavBar/>
      <div className="ml-50 mt-10 sticky top-20 ">
        <p>
          <Link className='hover:underline'>Power-Ups</Link>/ <Link className='hover:underline'>Task AI Intelligence by Meetreai</Link>
        </p>
      </div>
      <section className="flex mt-5 w-[75%] m-auto gap-16  ">
        <div className="flex w-90 h-130 justify-start sticky top-35">
          <div className="   rounded-lg    text-center">
            <img
              src={img1}
              alt=""
              className="block mx-auto w-56 h-56"
            />
            <p className="mt-2 flex justify-center gap-3"><img className='w-5 h-5' src={img4} alt="" />Made by Meetre AI</p>
          
            <br />
            <hr className="border-t border-gray-300"></hr>
            <br></br>

            <h1 className="text-l font-bold text-black flex justify-start">
              Categories
            </h1>
            <div className="flex space-x-2">
              <a
                href="Analytic&reporting"
                className="text-xs px-3 py-1 border border-gray-200 w-[140px] rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300"
              >
                Automation
              </a>
              <a
                href="IT & project management"
                className=" text-xs px-2 py-1 border w-[140px] border-gray-200 rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300 "
              >
                Analytics & reporting
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
          <div className="flex items-center gap-3">
  
                <AiTwotoneLock className="w-10 h-10 text-gray-600" />
                <p className="font-medium text-gray-600 text-sm text-left">
    Task AI Intelligence by Meetreai stores personal data and is in compliance with{" "}
    
    <a href="#" className="text-blue-500 underline">
      Trello's data and privacy practices
    </a>.
    
  </p>
  

</div>
 <hr className="border-t border-gray-300 mt-5"></hr>

          </div>
          
        </div>
      
        <div className="w-full md:w-[70%] m-auto mb-6 ">
          <div className="flex justify-between items-center ">
           
            <h1 className="text-3xl font-bold text-black">Task AI Intelligence by Meetreai</h1>
            <a href="Power-up">
              <button className="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                Add Power-up
              </button>
            </a>
          </div> <br />
          <div className='flex flex-col'>
            <div className='flex gap-5 border-b border-gray-400'>
            <p className={state?"text-blue-700 hover:cursor-pointer border-b":"text-black hover:cursor-pointer hover:border-b"} onClick={()=>setState(true)}>Description</p>
            <p className={!state?"text-blue-700 hover:cursor-pointer border-b":"text-black hover:cursor-pointer hover:border-b"} onClick={()=>setState(false)}>Updates</p>
          </div> <br />
          {
            state?
            <div className='flex flex-col gap-5'>
                <h1 className='text-3xl font-medium'>Meetre AI - Task Intelligence</h1>
                <p>Transform your workflow with AI Task generation, automation and insights. This power-up offers:</p>
                {
                    meetreAI.map((feature)=>{
                        return <p>{feature}</p>
                    })
                }

                <p>Feel free to reach out for any recommendation and support <a href="" className='text-blue-600 underline hover:no-underline'>info@audrex.ai</a></p>
                <div>
                    <img src={gif1} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Build custom task flow for your projects.</h1>
                    <img src={gif2} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img5} alt="" />
                </div>
            </div> 
            
              
            :
            <div className='flex flex-col gap-5'>
            <div className='rounded-xl w-135 p-3 bg-gray-100'>
                <div className='flex gap-10 mb-8'>
                    <h1 className='text-2xl font-bold'>v3.0.2 - Payments</h1>
                    <p className='text-black-300'>Dec 27, 2025</p>
                </div>
                <h3 className='font-medium text-gray-800 mb-5'>✨ Major Release - Now Production Ready</h3>
                <h3 className='font-medium text-gray-800'>🔧 Improvements:</h3>
                <ul className='list-disc ml-5'>
                    {
                    improvements.map((update)=>{
                        return <li>{update}</li>
                    })
                }
                </ul> <br />
    
                <h3 className='font-medium text-gray-800'>🎯 Features:</h3>
                <ul className=' ml-5'>
                 {
                    features.map((update)=>{
                        return <li>{update}</li>
                    })
                }
                </ul>       

            </div>
            </div>
            
        }
          </div>
        </div>
        

      </section>
      <div className='mt-30'><AtlassianFooter/></div>
    </>
    </div>
  )
}

export default MeetreAI
