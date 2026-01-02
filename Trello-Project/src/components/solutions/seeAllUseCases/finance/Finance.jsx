import React from 'react'
import NavBar from '../../../NavBar'
import slack from "../../../../assets/Slack_Mark.png";
// import hubspot from "../../../../assets/hubSpot.svg";
import figma from "../../../../assets/Figma-Icon.png";
import Jira from "../../../../assets/Jira-icon.png";
import google from "../../../../assets/Google_Drive.png";
import automateio from "../../../../assets/automateio.png";
import amf from "../../../../assets/AmazingFields.png";
import trelloimport from "../../../../assets/telloimport.png";
import zapier from "../../../../assets/zapier.png";
import Footer from '../../../Footer';
import UniversalFooter from '../../../UniversalFooter';
import logos1 from "../../../../assets/logos1.svg"
import iconsearch from "../../../../assets/iconsearch.svg"
import robot from "../../../../assets/robot.svg"
import book from "../../../../assets/book.svg"
import bag from "../../../../assets/bag.svg"
import { Link } from 'react-router-dom';


const Finance = () => {
  return (
    <>
        <NavBar/>
        <div className='bg-gradient-to-b from-[#E9FCFF] to-white pt-15 font-sans'>
            
            <img className='w-[668px] h-[407px] m-auto  'src="https://images.ctfassets.net/rz1oowkt5gyp/3r8notnXRxdrpidotJQxJy/5d10a3dc15512affc79239824eea96dc/WORK-1034_Financials_Hero_2x.png?w=1336&fm=webp" alt="" />
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-[48px] text-[#091E42] font-semibold'>Trello for Finance</h1>
                <p className='text-[20px] text-[#091E42] w-[700px] text-center '>
                    Modern finance teams cover a sprawling range of work—all of which must be completed accurately and on-time (no pressure!). Whether you’re doing payroll, managing budgets, tracking financials, or handling day-to-day record keeping, Trello helps you stay organized and get more done.
                </p>
                <button className='bg-blue-600 text-white p-3 rounded  w-[104px] '>Try it free</button>
            </div>
        </div>
        <section className='flex flex-col items-center  mt-[64px] gap-6'>
            <h1 className='text-[36px] w-[720px] text-center text-[#091E42] font-semibold'>See everything that needs to be done, in one place</h1>
            <img className='w-[912px] h-[486px]' src="https://images.ctfassets.net/rz1oowkt5gyp/DNadJUQVz87iQq29t7nNS/e6c1929e5252ef3dc9e1cd3e80929be3/Product_Hero_Illo.png?w=1824&fm=webp" alt="" />
        </section>
        <section className='flex flex-col items-center mt-[64px] gap-1 mb-[48px]'>
                <h1 className='text-[36px] w-[727px] text-center text-[#091E42] font-semibold'>More projects, <span className='line-through'>more</span> no problem</h1>
                <p className='text-[20px] text-[#091E42] w-[700px] text-center pl-3'>
                    Working with internal teams and external vendors? Trello helps you collaborate efficiently with a variety of permissions options and <a className='text-[#0052cc] underline hover:no-underline' href="https://trello.com/trust">enterprise-grade security</a>
                </p>
        </section>
        <section className='mt-[70px] flex ml-[190px] gap-25'>
            <div className='w-[476px]'>
                <h2 className='text-[36px] text-[#091E42] font-semibold'>No more missed deadlines</h2>
                <hr className=' ml-[-1px] border-gray-200 m-5' />
                <p className='text-[20px] pr-4 w-[442px] '>
                    Trello’s familiar system of boards, cards, and colorful labels make it easy to see at a glance <a href="" className='text-[#0052cc] underline hover:no-underline'>what’s being done</a>, who’s working on it, when it’s due, and more—so your team never misses a beat.
                </p>
            </div>
            <div className='w-[538px]'>
                <img src="https://images.ctfassets.net/rz1oowkt5gyp/16lcotr90I8Sw9NUDkOr8o/34d91124ad681164a823c6b6fa149a30/UI_Illo_Lists.png?w=1108&fm=webp" alt="" />
            </div>
        </section>
        <section className='mt-[70px] flex ml-[190px] gap-25'>
            <div className='w-[538px]'>
                <img className='h-[336px] w-[454px]' src="https://images.ctfassets.net/rz1oowkt5gyp/6tHHy8SXoEtHypCmkqcoe3/ba5a61a9607171d881837cf88e3d87ed/UI_Timeline_View.png?w=908&fm=webp" alt="" />
            </div>
            <div className='w-[476px]'>
                <h2 className='text-[36px] text-[#091E42] font-semibold w-[442px]'>Align with business priorities</h2>
                <hr className=' ml-[-1px] border-gray-200 m-5 border-b' />
                <p className='text-[20px] pr-4 w-[442px] '>
                    Whether you’re managing one or hundreds of moving parts as you approach month-end and quarter-close, Trello can help tame the chaos. In addition to helping you stay on top of your own projects, <a className='text-[#0052cc] underline hover:no-underline' href="https://trello.com/trust">Trello’s Timeline, Table, and Dashboard Views</a> provide visibility and reporting for all of the work in progress across your team and your company—all at once.
                </p>
            </div>
        </section>
        <section className='mt-[70px] flex ml-[190px] gap-25'>
            <div className='w-[476px]'>
                <h2 className='text-[36px] text-[#091E42] font-semibold mb-6'>Move work forward, auto-magically</h2>
                <p className='text-[20px] pr-4 w-[442px] '>
                    Trello <a href="" className='text-[#0052cc] underline hover:no-underline'> automates</a>repeatable processes, so you can focus on the important work. Tell Trello the action you’d like to take once a trigger (like a due date) has been reached, and let it handle the rest (like notifying the task owner).
                </p>
            </div>
            <div className='w-[538px]'>
                <img src="https://images.ctfassets.net/rz1oowkt5gyp/1DvpMwSyM7UBPBgRIJ6rpZ/ff74f1287dd0e9e26522ccb2db01ede2/UI_Illo__Automation_Rules.png?w=1098&fm=webp" alt="" />
            </div>
        </section>
        <section className="flex flex-col items-center gap-10 mt-20">
            <div className='bg-gradient-to-b from-[#EEEBFF] to-white pt-15 pl-50 w-[100%]'>
                <h1 className='text-[36px] text-[#091E42] font-semibold'>Keep the tools you love</h1>
                <p className='text-[20px] w-[727px]'>
                    Trello Power-Ups connect your favorite apps directly to Trello for a single source of truth with zero additional effort. Want more niche features in Trello? You can add those too. With our gallery of <a href="" className='text-[#0052cc] underline hover:no-underline'>200+ Power-Ups</a>, building a bespoke project tracking system for your finance team is effortless.
                </p>
            </div>
            <div className="flex gap-10">
              <Link to='/power-ups/55a5d917446f51777421000a' className="h-[330px] w-[345px] shadow-xl rounded-[10px] hover:cursor-pointer hover:shadow-2xl">
                <div className=" h-[96px] bg-[#8777D9] rounded-t-[10px]"></div>
                <img src={slack} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                <div className="p-[24px]">
                  <h1 className="text-[24px] font-medium mb-1">Slack</h1>
                  <h2 className="text-[16px] font-normal text-gray-500">Automation</h2>
                  <p className="text-[16px] font-normal mt-2 tracking-wide">Keep your communication and collaboration apps connected</p>
                </div>
              </Link>
              <Link to='/power-ups/55a5d916446f517774210006' className=" h-[330px] w-[345px] shadow-xl rounded-[10px] hover:cursor-pointer hover:shadow-2xl">
                <div className=" h-[96px] bg-[#2684ff] rounded-t-[10px]"></div>
                <img src={google} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                <div className="p-[24px]">
                  <h1 className="text-[24px] font-medium mb-1">Google Drive</h1>
                  <h2 className="text-[16px] font-normal text-gray-500">File Management</h2>
                  <p className="text-[16px] font-normal mt-2">Search Google Drive right from Trello and attach relevant files directly to their corresponding tasks for richer contex</p>
                </div>
              </Link>
              <Link to='/power-ups/6052d16c340ed23e9da083ed' className="h-[330px] w-[345px] shadow-xl rounded-[10px] hover:cursor-pointer hover:shadow-2xl">
                <div className=" h-[96px] bg-[#FFE380]  rounded-t-[10px]"></div>
                <img src='https://images.ctfassets.net/rz1oowkt5gyp/1Tw7hpayzN5xNbo3dWED6m/f02bbdaeece73518b214a5e8a803f147/gmail-icon.png' alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
                <div className="p-[24px]">
                  <h1 className="text-[24px] font-medium mb-1">Gmail</h1>
                  <h2 className="text-[16px] font-normal text-gray-500">Communication and collaboration</h2>
                  <p className="text-[16px] font-normal mt-2 tracking-wide">Send your emails to Trello for easy task management</p>
                </div>
              </Link>
            </div>  
        <div className="flex gap-10">
          <Link to='/power-ups/60e068efb294647187bbe4f5/amazing-fields' className=" h-[330px] w-[345px] shadow-xl rounded-[10px] hover:cursor-pointer hover:shadow-2xl">
            <div className=" h-[96px] bg-[#57D9A3] rounded-t-[10px]"></div>
            <img src={amf} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Amazing Fields</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Analytics & reporting Tools</h2>
              <p className="text-[16px] font-normal mt-2 tracking-wide">Add extra data, conditional styling, custom formats, formula calculations, and more to Trello.</p>
            </div>
          </Link>

          <Link to='/power-ups' className=" h-[330px] w-[345px] shadow-xl rounded-[10px] hover:cursor-pointer hover:shadow-2xl">
            <div className=" h-[96px] bg-[#B2D4FF] rounded-t-[10px]"></div>
            <img src={automateio} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Automate.io</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Communication & collaboration</h2>
              <p className="text-[16px] font-normal mt-2">Connect tools like Microsoft SQL Server and QuickBooks Online to aggregate data and generate invoices.</p>
            </div>
          </Link>

          <Link to='/power-ups/61fa6cd2cc14647c2c9ee821/import-to-trello-by-blue-cat-csv-excel' className=" h-[330px] w-[345px] shadow-xl rounded-[10px] hover:cursor-pointer hover:shadow-2xl">
            <div className=" h-[96px] bg-[#ED50B4] rounded-t-[10px]"></div>
            <img src={trelloimport} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Trello Import</h1>
              <h2 className="text-[16px] font-normal text-gray-500">File Management</h2>
              <p className="text-[16px] font-normal mt-2 tracking-wide">Import cards from CSV or Excel spreadsheets directly into Trello boards.</p>
            </div>
          </Link>
          
        </div>
        <h1 className='text-[#0052cc] underline hover:no-underline text-xl m-5'>See more Power-Ups</h1>
         </section>
         <section>
          <div className='ml-50 mb-10'>
            <h1 className='text-[36px] text-[#091E42] font-semibold'>There's a template for that</h1>
            <p className='text-[20px] text-[#091E42] w-[823px] p-2 pr-14' >
              Why start from scratch when there’s expertise that you can trust? Trello <a href="" className='text-[#0052CE] underline hover:text-[#002b6c]'>templates</a> get you going quickly with a pre-built Trello board that you can customize for your needs. In addition to finance team templates, you’ll also find a Trello board for everything from <a className='text-[#0052CE] underline hover:text-[#002b6c]' href=""> Team Management</a> to <a href="" className='text-[#0052CE] underline hover:text-[#002b6c]'>Personal Productivity</a>.
            </p>
          </div>
          <div className='flex ml-50 gap-8'>
            <div className=' w-[538px]'>
              <img className='h-[227px]' src="https://images.ctfassets.net/rz1oowkt5gyp/5UfF4mLNwxCPMONyU5mlC6/dc6019d7a3b53de3b32fb08851aaade7/Template_Work_Request.png?w=1108&fm=webp" alt="" />
              <a>Work request and intake process</a> 
              <p>
                This board details the Google Forms, automation rules, and Trello Power-Ups that optimize the way that you manage stakeholder requests.
              </p>
            </div>
            <div className=' w-[538px]'>
              <img className='h-[227px] w-[538px]' src="https://images.ctfassets.net/rz1oowkt5gyp/CyWcHdGG4WsvcHgr2khQD/f50c671f693512dadc8c7e246ad34ba6/Template_Project_Mgmt.png?w=1108&fm=webp" alt="" />
              <a href="">Project management</a>
              <p>The Trello team’s own structure for setting up an ideal workflow, for projects big or small.</p>
            </div>
          </div>
         </section>
          <div className="pt-[128px] flex flex-col items-center mb-25">
                    <h1 className="text-[20px] font-normal">Join a community of millions of users globally who are using Trello to get more done.</h1><br />
                    <img src={logos1} alt="logos" className="w-[917px]" />
          </div>
          <div className=" bg-[#E6FCFF] mt-6 flex flex-col pt-25 pr-50 pl-50">
                    <div>
                      <h1 className="text-[24px] font-medium">Teamwork and information management tips from the pros</h1>
                      <p className="text-[20px] font-normal">Read the Trello blog to find ways to improve efficiency, <br /> productivity, and collaboration.</p>
                    </div><br /><br /><br />
                    <div className="flex gap-10">
                    <div className="flex gap-5">
                      <div>
                        <img src={iconsearch} alt="" className="h-[50px] w-[50px] "/>
                      </div>
                      <div>
                        <h1 className="text-[24px] font-medium"><a href="" className='underline text-blue-900'>Five ways to manage data security in a work-from-home world</a></h1>
                        <p className="text-[20px] font-normal">From shadow IT to user permissions, here are five steps that you can take to ensure that the work-from-home environments for your employees—and your data—stay secure.</p><br />
          
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div>
                        <img src={robot} alt="" className="h-[55px] w-[55px] "/>
                      </div>
                      <div>
                        <h1 className="text-[24px] font-medium"><a href="" className='underline text-blue-900'>The most common project blockers and ways to eliminate them</a></h1>
                        <p className="text-[20px] font-normal">Project blockers come in all shapes and sizes. The key to delivering work on time is knowing your project blockers or impediments.</p><br />
          
                      </div>
                    </div>
                    </div><br />
          
                    <div className="flex   pb-20">
                    <div className="flex gap-5">
                      <div>
                        <img src={book} alt="" className="h-[40px] w-[40px] "/>
                      </div>
                      <div>
                        <h1 className="text-[24px] font-medium"><a href="" className='underline text-blue-900'>Making finance fun: the Motley Fool's errand</a></h1>
                        <p className="text-[20px] font-normal">You don’t often hear “fun” and “financial institution” in the same sentence. This is the story of how an innovative investment company uses Trello to enrich their unique company culture.</p><br />
                     
                      </div>
                    </div>
                    <div className="flex gap-5 ml-40">
                      <div >
                        <img src={bag} alt="" className="h-[50px] w-[50px] "/>
                      </div>
                      <div>
                        <h1 className="text-[24px] font-medium w-[]"><a href="" className='underline text-blue-900'>Why your enterprise needs an internal knowledge base</a></h1>
                        <p className="text-[20px] font-normal">How many times a day are you interrupted with questions about a policy or process? Learn how to create a system where employees can quickly self-serve the resources they need.</p><br />
                   
                      </div>
                    </div>
                    </div>
          </div>
         <UniversalFooter/>

    </>
  )
}
export default Finance