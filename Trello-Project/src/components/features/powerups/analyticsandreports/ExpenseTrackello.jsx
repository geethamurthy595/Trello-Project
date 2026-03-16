
import React from "react";
import NavBar from "../../../NavBar";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from "../../../solutions/taskManagement/AtlassianFooter";

import plug from "../../../../assets/plug.png";
import img5 from "../../../../assets/timetrackerimg4.png";
import img2 from "../../../../assets/top-new-trello-power-up-2021.png";
import excel from "../../../../assets/Excel-Export.jpg"

const ExpenseTrackello = () => {

  const features = [
    "Keep track of multiple expenses on one board in EACH card",
    "Identify each item's amount as a debit or credit",
    "See both credit/debit totals on the face of the card for convenience",
    "Export a card’s expenses directly to Excel",
    "Filter by credits/debit",
    <><strong>NEW! </strong> Export all expenses on your entire board to Excel</> ,
    <><strong>NEW! </strong>Enter all expenses using TAB only!</>
  ];

  const pricePlans = [
    "$3 USD monthly",
    "$12 USD semi-annually",
    "$20 USD annually"
  ];

  return (
    <>
      <NavBar />

      
      <div className="ml-70 mt-10 sticky top-20">
        <p>
          <Link to="/power-ups" className="hover:underline">
            Power-Ups
          </Link>{" "}
          / <Link className="hover:underline">Expense Trackello</Link>
        </p>
      </div>

      <section className="flex mt-5 w-[70%] m-auto gap-20">

        <div className="flex w-90 h-130 justify-start sticky top-35">

          <div className="rounded-lg text-center">

          
            <img src="" alt="" className="block mx-auto w-60 h-9" />

            <p className="mt-3 flex justify-center gap-2 items-center">
              <img className="w-5 h-5" src={plug} alt="" />
              Made by Team: Solo Admin
            </p>

            <div className="bg-gray-100 w-28 h-8 ml-10 flex justify-center items-center gap-2 rounded mt-3">
              <img className="w-5 h-5" src={img5} alt="" />
              5,000+
            </div>

            <br />

            <hr className="border-gray-300" />

            <br />

            <h1 className="text-lg font-bold flex justify-start">
              Categories
            </h1>

            <div className="flex flex-col gap-3 mt-2">
              <div className="text-sm p-2 border border-gray-200 w-[150px] rounded">
                Analytics & reporting
              </div>
            </div>

            <br />

            <hr className="border-gray-300" />

            <div className="flex items-center mt-3">
              <CiMail />
              <a href="#" className="text-md px-2 hover:underline hover:text-blue-600">
                Contact support
              </a>
            </div>

            <div className="flex items-center mt-2">
              <MdOutlinePrivacyTip />
              <a href="#" className="text-md px-2 hover:underline hover:text-blue-600">
                Privacy policy
              </a>
            </div>

            <br />

            <hr className="border-gray-300" />

            <div className="mt-4 flex gap-2 items-center">
              <AiTwotoneLock className="w-8 h-8" />

              <p className="text-sm text-gray-700 text-left">
                Expense Trackello is in compliance with{" "}
                <a href="#" className="text-blue-600 underline">
                  Trello's data and privacy practices
                </a>
              </p>
            </div>

          </div>

        </div>

      
        <div className="w-full md:w-[70%] mb-6">

        
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">
              Expense Trackello
            </h1>

            <button className="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Add Power-Up
            </button>
          </div>

        
          <div className="w-full h-[120px] bg-gray-200 rounded-md flex items-center justify-center mt-4">
            <img src={img2} alt="" />
          </div>

          <h2 className="text-xl font-semibold mt-6">
            We have improved Expense Trackello!
          </h2>

          <p className="mt-3 text-gray-700">
            Expense Trackello allows you to keep track of expenses and invoice
            amounts on each card! Simply add all your line items to our
            easy-to-understand checklist format to make it easy to give quick
            answers in your next budget meeting or monitor at a glance.
          </p>

          <p className="mt-3 text-blue-600 underline">
            Check out the Expense Trackello FAQs here
          </p>

          <hr className="my-8" />

         
          <h2 className="text-2xl font-semibold">
            That's great, but what exactly does Expense Trackello do?
          </h2>

          <ul className="list-disc ml-6 mt-4 flex flex-col gap-2">
            {features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <hr className="my-8" />

        
          <h2 className="text-2xl font-semibold">
            How does it look?
          </h2>

          <p className="mt-3">
            On the face of every card, you’ll see your Debits and Credits for
            quick glancing convenience.
          </p>

          <div className="w-full h-[300px] border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center mt-6">
            Preview unavailable
          </div>

          <hr className="my-8" />

         
          <h2 className="text-2xl font-semibold">
            Adding and Identifying Expenses
          </h2>

          <ul className="list-disc ml-6 mt-3">
            <li>list the items</li>
            <li>add the amount</li>
            <li>save</li>
          </ul>

          <p className="mt-3">
           <strong> NEW!</strong> Use the TAB key to add expenses quickly without removing your
            hands from the keyboard.
          </p>

          <p className="mt-3">
            Expenses are automatically summed at the top.
          </p>

          <p className="mt-3">
            Filter credits or debits easily to identify totals.
          </p>

          <hr className="my-8" />

         
          <h2 className="text-2xl font-semibold">
            ### Export to Excel
          </h2>

          <p className="mt-3">
            Yep, your list is exportable as an Excel spreadsheet for your reporting convenience. No need to retype your list or remember to open or update your linked Google sheet or Excel spreadsheet.
          </p>
         
              <p className="mt-3">
            **New! Now you can export all of your expenses on your entire board with the new “Export all cards” button.
          </p>
          <p className="mt-3">
            This new feature will export the <strong>card name, description detail, and the amount</strong> for each expense item on your board into Excel. The spreadsheet orders your information from the left of your Trello board to the right of your Trello board and from the top of every list to the bottom of every list in your export.
          </p>

          <div className="w-full  rounded-md flex items-center justify-center mt-6">
            <img src={excel} alt="" />
          </div>

          <p className="mt-3">
            We truly hope you enjoy the power-up and our new updates! If you have any questions, thoughts, suggestions, we’d love to hear from you.
          </p>

          <hr className="my-8" />

         
          <h2 className="text-2xl font-semibold">
            Here are some tips to get you started
          </h2>

          <ul className="list-disc ml-6 mt-4 text-blue-600">
            <li className="underline cursor-pointer">
              How to Track Vacation Expenses
            </li>

            <li className="underline cursor-pointer">
              How to Track Event Planning Expenses
            </li>
          </ul>

          <hr className="my-8" />

        
          <h2 className="text-2xl font-semibold">
            Price Breakdown
          </h2>

          <p className="mt-3">
            Expense Trackello is a paid power-up.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            The subscription rates are:
          </h3>

          <ul className="list-disc ml-6 mt-3">
            {pricePlans.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))}
          </ul>

          <p className="mt-4">
           <strong> To Manage your subscription,</strong> from the card menu by selecting
            "Expense Trackello" and choosing "Start/manage subscription".
          </p>

           <p className="mt-4">
            This menu directs you to your own Stripe portal. In the Stripe portal, you can view your payment history, upgrade, renew, and cancel your subscription.
          </p>

        </div>
      </section>

      <div className="mt-10">
        <AtlassianFooter />
      </div>

    </>
  );
};

export default ExpenseTrackello;

