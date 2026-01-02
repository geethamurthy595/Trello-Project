import React from "react";
import NavBar from "../../../../NavBar";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineFileCopy } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import trellologo from "../../../../../assets/trellologo.png";
import NewHireTemplate from "./NewHireTemplate";
import { Link } from "react-router-dom";
import drive from "../../../../../assets/drive.png";
import RelatedTemplates from "./RelatedTemplates";
import AtlassianFooter from "../../../taskManagement/AtlassianFooter";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const NewHireOnBoarding = () => {
  const [language, setLanguage] = useState("English");
  return (
    <>
      <NavBar />
      <main className="w-full min-h-screen flex justify-center mb-6">
        <div className="w-4/5 flex justify-between items-start">
          {/* ================= LEFT SIDEBAR ================= */}
          <div className="w-[25%] text-left h-screen sticky top-[100px]">
            <nav className="pr-6">
              <input
                className="w-2/3 mb-4 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none"
                type="text"
                placeholder="Find template"
              />
              <ul className="space-y-1">
                <li className="w-40 py-1 px-4 pl-8 text-blue-700 text-lg font-semibold hover:bg-gray-200 bg-blue-50 rounded cursor-pointer flex items-center">
                  <FaRegStar className="mr-2" />
                  Featured
                </li>
                <li className="w-40 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Business
                </li>
                <li className="w-40 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Design
                </li>
                <li className="w-40 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Education
                </li>
                <li className="w-40 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Engineering
                </li>
                <li className="w-40 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Marketing
                </li>
                <li className="w-50 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  HR & Operations
                </li>
                <li className="w-40 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Personal
                </li>
                <li className="w-40 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Productivity
                </li>
                <li className="w-60 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Product management
                </li>
                <li className="w-60 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Project management
                </li>
                <li className="w-50 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Remote work
                </li>
                <li className="w-40 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Sales
                </li>
                <li className="w-40 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Support
                </li>
                <li className="w-60 py-1 px-8 text-gray-700 text-lg hover:bg-gray-200 rounded cursor-pointer">
                  Team management
                </li>
              </ul>
            </nav>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="w-4/5 pr-4">
            {/* Breadcrumb */}
            <div className="w-full flex items-center gap-2 mt-6">
              <p className="text-[#172b4d] font-normal text-lg">
                Template Gallery
              </p>
              <span className="relative before:content-['/'] before:pr-2 before:text-[#44546f] inline-block"></span>
              <p className="text-[#172b4d] font-normal text-lg">
                Team Management
              </p>
              <span className="relative before:content-['/'] before:pr-2 before:text-[#44546f] inline-block"></span>
              <p className="text-[#172b4d] font-normal text-lg">
                New Hire Onboarding
              </p>
            </div>

            {/* Header Section */}
            <div className="w-full pt-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div>
                  <img src={trellologo} alt="Trello Logo" className="w-20" />
                </div>
                <div className="w-full">
                  <h1 className="text-2xl font-medium">New Hire Onboarding</h1>
                  <p className="text-lg font-medium">Created by Trello Team</p>
                  <p className="flex items-center gap-4 text-sm font-medium pt-2">
                    <span className="flex items-center gap-2">
                      <MdOutlineFileCopy />
                      18.3K Copies
                    </span>
                    <span className="flex items-center gap-2">
                      <IoEyeOutline />
                      131.3K Views
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex h-13 gap-6">
                <button className="flex items-center justify-center px-6 text-xl font-medium text-[#172b4d] bg-[#091e420f] rounded-md border border-transparent hover:border-gray-300 hover:bg-[#091e4224] hover:shadow-sm transition-colors duration-100 ease-in-out cursor-pointer">
                  Share
                </button>

                <button className="flex items-center justify-center px-6 text-lg font-medium text-black bg-[#669DF1] rounded hover:bg-[#8FB8F6] transition-colors duration-100 cursor-pointer">
                  Use Template
                </button>
              </div>
            </div>

            {/* About Section */}
            <div className="w-full h-fit p-6 mt-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">
                About this template
              </h3>

              <p className="text-base mb-3">
                This template provides a centralized space for every new hire to
                tackle all the job-related logistical items and business
                requirements to get onboarded. To save time and avoid human
                error, populate this template with all the tasks needed to get
                going for your company. From there, simply copy the template and
                personalize it for each new person.
              </p>

              <p className="text-base mb-2">
                Here's what's included in this onboarding template:
              </p>

              <ol className="list-decimal list-inside text-base space-y-1">
                <li>
                  Before first day tasks: make sure all HR logistics and manager
                  tasks are in order before the new hire arrives.
                </li>
                <li>
                  First week tasks: a handy list of all the to-dos to get
                  onboarded into company and team systems.
                </li>
                <li>
                  Who’s Who list: help the newbie orient themselves and learn
                  all about the key people they’ll encounter at work.
                </li>
                <li>FAQs: helpful resources to learn your ways of working.</li>
              </ol>
            </div>
            <div className="w-full h-170 overflow-hidden rounded-lg relative">
              {/* 👇 This ensures header + cards stay within this box */}
              <NewHireTemplate preview={true} />
            </div>
            <div className="p-6 pb-10 flex justify-end text-[#0c66e4] underline decoration-[#0c66e4] hover:cursor-pointer">
              <Link to="/b/qr3AcASr">View Template</Link>
            </div>

            <div className="w-full pb-6">
              <div className="text-2xl leading-normal font-semibold flex items-center gap-4">
                <svg
                  width="24"
                  height="24"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5009 2.65511C18.4967 2.5456 19.5352 2.80718 20.364 3.63597L18.9498 5.05019C18.6192 4.71958 18.2151 4.58335 17.7106 4.63884C17.1593 4.69947 16.4959 4.96246 15.7486 5.38541C15.0122 5.80221 14.272 6.32856 13.5675 6.8454C13.4614 6.92326 13.3548 7.00186 13.2485 7.08031C12.6795 7.50008 12.1166 7.91532 11.6552 8.18878C11.1608 8.48182 10.6363 8.46971 10.3204 8.43815C9.98837 8.40498 9.19934 8.39748 7.94353 8.81849C7.16614 9.07911 6.21617 9.69953 5.40597 10.3177L5.34387 10.3653C5.59079 10.4171 5.85122 10.4646 6.11263 10.5076C6.62099 10.5913 7.11123 10.6543 7.47593 10.6964C7.65774 10.7174 7.80708 10.7331 7.9103 10.7434C7.96189 10.7486 8.00189 10.7525 8.02858 10.755L8.0584 10.7578L8.06686 10.7585L8.96578 11.8603L8.96537 11.8658L8.96296 11.8884C8.96079 11.909 8.95758 11.9404 8.95366 11.9813C8.9458 12.0632 8.93516 12.1826 8.92441 12.3287C8.9028 12.6224 8.88136 13.0163 8.88048 13.4263C8.87958 13.8425 8.90011 14.2437 8.95265 14.563C8.9897 14.7881 9.03099 14.8963 9.04531 14.9338C9.04927 14.9442 9.05033 14.9497 9.05033 14.9497C9.05033 14.9497 9.05582 14.9507 9.06621 14.9547C9.10371 14.969 9.2119 15.0103 9.43702 15.0474C9.75627 15.0999 10.1575 15.1204 10.5737 15.1195C10.9837 15.1186 11.3777 15.0972 11.6714 15.0756L12.1391 15.0341L13.2414 15.933L13.3036 16.5241C13.3457 16.8888 13.4087 17.379 13.4924 17.8874C13.5354 18.1488 13.583 18.4092 13.6347 18.6561L13.6823 18.594C14.3005 17.7838 14.9209 16.8339 15.1815 16.0565C15.6025 14.8007 15.595 14.0116 15.5619 13.6796C15.5303 13.3637 15.5182 12.8392 15.8112 12.3448C16.0847 11.8834 16.4999 11.3206 16.9197 10.7515C16.9981 10.6452 17.0767 10.5386 17.1546 10.4325C17.6715 9.72798 18.1978 8.98784 18.6146 8.25143C19.0376 7.50416 19.3005 6.84067 19.3612 6.28939C19.4167 5.78487 19.2804 5.38079 18.9498 5.05019L20.364 3.63597C21.1928 4.46477 21.4544 5.50334 21.3449 6.4991C21.2405 7.4481 20.8244 8.39124 20.3504 9.22877C19.8702 10.0772 19.2817 10.9 18.762 11.6084C18.674 11.7284 18.5889 11.8439 18.5069 11.9552C18.0946 12.5148 17.7615 12.9669 17.5439 13.3284C17.5413 13.3535 17.5403 13.3991 17.5477 13.4727C17.6103 14.0997 17.58 15.1726 17.0735 16.6835C16.7017 17.7925 15.9064 18.9623 15.2669 19.8003C14.9374 20.2322 14.6293 20.6014 14.4034 20.8629C14.2902 20.9939 14.1971 21.0986 14.1314 21.1714C14.0985 21.2078 14.0725 21.2363 14.0543 21.2561L14.0267 21.286L14.0239 21.289C13.8388 21.4871 13.5813 21.6021 13.3108 21.6073C13.0403 21.6124 12.7798 21.5076 12.5889 21.3167C12.3731 21.1009 12.2313 20.8327 12.1361 20.6177C12.0339 20.3868 11.9481 20.1296 11.8751 19.8725C11.729 19.3576 11.6128 18.7648 11.5231 18.2197C11.4566 17.8154 11.4027 17.425 11.3611 17.0937C11.1199 17.1058 10.8496 17.1146 10.5694 17.1152C10.1037 17.1162 9.57892 17.0947 9.10468 17.0166C8.69213 16.9487 8.05261 16.7804 7.63611 16.3639C7.21962 15.9474 7.05129 15.3079 6.9834 14.8953C6.90535 14.4211 6.88378 13.8964 6.88478 13.4306C6.88539 13.1504 6.89426 12.8801 6.90635 12.6389C6.57502 12.5974 6.18466 12.5434 5.78029 12.4769C5.23522 12.3872 4.64237 12.271 4.12751 12.1249C3.8704 12.0519 3.61317 11.9661 3.38231 11.8639C3.16733 11.7687 2.89915 11.6269 2.68332 11.4111C2.49244 11.2202 2.38758 10.9597 2.39276 10.6892C2.39794 10.4187 2.51272 10.1614 2.71081 9.97631L2.71401 9.97332L2.72063 9.96718L2.74387 9.94573C2.76373 9.92748 2.79221 9.90147 2.82863 9.86862C2.90143 9.80296 3.00612 9.70979 3.13714 9.59661C3.39866 9.37069 3.76781 9.06262 4.19969 8.73309C5.03769 8.09367 6.20752 7.29836 7.31652 6.92656C8.8274 6.42004 9.90036 6.3897 10.5273 6.45233C10.6009 6.45968 10.6465 6.45871 10.6716 6.45614C11.0331 6.23853 11.4852 5.90543 12.0448 5.49314C12.1561 5.41114 12.2716 5.32601 12.3916 5.23804C13.1 4.71833 13.9228 4.12982 14.7712 3.64963C15.6088 3.1756 16.5519 2.75948 17.5009 2.65511Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15.4143 8.58572C15.8048 8.97624 16.438 8.97624 16.8285 8.58572C17.219 8.1952 17.219 7.56203 16.8285 7.17151C16.438 6.78098 15.8048 6.78098 15.4143 7.17151C15.0238 7.56203 15.0238 8.1952 15.4143 8.58572Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Power - Ups</p>
              </div>
              <p className="text-xl leading-normal font-normal">
                Add features to your boards and integrate your favorite apps
                right into Trello. Here are the Power-Ups enabled on this
                template:
              </p>
            </div>
            <div className="w-full pb-6">
              <div className="text-2xl leading-normal font-semibold flex items-center gap-4">
                <img src={drive} alt="" className="w-6" />
                <p>Google Drive</p>
              </div>
              <p className="text-xl leading-normal font-normal w-100">
                Add features to your boards and integrate your favorite apps
                right into Trello. Here are the Power-Ups enabled on this
                template:
              </p>
            </div>

            <RelatedTemplates />
          </div>
        </div>
      </main>

      <div className="flex items-center justify-center pt-6 pb-6">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border-2 border-[#091e4224] rounded p-2 text-xl font-medium leading-normal bg-white text-[#172b4d] focus:outline-none focus:ring-2 focus:ring-[#4b83f0] cursor-pointer"
        >
          <option value="English">English</option>
          <option value="Português">Português</option>
          <option value="Français">Français</option>
        </select>
      </div>
      <AtlassianFooter />
    </>
  );
};

export default NewHireOnBoarding;
