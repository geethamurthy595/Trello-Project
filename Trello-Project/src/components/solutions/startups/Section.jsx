import left from "../../../assets/imgi_119_hero-left.png";
import right from "../../../assets/imgi_120_hero-right.png";

import secimg from "../../../assets/sec1img.png";

import i1 from "../../../assets/article1.png";
import i2 from "../../../assets/article2.png";
import i3 from "../../../assets/article3.png";
import i4 from "../../../assets/article4.png";
import i5 from "../../../assets/article5.png";

import butler from "../../../assets/butler.svg";

import gain from "../../../assets/sec2img1startups.png";

import power from "../../../assets/sec2img2startups.png";
import Productivity from "./Productivity";
import { Link } from "react-router-dom";

function Section() {
  return (
    <div>
      <div className="text-center bg-gradient-to-b from-blue-600 to-cyan-400 flex gap-40 space-between ">
        <img className="h-80 w-70" src={left} alt="" />
        <div className="w-300">
          <p className="underline text-white text-[16px]">
            &lt; Go back to Team Solutions{" "}
          </p>
          <br />
          <h1 className="text-[48px] font-medium text-white">
            Trello for Startups
          </h1>
          <br />
          <div className="text-[24px] font-normal text-white">
            From hiring your first employee to hitting your revenue goals,{" "}
            <br /> discover how to thrive as a startup with Trello.
          </div>
        </div>
        <img className="h-80 w-70" src={right} alt="" />
      </div>

      <div className="h-[355px] pl-[205px] flex gap-10 pt-20">
        <div>
          <img className="h-[262px] w-[352px]" src={secimg} alt="Signup" />
        </div>
        <div>
          <p className="text-[24px] font-normal h-[126px] w-700px">
            Trello’s boards, lists, and cards enable teams to go from ideas{" "}
            <br /> to action in seconds. Visual and easy-to-use, Trello helps
            teams <br /> bring projects to life and keep them moving forward.
          </p>
          <Link
            to="/signUp"
            className=" inline-flex items-center justify-center rounded-[5px] bg-blue-600 h-[50px] w-[165px] text-white hover:cursor-pointer"
          >
            Sign Up - It's Free
          </Link>
        </div>
      </div>
      <br />

      <div className="h-[400px] pt-[80px] pl-[360px] bg-gray-100">
        <p className="text-[20px] font-normal pl-10">
          Join over 2,000,000 teams worldwide who are using Trello to get more
          done.
        </p>
        <br />
        <br />

        <div className="flex pl-[123px]">
          <img className="w-[162px] h-[80px]" src={i1} alt="" />
          <img className="w-[162px] h-[109px]" src={i2} alt="" />
          <img className="w-[162px] h-[80px]" src={i3} alt="" />
        </div>
        <br />
        <div className="flex pl-[200px]">
          <img className="w-[162px] h-[80px]" src={i4} alt="" />
          <img className="w-[162px] h-[80px]" src={i5} alt="" />
        </div>
      </div>

      <Productivity />
      <br />
      <br />
      <br />
      <div className="h-[463px] flex pl-[206px] gap-30">
        <div>
          <h1 className="h-[96px] w-[500px] text-[36px] font-medium">
            Gain actionable insights and key metrics.
          </h1>
          <br />
          <p className="text-[20px] font-normal h-[90px] w-[410px]">
            Help your start-up scale (without the growing pains) by making
            informed data-driven decisions using Dashboard view. Get the most of
            Trello's different views.
          </p>
          <br />
          <br />
          <p className="underline text-[20px] font-normal text-blue-600 hover:cursor-pointer">
            Learn more about Trello views
          </p>
        </div>
        <div>
          <img
            className="h-[301px] w-[550px] border-2 shadow-2xl"
            src={gain}
            alt="Signup"
          />
        </div>
      </div>

      <div className="h-[463px] flex pl-[206px] gap-70">
        <div>
          <img className="h-[380px] w-[380px]" src={power} alt="Signup" />
        </div>
        <div>
          <h1 className="h-[96px] w-[500px] text-[36px] font-medium">
            Power-Up Your New <br /> Business
          </h1>
          <br />
          <p className="text-[20px] font-normal h-[90px] w-[410px]">
            All businesses could use some extra support. Allow these tools and
            integrations, like Confluence, Jira, and Slack to propel your
            business forward with easier, more effective collaboration.
          </p>
          <br />
          <br />
          <br />
          <p className="underline text-[20px] font-normal text-blue-600 hover:cursor-pointer">
            Explore 150+ Power-Ups
          </p>
        </div>
      </div>

      <div className="h-[463px] flex pl-[206px] gap-30">
        <div>
          <h1 className="h-[96px] w-[500px] text-[36px] font-medium">
            Move Work Forward, Auto-magically
          </h1>
          <br />
          <p className="text-[20px] font-normal h-[90px] w-[410px]">
            Trello’s built-in automation makes it easy to automate the
            repetitive, everyday tasks that keep your team from focusing on the
            work that matters most.
          </p>
          <br />
          <br />
          <p className="underline text-[20px] font-normal text-blue-600 hover:cursor-pointer">
            Let the robots do the work
          </p>
        </div>
        <div>
          <img className="h-[301px] w-[448px]" src={butler} alt="Signup" />
        </div>
      </div>

      <div className="bg-[#EAE6FF] pl-[200px] mb-15">
        <h1 className=" pt-[80px] pl-[320px] text-[36px] font-medium">
          Resources For Startup Success
        </h1>
        <p className="text-[20px] font-normal ml-50">
          Whether you’re looking for quick tips or thorough advice, use these
          resources <br />
          <span className="ml-30">
            {" "}
            to launch, run, and grow your business with more ease:{" "}
          </span>
        </p>
        <br />
        <div className=" w-[1180px] h-[750px] p-[10px] ">
          <div>
            <h1 className="text-[16px] font-medium">
              6 ESSENTIAL TRELLO TEMPLATES YOU NEED TO RUN A BUSINESS[BLOG POST]
            </h1>
            <p className="text-[20px] font-normal">
              From HR to IT, to every department and acronym in between, there
              is a Trello board that helps businesses run <br /> smoother.
              Explore six essential templates that, at one point or another, are
              useful for every member of your company.
            </p>
            <br />
            <p className="underline text-[16px] font-normal text-blue-800 hover:cursor-pointer">
              READ MORE
            </p>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <h1 className="text-[16px] font-medium">
              HOW TO KEEP YOUR SMALL BUSINESS MOTIVATED-NO MATTER WHAT[BLOG
              POST]
            </h1>
            <p className="text-[20px] font-normal">
              NY Times bestselling author, business thought leader, and
              acclaimed B-School founder, Marie Forleo, uncover how to <br />{" "}
              keep motivation high and teams ready for action through up and
              down.
            </p>
            <br />
            <p className="underline text-[16px] font-normal text-blue-800 hover:cursor-pointer">
              READ MORE
            </p>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <h1 className="text-[16px] font-medium">
              HOW TO USE TRELLO AND INDEED TO HIRE A DREAM TEAM[BLOG POST]
            </h1>
            <p className="text-[20px] font-normal">
              If your company is growing fast and hiring fast, unleash the power
              of using Trello and Indeed in-tandem as an easy, <br />{" "}
              light-weight recruiting management tool to keep all your ducks
              (and candidates) in a row.
            </p>
            <br />
            <p className="underline text-[16px] font-normal text-blue-800 hover:cursor-pointer">
              READ MORE
            </p>
          </div>
          <br />
          <hr />
          <br />
          <div className="h-[131px] w-[1108px] bg-[#091E42] rounded-[10px] text-white pl-[48px] pt-[24px] pr-[48px] flex justify-between">
            <div>
              <p className="text-[16px] font-medium">NOW AVAILABLE</p>
              <h1 className="text-[20px] font-medium">
                A 14 Day Free Trial of Premium!
              </h1>
              <p className="text-[16px] font-normal">
                Get unlimited boards, Trello views, and limitless automation,
                plus a ton more.
              </p>
            </div>
            <div>
              <button className="bg-white text-[16px] h-[49px] w-[118px] text-black rounded-[5px] mt-[20px] hover:cursor-pointer">
                Try it today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section;
