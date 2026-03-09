import { Link } from "react-router-dom";
import NavBar from "../../../NavBar";
import expo from "../../../../assets/analytics_and_reporting/Exports.png";
import reporting from "../../../../assets/analytics_and_reporting/reporting.svg";
import email from "../../../../assets/emailharvest.png";
import info from "../../../../assets/infoharvest.png";
import rocket from "../../../../assets/rocketharvest.png";
import CompanyLogo from "../../../../assets/CompanyLogo";
import infoIcon from "../../../../assets/infoIcon.png";
import ss1 from "../../../../assets/exportss1.png";
import ss2 from "../../../../assets/exportss2.png";
function ExportsforTrello() {
  return (
    <>
     <div className="h-screen flex flex-col pt-16">
       <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
    <NavBar />
  </div>
          <div className="max-w-5xl mx-auto w-full px-4 md:px-8 py-10 flex-1">
         <p className=" inline "> <Link to="/power-ups" className="hover:underline ">power-ups </Link>
           / 
           <span className="inline hover:underline"> Exports for Trello by Blue cat (CSV,Excel)</span>
          </p>
        <div className="flex flex-col md:flex-row flex-1 max-w-6xl mx-auto w-full px-4 md:px-8 py-6 gap-10"> 
          {/* LEFT SIDE */}
          <div className="w-full md:w-65 flex flex-col space-y-6 md:sticky md:top-24 h-fit">
         
         
            <img
              src={expo}
              alt="Exports for Trello"
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
                <Link to="/power-ups/category/developer-tools">
                 <span className="border border-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-200 cursor-pointer">
                 Board utilities 
                </span>
                </Link>
                <Link to="/power-ups/analytics-reporting"> 
                <span className="border border-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-200 cursor-pointer">
                  Analytics & reporting
                </span> 
                 </Link>
              </div>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <div className="text-sm text-gray-600 space-y-2">
              <p className="cursor-pointer flex items-center gap-1 hover:underline hover:text-blue-500">
                <img src={email} alt="Email Icon" className="w-4 h-4" />
                Contact support
              </p>

              <p className="cursor-pointer  flex items-center gap-1 hover:underline hover:text-blue-500">
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
              Exports for Trello by Blue Cat (CSV, Excel) stores personal data and is in compliance with{" "}
              <span className="text-blue-600 cursor-pointer underline">
                Trello's data and privacy practices
              </span>
            </p>
             <hr className="border-gray-300 w-full md:w-60" />
          </div>
            {/* RIGHT SIDE */}
           

          <div className="flex-1  md:overflow-y-auto md:h-[calc(100vh-120px)] pr-4 hide-scrollbar">
          
                      <div className="flex justify-between items-center">
            <h1 className="text-2xl  font-semibold">Exports for Trello by Blue Cat (CSV,Excel)</h1>
             <Link>
            <button className="bg-blue-600  text-white px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
              Add Power-Up
            </button>
            </Link>
          </div>
                     <h2 className="text-2xl pt-3 pb-3 font-semibold">Trello Export </h2>
                      <p className="text-gray-700 mb-3 font-bold">
                       One of the  <Link><span className="text-blue-600 underline">fastest growing power-ups of 2023</span> </Link>
                      </p>
          
                        <p className="text-gray-700 mb-0">
                            Export from Trello by <Link><span className="text-blue-600 underline">Blue Cat</span> </Link>lets you export cards from Trello to CSV/Excel, or 
                            <span className="text-black font-bold">set a schedule and get an email export when you want it</span>.
                        </p>
                      <div>
                        <h2 className="text-xl font-semibold mb-3 mt-10">How to export from Trello</h2>
         <div className="relative inline-block">
              <img
                src={ss1}
                alt="screenshot"
                className="rounded-md"
              />
              {/* Info icon */}
              <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
                <img src={infoIcon} alt="info" title="External Media File" className="w-5 h-5" />
              </div>
            </div>
                <ol className="list-decimal list-inside mt-4 text-gray-700 space-y-2">
                    <li className="mb-2 ">Add the Trello Export Power-Up to your board </li>
                    <li className="mb-2">Pick the lists you want to export cards from</li>
                    <li className="mb-2">Click the Download CSV button to get your export</li>
                </ol>
                  <h2 className="text-xl font-semibold mb-3 mt-10">Optional: Set a schedule and get your export emailed directly to you</h2>
         <div className="relative inline-block">
              <img
                src={ss2}
                alt="screenshot"
                className="rounded-md"
              />
              {/* Info icon */}
              <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
                <img src={infoIcon} alt="info" title="External Media File" className="w-5 h-5" />
              </div>
            </div>
            <p>
                Paid users can also get exports sent directly to their inbox on a schedule they determine. Simply configure your schedule and we will run the export when you want it and email it to you. You can select daily, weekly or monthly exports
                 and choose the time of day we will create your export for you.
            </p>
            <h2 className="text-xl font-semibold mb-3 mt-10">Pricing</h2>
            <p>We have two simple options</p>
            <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                <li className="mb-2"><b>Free:</b> 10 Free exports, unlimited boards, custom field support</li>
                <li className="mb-2"><b>$19/month</b>Get everything in free plus unlimited exports and scheduled exports to save
                 you time and make sure you never miss an export</li>
            </ul>
            <h1 className="text-2xl font-semibold mt-10">Exporting CSV, Excel, XLSX and Google Sheets data from Trello</h1>
            <p>Currently Exports by Blue Cat will create a CSV file. These files can easily be opened in Excel or Google sheets and converted to XLSX if required.
                </p>
                <ul className="list-disc list-inside">
                    <li className="mb-2">To open in Excel, open Excel and open the file the same way you would any other Excel file. You can save this as an XLSX file if you wish.</li>
                    <li className="mb-2">To open in Google sheets, open Google sheets, create a new file and select Import. You can then import the CSV file from your computor.</li>
                </ul>
                <p>Excel files saved as XLSX can be opened and imported. To import from Google Sheets you will need to save your file as a CSV file from google sheets, which can then be opened and imported.</p>
                <h1 className="text-2xl font-semibold mt-10">How to backup Trello boards for free</h1>
                <p>
                    Exports by Blue Cat can be a great way to create backups of your Trello data, especially when combined with <span className="text-blue-500 underline">Imports by Blue Cat</span> to reload the data. Simply use the free option to create a backup manually or start a paid subscription to create an export automatically on a schedule. The use
                     Imports to import the data back into Trello if you lose anything.
                </p>
                <h1 className="text-2xl font-semibold mt-10">
                    Once you're done exporting check out our other great tools
                </h1>
                <h3 className="text-blue-500 underline font-semibold ml-0 m-3 text-xl ">Blue Cat Reports</h3>
                <p>
                    Our Reporting Power-Up is the number one reporting tool for Trello. There is a fully-featured 7-day free trial so give it a go and see the sort of reports you can create now all your data is in Trello. You can <span className="text-blue-500 underline">check it out here</span>.
                </p>
                <h3 className="text-blue-500 underline font-semibold ml-0 m-3 text-xl">Imports </h3>
                <p>Trello's most popular imports power-up, import data into all the standard Trello fields plus all of your Custom fields.</p>
                <h3 className="text-blue-500 underline font-semibold ml-0 m-3 text-xl">Forms by Blue Cat </h3>
                <p>
                  Do you need a way for people to fill out
                   forms and get cards created in Trello? Then look no further. Our Forms Power-Up does just that, integrates with all the standard and custom Trello fields as well as attachments.  
                </p>
                <h3 className="font-semibold ml-0 m-3 text-xl">Our Trello guides</h3>
                <p className="pb-3">
                    See our guide to <span className="text-blue-500 underline">Every free Trello power-up</span>
                </p>
                <p>
                    Check out our reviews of <span className="text-blue-500 underline">Every Trello reporting power-up</span>
                </p>
       </div>
     </div>
     </div>
 </div>
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

export default ExportsforTrello;