import NavBar from "../../../NavBar"
import {Link} from 'react-router-dom';
import screenfullogo from '../../../../assets/screenfullogo.png';
import torch from '../../../../assets/torch.svg';
import thrbox from '../../../../assets/thrbox.svg';
import mailsumup from '../../../../assets/mailsumup.svg';
import isumup from '../../../../assets/isumup.svg';
import automated from '../../../../assets/automated.png';
import reportshare from '../../../../assets/reportshare.png';
import customcharts from '../../../../assets/customcharts.png';
import insights from '../../../../assets/insights.png';
import iblsumup from '../../../../assets/iblsumup.svg';
import locksumup from '../../../../assets/locksumup.svg';
import CompanyLogo from "../../../../assets/CompanyLogo";

const AnalyticsReportsByScreenful = () => {
  return (
    <>
    <NavBar/>
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
      <p className="m-5 inline "> <Link to="/power-ups" className="hover:underline ">power-ups </Link>
        / 
        <span className="inline hover:underline"> Analytics & Reports by Screenful</span>
      </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="space-y-6 flex flex-col items-start md:items-start sticky top-20 self-start"> 
        <img
          src={screenfullogo}
          alt="Toggl"
          className="w-40 m-2.5 md:w-56 lg:w-60 object-contain"
        />
    <div>
      <p className="text-gray-700 font-medium flex items-center gap-1">
        <img src={torch} alt="Rocket Icon" className="w-4 h-4" />
        Made by Screenful
      </p>
    <div className="inline-flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded mt-2">
      <img src={thrbox} alt="Reporting Icon" className="w-4 h-4" />
      25,000 +
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
        Analytics & Reports by <br /> Screenful is in compliance <br/>
        with{" "}
        <span className="text-blue-600 cursor-pointer underline">
          Trello's data and privacy practices
        </span>
      </p>
      <hr className="border-gray-300 w-full md:w-60" />
    </div>

    <div className="md:col-span-2 space-y-6">
      <div className="flex justify-between items-center mb-3 ">   
        <h1 className="text-2xl  font-semibold text-gray-900">Analytics & Reports by Screenful</h1>
          <button className="bg-blue-600  text-white px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
            Add Power-Up
          </button>
    </div>
        <h2 className="text-gray-900 text-3xl font-semibold">Get actionable insights from your Trello data</h2>
        <p className="font-semibold  text-black-900 ">
          Screenful is the most advanced analytics and reporting tool for Trello.
        </p>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 max-w-3xl">
  
  <p className="text-blue-600 font-medium mb-3 flex items-center gap-2">
    <span className="text-red-600 text-lg">▶</span>
    Screenful for Trello
  </p>

  <div className="rounded-lg overflow-hidden">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/K6R4qshpSas?si=FLh1u1RNfUlRqtJ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

</div>

      <p className="mb-2">Save time and get any metrics you need at a glance with custom charts and scheduled reports by <span className="text-blue-600 underline">Screenful</span>.</p>
      <p className="mb-1">Winner of the <span className="font-semibold text-l">Best Trello Power-Up</span> in Codegeist 2020.</p>
      <p className="mb-2"> <span className="text-blue-600 underline">See pricing </span>   <span className="text-blue-600 underline">Book a demo</span> </p>
      <p> <span className="font-semibold text-l">New:</span>  <span className="text-blue-600 underline">Analytics 2 is now available to all Trello users  🚀</span> </p>
      <hr className="border-gray-300 w-full md:w-160" />
      <h1 className="text-gray-900 text-2xl font-semibold">Create automated reports of your Trello data</h1>
      <p className="mb-2">Save time with time-proven templates or start from scratch. You can compile individual charts and text blocks into reports that can be shared.</p>
      <p className="text-blue-600 underline mb-4">LEARN ABOUT CUSTOM REPORTS > </p>
      <div className="relative inline-block">
        <img
          src={automated}
          alt="screenshot"
          className="rounded-lg mb-6"
        />
      <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
        <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
      </div>
      </div>

      <h1 className="text-gray-900 text-2xl font-semibold">Share and schedule reports</h1>
        <p className="mb-2">Share insights with public and private links. Send them via email or Slack on a custom schedule.</p>
        <p className="text-blue-600 underline mb-4">LEARN ABOUT REPORT SHARING > </p>
      <div className="relative inline-block">
        <img
          src={reportshare}
          alt="screenshot"
          className="rounded-lg mb-6"
        />
      <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
        <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
      </div>
      </div>

     <h1 className="text-gray-900 text-2xl font-semibold">Create custom charts using your Trello data</h1>
      <p className="mb-2">Choose from over 80 ready-made chart templates or build your own. Start with one of 15 chart types. Apply filters, segments, and groupings. Use any of your custom fields.</p>
      <p className="text-blue-600 underline mb-4">LEARN ABOUT CUSTOM CHARTS > </p>
      <div className="relative inline-block">
        <img
          src={customcharts}
          alt="screenshot"
          className="rounded-lg mb-6"
        />
        <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
          <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
        </div>
      </div>

    <h1 className="text-gray-900 text-2xl font-semibold">Get automated insights from your Trello activity</h1>
    <p className="mb-2">Automatically turn your data into actionable insights. Visualize productivity and spot bottlenecks. Track velocity, throughput, time in list, and time to complete at a team level or for the whole organization.</p>
    <p className="text-blue-600 underline mb-4">LEARN ABOUT INSIGHTS > </p>
    <div className="relative inline-block">
      <img
        src={insights}
        alt="screenshot"
        className="rounded-lg mb-6"
      />
      <div className="absolute top-3 right-3 bg-white rounded-lg p-1 shadow-md cursor-pointer">
        <img src={iblsumup} alt="info" title="External Media File" className="w-5 h-5" />
      </div>
    </div>

    <hr className="border-gray-300 w-full md:w-160" />

      <h1 className="text-gray-900 text-2xl font-semibold">What our customers are saying</h1>
      <p className="mb-2">"Accenture is working with Screenful to roll out best practice agile metrics in minutes - allowing our world-class delivery teams to be led by data." — <span className="text-blue-700 underline">Kit Friend</span>, Accenture UK</p>
      <p className="mb-2">"I'm really in love with this tool. It provides useful, actionable insights that actually help to identify process improvement opportunities with a few clicks!" — João Otávio Vieira, A5 Labs</p>
      <p className="text-blue-700 underline">See 100+ user reviews</p>
      <hr className="border-gray-300 w-full md:w-160" />
      <div>
        <div className="relative inline-block">
          <h2 className="text-gray-900 text-2xl font-semibold mb-4">Included in your free trial</h2>
          <p className="mb-2">No payment info needed. Try every feature free for 14 days.</p>
          <p className="mb-2">Here’s what you get during your trial:</p>
          <p>✅ Build custom charts using 80+ templates and advanced filters</p>
          <p>✅ Create and automate reports that run on your schedule</p>
          <p>✅ Share updates through email or Slack on a custom schedule</p>
          <p>✅ Use your custom fields to sort, group, and segment your data</p>
          <p>✅ Track timing metrics like cycle time, lead time, and time in list</p>
          <p className="mb-3">✅ Get quick help and personal onboarding if needed</p>
          <p className="mb-4">When your trial ends, pick a plan that fits your workflow: <span className="text-blue-700 underline">See pricing plans</span></p>
          <hr className="border-gray-300 w-full md:w-160 mb-3" />
          <h2 className="text-gray-900 text-2xl font-semibold mb-3">More Power-Ups by Screenful</h2>
          <p className="mb-3"><span className="text-blue-600 underline mb-3">Scaled</span> is the all-in-one toolkit for your Trello boards. You can create epics, track <br /> dependencies between cards, and set estimates and priorities for cards. It gives you the 
          <br /> power to manage and track work on a high level across multiple boards.</p>
          <p className="mb-3"> <span className="text-blue-600 underline">Epic Cards</span> allows you to group cards into larger bodies of work, epics.</p>
          <p className="mb-3"><span className="text-blue-600 underline">Card Size</span> allows you to set weights (e.g., hours or story points) for your cards to estimate how much work each card requires.</p>
          <p className="mb-3"><span className="text-blue-600 underline">Card Dependencies</span> allows setting dependencies between cards (is blocking, is related, etc.).</p>
          <p className="mb-3"><span className="text-blue-600 underline">Card Priority</span> enables setting priorities and sorting cards according to their importance.</p>
          <hr className="border-gray-300 w-full md:w-160 mb-3"/>
          <p className="mb-3">Learn more about<span className="text-blue-600 underline"> Analytics & Reports for Trello.</span></p>
          <p className="mb-3">See the latest <span className="text-blue-600 underline">Screenful product updates</span></p>
          <hr className="border-gray-300 w-full md:w-160 mb-3" />
        </div>
      </div>
    </div>
  </div>
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
export default AnalyticsReportsByScreenful
