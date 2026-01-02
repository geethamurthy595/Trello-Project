import React, { useState } from 'react'
import teamMeeting from '../../../../assets/Trello_TeamMeetings_Hero.svg';
import img1 from '../../../../assets/CarouselImage_Deadlines_2x.webp';
import img2 from '../../../../assets/CarouselImage_ClearActions_2x.webp';
import img3 from '../../../../assets/CarouselImage_Automation_2x.webp';
import logoshorizontal from "../../../../assets/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg";
import { Link } from 'react-router-dom';
import NavBar from '../../../NavBar';
import MeetingTempletCards from './MeetingTempletCards';
import UniversalFooter from '../../../UniversalFooter';
import MeetingTCarousel from './MeetingTCarousel';
import MeetingGuidenceGrid from './MeetingGuidenceGrid';

const Meetings = () => {
  let [bgimg, setBgimg] = useState(img1);
  let [boxshadow, setBoxshadow] = useState("boxshadow");
  let [b1, setB1] = useState(true);
  let [b2, setB2] = useState(false);
  let [b3, setB3] = useState(false);

  let handleImage1 = () => {
    setBgimg(img1);
    setB1(true);
    setB2(false);
    setB3(false);
  };
  let handleImage2 = () => {
    setBgimg(img2);
    setB2(true);
    setB1(false);
    setB3(false);
  };
  let handleImage3 = () => {
    setBgimg(img3);
    setB3(true);
    setB1(false);
    setB2(false);
  };
  return (
    <>
      <section>
        <NavBar />
        <section className="px-30 py-10 flex items-center justify-evenly  bg-gradient-to-b from-[#FFFDFE] to-[#FFF2FB]">
          <div className="md:w-1/2 space-y-6 md:text-left">
            <h1 className="text-6xl md:text-5xl font-bold leading-tight w-150 text-slate-800">
              <br />
              <br />
              Meetings should save time, not waste it—Trello can help
            </h1>
            <p className="text-gray-600 text-lg text-[22px] font-normal">
              It’s time to create a zero-tolerance policy for meetings <br /> that interrupt work instead of moving it forward.
            </p>
            <input
              type="email"
              placeholder="Email"
              className="w-[300px] px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/signUp" className="px-6 py-3 bg-blue-600 text-white rounded-md my-3 hover:bg-blue-700 transition">
              Sign up – it’s free!
            </Link>
          </div>
          <img src={teamMeeting} width={600} alt="" />
        </section>

        <div className='flex items-center justify-center h-70'>
          <div className='w-220 text-center'>
            <h1 className='text-3xl pb-3 font-medium'>Get ready for team time that’s enjoyable and actionable</h1>
            <p className='text-xl'>Meetings should be productive, but done right, they can also boost team morale. Trello creates shared focus and transparency so you can focus on planning for action, getting work done, and celebrating successes.</p>
          </div>
        </div>

        <div>
          <div className="flex items-start justify-center relative px-50 py-20">
            <div className="flex  gap-1 absolute  right-50 top-10 ">
              <p
                className={`${b1 ? "w-18 bg-gray-500 " : "w-2 bg-black rounded-full"
                  } h-2 rounded transition-all cursor-pointer `}
                onClick={handleImage1}
              ></p>
              <p
                className={`${b2 ? "w-18 bg-gray-500 " : "w-2 bg-black rounded-full"
                  } h-2  rounded transition-all cursor-pointer`}
                onClick={handleImage2}
              ></p>
              <p
                className={`${b3 ? "w-18 bg-gray-500 " : "w-2 bg-black rounded-full"
                  } h-2 rounded transition-all cursor-pointer`}
                onClick={handleImage3}
              ></p>
            </div>

            <div className="w-1/3 pr-10 cursor-pointer">

              <div
                className={`flex  relative mb-8 pr-4 rounded-md ${b1 ? boxshadow : ""
                  } transition-all`}
                onClick={handleImage1}
              >
                <div
                  className={`w-7   top-0 rounded-l bg-[#F99CDB] mr-3 ${b1 ? "block" : "hidden"
                    } transition-all`}
                ></div>
                <div className="mx-2 my-4">
                  <h2 className=" font-semibold">Set clear action items</h2>
                  <p className={` mt-2 `}>
                    Translate to-do items into Trello cards with clear ownership and due dates. Use advanced checklists to break big tasks into manageable pieces.
                  </p>
                </div>
              </div>
              <div
                className={`flex  relative mb-8 pr-4 rounded-md ${b2 ? boxshadow : ""
                  } transition-all `}
                onClick={handleImage2}
              >
                <div
                  className={`w-7    top-0 rounded-l bg-[#F99CDB] mr-4 ${b2 ? "block" : "hidden"
                    } transition-all`}
                ></div>
                <div className="mx-2 my-4">
                  <h2 className="font-semibold">Save valuable time</h2>
                  <p className={`mt-2 `}>
                    Automate recurring tasks such as creating weekly agendas, designating a meeting host, establishing deadlines, and sending reminders.
                  </p>
                </div>
              </div>

              <div
                className={`flex relative mb-8 pr-4 rounded-md ${b3 ? boxshadow : ""
                  } transition-all`}
                onClick={handleImage3}
              >
                <div
                  className={`w-7  top-0 rounded-l bg-[#F99CDB] mr-4 ${b3 ? "block" : "hidden"
                    } transition-all`}
                ></div>
                <div className="mx-2 my-4">
                  <h2 className="font-semibold">Never miss a deadline</h2>
                  <p className={`mt-2 `}>
                    Trello’s familiar system of boards, cards, and colorful labels makes it easy to see what’s being done, who’s working on it, and when it’s due.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mx-px float-right"></div>
            </div>

            <div
              className="w-[800px] h-[500px] shadow bg-cover"
              style={{ backgroundImage: `url(${bgimg})` }}
            >
            </div>
          </div>
        </div>
        <div className='flex  px-45 justify-between items-center  bg-gradient-to-l from-[#FFF2FB] to-[#FFFFFF] py-15'>
          <img src={teamMeeting} width={700} alt="" />
          <div className='w-90'>
            <h1 className='font-semibold text-4xl pb-3 '>See a team meeting template in action</h1>
            <p className='text-[22px] pb-5 '>Supercharge your weekly team meetings and reignite your team’s excitement to connect—whether they’re working from home, the office, or somewhere in-between.</p>
            <Link className='text-blue-600 underline text-xl' to="#">Try the meetings template</Link>
          </div>
        </div>


        <div className="w-full pl-50 pt-15 pb-16">
          <h2 className="text-4xl font-medium leading-normal text-[#091e42]">
            Don’t start from scratch
          </h2>
          <p className="text-2xl text-[#091e42] font-normal leading-normal w-200">
            From 1:1s to retrospectives, Trello has a team meeting template for every sync-up or sidebar.
          </p>
        </div>
        <MeetingTempletCards />
        <div className="w-full p-20 pl-50">
          <div className="flex justify-between">
            <p className="text-xl font-normal text-[#091e42] leading-relaxed w-150">
              Want to see what else Trello can do? We have templates for
              everything from meetings to project management.
            </p>
            <Link
              to="/templates"
              className="
            inline-flex items-center justify-center
            rounded-md
            cursor-pointer
            text-center
            transition-all duration-300 ease-out
            bg-white
            border border-blue-700
            text-[#172b4d]
            text-base
            px-7 py-4 
            hover:bg-blue-50
          "
            >
              View All Templates
            </Link>
          </div>
        </div>
        <MeetingTCarousel />
        <div className="w-full h-60">
          <div className="pt-6 flex justify-center items-center flex-col gap-6">
            <p className="text-2xl text-[#091e42] font-normal leading-normal">
              Join a community of millions of users globally who are using
              Trello to get more done.
            </p>
            <img src={logoshorizontal} alt="" />
          </div>
        </div>
        <div className="w-full h-200 bg-[#FFF2FB] text-[#091E42]">
          <div className="p-20 w-full h-100">
            <div className="flex flex-col justify-center items-center gap-4">
              <h2 className="text-4xl leading-tight font-medium">
                Expert meeting guidance from our team to yours
              </h2>
              <p className="text-2xl font-normal leading-normal">
                Read the Trello blog to find ways to improve efficiency, productivity, and collaboration.
              </p>
            </div>
            <div className="w-full">
              <MeetingGuidenceGrid />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#EC50B4] to-[#5544AA] text-white w-full h-70 flex items-center justify-center">
          <div className="w-200 h-70 flex flex-col items-center justify-center">
            <h2 className="text-4xl leading-tight font-medium ">
              Get started with Trello today
            </h2>
            <div className="flex gap-8 pt-8">
              <input
                type="email"
                name="email"
                id="email"
                className="text-lg text-[#172B4D] px-8 py-[0.7rem] border border-[#DFE1E6] rounded-[0.3rem] transition ease-out duration-200 bg-white pr-24 font-normal placeholder:text-[#7A869A]"
                placeholder="Email"
              />
              <button className="inline-flex items-center text-center text-xl px-4 py-[0.7rem] border border-[#0065FF] rounded-[0.3rem] bg-[#0065FF] text-white transition ease-out duration-200 cursor-pointer no-underline hover:bg-[#0747a6] hover:border-[#0747a6]">
                Sign up — it’s free!
              </button>
            </div>
          </div>
        </div>
        <UniversalFooter />
      </section>

    </>
  )
}

export default Meetings
