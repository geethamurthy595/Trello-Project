import React from "react";
import { FaRegStar } from "react-icons/fa";
import NavBar from "../../../../NavBar";
import { Link } from "react-router-dom";
import a170 from "../../../../../assets/170.png";
import Courosel from "./Template";
import Template from "./Template";
import img from "../../../../../assets/imgi_13_photo-1486520299386-6d106b22014b.jpg";
import img1 from "../../../../../assets/imgi_15_Indeed_BG_Blue.jpeg";
import img2 from "../../../../../assets/imgi_17_photo-1489392191049-fc10c97e64b6.jpg";
import small from "../../../../../assets/small2.png";

const OB306090 = () => {
  let card = [
    {
      image: img,
      h1: "Onboarding Process for new Hires",
      p: "by invision",
      p1: "Ensure that every new hire has a meaningful onboarding experience.",
      img: (
        <svg
          width="24"
          height="24"
          role="presentation"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 16V4.99188C5 3.8918 5.90195 3 7.00853 3H14.9915L15 3.00002V5H7V16H5ZM8 19C8 20.1046 8.89543 21 10 21H18C19.1046 21 20 20.1046 20 19V8C20 6.89543 19.1046 6 18 6H10C8.89543 6 8 6.89543 8 8V19ZM10 8V19H18V8H10Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      img1: (
        <svg
          width="24"
          height="24"
          role="presentation"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0006 18C7.46367 18 4.00142 13.74 4.00142 12C4.00142 9.999 7.45967 6 12.0006 6C16.3775 6 19.9988 9.973 19.9988 12C19.9988 13.74 16.5366 18 12.0006 18ZM12.0006 4C6.48003 4 2.00012 8.841 2.00012 12C2.00012 15.086 6.5771 20 12.0006 20C17.4241 20 22.0001 15.086 22.0001 12C22.0001 8.841 17.5212 4 12.0006 4ZM11.9775 13.9844C10.8745 13.9844 9.97752 13.0874 9.97752 11.9844C9.97752 10.8814 10.8745 9.9844 11.9775 9.9844C13.0805 9.9844 13.9775 10.8814 13.9775 11.9844C13.9775 13.0874 13.0805 13.9844 11.9775 13.9844ZM11.9775 7.9844C9.77152 7.9844 7.97752 9.7784 7.97752 11.9844C7.97752 14.1904 9.77152 15.9844 11.9775 15.9844C14.1835 15.9844 15.9775 14.1904 15.9775 11.9844C15.9775 9.7784 14.1835 7.9844 11.9775 7.9844Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      image: img1,
      h1: "Post a job [Hiring Process]",
      p: "by Indeed",
      p1: "Keep your Indeed job postings organized and hire the best candidates",
      img: (
        <svg
          width="24"
          height="24"
          role="presentation"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 16V4.99188C5 3.8918 5.90195 3 7.00853 3H14.9915L15 3.00002V5H7V16H5ZM8 19C8 20.1046 8.89543 21 10 21H18C19.1046 21 20 20.1046 20 19V8C20 6.89543 19.1046 6 18 6H10C8.89543 6 8 6.89543 8 8V19ZM10 8V19H18V8H10Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      img1: (
        <svg
          width="24"
          height="24"
          role="presentation"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0006 18C7.46367 18 4.00142 13.74 4.00142 12C4.00142 9.999 7.45967 6 12.0006 6C16.3775 6 19.9988 9.973 19.9988 12C19.9988 13.74 16.5366 18 12.0006 18ZM12.0006 4C6.48003 4 2.00012 8.841 2.00012 12C2.00012 15.086 6.5771 20 12.0006 20C17.4241 20 22.0001 15.086 22.0001 12C22.0001 8.841 17.5212 4 12.0006 4ZM11.9775 13.9844C10.8745 13.9844 9.97752 13.0874 9.97752 11.9844C9.97752 10.8814 10.8745 9.9844 11.9775 9.9844C13.0805 9.9844 13.9775 10.8814 13.9775 11.9844C13.9775 13.0874 13.0805 13.9844 11.9775 13.9844ZM11.9775 7.9844C9.77152 7.9844 7.97752 9.7784 7.97752 11.9844C7.97752 14.1904 9.77152 15.9844 11.9775 15.9844C14.1835 15.9844 15.9775 14.1904 15.9775 11.9844C15.9775 9.7784 14.1835 7.9844 11.9775 7.9844Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      image: img2,
      h1: "Job Hunt",
      p: "by Daniel Acampado,Recruiter @ Splash",
      p1: "Track your applications and the stage you're at with each company...",
      img: (
        <svg
          width="24"
          height="24"
          role="presentation"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 16V4.99188C5 3.8918 5.90195 3 7.00853 3H14.9915L15 3.00002V5H7V16H5ZM8 19C8 20.1046 8.89543 21 10 21H18C19.1046 21 20 20.1046 20 19V8C20 6.89543 19.1046 6 18 6H10C8.89543 6 8 6.89543 8 8V19ZM10 8V19H18V8H10Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      img1: (
        <svg
          width="24"
          height="24"
          role="presentation"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0006 18C7.46367 18 4.00142 13.74 4.00142 12C4.00142 9.999 7.45967 6 12.0006 6C16.3775 6 19.9988 9.973 19.9988 12C19.9988 13.74 16.5366 18 12.0006 18ZM12.0006 4C6.48003 4 2.00012 8.841 2.00012 12C2.00012 15.086 6.5771 20 12.0006 20C17.4241 20 22.0001 15.086 22.0001 12C22.0001 8.841 17.5212 4 12.0006 4ZM11.9775 13.9844C10.8745 13.9844 9.97752 13.0874 9.97752 11.9844C9.97752 10.8814 10.8745 9.9844 11.9775 9.9844C13.0805 9.9844 13.9775 10.8814 13.9775 11.9844C13.9775 13.0874 13.0805 13.9844 11.9775 13.9844ZM11.9775 7.9844C9.77152 7.9844 7.97752 9.7784 7.97752 11.9844C7.97752 14.1904 9.77152 15.9844 11.9775 15.9844C14.1835 15.9844 15.9775 14.1904 15.9775 11.9844C15.9775 9.7784 14.1835 7.9844 11.9775 7.9844Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
  ];
  return (
    <>
      <NavBar />
      <div className="pt-18 flex">
        <section>
          <div className="w-full min-h-screen text-left sticky top-0">
            <div className="text-[10px] w-full rounded sticky top-0">
              <nav className="pr-6 sticky top-[100px] pl-[120px]">
                <input
                  className="w-2/3 mb-4 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none"
                  type="text"
                  placeholder="Find template"
                />
                <ul className="space-y-1">
                  <li className="w-40 py-1 px-4 pl-8 text-blue-700 text-lg font-normal leading-normal hover:bg-gray-400 font-semibold bg-blue-50 rounded cursor-pointer flex items-center">
                    <FaRegStar className="mr-2" />
                    Featured
                  </li>
                  <li className="w-40 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Business
                  </li>
                  <li className="w-40 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Design
                  </li>
                  <li className="w-40 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Education
                  </li>
                  <li className="w-40 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Engineering
                  </li>
                  <li className="w-40 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Marketing
                  </li>
                  <li className="w-50 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    HR & Operations
                  </li>
                  <li className="w-40 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Personal
                  </li>
                  <li className="w-40 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Productivity
                  </li>
                  <li className="w-60 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Product management
                  </li>
                  <li className="w-60 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Project management
                  </li>
                  <li className="w-50 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Remote work
                  </li>
                  <li className="w-40 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Sales
                  </li>
                  <li className="w-40 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Support
                  </li>
                  <li className="w-60 py-1 px-8 text-gray-700 text-lg font-normal leading-normal hover:bg-gray-400 rounded cursor-pointer">
                    Team management
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        <section>
          <div className="pl-[30px] w-[850px]">
            <Link to="com/templates">Template gallery</Link> /{" "}
            <Link to="/templates/operations-hr">HR & Operations</Link> /{" "}
            <Link>30 60 90 Day Plan Template</Link> <br />
            <br />
            <div className="flex gap-4">
              <img src={a170} alt="" className="h-[80px] w-[80px]" />
              <div>
                <h1 className="text-3xl font-bold">
                  30 60 90 Day Plan Template
                </h1>
                <p>Created by Atlassian</p>
                <div className="flex gap-1 text-xs">
                  <svg
                    className="h-5 w-5"
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 16V4.99188C5 3.8918 5.90195 3 7.00853 3H14.9915L15 3.00002V5H7V16H5ZM8 19C8 20.1046 8.89543 21 10 21H18C19.1046 21 20 20.1046 20 19V8C20 6.89543 19.1046 6 18 6H10C8.89543 6 8 6.89543 8 8V19ZM10 8V19H18V8H10Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>23.2K Copies </span>
                  <svg
                    className="h-5 w-5"
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0006 18C7.46367 18 4.00142 13.74 4.00142 12C4.00142 9.999 7.45967 6 12.0006 6C16.3775 6 19.9988 9.973 19.9988 12C19.9988 13.74 16.5366 18 12.0006 18ZM12.0006 4C6.48003 4 2.00012 8.841 2.00012 12C2.00012 15.086 6.5771 20 12.0006 20C17.4241 20 22.0001 15.086 22.0001 12C22.0001 8.841 17.5212 4 12.0006 4ZM11.9775 13.9844C10.8745 13.9844 9.97752 13.0874 9.97752 11.9844C9.97752 10.8814 10.8745 9.9844 11.9775 9.9844C13.0805 9.9844 13.9775 10.8814 13.9775 11.9844C13.9775 13.0874 13.0805 13.9844 11.9775 13.9844ZM11.9775 7.9844C9.77152 7.9844 7.97752 9.7784 7.97752 11.9844C7.97752 14.1904 9.77152 15.9844 11.9775 15.9844C14.1835 15.9844 15.9775 14.1904 15.9775 11.9844C15.9775 9.7784 14.1835 7.9844 11.9775 7.9844Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>113.3K Views</span>
                </div>
              </div>
              <div className="flex gap-5 pl-32  ">
                <button className="px-3  py-1.5 rounded-[5px]">Share</button>
                <button className="px-3 py-1.5 rounded-[5px]">
                  Use template
                </button>
              </div>
            </div>
            <br />
            <h1 className="text-2xl font-bold">About this template</h1>
            <p className="text-xl font-bold leading-loose">
              How To Use This Board
            </p>
            <p className="text-sm">
              -Take your time reading through the cards and completing the
              tasks. Don't stress that you need to work through each card <br />{" "}
              in your first day or first week, it's ok to take the full 90 days.
            </p>
            <p className="text-sm">
              -Once you've completed a card, drag it to the far right 'Done'
              column to clear up some space. You can also use Trello's colored
              labels (top right of each card) to track your progress and
              questions.
            </p>
            <p className="text-sm">
              Use the labels (or create others) to highlight your board's cards.
            </p>
            <hr class="my-6 h-px bg-current opacity-20 border-0 " />
            <p className="text-sm">
              There are three main uses for a 90-day plan:
            </p>
            <p className="text-sm">
              -Help you (or your new hire) settle into the role <br />
              -Grow company knowledge and understanding <br />
              -Empower you with the tools, information, and resources you need
              to get up to speed quickly
            </p>
          </div>{" "}
          <br />
          <div className="w-[900px] flex h-[500px] ml-4 overflow-hidden relative">
            <div className="h-full  overflow-hidden">
              <Template preview={true} />
            </div>
          </div>
          <Link
            to="/b/a597dVjV"
            className="underline text-[rgb(0,82,204)] p-8 mt-8 ml-[750px]"
          >
            view Templates
          </Link>
          <br />
          <br />
          <div className="border-1 border-black h-[400px] w-[900px] ml-4 bg-[#35243F] flex p-14 text-white">
            {card.map((item) => (
              <div>
                <Link>
                  <img
                    src={item.image}
                    alt=""
                    className="border-1 border-black h-[150px] 2-[200px]"
                  />
                  <h1 className="text-xl font-bold">{item.h1}</h1>
                  <p className="text-sm">{item.p}</p>
                  <p className="text-sm">{item.p1}</p>
                  <img src={item.img} alt="" />
                  <img src={item.img1} alt="" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="pt-5  flex justify-center ">
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
          <img src={small} alt="" width={170} />
          <p className="text-xs font-medium  text-gray-700 pt-1  pl-3">
            {" "}
            © Copyright 2025. All rights reserved.
          </p>
        </div>
      </footer>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default OB306090;
