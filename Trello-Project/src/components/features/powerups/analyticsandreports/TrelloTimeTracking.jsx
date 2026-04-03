import React from 'react'
import NavBar from '../../../NavBar'
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'
import { Link } from 'react-router-dom'
import socket from "../../../../assets/epicslogo1.png";
import reporting from "../../../../assets/epicslogo2.png";
import email from "../../../../assets/emailharvest.png";
import info from "../../../../assets/infoharvest.png";
import img1 from "../../../../assets/imgi_1_logo.png";
import img2 from "../../../../assets/imgi_3_Apploye_Time_Tracker_Trello_Power_Up.gif"
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Data = [
    {
        id: 1,
        text: "Enable the 'Apploye Time Tracker' Power-Up inside your Trello board."
    },
    {
        id: 2,
        text: "Login to your 'Apploye' account."
    },
    {
        id: 3,
        text: "Select your organization from Apploye."
    },
    {
        id: 4,
        text: "Open your Trello card. You will see the Apploye Timer inside your card."
    },
    {
        id: 5,
        text: "Select your project from the list. (If you do not have a project, please create one in Apploye)."
    },
    {
        id: 6,
        text: "To start time tracking, click on the 'Start Tracking' button."
    },
    {
        id: 7,
        text: "To set your estimate, click on the '0 h' part in the estimate section & set your estimation for the task."
    },
    {
        id: 8,
        text: "To stop tracking, click on the 'Stop Tracking' button."
    },
    {
        id: 9,
        text: "The tracking history of each card will be shown just below the timer section."
    }
];
const TrelloTimeTracking = () => {
    return (
        <>
            <NavBar />
            <div className='flex r max-w-5xl  mx-auto gap-9 px-6 py-1'>
                {/* Left */}
                <div className=" px-4 sticky top-4 h-full md:px-8 py-1 ">
                    <div className="max-w-xl  mx-auto mt-10 mb-4  ">
                        <p className="text-sm">
                            <Link to="/power-ups" className="text-blue-600">
                                Power-Ups
                            </Link>{" "}
                            /{" "}
                            <Link
                                to="/power-ups/671a939ace67d0b570f20d3f"
                                className="text-blue-600"
                            >
                                Trello Time Tracking by Apploye
                            </Link>
                        </p>
                    </div>
                    <div className="w-70 flex flex-col sticky space-y-5 mb-10 mx-auto">

                        <img
                            src={img1}
                            alt=" "
                            className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
                        />

                        <div>
                            <p className="text-gray-700 font-medium flex items-center gap-1">
                                <img src={socket} className="w-4 h-4" />
                                Made by Apploye Inc.
                            </p>

                            <div className="inline-flex items-center gap-1 bg-gray-300 text-sm px-3 rounded mt-2">
                                <img src={reporting} className="w-4 h-4" />
                                1,000 +
                            </div>
                        </div>
                        <hr className="border-gray-300 w-full md:w-60" />

                        <div>
                            <h3 className="font-semibold mb-2">Categories</h3>

                            <div className="flex flex-wrap gap-2">
                                <span className="border px-3 py-1 rounded text-xs hover:bg-gray-200">
                                    Automation
                                </span>

                                <span className="border px-3 py-1 rounded text-xs hover:bg-gray-200">
                                    Analytics & reporting
                                </span>
                            </div>
                        </div>

                        <hr className="border-gray-300 w-full md:w-60" />

                        <div className="text-sm text-gray-600 space-y-2">
                            <p className="flex items-center gap-2 hover:underline cursor-pointer">
                                <img src={email} className="w-4 h-4" />
                                Contact support
                            </p>

                            <p className="flex items-center gap-2 hover:underline cursor-pointer">
                                <img src={info} className="w-4 h-4" />
                                Privacy policy
                            </p>
                        </div>

                        <hr className="border-gray-300 w-full md:w-60" />

                        <p className="text-m text-gray-600">
                            <img
                                src="https://trello.com/assets/ae7e63776f2f61b39c2b.svg"
                                className="inline w-4 h-4 mr-1"
                            />
                            Trello Time Tracking by Apploye is in compliance with
                            <span className="text-blue-600 underline cursor-pointer">
                                {" "}Trello's data and privacy practices
                            </span>
                        </p>
                        <hr className="border-gray-300 w-full md:w-60" />
                    </div>
                </div >
                {/* Right */}
                <div className="flex-1 pt-20 px-4 md:px-8">
                    <div className="max-w-3xl mx-auto">

                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-[22px] font-bold ">
                                Trello Time Tracking by Apploye
                            </h1>

                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                Add Power-Up
                            </button>
                        </div>
                        <p className="text-gray-700 mb-6">Connect <span className="text-blue-600 underline cursor-pointer">"Trello Time Tracking" </span> by Apploye power up to make project & time management smooth as well as effortless.
                            Apploye is a #1 Intelligent <span className="text-blue-600 underline cursor-pointer">Time Tracking App</span> for In Office,
                            Mobile and Remote Teams. That increases the productivity of your team by up to 20%.
                        </p>
                        <h2 className="text-[22px] font-bold mb-3">How it works</h2>
                        <div className='mt-8'>
                            <div className="w-[600px] h-[380px] relative  flex items-center justify-center  text-gray-400">
                                <div className=" bg-black rounded">
                                    <img src={img2} alt="GIF Preview" className="w-[600px] h-[360px] " />
                                    <div className="absolute top-6 right-3 bg-gray-500 rounded-md p-1">
                                        <AiOutlineInfoCircle className="text-white text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p>The Apploye Time Tracker  Power-Up for Trello helps work with unlimited Trello cards and track the hours accurately working on several cards in a day. Ensure your business growth & stay one step ahead with Apploye Time Tracker Power-up for Trello.  </p>
                            <ul className='list-disc ml-7'>
                                <li>Enable Apploye Time Tracker Power-up for Trello to keep track of your team’s work progress and time for each project & task.</li>
                                <li>Generate insightful reports on any cards. Invoice your clients as well as generate payroll for each employee based on working hours.</li>
                                <li>Stop wasting time switching between apps. No need to leave Trello.</li>
                            </ul>
                            <p className='mt-4'>
                                With Apploye  Time Tracker Power-Up, take your Trello experience to the next level and improve your team’s productivity.
                            </p>
                        </div>
                        <div className='mb-3 mt-8'>
                            <h2 className="text-[22px] font-bold ">What next?</h2>
                            <p className='mt-3'>Please follow the instructions below to get your Power-up on your Trello board.</p>
                            <div>
                                {Data.map((item) => (
                                    <ul className='list-disc ml-5'>
                                        <li> <span key={item.id} >
                                            {item.text}
                                        </span>
                                            <span className="text-blue-500 underline cursor-pointer">{item.link}</span>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                        <div className='mb-3 mt-8'>
                            <h1 className='text-[22px] font-bold'>Our users ❤️ Apploye</h1>
                            <p className='mt-3'>⭐ Great for planning and tracking the productive time spent by the development & sales team on different projects and activities. Perfect for understanding what the real cost of implementing a project inside the team. The UI is friendly, you quickly understand how to use the product, and perks like offline sync make it seamless to use.</p>
                            <p className='mt-3'>**Florin T. Founder, NarimSoft LTD. **</p>
                            <p className='mt-3'>⭐ I am using Apploye for my side business at DouglasAcademy based in Mississauga Canada. We teach kids Robotics and Coding classes and I have an army of teachers who deliver classes online and at different schools cross Canada. Before Aployee we didn't have visibility on any of our teachers. Now all our teachers are using Apploye and we can report on their locations to make sure what time did they arrive to schools that they have to teach at. Our total productivity grew by 28% in less than a year. Thank you Apploye :-)</p>
                            <p className='mt-3 font-semibold'>Mohammad D. Co Founder, DouglasAcademy </p>
                            <p className='mt-3'>If you have any feature suggestions or face problems, don't hesitate to get in touch with us by sending an email to <span className="text-blue-500 underline cursor-pointer">support@apploye.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 mt-10">
                <AtlassianFooter />
            </div>
        </>
    )
}

export default TrelloTimeTracking
