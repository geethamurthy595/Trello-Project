import NavBar from '../../../NavBar';
import { Link } from "react-router-dom"
import torch from '../../../../assets/torch.svg';
import thrbox from '../../../../assets/thrbox.svg';
import mailsumup from '../../../../assets/mailsumup.svg';
import isumup from '../../../../assets/isumup.svg';
import locksumup from '../../../../assets/locksumup.svg';
import iblsumup from '../../../../assets/iblsumup.svg';
import CompanyLogo from "../../../../assets/CompanyLogo";
import bvt from '../../../../assets/bvtlogo.svg';
import hero from '../../../../assets/hero.gif';
import guideopenbv from '../../../../assets/guideopenbv.gif';
import guideopensmall from '../../../../assets/guideopensmall.gif';
import guidecompletiontoggle from '../../../../assets/guidecompletiontoggle.gif';
import guidedragreschedule from '../../../../assets/guidedragreschedule.gif';
import selectmultipletasks from '../../../../assets/selectmultipletasks.gif';
import adjusttaskduration from '../../../../assets/adjusttaskduration.gif';
import filtertasksteammember from '../../../../assets/filtertasksteammember.gif';
import multipletasksreassign from '../../../../assets/multipletasksreassign.gif';
import multipletaskscompletion from '../../../../assets/multipletaskscompletion.gif';
import guidereassign from '../../../../assets/guidereassign.gif';

import guideflyouteditor from '../../../../assets/guideflyouteditor.gif';
import checkitemcompletiontoggle from '../../../../assets/checkitemcompletiontoggle.gif';
import guidetimelineslider from '../../../../assets/guidetimelineslider.gif';
import guideaddcheckitem from '../../../../assets/guideaddcheckitem.gif';
import guidedetailflyouts from '../../../../assets/guidedetailflyouts.gif';
import guidetextsearch from '../../../../assets/guidetextsearch.gif';

const BoardVisualizerForTrello = () => {
  return (
    <>
    <NavBar/>
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
         <p className="m-5 inline "> <Link to="/power-ups" className="hover:underline ">power-ups </Link>
           / 
           <span className="inline hover:underline"> Board Visualizer for Trello</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           
          {/* LEFT SIDE */}
          <div className="space-y-6 flex flex-col items-start md:items-start sticky top-20 self-start">
              <img
              src={bvt}
              alt="Toggl"
              className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
            />

            <div>
              <p className="text-gray-700 font-medium flex items-center gap-1">
                <img src={torch} alt="Reporting Icon" className="w-4 h-4"/>
                Made by Agnostic Digital
              </p>
          <div className="inline-flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded mt-2">
                <img src={thrbox} alt="Reporting Icon" className="w-4 h-4" />
                500 +
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
              Board Visualizer for Trello is in<br/>
              compliance with{" "}
              <span className="text-blue-600 cursor-pointer underline">
                Trello's data <br /> and privacy practices.
              </span>
            </p>
            <hr className="border-gray-300 w-full md:w-60" />
          </div>

           {/* RIGHT SIDE */}
          <div className="md:col-span-2 space-y-6">

 <div className="flex justify-between items-center">
  <div>
  <h1 className="text-3xl md:text-xl font-bold">Board Visualizer for Trello</h1>
  <h3 className="text-3xl md:text-xl font-semibold">Overview</h3>
   </div>

  <button className="bg-blue-600  text-white px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
    Add Power-Up
  </button>
</div>

<div className="relative inline-block">
    <img
      src={hero}
      alt="screenshot"
      className="rounded-lg mb-6"
    />
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    </div>

  <p className="text-gray-700">
     Board Visualizer for Trello transforms your Trello checklists into a powerful interactive timeline, giving you a complete view of all tasks, deadlines, and team assignments across your entire board. See project timelines at a glance, understand team workload, and reschedule work with simple drag-and-drop—all while staying perfectly synced with Trello.
  </p>
    <p className="text-gray-700">Transform your Trello board from a task list into a visual project timeline. We hope you enjoy the Board Visualizer PowerUp.</p>
       
       <hr className="border-gray-300 w-full md:w-160" />
 
 <h3 className="text-gray-900 text-2xl font-semibold mb-3">Opening Board Visualizer</h3>
 <p className="text-gray-600 text-base mb-4">Click the Board Visualizer button in your Trello board's top menu. The timeline modal opens showing all your board's tasks.</p>
    <div className="relative inline-block">
    <img
      src={guideopenbv}
      alt="screenshot"
      className="rounded-lg mb-6"
    />

    <p className="text-gray-600 text-base mb-4">If your screen is too narrow, Trello doesn't show all board buttons.  You can use the 3 dots menu instead to click on the Board Visualizer button…</p>

 <div className="relative inline-block">
    <img
      src={guideopensmall}
      alt="screenshot"
      className="rounded-lg mb-6"
    />
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    </div>

    </div>

<hr className="border-gray-300 w-full md:w-160" />

<h1 className="text-3xl md:text-xl font-bold">What you can do</h1>
  <h3 className="text-xl md:text-xl font-bold">Toggle Completed Items</h3>
  <p className="text-gray-600 text-base mb-4">Click the completion toggle button in the header to show or hide completed tasks. Watch as they smoothly fade in and out. Completed items display with strikethrough styling when visible, keeping your timeline clean while preserving your history.</p>
   <div className="relative inline-block">
    <img
      src={guidecompletiontoggle}
      alt="screenshot"
      className="rounded-lg mb-6"
    />
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    </div>

<hr className="border-gray-300 w-full md:w-160" />

 <h3 className="text-gray-900 text-2xl font-semibold mb-3">Reschedule Tasks with Drag & Drop</h3>
    <p className="text-gray-600 text-base mb-4">Click and drag any checkitem to a new date on the timeline. A date tooltip follows your cursor showing exactly where the task will land. Release to drop—the change syncs to Trello automatically.</p>
     <div className="relative inline-block">
    <img
      src={guidedragreschedule}
      alt="screenshot"
      className="rounded-lg mb-6"
    />
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    </div>

<hr className="border-gray-300 w-full md:w-160" />

     <h3 className="text-gray-900 text-2xl font-semibold mb-3">Adjust Task Duration</h3>
    <p className="text-gray-600 text-base mb-4">Hover over a checkitem to reveal the resize handles. Click and drag left or right to shorten or extend the task duration. The due date updates automatically as you drag.</p>
     <div className="relative inline-block">
    <img
      src={adjusttaskduration}
      alt="screenshot"
      className="rounded-lg mb-6 w-132 h-46"
    />
    <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
      <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
    </div>
    </div>

    
<hr className="border-gray-300 w-full md:w-160" />

     <h3 className="text-gray-900 text-2xl font-semibold mb-3">Filter Tasks by Team Member</h3>
<p className="text-gray-600 text-base mb-4">
Click any team member's avatar in the header to show only their assigned tasks. Click again to clear the filter. Combine with other filters to see specific subsets like "Sarah's incomplete tasks."
</p>

<div className="relative inline-block">
  <img
    src={filtertasksteammember}
    alt="cumulative-flow"
    className="rounded-lg mb-6"
  />
  <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
    <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
  </div>
</div>

<hr className="border-gray-300 w-full md:w-160" />

<h3 className="text-gray-900 text-2xl font-semibold mb-3">Reassign Tasks to Another Member
</h3>
<p className="text-gray-600 text-base mb-4">
Select one or more checkitems, then drag them to a different member's avatar in the header. Release to reassign all selected tasks at once. The assignments sync to Trello immediately.
</p>

<div className="relative inline-block">
  <img
    src={guidereassign}
    alt="cumulative-flow"
    className="rounded-lg mb-6 w-132 h-46"
  />
  <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
    <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
  </div>
</div>

<hr className="border-gray-300 w-full md:w-160" />

<h3 className="text-gray-900 text-2xl font-semibold mb-3">Select Multiple Tasks</h3>
<p className="text-gray-600 text-base mb-4">
Click and drag across the timeline to create a selection box around multiple checkitems. All items within the box get selected. Now drag them together to reschedule or reassign them as a group.
</p>

<div className="relative inline-block">
  <img
    src={selectmultipletasks}  
    alt="velocity-chart"
    className="rounded-lg mb-6 w-150 h-46"
  />

  <p className="text-gray-600 text-base mb-4">also works with completion updates…</p>
  
  <div className="relative inline-block">
  <img
    src={multipletaskscompletion}  
    alt="velocity-chart"
    className="rounded-lg mb-6 w-132 h-46"
  />

<p className="text-gray-600 text-base mb-4">and  reassignment…</p>

<div className="relative inline-block">
  <img
    src={multipletasksreassign}  
    alt="velocity-chart"
    className="rounded-lg mb-6 w-132 h-46"
  />
  </div>
  </div>
  </div>

<hr className="border-gray-300 w-full md:w-160" />


  <h3 className="text-gray-900 text-2xl font-semibold mb-3">Search and Filter Tasks</h3>
<p className="text-gray-600 text-base mb-4">
Type in the search box to filter tasks in real-time. Search works across checkitem names, card names, and card labels. Clear the search to show all tasks again.
</p>

<div className="relative inline-block">
  <img
    src={guidetextsearch}
    alt="cumulative-flow"
    className="rounded-lg mb-6"
  />
  <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
    <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
  </div>
</div>

<hr className="border-gray-300 w-full md:w-160" />

<h3 className="text-gray-900 text-2xl font-semibold mb-3">View Task Details on Hover</h3>
<p className="text-gray-600 text-base mb-4">
Hover your mouse over any checkitem to reveal the detail flyout. See the full task name, duration, assigned member, and quick action buttons—all without clicking away from the timeline.
</p>

<div className="relative inline-block">
  <img
    src={guidedetailflyouts}
    alt="cumulative-flow"
    className="rounded-lg mb-6"
  />
  <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
    <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
  </div>
</div>

<hr className="border-gray-300 w-full md:w-160" />


<h3 className="text-gray-900 text-2xl font-semibold mb-3">Create New Tasks</h3>
<p className="text-gray-600 text-base mb-4">
Drag the "+" icon from the header onto any date on the timeline. Type the task name inline and press Enter to save—it syncs to Trello automatically.
</p>

<div className="relative inline-block">
  <img
    src={guideaddcheckitem}
    alt="cumulative-flow"
    className="rounded-lg mb-6 w-130 h-70"
  />
  <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
    <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
  </div>
</div>

<hr className="border-gray-300 w-full md:w-160" />

<h3 className="text-gray-900 text-2xl font-semibold mb-3">Zoom and Navigate the Timeline</h3>
<p className="text-gray-600 text-base mb-4">
Use the slider to see more or fewer days on the timeline. Scroll horizontally to navigate across dates.
</p>

<div className="relative inline-block">
  <img
    src={guidetimelineslider}
    alt="cumulative-flow"
    className="rounded-lg mb-6"
  />
  <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
    <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
  </div>
</div>

<hr className="border-gray-300 w-full md:w-160" />

<h3 className="text-gray-900 text-2xl font-semibold mb-3">Mark Tasks Complete</h3>
<p className="text-gray-600 text-base mb-4">
Click the checkbox on any checkitem to mark it complete. Or hover to open the flyout and click the "Mark Done" button. The strikethrough styling updates instantly and syncs to Trello.
</p>

<div className="relative inline-block">
  <img
    src={checkitemcompletiontoggle}
    alt="cumulative-flow"
    className="rounded-lg mb-6 w-150 h-70"
  />
  <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
    <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
  </div>
</div>

<hr className="border-gray-300 w-full md:w-160" />


<h3 className="text-gray-900 text-2xl font-semibold mb-3">Markdown Auto-formatting</h3>
<p className="text-gray-600 text-base mb-4">
Use Keyboard shortcuts just like in Trello! Formats automatically.
</p>
<ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
  <li><span className="font-medium">Cmd/Ctrl+B </span>  - Bold text</li>
  <li><span className="font-medium">Cmd/Ctrl+I </span>  - Italic text</li>
  <li><span className="font-medium">Cmd/Ctrl+Shift+S </span> - Strikethrough text</li>
  <li><span className="font-medium">Cmd/Ctrl+K </span> - Create hyperlink (prompts for URL)</li>
</ul>
<p className="text-gray-600 text-base mb-4">Don’t touch that mouse!</p>
<ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
  <li><span className="font-medium">Enter </span> - Save changes and close editor</li>
  <li><span className="font-medium">Escape </span> - Close editor without saving</li>
</ul>
<p className="text-gray-600 text-base mb-4">OR just…</p>
<ul className="list-disc pl-5 space-y-2 text-gray-700">
  <li><span className="font-medium">Click </span> - Click outside the editor to save changes.</li>
</ul>
<div className="relative inline-block">
  <img
    src={guideflyouteditor}
    alt="cumulative-flow"
    className="rounded-lg mb-6 "
  />
  <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
    <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
  </div>
</div>

<hr className="border-gray-300 w-full md:w-160" />

<h3 className="text-gray-900 text-2xl font-semibold mb-3">Technical Details</h3>
<p className="text-gray-600 text-base mb-4">
  <span className="font-medium text-black">Privacy: </span> 
  Board Visualizer operates client-side in your browser and does not store data.
</p>

<p className="text-gray-600 text-base mb-4">
  <span className="font-medium text-black">Sync: </span> 
  All edits sync bidirectionally in real-time using Trello's official API.
</p>

<p className="text-gray-600 text-base mb-4">
  <span className="font-medium text-black">Compatibility: </span> 
  Works with any Trello board containing cards with checklists.
</p>

<hr className="border-gray-300 w-full md:w-160" />

<h3 className="text-gray-900 text-2xl font-semibold mb-3">Pricing Structure</h3>
<ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
  <li>$4.99 per month</li>
  <li>7-day free trial - charge occurs when trial ends.</li>
  <li>All features included - Timeline visualization, drag-and-drop scheduling, real-time sync, filtering, and search</li>
  <li>Cancel anytime - No long-term commitment.</li>
</ul>
</div>

   </div></div>
 
    
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

export default BoardVisualizerForTrello


