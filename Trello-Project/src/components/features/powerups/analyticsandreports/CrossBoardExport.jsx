import React from 'react'
import NavBar from '../../../NavBar'
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'
import { Link } from 'react-router-dom'
import socket from "../../../../assets/epicslogo1.png";
import reporting from "../../../../assets/epicslogo2.png";
import email from "../../../../assets/emailharvest.png";
import info from "../../../../assets/infoharvest.png";
import csv from "../../../../assets/analytics_and_reporting/csv.png";
import gif1 from "../../../../assets/imgi_3_screenshot.gif"
import gif2 from "../../../../assets/imgi_3_xls_1080_20 (1).gif"
import { AiOutlineInfoCircle } from 'react-icons/ai';

const CrossBoardExport = () => {
    return (
        <>
            <NavBar />
            <div className='flex r max-w-6xl  mx-auto gap-1 px-6 py-1'>
                {/* Left */}
                <div className=" px-4 sticky top-4 h-full md:px-8 ">
                    <div className="max-w-4xl  mx-auto mt-10 mb-4  ">
                        <p className="text-sm">
                            <Link to="/power-ups" className="text-blue-600">
                                Power-Ups
                            </Link>{" "}
                            /{" "}
                            <Link
                                to="/power-ups/669b7e5081e3be09d5c86646"
                                className="text-blue-600 "
                            >
                                Cross-Board Export: CSV, JSON, XLSX, Google Sheets
                            </Link>
                        </p>
                    </div>
                    <div className="w-70 flex flex-col sticky space-y-5 mb-10 mx-auto">

                        <img
                            src={csv}
                            alt=" "
                            className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
                        />

                        <div>
                            <p className="text-gray-700 font-medium flex items-center gap-1">
                                <img src={socket} className="w-4 h-4" />
                                Made by Rabbit Exp
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
                                    Analytics & reporting
                                </span>

                                <span className="border px-3 py-1 rounded text-xs hover:bg-gray-200">
                                    Board utilities
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
                            Cross-Board Export: CSV, JSON, XLSX, Google Sheets is in compliance with
                            <span className="text-blue-600 underline cursor-pointer">
                                {" "}Trello's data and privacy practices
                            </span>
                        </p>
                        <hr className="border-gray-300 w-full md:w-60" />
                    </div>
                </div >
                {/* Right */}
                <div className="flex-1 pt-20">
                    <div className="max-w-2xl">

                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-[25px] font-bold ">
                                Cross-Board Export: CSV, JSON, XLSX, Google Sheets
                            </h1>

                            <button className="  bg-blue-500 hover:bg-blue-600 text-white px-5 py-1 rounded">
                                Add Power-Up
                            </button>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[22px] font-bold mb-4 mr-10">
                            Tired of adding Export power-ups on each board? Try Cross-Board Export!
                        </h1>
                        <p>## Save all your Trello data in formats like CSV, JSON, JSONL, XLS, XLSX, or Google Sheets — with just one power-up installation. Enjoy the Scheduled Exports for automated data pulls!</p>
                    </div>
                    <div className='mt-8'>
                        <div className="w-150 h-[400px] relative  flex items-center justify-center  text-gray-400">

                            <img src={gif1} alt="GIF Preview" className="w-150 h-[360px] " />
                            <div className="absolute top-6 right-3 bg-gray-500 rounded-md p-1">
                                <AiOutlineInfoCircle className="text-white text-lg" />

                            </div>
                        </div>
                    </div>
                    <p className='mt-10 mb-4'>Effortlessly export Trello data from multiple Boards and Workspaces with a single installation. Cross-Board Exporter offers flexibility and convenience, letting you export all key Trello fields, including custom fields and checklists, without installing the power-up on each board.</p>
                    <hr className="border-gray-400 w-full " />
                    <div className='mt-10'>
                        <h1 className="text-[25px] font-bold mb-4 mr-10">🚀 Key Features</h1>
                        <ol className='list-decimal ml-4 mb-7'>
                            <li><span className='font-semibold'>Export Across Multiple Boards and Workspaces :</span> No need to install separately for each board.</li>
                            <li><span className='font-semibold'>Multiple Export Formats :</span> CSV, JSON, JSONL, Excel (XLS, XLSX), Google Sheets.</li>
                            <li><span className='font-semibold'>10 Free Exports :</span> Get started with free exports in CSV and JSON/JSONL formats.</li>
                            <li><span className='font-semibold'>Advanced Filtering :</span> Filter data by labels, lists, due dates, members, and more to create the reports you need.</li>
                            <li><span className='font-semibold'>Scheduled Exports :</span> Automate your exports by setting date and time for scheduled exports directly to your email or as attachments to a selected Trello card.</li>
                        </ol>
                    </div>
                    <div className='mt-8'>
                        <div className="w-150 h-[400px] relative  flex items-center justify-center  text-gray-400">

                            <img src={gif2} alt="GIF Preview" className="w-150 h-[360px] " />
                            <div className="absolute top-6 right-3 bg-gray-500 rounded-md p-1">
                                <AiOutlineInfoCircle className="text-white text-lg" />

                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-400 w-full " />
                    <div className='mt-10'>
                        <h1 className="text-[25px] font-bold mb-4 mr-10">❓ Why Choose Cross-Board Export?</h1>
                        <p >While other solutions limit you to exporting data from individual boards, requiring separate installations and payments for each, <span className='font-semibold'>Cross-Board Export breaks the mold</span>!</p>
                        <ul className='list-disc ml-4 mb-7'>
                            <li>🏅 <span className='font-semibold'>Cost-Effective:</span> One installation covers all your boards and workspaces, eliminating multiple fees.</li>
                            <li>🤝 <span className='font-semibold'>User-Friendly:</span> A centralized solution that simplifies your workflow and boosts productivity.</li>
                            <li>🏆 <span className='font-semibold'>Competitive Edge:</span> Our "killing feature" allows for cross-board data selection, setting us apart from competitors.</li>
                        </ul>
                    </div>
                    <hr className="border-gray-400 w-full " />
                    <div className='mt-10'>
                        <h1 className="text-[25px] font-bold mb-4 mr-10">👍 Benefits</h1>
                        <ul className='list-disc ml-4 mb-7'>
                            <li><span className='font-semibold'>Efficiency Boost: </span>  Consolidate information from various projects quickly and effortlessly.</li>
                            <li><span className='font-semibold'>Enhanced Collaboration:</span> Share comprehensive data with your team, aiding in better decision-making.</li>
                            <li><span className='font-semibold'>Scalable Solution:</span> Ideal for both small teams and large organizations managing multiple projects.</li>
                        </ul>
                    </div>
                    <hr className="border-gray-400 w-full " />
                    <div className='mt-10'>
                        <h1 className="text-[25px] font-bold mr-10">💡 Use Cases</h1>
                        <ol className='list-decimal ml-4 mb-7'>
                            <li><span className='font-semibold'>Consolidated Project Reporting:</span> managers can select multiple boards and export all relevant data in one go. This allows for quick creation of consolidated reports in formats like Excel or Google Sheets, providing a comprehensive view for stakeholders or management meetings.</li>
                            <li><span className='font-semibold'>Advanced Data Analysis:</span> export data from multiple boards directly into CSV or JSON formats for easy import into data analysis tools. This streamlines the process of creating pivot tables, charts, and dashboards to inform strategic decisions.</li>
                            <li><span className='font-semibold'>Scheduled Data Backups:</span> Use the scheduled exports feature to automatically send the latest data from all selected boards to your email or have files attached to a selected Trello card at specified intervals. This ensures up-to-date backups without manual intervention.</li>
                        </ol>
                    </div>
                    <hr className="border-gray-400 w-full " />
                    <div className='mt-10'>
                        <h1 className="text-[25px] font-bold mb-4 mr-10">💰 Pricing Options</h1>
                        <h1 className="text-[20px] font-bold mb-4 mr-10">🆓 Free Plan</h1>
                        <p className='font-semibold'>Start exploring our core features at no cost.</p>
                        <ul className='list-disc ml-5 mb-7'>
                            <li>10 Free Exports in CSV and JSON/JSONL formats.</li>
                            <li>Multi-Board and Workspace Export: Select and export data from multiple boards and workspaces simultaneously.</li>
                            <li>Custom Fields and Checklists: Include custom fields and checklists in your exports for comprehensive data.</li>
                        </ul>
                    </div>

                    <div className='mt-6'>
                        <h1 className="text-[20px] font-bold mb-4 mr-10">💸 Standard Plan</h1>
                        <p className='font-semibold'>Unlock full exporting capabilities for enhanced productivity.</p>
                        <ul className='list-disc ml-5 mb-4'>
                            <li><span className='font-semibold'>Unlimited Exports</span> in CSV, JSON, JSONL, XLS, XLSX, and Google Sheets formats.</li>
                            <li><span className='font-semibold'>Comprehensive Data Access:</span> Export without limitations across all supported formats.</li>
                        </ul>
                        <p className='font-semibold mb-2'>Pricing Options:</p>
                        <ul className='list-disc ml-5 mb-7'>
                            <li>$11.99 per month</li>
                            <li>$89 per year <span className='font-semibold'>(Save over 38% with annual billing!)</span></li>
                        </ul>
                    </div>

                    <div className='mt-6'>
                        <h1 className="text-[20px] font-bold mb-4 mr-10">👑 Premium Plan:</h1>
                        <p className='font-semibold mb-4'>Maximize efficiency with advanced automation features!</p>
                        <p className='font-semibold mb-3'>Everything in the Standard Plan, PLUS:</p>
                        <p className='font-semibold mb-2'>Scheduled Exports:</p>
                        <ol className='list-decimal ml-5 mb-4 space-y-2'>
                            <li>
                                <span className='font-semibold'>Automate Your Workflow:</span> Set up exports to run automatically at your preferred intervals.
                            </li>
                            <li>
                                <span className='font-semibold'>Flexible Delivery:</span> Receive exported files directly via email or have them attached to a selected Trello card.
                            </li>
                            <li>
                                <span className='font-semibold'>Custom Scheduling:</span> Choose daily, weekly, or monthly exports to keep your data up-to-date without manual effort.
                            </li>
                        </ol>
                        <p className='font-semibold mb-2'>Pricing Options:</p>
                        <ul className='list-disc ml-5 mb-7'>
                            <li>$19.99 per month</li>
                            <li>$159 per year <span className=' font-semibold'>(Save over 34% with annual billing!)</span></li>
                        </ul>
                    </div>
                    <hr className="border-gray-400 w-full" />
                    <div className='mt-6 mb-10'>
                        <h1 className="text-[20px] font-bold mb-4 mr-10">🔒 Privacy Policy</h1>
                        <p>
                            Your data privacy is our top priority. Cross-Board Exporter does not store or share your exported data.
                            All exports are handled securely and sent directly to your selected format destination.
                            For full details, please review our{' '}
                            <a href="#" className='text-blue-500 underline hover:text-blue-400'>Privacy Policy</a>.
                        </p>
                    </div>
                    <hr className="border-gray-400 w-full" />
                     <div className='mt-6 mb-10'>
                        <h1 className="text-[20px] font-bold mb-4 mr-10">🛠 Support</h1>
                        <p>
                           We provide dedicated support to all our users. Whether you're using the Free, Standard, or Premium plan, feel free to reach out with any questions. Contact us at{' '}
                            <a href="#" className='text-blue-500 underline hover:text-blue-400'> admin@rabbit-exp.com</a>
                            for personalized assistance.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-6 mt-10">
                <AtlassianFooter />
            </div>
        </>
    )
}

export default CrossBoardExport
