import React from "react";
import NavBar from "../../NavBar";
import UniversalFooter from "../../UniversalFooter";
import tableviewbg from "../../../assets/tableviewone.webp";
import tableviewtwo from "../../../assets/TableViewtwo.webp";
import TableViewAdvancedFilter from "../../../assets/TableView_AdvancedFilter.webp";
import { Link } from "react-router-dom";

const TableView = () => {
  return (
    <>
      <NavBar />
      <main className="w-full min-h-fit m-auto">
        <div className="w-4/5 min-h-fit m-auto flex ">
          <div className="w-[45%] flex pt-20 min-h-fit pb-20 ">
            <div className="p-2 pr-20">
              <h1 className="text-5xl leading-tight font-medium ">
                Trello Table view
              </h1>
              <p className="text-[#091e42] text-xl w-100 pt-3">
                Stay on top of everyone’s work at a glance with a
                spreadsheet-style perspective.
              </p>
              <Link to="/free-trial">
                <button
                  className="text-[#172b4d] px-5 pt-[0.7rem] pb-[0.8rem] border border-[#6554c0] text-base text-center bg-[#FFFFFF] mt-4 rounded-md transition-all duration-300
    hover:bg-[#eae6ff] cursor-pointer hover:border-[#6554c0] hover:text-[#172b4d]"
                >
                  Get started
                </button>
              </Link>
            </div>
          </div>
          <div className="w-2/3 flex items-center justify-center overflow-hidden">
            <img
              src={tableviewbg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full min-h-fit bg-[linear-gradient(rgb(101,84,192),rgb(249,156,219))] bg-repeat bg-scroll bg-clip-border bg-origin-padding bg-transparent mt-6">
          <div className="pt-16 w-4/5 min-h-fit m-auto text-center">
            <h2 className="text-4xl font-medium leading-snug p-4 text-[#FFFFFF]">
              Visualize work at a glance
            </h2>
            <p className="text-center text-xl w-160 m-auto text-[#FFFFFF]">
              Organize all the cards from a board into a compact, manageable
              spreadsheet-style list where you can edit current items or add new
              ones.
            </p>
            <img src={tableviewtwo} alt="" className="p-10 pt-16 pb-18" />
          </div>
        </div>
        <div className="w-full min-h-fit">
          <div className="w-4/5 m-auto pt-24 flex justify-between">
            <div className="w-[45%]">
              <h2 className="text-4xl leading-tight font-medium text-[#091e42]">
                Hone in and take action on any target
              </h2>
              <p className="w-100 text-xl text-[#091e42] pt-6 pb-10">
                Advanced filter options, such as lists, labels, members, and due
                dates, will help you narrow down information and drill deeper
                into your work.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src={TableViewAdvancedFilter}
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-4/5 m-auto pt-24 flex justify-between mb-10">
            <div className="w-[45%]">
              <img
                src={TableViewAdvancedFilter}
                alt=""
                className="w-full h-65"
              />
            </div>
            <div className="w-[48%]">
              <h2 className="text-4xl leading-tight font-medium text-[#091e42]">
                Stay on top of team workloads
              </h2>
              <p className="w-full text-xl text-[#091e42] pt-6 pb-10">
                Say goodbye to overwhelming workloads and assigned cards that
                could risk falling through the cracks. See all your assigned
                cards at a single glance and make sure that workload is
                distributed across teams to prevent burnout.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full min-h-fit bg-[linear-gradient(rgb(101,84,192),rgb(249,156,219))] bg-repeat bg-scroll bg-clip-border bg-origin-padding bg-transparent mt-6">
          <div className="pt-10 w-4/5 min-h-fit m-auto text-center pb-14">
            <h2 className="text-4xl font-medium leading-snug p-4 text-[#FFFFFF]">
              Bring a clearer view to your team’s work
            </h2>
            <p className="text-center text-xl w-160 m-auto text-[#FFFFFF] text-normal">
              Start a free trial today
            </p>
            <Link to="/free-trial">
              <button
                className="text-[#172b4d] px-5 pt-[0.7rem] pb-[0.8rem] border border-[#6554c0] text-base text-center bg-[#FFFFFF] mt-4 rounded-md transition-all duration-300
    hover:bg-[#eae6ff] cursor-pointer hover:border-[#6554c0] hover:text-[#172b4d]"
              >
                Get started
              </button>
            </Link>
          </div>
        </div>
      </main>
      <UniversalFooter />
    </>
  );
};

export default TableView;
