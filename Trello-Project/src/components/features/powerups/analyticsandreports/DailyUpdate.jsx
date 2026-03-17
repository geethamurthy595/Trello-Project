import NavBar from '../../../NavBar'
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'
import { Link } from 'react-router-dom'
import socket from "../../../../assets/epicslogo1.png";
import reporting from "../../../../assets/epicslogo2.png";
import email from "../../../../assets/emailharvest.png";
import info from "../../../../assets/infoharvest.png";
import img1 from "../../../../assets/imgi_1_daily-updates.png"
import { AiOutlineInfoCircle } from 'react-icons/ai';
import img3 from '../../../../assets/imgi_4_du-report.png'
import img2 from '../../../../assets/imgi_3_du-enter.png'

const DailyUpdate = () => {
    return (
        <>
            <NavBar />
            <div className='flex r max-w-5xl  mx-auto gap-12 px-6 py-1 '>
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
                                Epics by Rogue Shadows
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
                                Made by Kolekti
                            </p>

                            <div className="inline-flex items-center gap-1 bg-gray-300 text-sm px-3 rounded mt-2">
                                <img src={reporting} className="w-4 h-4" />
                                5000+
                            </div>
                        </div>
                        <hr className="border-gray-300 w-full md:w-60" />

                        <div>
                            <h3 className="font-semibold mb-2">Categories</h3>

                            <div className="flex flex-wrap gap-2">
                                <span className="border px-3 py-1 rounded text-xs hover:bg-gray-200">
                                    Board utilities
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
                            Daily Updates may store personal data and is not in compliance with
                            <span className="text-blue-600 underline cursor-pointer">
                                {" "}Trello's data and privacy practices
                            </span>
                        </p>
                        <hr className="border-gray-300 w-full md:w-60" />
                    </div>
                </div >
                {/* Right */}
                <div className="flex-1 pt-20 px-4 md:px-8">
                    <div className="max-w3xl mx-auto">

                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-[27px] font-bold ">
                                Daily Updates
                            </h1>

                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                Add Power-Up
                            </button>
                        </div>
                        <div>
                            <h1 className='text-[24px] font-medium'>🔄 Get your team on the same page with a daily update##</h1>
                        </div>
                        <div>
                            <p className="text-gray-700 mt-4">When you’re working in a distributed team it can be hard to keep on top of who’s doing what. We usually separate our tools for managing the work from the way we communicate. Daily Updates for Trello lets you stay in context.</p>
                            <p className="text-gray-700 mt-3">Every day each team member gets asked three questions:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2">
                                <li>What did you do yesterday?</li>
                                <li>What are you doing today?</li>
                                <li>What issues are you currently facing?</li>
                            </ul>
                            <p className="text-gray-700 mt-3">The day’s answers will appear just below so you can see how your team is going.</p>
                        </div>
                        <div className='mt-8 '>
                            <div className="w-[600px] h-[380px] relative  rounded flex items-center justify-center  text-gray-400">
                                <div className=" bg-black rounded">
                                    <img src={img2} alt="GIF Preview" className="w-[580px] h-[360px] " />
                                    <div className="absolute top-6 right-3 bg-gray-500 rounded-md p-1">
                                        <AiOutlineInfoCircle className="text-white text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>You can search for previous day's answers and export them into a spreadsheet (Excel).</p>
                        <div className='mt-8 mb-10 '>
                            <div className="w-[600px] h-[380px] relative  rounded flex items-center justify-center  text-gray-400">
                                <div className=" bg-black rounded">
                                    <img src={img3} alt="GIF Preview" className="w-[580px] h-[410px] " />
                                    <div className="absolute top-6 right-3 bg-gray-500 rounded-md p-1">
                                        <AiOutlineInfoCircle className="text-white text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>This tool is useful for any kind of team, but it’s especially helpful for: remote, distributed, software, marketing, agile, HR, legal and support teams. Whether you "stand up", sit-down, stand-up, check in, huddle, scrum, status update, or whatever you call it, Daily Updates helps your teams stay in sync.</p>
                        <div className='border-1 border-gray-400 mt-10'></div>
                        <div className='mt-10'>
                            <h1 className='font-semibold'>Pricing:</h1>
                            <p>All users start on a 14-day free trial and can upgrade anytime to one of the below plans.</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Annual billing: $48/year ($4/month) for one board with unlimited members 
                                    OR</li>
                                <li>Monthly billing: $5/month for one board with unlimited members
We don’t charge per team member — you only pay for the boards you purchase a license for.</li>
                            </ul>
                            <p className="font-semibold mt-2">
                                Looking to purchase this Power-Up for 5+ boards? <span className="text-blue-500 underline">Get in touch with us</span> for pricing details.
                            </p>
                            <p className="font-semibold mt-2">
                                FREE Trello Tutorials
                            </p>
                            <p>Looking to do even more with Trello? Learn Trello tips, tricks, and automation with our <span className="text-blue-500 underline">free video tutorials</span></p>
                        </div>
                        <div className=' mt-10'>
                            <h1 className='text-[25px] font-semibold'>Legal :</h1>
                            <p className='mt-4  '>By using this Power-Up you agree to our <span className='text-blue-500 underline'>EULA</span>, <span className="text-blue-500 underline">Terms of Service</span>, and <span className="text-blue-500 underline">Privacy Policy</span>.</p>
                            <p className='mt-4'>Get in touch on our <span className="text-blue-500 underline">support portal</span>.</p>
                            <p className='mt-4'>Learn more about Kolekti and our full suite of Trello Power-Ups <span className="text-blue-500 underline">here</span>.</p>
                        </div>
                        
                    </div>
                     <img src={info} className="w-5 h-5 flex ml-60 mt-5" />
                </div>
            </div>
            <div className="py-6 mt-10">
                <AtlassianFooter />
            </div>
        </>
    )
}

export default DailyUpdate
