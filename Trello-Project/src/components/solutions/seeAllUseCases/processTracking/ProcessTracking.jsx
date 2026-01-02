import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../NavBar";

import Total from "../../../../assets/Total.svg";
import Drive from "../../../../assets/Drive.svg";
import List from "../../../../assets/List.png";
import Ring from "../../../../assets/Ring.png";
import Slack3 from "../../../../assets/Slack3.svg";
import Ultra from "../../../../assets/Ultra.svg";
import Ver2 from "../../../../assets/Ver2.svg";
import Microsoft from "../../../../assets/Microsoft.svg";



import Gmail1 from "../../../../assets/gmail-icon_1.svg";
import processTrackingImage1 from "../../../../assets/Trello_ProcessTracking_Hero_2x_1_2x.webp";
import processTrackingImage2 from "../../../../assets/TrelloBoard_ProcessTracking_Onboarding_2x.webp";
import processTrackingImage3 from "../../../../assets/PremiumLP_HeroImage_2x.webp";
import processTrackingImage4 from "../../../../assets/UIillo_CardBack_AddMembers_2x.png";
import processTrackingImage5 from "../../../../assets/UIillo_Automation_RepeatProcess_2x.png";
import processTrackingImage6 from "../../../../assets/Editorial_Calender_Screen_shot_2x.png";
import processTrackingImage7 from "../../../../assets/Grant_Tracking_template.png";

import UniversalFooter from "../../../UniversalFooter";
import { FaPen, FaFlag } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { TbCircleLetterIFilled } from "react-icons/tb";

const ProcessTracking = () => {
  const cards = [
    {
      title: "Slack",
      category: "Automation",
      description: "Keep your communication and collaboration apps connected.",
      image: Slack3,
      bg: "bg-slate-700",
      path: "/power-ups/55a5d917446f51777421000a",
    },
    {
      title: "Google Drive",
      category: "File management",
      description:
        "Search Google Drive right from Trello and attach relevant files and folders.",
      image: Drive,
      bg: "bg-blue-500",
      path: "/power-ups/55a5d916446f517774210006",
    },
    {
      title: "Confluence",
      category: "Communication & collaboration",
      description:
        "Pull Confluence pages into your meeting board, or start a new one from a card.",
      image: Ver2,
      bg: "bg-blue-900",
      path: "/power-ups/586be37142f94dc0871fbcbb/confluence-cloud",
    },
    {
      title: "Jira",
      category: "Developer Tools",
      description:
        "Connect Jira and Trello to help all your teams work better together.",
      image: Ultra,
      bg: "bg-blue-700",
      path: "/power-ups",
    },

    {
      title: "Microsoft Teams",
      category: "Developer Tools",
      description:
        "Connect Microsoft Teams and Trello to help all your teams work better together.",
      image: Microsoft,
      bg: "bg-violet-700",
      path: "/power-ups",
    },
    {
      title: "Gmail",
      category: "Communication & collaboration",
      description:
        "create trello cards directly from your email inbox. Text in the email body is automatically added to the card .",

      image: Gmail1,
      bg: "bg-orange-400",
      path: "/power-ups/6052d16c340ed23e9da083ed",
    },
  ];

  const items = [
    {
      icon: <TbCircleLetterIFilled className="h-8 w-8 text-[#172B4D] flex" />,
      title: "The ultimate guide to team project management",
      description:
        "There’s no such thing as winging it when it comes to effective project management. Discover how to stay aligned as a team, identify risks, improve collaboration, and remove blockers.",
      link: "Read more",
    },
    {
      icon: <FaPen className="h-8 w-8 text-[#172B4D] flex" />,
      title: "How to unlock project management perfection with Trello",
      description:
        "Get your project off the ground in a matter of seconds by discovering the secret sauce to project planning. Hint: Trello is the main ingredient.",
      link: "Read more",
    },
    {
      icon: <MdOutlineMenuBook className="h-8 w-8 text-[#172B4D] flex" />,
      title: "Your team’s project roadmap: Gantt charts in Trello",
      description:
        "Building a project roadmap in Trello gives you an automatic way to generate Gantt charts on demand. Plan your project, and your chart will follow.",
      link: "Read more",
    },
    {
      icon: <FaFlag className="h-8 w-8 text-[#172B4D] flex" />,
      title: "The most common project blockers and ways to eliminate them",
      description:
        "Project blockers come in all shapes and sizes. The key to delivering work on time is knowing your project blockers or impediments.",
      link: "Read more",
    },
  ];
  return (
    <div className="process-tracking-page">
      {/* ---------- HEADER ---------- */}
      <NavBar />
      {/* ---------- HERO SECTION ---------- */}
      <section className="hero bg-linear-to-b from-blue-100 to-blue-0  py-7">
        <div className="container text-center max-w-4xl  mx-auto">
          <div className="hero-image   p-4 ">
            <img
              src={processTrackingImage1}
              alt="Trello process board preview"
              className="mx-auto rounded-xl  h-110 w-160"
            />
            <h1 className="text-4xl font-bold mb-4">
              Simplify Process Tracking with Trello
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Achieve business transparency effortlessly with a visual layout of
              all important tasks, due dates, <br />
              and owners in Trello.
            </p>
            <Link
              to="/signup"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md"
            >
              Try it Free
            </Link>
          </div>
        </div>
      </section>
      {/* ---------- FEATURES SECTION ---------- */}
      <section className=" text-center  p-10 border-red-500">
        <div>
          <h1 className="text-4xl  font-semibold">
            View progress to completion at a glance and <br />
            quickly identify blockers
          </h1>
          <br />
          <img
            className="h-125 w-220 ml-80 p-4  "
            src={processTrackingImage2}
            alt="logo"
          />
        </div>
        <div className=" p-20 border-purple-500 gap-12 text-center">
          <div className=" items-center  border-gray-500 p-5 ">
            <h1 className="text-4xl font-bold mb-1.5">
              Business process tracking your teams will love
            </h1>
            <p className="text-xl">
              Trello is rated #1 in user satisfaction for its ease of use and
              design. Choose from
              <Link
                to="/20-new-trello-label-colors"
                className=" text-blue-500 underline"
              >
                colorful labels,
              </Link>
              <br /> photos,{" "}
              <Link
                to="/delight-your-day-features"
                className=" text-blue-500 underline"
              >
                GIPHY stickers
              </Link>
              , and more to identify top priority tasks and pressing due dates
              in a <br /> friendly way.
            </p>
          </div>

          <div className="feature  flex mt-13 p-13">
            <div>
              <h2 className="text-3xl font-semibold text-left mb-2">
                View progress from any <br /> angle <hr className="mt-5" />
              </h2>
              <p className=" text-gray-600 text-left text-2xl">
                Toggle between{" "}
                <Link to="/views" className="text-blue-500 underline">
                  Timeline, Calendar, Table <br />
                  views, and more
                </Link>{" "}
                for different perspectives on <br /> how work is progressing.
                Group multiple <br /> process tracking boards into
                <Link to="/trello-workspace-views-dashcards">
                  {" "}
                  one master view
                </Link>{" "}
                <br /> to identify trends and see everything from <br />
                high-level project statuses down to day-to- <br />
                day tasks.
              </p>
            </div>
            <img
              src={processTrackingImage3}
              alt="Progress overview"
              className="mx-auto mb-4 mr-3 h-100 w-140"
            />
          </div>

          <div className="feature   p-13 flex">
            <img
              src={processTrackingImage4}
              alt="Customization"
              className="mx-auto mb-4 h-110 w-140 "
            />
            <div className="ml-10  ">
              <h2 className="text-3xl font-semibold text-2xl text-left mb-2 ">
                Customize Trello for your <br /> needs <hr className="mt-5" />
              </h2>
              <p className="text-gray-600 text-2xl text-left">
                Whether you’re tracking a simple “To-do,
                <br /> Doing, Done” process or a complex workflow, <br /> it’s
                easy to tailor a Trello board to your exact <br />{" "}
                specifications.{" "}
                <Link
                  to="/blog/add-ons/custom-fields-automation-with-butler"
                  className="text-blue-500 underline"
                >
                  Custom Fields
                </Link>{" "}
                and colorful <br /> labels provide even more ways to add <br />{" "}
                specialized context that is unique to your <br />
                process.
              </p>
            </div>
          </div>

          <div className="feature  p-8 flex">
            <div>
              <h2 className="text-3xl text-left font-semibold mb-2">
                Set it and forget it <hr className="mt-5" />
              </h2>
              <p className="text-gray-600 text-left">
                Ever waited for someone to finish something <br />
                before you could start only to find out they <br /> completed it
                weeks ago but forget to tell you? <br /> Trello{" "}
                <Link
                  to="/butler-automation"
                  className="text-blue-500 underline"
                >
                  automates process tracking—from
                </Link>{" "}
                <br /> notifying you once an action is performed to <br />{" "}
                tagging owners for the next step—so you never miss a beat.
              </p>
            </div>
            <img
              src={processTrackingImage5}
              alt="Integrations"
              className="mx-auto h-110 w-140   mr-2 mb-4"
            />
          </div>
        </div>
      </section>
      <section className="power-ups bg-linear-to-b from-blue-100 to-blue-0 py-16 flex items-center ">
        <div className="ml-40   border-red-500 p-4">
          <h1>TRELLO FOR PROCESS TRACKING</h1>
          <h1 className="text-3xl font-semibold text-black">
            Trello works with the tools you love
          </h1>
          <p className="text-2xl ">
            Trello Power-Ups connect your favorite apps directly to Trello for{" "}
            <br />
            single source of truth with zero additional effort. Want more niche{" "}
            <br />
            features in Trello? You can add those, too. With our gallery of 200+{" "}
            <br />
            Power-Ups, building a bespoke process-tracking system is <br />
            effortless.
          </p>
          <br />
          <Link to="/power-ups" className=" text-blue-600 text-xl underline ">
            Go to Power-Ups gallery
          </Link>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-10 w-full max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <Link
            key={idx}
            className="rounded shadow-2xl overflow-hidden bg-white"
            to={card.path}
          >
            <div className={`h-24 flex items-center ${card.bg}`}>
              <img
                src={card.image}
                alt=""
                className="h-10 w-14 mt-20  bg-white rounded-2xl"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-2xl mb-2">{card.title}</h3>
              <span className="block text-gray-500 text-sm mb-2">
                {card.category}
              </span>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>{" "}
      <br /> <br />
      {/* ---------- TEMPLATE / USE CASE SECTION ---------- */}
      <section className="templates py-16">
        <div className="container text-center max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-left mb-4">
            There’s a template for that
          </h2>
          <p className="text-xl text-left mb-10">
            Why start from scratch when there’s expertise you can trust?{" "}
            <Link to="/templates" className="text-blue-600 underline ">
              Trello templates
            </Link>{" "}
            get you <br /> going quickly with pre-built Trello boards that you
            can customize for your needs. You’ll <br /> also find Trello
            templates for everything from{" "}
            <Link
              className="text-blue-600 underline"
              to="/templates/team-management"
            >
              Team Management
            </Link>{" "}
            to{" "}
            <Link
              className="text-blue-600 underline"
              to="/templates/productivity"
            >
              Personal <br /> Productivity
            </Link>
            .
          </p>

          <div className="template-grid grid md:grid-cols-2  gap-10">
            <div className="template-item  p-6">
              <img
                src={processTrackingImage6}
                alt="Editorial Calendar"
                className="rounded-lg mb-4"
              />
              <br />
              <Link
                to="/templates/marketing/editorial-calendar-UQk1wa4a"
                className=" font-semibold text-2xl text-left mr-62 text-blue-500 underline"
              >
                Editorial Calendar
              </Link>
              <br />
              <p className="text-gray-600 text-xl text-left">
                See how Trello simplifies process tracking for a complex
                multi-step process like the creation, editing, and distribution
                of content.
              </p>
            </div>

            <div className="template-item p-2">
              <img
                src={processTrackingImage7}
                alt="Grant Tracking"
                className="rounded-lg mb-4"
              />
              <Link
                to="/templates/business/grant-tracking-template-GF6XHLuq"
                className=" font-semibold text-2xl mr-75 text-blue-500 underline"
              >
                Grant Tracking
              </Link>
              <p className="text-gray-600 text-left text-xl mt-3">
                A simple workflow for grant tracking that also works nicely for
                new business pitches or anything that involves the creation and
                submission of applications or proposals.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- SOCIAL PROOF / LOGOS SECTION ---------- */}
      <section className="social-proof py-16 align-center text-center">
        {" "}
        <br /> <br /> <br /> <br />
        <br />
        <h1 className="text-[20px] tracking-[1px] align-center ">
          Join a community of millions of users globally who are using Trello to
          get more done.
        </h1>{" "}
        <br />
        <img className="mx-auto" src={Total} alt="" /> <br />
        <br />
        <br />
      </section>
      {/* ---------- BLOG SECTION ---------- */}
      <section>
        <div className="min-h-screen w-full bg-[#e0f6ff] py-12 px-4">
          <h1 className="font-bold ml-34 text-[23px] mt-3">
            Project management tips from the pros.
          </h1>
          <p className="ml-34 text-[18px] text-gray-500 mt-2">
            Read the Trello blog to find ways to improve efficiency, <br />{" "}
            productivity, and collaboration.
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10 mt-16">
            {items.map((card, i) => (
              <div key={i} className="flex items-start gap-4">
                {card.icon}
                <div>
                  <h2 className="text-[23px] font-bold text-[#172B4D] mb-2 w-100">
                    {card.title}
                  </h2>
                  <p className="text-[#172B4D] mb-3 w-100 text-[18px]">
                    {card.description}
                  </p>
                  <a
                    href=""
                    className="underline text-blue-600 cursor-pointer text-[19px]"
                  >
                    {card.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---------- FOOTER ---------- */}
      <UniversalFooter />
    </div>
  );
};

export default ProcessTracking;
