import React from "react";
import sales3 from "../../../../../assets/sales3.jpg";
import sales1 from "../../../../../assets/sales1.png";
import sales4 from "../../../../../assets/sales4.jpg";
import sales2 from "../../../../../assets/sales2.svg";
import sales5 from "../../../../../assets/sales5.svg";
import sales6 from "../../../../../assets/sales6.svg";
import sales7 from "../../../../../assets/sales7.svg";
import sales8 from "../../../../../assets/sales8.svg";
import {Link} from "react-router-dom";
import NavBar from "../../../../NavBar";
const Salesforce = () => {
  return (
    <>
    <NavBar/>
      <div className=" p-2 ml-70 mb--10 flex ">
        <a href="https://trello.com/power-ups" className="hover:underline">Power-Ups</a><h1>&nbsp;&nbsp;/&nbsp;&nbsp;</h1><a href="https://trello.com/power-ups/55a5d917446f517774210009/salesforce" className="hover:underline">Sales Force</a>
      </div>
      {/* Container */}
      <section className="flex justify-center  ">
        {/* side navbar */}
        <div className=" w-[300px]  p-9 sticky  top-20 left-20 ">
          <img src={sales1} alt="" className="  "/>

          <div className="mt-3 flex">
           <img src={sales5} alt="" className="h-5 w-8"/>
            <span className=" p-1">Made by Trello Inc</span>
          </div>
          <div className=" border-solid flex p-1 mt-1 bg-pink-50 rounded-md w-25">
           <img src={sales5} alt="" className="h-5 w-8" />
            <button className="text-xs p-1">50,000+</button>
          </div>
          <hr className="mt-3" />
          <br />
          <p className="font-semibold ">Categories</p>
            <button to="/power-ups/category/hr-operations" className="px-3 py-1 border-1 h-10 hover:bg-gray-300 mt-1.5 text-sm rounded-md">
            HR & operations
          </button>
          <button to="/power-ups/category/sales-support" className="px-3 py-1 border-1 hover:bg-gray-300 mt-1.5 text-sm rounded-md flex">
            Sales and support
          </button>
          <br />
          <br />
          <hr />
          <br />
          <div className="flex items-center gap-2 "></div>
          <div>
            <div className=" items-center gap-2 ">
              <div className="flex">
              <img src={sales6} alt="" className="h-5 w-8  " />
              <p className=" text-sm hover:text-blue-800 hover:underline ">
                Contact support
              </p>
              </div>
              <br />
              <div className="flex"> 
              <img src={sales7} alt="" className="h-5 w-8 flex " />
              <a href="https://www.atlassian.com/legal/privacy-policy" className="text-sm hover:text-blue-800 hover:underline">
                privacy policy
              </a>
              </div>
            </div>
            <br/>
            <hr/>
          </div>
          <div className="flex">
            <img src={sales8} alt="" className="h-5 w-8 mt-15" />
            <p className="mt-5 mb-5">
             Salesforce is in compliance with <br />
              <span className="text-blue-800 underline">
                Trello's data and privacy practices.
              </span>
            </p>
          </div>
          <hr />
        </div>
        <div className="r  w-[700px]  p-18 pt-3">
          <div className="flex justify-between ">
            <h1 className="text-2xl font-semibold ">Salesforce</h1>
            <button to="/power-ups/55a5d917446f517774210009/enable" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-900">
              Add power-up
            </button>
          </div>
          <br />
          <p className="text-black-600 text-2xl font-semibold  "></p>
          <br />
          <p>
            The Salesforce Power-Up for Trello brings information about
            opportunities, leads, contacts, and cases to your Trello cards. See
            the health of a Sales pipeline and dive into specific opportunities
            without leaving Trello whether you’re on the go or at your desk.
          </p>
          <br />
          <p>
           
            <ul class="list-disc ">
            <li>See all the relevant info for an opportunity (owner, stage, amount,
            etc.)</li> <br />
            <li>Drop links right from the browser to pull in the relevant info.{" "}</li>
            <br />
            <li>View your pipeline health in a glance with close dates and amounts
            displayed as card <br /> badges. <br />
            Always up to date and in sync! <br />
            </li>
            </ul>
          </p>
          <br />

          <p className="text">
            Note that the Salesforce Power-Up currently works with the
            Salesforce Performance, Enterprise, Unlimited, and Developer tiers,
            or the Professional Edition with the optional API access enabled.
          </p>
          <img src={sales3} alt="" className="h-100 w-120" />
          <img src={sales4} alt="" className="h-100 w-120 " />
        </div>
      </section>
     
      <div className="  flex justify-center ">             
                <ul className="flex gap-4 mb-2 mt-0">
                    <li><Link to="/templates" className="underline">Templates</Link></li>
                    <li><Link to="/pricing" className="underline">Pricing</Link></li>
                    <li><Link to="/platforms" className="underline">Apps</Link></li>
                    <li><Link to="/company/careers" className="underline">Jobs</Link></li>
                    <li><Link to="/blog" className="underline">Blog</Link></li>
                    <li><Link to="/cloud/trello/" className="underline">Developer</Link></li>
                    <li><Link to="/about" className="underline">About</Link></li>
                    <li><Link to="/trello/" className="underline">Help</Link></li>
                    <li><Link to="/legal/atlassian-customer-agreement#intro" className="underline">Legal</Link></li>
                    <li><Link to="/legal/privacy-policy" className="underline">Privacy</Link></li>
                    <li><Link to="/integrations" className="underline">Integrations</Link></li>
                    <li><Link to="/contact/" className="underline">Contact us</Link></li>
                    <li><Link to="/legal/atlassian-customer-agreement#intro" className="underline">Terms</Link></li>
                </ul>
            </div>
          <footer>
                <div className="m-auto flex flex-wrap justify-center w-120">
                  <br />
                  <img src={sales2} alt="" width={170} />
                  <p className="text-xs font-medium  text-gray-700 pt-1  pl-3"> © Copyright 2025. All rights reserved.</p>
                </div>
          </footer>
      <br/>
      <br/>
    </>
  ); 
};
export default Salesforce;
