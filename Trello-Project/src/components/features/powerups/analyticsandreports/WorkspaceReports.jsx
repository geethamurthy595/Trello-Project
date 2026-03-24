import NavBar from "../../../NavBar"
import {Link} from 'react-router-dom';
import dragonfly from '../../../../assets/dragonfly.png';
import torch from '../../../../assets/torch.svg';
import thrbox from '../../../../assets/thrbox.svg';
import mailsumup from '../../../../assets/mailsumup.svg';
import isumup from '../../../../assets/isumup.svg';
import iblsumup from '../../../../assets/iblsumup.svg';
import locksumup from '../../../../assets/locksumup.svg';
import docstable from '../../../../assets/docs-table.png';
import docsallpups from '../../../../assets/docs-all-pups.jpg';
import BlueDasher from '../../../../assets/Blue_Dasher.png';
import CompanyLogo from "../../../../assets/CompanyLogo";

const WorkspaceReports = () => {
  return (
    <>
    <NavBar/>
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
         <p className="m-5 inline "> <Link to="/power-ups" className="hover:underline ">power-ups </Link>
           / 
           <span className="inline hover:underline"> Workspace Reports</span>
          </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           
          {/* LEFT SIDE */}
          <div className="space-y-6 flex flex-col items-start md:items-start sticky top-20 self-start">
         
         
            <img
              src={dragonfly}
              alt="Toggl"
              className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
            />

            <div>
              <p className="text-gray-700 font-medium flex items-center gap-1">
                <img src={torch} alt="Rocket Icon" className="w-4 h-4" />
                Made by Blue Dasher Software
              </p>

              <div className="inline-flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded mt-2">
                <img src={thrbox} alt="Reporting Icon" className="w-4 h-4" />
                1,000 +
              </div>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <div>
              <h3 className="font-semibold text-medium mb-2">Categories</h3>

              <div className="flex flex-wrap gap-2">
                <span className="border border-gray-300 px-3 py-1 rounded text-xs">
                 IT & project management  
                </span>

                <span className="border border-gray-300 px-3 py-1 rounded text-xs">
                  Analytics & reporting
                </span>
              </div>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <div className="text-sm text-gray-600 space-y-2">
              <p className="cursor-pointer hover:underline flex items-center gap-1">
                <img src={mailsumup} alt="Email Icon" className="w-4 h-4" />
                Contact support
              </p>

              <p className="cursor-pointer hover:underline flex items-center gap-1">
                <img src={isumup} alt="Info Icon" className="w-4 h-4" />
                Privacy policy
              </p>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <p className="text-sm text-gray-600">
              <img
                src={locksumup}
                alt="Compliance Icon"
                className="inline w-4 h-4 mr-1"
              />
             Workspace Reports is in <br/>
              compliance with{" "}
              <span className="text-blue-600 cursor-pointer underline">
                Trello's data <br /> and privacy practices
              </span>
            </p>
            <hr className="border-gray-300 w-full md:w-60" />
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 space-y-6">

            <div className="flex justify-between items-center">
  <h1 className="text-3xl md:text-2xl font-bold">Workspace Reports</h1>

  <button className="bg-blue-600  text-white px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
    Add Power-Up
  </button>
</div>
           
            <p className="text-gray-700">
             Source card data from your workspace boards to build dynamic, table-based reports.
            </p>

      <h1 className="text-gray-900 text-2xl font-semibold mb-4">Features</h1>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Report on card data from all boards in your workspace</li>
              <li>Sort and filter</li>
              <li>Print and export to PDF</li>
              <li>Download to CSV</li>
              <li>Update card dates</li>
              <li>View extra card elements not available in Trello's UI</li>
              <li>Share reports with other workspace members</li>
              <li>Select from pre-built report templates</li>
            </ul>

            <div>

    <div className="relative inline-block">
    <img
      src={docstable}
      alt="screenshot"
      className="rounded-lg mb-6"
    />
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    </div>
    <div className="flex items-center gap-2 text-gray-600 text-sm whitespace-nowrap">
      
      <p className="text-gray-700 text-xl mb-5">For full support docs visit:</p>

      <button
        className="inline-flex items-center gap-2 bg-white border border-gray-300 px-3 py-1 rounded-md shadow-sm text-blue-500 font-medium hover:bg-gray-100 transition underline mb-5"
      >
        {/* Image */}
        <img
          src={BlueDasher}
          alt="dashboard"
          className="w-4 h-4"
        />

        {/* Text */}
        Project Dashboard
      </button>

    </div>
   <p>Workspace Reports is a Blue Dasher Power-Up. For $6/month (after a 7-day free trial), you get access to all of Blue Dasher's Power-Ups:</p>
    <ul className="list-disc pl-5 space-y-2 underline marker:text-black">
      <li className="underline text-blue-500">Card    Blockers</li>
      <li className="underline text-blue-500">Workspace    Reports</li>
      <li className="underline text-blue-500">Mermaid    Gantt</li>
      <li className="underline text-blue-500">Activity    Calendar</li>
      <li className="underline text-blue-500 mb-5">Import to Trello</li>
    </ul>
 <div className="relative inline-block">
   <img
      src={docsallpups}
      alt="screenshot"
      className="rounded-lg mb-5"
    />
   
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
      
    </div>
    <p>Email us at <br />
<span className="text-blue-600 underline">support@bluedashersoftware.com</span></p>
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
  )
}
export default WorkspaceReports

