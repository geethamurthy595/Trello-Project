import React from 'react'
import img1 from '../../../assets/hero1.webp'
import img2 from "../../../assets/img2.png"
import img3 from "../../../assets/CreateRule.webp"
import img4 from "../../../assets/vid-logo.png"
import img5 from "../../../assets/Calendar.png"
import slack from "../../../assets/slack.svg"
import confluence from "../../../assets/confluence.svg"
import jira from "../../../assets/jira.svg"
import Miro from "../../../assets/Miro.svg"
import google from "../../../assets/google copy.svg"
import Microsoft from "../../../assets/Microsoft.svg"
import TeamOrganize from "../../../assets/TeamOrganize.png"
import Marketing from "../../../assets/Marketing.webp"
import logos1 from "../../../assets/logos1.svg"
import iconsearch from "../../../assets/iconsearch.svg"
import robot from "../../../assets/robot.svg"
import book from "../../../assets/book.svg"
import bag from "../../../assets/bag.svg"
import { Link } from 'react-router-dom'

export const ResourcesHub = () => {
  return (
   <>
    <div className=" text-center bg-[#f2fdff] flex flex-col mb-8  ">
          <img src={img1} alt="Task Management" className="w-182 h-120 ml-[20rem]" /><br />\
          <h1 className="text-[55px] font-medium text-[#091E42]">Keep information organized and</h1>
            <h1 className="text-[55px] font-medium text-[#091E42]">accessible with Trello</h1>
          <p className="text-[20px] font-medium text-[#091E42] leading-10 spacing-2">
          Knowledge is power – but only if it’s accurate, accessible, and used correctly. <br />
           Give teams a reliable hub from which to contribute, manage, and find <br />
             relevant information quickly with Trello. Then, watch their productivity <br />
               skyrocket!
          </p><br />
          <button className="bg-blue-600 text-white py-2 px-4 rounded text-[16px] h-[50px] w-[100px] ml-[39rem]">Try it free</button>
        </div>  <br />

        <section className=" text-center">
          <br />
            <h1 className="text-[36px] font-medium text-[#091E42]">Ditch outdated spreadsheets and folders for</h1>
            <h1 className="text-[36px] font-medium text-[#091E42]">something better</h1><br />
            <img src={img2} alt="Trello Board" className="h-120  ml-[15rem]"/>

        </section> <br />
             <div className='flex justify-center flex-cols pt-10 ' >
            <br /><br />
            <h1 className="text-[36px] font-medium  text-[#091E42]">
                Trello for knowledge and information <br />
             
            </h1> <br />
        </div>
             <h1 className="text-[36px] font-medium text-center text-[#091E42]">
            
             management
            </h1>
        <div className="flex flex-col items-center text-[20px] pb-20 ">
            <p>Collaborate with peace of mind. Trello provides a variety of permissions</p>
            <p>options and <a href="" className='text-blue-900 underline'>enterprise-grade security</a>to make information easy to share </p>
         <p>when you want to and easy to gate when you don’t.</p>
        </div>

        <div className="flex gap-35 items-center pl-10">
          <br /><br /><br /><br /><br /> 
            <div className=" h-100 w-104">
                <h1 className="text-[36px] font-medium">Automate clean up</h1>
                <br />
                <hr className="border-gray-300"/>
                <br />
                <p className="text-[20px] font-normal">Never wonder again whether the information you’re looking at is still relevant. Trello <a href="" className='underline text-blue-900'>automates repeatable processes</a>  like setting due dates to update resources or archiving items past a certain date.</p>
                
               
            </div>
            <div><img src={img3} alt="Advanced Checklists" className="h-100 w-130" /></div>
        </div><br /><br />
        

        <div className="flex gap-35 items-center">
          <br /><br /><br /><br /><br />
            <div><img src={img4} alt="Customer List" className="h-121 w-134" /></div>
            <div className=" h-100 w-104">
                <h1 className="text-[36px] font-medium">Spot things faster with visual cues</h1>
                <br />
                <hr className="border-gray-300"/>
                <br />
                <p className="text-[20px] font-normal">Preview YouTube videos, Miro files, Jira issues, and more in one place by simply pasting their URLs onto your Trello board. Use <a href=" " className='underline text-blue-900'> colorful labels</a> or <a href=" " className='underline text-blue-900'> GIPHY</a>   stickers  to quickly identify projects by goals and filter to view only cards associated with a specific label. Finding content has never been faster!</p>
            </div>
        </div>


        <div className="flex gap-35 items-center h-100">
          <br />
            <div className=" h-100 w-95">
                <h1 className="text-[36px] font-medium">Switch it up as often you need</h1>
                
                <hr className="border-gray-300"/>
                <br />
                <p className="text-[20px] font-normal">Toggle between views to see team vacation plans and projects laid out in <a href="" className='underline text-blue-900'>Timeline, Calendar, Table views, and more</a> to identify risks and resourcing gaps. Trello makes it easy to add, delete, and restructure your Trello resource hub as your team grows and needs change.</p>
                <br />
             
            </div>
            <div><img src={img5} alt="Calendar View" className="h-90 w-133" /></div>
        </div>

    <div className=" flex flex-col  h-250 w-full  bg-gradient-to-b from-blue-100 via-white-100 to-transparent ">
          <div className="h-90 w-170 pl-33 ">
          <br /><br /><br />
          <h1 className="text-[16px] font-medium  uppercase">Trello for Resources Hubs</h1>
          <h2 className="text-[24px] font-medium ">Trello works with the tools you love</h2>
          <p className="text-[20px] font-normal ">Trello Power-Ups connect your favorite apps directly to Trello for a single source of truth with zero additional effort. Want more niche features in Trello? You can add those, too. With our gallery of <a href="" className='underline text-blue-900 '>200+ Power-Ups</a>, building a bespoke resource hub is effortless.</p><br />
          <p className="text-[20px] font-normal underline text-blue-800 ">See More Trello Powerups</p>
        </div><br />

        <div className=" h-200 pl-33 flex gap-10">
          <Link to="/power-ups/55a5d917446f51777421000a" className=" h-[300px] w-[345px] shadow-2xl rounded-[10px]">
            <div className=" h-[96px] bg-[#403294] rounded-t-[10px]"></div>
            <img src={slack} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Slack</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Communication and Collabration</h2>
              <p className="text-[16px] font-normal mt-2">Attach Slack conversations to Trello cards or automatically send Trello updates to slack  channels and direct messages </p>
            </div>
          </Link>

          <Link to="/power-ups/55a5d916446f517774210006" className=" h-[300px] w-[345px] shadow-2xl rounded-[10px]">
            <div className=" h-[96px] bg-[#2684ff] rounded-t-[10px]"></div>
            <img src={google} alt="GOOGLE" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Google Drive</h1>
              <h2 className="text-[16px] font-normal text-gray-500">File Management</h2>
              <p className="text-[16px] font-normal mt-2">Browers Google Drive from within Trello to quicly attach relevant files to corresponding Trello cards.</p>
            </div>
          </Link>

          <Link to="/power-ups/586be37142f94dc0871fbcbb/confluence-cloud" className="h-[300px] w-[345px] shadow-2xl rounded-[10px]">
            <div className=" h-[96px] bg-[#988dd9] rounded-t-[10px]"></div>
            <img src={confluence} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Confluence</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Communication and Collabration</h2>
              <p className="text-[16px] font-normal mt-2">Create new  Confluence pages or add existing pages to Trello cards for knowledge documentation. </p>
            </div>
          </Link>

        </div><br />


        <div className=" h-200 pl-33 flex gap-10 ">
          <Link to="/power-ups" className=" h-[300px] w-[345px] shadow-2xl rounded-[10px]">
            <div className=" h-[96px] bg-[#0052cc] rounded-t-[10px]">  </div>
            <img src={jira} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Jira</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Developer Tools</h2>
              <p className="text-[16px] font-normal mt-2">Connect and Jira and Trello to help all your teams work better together</p>
            </div>
          </Link>
        

          <Link to="/power-ups/6052d130068a8c0de7b022b4" className=" h-[300px] w-[345px] shadow-2xl rounded-[10px]">
            <div className=" h-[96px] bg-[#ff7452] rounded-t-[10px]"></div>
            <img src={Microsoft} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Microsoft Teams </h1>
              <h2 className="text-[16px] font-normal text-gray-500">Communicatin and Collabration</h2>
              <p className="text-[16px] font-normal mt-2">Receive Trello notification or view and interact with Trello boards within Microsoft Teams.</p>
            </div>
          </Link>

          <Link to="/power-ups/5893c2b56bde057070fbc1b7" className="h-[300px] w-[345px] shadow-2xl rounded-[10px]">
            <div className=" h-[96px] bg-[#fcc7ec] rounded-t-[10px]"></div>
            <img src={Miro} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Miro</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Product & design</h2>
              <p className="text-[16px] font-normal mt-2">Embed and access Miro boards from within Trello. Change made in one tool are reflected in the other.</p>
            </div>
          </Link>

        </div>
      </div>
      <br /><br /><br /><br />
      
        <div className="pl-33">
          <h1 className="text-[36px] font-medium">There’s a template for that</h1>
          <p className="text-[20px] font-normal">Why start from scratch when there’s expertise you can trust? <a href="" className='underline text-blue-900' >Trello templates </a>get you <br /> going quickly with pre-built Trello boards that you can customize for your needs. You’ll <br />  also find Trello templates for everything from  <a href=""className='underline text-blue-900'>Team Management</a>  to <a href=""className='underline text-blue-900'>Personal</a>  <br /> <a href="" className='underline text-blue-900'> Productivity.</a>

</p>
        </div><br />
        <div className="pl-33 flex gap-10">
          <div>
          <img src={TeamOrganize} alt="eisenhower" className="h-[234px] w-[540px]" /><br />
          <h1 className="text-[24px] font-medium"><a href=""className='underline text-blue-900'>Team Organization Central
</a></h1><br />
          <p className="text-[20px] font-normal">From team birthdays to the company vacation policy,<br />  use this Trello board to store essential team resources, <br />  schedules, project summaries, updates, and more.</p><br />
     
          </div>
          <div>
          <img src={Marketing} alt="team" className="h-[234px] w-[554px]" /><br />
          <h1 className="text-[24px] font-medium"><a href="" className='underline text-blue-900'>Marketing Content Catalog</a></h1><br />
          <p className="text-[20px] font-normal">Centralize all the content your team creates so that it’s easily searchable – and usable.</p><br />
         
          </div>
        </div>

        <div className="pt-[128px] flex flex-col items-center">
          <h1 className="text-[20px] font-normal">Join a community of millions of users globally who are using Trello to get more done.</h1><br />
          <img src={logos1} alt="logos" className="" />
        </div><br /><br /><br />
        <div className=" bg-blue-100   pl-33"><br /><br /><br />
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
              <h1 className="text-[24px] font-medium"><a href="" className='underline text-blue-900'>Why your enterprise needs an internal knowledge base</a></h1>
              <p className="text-[20px] font-normal">Learn how to build an accurate, self-sustaining knowledge base for your company.</p><br />

            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img src={robot} alt="" className="h-[55px] w-[55px] "/>
            </div>
            <div>
              <h1 className="text-[24px] font-medium"><a href="" className='underline text-blue-900'>5 powerful automation tricks with Trello Custom Fields</a></h1>
              <p className="text-[20px] font-normal">Employees waste three hours a day on tasks that can be automated – let’s fix that.</p><br />

            </div>
          </div>
          </div><br />

          <div className="flex gap-10 pb-20">
          <div className="flex gap-5">
            <div>
              <img src={book} alt="" className="h-[40px] w-[40px] "/>
            </div>
            <div>
              <h1 className="text-[24px] font-medium"><a href="" className='underline text-blue-900'>How to build an adaptable employee manual with Trello</a></h1>
              <p className="text-[20px] font-normal">Easy ways to build an effective company handbook that employees will actually use.</p><br />
           
            </div>
          </div>
          <div className="flex gap-5">
            <div >
              <img src={bag} alt="" className="h-[50px] w-[50px] "/>
            </div>
            <div>
              <h1 className="text-[24px] font-medium"><a href="" className='underline text-blue-900'>Using Trello and Confluence to streamline business processes</a></h1>
              <p className="text-[20px] font-normal">Learn what inefficiencies are screwing up your processes and how to fix them.</p><br />
         
            </div>
          </div>
          </div>
        </div>

   </>
  )
}
