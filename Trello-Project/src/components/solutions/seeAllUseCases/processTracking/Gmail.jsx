import React from "react";
import NavBar from "../../../NavBar";
import { Link } from "react-router-dom";
import small1 from "../../../../assets/small1.png";
import { IoRocketOutline } from "react-icons/io5";
import small2 from "../../../../assets/small2.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import small6 from "../../../../assets/small6.svg";
import { GoLink } from "react-icons/go";

import gmail_icon_1 from "../../../../assets/gmail-icon_1.svg";
import image1 from "../../../../assets/gmail-screenshot-1.png";
import image2 from "../../../../assets/gmail-listing.png";
import image3 from "../../../../assets/gmail-screenshot-2.png";
import image4 from "../../../../assets/gmail-sidebar.png";
import image5 from "../../../../assets/gmail-board.png";
import image6 from "../../../../assets/gmail-card.png";

const Gmail = () => {
  return (
    <>
      <NavBar />
      <div className=" pt-2 ml-70 mb--10">
        <a href="">Power-Ups</a>/ <a href="">Gmail</a>
      </div>
      <section className="h-[100%]  flex justify-center   ">
        <div className=" w-[300px]  p-9 sticky top-10 self-start h-fit h-[110px] ">
          <img src={gmail_icon_1} alt="" className="block  w-120" />

          <div className="mt-3 flex">
            <IoRocketOutline className="mt-2" />
            <span className=" p-1">Made by Trello Inc</span>
          </div>
          <div className=" border-solid flex p-1 mt-1 bg-pink-50 rounded-md w-25">
            <GoLink className="mt-1" />
            <button className="text-xs p-1">Integrations</button>
          </div>
          <hr className="mt-3" />
          <br />
          <p className="font-semibold ">Categories</p>
          <button className="px-3 py-1 border-1 hover:bg-gray-300 mt-1.5 text-sm rounded-md">
            Communication & collaboration
          </button>
          <br />
          <br />
          <hr />
          <br />
          <div className="flex items-center gap-2 ">
            <MdOutlineMailOutline className="" />
            <Link
              to="/login"
              className="text-sm  hover:text-blue-800 hover:underline "
            >
              Contact support
            </Link>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <FiInfo />
              <p className="text-sm hover:text-blue-800 hover:underline">
                privacy policy
              </p>
            </div>
            <br />
            <hr />
          </div>
          <div className="flex">
            <img src={small6} className="h-10 w-3 mt-6 mr-3" alt="logo" />
            <p className="mt-5 mb-5">
              MicrosoftTeams is in compliance with
              <span className="text-blue-800 underline">
                Trello's data and privacy practices.
              </span>
            </p>
          </div>
          <hr />
        </div>
        <div className=" w-[700px] h-[100%]  p-18 pt-3">
          <div className="flex justify-between ">
            <h1 className="text-2xl font-semibold ">Microsoft Teams</h1>
            <button className="bg-blue-700 text-white p-2 rounded-md">
              Configure
            </button>
          </div>
          <br />
          <p className="text-black-600 text-2xl font-semibold ">
            What is the Microsoft Teams integration?
          </p>
          <br />
          <p>
            The test Gmail integration keeps your boards and inbox connected for
            maximum productivity. You can create new cards without leaving your
            inbox, whether that's on the web or your Gmail mobile app. When you
            are tracking sales leads, managing customer feedback, or organizing
            an event, the Trello for Gmail integration is a great way to tame
            the inbox onslaught and make sure nothing important gets lost in the
            mail.
          </p>
          <br />
          <img src={image1} alt="logo" className="w-140  rounded-lg" />
          <br />
          <p className="text-2xl font-semibold mt-2 mb-2">
            How to set up the Gmail integration
          </p>
          <ol className="list-decimal list-inside">
            <li>
              Click the Configure button at the top of this page. This will open
              up the Trello for Gmail listing in the G Suite Marketplace.
            </li>
            <li>
              Click "Install" and then follow the prompts granting the
              integration access.
            </li>
            <li>
              Return to your Gmail inbox, refresh the page, and then click on a
              message.
            </li>
            <li>
              The Trello for Gmail integration will load in the panel on the
              right sidebar.
            </li>
          </ol>
          <br />
          <p>
            (note: Trello, like all third-party Add-ons, are only available for
            use while you're viewing an individual email and will not appear
            while you're viewing your inbox)
          </p>{" "}
          <br />
          <img src={image2} alt="logo" className="w-140  rounded-lg" />
          <br />
          <h1 className="text-2xl font-semibold">
            Getting started with Gmail and Trello
          </h1>{" "}
          <br />
          <p>
            After the Trello for Gmail integration has been installed, the
            Trello logo will appear in the right side panel while you're viewing
            an individual email.
          </p>
          <br />
          <img src={image3} alt="logo" className="w-140  rounded-lg" />
          <br />
          <p>
            Click on the Trello logo and it will open the add-on. From there,
            you can select the Board and List you'll want the card created in.
          </p>
          <p>
            To save a little time, the email subject automatically becomes the
            Card title and the email body the Card description. These can both
            be edited before the card is created.
          </p>
          <img src={image4} alt="logo" className="w-140  rounded-lg" />
          <br />
          <p>
            Once you're ready, click the green "Add" button at the bottom and
            the card will be created on the specified board.
          </p>
          <br />
          <img src={image5} alt="logo" className="w-140  rounded-lg" />
          <br />
          <p>The email body will automatically become the card description.</p>
          <br />
          <img src={image6} alt="logo" className="w-140  rounded-lg" /> <br />
          <p className="text-xl font-medium">Uninstalling the integration</p>
          <p className="mb-3">
            In order to uninstall the Trello for Gmail Add-on, go to Manage Apps
            in the G Suite Marketplace, click on the three dotted menu and click
            "Remove".
          </p>{" "}
          <br />
        </div>
      </section>



      
      <div className="flex justify-center ">
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
              className="underline"
            >
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
          <img src={small2} alt="" width={170} />
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
export default Gmail;
