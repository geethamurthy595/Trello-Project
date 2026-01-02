import img1 from "../../../assets/img1tmuc.png";
import img2 from "../../../assets/img2tmuc.png";
import img3 from "../../../assets/img3tmuc.png";
import img4 from "../../../assets/img4tmuc.png";
import img5 from "../../../assets/img5tmuc.png";
import slack from "../../../assets/Slack_Mark.png";
import google from "../../../assets/Google_Drive.png";
import figma from "../../../assets/Figma-Icon.png";
import Jira from "../../../assets/Jira-icon.png";
import zapier from "../../../assets/zapier.png";
import cardaging from "../../../assets/cardagingicon.png";
import eisenhower from "../../../assets/Eisenhower_Template.png";
import Team from "../../../assets/Team_Task_Template.png";
import logos from "../../../assets/logos.png";
import bookmark from "../../../assets/bookmark.svg";
import prize from "../../../assets/prize.svg";
import thunder from "../../../assets/thunder.svg";
import time from "../../../assets/time.svg";
import NavBar from "../../NavBar";
import UniversalFooter from "../../UniversalFooter";
import { Link } from "react-router-dom";
function Section() {
  return <>
    <main>
      <NavBar />
      <div className="h-[738px] text-center pt-[100px] bg-gradient-to-b from-[#f2fdff] to-white">
        <img src={img1} alt="Task Management" className="w-182 h-90 ml-100" /><br />
        <h1 className="text-[48px] font-medium">Manage tasks in one shared space</h1>
        <p className="text-[20px] font-normal">
          Say goodbye to sticky notes and to-do lists: Trello allows teams of
          any size <br /> to easily manage tasks and hit deadlines - all without ever
          leaving the app.
        </p><br />
        <button className="bg-blue-600 text-white py-2 px-4 rounded text-[16px] h-[49px] w-[204px] hover:cursor-pointer hover:bg-blue-900">Get started with Trello</button>
      </div>

      <section className=" text-center">
        <br />
        <h1 className="text-[36px] font-medium">Trello is better than your best to-do list</h1><br />
        <img src={img2} alt="Trello Board" className="h-143 ml-75" />

      </section>

      <div>
        <br /><br />
        <h1 className="text-[36px] font-medium pl-50">
          Trello makes it easy to organize and <br /> track individual or team tasks in one <br /> place
        </h1><br /><br /><br /><br />
      </div>

      <div className="flex gap-50 items-center">
        <br /><br /><br /><br /><br />
        <div className=" h-100 w-104">
          <h1 className="text-[36px] font-medium">Assign tasks and manage deadlines</h1>
          <br />
          <hr className="border-gray-300" />
          <br />
          <p className="text-[20px] font-normal">Trello’s advanced checklists give you the power to add more context to your tasks by assigning team members and due dates to checklist items, increasing visibility and keeping your team accountable.</p>
          <br />
          <button className="text-[16px] font-normal border-1 border-blue-400 h-[49px] w-[264px] hover:cursor-pointer hover:bg-blue-400">check out advanced checklists</button>
        </div>
        <div><img src={img3} alt="Advanced Checklists" className="h-100 w-130" /></div>
      </div><br /><br />


      <div className="flex gap-50 items-center">
        <br /><br /><br /><br /><br />
        <div><img src={img4} alt="Customer List" className="h-121 w-134" /></div>
        <div className=" h-100 w-104">
          <h1 className="text-[36px] font-medium">Prioritize tasks and keep your team aligned</h1>
          <br />
          <hr className="border-gray-300" />
          <br />
          <p className="text-[20px] font-normal">Prioritize with labels to identify what is high, medium, or low priority and bring an extra layer of shared understanding to your tasks. You can even filter by a certain label to only view cards associated with the label you want to view.</p>
          <br />
          <button className="text-[16px] font-normal border-1 border-blue-400 h-[49px] w-[174px] hover:cursor-pointer hover:bg-blue-400">Learn how to label</button>
        </div>
      </div><br /><br />


      <div className="flex gap-50 items-center h-200">
        <br /><br /><br /><br /><br />
        <div className=" h-100 w-95">
          <h1 className="text-[36px] font-medium">Bring a fresh perspective to the task at hand (pun intended) with Calendar View</h1>
          <br />
          <hr className="border-gray-300" />
          <br />
          <p className="text-[20px] font-normal">Visualize checklist items and cards <br /> with due dates in Calendar View, <br /> showing what tasks are due in the <br /> days and weeks ahead. Cards will be arranged according to their due date <br /> and will display any labels, members, <br /> or checklists added to them.</p>
          <br />
          <button className="text-[16px] font-normal border-1 border-blue-400 h-[49px] w-[174px] hover:cursor-pointer hover:bg-blue-400">Learn about views</button>
        </div>
        <div><img src={img5} alt="Calendar View" className="h-90 w-133" /></div>
      </div>


      <div className=" flex flex-col  h-250 w-full">
        <div className="h-90 w-230 pl-52 ">
          <br /><br /><br />
          <h1 className="text-[16px] font-medium ">Trello for Task Management</h1>
          <h2 className="text-[24px] font-medium ">Trello + your favorite tools</h2>
          <p className="text-[20px] font-normal ">Trello has 200+ integrations with the tools you know and love. Integrate the tools your team already uses with Trello to keep your work organized and in one place. Try a Trello Power-Up to connect all of your team’s (other) favorite apps to your boards.</p><br />
          <p className="text-[20px] font-normal underline text-blue-800 hover:cursor-pointer  ">Go to Power-Ups gallery</p>
        </div><br />

        <div className=" h-200 pl-52 flex gap-10">
          <Link to="/power-ups/55a5d917446f51777421000a" className=" h-[300px] w-[345px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#403294] rounded-t-[10px]"></div>
            <img src={slack} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Slack</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Automation</h2>
              <p className="text-[16px] font-normal mt-2">Keep your communication and collaboration apps connected</p>
            </div>
          </Link>

          <Link to="/power-ups/55a5d916446f517774210006" className=" h-[300px] w-[345px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#2684ff] rounded-t-[10px]"></div>
            <img src={google} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Google Drive</h1>
              <h2 className="text-[16px] font-normal text-gray-500">File Management</h2>
              <p className="text-[16px] font-normal mt-2">Search Google Drive right from Trello and attach relevant files and folders</p>
            </div>
          </Link>

          <Link to="/power-ups" className="h-[300px] w-[345px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#988dd9] rounded-t-[10px]"></div>
            <img src={figma} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Figma</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Integration</h2>
              <p className="text-[16px] font-normal mt-2">Embed Figma Files on Trello cards that can update in real-time to keep teams in sync</p>
            </div>
          </Link>

        </div><br />


        <div className=" h-200 pl-52 flex gap-10">
          <Link to="/power-ups/586be36326cc4c7e9f70beb3" className=" h-[300px] w-[345px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#0052cc] rounded-t-[10px]"></div>
            <img src={Jira} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Jira</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Developer Tools</h2>
              <p className="text-[16px] font-normal mt-2">Connect and Jira and Trello to help all your teams work better together</p>
            </div>
          </Link>

          <Link to="/power-ups/58d4259b89d6d7e47a899239" className=" h-[300px] w-[345px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#ff7452] rounded-t-[10px]"></div>
            <img src={zapier} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Zapier</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Automation</h2>
              <p className="text-[16px] font-normal mt-2">Set up time-saving automations to get things done between all your favorite apps</p>
            </div>
          </Link>

          <Link to="/power-ups/55a5d917446f517774210012" className="h-[300px] w-[345px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#fcc7ec] rounded-t-[10px]"></div>
            <img src={cardaging} alt="" className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2" />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Card Aging</h1>
              <h2 className="text-[16px] font-normal text-gray-500">Board Utilities</h2>
              <p className="text-[16px] font-normal mt-2">Inactive cards will fade, showing you which tasks need a status update</p>
            </div>
          </Link>

        </div>
      </div>
      <br /><br /><br /><br />


      <div className="pl-52">
        <h1 className="text-[36px] font-medium">No need to start from scratch. Use one of <br /> our customizable templates.</h1>
        <p className="text-[20px] font-normal">Jumpstart your board with a well-proven <span className="text-blue-800 font-normal underline hover:cursor-pointer"> template </span> designed by <br /> our team. Customize it for yours.</p>
      </div><br />
      <div className="pl-52 flex gap-10">
        <div>
          <img src={eisenhower} alt="eisenhower" className="h-[234px] w-[540px]" /><br />
          <h1 className="text-[24px] font-medium">Eisenhower Matrix Task Board</h1><br />
          <p className="text-[20px] font-normal">The Eisenhower Matrix Template is a powerful method <br /> to organize your daily/weekly tasks.</p><br />
          <p className="text-[20px] font-normal text-blue-800 underline hover:cursor-pointer">Get organized</p>
        </div>
        <div>
          <img src={Team} alt="team" className="h-[234px] w-[554px]" /><br />
          <h1 className="text-[24px] font-medium">Team Tasks - 5 Things Workflow</h1><br />
          <p className="text-[20px] font-normal">Keep team status updates transparent and succinct <br /> with this template. It’s simple: add two things that are <br /> being worked on, two tasks that will be worked on next, <br /> one thing that is not being worked on.</p><br />
          <p className="text-[20px] font-normal text-blue-800 underline hover:cursor-pointer">Improve your workflow</p>
        </div>
      </div>

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
              <p className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img src={thunder} alt="" className="h-[40px] w-[40px] mt-3" />
            </div>
            <div>
              <h1 className="text-[24px] font-medium">8 Ways to track important tasks in Trello</h1>
              <p className="text-[20px] font-normal">Deadlines tend to creep up faster than <br /> anticipated. With Trello, you'll be able to gain <br /> better control over pending tasks, visualize <br /> priorities, and become a more collaborative and <br /> efficient team member.</p><br />
              <p className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</p>
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
              <p className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img src={time} alt="" className="h-[40px] w-[40px] mt-3" />
            </div>
            <div>
              <h1 className="text-[24px] font-medium">How to prioritize tasks as a team when <br /> everything seems important</h1>
              <p className="text-[20px] font-normal">When there’s no structure or process to your <br /> team’s work, every task can seem more <br /> important than the last. Use these tactics to <br /> effectively prioritize when everything is <br /> competing for your effort and energy.</p><br />
              <p className="text-blue-800 underline text-[20px] hover:cursor-pointer">Read more</p>
            </div>
          </div>
        </div>
      </div>
      <UniversalFooter />
    </main>
  </>
}
export default Section;