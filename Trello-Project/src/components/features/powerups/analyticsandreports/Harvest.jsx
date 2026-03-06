import harvest from "../../../../assets/analytics_and_reporting/harvest.png";
import ss from "../../../../assets/harvestss.png";
import NavBar from "../../../NavBar";
import reporting from "../../../../assets/analytics_and_reporting/reporting.svg";
import email from "../../../../assets/emailharvest.png";
import info from "../../../../assets/infoharvest.png";
import rocket from "../../../../assets/rocketharvest.png";
import CompanyLogo from "../../../../assets/CompanyLogo";
import infoIcon from "../../../../assets/infoIcon.png";
import { Link } from "react-router-dom";

function Harvest() {
  return (
    <>
      <NavBar />
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
         <p className="m-5 inline "> <Link to="/power-ups" className="hover:underline ">power-ups </Link>
           / 
           <span className="inline hover:underline"> Harvest</span>
          </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           
          {/* LEFT SIDE */}
          <div className="space-y-6 flex flex-col items-start md:items-start">
         
         
            <img
              src={harvest}
              alt="Harvest"
              className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
            />

            <div>
              <p className="text-gray-700 font-medium flex items-center gap-1">
                <img src={rocket} alt="Rocket Icon" className="w-4 h-4" />
                Made by Harvest
              </p>

              <div className="inline-flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded mt-2">
                <img src={reporting} alt="Reporting Icon" className="w-4 h-4" />
                25,000+
              </div>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <div>
              <h3 className="font-semibold text-medium mb-2">Categories</h3>

              <div className="flex flex-wrap gap-2">
                <span className="border border-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-200 cursor-pointer">
                  Analytics & reporting
                </span>

                <span className="border border-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-200 cursor-pointer">
                  IT & project management
                </span>
              </div>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <div className="text-sm text-gray-600 space-y-2">
              <p className="cursor-pointer hover:underline flex items-center gap-1">
                <img src={email} alt="Email Icon" className="w-4 h-4" />
                Contact support
              </p>

              <p className="cursor-pointer hover:underline flex items-center gap-1">
                <img src={info} alt="Info Icon" className="w-4 h-4" />
                Privacy policy
              </p>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <p className="text-sm text-gray-600">
              <img
                src="https://trello.com/assets/ae7e63776f2f61b39c2b.svg"
                alt="Compliance Icon"
                className="inline w-4 h-4 mr-1"
              />
              Harvest is in compliance with{" "}
              <span className="text-blue-600 cursor-pointer underline">
                Trello's data and privacy practices
              </span>
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 space-y-6">

            <div className="flex justify-between items-center">
  <h1 className="text-3xl md:text-xl font-bold">Harvest</h1>

  <button className="bg-blue-600  text-white px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
    Add Power-Up
  </button>
</div>

            <p className="text-gray-700 mb-0">
              The <span className="text-blue-600 underline">Harvest</span> Power-up allows
              you to...
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">
                  Track time right from a Trello card.
                </span>{" "}
                Start a timer or enter a duration as you work, without leaving
                Trello.
              </li>

              <li>
                <span className="font-semibold">
                  See how much time has been tracked to each card.
                </span>{" "}
                Cards are also linked from your Harvest timesheet.
              </li>
            </ul>

            <div>
              <h2 className="text-xl font-semibold mb-3">Screenshots</h2>

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

            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className='  items-center w-full h-[100%] text-[#BFC1C4]'>
                <div className='flex gap-4 items-center justify-center pt-30'>
                    <p className="underline">Templates</p>
                    <p className="underline">Pricing</p>
                    <p className="underline">AppsJobs</p>
                    <p className="underline">Blog</p>
                    <p className="underline">Developers</p>
                    <p className="underline">About</p>
                    <p className="underline">Help</p>
                    <p className="underline">Legal</p>
                    <p className="underline">Privacy</p>
                    <p className="underline">Integrations</p>
                    <p className="underline">Contact us</p>
                    <p className="underline">Terms</p>
                </div>
                <div className='  pb-20 flex items-center gap-3 justify-center'>
                    <p><CompanyLogo/></p>
                    <p>© Copyright 2025. All rights reserved.</p>
                </div>
            </footer>
    </>
  );
}

export default Harvest;