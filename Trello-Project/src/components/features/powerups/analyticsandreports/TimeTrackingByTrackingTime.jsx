import React from 'react'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'
import img1 from "../../../../assets/trackingtimeimg1.png"
import img2 from "../../../../assets/trackingtimeimg2.gif"
import img3 from "../../../../assets/trackingtimeimg3.png"
import img4 from "../../../../assets/habittrackimg4.svg"
import img5 from "../../../../assets/habittrackimg5.svg"
import img6 from "../../../../assets/trackingtimeimg6.png"
import { CiMail } from 'react-icons/ci'
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'

const TimeTrackingByTrackingTime = () => {
  const bestFor=[
    {
      h:<font className='font-semibold'>Freelancers and small business owners:</font>,
      p:<font> who need to keep track of their time for billing and invoicing purposes. By using the tool, they can easily track the time they spend on each project and task, and generate detailed reports to share with clients or use for accounting purposes.</font>
    },
    {
      h:<font className='font-semibold'>Project managers and team leaders:</font>,
      p:<font>who need to manage their team’s time and projects efficiently. With TrackingTime, they can assign tasks and collaborate with team members in real-time in Trello, making it easier to keep projects on schedule and within budget.</font>
    },
    {
      h:<font className='font-semibold'>Remote workers and distributed teams: </font>,
      p:<font>it can be challenging to keep track of their time and collaborate effectively with team members who are not in the same location. TrackingTime can help by providing a centralized platform for time reporting, while using collaborating in Trello.</font>
    }
  ]
  const installingSteps=[
    'Open Trello and log in to your account',
    'Click on the board where you want to install the TrackingTime power-up.',
    'Click on the “Power-Ups” button in the top right corner of the screen.',
    'In the search bar, type “TrackingTime” and press Enter.',
    'Click on the “Add” button next to the TrackingTime power-up.',
    'Follow the on-screen instructions to connect your TrackingTime account to Trello.',
    `Once the power-up is installed, you’ll see a new button labeled “Track Time” on each card in your Trello board. Click on this button to start tracking time for that card.`
  ]
  return (
    <div>
       <>
      <NavBar />
      <div className="ml-75 mt-10 sticky top-20 ">
        <p>
          <Link>Power-Ups</Link>/ <Link>Time tracker by Tracking Time</Link>
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
            <p className="mt-2 flex justify-center gap-3"><img className='w-5 h-5' src={img4} alt="" />Made by Tracking Time LLC</p>
            <p className="bg-gray-100 w-20 ml-25 flex justify-center gap-3"><img className='w-5 h-5' src={img5} alt="" />10,000+</p>
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
                IT & ProductManagement
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
  <p className='font-medium text-gray-600 text-left'>Time tracker by Tracking Time is in compliance with</p>
  <a href="#" className="flex items-center text-blue-500 underline gap-1 mt-1">
    <AiTwotoneLock className="w-6 h-6" />
    Trello's data and privacy practices.
  </a>
</div>

          </div>
          
        </div>
      
        <div class="w-full md:w-[70%] m-auto mb-6 ">
          <div class="flex justify-between items-center ">
           
            <h1 class="text-2xl font-bold text-black">Time tracker by Tracking Time</h1>

    
            <a href="Power-up">
              <button class="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                Add Power-up
              </button>
            </a>
          </div>

          <div className='flex flex-col gap-3'>
            
          <h1 className='text-2xl font-semibold'>Add Time Tracking to your Trello Boards!</h1>
          <p>With TrackingTime, you can easily track the time you spend on each Trello card, project, and board, giving you a better understanding of how your team is managing their time and where you need to make improvements.</p>
          <p>Simple and intuitive to use!</p>
          <div className='border-b-2 border-gray-500 pb-10'>
            <img src={img2} alt="" className='rounded-xl' />
          </div>
          <p>## Top features:</p>
          <img src={img3} alt="" />
          <h1 className='font-medium text-2xl'>Time Blocking:</h1>
          <p>Allows users to schedule and block out specific periods of time for different tasks or projects. By setting aside dedicated time for each task, users can better manage their time and ensure that they are making progress on their most important projects. Time blocking also helps to eliminate distractions and maintain focus, which can be particularly useful for users who struggle with productivity or procrastination. Additionally, TrackingTime’s time blocking feature can be synced with users’ calendars, allowing them to easily manage their schedule and avoid conflicts.</p>
          <h1 className='font-medium text-2xl'>One-click time tracking</h1>
          <p>Simple and intuitive interface that allows users to start and stop timers with just one click. This makes it easy to track the time you spend on each task or project, without the need for manual data entry or complex time tracking software.</p>
          <h1 className='font-medium text-2xl'>Time Blocking:</h1>
          <p>Detailed reports that show how much time has been spent on each task or project, as well as how team members are using their time. These reports can be customized and exported in a variety of formats, making it easy to share with clients, managers, or team members. Additionally, the tool offers insights and analytics that can help users identify areas for improvement and optimize their workflow.</p>
          <h1 className='font-medium text-2xl'>Attendance and work schedule management</h1>
          <p>Manage attendance and work schedules. Users can set up schedules for themselves or their team members, and track attendance and time off requests. This makes it easy to ensure that everyone is on the same page and that work schedules are being followed effectively. Additionally, the tool can generate reports that show attendance data and help with payroll processing.</p>
          <div className='border-b-2 p-5 flex flex-col gap-3'>
            <h1 className='font-medium text-2xl'>Best for:</h1>
            {
              bestFor.map(({h,p})=>{
                return <h1>{h}{p}</h1>;
              })
            }
            <img src={img6} alt="" />
          </div>
          
          <img src={img2} alt="" />
          
          <img src={img3} alt="" />
          <h1 className='font-semibold text-2xl'>To install the TrackingTime Trello power-up, follow these steps:</h1>
          <ol className='list-decimal'>
            {
              installingSteps.map((para)=>{
                return <li className='ml-7' key={para}>{para}</li>
              })
            }
          </ol>
          <p>That’s it! You’ve now installed the TrackingTime power-up and can start using it to track your time in Trello.</p>
          <h1 className='font-semibold text-2xl'>Links</h1>
          <div>
            <p className='text-blue-600 underline hover:cursor-pointer'>Users love us</p>
          <p className='text-blue-600 underline hover:cursor-pointer'>Our website</p>
          <p className='text-blue-600 underline hover:cursor-pointer'>Pricing</p>
          <p className='text-blue-600 underline hover:cursor-pointer'>Help center</p>
          </div>
          
          </div>
        </div>

      </section>
      <div className='mt-20'><AtlassianFooter/></div>
    </>
    </div>
  )
}

export default TimeTrackingByTrackingTime
