import React from 'react';
import NavBar from '../../../../NavBar';
import { FaRegStar } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { IoEyeOutline, IoSearchSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";    // COMMENTED: Routing
import onboardinglogo from "../../../../../assets/onboardinglogo.png";
import robot from "../../../../../assets/robot.png";
import powerup from "../../../../../assets/powerups.svg";
import onboardingindeed from "../../../../../assets/onboardingindeed.png";
import onboarding1 from "../../../../../assets/onboardingone.png";
// import onboardingindeedbgs from "../../../../../assets/indeedbg.png";
import onboardingindeedbgs from "../../../../../assets/indeedbg.png"
// import onboarding1 from "../assets/onboarding1.png";
import onboardingbg from "../../../../../assets/New.jpg";
// import onboardingforest from "../../../../../assets/onboardingforest.jpg";
import onboardingforest from "../../../../../assets/onboardingforests.jpg"
import onboardingperson from "../../../../../assets/onboardingperson.png";
import onboardingsky from "../../../../../assets/bluesky.jpg";
import onboardingiconsky from "../../../../../assets/onboardingiconsky.png";
import onboardingSlack from "../../../../../assets/slack.svg";
import AtlassianFooter from "../../../taskManagement/AtlassianFooter";
// import OnboardingNewHireTemplate from './OnboardingNewhiringtemplete';
import OnboardingNewhiringtemplete from './OnboardingNewhiringtemplete.jsx';

import { Link } from 'react-router-dom';

const OnBoardingNewHire = () => {
  const flexData = [
    {
      img: onboardingSlack,
      title: 'Slack',
      cont: 'Connect your communication and collaboration apps so that no ideas or tasks fall through the cracks.',
    },
    {
      img: onboardingbg,
      title: 'InVision',
      cont: 'Bring Your Designs to Life',
    },
    {
      img: onboarding1,
      title: 'Card Numbers by Reenhanced',
      cont: "Expose Trello's internal card numbering on every card",
    },
  ];

  const relData = [
    {
      img: onboardingindeedbgs,
      icon: onboardingindeed,
      title: 'Post A Job [Hiring Process]',
      desc: 'by Indeed',
      cont: 'Keep your Indeed job postings organized and hire the best candidates possible.',
      copy: '6.2K',
      views: '30.7K',
    },
    {
      img: onboardingforest,
      icon: onboardingperson,
      title: 'Job Hunt',
      desc: 'by Daniel Acampado, Recruiter @ Splash',
      cont: "Track your applications and the stage you're at with each company you've applied to!",
      copy: '9.5K',
      views: '24.6K',
    },
    {
      img: onboardingsky,
      icon: onboardingiconsky,
      title: 'Sales Pipeline',
      desc: 'by Scan2CAD',
      cont: 'Gauge the wellbeing of your team on a consistent basis with retrospective and ideation sessions.',
      copy: '2.2K',
      views: '14.6K',
    },
  ];

  return (
    <>
      <NavBar />
      <div className="w-full max-w-7xl mx-auto mt-8 flex flex-col md:flex-row gap-8 px-2">
        {/* Sidebar */}
        <aside className="w-full md:w-1/3 lg:w-1/4 bg-white sticky top-10 h-max md:h-screen rounded-md shadow-sm p-2">
          <div className="flex items-center border border-gray-200 rounded py-1 text-gray-800 px-3 w-full mb-3">
            <input
              className="w-full text-sm outline-none"
              type="text"
              name="findPowerUP"
              placeholder="Find template"
            />
            <IoSearchSharp className="text-xl text-gray-600" />
          </div>

          <div className="flex items-center gap-2 p-2 rounded mb-2 cursor-pointer">
            <FaRegStar className="text-xl" />
            <p className="w-full font-semibold text-[15px] m-0 p-0">Featured</p>
          </div>

          {/* Category List */}
          <div className="flex flex-col">
            {[
              'Business',
              'Design',
              'Education',
              'Engineering',
              'Marketing',
              'HR & operations',
              'Personal',
              'Productivity',
              'Product management',
              'Project management',
              'Remote Work',
              'Sales',
              'Support',
              'Team management',
            ].map((cat, idx) => (
              <div
                key={cat}
                className={`flex items-center gap-2 py-1 pl-6 hover:bg-gray-200 rounded mb-1 cursor-pointer
                  ${
                    cat === 'HR & operations'
                      ? 'text-gray-700 bg-blue-100 font-semibold'
                      : 'font-normal'
                  }
                `}
              >
                <p className="w-full text-[15px]">{cat}</p>
              </div>
            ))}
          </div>
        </aside>

        <main className="w-full md:w-2/3 lg:w-3/4">
          <div className="w-full max-w-3xl">
            <h1 className="flex gap-2 text-[15px] flex-wrap">
              <span className="hover:underline cursor-pointer">Template gallery</span> /
              <span className="hover:underline cursor-pointer">HR & Operations</span> /
              <span className="hover:underline cursor-pointer">Onboarding Process For New Hires</span>
            </h1>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white pt-6 gap-3">
              <div className="flex gap-6 justify-start items-center">
                <img src={onboardinglogo} alt="" className="h-[60px] w-[60px]" />
                <div>
                  <h2 className="text-[20px] md:text-[24px] text-gray-900 font-semibold">Onboarding Process For New Hires</h2>
                  <p className="text-sm">Created by InVision</p>
                  <div className="flex items-center gap-2 text-gray-700/86 font-semibold text-sm">
                    <span className="flex items-center gap-1">
                      <MdContentCopy /> 11.7K Copies
                    </span>
                    <span className="flex items-center gap-1">
                      <IoEyeOutline /> 76.7K Views
                    </span>
                  </div>
                  {/* Premium */}
                  <div className="flex text-[12px] gap-1 text-black/60 mt-1">
                    <img
                      src={robot}
                      alt="robot"
                      className="h-[16px] w-[16px] gap-1 invert-[0.5] sepia-[1] saturate-[5] hue-rotate-[300deg] brightness-[1.1] contrast-[1.2]"
                    />
                    <span>Works best with </span>
                    {/* <Link to="/premium" className="text-blue-500 underline cursor-pointer">Premium</Link> */}
                  </div>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex gap-3">
                <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-gray-200">
                  Share
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-blue-700">
                  Use template
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-[20px] text-black/86 font-semibold">About this template</h1>
            <p className="mt-2 text-[15px] tracking-wide text-black/87">
              At InVision, we take care to ensure that every new hire has a meaningful onboarding experience.
            </p>
            <p className="mt-2 text-[15px] tracking-wide text-black/87">
              This board helps us keep track of our tasks to welcome and enroll new InVisioners in our company-wide onboarding process program, Xenia. It captures everything from tool setup to personalized emails, and makes it easy for us to quickly move through our process without missing anything.
            </p>
            <p className="mt-2 text-[15px] tracking-wide text-black/87">
              New hires move from left to right and everybody on the recruiting team gets simple visibility into where people are in the process. The setup of this board also gives you a good bird's eye view and helps indicate if and where bottlenecks in the process may be building.
            </p>
            <p className="mt-2 text-[15px] tracking-wide text-black/87">
              The "The Card Numbers by Reenhanced Power-Up" gives every card a unique number so we can easily reference the card more easily in conversation. The card numbers are also displayed as a badge on the front of the card which helps at a glance!
            </p>
            <p className="mt-2 text-[15px] tracking-wide text-black/87">
              Connecting to our team Slack channel ensures nothing falls through the cracks.
            </p>
          </div>

          <div className="mt-7 mb-28 overflow-auto">
            <OnboardingNewhiringtemplete shownav="true" />
          </div>

          <div className="mt-6">
            <h1 className="flex gap-2 items-center font-semibold text-[20px]">
              <img src={powerup} alt="" className="h-[24px] w-[24px]" />
              <p>Power-Ups</p>
            </h1>
            <p className="mt-2 text-[17px] tracking-wide text-black/80">
              Add features to your boards and integrate your favorite apps right into Trello.
              This template works best with
              <Link to="/premium" className="underline text-blue-500">Premium</Link>
              <span className="underline text-blue-500">Premium</span> {/* as text instead of routed link */}
              which allows you to use unlimited Power-Ups
            </p>

            <div className="flex flex-wrap gap-2 w-full">
              {flexData.map((obj, idx) => {
                let { img, title, cont } = obj;
                return (
                  <div key={idx} className="flex flex-col gap-1 w-full sm:w-1/2 md:w-1/3 lg:w-[264px] mt-6">
                    <div className="flex gap-2">
                      <img src={img} alt="" className="h-[32px] w-[32px]" />
                      <h1 className="font-semibold text-[17px]">{title}</h1>
                    </div>
                    <p className="text-black/80">{cont}</p>
                  </div>
                );
              })}
            </div>
            {/* <Link to="/premium" className="flex items-center gap-2 bg-[#803FA5] mt-10 w-50 p-2 rounded-sm">
              <div className="bg-white p-1">
                <img src={robot} alt="" className="h-[16px] w-[16px] gap-1 invert-[0.5] sepia-[1] saturate-[5] hue-rotate-[300deg] brightness-[1.1] contrast-[1.2]" />
              </div>
              <p className="text-white">Upgrade to Premium</p>
            </Link> */}
            <div className="flex items-center gap-2 bg-[#803FA5] mt-10 w-[200px] p-2 rounded-sm">
              <div className="bg-white p-1">
                <img src={robot} alt="" className="h-[16px] w-[16px] gap-1 invert-[0.5] sepia-[1] saturate-[5] hue-rotate-[300deg] brightness-[1.1] contrast-[1.2]" />
              </div>
              <p className="text-white">Upgrade to Premium</p>
            </div>
          </div>
          <div className="p-5 text-white  bg-[linear-gradient(124.69deg,#4A2A57_10%,#5C2D40_70%)] mt-6">
            <h1 className="font-semibold text-xl">Related templates</h1>
            <div className="flex flex-wrap gap-y-6 gap-x-3 mt-3">
              {relData.map((obj, idx) => {
                let { img, icon, title, desc, cont, copy, views } = obj;
                return (
                  <div key={idx} className="flex flex-col gap-1 w-full sm:w-80 md:w-72">
                    <div className="relative">
                      <img src={img} alt="" className="h-[132px] w-full object-cover rounded-lg" />
                      <div className="bg-white p-[4px] ml-2 flex flex-start rounded-sm h-[48px] w-[48px] -mt-9 shadow-md relative z-[3]">
                        <img src={icon} alt="" className="h-[45px] w-[45px]" />
                      </div>
                    </div>
                    <h1 className="font-semibold text-[16px] px-2">{title}</h1>
                    <p className="text-[13px] px-2">{desc}</p>
                    <p className="text-[13px] px-2 w-full">{cont}</p>
                    <div className="flex px-2 text-[13px] items-center gap-2 text-gray-700/86 font-semibold text-sm">
                      <span className="flex items-center gap-1">
                        <MdContentCopy /> {copy}
                      </span>
                      <span className="flex items-center gap-1">
                        <IoEyeOutline /> {views}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
      <div className="border-b border-gray-300 mt-10 w-[90%] mx-auto"></div>
      <div className="flex justify-center items-center mt-8">
        <select className="border border-gray-400 rounded-md px-3 py-2 text-sm w-[110px] focus:outline-none focus:ring-1 focus:ring-blue-500" defaultValue="English">
          <option>English</option>
          <option>Portugues</option>
          <option>Francais</option>
        </select>
      </div>
       <AtlassianFooter />
    </>
  );
};

export default OnBoardingNewHire;
