import React from "react";
import NavBar from "../../../NavBar";
import Health1 from "../../../../assets/Health1.webp";
import Health2 from "../../../../assets/Health2.webp";
import Health3 from "../../../../assets/Health3.webp";
import Health4 from "../../../../assets/Health4.webp";
import Health5 from "../../../../assets/Health5.webp";
import Health7 from "../../../../assets/Health7.png";
import Health8 from "../../../../assets/Health8.png";
import Health9 from "../../../../assets/ptc-card-image.svg";
import Health10 from "../../../../assets/Health9.svg";
import Health11 from "../../../../assets/Health11.svg";
import Health12 from "../../../../assets/Health12.svg";
import Health13 from "../../../../assets/Health13.svg";
import UniversalFooter from "../../../UniversalFooter";
import { Link } from "react-router-dom";

const Health = () => {
  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-b from-cyan-200 via-cyan-100  to-white-100  h-150 w-full flex items-center justify-center ">
        <img src={Health1} className="h-90 w-180 " alt="" />
      </div>
      <div className=" h-270 w-full items-center justify-center text-center ">
        {" "}
        <br />
        <h1 className="font-bold text-4xl text-blue-950">
          Trello for Health and Wellness
        </h1>
        <br />
        <p className=" text-blue-950 text-lg">
          Health and wellness coaches thrive when they can successfully help
          clients <br /> improve physical and mental well-being. Trello makes
          staying organized <br /> while balancing multiple clients no sweat.
        </p>
        <br />
        <Link to="/login" className="border-2 inline-flex items-center justify-center h-12 w-24 rounded bg-blue-600 text-white hover:bg-blue-950">
          Try it Free
        </Link>
        <br />
        <br />
        <br />
        <h1 className="font-bold text-3xl text-blue-950">
          Client management, scheduling, and to-do’s in <br /> one place
        </h1>
        <br />
        <img className="h-110 w-220 ml-80" src={Health2} alt="" />
        <br />
        <h1 className="text-4xl font-bold text-blue-950">
          More clients, more no problem
        </h1>
        <p className=" text-blue-950 text-lg mt-5">
          From building your own website to managing appointments, attracting
          (and <br /> retaining!) clients has never been easier with Trello
          helping you stay <br /> organized. Our powerful{" "}
          <Link to="/platforms" className="text-blue-700 underline" href="">
            mobile app
          </Link>{" "}
          lets you run your entire business and <br /> work with others, no
          matter where you are.
        </p>
      </div>
      <div className=" h-110 w-full flex items-center">
        <div className=" h-80 w-120 ml-45">
          <h1 className="font-bold text-3xl text-blue-950">
            Easy to use with the apps <br /> you love
          </h1>{" "}
          <br />
          <hr className="text-gray-300  w-100 border" />
          <p className=" text-blue-950 text-xl mt-5">
            Trello’s familiar system of boards, cards, and <br /> colorful
            labels make it easy to see at a glance <br /> what needs to be done.{" "}
            <Link to="/blog/trello/trello-email-solutions" className="text-blue-500 underline" href="">
              {" "}
              Forward emails to <br />
              your Trello board{" "}
            </Link>{" "}
            as tasks, and sync your <br /> calendar so that Trello deadlines
            show up <br /> alongside the rest of your schedule for the day.
          </p>
        </div>
        <img className="h-105 mt-10 ml-30" src={Health3} alt="" />
      </div>
      <br />
      <div className=" h-100 w-full flex items-center">
        <img className="h-100 ml-40" src={Health4} alt="" />
        <div className=" h-90 w-120 ml-35">
          <h1 className="font-bold text-3xl text-blue-950">
            Sometimes all you need is <br /> new perspective
          </h1>{" "}
          <br />
          <hr className="text-gray-300  w-100 border" />
          <p className=" text-blue-950 text-xl mt-5 leading-7">
            Toggle between{" "}
            <Link to="/views" className="text-blue-500 underline" href="">
              Trello’s Board, Timeline, Map, <br /> Calendar, and Dashboard
              views
            </Link>{" "}
            to display <br /> your task and projects in different formats.{" "}
            <br /> Running from appointment to appointment <br /> today? Trello
            displays your cards as addresses <br /> on a map. Toggle to Calendar
            view and see <br /> what’s ahead for the week, or check <br />{" "}
            Dashboard view for a quick report of tasks <br /> that have been
            completed this month.
          </p>
        </div>
      </div>

      <div className=" h-110 w-full flex items-center">
        <div className=" h-80 w-120 ml-45">
          <h1 className="font-bold text-3xl text-blue-950">
            Set-it-and-forget-it health <br /> management
          </h1>{" "}
          <br />
          <hr className="text-gray-300  w-100 border" />
          <p className=" text-blue-950 text-xl mt-5 leading-7">
            Trello{" "}
            <a className=" text-blue-500 underline" href="">
              {" "}
              automates
            </a>{" "}
            the time-consuming task of “managing work,” so you can focus on the{" "}
            <br /> important things. Tell Trello the action you’d <br /> like to
            take once a trigger (like a due date) has <br /> occurred, and let
            it handle the rest (like <br /> sending you an email reminder). It’s
            like having <br /> a personal assistant that can read your mind.
          </p>
        </div>
        <img className="h-90 mt-10 ml-30" src={Health5} alt="" />
      </div>
      <div className=" h-280  w-full bg-gradient-to-b from-blue-100 via-white to-white">
        <div className="ml-40 mt-22">
          {" "}
          <br />
          <br />
          <br />
          <h1 className="font-bold text-4xl text-blue-950">
            Keep the tools you love
          </h1>
          <br />
          <p className="text-lg">
            <a className="text-blue-500 underline " href="">
              Trello Power-Ups
            </a>
            &nbsp;connect your favorite apps directly to Trello for a single{" "}
            <br /> source of truth with zero additional effort. Want more niche
            features in <br /> Trello? You can add those too. With our gallery
            of 200+ Power-Ups, building a <br />
            bespoke organization system for your business is effortless.
          </p>
          <br />
          <div className="h-100  w-300 p-10 flex  ">
            {/* Card1 */}
            <Link to="/power-ups/57b47fb862d25a30298459b1/card-repeater" className="rounded w-[420px] h-[320px] ">
              <div className="shadow-div shadow-lg rounded-b-xl h-full">
                <a className="" href="">
                  <div className="color  rounded-t-xl bg-cyan-600 w-full h-[102px]"></div>
                  <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                    <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                      <img
                        className="h-[1.9rem] w-[2.4rem]"
                        src="https://images.ctfassets.net/rz1oowkt5gyp/35bOoHe2UUGzkYAUKdbbhr/d2a5980964af94c669b83ff0c09a1458/Card_repeater.png"
                        alt=""
                      />
                    </div>
                    <div className="para pt-[16px]">
                      <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                        Card Repeater
                      </h1>
                      <p className="text-gray-400">Automation</p>
                      <p className="text-[1rem] ">
                        {" "}
                        Automate the creation of Trello Cards <br /> for
                        recurring tasks,for one less thing to <br /> think
                        about.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </Link>
            {/* Card2 */}
            <Link to="/power-ups/55a5d916446f517774210006" className="rounded w-[420px] h-[320px] ml-18">
              <div className="shadow-div shadow-lg rounded-b-xl h-full">
                <a className="" href="">
                  <div className="color  rounded-t-xl bg-blue-600 w-full h-[102px]"></div>
                  <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                    <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                      <img
                        className="h-[1.9rem] w-[2.4rem]"
                        src="https://images.ctfassets.net/rz1oowkt5gyp/1XnqkMnroSmfmXwdDEZr0E/9407054a594184adecf746c4cf022294/Google_Drive-Logo_64x64.svg"
                        alt=""
                      />
                    </div>
                    <div className="para pt-[16px]">
                      <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                        Google Drive
                      </h1>
                      <p className="text-gray-400">File Management</p>
                      <p className="text-[1rem] ">
                        {" "}
                        Search Google Drive right from Trello <br /> and attach
                        relevant files directly to <br /> their corresponding
                        tasks for richer <br /> context.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </Link >{" "}
            <br />
            {/* card3 */}
            <Link to="/power-ups/6052d16c340ed23e9da083ed" className="rounded w-[420px] h-[320px] ml-18">
              <div className="shadow-div shadow-lg rounded-b-xl h-full">
                <a className="" href="">
                  <div className="color  rounded-t-xl bg-yellow-200 w-full h-[102px]"></div>
                  <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                    <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                      <img
                        className="h-[1.9rem] w-[2.4rem]"
                        src="https://images.ctfassets.net/rz1oowkt5gyp/7vEgz1rdghFHu4W6Zs1H4q/41410aa3ea72aef46c16c1e23f51382d/gmail-icon_1.svg"
                        alt=""
                      />
                    </div>
                    <div className="para pt-[16px]">
                      <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                        Gmail
                      </h1>
                      <p className="text-gray-400">
                        Communication and Collaboration
                      </p>
                      <p className="text-[1rem] ">
                        {" "}
                        Send your emails to Trello for easy task Management.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </Link >
          </div>
          <div className="h-100  w-300 -ml-8 flex">
            {/* Card4 */}
            <Link to="/power-ups/5b17ba540223dcfa1680ce13" className="rounded w-[420px] h-[320px] ml-18">
              <div className="shadow-div shadow-lg rounded-b-xl h-full">
                <a className="" href="">
                  <div className="color  rounded-t-xl bg-purple-400 w-full h-[102px]"></div>
                  <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                    <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                      <img
                        className="h-[1.9rem] w-[2.4rem]"
                        src="https://images.ctfassets.net/rz1oowkt5gyp/5XTgxWpmYCBylhZ9lce5x2/1b2f5432b04149edbf774d12e6c3663e/Typeform.svg"
                        alt=""
                      />
                    </div>
                    <div className="para pt-[16px]">
                      <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                        Type Form
                      </h1>
                      <p className="text-gray-400">
                        Communication & Collaboration
                      </p>
                      <p className="text-[1rem] ">
                        {" "}
                        Turn Typeform responses into Trello <br /> cards for
                        easy triage of requests and <br /> feedback.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </Link>
            {/* Card5 */}
            <Link to="/power-ups/55a5d917446f51777421000c/mailchimp" className="rounded w-[420px] h-[320px] ml-18">
              <div className="shadow-div shadow-lg rounded-b-xl h-full">
                <a className="" href="">
                  <div className="color  rounded-t-xl bg-blue-200 w-full h-[102px]"></div>
                  <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                    <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                      <img
                        className="h-[1.9rem] w-[2.4rem]"
                        src="https://images.ctfassets.net/rz1oowkt5gyp/3hwkhxDMVIu3eN4S1qZAoc/53942c6df60e3d5105e7de4a77269fef/Mailchimp.png"
                        alt=""
                      />
                    </div>
                    <div className="para pt-[16px]">
                      <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                        MailChimp
                      </h1>
                      <p className="text-gray-400">Marketing & Social media</p>
                      <p className="text-[1rem] ">
                        {" "}
                        Plan and Track MailChimp email <br />
                        campaigns in one organised location.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </Link>
            {/* Card6 */}

            <Link to="/power-ups/5e5e8b4b55a4ea5fedc0dafa/crmble" className="rounded w-[420px] h-[320px] ml-18">
              <div className="shadow-div shadow-lg rounded-b-xl h-full">
                <a className="" href="">
                  <div className="color  rounded-t-xl bg-red-700 w-full h-[102px]"></div>
                  <div className="content  rounded-b-lg h-[172px] w-full  pl-[16px] pr-[16px] pb-[16px]">
                    <div className="image bg-white w-[48px] h-[48px] rounded  mt-[-24px] flex items-center justify-center">
                      <img
                        className="h-[1.9rem] w-[2.4rem]"
                        src="https://images.ctfassets.net/rz1oowkt5gyp/7qvX3XLkRX8971yJnBDwDp/eb2dfdc9a4352d4a0c9286219825090a/Vectorcrmble.svg"
                        alt=""
                      />
                    </div>
                    <div className="para pt-[16px]">
                      <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                        Crmble
                      </h1>
                      <p className="text-gray-400">Sales & Support</p>
                      <p className="text-[1rem] ">
                        {" "}
                        Turn Trello boards into a powerful yet <br />
                        easy-to-use CRM & sales pipeline.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </Link>
          </div>
          <a
            className="text-blue-700 underline text-xl text-center ml-125"
            href=""
          >
            Go to Power-Ups gallery.
          </a>
        </div>
        <div className=" h-190 w-full">
          <br />
          <br />
          <br />
          <br />
          <div className="ml-50">
            <h1 className="font-bold text-4xl text-blue-950">
              There’s a template for that
            </h1>{" "}
            <br />
            <p className="text-[19px]  leading-7 ">
              Why start from scratch when there’s expertise that you can trust?
              Trello{" "}
              <a className="text-blue-600 underline" href="">
                {" "}
                templates
              </a>{" "}
              get <br /> you going quickly with a pre-built Trello board that
              you can customize for your needs. <br /> In addition to business
              templates, you’ll also find a Trello board for everything <br />
              formats{" "}
              <a className="text-blue-600 underline" href="">
                {" "}
                Team Management
              </a>{" "}
              to{" "}
              <a className="text-blue-600 underline" href="">
                Personal Productivity.
              </a>
            </p>
          </div>{" "}
          <br />
          <div className=" h-100  w-160 ml-48">
            <img className="h-55" src={Health7} alt="" />
            <br />
            <a className="text-blue-600 font-bold text-2xl underline" href="">
              Bussiness Plan
            </a>
            <p className="leading-7  text-lg">
              This template can assist with the creation of a business <br />{" "}
              plan and is great for collaborating with others during <br /> the
              process of its creation.
            </p>
          </div>
          <div className=" h-100  w-160 ml-190 -mt-100">
            <img className="h-55" src={Health8} alt="" />
            <br />
            <a className="text-blue-600 font-bold text-2xl underline" href="">
              Weekly Planner
            </a>
            <p className="leading-7  text-lg">
              A visual way to plan every day of the week, with <br /> checklists
              to drill into the details.
            </p>
          </div>
        </div>
        <div className="h-50 w-full ">
          <p className="flex items-center justify-center text-xl ">
            Join a community of millions of users globally who are using Trello
            to get more done.
          </p>
          <br /> <img className="ml-70" src={Health9} alt="" />
        </div>
        <div className=" bg-pink-100 h-165">
          <br />
          <br />
          <br />
          <div className="ml-50">
            <h1 className="font-bold text-2xl text-blue-950">
              Teamwork and work management tips from the pros.
            </h1>
            <p className="text-xl mt-3">
              Read the Trello blog to find ways to improve efficiency, <br />{" "}
              productivity, and collaboration.
            </p>
          </div>{" "}
          <br />
          <br />
          <div className=" h-80 w-200">
            <br />
            <div class="flex items-start ml-50 space-x-4">
              <img className="h-14" src={Health10} alt="" />
              <div>
                <a class="text-xl font-semibold text-blue-700 underline cursor-pointer">
                  Six essential Trello templates you need to run <br /> a
                  business
                </a>
                <p class="mt-2 text-gray-700 text-xl">
                  A roundup of six essential Trello templates that <br /> are
                  useful for every member of your company.
                </p>
              </div>
            </div>
            <div class=" h-100 w-150 ml-200 -mt-40 p-10">
              <img className="-ml-15  h-12" src={Health11} alt="" />
              <div>
                <h2 class="text-xl -mt-12 font-semibold text-blue-700 underline cursor-pointer">
                  Seven easy automation ideas to boost your <br /> small
                  business’ bottom line and productivity
                </h2>
                <p class="mt-2 text-gray-700 text-xl">
                  How do you work less and achieve more in your <br /> business?
                  Automate sales, service, and <br /> marketing processes to
                  help your team do more,
                  <br /> faster.
                </p>
              </div>
            </div>
            <div class="flex items-start  h-50 ml-50 -mt-37 space-x-4">
              <img className="h-12" src={Health12} alt="" />
              <div>
                <h2 class="text-xl font-semibold text-blue-700 underline cursor-pointer">
                  Why the biggest risk to your business this <br /> year is
                  burnout (and how to tackle it)
                </h2>
                <p class="mt-2 text-gray-700 text-xl">
                  Recognize and decrease burnout for you and <br /> your
                  employees, before it impacts your business.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4 ml-192  h-80 w-140 -mt-50 ">
              <img className="h-12" src={Health13} alt="" />
              <div>
                <h2 class="text-xl font-semibold text-blue-700 underline cursor-pointer">
                  Three business app problems that ruin team <br /> productivity
                  (and how to stop them)
                </h2>
                <p class="mt-2 text-gray-700 text-xl ">
                  How to audit your business apps to make it easy <br /> for
                  your team to remember which tool to use for <br /> each task—or where
                  to track down vital <br /> information.
                </p>
              </div>
            </div>
          </div>
        </div>
        <UniversalFooter/>
      </div>

    </>
  );
};

export default Health;
