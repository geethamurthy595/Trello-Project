import React from "react";
import NavBar from "../../../NavBar";
import { Link } from "react-router-dom";
import small1 from "../../../../assets/small1.png";
import { IoRocketOutline } from "react-icons/io5";
import small2 from "../../../../assets/small2.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import small6 from '../../../../assets/small6.svg'
const Jira = () => {
    return (
        <>
            <NavBar />
            <div className=" p-2 ml-70 mb--10">
                <a href="">Power-Ups</a>/ <a href="">Jira</a>
            </div>
            <section className=" border-red-500 h-[140vh]  flex justify-center  ">
                <div className="  border-green-500 w-[300px] h-180 p-6 sticky top-10">
                    <img src="/Jira@2x-icon-blue.png" alt="" className="block  w-120" />
                    <div className="mt-3 flex">
                        <img src={small1} height={50}></img>
                        <span className="text-xs p-1">Made by Atlassian</span>
                    </div>
                    <div className=" border-solid flex p-1 mt-1 bg-gray-200 w-25">
                        <img src={small1} alt="" className="" />
                        <button className="text-xs p-1">100,000+</button>
                    </div>
                    <hr className="mt-3" />
                    <br />
                    <p>Categories</p>
                    <br />
                    <button className="px-3 py-1 border-1 hover:bg-gray-300 text-sm rounded-md">Developer tools</button>
                    <br />
                    <button className="px-3 py-1 border-1 hover:bg-gray-300 text-sm rounded-md mt-2.5 mb-4.5">IT & project management</button>
                    <hr /><br />
                    <div className="flex items-center gap-2 ">
                        <MdOutlineMailOutline className="" />
                        <Link to="/login"
                            className="text-sm  hover:text-blue-800 hover:underline ">
                            Contact support
                        </Link></div>
                    <div>
                        <div className="flex items-center gap-2"><FiInfo />
                            <p className="text-sm hover:text-blue-800 hover:underline">privacy policy</p></div>
                        <br />
                        <hr />

                    </div>
                    <div className="flex"><img src={small6} className="h-10 w-3 mt-6 mr-3" alt="logo" /><p className="mt-5 mb-5">Jira is in compliance with
                        <span className="text-blue-800 underline">
                            Trello's data and privacy practices.
                        </span>
                    </p></div>
                    <hr />
                </div>
                <div className="  border-blue-500 w-[700px] h-[130vh]  p-15 pt-3">
                    <div className="flex justify-between ">
                        <h1 className="text-2xl font-semibold ">Jira</h1>
                        <button className="bg-blue-600 text-white p-2  rounded-xl">Add power-up</button>
                    </div>
                    <br />
                    Connect Jira and Trello to help all your teams work better together.The Jira Power-up allows you to...
                    <br />
                    <ul className="list-inside list-disc flex flex-wrap space-x-4">
                        <li>Link Jira work items to cards, connecting different Workspaces across your organization.</li>
                        <li>View important work item information on the detailed card view
                        </li>
                        <li>See if your linked work items are done at glance (from the front of the card)
                        </li>
                        <li>Automatically links the Jira work item back to a Trello card so everyone in your team knows how something came to be.
                        </li>
                        <li>Quickly jump to your Jira project by creating a link on yourboard.</li>
                    </ul>
                    <h1 className="text-2xl font-semibold ">Screenshot</h1>
                    <br />
                    <img src="/jello-screenshot.png" alt="logo" className="w-140 h-130 rounded-lg" />
                </div>
            </section>
            <div className="pt-5  flex justify-center ">
                <ul className="flex gap-4 mb-2 mt-0">
                    <li><Link to="/templates" className="underline">Templates</Link></li>
                    <li><Link to="/pricing" className="underline">Pricing</Link></li>
                    <li><Link to="/platforms" className="underline">Apps</Link></li>
                    <li><Link to="/company/careers" className="underline">Jobs</Link></li>
                    <li><Link to="/blog" className="underline">Blog</Link></li>
                    <li><Link to="/cloud/trello/" className="underline">Developer</Link></li>
                    <li><Link to="/about" className="underline">About</Link></li>
                    <li><Link to="/trello/" className="underline">Help</Link></li>
                    <li><Link to="/legal/atlassian-customer-agreement#intro" className="underline">Legal</Link></li>
                    <li><Link to="/legal/privacy-policy" className="underline">Privacy</Link></li>
                    <li><Link to="/integrations" className="underline">Integrations</Link></li>
                    <li><Link to="/contact/" className="underline">Contact us</Link></li>
                    <li><Link to="/legal/atlassian-customer-agreement#intro" className="underline">Terms</Link></li>
                </ul>
            </div>
            <footer>
                <div className="m-auto flex flex-wrap justify-center w-120">
                    <img src={small2} alt="" width={170} />
                    <p className="text-xs font-medium  text-gray-700 pt-1  pl-3"> © Copyright 2025. All rights reserved.</p>
                </div>
            </footer>
            <br />
            <br />
        </>);
};

export default Jira;
