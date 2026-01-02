import React from "react";
import xero1 from "../../../../../assets/xero1.png";
import sales5 from "../../../../../assets/sales5.svg";
import sales6 from "../../../../../assets/sales6.svg";
import sales7 from "../../../../../assets/sales7.svg";
import sales2 from "../../../../../assets/sales2.svg";
import xero2 from "../../../../../assets/xero2.png";
import xero3 from "../../../../../assets/xero3.png";
import sales8 from "../../../../../assets/sales8.svg";
import xero4 from "../../../../../assets/xero4.svg";
import { Link } from "react-router-dom";
import NavBar from "../../../../NavBar";

const XeroProjects = () => {
  return (
    <>
    <NavBar/>
      <div className=" p-2 ml-70 mb--10 hover:underline ">
        <a href="https://trello.com/power-ups">Power-Ups</a>/ <a href="">Microsoft Teams</a>
      </div>
      {/* Container */}
      <section className="flex justify-center  ">
        {/* side navbar */}
        <div className=" w-[300px]  p-9 sticky  top-20 left-20 ">
          <img src={xero1} alt="" className="  " />

          <div className="mt-3 flex">
            <img src={xero4} alt="" className="h-5 w-8 " />
            <span className=" p-1">Made by Xero</span>
          </div>
          <div className=" border-solid flex p-1 mt-1 bg-pink-50 rounded-md w-25">
            <img src={sales5} alt="" className="h-5 w-8 " />
            <button className="text-xs p-1 ">5,000+</button>
          </div>

          <hr className="mt-3" />
          <br />
          <p className="font-semibold ">Categories</p>
          <button to="/power-ups/category/it-project-management" className="px-3 py-1 border hover:bg-gray-300 mt-1.5 text-sm rounded-md">
            IT Projec&tmanagement
          </button>
        <button  to="/power-ups/category/board-utilities" className="px-3 py-1 border w-40 hover:bg-gray-300 mt-1.5 text-sm rounded-md flex">
            Board utilities
          </button>
          <br />
          <br />
          <hr />
          <br />
          <div className="flex items-center gap-2 "></div>
          <div>
            <div className=" items-center gap-2">
              <div className="flex">
                <img src={sales6} alt="" className="h-5 w-8  " />
                <p className="text-sm hover:text-blue-800 hover:underline">
                  Contact support
               </p> 
              </div>
              <br />
              <div className="flex">
                <img src={sales7} alt="" className="h-5 w-8 flex " />
                <p  className="text-sm hover:text-blue-800 hover:underline">
                  privacy policy
                </p>
              </div>
            </div>
            <br />
            <hr />
          </div>
          <div className="flex">
            <img src={sales8} alt="" className="h-5 w-8 mt-15" />
            <p className="mt-5 mb-5">
              MicrosoftTeams is in compliance with <br />
              <a href="/legal/privacy-policy" className="text-blue-800 underline">
                Trello's data and privacy practices.
              </a>
            </p>
          </div>
          <hr />
        </div>
        <div className="r  w-[700px]  p-18 pt-3">
          <div className="flex justify-between ">
            <h1 className="text-2xl font-semibold ">Xero Projects</h1>
            <button to="/power-ups/55a5d917446f517774210009/enable" className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-900">
              Add power-up
            </button>
          </div>

          <br />
          <p className="text-black-600 text-2xl font-semibold  "></p>
          <br /> 
          <p>
            The Projects Power-Up for Trello lets you add time directly to your
            projects from a card in Trello, so when it comes to invoicing in
            Xero Projects, all your time is accounted for..
          </p>
          <br />
          <p>
            <ul class="list-disc ">
              <li>
            View your time spent on a card or see the time logged by your team.</li>
            {" "}
            <br />
            <li>
            Use the link in Xero Projects to open a Trello card and know what
            work’s been done on a job.
            </li>
            </ul>
          </p>
          <div className="flex">
            <p className="mt-5 mb-5">
              <div className="flex items-center gap-2">
                <img src={xero1} alt="" className=" w-4 " />
                <a  className="text-blue-800 underline">
                  Project tracker software for your small business
                </a>
              </div>
              <p>
                is ideal for small service businesses who bill for their time
                and costs on jobs, and need to track the profitability of their
                projects. <br /> <br />
                Projects together with Trello helps users to manage their
                workflow and capture time easily, so they can invoice accurately
                in Xero and keep their projects in the green.
              </p>
            </p>
          </div>

          <img src={xero2} alt="" className="h-100 w-120" />
          <img src={xero3} alt="" className="h-100 w-120 " />
        </div>
      </section>

      <div className="  flex justify-center ">
        <ul className="flex gap-4 mb-2 mt-0">
          <li>
            <Link to="/templates" className="underline">
              Templates
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="underline">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/platforms" className="underline">
              Apps
            </Link>
          </li>
          <li>
            <Link to="/company/careers" className="underline">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/blog" className="underline">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/cloud/trello/" className="underline">
              Developer
            </Link>
          </li>
          <li>
            <Link to="/about" className="underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/trello/" className="underline">
              Help
            </Link>
          </li>
          <li>
            <Link
              to="/legal/atlassian-customer-agreement#intro"
              className="underline">
              Legal
            </Link>
          </li>
          <li>
            <Link to="/legal/privacy-policy" className="underline">
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/integrations" className="underline">
              Integrations
            </Link>
          </li>
          <li>
            <Link to="/contact/" className="underline">
              Contact us
            </Link>
          </li>
          <li>
            <Link
              to="/legal/atlassian-customer-agreement#intro"
              className="underline"
            >
              Terms
            </Link>
          </li>
        </ul>
      </div>
      <footer>
        <div className="m-auto flex flex-wrap justify-center w-120">
          <br />
          <img src={sales2} alt="" width={170} />
          <p className="text-xs font-medium  text-gray-700 pt-1  pl-3">
            {" "}
            © Copyright 2025. All rights reserved.
          </p>
        </div>
      </footer>
      <br />
      <br />
    </>
  );
};

export default XeroProjects;
