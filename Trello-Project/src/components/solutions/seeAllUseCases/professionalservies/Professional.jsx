import React from "react";
import NavBar from "../../../NavBar";
import Profes from "../../../../assets/ProfessionalServicesHero.png";
import ProductHero from "../../../../assets/ProductHeroo.png";
import UniversalFooter from "../../../UniversalFooter";
import Timeline from "../../../../assets/Timeline.png";
import UlilloLists from "../../../../assets/Lists.png";
import Automation from "../../../../assets/AutomationRules.png";
import Mail from "../../../../assets/Mail.png";
import Clock from "../../../../assets/Clock.png";
import Sales from "../../../../assets/force.png";
import Mailchimp from "../../../../assets/Mailchimp.png";
import Cardre from "../../../../assets/Cardrepeater.png";
import Drive from "../../../../assets/GoogleDrive.png";
import Templates from "../../../../assets/TemplateProjectManagement.png";
import Project from "../../../../assets/TemplateWorkRequest.png";
import base from "../../../../assets/base.svg";
import Face from "../../../../assets/Slightlyface.svg";
import { Link } from "react-router-dom";

const Professional = () => {
  return (
    <>
      <NavBar />
      <div className="w-full flex flex-col bg-gradient-to-b from-cyan-50 to-white-100 items-center justify-center p-10">
        <img className="w-180  pb-8" src={Profes} alt="" />
        <div>
          <div>
            <h1 className="font-bold text-5xl text-center pb-4 ">
              Trello for Professional Services
            </h1>
          </div>
          <div>
            <p className="font-sans text-center text-2xl">
              Trello is an easy-to-use tool for professional services teams to
              streamline <br /> operations while scaling with the business as it
              grows. Whether you’re <br /> managing clients, handling day-to-day
              operations, resource planning, or <br /> billing time, Trello
              helps you stay organized and get more done.
            </p>{" "}
            <br />
            <Link
              to="/signup?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D"
              className="bg-blue-600 text-white w-25 inline-flex items-center text-center justify-center h-13 ml-80 mt-5  hover:bg-blue-800 rounded"
            >
              Try it free
            </Link>
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
      <div className="w-270 flex flex-col ml-60">
        <h2 className="font-bold text-4xl text-center">
          See everything that needs to be done, in one place
        </h2>
        <br />
        <img className="w-240 ml-15" src={ProductHero} alt="" /> <br />
        <br />
        <br /> <br />
      </div>
      <div className="pb-20">
        <h2 className="font-bold text-4xl text-center">
          More projects, <strike>more</strike> no problem
        </h2>
        <br />
        <p className="font-sans text-center text-2xl">
          As your business grows to take on more clients and more work, use
          Trello to help tame the <br /> collaboration chaos and juggle
          competing priorities, all with{" "}
          <Link to="/trust" className="underline text-blue-400 cursor-pointer">
            enterprise-grade security.
          </Link>
        </p>
      </div>
      <div className="flex justify-evenly mb-20">
        <div className="ml-15">
          <h2 className="font-bold text-4xl mb-10">
            Organization tailored to <br /> how you work
          </h2>
          <p className="border-t text-xl border-gray-400 pt-3">
            Trello’s system of boards, lists, and cards form <br /> easy
            building blocks for a custom way to <br /> organize whatever you’re
            working on, from <br /> large projects to weekly meetings. Choose{" "}
            <br /> from more than 200{" "}
            <Link
              to="/power-ups"
              className="underline cursor-pointer text-blue-600"
              href=""
            >
              Power-Ups
            </Link>{" "}
            to add <br /> specialized features and powerful integrations <br />{" "}
            with your favorite work tools like Gmail, Slack, <br /> and Google
            Calendar.
          </p>
        </div>
        <div>
          <img className="w-130 ml-15" src={UlilloLists} alt="" />
        </div>
      </div>
      <div className="flex justify-evenly mb-20">
        <div>
          <img className="w-110 ml-15" src={Timeline} alt="" />
        </div>
        <div className="ml-5 mr-20">
          <h2 className="font-bold text-4xl mb-10">
            See your projects from every <br /> angle
          </h2>
          <p className="border-t text-2xl border-gray-400 pt-3">
            Switch between{" "}
            <Link to="/views" className="underline text-blue-600 " href="">
              Trello’s views
            </Link>{" "}
            for a fresh <br /> perspective on the work at hand. Gain new <br />{" "}
            insight from seeing competing priorities <br /> mapped against a
            Timeline view, filter by task <br /> owners or labels in the
            spreadsheet-like Table <br /> view, or see what’s coming up next
            week in <br /> the date-based Calendar view.
          </p>
        </div>
      </div>
      <div className="flex justify-evenly mb-20">
        <div className="ml-15">
          <h2 className="font-bold text-4xl mb-10">Set it and forget it</h2>
          <p className="border-t text-2xl border-gray-400 pt-3">
            Trello{" "}
            <Link
              to="/butler-automation"
              className="cursor-pointer text-blue-600 underline"
              href=""
            >
              automates
            </Link>{" "}
            the time-consuming task of <br /> “managing work,” so you can focus
            on more <br /> important things. Just tell Trello the action <br />{" "}
            you’d like to take once a trigger has occurred, <br /> and let it
            handle the rest—it can even suggest <br /> processes to automate
            based on your board <br /> activity. Trello automation works with
            other <br /> apps like Jira, Slack, and email too, so you can <br />{" "}
            work with collaborators wherever they prefer.
          </p>
        </div>
        <div>
          <img className="w-130 " src={Automation} alt="" />
        </div>
      </div>
      <section className="flex flex-col items-center gap-10 mt-20">
        <div className="bg-gradient-to-b from-[#EEEBFF] to-white pt-15 pl-50 w-[100%]">
          <h1 className="text-[36px] text-[#091E42] font-semibold">
            Keep the tools you love
          </h1>
          <p className="text-[20px] w-[727px]">
            <Link
              to="/power-ups"
              className="cursor-pointer text-blue-600 underline"
              href=""
            >
              {" "}
              Trello Power-Ups
            </Link>{" "}
            connect your favorite apps directly to Trello for a single source{" "}
            <br /> of truth with zero additional effort. Want more niche
            features in Trello? You can <br /> add those too. With our gallery
            of 200+ Power-Ups, building a bespoke <br /> organization system for
            your business is effortless.
          </p>
        </div>
        <div className="flex gap-10">
          <Link to="/power-ups/57b47fb862d25a30298459b1/card-repeater" className="h-[360px] w-[350px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#8777D9] rounded-t-[10px]"></div>
            <img
              src={Cardre}
              alt=""
              className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2"
            />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Card Repeater</h1>
              <h2 className="text-[16px] font-normal text-gray-500">
                Automation
              </h2>
              <p className="text-[16px] font-normal mt-2 tracking-wide">
                Automation the creation of Trello cards for recuring tasks, for
                one less thing to <br /> think about.
              </p>
            </div>
          </Link>

          <Link to="/power-ups/55a5d916446f517774210006" className=" h-[379px] w-[345px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#00C7E5] rounded-t-[10px]"></div>
            <img
              src={Drive}
              alt=""
              className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2"
            />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Google Drive</h1>
              <h2 className="text-[16px] font-normal text-gray-500">
                File management
              </h2>
              <p className="text-[16px] font-normal mt-2 tracking-wide">
                Search Google Drive right from Trello <br /> and attach relevant
                files directly to <br /> their corresponding tasks for richer{" "}
                <br />
                context.
              </p>
            </div>
          </Link>

          <Link to="/power-ups/6052d16c340ed23e9da083ed" className="h-[379px] w-[345px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#2684ff]  rounded-t-[10px]"></div>
            <img
              src={Mail}
              alt=""
              className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2"
            />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Gmail</h1>
              <h2 className="text-[16px] font-normal text-gray-500">
                Communication & collaboration
              </h2>
              <p className="text-[16px] font-normal mt-2 tracking-wide">
                Send to emails to Trello for easy task <br /> management
              </p>
            </div>
          </Link>
        </div>

        <div className="flex gap-10">
          <Link to="/power-ups/55a5d917446f517774210009" className=" h-[379px] w-[345px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#0052cc] rounded-t-[10px]"></div>
            <img
              src={Sales}
              alt=""
              className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2"
            />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">Salesforce</h1>
              <h2 className="text-[16px] font-normal text-gray-500">
                Sales & Support
              </h2>
              <p className="text-[16px] font-normal mt-2 tracking-wide">
                Bring leads,contacts,and cases into <br /> Trello cards to see
                pipeline health in <br /> real-time, at a glance.
              </p>
            </div>
          </Link>

          <Link to="/power-ups/55a5d917446f51777421000c/mailchimp" className=" h-[379px] w-[345px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#2684ff] rounded-t-[10px]"></div>
            <img
              src={Mailchimp}
              alt=""
              className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2"
            />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">MailChimp</h1>
              <h2 className="text-[16px] font-normal text-gray-500">
                Analysis & reporting
              </h2>
              <p className="text-[16px] font-normal mt-2">
                Plan and track MailChimp email campaigns in one organized
                location
              </p>
            </div>
          </Link>

          <Link to="/power-ups/5d367a59d5db032812ddbf22/time-tracking-reporting" className=" h-[379px] w-[345px] shadow-2xl rounded-[10px] hover:cursor-pointer">
            <div className=" h-[96px] bg-[#ff7452] rounded-t-[10px]"></div>
            <img
              src={Clock}
              alt=""
              className="h-[48px] w-[48px] mt-[-30px] ml-4 bg-white rounded-[10px] p-2"
            />
            <div className="p-[24px]">
              <h1 className="text-[24px] font-medium mb-1">
                Time Tracking & Reporting
              </h1>
              <h2 className="text-[16px] font-normal text-gray-500">
                Analysis & reporting
              </h2>
              <p className="text-[16px] font-normal mt-2 tracking-wide">
                Help your team log time on Trello cards <br /> to track work.
                Create and export <br /> reports to see aggregated data
              </p>
            </div>
          </Link>
        </div>
      </section>{" "}
      <br />
      <br />
      <Link
        to="/power-ups"
        className="cursor-pointer underline text-blue-600 text-xl text-center ml-170"
        href=""
      >
        see more power-ups
      </Link>
      <section className="w-[73%]  m-auto mt-25 mb-20">
        <h1 className="w-[728px] text-[34px] font-[600] text-gray-900 ">
          There’s a template for that
        </h1>
        <p className="text-[20px] w-[802px] text-gray-900 font-[450] tracking-wide pt-[5px] pb-[12px]">
          Why start from scratch when there’s expertise that you can trust?
          Trello{" "}
          <Link
            to="/templates"
            className="cursor-pointer underline text-[#0052CC]"
            href=""
          >
            templates
          </Link>{" "}
          get <br /> you going quickly with a pre-built Trello board that you
          can customize for your needs. <br /> In addition to business
          templates, you’ll also find a Trello board for everything from <br />{" "}
          <Link
            to="/templates/team-management"
            className="cursor-pointer underline text-[#0052CC]"
            href=""
          >
            Team Management{" "}
          </Link>{" "}
          to{" "}
          <Link
            to="/templates/productivity"
            className="cursor-pointer underline text-[#0052CC]"
            href=""
          >
            Personal Productivity.
          </Link>
        </p>

        <div className="flex gap-8 mt-6">
          <div className="w-[538px] h-[457px] flex flex-col gap-2">
            <img src={Templates} alt="" className="h-[228px] w-[538px]" />
            <Link
              to="/templates/project-management/work-request-and-intake-process-BGbKiKKA"
              className="cursor-pointer underline text-[#0052CC] text-2xl"
            >
              Work request and intake process
            </Link>
            <p className="text-[20px] w-[510px] text-gray-900 font-[450] tracking-wide">
              This board details the Google Forms, automation rules, <br />
              and Trello Power-Ups that optimize the way that you <br /> manage
              client requests.
            </p>
          </div>

          <div className="w-[538px] h-[457px] flex flex-col gap-2">
            <img src={Project} alt="" className="h-[228px] w-[538px]" />
            <Link
              to="/templates/project-management/project-management-1x4Uql2u"
              className="cursor-pointer underline text-[#0052CC] text-2xl"
            >
              Project management
            </Link>
            <p className="text-[20px] w-[510px] text-gray-900 font-[450] tracking-wide ">
              The Trello team’s own structure for setting up an ideal <br />{" "}
              workflow, for projects big or small.
            </p>
          </div>
        </div>
      </section>
      <div className="mb-20">
        <p className="text-xl ml-100">
          Join a community of millions of users globally who are using Trello to
          get more done.
        </p>
        <img className="ml-65" src={base} alt="" />
      </div>
      <div className="bg-[#f0f4f8] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl ml-15 font-bold text-gray-900 mb-4">
            Teamwork and work management tips from the pros
          </h2>
          <p className="text-2xl ml-15 text-gray-700 mb-12">
            Read the Trello blog to learn ways you can improve team health,{" "}
            <br />
            productivity, and collaboration.
          </p>
          <div class="flex items-start ml-50 space-x-4">
            <svg
              className="w-10 -ml-20  "
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 61 65"
            >
              <path
                d="M41.96 8.784a2.4 2.4 0 0 1 4.14 2.426l-.06.103L29.506 37.98a2.4 2.4 0 0 1-4.14-2.426l.061-.103z"
                opacity=".5"
              ></path>
              <path
                d="M4.457 13.666a2.4 2.4 0 0 1 3.306-.044l.088.086 21.334 21.867a2.4 2.4 0 0 1-3.348 3.438l-.088-.086L4.416 17.06a2.4 2.4 0 0 1 .041-3.393z"
                opacity=".5"
              ></path>
              <path
                d="M25.77 35.02a2.4 2.4 0 0 1 3.479 3.304l-.085.09L7.83 59.746a2.4 2.4 0 0 1-3.479-3.305l.085-.09z"
                opacity=".5"
              ></path>
              <path
                d="M24.97 35.833a2.4 2.4 0 0 1 3.005-1.388l.11.04 26.933 10.667a2.4 2.4 0 0 1-1.659 4.503l-.109-.04-26.933-10.667a2.4 2.4 0 0 1-1.348-3.115z"
                opacity=".5"
              ></path>
              <circle cx="27.466" cy="36.716" r="9.333"></circle>
              <circle cx="6.133" cy="15.383" r="6.133"></circle>
              <circle cx="54.133" cy="47.383" r="6.133"></circle>
              <circle cx="43.467" cy="9.517" r="9.333"></circle>
              <circle cx="6.133" cy="58.049" r="6.133"></circle>
            </svg>
            <div>
              <Link
                to="/blog/distributed-work/6-rules-of-remote-engagement-for-professional-networking"
                class="text-xl font-semibold text-blue-700 underline cursor-pointer"
              >
                Five rules of networking when you work <br /> remotely
              </Link>
              <p class="mt-2 text-gray-700 text-xl">
                Inspired by professional etiquette best practices, <br /> here’s
                how to put yourself out there for digital <br /> networking.
              </p>
            </div>
          </div>
          <div class=" h-100 w-150 ml-200 -mt-40 p-10">
            <svg
              className="w-10 -ml-30 -mt-10  "
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 58 65"
            >
              <path
                fill-rule="evenodd"
                d="M57.826 13.473a6.737 6.737 0 0 0-6.737-6.737H6.737A6.737 6.737 0 0 0 0 13.473v.204a6.94 6.94 0 0 1 6.94-6.94h43.946a6.94 6.94 0 0 1 6.94 6.932zm0 8.984H0v35.368a6.737 6.737 0 0 0 6.737 6.737h44.352a6.737 6.737 0 0 0 6.737-6.737zM46.7 35.828a2.526 2.526 0 0 0-3.573 0l-4.109 4.108-4.108-4.108a2.526 2.526 0 0 0-3.662 3.479l.09.094 4.389 4.39-4.39 4.388a2.526 2.526 0 0 0-.09 3.479l.09.094a2.527 2.527 0 0 0 3.479.09l.094-.09 4.108-4.108 4.109 4.108.094.09a2.527 2.527 0 0 0 3.479-.09l.09-.094a2.527 2.527 0 0 0-.09-3.479l-4.39-4.389 4.39-4.39.09-.093a2.527 2.527 0 0 0-.09-3.479z"
              ></path>
              <path
                d="M0 22.458h57.826v-8.983a6.737 6.737 0 0 0-6.737-6.737H6.737A6.737 6.737 0 0 0 0 13.475z"
                opacity=".5"
              ></path>
              <path d="M41.265 10.949a2.526 2.526 0 0 1-5.05.119l-.003-.119v-7.86a2.526 2.526 0 0 1 5.05-.119l.003.119zm-19.651 0a2.526 2.526 0 0 1-5.05.119l-.003-.119v-7.86a2.526 2.526 0 0 1 5.05-.119l.003.119z"></path>
            </svg>
            <div>
              <Link
                to="/blog/project-management/most-common-project-blockers"
                class="text-xl inline-flex absolute -mt-15 -ml-15 font-semibold text-blue-700 underline cursor-pointer"
              >
                The most common project blockers and ways <br /> to eliminate
                them
              </Link>
              <p class="mt-2 -ml-15 text-gray-700 text-xl">
                Project blockers come in all shapes and sizes. <br /> The key to
                delivering work on time is knowing <br /> your project blockers
                or impediments.
              </p>
            </div>
          </div>
          <div class="flex items-start  h-50 ml-50 -mt-37 space-x-4">
            <svg
              className="w-10 -ml-20"
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 56 65"
            >
              <path
                fill-rule="evenodd"
                d="M55.361 7.453c.353-.886.583-1.464-.581-1.464h-3.922c-7.842 0-17.912-3.715-21.537-5.162a3.708 3.708 0 0 0-2.754 0C22.942 2.274 12.872 5.99 5.03 5.99H1.108c-1.164 0-.933.578-.581 1.464.222.558.493 1.239.493 1.973v20.736a34.371 34.371 0 0 0 18.621 30.55l6.728 3.468c.988.51 2.162.51 3.15 0l6.728-3.468a34.371 34.371 0 0 0 18.621-30.55V9.426c0-.734.271-1.415.493-1.973zm-14 15.865a2.578 2.578 0 0 0-.084-3.558l-.088-.084a2.578 2.578 0 0 0-3.558.084l-13.57 13.57-4.658-4.658-.088-.084a2.578 2.578 0 0 0-3.558 3.73l6.481 6.48.088.084a2.578 2.578 0 0 0 3.558-.084l15.393-15.392z"
              ></path>
            </svg>
            <div>
              <Link
                to="/blog/trello/cybersecurity-hybrid-distributed-work"
                class="text-xl font-semibold text-blue-700 underline cursor-pointer"
              >
                How to tighten cybersecurity for remote and <br /> hybrid teams
              </Link>
              <p class="mt-2 text-gray-700 text-xl">
                Four ways to prevent human error from opening <br /> your
                business to security vulnerabilities.
              </p>
            </div>
          </div>
          <div class="flex items-start space-x-4 ml-192  h-80 w-140 -mt-50 ">
            <img className="w-10 -ml-13 " src={Face} alt="" />
            <div>
              <Link
                to="/blog/productivity/job-burnout-how-to-fix-the-aftermath-of-an-overachiever-attitude"
                class="text-xl  font-semibold text-blue-700 underline cursor-pointer"
              >
                Lessons from leaders on how to combat and <br /> prevent job
                burnout
              </Link>
              <p class="mt-2  text-gray-700 text-xl ">
                Burnout is common in profession services fields, <br /> where
                you might be in back-to-back meetings all <br /> day and working
                on projects after hours. See <br /> how chronic overachievers
                keep from burning <br /> out.
              </p>
            </div>
          </div>
        </div>
      </div>
      <UniversalFooter />
    </>
  );
};

export default Professional;
