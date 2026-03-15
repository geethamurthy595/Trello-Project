import React,{Fragment, useState} from 'react'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'
import img1 from '../../../../assets/crossimg1.png'
import img4 from "../../../../assets/timetrackerimg3.svg"
import img5 from "../../../../assets/timetrackerimg4.png"
import { CiMail } from 'react-icons/ci'
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'
import { FaDivide } from 'react-icons/fa'

const CrossBoardReportingAndDashboard = () => {
    let[state,setState]=useState(true);
    const keyFs=[
        <>📊 <strong>Unified Analytics:</strong> Pull data from unlimited boards and workspaces for real-time <strong>project tracking</strong> and instant <strong>status reports</strong>.</>,
        <>🎯 <strong>KPI & Statistics:</strong> Monitor project health with automated <strong>card count</strong>. Track <strong>statistics</strong> like "Tasks due today", "Bugs", or "High Priority" to spot bottlenecks instantly</>,
        <>📈 <strong>Visual Reporting:</strong> Visualize your data with customizable <strong>charts</strong>. Group cards by <strong>any field</strong> — including lists, labels, members, due dates, and <strong>custom fields</strong>.</>,
        <>📤 <strong>Export to Excel:</strong> Extract raw data from any widget or chart to <strong> Excel</strong> for deeper analysis.</>,
        <>🧩 <strong>Multi-Tab Dashboards:</strong> Don't cram everything onto one screen. Create separate dashboards and switch between them instantly using <strong>tabs</strong> . Build each view on a flexible grid with <strong>table views</strong>, charts, and <strong>notes</strong>.</>,
        <>🌍 <strong>Global Team Collaboration:</strong> Built for distributed teams. Avoid confusion with different <strong>date formats</strong> by setting individual <strong>time zones</strong> for each widget. Whether your team is in the US, EU, or India, ensure that "Today", "This week", and <strong>due dates</strong> are always accurate for every local office.</>,
        <>👥 <strong>Team Visibility:</strong> Share live dashboards with stakeholders. Keep everyone aligned — no more manual status updates.</>
    ]
    const professionalAnalytics=[
        <>💰 <strong>Financials:</strong> Automatically <strong>sum up</strong> budgets, costs, or invoices.</>,
        <>⏳ <strong>Performance:</strong> Track effort, <strong>story points</strong>, or story-based progress.</>,
        <>🚦 <strong>Priorities:</strong> Create a <strong>custom field report</strong> to filter by importance or status.</>
    ]
    const allPaidPlansInclude=[
        <>👥 <strong>Unlimited Users: Pay for boards, not for people. No per-user fees</strong>.</>,
        <>🔄 <strong>Board Replacement:</strong> Flexible management of your dashboard sources.</>,
        <>📊 <strong>Full Chart Access:</strong> All widget types and visual reports included.</>
    ]
    const chooseYourTier=[
        <><strong>Basic (€9.90/mo):</strong> Perfect for small projects. Manage <strong>5 boards</strong> with monthly replacement.</>,
        <><strong>Standard (€17.90/mo)</strong>: For growing teams. Manage <strong>10 boards</strong> with replacement every 14 days</>,
        <><strong>Pro (€29.90/mo)</strong>: Unlock <strong>20 boards</strong> with replacement every 7 days and <strong>Dashboard Sharing</strong> (free for viewers).</>,
        <><strong>Pro+ (€39.90/mo)</strong>: The ultimate solution. <strong>30 boards</strong>, unlimited replacements, and <strong>Dashboard Sharing</strong> (free for viewers).</>,
        <><strong>Enterprise</strong>: Need more than 30 boards? Contact us for custom limits and priority support.</>
    ]
    const globalChanges=[
        'Exit from Beta: The app is moving to official release status. Thank you for helping us improve during the testing phase!',
        'Archived cards support: Support for archived Trello cards has been added for every widget type. You can now analyze both current and archived data for a complete view of your productivity.',
        'Enterprise Plan: A new subscription plan has been launched for large teams and companies requiring advanced features and a tailored approach.'
    ]
    const advancedFiltering=[
        'Custom Fields support: For “Dropdown” type fields, a new filtering condition “Is filled” has been added. This allows you to quickly filter out cards where no value is selected.',
        'Trello standard fields improvement: For “Members” and “Labels” fields, the “Is filled” filtering condition has also been implemented.',
        `Updated calendars: We have switched to an improved period selection interface. The updated calendar now works both in individual widget settings and in the global “Additional date menu”.`
    ]
    const accessManagement=[
        'Sharing permissions control: Improved security system — users viewing a shared dashboard now have read-only rights and cannot change the original structure.',
        `Unrestricted editing of copies: If you make a copy of a shared dashboard, you automatically become its “owner”. This removes all editing and setup restrictions in your personal copy.`,
        'Post-Trial information: Added notifications when switching to a new plan. If you actively used the “Share dashboard” feature during your trial and your new plan does not support it, the app will warn you to avoid losing access for your colleagues.'
    ]
    const sourcesAndFiltering=[
        'Flexible date control: you can now choose which “date” field is used to build the widget’s time period.',
        'Simplified source selection: the extra “Data source” dropdown has been removed since only one source is currently available, saving time when setting up a widget.',
        'Widget data filtering: for the Trello field “DateLastActivity”, the mandatory “is filled” condition has been removed, allowing the widget to include a wider range of cards.'
    ]
    const widgetsAndDataPreview=[
        'Quick access to data: for all widget types (except text widgets), the preview now includes a “View data” button so you can instantly verify the information before saving.',
        "Simplified widget menu: if a board is disconnected and the widget can’t be generated, the menu now shows only “Delete widget” to avoid confusion with inactive actions.",
        'Text widgets: board selection is now restricted—text widgets are tied directly to the dashboard.'
    ]
    const uiUxImprovements=[
        'New calendar logic: the time period is now set using two fixed dates (from/to) without a moving highlight.',
        `Workspace optimization: when the “Additional date menu” is activated, the search field is automatically hidden to prevent clutter and improve navigation.`,
        `Pie chart update: segment labels have been shortened, making the chart more readable and compact.`,
        `Navigation fix: the arrow alignment in the language and theme dropdowns has been corrected.`,
        `Settings design: in the widget settings window, the top padding has been reduced and a background fill has been added to the bottom area to clearly separate sections.`
    ]
    const bugFixes=[`Widget name saving: fixed a critical issue where a new widget’s name might not be saved after returning to dashboards.`]
    const update1_1=[
        `For pie charts, when Data labels are enabled, values are now also shown as percentages.`,
        `The top bar has been removed to give dashboards more working space.`,
        `Fixed the display of the “What’s new” indicator on icons.`,
        `Updated the appearance of the buttons in the pricing plans window.`
    ]
  return (
    <div>
       <>
      <NavBar/>
      <div className="ml-65 mt-10 sticky top-20 ">
        <p>
          <Link>Power-Ups</Link>/ <Link>T&M: Time tracking for Trello cards</Link>
        </p>
      </div>
      <section className="flex mt-5 w-[65%] m-auto gap-16  ">
        <div className="flex w-90 h-130 justify-start sticky top-35">
          <div className="   rounded-lg    text-center">
            <img
              src={img1}
              alt=""
              className="block mx-auto w-56 h-56"
            />
            <p className="mt-2 flex justify-center gap-3"><img className='w-5 h-5' src={img4} alt="" />Made by Plain & Simple Solution</p>
            <p className="bg-gray-100 w-20 ml-25 flex justify-center gap-3"><img className='w-5 h-5' src={img5} alt="" />100+</p>
            <br />
            <hr className="border-t border-gray-300"></hr>
            <br></br>

            <h1 className="text-l font-bold text-black flex justify-start">
              Categories
            </h1>
            <div className="flex space-x-2 flex-col">
              <a
                href="Analytic&reporting"
                className="text-xs px-3 py-1 border border-gray-200 w-[140px] rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300"
              >
                Analytic & Reporting
              </a>
              <a
                href="IT & project management"
                className=" text-xs px-2 py-1 border w-[140px] border-gray-200 rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300 "
              >
                IT & project management
              </a>
            </div>
            <br />
            <hr className="border-t border-gray-300"></hr>

            <div className="flex items-center">
              <CiMail />
              <a
                href="Contact Support"
                className="  text-xxs px-2 py-1  border-gray-200 rounded hover:underline hover:text-blue-600 transition-all duration-300 "
              >
                Contact Support
              </a>
              <br />
            </div>
            <div className="flex items-center">
              <MdOutlinePrivacyTip />
              <a
                href=" Privacy Policy"
                className="  text-xxs px-2 py-1  border-gray-200 rounded hover:underline hover:text-blue-600 transition-all duration-300 "
              >
                Privacy Policy
              </a>
              <br />
            </div>
            <hr className="border-t border-gray-300"></hr>
          <div>
            <br />
  <p className='font-medium text-gray-600 text-left'>Cross-Board Reporting & Dashboards stores personal data and is in compliance with</p>
  <a href="#" className="flex items-center text-blue-500 underline gap-1 mt-1">
    <AiTwotoneLock className="w-6 h-6" />
    Trello's data and privacy practices.
  </a>
</div>

          </div>
          
        </div>
      
        <div className="w-full md:w-[70%] m-auto mb-6 ">
          <div className="flex justify-between items-center ">
           
            <h1 className="text-2xl font-bold text-black">Cross-Board Reporting & Dashboards</h1>
            <a href="Power-up">
              <button className="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                Add Power-up
              </button>
            </a>
          </div> <br />
          <div className='flex flex-col'>
            <div className='flex gap-5 border-b border-gray-400'>
            <p className={state?"text-blue-700 hover:cursor-pointer border-b":"text-black hover:cursor-pointer hover:border-b"} onClick={()=>setState(true)}>Description</p>
            <p className={!state?"text-blue-700 hover:cursor-pointer border-b":"text-black hover:cursor-pointer hover:border-b"} onClick={()=>setState(false)}>Updates</p>
          </div> <br />
          {
            state?
            <div className='flex flex-col gap-1'>
                <h1 className='text-2xl font-medium'>Get a complete project overview.</h1>
                <p className=''>Tired of checking scattered lists? Our app lets you <strong>combine Trello boards</strong> and workspaces into one unified analytics screen.</p>
                <p className=''>Stop switching tabs. Instantly generate a high-level <strong>summary board</strong>, then <strong>share your dashboard with your team</strong>. Ensure everyone sees the full picture — or create private views for your own tasks — without moving a single card.</p>
                <img></img>
                
                <h1 className='text-xl font-medium'>Key Features:</h1>
                {
                    keyFs.map((feature)=>{
                        return <p>{feature}</p>
                    })
                }
                <h1 className='text-xl font-medium'>⚙️ Professional Analytics with Custom Fields</h1>
                <p>Stop being limited by standard views. Our app unlocks the full power of your data. It is a perfect solution if you need to <strong>filter by custom fields</strong> or <strong>sum custom fields </strong>across multiple workspaces:</p>
                {}
                <p>Precision Filtering: Build reports that matter with <strong>advanced filters</strong>. Use logic like "contains", "is empty", or group conditions to remove noise and focus on the data that matters. Don't just watch data — drive results by <strong>setting goals</strong> and visual targets for every metric.</p>
                <div className='flex flex-col gap-1'><h1 className='font-bold text-xl'>💸 Subscription Plans & Trial</h1>
                <p>Start with <strong>a 14-day Free Trial</strong> — no credit card required, unlimited boards, and full access to all features. Experience how <strong>Cross-Board Reporting & Dashboards</strong> can level up your workflow before you choose a plan.</p>
                <h2>All Paid Plans Include:</h2>
                {
                    allPaidPlansInclude.map((plans)=>{
                        return <p>{plans}</p>
                    })
                }
                <h2>Choose Your Tier:</h2>
                {
                    chooseYourTier.map((tier)=>{
                        return <p>{tier}</p>
                    })
                }
                <p>Save over 20% with <strong>Annual Billing</strong> options available for all plans.</p></div>
                <p>🌐 Also try our other apps for work and everyday life by <strong className='text-violet-900 hover:cursor-pointer underline'>Plain & Simple Solution</strong></p>
            </div>
            :
            <div className='flex flex-col gap-5'>
            <div className='rounded-xl w-135 p-3 bg-gray-100'>
                <div className='flex gap-10'>
                    <h1 className='text-xl font-bold'>Update 1.3: Official Release</h1>
                    <p className='text-black-300'>4 Feb 2026</p>
                </div>
                <p>This release marks a milestone for our product — we are officially moving out of beta! In addition to general stabilization, we have expanded data capabilities, updated the interface, and added flexibility in managing plans and access rights.</p>
                <h1 className='font-medium'>Global changes and new features</h1>
                <ul className='list-disc ml-5'>
                    {
                    globalChanges.map((update)=>{
                        return <li>{update}</li>
                    })
                }
                </ul> <br />
                <h1 className='font-medium'>Advanced filtering and data logic</h1>
                <ul className='list-disc ml-5'>
                    {
                    advancedFiltering.map((update)=>{
                        return <li>{update}</li>
                    })
                }
                </ul> <br />
                <h1 className='font-medium'>Access management and subscription plans</h1>
                <ul className='list-disc ml-5'>
                 {
                    accessManagement.map((update)=>{
                        return <li>{update}</li>
                    })
                }
                </ul>       

            </div>
            <div className='rounded-xl w-135 p-3 bg-gray-100'>
                <div className='flex gap-10'>
                    <h1 className='text-xl font-bold'>Update 1.2</h1>
                    <p className='text-black-300'>30 Dec 2025</p>
                </div>
                <p>This release focuses on visual improvements, a faster widget creation flow, and fixes to data-handling logic.</p>
                <h1 className='font-medium'>Sources and filtering</h1>
                <ul className='list-disc ml-5'>
                    {
                    sourcesAndFiltering.map((update)=>{
                        return <li>{update}</li>
                    })
                }
                </ul> <br />
                <h1 className='font-medium'>Widgets and data preview</h1>
                <ul className='list-disc ml-5'>
                    {
                    widgetsAndDataPreview.map((update)=>{
                        return <li>{update}</li>
                    })
                }
                </ul> <br />
                <h1 className='font-medium'>UI and UX improvements</h1>
                <ul className='list-disc ml-5'>
                    {
                    uiUxImprovements.map((update)=>{
                        return <li>{update}</li>
                    })
                }
                </ul> <br />
                <h1 className='font-medium'>Bug fixes</h1>
                <ul className='list-disc ml-5'>
                    {
                    bugFixes.map((update)=>{
                        return <li>{update}</li>
                    })
                }
                </ul>
            </div>
            <div className='rounded-xl  w-135 p-3 bg-gray-100'>
                <div className='flex gap-10'>
                    <h1 className='text-xl font-bold'>Update 1.1</h1>
                    <p className='text-black-300'>11 Dec 2025</p>
                </div>
                <ul className='list-disc ml-5'>
                    {
                    update1_1.map((update)=>{
                        return <li>{update}</li>
                    })
                }
                </ul>
            </div>
            </div>
        }
          </div>
        </div>
        

      </section>
      <div className='mt-30'><AtlassianFooter/></div>
    </>
    </div>
  )
}

export default CrossBoardReportingAndDashboard
