import NavBar from "../../../NavBar"
import { Link } from "react-router-dom"
import goodganttlogo from "../../../../assets/goodganttlogo.png";
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


const GoodGantt = () => {
  return (
    <>
    <NavBar/>
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
         <p className="m-5 inline "> power-ups 
           / 
           <span className="inline hover:underline"> GoodGantt</span>
          </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           
          {/* LEFT SIDE */}
          <div className="space-y-6 flex flex-col items-start md:items-start sticky top-20 self-start">
         
         
            <img
              src={goodganttlogo}
              alt="logo"
              className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
            />

            <div>
              <p className="text-gray-700 font-medium flex items-center gap-1">
                <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2...41eiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+" alt="Reporting Icon" className="w-4 h-4"/>
                Made by GoodGantt Inc.
              </p>

              <div className="inline-flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded mt-2">
                <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2...J6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=" alt="Reporting Icon" className="w-4 h-4" />
                10,000 +
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
                <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2...oiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==" alt="Email Icon" className="w-4 h-4" />
                Contact support
              </p>

              <p className="cursor-pointer hover:underline flex items-center gap-1">
                <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2...EgMS0yIDAgMSAxIDAgMCAxIDIgMCI+PC9wYXRoPjwvc3ZnPg==" alt="Info Icon" className="w-4 h-4" />
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
             GoodGantt stores personal data <br/>
              and is in compliance with{" "} <br/>
              <span className="text-blue-600 cursor-pointer underline">
                Trello's data and privacy 
               <br/> practices.
              </span>
            </p>
            <hr className="border-gray-300 w-full md:w-60" />
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 space-y-6">

            <div className="flex justify-between items-center">
  <h1 className="text-3xl md:text-xl font-bold">GoodGantt</h1>

  <button className="bg-blue-600  text-white px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
    Add Power-Up
  </button>
</div>
            
    <p className="text-gray-700">
     GoodGantt allows you to build gantt charts based on your Trello cards.
    </p>

 <h6 className="text-gray-900 text-2xl font-semibold mb-6">All boards in one place</h6> 
    <div className="relative inline-block">
    <img
      src="https://dl.dropboxusercontent.com/s/gx5d4183qzg35gk/projects-load.gif"
      alt="screenshot"
      className="rounded-lg mb-6"
    />
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2...AtMiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+" alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    <p>You can work on several boards at once in one window. Enable or disable the boards you need to display.</p>
    </div>

     <h5 className="text-gray-900 text-2xl font-semibold mb-3">Realtime work</h5>
    <p className="text-black-500 text-l mb-6">Work as a team and track changes in real time.</p>
    <h5 className="text-gray-900 text-2xl font-semibold mb-3">Tasks grouping</h5>
     <div className="relative inline-block">
    <img
      src="https://dl.dropboxusercontent.com/s/gx5d4183qzg35gk/projects-load.gif"
      alt="screenshot"
      className="rounded-lg mb-6"
    />
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2...AtMiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+" alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    <p>Group tasks and build any hierarchy. Keep track of the progress of the exercise throughout the group.</p>
    </div>

     <h5 className="text-gray-900 text-2xl font-semibold mb-3">Milestones</h5>
    <p className="text-black-500 text-l mb-6">Mark milestones on the timeline</p>
    <h4 className="text-gray-900 text-2xl font-semibold mb-3">Automatic cards placement</h4>
     <div className="relative inline-block">
    <img
      src="https://dl.dropboxusercontent.com/s/9pp2xun5v97uagt/kts%20default.gif"
      alt="screenshot"
      className="rounded-lg mb-6"
    />
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2...AtMiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+" alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    <p>Cards created through Gantt will be placed in the list that you specify in the project settings.</p>
    </div>


     <h3 className="text-gray-900 text-2xl font-semibold mb-3">Workload panel</h3>

<div className="relative inline-block">
  <img
    src="https://goodgantt.com/external-sources/Workload-panel-Opening.gif"
    alt="cumulative-flow"
    className="rounded-lg mb-6"
  />
  <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
    <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2...AtMiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+" alt="info" title="External Media File" className="w-5 h-5" />
  </div>
</div>
<p>Watch for the load of your team members and evenly distribute the load between them using the access panel. Choose between the number of tasks and the number of working hours per day.</p>

<h5 className="text-gray-900 text-2xl font-semibold mb-3">Gantt Chart Export</h5>
<p>You can export a gantt chart on the Professional plan in the following types:</p>
<ul className="list-disc pl-5 space-y-2 text-gray-700">
  <li>PNG</li>
  <li>PDF</li>
  <li>Excel</li>
  <li>MS Project</li>
  <li>iCal/Google calendar/Outlook</li>
</ul>
<h5 className="text-gray-900 text-2xl font-semibold mb-3">[SOON] Dependences</h5>
<p>Build dependence between tasks. Any changes in terms will shift related tasks.</p>
<h5 className="text-gray-900 text-2xl font-semibold mb-3">[SOON] Tasks progress</h5>
<p>Make subjective progress on the task in order to understand at what stage the readiness is.</p>
<h5 className="text-gray-900 text-2xl font-semibold mb-3">[SOON] Connect your time trackers</h5>
<p>Connect your favorite time trackers and track your employees' performance right on the Gantt chart. Tracked time is displayed as a green bar in the task line.</p>
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
                   <img src="https://trello.com/assets/a84c1127dbd06040faf9.svg" className="h-10 w-40"/>
                    <p>© Copyright 2025. All rights reserved.</p>
                </div>
            </footer>
    </>
  )
}

export default GoodGantt





