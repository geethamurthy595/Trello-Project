import React from "react";
import NavBar from "../../NavBar";
import Uibg from "../../../assets/UI_Illo__Workspace_Views_2x.png";
import overviewV from "../../../assets/WorkspaceViews_SetUpCalendarView.mp4";
import UniversalFooter from "../../UniversalFooter";
import Uibg1 from "../../../assets/WorkspaceViews_FeatureSection_2_2x.webp";
import Uibg2 from "../../../assets/WorkspaceViews_FeatureSection_1_2x.webp";
import { Link } from "react-router-dom";

const WorkspaceCalender = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-end w-[85%] h-[-3%] mt-15">
        <img src={Uibg} alt="" className="w-[55%] h-[95%] mt-2" />
      </div>
      <div className="h-[300px] w-[420px]  mt-[-400px] ml-[160px]">
        <h1 className="font-bold text-[40px]">Trello Workspace views</h1>
        <p className="text-lg">
          Select tasks across multiple Trello boards to
          <br />
          bring together the work that matters most to
          <br /> you with Workspace Table and Calendar <br /> views.
        </p>
        <br />
        <div>
          <Link
            className="border-1 border-purple-900 p-1 w-30 h-10 inline-flex items-center justify-center rounded hover:bg-purple-100 transition"
            to="/free-trial"
          >
            Get started
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section class=" bg-gradient-to-t from-[#5243AA] to-[#ED50B4] text-white">
        <div className="   text-white border-black-500 h-[900px] w-[900px] m-auto justify-center text-center pt-1">
          <h1 className=" mt-20  text-4xl font-bold  ">
            Create customized overviews of work
          </h1>
          <p className="text-lg">
            Save your preferred Workspace view settings and come back to what’s
            <br />
            urgent with a specific overview of work and eliminate the risk of
            tasks falling <br />
            through the cracks. Make your saved views available for teammates to
            track
            <br /> or keep them private.
          </p>
          <div className="mt-20">
            <video src={overviewV} autoPlay loop alt="autoplay"></video>
          </div>
        </div>
      </section>
      <div className="h-[50px] w-[700px]"></div>
      <div className="flex ">
        <div className="h-[250px] w-[800px]  p-4 rounded-xl ml-50 ">
          <h1 className="font-semibold text-3xl ">
            Organize several projects
            <br /> into a single list
          </h1>
          <br />

          <p className="font-50px text-xl">
            Use spreadsheet-style views to create custom <br />
            task lists across multiple Workspace boards.
            <br /> Filter the information you want by member,
            <br />
            label, due date and more.
          </p>
        </div>
        <div className=" h-[270px] w-[850px] flex">
          <img src={Uibg2} alt="" />
        </div>
      </div>
      <div className="h-[100px] w-[800px]"></div>
      <div className="flex ">
        <div className="  h-[270px] w-[800px] flex ml-50">
          <img src={Uibg1} alt="" />
        </div>
        <div className="h-[250px] w-[800px]  p-4 rounded-xl -ml-0 ">
          <h1 className="font-semibold text-3xl ">
            See what lies ahead across
            <br /> your entire Workspace
          </h1>
          <br />

          <p className="font-50px text-xl">
            Manage all of the scheduled work across
            <br /> team projects and initiatives with Workspace <br />
            Calendar. Visualize due dates and deadlines <br />
            across multiple boards in one snapshot and <br />
            get granular information with filter options.
          </p>
        </div>
      </div>
      <br />
      <br />
      <section className="bg-gradient-to-b from-[#3E3290] to-[#1D2C57] h-[250px] w-[1520px] ">
        <div className="text-4xl text-white ">
          <h1 className="pt-12 ml-50">
            Master work management and collaboration with Workspace views
          </h1>
          <div className="text-xl mt-4 ml-150">
            <h5 className="">Start a free trial today</h5>
          </div>
          <Link
            className="h-[45px] w-[120px] bg-amber-50 ml-160  pl-4 mt-3 pt-2 text-base text-black bg-white-500  p-4 rounded-lg hover:bg-purple-200 "
            to="/free-trial"
          >
            Get started
          </Link>
        </div>
      </section>
      <UniversalFooter />
    </>
  );
};

export default WorkspaceCalender;
