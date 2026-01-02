import React from "react";
import NavBar from "../../../../NavBar";
import Uibg6 from "../../../../../assets/All_Views_Illo.svg";
import Uibg7 from "../../../../../assets/uibgg3.webp";
import Uibg8 from "../../../../../assets/Board_View_illo_4.svg";
import Uibg9 from "../../../../../assets/Timeline_View_Illo_4.svg";
import Uibg10 from "../../../../../assets/Calendar_View_Illo_7.svg";
import Uibg11 from "../../../../../assets/Dashboard_View_Illo_5.svg";
import Uibg12 from "../../../../../assets/Table_View_Illo_8.svg";
import Uibg13 from "../../../../../assets/Map_View_Illo_2.svg";
import Uibg14 from "../../../../../assets/UI_Illo__Workspace_Views_2x.webp";
import UniversalFooter from "../../../../UniversalFooter";
import { Link } from "react-router-dom";
const TryViews = () => {
  return (
    <>
      <NavBar />
      <section className="h-[600px] w-[1520px] bg-gradient-to-b from-[#FFF4FB] ">
        <div className="flex">
          <div className=" h-[650px] w-[1600px]  mt-25 ml-50 justify-center">
            <h1 className="font-bold text-4xl">
              Give work a new look <br />
              with Trello views.
            </h1>
            <br />
            <p className="text-[20px]">
              See your projects from every angle with Board, Timeline,
              <br /> Table, Calendar, Dashboard, Map and Workspace views
              <br /> that will bring a fresh perspective to the task at hand.
            </p>
            <br />
            <p className="text-[20px]">
              Boards are available to all users. Additional views
              <br /> require a Premium or Enterprise account.
            </p>
            <div className="h-[55px] w-[170px] border-pink-300 rounded-sm border-2 rounded-5 p-2.5 mt-6  bg-white hover:bg-[#FFF4FB] ">
              <Link to="/login" className=" flex items-center justify-center">Try views for free!</Link>
            </div>
            <Link
              to="/pricing"
              className="text-blue-600 underline "
            >
              Learn more about Trello’s plans and pricing.
            </Link>
          </div>
          <div className=" h-[500px] w-[2100px] pt-3 mt-25  -ml-30">
            <img src={Uibg6} alt="" />
          </div>
        </div>

        <div className="h-[800px] w-[1520px] ">
          <h2 className="text-4xl font-bold pt-10 ml-120">
            See what views can do for you
          </h2>
          <img src={Uibg7} alt="" className="h-[600px] w-[900px] ml-75 pt-16" />
        </div>
        <div className=" h-[500px] w-[1550px] flex">
          <div className=" h-[400px] w-[600px] ml-60">
            <img src={Uibg8} alt="" />
          </div>
          <div className=" h-[500px] w-[500px] ml-20">
            <h1 className="text-3xl font-bold">
              Success starts with a Trello
              <br /> board
            </h1>
            <br />
            <div className="border-2 border-blue-800 w-[250px]"></div>
            <br />
            <p className="text-xl">
              Similar to a Kanban board, a Trello board is the <br />
              easiest way to go from idea to action. Plan
              <br /> projects and break down each step of the way <br />
              to getting things done. Instantly see the <br />
              status of every task and celebrate each
              <br /> accomplishment. Project management has <br />
              never been so powerful, yet so fun.
            </p>
          </div>
        </div>
        <div className="h-[800px] w-[1520px]  flex">
          <div className=" h-[500px] w-[500px] ml-65">
            <h1 className="text-3xl font-bold">
              Hit deadlines every time
              <br /> with Timeline
            </h1>
            <br />
            <div className="border-2 border-blue-800 w-[250px]"></div>
            <br />
            <p className="text-xl">
              Stay on top of every sprint and stay on track of <br />
              every goal with Timeline. Use Timeline to see
              <br /> how all of the moving parts piece together <br />
              over time. Drag and drop to make start and <br />
              due date adjustments on the fly as priorities
              <br /> shift and needs change. Quickly get a glimpse <br />
              of what’s coming down the pipeline and
              <br />
              identify any gaps that might impede your
              <br /> team’s progress.
            </p>
            <br />
            <Link
              to="/views/timeline"
              className="text-blue-600 underline text-xl"
            >
              Learn more about Timeline view
            </Link>
          </div>
          <div className=" h-[400px] w-[600px] ml-20 pt-6">
            <img src={Uibg9} alt="" />
          </div>
        </div>
        <div className=" h-[500px] w-[1550px] flex -mt-80">
          <div className=" h-[400px] w-[600px] ml-60 pt-10">
            <img src={Uibg10} alt="" />
          </div>
          <div className=" h-[500px] w-[500px] ml-20">
            <h1 className="text-3xl font-bold">
              Use Calendar to stay on top <br />
              of tasks
            </h1>
            <br />
            <div className="border-2 border-blue-800 w-[250px]"></div>
            <br />
            <p className="text-xl">
              Start each day without any surprises. Whether <br />
              scheduling a quarterly editorial calendar or
              <br /> staying on top of your to-dos, Calendar is like a<br />{" "}
              crystal ball giving you a clear vision of what
              <br />
              work lies ahead. Sync any third party
              <br /> calendars to maintain the perfect work-life <br />
              balance.
            </p>
            <br />
            <Link
              to="/views/calendar"
              className="text-blue-600 underline text-xl"
            >
              Learn more about Calendar view
            </Link>
          </div>
        </div>
        <div className="h-[800px] w-[1520px]  flex">
          <div className=" h-[500px] w-[500px] ml-65">
            <h1 className="text-3xl font-bold">
              Get actionable insights with
              <br /> Dashboard
            </h1>
            <br />
            <div className="border-2 border-blue-800 w-[250px]"></div>
            <br />
            <p className="text-xl">
              Bring a bird’s-eye view to projects and <br />
              processes with Dashboard so that you can <br />
              manage workloads and prevent bottlenecks
              <br /> before they begin. Visualize key metrics like <br />
              due dates, assigned cards, and cards per list to <br />
              keep stakeholders aligned and confidence
              <br />
              running high.
            </p>
            <br />
           
            <Link
              to="/views/dashboard"
              className="text-blue-600 underline text-xl"
            >
              Learn more about Dashboard view
            </Link>
        
          </div>
          <div className=" h-[400px] w-[600px] ml-20 pt-9">
            <img src={Uibg11} alt="" />
          </div>
        </div>
        <div className=" h-[500px] w-[1550px] flex -mt-80">
          <div className=" h-[400px] w-[570px] ml-65 pt-2">
            <img src={Uibg12} alt="" className="-ml-10" />
          </div>
          <div className=" h-[500px] w-[500px] ml-20">
            <h1 className="text-3xl font-bold">
              See it like a spreadsheet
              <br /> with Table
            </h1>
            <br />
            <div className="border-2 border-blue-800 w-[250px]"></div>
            <br />
            <p className="text-xl">
              Dial in on all of the work that is happening
              <br /> across a board with the Table view. View your
              <br /> work in a convenient spreadsheet-styled list
              <br /> that can be sorted and filtered to drill down to <br />
              exactly the cards you need to see.
            </p>
            <br />
            <Link
              to="/views/table"
              className="text-blue-600 underline text-xl"
            >
              Learn more about Table view
            </Link>
          </div>
        </div>
        <div className="h-[800px] w-[1520px]  flex mt-[-80px]">
          <div className=" h-[500px] w-[500px] ml-65">
            <h1 className="text-3xl font-bold">
              Find a new sense of
              <br /> direction with Map
            </h1>
            <br />
            <div className="border-2 border-blue-800 w-[250px]"></div>
            <br />
            <p className="text-xl">
              Wherever you are in the world, use Trello’s <br />
              Map view to display location-based data in <br />
              context on an interactive map. Whether
              <br />
              tracking real estate properties, planning an <br />
              event, or organizing work in the field, Map will <br />
              make sure your team doesn’t lose their way.
            </p>
            <br />
            <Link
              to="/views/map"
              className="text-blue-600 underline text-xl"
            >
              Learn more about Map view
            </Link>
          </div>
          <div className=" h-[500px] w-[550px]  pt-6">
            <img src={Uibg13} alt="" />
          </div>
        </div>
        <div className=" h-[500px] w-[1550px] flex -mt-80">
          <div className=" h-[300px] w-[500px] ml-60 pt-10 mt-[-50px]">
            <img src={Uibg14} alt="" />
          </div>
          <div className=" h-[500px] w-[500px] ml-30">
            <h1 className="text-3xl font-bold">
              Manage work across
              <br /> multiple boards
            </h1>
            <br />
            <div className="border-2 border-blue-800 w-[250px]"></div>
            <br />
            <p className="text-xl">
              Create as many custom overviews as you need<br/> across Workspace
              boards. Use the Workspace<br/> Table and Calendar views to keep track
              of <br/>minor details or large projects.
            </p>
            <br />
            <Link
              to="/views/workspace"
              className="text-blue-600 underline text-xl"
            >
             Learn more about Workspace views
            </Link>
          </div>
        </div>
        <div className="h-[330px] w-[1520px] mt-[-110px] bg-gradient-to-b from-[#E4EEFF]">
        <div className="">
            <h2 className="font-bold text-3xl mt-10 pt-18 ml-110">Bring powerful new views to your team’s work
</h2>

<p className="ml-170 text-xl pt-3">Start a free trial today</p>
<div className="mt-5 p-2 border-1 border-blue-500 h-[50px] w-[100px] ml-[730px] bg-white hover:bg-blue-100  rounded-lg transition duration-300">
<Link to="/free-trial" className="flex items-center justify-center"> I'm ready</Link>
</div>

        </div>
        </div>
        <UniversalFooter/>
      </section>
      
    </>
  );
};

export default TryViews;
