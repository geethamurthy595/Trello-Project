import React from "react";
import icon from "../../../../../assets/trelloIcon.svg";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import TrelloLock from "../../../../../assets/Trello_Lock.svg";
import NavBar from "../../../../NavBar";
import AtlassianFooter from "../../../taskManagement/AtlassianFooter";
import MailChimp1 from "../../../../../assets/MailChimp1.jpg";
import MailChimp2 from "../../../../../assets/MailChimp2.jpg";
import MailChimp3 from "../../../../../assets/MailChimp3.jpg";
import Chimp4 from "../../../../../assets/MailChimpFreddie.png";

const Mailchimp = () => {
  return (
    <>
      <NavBar />
      <section className="w-[1050px] m-auto p-10 ">
        <div className="">
          <Link to="/power-ups" className="hover:underline">
            Power-Ups
          </Link>
          <span> / </span>
          <a href="" className="hover:underline">
            MailChimp
          </a>
        </div>
        <div className="flex justify-between pt-7">
          <div className="w-[730px] h-[750px] sticky top-20">
            <img src={Chimp4} alt="" height={240} width={240} />
            <div className="flex">
              <img src={icon} alt="" height={16} width={16} />
              <p className="py-3 text-[16px] pl-2">Made by Trello Inc</p>
            </div>
            <div className="flex border-1 border-gray-400 rounded-sm px-2 text-xs font-thin bg-gray-200 w-[100px]">
              <img src={icon} alt="" height={16} width={16} />
              <button className="pl-1">25,000 +</button>
            </div>{" "}
            <br />
            <hr className="pb-3 w-full  text-gray-400" />
            <h3 className="py-2">Categories</h3>
            <button className="border-1 border-gray-400 rounded-sm px-3 py-1 text-xs font-normal hover:bg-gray-200">
              <a href="">Analysis & reporting</a>
            </button>{" "}
            <br />
            <button className="border-1  border-gray-400 rounded-sm px-3 py-1 text-xs font-normal hover:bg-gray-200 mt-2">
              <a href="">Marketing & social media</a>
            </button>{" "}
            <br />
            <br />
            <hr className="pb-3 text-gray-400" />
            <a
              className="px-1 text-sm flex items-center font-normal hover:underline hover:text-blue-400"
              href=""
            >
              {" "}
              <CiMail /> &nbsp; Contact support
            </a>
            <a
              className="px-1 pb-3 text-sm flex items-center font-normal hover:underline hover:text-blue-400"
              href=""
            >
              {" "}
              <IoIosInformationCircleOutline /> &nbsp; Privacy policy
            </a>
            <hr className="pb-3 text-gray-400" />
            <div className="flex gap-2 items-center">
              <img src={TrelloLock} width={15} alt="" />
              <div className="pb-6">
                <p>MailChimp is in compliance with</p>
                <a href="" className=" underline text-blue-500">
                  Trello's data and privacy <br /> practices.
                </a>
              </div>
            </div>
            <hr className="pb-22 text-gray-400" />
          </div>
          <div className="pl-10 ">
            <div className="flex justify-between">
              <h1 className="text-2xl font-medium">MailChimp</h1>
              <button className="border-2 rounded-md px-2 text-1xl font-medium bg-blue-500 text-white">
                <a href="">Add Power-Up</a>
              </button>
            </div>
            <p className="pt-3 w-[650px] text-gray-700">
              The MailChimp Power-Up for Trello allows you to plan and track
              MailChimp email <br /> campaign directly in one organized location.
              Share, collaborate, and iterate on templates <br /> attached to cards,
              and follow the results of campaigns once they are live, without 
              having <br /> to switch between apps. Plus, it’s easy to see in a glance
              which cards have templates and campaigns attached with MailChimp
              card badges on the front of each card.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                Attach MailChimp templates and campaigns directly to cards.
              </li>
              <li>See always up to date email campaign data on your cards.</li>
              <li>
                Collaborate and provide feedback on template designs and layouts
                in Trello.
              </li>
              <li>
                Quickly see what cards have templates and campaigns attached
                across your entire <br /> board.
              </li>
            </ul>
            <img
              src={MailChimp3}
              alt=""
              className="rounded-md h-[300px] w-[600px] pt-5"
            />
            <br />
            <img
              src={MailChimp2}
              alt=""
              className="rounded-md h-[300px] w-[600px] pt-5"
            />
            <br />
            <img
              src={MailChimp1}
              alt=""
              className="rounded-md h-[300px] w-[600px] pt-5"
            />
            <br />
            <br />
          </div>
        </div>
        <AtlassianFooter />
      </section>
    </>
  );
};

export default Mailchimp;
