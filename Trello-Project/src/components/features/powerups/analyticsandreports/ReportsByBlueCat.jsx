import React from 'react'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'
import img1 from "../../../../assets/bluecatimg1.png"
import img2 from "../../../../assets/bluecatimg2.png"
import img3 from "../../../../assets/bluecatimg3.png"
import img4 from "../../../../assets/bluecatimg4.png"
import img5 from "../../../../assets/bluecatimg5.png"
import img6 from "../../../../assets/habittrackimg4.svg"
import img7 from "../../../../assets/habittrackimg5.svg"
import { CiMail } from 'react-icons/ci'
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from '../../../solutions/taskManagement/AtlassianFooter'
const ReportsByBlueCat = () => {
  const generate = [
  "Create the charts you want: Pie/Bar/Historical/Counts/Time to Complete",
  "...with the data you want, select Cards and Checklist Items based on Boards, Lists, Labels, Members, Custom Fields, Due dates, time in list... (I could go on!)",
  "Get your reports emailed to you (or anyone) on a schedule you want",
  "Display your Reports on a screen in the office and watch them update live"
];
const reporting = [
  "We know how it goes...",
  "💡 Someone asks how much work your team is getting done? How long things take? Who's doing the most? Which types of work are getting requested most often? etc....",
  "🤓 Maybe you could get the data from Trello yourself! then wrangle it in Excel.",
  "😬 But now you're stuck reporting that every week!",
  "🥺 Then someone wants to know something new, so your new job just got even bigger!"
];
const lets = [
  "Who is doing what?",
  "How long work is taking?",
  "How much work is being added over time?",
  "Who is requesting the most work? (by client or department etc.)",
  "Pretty much anything else you might want to know (win/lose rates for sales teams, deal value by marketing channel...)",
  "Then set this up to email you and anyone else who needs it before your meeting. It couldn't be easier!"
];
const reportToKeepTabs=[
  `🤗 You've got your data in Trello, yay!`,
  `😬 But things keep getting missed`,
  "😟 you're not sure you or your team really know what is the priority each day or week",
  "🙃 Let's turn that frown around!" 
]
const keepYourTeam=[
  "Any tasks needing work right now",
  "Any tasks which have spent too long in a certain list (great for managing SLAs)",
  "Any tasks overdue or due this week",
  "All outstanding tasks by member: is anyone overloaded?",
  "Any flagged tasks (urgent, expedite, etc.)",
  "Again, get this (or any) report sent to your inbox exactly when you need it. Or stick it up on a screen in the office and watch the numbers update in realtime!"
]
const Daily=[
  `Do your team members have cards spread across various boards? Maybe they are relying on setting calendar reminders to check their Boards? But then they see something else and get distracted... What should be a 30 minute task to keep everything moving ends up taking all morning and things still get missed!`,
  'No longer!',
  <>Create a <strong> Quick List</strong> for each team member showing their open tasks. You can select everything assigned to them, across any number of Boards. You can see Cards based on List, Due Date or anything else you ight think of. Or create a list of Checklist items for them :)</>
]
const createAnalytics=[
  'Ideal for weekly or monthly management reporting. You can create reports showing summaries of work remaining and work completed. See how much work has been added to the project vs completed. See who the work is assigned to and calculate if you have the resources you need to complete your project.',
  'For people not used to opening Trello you can configure email reports to send this analysis straight to their inbox. Or invite everyone in and let them see the live reporting themselves.'
]
const generateInDepth=[
  'With Blue Cat Reports you can pull any data you could reasonably want from Trello. There are no limitations on the Boards you select to report on. Reports can include Cards and Checklist Items from multiple Boards easily. Then configure the data you want to see from them. We can pull all your Custom Field data as well, report and query on that as well as display it in the reports.',
  'With our drilldowns you can open each chart to see additional information and even further analyse the data.'
]
const reportingForMarketing=[
  'Scheduled Cards by Team Member, Status, Client, Business Objective, etc',
  'Completed Cards broken down any way you like',
  'Completed Cards over time',
  'Arrival rates',
  'Time to Complete',
  <>More more more! Check out our example <u className='underline text-blue-500'>Trello Marketing team Reports</u></>
]
const ReportingForSalesTeam=[
  'Sales conversion win/loss rate (total and by sales rep etc.)',
  'Sales trend analysis',
  'Funnel metrics (total size or broken down by hot/warm/cold and etc)',
  'Sales cycle length (total or by member)',
  'New leads added over time',
  'Select to show deal value instead of Card count for any charts'
]
const ReportingForProjectManagment=[
  'Lead Time, Cycle Time and/or Time to Market',
  'WIP (Work in Progress) over time (total or broken down by member, category, etc)',
  'Productivity, Cards or Hours completed (total or broken down by assignee)',
  'Hours remaining',
  'Resource utilisation'
] 
const otherPowerUps=[
  <><u className='font-semibold underline text-blue-500'>Trello Forms</u>. The easiest to use, most complete Forms solution for Trello.</>,
  <><strong>Corrello</strong> <u className='font-semibold underline text-blue-500'>Scrum and Kanban charts</u>. Burndowns, CFDs, Cycle Time, Release Forecasts and more.</>,
  <><u className='font-semibold underline text-blue-500'>Kanban WIP</u>. Allows you to set up WIP limits which will apply across multiple lists.</>,
  <><u className='font-semibold underline text-blue-500'>Agile Tools</u>. Lets you add story points to cards (integrates with Corrello) and set WIP limits for individual lists.</>,
  <><u className='font-semibold underline text-blue-500'>Time in List</u>. Does what it says on the tin! Super simple time in list tracking for Trello.</>,
  <><u className='font-semibold underline text-blue-500'>Import to Trello by Blue Cat </u>.lets you easily import CSV, Excel and Google Sheets into Trello</>
]
  return (
    <div>
      <>
      <NavBar />
      <div className="ml-75 mt-10 sticky top-20 ">
        <p>
          <Link>Power-Ups</Link>/ <Link>Reports by Blue Cat</Link>
        </p>
      </div>
      <section className="flex mt-5 w-[60%] m-auto gap-16  ">
        <div class="flex w-90 h-130 justify-start sticky top-35">
          <div class="   rounded-lg    text-center">
            <img
              src={img1}
              alt=""
              className="block mx-auto w-56 h-56"
            />
            <p className="mt-2 flex justify-center gap-3"><img className='w-5 h-5' src={img6} alt="" />Made by Cherry Wood Software</p>
            <p className="bg-gray-100 w-20 ml-25 flex justify-center gap-3"><img className='w-5 h-5' src={img7} alt="" />100,000+</p>
            <br />
            <hr class="border-t border-gray-300"></hr>
            <br></br>

            <h1 class="text-l font-bold text-black flex justify-start">
              Categories
            </h1>
            <div class="flex space-x-2">
              <a
                href="Analytic&reporting"
                class="text-xs px-3 py-1 border border-gray-200 w-[140px] rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300"
              >
                Analytic & Reporting
              </a>
              <a
                href="Board utilities"
                className=" items-center text-xs px-3 py-1 border w-[120px] border-gray-200 rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300 "
              >
                IT & ProjectManagement
              </a>
            </div>
            <br />
            <hr class="border-t border-gray-300"></hr>

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
            <hr class="border-t border-gray-300"></hr>
          <div>
            <br />
  <p className='font-medium text-gray-600 text-left'>Reports by Blue Cat stores personal data and is in compliance with</p>
  <a href="#" className="flex items-center text-blue-500 underline gap-1 mt-1">
    <AiTwotoneLock className="w-6 h-6" />
    Trello's data and privacy practices.
  </a>
</div>

          </div>
          
        </div>
      
        <div class="w-full md:w-[70%] m-auto mb-6 ">
          <div class="flex justify-between items-center ">
           
            <h1 class="text-2xl font-bold text-black">Reports by Blue Cat</h1>

    
            <a href="Power-up">
              <button class="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                Add Power-up
              </button>
            </a>
          </div>

          <div className='flex flex-col gap-3'>
            <p class="text-gray-700 text-base leading-relaxed text-justify mt-4">
            One of the <u className='underline text-blue-500'>fastest growing power-ups of 2023</u>
          </p>
          <p class="text-gray-700 text-base leading-relaxed text-justify mt-4">
            Check out our <u className='underline text-blue-500'>quick demo video</u> for a quick overview of Blue Cat Reports for Trello 😻
          </p>
          <img src={img2} alt="" />
          <u className='underline text-blue-500'>watch it here!</u>
         
          <h1 className='font-medium text-2xl'>Flexible Project Management & Reporting Power Up for your Trello Boards</h1>
          <p>Blue Cat Reports for Trello is the top level view of your Trello Boards. Fully customisable reporting over any number of Boards.</p>
          <p>Team members can keep track of tasks spread across multiple Boards.</p>
          <p>Managers can keep tabs on productivity and capacity.</p>
          <div className='border-l p-2 flex flex-col gap-2'>
            <p>"Blue Cat Reports enabled our company to pull & present data from Trello that we haven’t been able to uncover with any other add-ons. The reports are easy to create, fully customizable and beautifully designed."</p>
            <p>Megan Ruediger Schmidt Family of Companies.</p>
          </div>
          <h1 className='font-medium text-2xl'>Generate in-depth custom reports: see the status of every card on every board</h1>
          <p>Create the Reports you want, with the charts you want, and get them when you want!</p>
          <ol className='flex flex-col gap-1 list-decimal'>
            {
              generate.map((para)=>{
                return <li className='list-disc ml-7' key={para}>{para}</li>
              })
            }
          </ol>
          <p>Let's take a look at some example reports :)</p>
          <h1 className='font-semibold text-2xl'>Reporting to keep tabs on productivity and capacity</h1>
          
          <ol className='flex flex-col gap-2 list-decimal'>
              {
              reporting.map((para)=>{
                return <li className='list-disc ml-7' key={para}>{para}</li>
              })
            }
          </ol>
          <p>Let's give you and your managers more than you could ever need. With Blue Cat Reports you can create a management update with the reporting they need...</p>
          <ol className='flex flex-col gap-2 list-decimal'>
              {
              lets.map((para)=>{
                return <li className='list-disc ml-7' key={para}>{para}</li>
              })
            }
          </ol>
          <img src={img3} alt="" />
          <p>All these charts are easy to create and can be placed where you want them in your Report.</p>
          <h1 className='font-semibold text-2xl'>Reporting to keep tabs on your process</h1>
          <ol className='flex flex-col'>
              {
            reportToKeepTabs.map((para)=>{
              return <li key={para}>{para}</li>
            })
          
            }
          </ol>
          <p>Keep yor team on track at your weekly or daily team meeting (we do ours every Monday after lunch). Create a report for your team meeting to show</p>
          <ol className='list-disc'>
            {
              keepYourTeam.map((para)=>{
                return <li key={para}>{para}</li>
              })
            }
          </ol>
          <img src={img4} alt="" />
          <h1 className='font-medium text-2xl'>Daily and Weekly Task Tracking For Your Teams</h1>
          {
            Daily.map((para)=>{
              return <p key={para}>{para}</p>
            })
          }
          <img src={img5} alt="" />
          <h1  className='font-medium text-2xl'>Create analytics dashboards & project summary reports</h1>
          {
            createAnalytics.map((para)=>{
                return <p key={para}>{para}</p>
            })
          }
          <h1 className='font-medium text-2xl'>Generate in-depth custom reports: see the status of every card on every board</h1>
          {
            generateInDepth.map((para)=>{
              return <p key={para}>{para}</p>
            })
          }
          <h1 className='font-medium text-2xl'>Pricing</h1>
          <p>Add the power-up to start a 7 day free trial. Pricing is then $4/member monthly on the boards you enable reporting on. Enterprise pricing options and discounts for large teams are available, please contact <u className='underline text-blue-500'ssName>sales@bluecatreports.com</u> for details.</p>
          <h1 className='font-medium text-2xl'>Reporting for Marketing Teams</h1>
          <p>Easily track things like</p>
          <ol className='list-disc'>
            {
              reportingForMarketing.map((para)=>{
                return <li key={para} className='ml-10'>{para}</li>
              })
            }
          </ol>
          <h1 className='font-medium text-2xl'>Reporting for Sales Teams</h1>
          <p>Easily track things like</p>
          <ol className='list-disc'>
            {
            ReportingForSalesTeam.map((para)=>{
              return <li key={para} className='ml-10'>{para}</li>
            })
          }
          </ol>
          <h1 className='font-medium text-2xl'>Reporting for Project Management</h1>
          <p>Create your reports with charts for</p>
          <ol className='list-disc'>
            {
            ReportingForProjectManagment.map((para)=>{
              return <li key={para} className='ml-10'>{para}</li>
            })
          }
          </ol>
          <div className='border-gray-400 border'></div>
          <div className='border-l-2 p-4 border-gray-400'>
            "Blue Cat reports have been a tremendous help in allowing us to understand and improve our workflow process.  <strong>The reports are easy to use and just one click away!</strong>"
Natalie Hecker  <u className='underline text-blue-500'>successacademies.org</u>
          </div>
          <p>Any questions? Drop us an email at  <u className='underline text-blue-500'>support@bluecatreports.com</u></p>
          <h1 className='font-medium text-2xl'>Our other Power-Ups for Trello</h1>
          {
            otherPowerUps.map((para)=>{
              return <p key={para}>{para}</p>
            })
          }
          <h1 className='font-medium text-2xl underline text-blue-500'>Exports for Trello</h1>
          <p>Export your data from Trello, manually for free or pay to get scheduled exports direct to your inbox. Our<u className='underline text-blue-500'>Exports Power-Up </u> does just that.</p>
          <h1 className='font-medium text-2xl underline text-blue-500'>Our Trello guides</h1>
          <p>See our guide to <u  className='underline text-blue-500'> every free power-up on Trello</u></p>
          <p>Check out our reviews of <u  className='underline text-blue-500'>every reporting power-up for Trello</u></p>
          </div>
        </div>

      </section>
      <div className='mt-20'><AtlassianFooter/></div>
    </>
    </div>
  )
}

export default ReportsByBlueCat
