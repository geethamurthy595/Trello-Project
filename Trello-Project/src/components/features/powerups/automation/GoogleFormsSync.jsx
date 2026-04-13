import React from "react";
import googleformicon from "../../../../assets/googleformicon.png";
import googleformpreview from "../../../../assets/googleformpreview.gif";
import torch from "../../../../assets/torch.svg";
import thrbox from "../../../../assets/thrbox.svg";
import mailsumup from "../../../../assets/mailsumup.svg";
import isumup from "../../../../assets/isumup.svg";
import locksumup from "../../../../assets/locksumup.svg";
import iblsumup from "../../../../assets/iblsumup.svg";
import NavBar from "../../../NavBar";
import CompanyLogo from "../../../../assets/CompanyLogo";
import { Link } from "react-router-dom";

const GoogleFormsSync = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <p className="m-5 inline ">
          {" "}
          <Link to="/power-ups" className="hover:underline ">
            power-ups{" "}
          </Link>
          /<span className="inline hover:underline">Google Forms Sync </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-6 flex flex-col items-start md:items-start sticky top-20 self-start">
            <img
              src={googleformicon}
              alt="Toggl"
              className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
            />

            <div>
              <p className="text-gray-700 font-medium flex items-center gap-1">
                <img src={torch} alt="Rocket Icon" className="w-4 h-4" />
                Made by Mig
              </p>

              <div className="inline-flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded mt-2">
                <img src={thrbox} alt="Reporting Icon" className="w-4 h-4" />
                5,000 +
              </div>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <div>
              <h3 className="font-semibold text-medium mb-2">Categories</h3>

              <div className="flex flex-wrap gap-2">
                <span className="border border-gray-300 px-3 py-1 rounded text-xs">
                  Automation
                </span>

                <span className="border border-gray-300 px-3 py-1 rounded text-xs">
                   Board utilities 
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
             Google Forms Sync stores<br />
             personal data and is in <br />{" "}
              <span className="text-blue-600 cursor-pointer underline">
               compliance with Trello's data <br />
                and privacy practices.
              </span>
            </p>
            <hr className="border-gray-300 w-full md:w-60" />
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl md:text-2xl font-bold">Google Forms Sync</h1>

              <button className="bg-blue-600  text-white px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
                Add Power-Up
              </button>
            </div>
            <p className="text-gray-700">
             Connect your Trello boards to your Google Forms and automatically add cards to your boards as soon as new responses are submitted.
            </p>
               <div className="relative inline-block">
                <img src={googleformpreview} alt="screenshot" className="rounded-lg mb-6" />
                <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
                  <img
                    src={iblsumup}
                    alt="info"
                    title="External Media File"
                    className="w-5 h-5"
                  />
                </div>
                
                
              </div>

            <h2 className="text-gray-900 text-xl font-semibold">
              Syncing Google Forms with Trello never been easier 🍰
            </h2>
            <p className="text-gray-700">
              Forms Smart Sync for Trello is a Power-Up that allows you to connect your Trello boards to your Google Forms and automatically add cards to your boards as soon as new responses are coming in. You can choose any board and list to add the cards to.
            </p>
        
            <div>
           
              

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Features 😎</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li className="font-bold mb-2">
                      Real-time responses sync!
                    </li>
                    <li className="mb-2">
                     Initial sync of previous responses
                    </li>
                    <li className="mb-2">
                     Card labelling 🚀
                    </li>
                    <li className="mb-2">Card member assigning 🚀</li>
                     <li className="mb-2">Card title parametrization 🚀</li>
                     <li className="mb-2">Card description parametrization 🚀</li>
                     <li className="mb-2">Card custom fields mapping 🚀</li>
                     <li className="mb-2">Card due date setting 🚀</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">How to sync? 🤔</h3>
                  <ol className="list-decimal pl-5 text-gray-700">
                    <li className="mb-2">
                      Create a new synchronizer
                    </li>
                    <li className="mb-2">
                     Connect & select your Google account
                    </li>
                    <li className="mb-2">
                     Select a form you want to sync with
                    </li>
                    <li className="mb-2">Select a list where new responses will be placed</li>
                    <li className="mb-2">Voilà!</li>
                  </ol>
                </div>


                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    Google Forms Sync Pro 🚀
                  </h3>
                    <p className="mb-3">
                      <span className="font-bold text-gray-700">Billed monthly:  </span>$9.00 / month
                    </p>
                    <p className="mb-3">
                      <span className="font-bold text-gray-700">Billed annually:  </span> $24.00 ($2.00 / month)
                    </p>
                    <p className="mb-3">
                      Note: Google Forms Sync Pro is a subscription within workspace. That means all workspace members can use Pro features within workspace's boards.
                    </p>
                </div>
               <hr className="border-gray-300 w-full md:w-160 mb-6" />
              </div>
              <h3 className="font-semibold text-lg">Support</h3>
              <p className="mb-5">If you have any questions or problems, please don't hesitate to reach out to us at support@mig.team</p>
               <h3 className="font-semibold text-lg">Our website 🍃</h3>
              <p className="mb-5">Visit us at <span className="text-blue-500 underline">mig.team</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="  items-center w-full h-[100%] text-[#BFC1C4]">
        <div className="flex gap-4 items-center justify-center pt-30">
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
        <div className="  pb-20 flex items-center gap-3 justify-center">
          <p>
            <CompanyLogo />
          </p>
          <p>© Copyright 2025. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default GoogleFormsSync;
