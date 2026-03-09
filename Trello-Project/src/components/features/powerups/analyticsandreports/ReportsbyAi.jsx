import { Link } from "react-router-dom";
import NavBar from "../../../NavBar";
import reporting from "../../../../assets/analytics_and_reporting/reporting.svg";
import email from "../../../../assets/emailharvest.png";
import info from "../../../../assets/infoharvest.png";
import rocket from "../../../../assets/rocketharvest.png";
import CompanyLogo from "../../../../assets/CompanyLogo";
import reports from "../../../../assets/reportsbyai.png";

function ReportsbyAi() {
  return (
   <>
     <div className="min-h-screen flex flex-col pt-16">

       {/* NAVBAR */}
       <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <NavBar />
       </div>

       <div className="max-w-5xl mx-auto w-full px-4 md:px-8 py-8 flex-1">

        {/* BREADCRUMB */}
        <p className="text-sm mb-6">
          <Link to="/power-ups" className="hover:underline">power-ups</Link> / 
          <span className="hover:underline"> Reports by AI Analyst - decomissioned</span>
        </p>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col md:flex-row gap-10">

          {/* LEFT SIDE */}
          <div className="w-full md:w-[260px] flex flex-col space-y-6 md:sticky md:top-24 h-fit">

            <img
              src={reports}
              alt="Reports by AI"
              className="w-40 md:w-56 lg:w-60 object-contain"
            />

            <div>
              <p className="text-gray-700 font-medium flex items-center gap-1">
                <img src={rocket} className="w-4 h-4"/>
                Made by no crop
              </p>

              <div className="inline-flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded mt-2">
                <img src={reporting} className="w-4 h-4"/>
                100 +
              </div>
            </div>

            <hr className="border-gray-300"/>

            <div>
              <h3 className="font-semibold mb-2">Categories</h3>

              <div className="flex flex-wrap gap-2">

                <Link 
                  to="/power-ups/analytics-reporting"
                  className="border border-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-200"
                >
                  Analytics & reporting
                </Link>

                <Link 
                  to="/power-ups/category/it-project-management"
                  className="border border-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-200"
                >
                  IT & project management
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
              Reports by AI Analyst may store personal data and is not in compliance with{" "}
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
                Reports by AI Analyst - decomissioned
              </h1>

              <Link>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap">
                  Add Power-Up
                </button>
              </Link>
            </div>

            <p className="pt-5">decommissioned</p>

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

export default ReportsbyAi;