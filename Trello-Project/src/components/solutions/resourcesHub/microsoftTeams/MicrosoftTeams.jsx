import React from "react";
import NavBar from "../../../NavBar";
import { Link } from "react-router-dom";
import small1 from "../../../../assets/small1.png";
import { IoRocketOutline } from "react-icons/io5";
import small2 from "../../../../assets/small2.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import small6 from '../../../../assets/small6.svg'
import { GoLink } from "react-icons/go";
import ms_teams_icon from '../../../../assets/ms-teams-icon.svg'

const MicrosoftTeams = () => {
    return (
        <>
            <NavBar />
            <div className=" p-2 ml-70 mb--10">
                <a href="">Power-Ups</a>/ <a href="" >Microsoft Teams</a>
            </div>
            <section className=" border-red-500 h-[140vh]  flex justify-center  ">
                <div className="  border-green-500 w-[300px]  p-9 sticky  top-20 left-20 h-[100px] ">
                <img src={ms_teams_icon}  alt="" className="block  w-120" />


                    <div className="mt-3 flex">
                        <IoRocketOutline className="mt-2" /><span className=" p-1">Made by Trello Inc</span>
                    </div>
                    <div className=" border-solid flex p-1 mt-1 bg-pink-50 rounded-md w-25">
                        <GoLink className="mt-1" /><button className="text-xs p-1">Integrations</button>
                    </div>
                    <hr className="mt-3" />
                    <br />
                    <p className="font-semibold ">Categories</p>
                    <button className="px-3 py-1 border-1 hover:bg-gray-300 mt-1.5 text-sm rounded-md">Communication & collaboration</button>
                    <br />
                    <br />
                    <hr />
                    <br />
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
                    <div className="flex"><img src={small6} className="h-10 w-3 mt-6 mr-3" alt="logo" /><p className="mt-5 mb-5">MicrosoftTeams is in compliance with
                        <span className="text-blue-800 underline">
                            Trello's data and privacy practices.
                        </span>
                    </p></div>
                    <hr />
                </div>
                <div className="  border-blue-500 w-[700px] h-[130vh]  p-18 pt-3">
                    <div className="flex justify-between ">
                        <h1 className="text-2xl font-semibold ">MicrosoftTeams</h1>
                        <button className="bg-blue-700 text-white p-2 rounded-md">Configure</button>
                    </div>
                    <br />
                    <p className="text-black-600 text-2xl font-semibold ">What is the Microsoft Teams integration?</p><br />
                    <p >The Trello for Microsoft Teams integration helps you link your Trello teams to those in Microsoft Teams.
                      This will enable you to receive Trello notifications in Microsoft Teams, 
                      view your Trello boards in Microsoft Teams, and much more.</p><br />
                      <p>With the Microsoft Teams integration, you can see all of Trello right within Microsoft Teams.</p>
                    <br />
                    <img src="/ms-teams-board.png" alt="logo" className="w-140  rounded-lg" /><br />
                    <p className="text-2xl font-semibold">How to set up Trello in Microsoft Teams</p>
                    <ol className="list-decimal list-inside">
                      <li>Click the Configure button at the top of this page. This will open up the Trello listing in the Microsoft Teams marketplace where you can configure the integration between Trello and Microsoft Teams.</li>
                      <li>Install Trello in Microsoft Teams</li>
                      <li>Once you have installed Trello in Microsoft Teams, you can interact with Trello in a number of different ways without leaving Microsoft Teams.</li>
                    </ol>
                    <br />
                    <img src="/ms-teams-chat.png" alt="logo" className="w-140  rounded-lg" /><br />
                    <h1 className="text-2xl font-semibold">Trello boards as tabs in Microsoft Teams</h1>
                    <p>Additionally, you can add Trello boards to any of your channels as a permanent tab. Tabs provide a dedicated canvas to see your team’s Trello boards, lists and cards. <br></br>

            To add a Trello tab to a channel, select the channel, then click on the “+” sign to the right of the existing tabs. In the popup, select Trello from the list of apps, then click “Log in with Trello”.<br/>

            In the next popup, enter your credentials and click “Accept”. Once you do that, you can select the Trello board you would like to link to. Trello will create a new tab named after the board and the tab will contain the lists and cards for that board. <br/>

            Inside the tab, you can now interact with the board in the same way you would, had you logged in directly to <span className="text-blue-800 underline">Trello.com</span>.<br />
            Note: You must be a member of a board to add it to your Teams application. Team Visible boards will not show as an option until you join the board. And you can edit cards the way you would in Trello. All actions will automatically be synced with Trello.</p>
                <p className="text-2xl font-semibold  mt-2 mb-2">Troubleshooting Trello in Microsoft Teams</p>
                <p>If you find Trello is not available per the instructions above, contact your IT admin, as they may have turned off third party tabs. You must be a member of each board that you want to add to your Microsoft Teams app.</p>
                </div>
            </section>
            <div className="pt-220  flex justify-center ">             
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
export default MicrosoftTeams;