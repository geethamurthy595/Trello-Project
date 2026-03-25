import React from 'react'
import NavBar from '../../../NavBar'
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'
import { Link } from 'react-router-dom'
import socket from "../../../../assets/epicslogo1.png";
import reporting from "../../../../assets/epicslogo2.png";
import email from "../../../../assets/emailharvest.png";
import info from "../../../../assets/infoharvest.png";
import img1 from "../../../../assets/imgi_1_icon-color.svg";
import img2 from "../../../../assets/imgi_3_screenshot.gif"
import img3 from "../../../../assets/imgi_4_card-back.png"
import img4 from "../../../../assets/imgi_5_sync-options.png"
import img5 from "../../../../assets/imgi_6_TeamGantt-trello.png"
import { AiOutlineInfoCircle } from 'react-icons/ai';

const TeamGrantt = () => {
    return (
        <>
            <NavBar />
            <div className='flex max-w-5xl  mx-auto gap-9 px-6 py-1'>
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
                                TeamGantt
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
                                Made by TeamGantt
                            </p>

                            <div className="inline-flex items-center gap-1 bg-gray-300 text-sm px-3 rounded mt-2">
                                <img src={reporting} className="w-4 h-4" />
                                100,000 +
                            </div>
                        </div>
                        <hr className="border-gray-300 w-full md:w-60" />

                        <div>
                            <h3 className="font-semibold mb-2">Categories</h3>

                            <div className="flex flex-wrap gap-2">
                                <span className="border px-3 py-1 rounded text-xs hover:bg-gray-200">
                                    IT & project management
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

                        </div>

                        <hr className="border-gray-300 w-full md:w-60" />

                        <p className="text-m text-gray-600">
                            <img
                                src="https://trello.com/assets/ae7e63776f2f61b39c2b.svg"
                                className="inline w-4 h-4 mr-1"
                            />
                            TeamGantt is in compliance with
                            <span className="text-blue-600 underline cursor-pointer">
                                {" "}Trello's data and privacy practices
                            </span>
                        </p>
                        <hr className="border-gray-300 w-full md:w-60" />
                    </div>
                </div >
                {/* Right */}
                <div className="flex pt-20 px-4 md:px-1">
                    <div className="max-w-4xl mx-auto">

                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-[25px] font-bold ">
                                TeamGantt
                            </h1>

                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                Add Power-Up
                            </button>
                        </div>
                        <p>The <span className='underline cursor-pointer text-blue-500'>TeamGantt</span> Power-Up gives you the ability to view and schedule your cards in a beautiful timeline.</p>
                        <p className='mt-4'>TeamGantt is the popular project scheduling tool used by thousands of customers in over 120 countries.</p>
                        <ul className='list-disc ml-5'>
                            <li>Organize cards from multiple boards into a single, beautiful gantt chart inside Trello</li>
                            <li>Add project dependencies and resourcing to Trello boards</li>
                            <li>Sync dates and completion rates across services automatically</li>
                            <li>Works in all major web browsers</li>
                        </ul>
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
                        <p className='mt-10 mb-4'>[image]</p>
                        <p className='mb-10'>[image]</p>
                         <div className='mt-8'>
                            <div className="w-[600px] h-[380px] relative  flex items-center justify-center  text-gray-400">
                                <div className=" bg-black rounded">
                                    <img src={img3} alt="GIF Preview" className="w-[600px] h-[360px] " />
                                    <div className="absolute top-6 right-3 bg-gray-500 rounded-md p-1">
                                        <AiOutlineInfoCircle className="text-white text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='mt-4 font-medium'>Two sync modes are available:</p>
                            <ul className='list-disc ml-5'>
                                <li>Auto Link</li>
                                <p>Automatically sync newly created cards and tasks from one Trello board to a single TeamGantt gantt chart. Cards are synced immediately on creation. This is the easiest and most common link type. Best if you want to have all the cards in a single board displayed in a Gantt chart.</p>
                                 <div className='mt-4'>
                            <div className="w-[600px] h-[380px] relative  flex items-center justify-center  text-gray-400">
                                <div className=" bg-black rounded">
                                    <img src={img4} alt="GIF Preview" className="w-[600px] h-[360px] " />
                                    <div className="absolute top-6 right-3 bg-gray-500 rounded-md p-1">
                                        <AiOutlineInfoCircle className="text-white text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                                <li>Manual Link</li>
                                <p>Gives you full control over when and where your cards are synced to TeamGantt. As the name implies, this sync mode requires some manual work. You will need to individually pick which cards you want to display in a timeline. This allows you to pick and choose which cards you want to see in a Gantt chart</p>
                                <ul className='list-disc'>
                                    <li>Send cards from one Trello board to multiple gantt charts</li>
                                    <li>Sync cards from multiple Trello boards to a single gantt chart</li>
                                    <li>Cards are not automatically synced on creation, allowing you to finalize a card's details before syncing to TeamGantt</li>
                                    <li>Manual Link is more hands on compared to Auto Link, but it gives you the ultimate in flexibility.</li>
                                </ul>
                            </ul>
                        </div>
                        <div className="w-[600px] mt-4 relative  flex items-center justify-center  text-gray-400">
                                <div className=" bg-black rounded">
                                    <img src={img5} alt="GIF Preview" className="w-[600px] h-full " />
                                    <div className="absolute top-6 right-3 bg-gray-500 rounded-md p-1">
                                        <AiOutlineInfoCircle className="text-white text-lg" />
                                    </div>
                                </div>
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

export default TeamGrantt
