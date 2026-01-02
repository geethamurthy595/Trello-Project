import React from "react";
import NavBar from "../../../NavBar";
import cardagingicon from "../../../../assets/cardagingicon.png";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import AtlassianFooter from "../AtlassianFooter";

const CardAging = () => {
  const Links = [
    { name: "Templates", href: "/templates" },
    { name: "Pricing", href: "/pricing" },
    { name: "Apps", href: "/platforms" },
    { name: "Jobs", href: "/company/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Developers", href: "/cloud/trello/" },
    { name: "About", href: "/about" },
    { name: "Help", href: "/trello/" },
    { name: "Legal", href: "/legal/atlassian-customer-agreement#intro" },
    { name: "Privacy", href: "/legal/privacy-policy" },
    { name: "Integrations", href: "/integrations" },
    { name: "Contact us", href: "/login" },
    { name: "Terms", href: "/legal/atlassian-customer-agreement#intro" },
  ];

  return (
    <>
      <NavBar />
      {/* <h1>Card aging</h1> */}
      <div className="ml-75 mt-10 sticky top-20 ">
        <p>
          <Link>Power-Ups</Link>/ <Link>Card Aging</Link>
        </p>
      </div>
      <section className="flex mt-5 w-[60%] m-auto   ">
        <div class="flex w-90 h-130 justify-start sticky top-35">
          <div class="   rounded-lg    text-center">
            <img
              src={cardagingicon}
              alt=""
              className="block mx-auto w-48 h-48"
            />
            <p className="mt-2">Made by Trello Inc</p>
            <p className="bg-gray-100">500,000 +</p>
            {/* <div class="inline-block w-1/2 p-2 bg-gray-200"></div> */}
            <br />
            <hr class="border-t border-gray-300"></hr>
            <br></br>

            <h1 class="text-l font-bold text-black flex justify-start">
              Categories
            </h1>
            <div class="flex space-x-2">
              <a
                href="Analytic&reporting"
                class="text-xs px-3 py-1 border border-gray-200 w-[140px] rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300"
              >
                Analytic & Reporting
              </a>
              <a
                href="Board utilities"
                className=" items-center text-xs px-3 py-1 border w-[120px] border-gray-200 rounded hover:bg-gray-100 hover:text-black-600 transition-all duration-300 "
              >
                Board Utilities
              </a>
            </div>
            <br />
            <hr class="border-t border-gray-300"></hr>

            <div className="flex items-center">
              <CiMail />
              <a
                href="Contact Support"
                className="  text-xxs px-2 py-1  border-gray-200 rounded hover:underline hover:text-blue-600 transition-all duration-300 "
              >
                Contact Support
              </a>
              <br />
            </div>
            <div className="flex items-center">
              <MdOutlinePrivacyTip />
              <a
                href=" Privacy Policy"
                className="  text-xxs px-2 py-1  border-gray-200 rounded hover:underline hover:text-blue-600 transition-all duration-300 "
              >
                Privacy Policy
              </a>
              <br />
            </div>
            <hr class="border-t border-gray-300"></hr>
          <div>
            <br />
  <p>Card Aging is in compliance with</p>
  <a href="#" className="flex items-center text-blue-500 underline gap-1 mt-1">
    <AiTwotoneLock className="w-6 h-6" />
    Trello's data and privacy practices.
  </a>
</div>

          </div>
          
        </div>
      
        <div class="w-full md:w-[70%] m-auto mb-6 ">
          <div class="flex justify-between items-center ">
           
            <h1 class="text-2xl font-bold text-black">Card Aging</h1>

    
            <a href="Power-up">
              <button class="w-[150px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                Add Power-up
              </button>
            </a>
          </div>

          <p class="text-gray-700 text-base leading-relaxed text-justify mt-4">
            Easily spot which cards on your board h"ave not been active lately
            with the for Trello. As cards fade (Regular mode) or turn yellow and
            tear (Pirate mode), you can see which tasks and projects may have
            fallen by the wayside and should be archived or need a status
            report, keeping your boards relevant and up-to-date.
          </p>

          <ul class="list-disc list-inside text-gray-700 space-y-3 text-justify mt-4">
            <li>
              See the activity (or lack of activity) of Trello cards at a
              glance.
            </li>
            <li>Choose from Regular mode or Pirate mode … Aargh!</li>
            <li>Card inactivity age thresholds are 1, 2, and 4 weeks.</li>
            <li>Open a card to see when it was last updated.</li>
            <li>Updated cards will turn back to their normal state.</li>
          </ul>

          <div class="flex flex-col gap-3 mt-4">
            <img
              src="/Card_Aging_1.jpg"
              alt="Card Aging Screenshot 1"
              class="rounded-lg shadow"
            />
            <img
              src="/Card_Aging_2.jpg"
              alt="Card Aging Screenshot 2"
              class="rounded-lg shadow"
            />
            <img
              src="/Card_Aging_3.jpg"
              alt="Card Aging Screenshot 3"
              class="rounded-lg shadow"
            />
          </div>
        </div>
      </section>
      <AtlassianFooter/>
    </>
  );
};

export default CardAging;




