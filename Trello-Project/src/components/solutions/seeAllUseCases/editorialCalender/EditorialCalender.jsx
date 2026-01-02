import React from "react";
import NavBar from "../../../NavBar";
import BgImg from "../../../../assets/EditorialCalenderBg.png";
import SetUp from "../../../../assets/setUpCalender.png";
import Grid1 from "../../../../assets/grid1.png";
import Grid2 from "../../../../assets/grid2.png";
import Grid3 from "../../../../assets/grid3.png";
import slack from "../../../../assets/Slack_Mark.png";
import hubspot from "../../../../assets/hubSpot.svg";
import calender from "../../../../assets/calender.png";
import voting from "../../../../assets/voting.png";
import google from "../../../../assets/Google_Drive.png";
import zapier from "../../../../assets/zapier.png";
import Blog from "../../../../assets/Template_Blog_Content_Schedule.png";
import EditCalender from "../../../../assets/Template_Editorial_Calendar.png";
import logos from "../../../../assets/logos.png";
import bookmark from "../../../../assets/bookmark.svg";
import prize from "../../../../assets/prize.svg";
import thunder from "../../../../assets/thunder.svg";
import time from "../../../../assets/time.svg";
import UniversalFooter from "../../../UniversalFooter";
import { Link } from "react-router-dom";

const EditorialCalender = () => {
  return (
    <>
      <NavBar />
      <section className=" text-center pt-[100px] bg-gradient-to-b from-[#e9fbff] to-white ">
         <img src={BgImg} alt="Crm" className="w-170 h-100 ml-110 -mt-10" /><br /> 
        <h1 className="text-[43px] font-bold   text-gray-800  w-[46%] m-auto">Trello as an Editorial Calendar: The go-to command center for your team’s content curation, revisions, handoff, and publishing.</h1>
        <p className="text-[20px]  text-gray-800 font-normal tracking-wide w-[45%] pt-4 m-auto">Some of the most influential and widespread media and content organizations use Trello to manage workflows across contributors, teams, and stories. Your team can too.</p><br />
        <Link to="/signup" className="bg-blue-600 text-white py-2 px-3 rounded text-[16px] h-[48px] w-[200px] mt-3 hover:cursor-pointer hover:bg-blue-900">Get started with Trello</Link>
        <h1 className="w-[728px] m-auto mt-25 text-[35px] font-semibold text-gray-900 ">How to set up an Editorial Calendar in Trello</h1>
        <img src={SetUp} alt="" className="h-[486px] w-[912px] m-auto pt-[25px]"/>
      </section>

      <section className="w-[73%] m-auto mt-20">
        <h1 className="w-[728px] text-[34px] font-[600] text-gray-900 ">Turn sparks of inspiration into incredible publications with Trello</h1>
        <div class="p-3 grid grid-cols-2 grid-rows-3 gap-y-24 gap-x-24 mt-[120px]">
          <div class="flex flex-col justify-center">
            <h1 className="w-[442px] text-[34px] font-[600] text-gray-900 pb-6 border-b border-gray-300">Whatever you need for your content development process</h1>
            <p className="text-[20px] w-[442px] text-gray-900 font-[450] tracking-wide pt-6">Use Trello as a whiteboard to generate ideas, a workspace to coordinate with contributors and 
              editors, or a calendar to manage what’s due and when. To get started, simply create a board and 
              add some ideas. Lay out the details with descriptions or attachments.</p>
          </div>

          <div class="h-[402px] w-[538px] flex items-center justify-center"><img src={Grid1} alt="" /></div>

          <div class="h-[402px] w-[538px] flex items-center justify-center"><img src={Grid2} alt="" /></div>

          <div class="flex flex-col justify-center">
            <h1 className="w-[442px] text-[34px] font-[600] text-gray-900 pb-6 border-b border-gray-300">Workflows proven by leading digital newsmakers</h1>
            <p className="text-[20px] w-[442px] text-gray-900 font-[450] tracking-wide pt-6">Use labels to identify 
              content pillars, SEO keywords, or writing themes. Create custom fields to track team roles, illustrations,
               and more. Use automation to create advanced checklists, set due dates, and send alerts or requests to stakeholders and partners.</p>
            <button className="border-blue-600 border w-[220px] p-[8px] mt-5 rounded text-[17px] hover:bg-blue-200 cursor-pointer">See how Wired uses Trello</button>
          </div>

          <div class="flex flex-col justify-center">
            <h1 className="w-[442px] text-[34px] font-[600] text-gray-900 pb-6 border-b border-gray-300">Views from the top</h1>
            <p className="text-[20px] w-[442px] text-gray-900 font-[450] tracking-wide pt-6">Timeline view helps your content team stay ahead 
              of deadlines and see what’s coming down the pipeline. Dashboard view shows important project data like key milestones for publication
               to help everyone stay on track. Visualize content cycles with Calendar view.</p>
            <p className="text-[20px] w-[412px] text-gray-900 font-semibold tracking-wide pt-6 italic">Some views are only available with a  
              <Link to="/premium" className="text-blue-700 underline hover:cursor-pointer"> Premium</Link> or <Link to="/enterprise" className="text-blue-700 underline hover:cursor-pointer">Enterprise</Link> plan</p>
            <Link to="/views" className="border-blue-600 border w-[160px] p-[8px] mt-5 rounded text-[17px] hover:bg-blue-200 cursor-pointer">Try views for free</Link>
          </div>
          <div class="h-[402px] w-[538px] flex items-center justify-center"><img src={Grid3} alt="" /></div>
        </div>
      </section>

      <section className="h-[341px] bg-gradient-to-b from-[#e9fbff] to-white mt-10">
        <div className="w-[73%] m-auto mt-14">
          <h1 className="text-[20px] text-gray-900 font-semibold pt-5">Trello for Editorial Calendars</h1>
          <h1 className="text-[25px] text-gray-900 font-semibold pt-[5px]">Trello + your favorite tools</h1>
          <p className="text-[20px] w-[742px] text-gray-900 font-[450] tracking-wide pt-[5px] pb-[12px]">Trello has 200+ integrations with the tools you know and love. Integrate the tools your team already uses with Trello to keep your work organized and in one place. Try a Trello Power-Up to connect all of your team’s (other) favorite apps to your boards.</p>
          <a className="text-blue-700 text-[19px] tracking-wider underline hover:cursor-pointer">Go to Power-Ups gallery</a>
        </div>
      </section>

      <section className="flex flex-col w-[73%] m-auto gap-10">
        <div className="flex gap-10">
          <Link to="/power-ups/55a5d917446f51777421000a" class="h-[379px] w-[345px] shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-[10px] cursor-pointer">
            <div className=" h-[96px] bg-[#403294] rounded-t-[10px]"></div>
            <img src={slack} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Slack</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Automation</h2>
              <p className="text-[16px] font-normal mt-2 tracking-wide">Keep your communication and collaboration apps connected.</p>
            </div>
          </Link>

          <Link to="/power-ups/618ed1281ffc556318341ea4" class="h-[379px] w-[345px] shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-[10px] cursor-pointer">
            <div className=" h-[96px] bg-[#00C7E5] rounded-t-[10px]"></div>
            <img src={hubspot} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">HubSpot + Trello Two-Way Sync</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Automation</h2>
              <p className="text-[16px] font-normal mt-2 tracking-wide">With this Power-Up, integrate HubSpot with Trello and maximize collaboration and productivity across teams and tools.</p>
            </div>
          </Link>

          <Link to="/power-ups/55a5d917446f517774210011" class="h-[379px] w-[345px] shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-[10px] cursor-pointer">
            <div className=" h-[96px] bg-[#2684ff]  rounded-t-[10px]"></div>
            <img src={calender} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Calender</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Board utilities</h2>
              <p className="text-[16px] font-normal mt-2 tracking-wide">Bring perspective to due dates with the Calender Power-Up for Trello.</p>
            </div>
          </Link>
        </div>
        
        <div className="flex gap-10">
          <Link  to="/power-ups/55a5d917446f517774210013/voting" class="h-[300px] w-[345px] shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-[10px] cursor-pointer">            <div className=" h-[96px] bg-[#0052cc] rounded-t-[10px]"></div>
            <img src={voting} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Voting</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Board utilities</h2>
              <p className="text-[16px] font-normal mt-2 tracking-wide">Collect votes on Trello cards from your team, customer and community to prioritize cards.</p>
            </div>
          </Link>

          <Link to="/power-ups/55a5d916446f517774210006" class="h-[300px] w-[345px] shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-[10px] cursor-pointer">
            <div className=" h-[96px] bg-[#2684ff] rounded-t-[10px]"></div>
            <img src={google} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Google Drive</h1>
              <h2 className="text-[16px] font-normal text-gray-500">File Management</h2>
              <p className="text-[16px] font-normal mt-2">Search Google Drive right from Trello and attach relevant files and folders.</p>
            </div>
          </Link>

          <Link to="/power-ups/58d4259b89d6d7e47a899239" class="h-[300px] w-[345px] shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-[10px] cursor-pointer">
            <div className=" h-[96px] bg-[#ff7452] rounded-t-[10px]"></div>
            <img src={zapier} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Zapier</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Automation</h2>
              <p className="text-[16px] font-normal mt-2 tracking-wide">Set up time-saving automations to get things done between all your favorite apps.</p>
            </div>
          </Link>
          
        </div>
      </section>

      <section className="w-[73%] m-auto mt-32">
        <h1 className="w-[728px] text-[34px] font-[600] text-gray-900 ">No need to start from scratch. Use one of our customizable templates.</h1>
        <p className="text-[20px] w-[802px] text-gray-900 font-[450] tracking-wide pt-[5px] pb-[12px]">Jumpstart your board with a well-proven  
          <Link to="/templates" className="text-blue-700 underline hover:cursor-pointer"> template</Link> designed by our team. Customize it for yours.</p>

        <div className="flex gap-8 mt-6">
          <div className="w-[538px] h-[457px] flex flex-col gap-2">
            <img src={EditCalender} alt="" className="h-[228px] w-[538px]" />
            <h1 className="text-[24px] font-medium mb-1">Editorial Calender</h1>
            <p className="text-[20px] w-[502px] text-gray-900 font-[450] tracking-wide">Seamlessly coordinate content creation, editing, 
              and production with internal and external authors,
              while keeping an eye on the publishing calendar and distribution strategy.
            </p>
            <Link to="/templates/marketing/editorial-calendar-UQk1wa4a" className="text-blue-700 underline  pt-4 text-[20px] hover:cursor-pointer">Try Template</Link>
          </div>

          <div className="w-[538px] h-[457px] flex flex-col gap-2">
            <img src={Blog} alt="" className="h-[228px] w-[538px]" />
            <h1 className="text-[24px] font-medium mb-1">Blog Content Schedule</h1>
            <p className="text-[20px] w-[502px] text-gray-900 font-[450] tracking-wide ">Build a scheduled pipeline for all upcoming content for your blog. 
              Plan content, assign to authors, and manage the editing and publishing 
              of a post.
            </p>
            <Link to="/templates/marketing/blog-content-schedule-Y84uxh4d" className="text-blue-700 underline  pt-4 text-[20px] hover:cursor-pointer">Try Template</Link>
          </div>
        </div>
      </section>

      <div className="pt-[128px] flex flex-col items-center">
        <h1 className="text-[20px] font-normal">Join a community of millions of users globally who are using Trello to get more done.</h1><br />
        <img src={logos} alt="logos" className="" />
      </div><br /><br /><br />

      <div className="bg-[#e6fcff] pl-52 pb-10"><br /><br /><br />
        <div>
          <h1 className="text-[24px] font-medium">Are sticky notes and to-do lists taking over your day? Let <br /> Trello Help.</h1>
          <p className="text-[20px] font-normal">Read the Trello blog to find ways to improve efficiency, <br /> productivity, and collaboration.</p>
        </div><br /><br /><br />
        <div className="flex gap-25">
          <div className="flex gap-5">
            <div>
              <img src={bookmark} alt="" className="h-[40px] w-[40px] mt-3" />
            </div>
            <div>
              <h1 className="text-[24px] font-medium">12 Power-ups to transform Trello into a <br /> powerful task management software</h1>
              <p className="text-[20px] font-normal">Learn the best Power-Ups, integrations, and <br /> features to help you and your team move tasks <br /> along effortlessly.</p><br />
              <Link to="/blog/trello/moved-to-published-using-trello-as-an-editorial-calendar" className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</Link>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img src={thunder} alt="" className="h-[40px] w-[40px] mt-3" />
            </div>
            <div>
              <h1 className="text-[24px] font-medium">8 Ways to track important tasks in Trello</h1>
              <p className="text-[20px] font-normal">Deadlines tend to creep up faster than <br /> anticipated. With Trello, you'll be able to gain <br /> better control over pending tasks, visualize <br /> priorities, and become a more collaborative and <br /> efficient team member.</p><br />
              <Link to="/blog/trello/plan-email-calendar-trello" className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</Link>
            </div>
          </div>
        </div><br /><br /><br /><br /><br />

        <div className="flex gap-25">
          <div className="flex gap-5">
            <div>
              <img src={prize} alt="" className="h-[40px] w-[40px] mt-3" />
            </div>
            <div>
              <h1 className="text-[24px] font-medium">Top Trello tips to keep your busy team on <br /> track</h1>
              <p className="text-[20px] font-normal">Struggling to decide which tasks to tackle first? <br /> Learn how to keep all members of your team <br /> (and their tasks) moving forward at a steady br
                pace.</p><br />
              <Link to="/blog" className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</Link>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img src={time} alt="" className="h-[40px] w-[40px] mt-3" />
            </div>
            <div>
              <h1 className="text-[24px] font-medium">How to prioritize tasks as a team when <br /> everything seems important</h1>
              <p className="text-[20px] font-normal">When there’s no structure or process to your <br /> team’s work, every task can seem more <br /> important than the last. Use these tactics to <br /> effectively prioritize when everything is <br /> competing for your effort and energy.</p><br />
              <Link to="/blog/trello" className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</Link>
            </div>
          </div>
        </div>
      </div>
      <UniversalFooter/>
    </>
  );
};

export default EditorialCalender;
