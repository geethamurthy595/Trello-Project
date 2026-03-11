import NavBar from "../../../NavBar"
import { Link } from "react-router-dom"
import dashio from "../../../../assets/dashio-icon.png";
import torch from "../../../../assets/torch.svg";
import thrbox from '../../../../assets/thrbox.svg';
import mailsumup from '../../../../assets/mailsumup.svg';
import isumup from '../../../../assets/isumup.svg';
import iblsumup from '../../../../assets/iblsumup.svg';
import locksumup from '../../../../assets/locksumup.svg';
import managesubscription from '../../../../assets/manage_subscription.png'
import burndown from '../../../../assets/burndown.gif';
import distribution from '../../../../assets/distribution.gif';
import cumulative from '../../../../assets/cumulative.gif';
import teamload from '../../../../assets/teamload.gif';
import velocity from '../../../../assets/velocity.gif';
import cycletime from '../../../../assets/cycletime.gif';
import CompanyLogo from "../../../../assets/CompanyLogo";


const Dashio = () => {
  return (
    <>
    <NavBar/>
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
         <p className="m-5 inline "> <Link to="/power-ups" className="hover:underline ">power-ups </Link>
           / 
           <span className="inline hover:underline"> Dashio</span>
          </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           
          {/* LEFT SIDE */}
          <div className="space-y-6 flex flex-col items-start md:items-start sticky top-20 self-start">
         
         
            <img
              src={dashio}
              alt="Toggl"
              className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
            />

            <div>
              <p className="text-gray-700 font-medium flex items-center gap-1">
                <img src={torch} alt="Reporting Icon" className="w-4 h-4"/>
                Made by Christian Lacerda
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
              Dashio stores personal data and <br/>
              is in compliance with{" "}
              <span className="text-blue-600 cursor-pointer underline">
                Trello's <br /> data and privacy practices.
              </span>
            </p>
            <hr className="border-gray-300 w-full md:w-60" />
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 space-y-6">

            <div className="flex justify-between items-center">
  <h1 className="text-3xl md:text-xl font-bold">Dashio</h1>

  <button className="bg-blue-600  text-white px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
    Add Power-Up
  </button>
</div>
            
    <p className="text-gray-700">
      With Dashio, we believe you should spend more time with your team instead of tweaking charts to gain meaningful insights from your Trello boards. Our charts update in real-time and, we don't require complex setups.
    </p>
    <p><span className="text-blue-600 underline">Try it for free</span>, and let us know what you think!</p>
    <p>You can <span className="font-semibold">cancel your subscription</span> at any time by opening your Dashio Dashboard Options menu and clicking on Manage Subscription:</p>
     
  <div className="relative inline-block">

    <img
      src={managesubscription}
      alt="screenshot"
      className="rounded-lg mb-6"
    />
   
    </div>

 <h1 className="text-gray-900 text-3xl font-semibold mb-6">Available Charts</h1> 
 <h3 className="text-gray-900 text-2xl font-semibold mb-3">Burndown</h3>
 <p className="text-black-500 text-l mb-6">Keep an eye on delivering goals by tracking completed work during the sprint.</p>
    <div className="relative inline-block">
    <img
      src={burndown}
      alt="screenshot"
      className="rounded-lg mb-6"
    />
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    </div>

     <h3 className="text-gray-900 text-2xl font-semibold mb-3">Distribution</h3>
    <p className="text-black-500 text-l mb-6">Make sure the incoming work is aligned with business priorities. Use labels to see how your tasks are distributed on your board.</p>
     <div className="relative inline-block">
    <img
      src={distribution}
      alt="screenshot"
      className="rounded-lg mb-6"
    />
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    </div>

     <h3 className="text-gray-900 text-2xl font-semibold mb-3">Team Load:</h3>
    <p className="text-black-500 text-l mb-6">Avoid burnouts and keep the workload balanced among team members.</p>
     <div className="relative inline-block">
    <img
      src={teamload}
      alt="screenshot"
      className="rounded-lg mb-6"
    />
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    </div>


     <h3 className="text-gray-900 text-2xl font-semibold mb-3">Cumulative Flow</h3>
<p className="text-black-500 text-l mb-6">
Keep tasks moving smoothly and identify bottlenecks by visualizing how work progresses across stages.
</p>

<div className="relative inline-block">
  <img
    src={cumulative}
    alt="cumulative-flow"
    className="rounded-lg mb-6"
  />
  <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
    <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
  </div>
</div>

<h3 className="text-gray-900 text-2xl font-semibold mb-3">Cycle Time
</h3>
<p className="text-black-500 text-l mb-6">
Have higher throughput and predictability with short cycle times.
</p>

<div className="relative inline-block">
  <img
    src={cycletime}
    alt="cumulative-flow"
    className="rounded-lg mb-6"
  />
  <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
    <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
  </div>
</div>

<h3 className="text-gray-900 text-2xl font-semibold mb-3">Velocity</h3>
<p className="text-black-500 text-l mb-6">
Predict how quickly the team can work through the backlog in the next sprints.
</p>

<div className="relative inline-block">
  <img
    src={velocity}  
    alt="velocity-chart"
    className="rounded-lg mb-6"
  />
   <p>If you have questions, contact us at support@dashio.app.</p>
  <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
    <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
  </div>
</div>

   </div></div>
   </div>
    
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

export default Dashio





