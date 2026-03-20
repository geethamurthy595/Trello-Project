import { Link } from "react-router-dom";
import NavBar from "../../../NavBar";
import reporting from "../../../../assets/analytics_and_reporting/reporting.svg";
import email from "../../../../assets/emailharvest.png";
import info from "../../../../assets/infoharvest.png";
import rocket from "../../../../assets/rocketharvest.png";
import CompanyLogo from "../../../../assets/CompanyLogo";
import notion from "../../../../assets/analytics_and_reporting/notion.svg";
import ss from "../../../../assets/trello-notion-sync.gif";
import infoIcon from "../../../../assets/infoIcon.png";
import tweet from "../../../../assets/imgi_4_Trello-Tweet.png";
function NotionTwoWay() {
  return (
   <>
     <div className="min-h-screen flex flex-col pt-16">

       {/* NAVBAR */}
       <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <NavBar />
       </div>

       <div className="max-w-4xl mx-auto w-full px-4 md:px-8 py-8 flex-1">

        {/* BREADCRUMB */}
        <p className="text-sm mb-6">
          <Link to="/power-ups" className="hover:underline">power-ups</Link> / 
          <span className="hover:underline"> Notion + Trello 2-Way Sync</span>
        </p>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col md:flex-row gap-10">

          {/* LEFT SIDE */}
          <div className="w-full md:w-65 flex flex-col space-y-6 md:sticky md:top-24 h-fit">

            <img
              src={notion}
              alt="Notion Two-Way Sync"
              className="w-40 md:w-56 lg:w-60 object-contain"
            />

            <div>
              <p className="text-gray-700 font-medium flex items-center gap-1">
                <img src={rocket} className="w-4 h-4"/>
               Made by Unito.io
              </p>

              <div className="inline-flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded mt-2">
                <img src={reporting} className="w-4 h-4"/>
                10,000 +
              </div>
            </div>

            <hr className="border-gray-300"/>

            <div>
              <h3 className="font-semibold mb-2">Categories</h3>

              <div className="flex flex-wrap gap-2">
                <Link 
                  to="/power-ups/category/it-project-management"
                  className="border border-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-200"
                >
                 Automation
                </Link>

                <Link 
                  to="/power-ups/analytics-reporting"
                  className="border border-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-200"
                >
                  Analytics & reporting
                </Link>

               
              </div>
            </div>

            <hr className="border-gray-300"/>

            <div className="text-sm text-gray-600 space-y-2">
              <p className="flex items-center gap-1 hover:underline hover:text-blue-500 cursor-pointer">
                <img src={email} className="w-4 h-4"/>
                Contact support
              </p>

              <p className="flex items-center gap-1 hover:underline hover:text-blue-500 cursor-pointer">
                <img src={info} className="w-4 h-4"/>
                Privacy policy
              </p>
            </div>

            <hr className="border-gray-300"/>

            <p className="text-sm text-gray-600">
              <img
                src="https://trello.com/assets/ae7e63776f2f61b39c2b.svg"
                className="inline w-4 h-4 mr-1"
              />
              Notion + Trello 2-Way Sync stores personal data and is in compliance with {" "}
              <span className="text-blue-600 underline cursor-pointer">
                Trello's data and privacy practices
              </span>
            </p>

            <hr className="border-gray-300"/>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 md:overflow-y-auto md:h-[calc(100vh-120px)] pr-2 md:pr-4 hide-scrollbar">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h1 className="text-xl md:text-2xl font-bold">
                Notion + Trello 2-Way Sync
              </h1>

              <Link>
                <button className="bg-[#1868DB] text-white px-2 py-1 rounded-sm hover:bg-blue-700 whitespace-nowrap">
                  Add Power-Up
                </button>
              </Link>
            </div>

            <p className="pt-5">Sync Trello cards with Notion databases in real-time using this automated, two-way integration.</p>
            <hr className="border-gray-300 mt-5 mb-5"/>
            <div>
                <p className=" text-gray-700 pt-5">### Sync cards from Trello boards with Notion pages to gain real-time insights on project performance.</p>
                <p className=" text-gray-700 pt-5">
                    Unito’s two-way integration means changes made in Notion are synced back to your Trello cards and vice versa.
                     You can also build powerful reports in Notion based on data from Trello with minimal manual input.
                </p>
                <p className=" text-gray-700 pt-5">
                    Follow this <a href="#" className="text-blue-600 underline">step-by-step Unito guide to sync Notion and Trello.</a>
                </p>
            </div>
              <div className="relative inline-block">
              <img
                src={ss}
                alt="screenshot"
                className="rounded-md"
              />
              {/* Info icon */}
              <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
                <img src={infoIcon} alt="info" title="External Media File" className="w-5 h-5" />
              </div>
            </div>
              <div className=" text-gray-600 mt-2">
                <h1 className="text-lg font-bold">Features</h1>
                <h2 className=" font-semibold mt-3">Supports essential Trello fields</h2>
                <p className="text-sm leading-relaxed mt-4">Unito has some of the deepest two-way integrations for Trello. Sync card names, due dates, assignees,
                   card status, card descriptions, comments, labels, list names, board names, attachments, checklists, and more.</p>
                  <h2 className="font-semibold mt-3">Customize in real-time</h2>
                  <p className="text-sm leading-relaxed mt-4">Unito integrations allow data to flow across tools in real-time. Customize your flow to your exact needs and set powerful
                   filters to define what you need synced. Make changes to your flow and they’ll be reflected in your tools in real-time.</p>
                   <h2 className="font-semibold mt-3">No-code and self-serve</h2>
                   <p className="text-sm leading-relaxed mt-4">Unito requires no coding knowledge. Any team can integrate Trello with Notion and build the workflow they need in a few clicks.</p>
                   <h1 className="text-lg font-bold mt-6">What Unito customers are saying</h1>
                   <hr className="border-gray-300 mt-5 mb-5"/>
                    <div className="relative inline-block">
              <img
                src={tweet}
                alt="screenshot"
                className="rounded-md"
              />
              {/* Info icon */}
              <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
                <img src={infoIcon} alt="info" title="External Media File" className="w-5 h-5" />
              </div>
            </div>
            <h2 className="font-bold mt-3">— Michael Pryor, Co-founder and Head of Product at Trello</h2>
            <hr className="border-gray-300 mt-5 mb-5"/>
              <p className="text-sm leading-relaxed mt-4">### Get started for free now!<br></br>
Install the Power-Up and you’ll be taken through the setup process. Alternatively, you can also head directly to Unito to set up your account and get started!</p>
                <p className="text-sm leading-relaxed mt-4">Learn more about Unito's <a href="#" className="text-blue-600 underline">Trello - Notion integration</a></p>
          </div>
        </div>
      </div>
      </div>
      {/* FOOTER */}
     <footer className=' w-full text-[#BFC1C4] '>
                <div className='flex flex-wrap gap-4 items-center justify-center pt-10 text-sm text-center px-4'>
                    <p>Templates</p>
                    <p>Pricing</p>
                    <p>AppsJobs</p>
                    <p>Blog</p>
                    <p>Developers</p>
                    <p>About</p>
                    <p>Help</p>
                    <p>Legal</p>
                    <p>Privacy</p>
                    <p>Integrations</p>
                    <p>Contact us</p>
                    <p>Terms</p>
                </div>
                <div className=' pb-10 flex flex-col sm:flex-row items-center gap-3 justify-center'>
                    <p><CompanyLogo/></p>
                    <p>© Copyright 2025. All rights reserved.</p>
                </div>
            </footer>  

     </div>
   </>
  );
}
export default NotionTwoWay;