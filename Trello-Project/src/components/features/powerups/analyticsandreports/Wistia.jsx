import NavBar from "../../../NavBar"
import {Link} from 'react-router-dom';
import wistiaflags from '../../../../assets/wistiaflags.png';
import torch from '../../../../assets/torch.svg';
import thrbox from '../../../../assets/thrbox.svg';
import iblsumup from '../../../../assets/iblsumup.svg';
import locksumup from '../../../../assets/locksumup.svg';
import wistia1 from '../../../../assets/wistia1.png';
import CompanyLogo from "../../../../assets/CompanyLogo";

const Wistia = () => {
  return (
    <>
    <NavBar/>
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
         <p className="m-5 inline "> <Link to="/power-ups" className="hover:underline ">power-ups </Link>
           / 
           <span className="inline hover:underline">Wistia</span>
          </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           
          {/* LEFT SIDE */}
          <div className="space-y-6 flex flex-col items-start md:items-start sticky top-20 self-start">
         
            <img
              src={wistiaflags}
              alt="Toggl"
              className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
            />

            <div>
              <p className="text-gray-700 font-medium flex items-center gap-1">
                <img src={torch} alt="Rocket Icon" className="w-4 h-4" />
                Made by Wistia, Inc.
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
                 Marketing & social media 
                </span>

                <span className="border border-gray-300 px-3 py-1 rounded text-xs">
                  Analytics & reporting
                </span>
              </div>
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <div className="text-sm text-gray-600 space-y-2">
              
            </div>

            <hr className="border-gray-300 w-full md:w-60" />

            <p className="text-sm text-gray-600">
              <img
                src={locksumup}
                alt="Compliance Icon"
                className="inline w-4 h-4 mr-1"
              />
            Wistia is in compliance with{" "} <br />
              <span className="text-blue-600 cursor-pointer underline">
                Trello's data and privacy <br /> practices
              </span>
            </p>
            <hr className="border-gray-300 w-full md:w-60" />
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 space-y-6">

            <div className="flex justify-between items-center">
  <h1 className="text-3xl md:text-xl font-bold">Wistia</h1>

  <button className="bg-blue-600  text-white px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
    Add Power-Up
  </button>
</div>
            <p className="text-gray-700">
             The <span className="text-blue-700 underline">Wistia</span> Trello Power-Up makes it easier and more delightful to manage and measure your video-related work in Trello.
            </p>
     
            

            <div>
              <h2 className="text-xl font-semibold mb-3">Screenshot</h2>

           <div className="relative inline-block">

    <img
      src={wistia1}
      alt="screenshot"
      className="rounded-lg mb-6"
    />
<div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    </div>
 
<p className="text-gray-700 mb-2">If any of these questions sound familiar, this Power-Up's for you:</p>

 <ul className="list-disc pl-6 space-y-4 text-gray-800 text-sm">
  <li>
    <span className="font-semibold mb-2">
      How's that video performing on our new landing page?
    </span>
    <p className="mt-1 text-gray-700">
      With the Wistia Power-Up, you can see your video's stats on the card.
    </p>
  </li>

  <li>
    <span className="font-semibold mb-2">
      What did our first version of the homepage video look like?
    </span>
    <p className="mt-1 text-gray-700">
      Quickly access the video, and watch the whole thing right on the card.
    </p>
  </li>

  <li>
    <span className="font-semibold mb-2">
      Did the Creative Team finish that launch video?
    </span>
    <p className="mt-1 text-gray-700">
      You guessed it. They probably added it to the card!
    </p>
  </li>
</ul>
    
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
export default Wistia
