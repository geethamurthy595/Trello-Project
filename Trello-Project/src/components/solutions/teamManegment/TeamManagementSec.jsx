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

import power from "../../../assets/Powerup.png";

import { Link } from "react-router-dom";
import Workspace from "./Workspace";



export default function TeamManagementSec() {
  return (
    <>
      <div className="text-center bg-gradient-to-b from-blue-600 to-cyan-400 flex gap-35 space-between ">
        <img className="h-80 w-70" src={left} alt="" />
        <div className="w-300">
          <p className="underline text-white text-[16px]">
            &lt; Go back to Team Solutions{" "}
          </p>
          <br />
          <h1 className="text-[48px] font-medium text-white">
            Trello For Team Management
          </h1>
          <br />
          <div className="text-[24px] font-normal text-white">
            <p>Rule your team without the iron fist. From project management to your next virtual party, level up your team management practices and workflows with Trello.</p>
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

      <Workspace/>
      <br />
      <br />
      <br />
      <div className="h-[463px] flex pl-[206px] gap-30">
        <div>
          <h1 className="h-[96px] w-[500px] text-[36px] font-medium">
            Remove the balancing act from team workloads.
          </h1>
          <br />
          <p className="text-[20px] font-normal h-[90px] w-[410px]">
            Make sure burnout and bottlenecks are kept at bay by effectively distributing team workloads using Dashboard View.
          </p>
          <br />
          <br />
          <p className="underline text-[20px] font-normal text-blue-600 hover:cursor-pointer">
            Learn more about Trello views
          </p>
        </div>
        <div>
          <img
            className="h-[301px] w-[550px] "
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
            Power-Up Your Team Workflows
          </h1>
          <br />
          <p className="text-[20px] font-normal h-[90px] w-[410px]">
            Add more oil to your team’s digital machine with these Power-Ups, such as Slack, Miro, and Voting, specifically created with teams in mind.
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
            Move Work Forward, Auto- <br />
            magically
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

      <div className="bg-[#EAE6FF] pb-15 mb-15">
        <div className="w-275 mx-auto">
        <div className="flex justify-center flex-col">
          <div className=" pt-[80px] mx-auto text-[36px] font-medium">
          Resources For Teams Of All Shapes And Sizes
        </div>
          <div className="w-175 mx-auto">
            <p className="text-[20px] font-normal text-center tracking-wide">
              Take a page out of the Trello team’s book and uncover ways to better manage, coach, and inspire your team.


            </p>
          </div>
        </div>
        <br />
        <div className="  h-[750px] p-[10px] ">
          <div>
            <h1 className="text-[16px] font-medium">
              How To Use Trello To Manage And Inspire Your Team [Blog Post]
            </h1>
            <p className="text-[20px] font-normal">
              The best managers and leaders bring productive habits and processes to their team while allowing for flexibility and self-organization. Coach your team on how to prioritize tasks, maintain focus, manage time better, and communicate more efficiently.
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
              The Ultimate Guide To Team Project Management [Blog Post]
            </h1>
            <p className="text-[20px] font-normal">
              There’s no better feeling than achieving project goals and creating amazing work with your team. But any project can go haywire if not managed properly. Boost collaboration, motivate your team, and declare every project a success with this guide to effective project management.
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
              Better Boards For Team Collaboration [Webinar]

            </h1>
            <p className="text-[20px] font-normal">
            Are your Trello boards set up for success? Working with a team is a great way to get more done—but you can only be as efficient as the processes you establish. Discover do's and don'ts of Trello workflows, recommended best practices, and board inspiration in this on-demand webinar.
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
    </>
  )
}
