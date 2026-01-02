import React from "react";
import NavBar from "../../../NavBar";
import TrelloBigPic from "../../../../assets/TrelloBigPictureTracker_2x.png";
import TrelloBoard from "../../../../assets/TrelloBoard_CompanyOverview_2x.webp";
import ulilo from "../../../../assets/UIillo_Views_Timeline_2x.webp";
import dashcard from "../../../../assets/UIillo_Dashcards_2x.webp";
import addmembers from "../../../../assets/UIillo_CardBack_AddMembers_2x.webp";
import img from "../../../../assets/Slack_Mark.svg";
import img1 from "../../../../assets/Google_Drive-Logo_64x64.svg";
import img2 from "../../../../assets/confluence-icon-gradient-blue-64x64.svg";
import img3 from "../../../../assets/Jira-icon-blue_64x64.svg";
import img4 from "../../../../assets/Microsoft_Office_Teams_64x64.svg";
import img5 from "../../../../assets/Unito.svg";
import img6 from "../../../../assets/Template_CompanyOverview_2x.webp";
import img7 from "../../../../assets/Template_Kanban_2x.webp";
import img8 from "../../../../assets/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg";
import UniversalFooter from "../../../UniversalFooter";
import { Link } from "react-router-dom";

const ProjectStatusDashboard = () => {
  let card = [
    {
      space: "",
      color: "rgb(255, 196, 0)",
      image: img,
      h1: "slack",
      h2: "Communication & collaboration",
      p: "Attach Slack conversation to Trello cards or automatically send Trello upadates to Slack channels and direct messages",
      path:"/power-ups/55a5d917446f51777421000a"
    },
    {
      space: "",
      color: "rgb(38, 132, 255)",
      image: img1,
      h1: "Google Drive",
      h2: "file management",
      p: "browse Google Drive from within Trello to quickly attach relevant files to corresponding Trello cards",
      path:"/power-ups/55a5d916446f517774210006"
    },
    {
      space: "",
      color: "rgb(0, 199, 229)",
      image: img2,
      h1: "Confluence",
      h2: "Communication & collaboration",
      p: "Create new Confluence pages or add existing to Trello cards for knowledge documentation.",
      path:"/power-ups/586be37142f94dc0871fbcbb/confluence-cloud"
    },
    {
      space: "",
      color: "rgb(38, 132, 255)",
      image: img3,
      h1: "Jira",
      h2: "Developer tools",
      p: "Connect jira and Trello to help all your teams work better together",
      path:"/power-ups"
    },
    {
      space: "",
      color: "rgb(135, 119, 217)",
      image: img4,
      h1: "Microsoft Teams",
      h2: "Communication & collaboration",
      p: "Receive Trello notification or view and interact with Trello boards within Microsoft Teams",
      path:"/power-ups/6052d130068a8c0de7b022b4",
    },
    {
      space: "",
      color: "rgb(87, 217, 163)",
      image: img5,
      h1: "Unito Card Mirroring",
      h2: "Automation",
      p: "Duplicate cards to any other board and automatically keep all versions synced when you make changes to one",
      path:"/power-ups/5c75708a72eecc4565ecacf5/2-way-card-mirror-with-unito"
    },
  ];
  let card2 = [
    {
      img: img6,
      a: "Company Overview",
      p1: "Track current projects and big initiatives across departments, all in one place.",
      path:"/templates/business/company-overview-lGQZunS7"
    },
    {
      img: img7,
      a: "Kanban Template",
      p1: "A simple Kanban template categorizes work into buckets so you can keep an eye on multiple work streams at once.",
      path:"/templates/engineering/kanban-template-LGHXvZNL"
    },
  ];
  let card3 = [
    {
      img: (
        <svg fill="currentColor" aria-hidden="true" viewBox="0 0 65 65">
          <g fill-rule="evenodd" opacity=".5">
            <path d="M28.467 20.96a7.456 7.456 0 0 1-7.456 7.456H7.962A7.456 7.456 0 0 1 .506 20.96V7.91A7.456 7.456 0 0 1 7.962.455h13.049a7.456 7.456 0 0 1 7.456 7.456zM28.467 56.999a7.456 7.456 0 0 1-7.456 7.456H7.962A7.456 7.456 0 0 1 .506 57V43.95a7.456 7.456 0 0 1 7.456-7.456h13.049a7.456 7.456 0 0 1 7.456 7.456zM64.506 20.96a7.456 7.456 0 0 1-7.456 7.456H44a7.456 7.456 0 0 1-7.456-7.456V7.91A7.456 7.456 0 0 1 44 .455H57.05a7.456 7.456 0 0 1 7.456 7.456z"></path>
          </g>
          <path d="M19.767 6.046a2.796 2.796 0 0 1 .132 5.59l-.132.002H9.204a2.796 2.796 0 0 1-.131-5.59l.131-.002zM14.486 16.61a2.796 2.796 0 0 1 .131 5.59l-.131.003H9.204a2.796 2.796 0 0 1-.131-5.59l.131-.003zM19.767 42.086a2.796 2.796 0 0 1 .132 5.59l-.132.002H9.204a2.796 2.796 0 0 1-.131-5.589l.131-.003zM14.486 52.65a2.796 2.796 0 0 1 .131 5.589l-.131.003H9.204a2.796 2.796 0 0 1-.131-5.59l.131-.003zM55.806 6.046a2.796 2.796 0 0 1 .132 5.59l-.132.002H45.243a2.796 2.796 0 0 1-.131-5.59l.131-.002zM50.525 16.61a2.796 2.796 0 0 1 .132 5.59l-.132.003h-5.282a2.796 2.796 0 0 1-.131-5.59l.131-.003z"></path>
          <path
            fill-rule="evenodd"
            d="M64.506 56.999a7.456 7.456 0 0 1-7.456 7.456H44A7.456 7.456 0 0 1 36.545 57V43.95A7.456 7.456 0 0 1 44 36.494H57.05a7.456 7.456 0 0 1 7.456 7.456zm-8.7-9.01a2.796 2.796 0 0 1 .133 5.59l-.132.003h-2.485v2.485a2.796 2.796 0 0 1-5.59.132l-.003-.132v-2.485h-2.485a2.796 2.796 0 0 1-.132-5.59l.132-.003h2.485v-2.485a2.796 2.796 0 0 1 5.59-.132l.003.132v2.485z"
          ></path>
        </svg>
      ),
      a1: "Bring more work together: Saved Trello views and Dashcards",
      p2: "Learn how to manage all of your work in one place with real-time tracking and alerts.",
      path1:"/blog/trello/trello-workspace-views-dashcards"
    },
    {
      img: (
        <svg fill="currentColor" aria-hidden="true" viewBox="0 0 65 64">
          <path
            d="m41.026 15.924 7.058 7.057 14.18-14.18a1.859 1.859 0 0 0 0-2.628l-4.429-4.43a1.858 1.858 0 0 0-2.628 0zM41.925 4.171a3.717 3.717 0 1 1-7.434 0 3.717 3.717 0 0 1 7.434 0z"
            opacity=".5"
          ></path>
          <path d="m48.084 22.982-7.057-7.058L1.811 55.14a4.99 4.99 0 1 0 7.058 7.057zm2.862-16.977-9.919 9.92zM56.037 31.746c.287-.11.604-.11.891 0l6.628 2.552c1.058.408 1.058 1.905 0 2.313l-6.628 2.552c-.287.11-.604.11-.89 0l-6.628-2.552c-1.058-.408-1.058-1.905 0-2.313z"></path>
          <path d="M55.327 28.382c.407-1.059 1.904-1.059 2.312 0l2.552 6.627c.11.287.11.604 0 .89l-2.552 6.628c-.408 1.058-1.905 1.058-2.313 0L52.775 35.9a1.239 1.239 0 0 1 0-.89zM23.205 10.064c.287-.11.604-.11.891 0l6.628 2.553c1.058.407 1.058 1.904 0 2.312l-6.628 2.552a1.24 1.24 0 0 1-.89 0l-6.628-2.552c-1.058-.408-1.058-1.905 0-2.312z"></path>
          <path d="M22.494 6.7c.408-1.058 1.905-1.058 2.313 0l2.552 6.627c.11.287.11.604 0 .891l-2.552 6.628c-.408 1.058-1.905 1.058-2.312 0l-2.553-6.628a1.239 1.239 0 0 1 0-.89z"></path>
        </svg>
      ),
      a1: "How to manage and inspire your team with Trello",
      p2: "Ways to keep founders, partners, and other interested parties informed of progress and performance.",
      path1:"/blog/trello/trello-manage-team"
    },
    {
      img: (
        <svg fill="currentColor" aria-hidden="true" viewBox="0 0 65 65">
          <path
            d="M15.132 52.75a29.697 29.697 0 0 0 19.403 7.177c16.466 0 29.815-13.349 29.815-29.815V7.238a6.94 6.94 0 0 0-6.94-6.94H34.535C18.07.298 4.721 13.646 4.721 30.112a29.695 29.695 0 0 0 6.985 19.178L1.341 59.655l-.097.101C.174 60.91.042 62.55.966 63.473c.95.95 2.66.782 3.817-.376z"
            opacity=".5"
          ></path>
          <path d="M41.837.297h-7.302c-2.738 0-5.39.37-7.91 1.06v33.046L41.837 19.19zm-20.08 2.869C11.686 7.95 4.722 18.218 4.722 30.11a29.696 29.696 0 0 0 7.06 19.267c.118-.189.256-.371.416-.543l.097-.1 9.464-9.465zm-6.683 49.533a29.698 29.698 0 0 0 19.461 7.227c11.893 0 22.16-6.964 26.945-17.036H25.022l-9.286 9.286c-.206.206-.429.38-.662.523zm48.215-14.676a29.847 29.847 0 0 0 1.06-7.912v-7.3H45.102L29.889 38.022zm1.06-20.08V7.598a7.272 7.272 0 0 0-.77-3.266L49.97 17.943zM60.077.953a7.275 7.275 0 0 0-3.028-.656H46.704v14.027z"></path>
        </svg>
      ),
      a1: "What to do when your company has growing pains",
      p2: "Trello’s cofounder discusses how to handle communication breakdowns and difficulties as companies grow.",
      path1:"/blog/leadership/manage-growing-pains-during-team-growth"
    },
    {
      img: (
        <svg fill="currentColor" aria-hidden="true" viewBox="0 0 65 65">
          <path
            d="M17.084 13.613a2.796 2.796 0 0 0 .131-5.589l-.131-.003H11.49a2.796 2.796 0 0 0-.131 5.59l.131.002zM31.375 13.613a2.796 2.796 0 0 0 .131-5.589l-.131-.003h-5.593a2.796 2.796 0 0 0-.131 5.59l.131.002zM45.666 13.613a2.796 2.796 0 0 0 .131-5.589l-.131-.003h-5.593a2.796 2.796 0 0 0-.131 5.59l.131.002z"
            opacity=".5"
          ></path>
          <g fill-rule="evenodd">
            <path d="M64.927 8.332v39.146h-64V8.332A7.456 7.456 0 0 1 8.385.876h49.087a7.456 7.456 0 0 1 7.456 7.456zM19.88 10.818a2.796 2.796 0 0 1-2.796 2.796H11.49l-.132-.003a2.796 2.796 0 0 1 .132-5.59h5.592l.132.004a2.796 2.796 0 0 1 2.664 2.793zm11.495 2.796a2.796 2.796 0 0 0 .132-5.59l-.132-.003h-5.592a2.796 2.796 0 0 0-.132 5.59l.132.003zm17.087-2.796a2.796 2.796 0 0 1-2.796 2.796h-5.592l-.132-.003a2.796 2.796 0 0 1 .132-5.59h5.592l.132.004a2.796 2.796 0 0 1 2.664 2.793z"></path>
            <path
              d="M57.47 64.876a7.456 7.456 0 0 0 7.457-7.456v-9.942h-64v9.942a7.456 7.456 0 0 0 7.457 7.456zM32.929 53.381a2.796 2.796 0 0 1 .131 5.59l-.131.003H11.49a2.796 2.796 0 0 1-.132-5.59l.132-.003zm19.261-1.553a4.35 4.35 0 1 1 0 8.699 4.35 4.35 0 0 1 0-8.699z"
              opacity=".5"
            ></path>
          </g>
        </svg>
      ),
      a1: "Close those open tabs: Do it all from Trello",
      p2: "Eliminate information silos and context switching by connecting app experiences for easy reference.",
      path1:"/blog"
    },
  ];
  return (
    <>
      <NavBar />
      <div className=" w-full h-fit bg-gradient-to-b from-[#fff2fb] to-[#ffffff] overflow-hidden">
        <img
          src={TrelloBigPic}
          alt=""
          className="h-3/4 w-[50%] m-auto mt-18 "
        />
        <div className="text-left m-auto">
          <h1 className="text-5xl font-medium leading-tight text-center text-[rgb(9, 30, 66)]">
            See the sum and all of its parts with Trello as <br />
            your project status dashboard
          </h1>
          <br />
          <h1 className="text-xl text-center">
            Whether it’s a company roadmap, quarterly plan, or your own
            collection of projects, Trello makes <br />
            it easy to understand status across multiple priorities.
          </h1>
        </div>{" "}
        <br />
        <div className="flex items-center justify-center">
          <Link to="/signup" className="flex items-center justify-center p-2 border-1 text-base rounded-md w-24 bg-[#0065FF] border-[#0065FF] text-white font-xl">
            Try it free
          </Link>
        </div>
      </div>
      <div className="w-full h-full bg-[rgb(255, 255, 255)] mt-24">
        <h1 className="text-4xl font-medium text-[rgb(9,30,66)] text-center leading-snug tracking-tight">
          How to build a customized project status <br /> dashboard with Trello
        </h1>
        <br />
        <img src={TrelloBoard} alt="" className="h-3/4 w-[68%] m-auto " />
      </div>
      <div className="w-full h-full ">
        <h1 className="text-4xl leading-normal font-medium mt-18 text-center">
          Get insight without getting in the weeds
        </h1>
        <h1 className="text-xl leading-normal text-center tracking-wide">
          From kickoff to completion, Trello is the easiest way to provide a
          high-level <br /> overview of what's happening across your
          organization. An eye-catching <br /> visual layout helps you find
          information fast and allows you to dig into the <br /> details when
          you want them. <Link to="/trust" className="underline text-[rgb(0,82,204)] ">Enterprise-grade security</Link> keeps it all safe.
        </h1>
      </div>
      <div className="w-full h-full">
        <h1 className="text-4xl leading-snug font-medium mt-32 ml-[9%]">
          Gain fresh perspective
        </h1>
        <hr class="my-4 h-px bg-current opacity-20 border-0 w-[32%] ml-[9%]" />
        <p className="text-xl leading-normal font-normal ml-[9%]">
          Toggle between <Link to="/views" className="underline text-[rgb(0,82,204)] ">five Trello views</Link> to gain new <br /> insights. See
          competing priorities in <Link to="/views/timeline" className="underline text-[rgb(0,82,204)]">Time line <br />view</Link>, what’s coming next month
          in <Link to="/views/calendar" className="underline text-[rgb(0,82,204)]">Calendar <br /> view</Link>, or group multiple projects into one <br />{" "}
          master view to identify trends and potential <br /> blockers.
        </p>
        <img
          src={ulilo}
          alt=""
          className="h-[380px] w-[550px] ml-[50%] mt-[-22%]"
        />
      </div>
      <div className="w-full h-full">
        <img
          src={dashcard}
          alt=""
          className="h-[350px] w-[460px] ml-[9%] mt-[8%]"
        />
        <h1 className="text-4xl leading-snug font-medium mt-[-24%] ml-[50%]">
          Customize Trello for your org
        </h1>
        <hr class="my-4 h-px bg-current opacity-20 border-0 w-[42%] ml-[50%]" />
        <p className="text-xl leading-normal font-normal ml-[50%]">
          Trello’s boards and cards mimic a bulletin board and <br /> sticky
          notes, making it easy for anyone to navigate. <br /> <Link to="/blog/add-ons/custom-fields-automation-with-butler" className="underline text-[rgb(0,82,204)]">Custom Fields</Link> and
          <Link to="/blog/trello/20-new-trello-label-colors" className="underline text-[rgb(0,82,204)]">colorful labels </Link>call attention to <br /> important items. <Link to="/power-ups/6048e897c73d032a983e2a7c/dashcards" className="underline text-[rgb(0,82,204)]">Dashcards</Link>
          provide a helpful summary <br /> of project numbers and alert you if
          things need <br /> attention.
        </p>
      </div>
      <div className=" w-full h-[520px]">
        <h1 className="text-4xl leading-snug font-medium mt-54 ml-[9%]">
          See everything in Trello, <br /> even if it lives elsewhere
        </h1>
        <hr class="my-4 h-px bg-current opacity-20 border-0 w-[32%] ml-[9%]" />
        <p className="text-xl leading-normal font-normal ml-[9%]">
          Paste URLs into Trello and see <Link to="/blog/trello/trello-card-types-embed-links" className="underline text-[rgb(0,82,204)]">real-time <br /> previews</Link> of websites,
          Google Slide <br /> presentations, Loom videos, Jira issues, and{" "}
          <br /> more. You can even edit work in other tools <br /> from within
          Trello, including Google Docs, <br /> <Link to="/software/confluence" className="underline text-[rgb(0,82,204)]">Confluence</Link> pages, and Miro
          boards.
        </p>
        <img
          src={addmembers}
          alt=""
          className="h-[450px] w-[550px] ml-[50%] mt-[-26%]"
        />
      </div>
      <div className=" h-[380px] bg-gradient-to-b from-[rgb(255,242,251)] to-white bg-no-repeat text-[rgb(9,30,66)] scroll-mt-[72px]">
        <div className="h-full w-[800px] ml-[9%] pt-20">
          <h1 className="text-xs leading-snug font-bold tracking-wider">
            TRELLO FOR PROJECT STATUS DASHBOARD
          </h1>
          <h1 className="leading-relaxed text-2xl font-semibold tracking-wider">
            Trello works with the tools you love
          </h1>
          <p className="leading-snug text-xl tracking-wide">
            Trello Power-Ups connect your favorite apps directly to Trello for a{" "}
            <br /> single source of truth with zero additional effort. Want more
            niche <br /> features in Trello? You can add those too. With our
            gallery of 200+ <br /> Power-Ups, building a bespoke project status
            dashboard is <br />
            effortless.
          </p>
          <br />
          <Link
            to="/power-ups"
            className="underline text-[rgb(0,82,204)] text-xl font-normal"
          >
            Go to Power-Ups gallery
          </Link>
          <br />
        </div>
      </div>
      <div className=" w-full h-[600px]  grid grid-cols-3 gap-10 pl-30 pr-30 ">
        {card.map((item) => (
        <Link to={item.path}>
          <div className="w-[350px] h-[250px] leading-snug rounded-lg shadow-xl">
            <div
              className=" h-12 w-full rounded-t-lg"
              style={{ backgroundColor: item.color }}
            >
              {item.space}
            </div>
            <img
              src={item.image}
              alt=""
              className="leading-[40px] mt-[-20px] h-[50px] w-[50px] ml-[20px] bg-[#FFFFFF] p-2 rounded-lg"
            />
            <h1 className="ml-[20px] text-xl font-semibold leading-[60px]">
              {item.h1}
            </h1>
            <h2 className="ml-[20px] text-base text-[#5e6c84] leading-[25px]">
              {item.h2}
            </h2>
            <p className="ml-[20px] leading-[25px]">{item.p}</p>
          </div>
          </Link>
        ))}
      </div>
      <div className=" h-[330px] w-full">
        <div>
          <h1 className="text-4xl leading-[65px] font-medium pt-12 ml-[9%]">
            There’s a template for that
          </h1>
          <p className="text-xl leading-[30px] font-normal ml-[9%]">
            Why start from scratch when there’s expertise you can trust? Trello{" "}
            <br /> templates get you going quickly with pre-built Trello boards
            that you can <br /> customize for your needs. You’ll also find
            Trello templates for everything <br />
            from Team Management to Personal Productivity.
          </p>
          <br />
          <Link
              to="/templates"
            className="underline text-[rgb(0,82,204)] text-xl font-normal ml-[9%]"
          >
            Go to template gallery
          </Link>
        </div>
      </div>
      <div className=" h-[430px] w-full  grid grid-cols-2 gap-14 pl-30 pr-30">
        {card2.map((item1) => (
          <div className="">
            <img src={item1.img} alt="" className="h-[250px] w-[550px]" />
            <Link
              to={item1.path}
              className="underline text-[rgb(0,82,204)] text-xl font-medium leading-[60px]"
            >
              {item1.a}
            </Link>
            <p className="text-xl leading-[30px] font-normal ">{item1.p1}</p>
          </div>
        ))}
      </div>
      <div className=" h-[200px] w-full">
        <p className="text-center text-xl font-normal">
          Join a community of millions of users globally who are using Trello to
          get more done.
        </p>
        <img src={img8} alt="" className="ml-[15%] pt-8" />
      </div>
      <div className="h-[700px] w-full bg-[rgb(255,242,251)]">
        <div className="w-[800px] ml-[9%] pt-[5%]">
          <h1 className="text-xl font-medium">
            Teamwork and onboarding tips from the pros
          </h1>
          <p className="text-xl">
            Read the Trello blog to learn ways you can improve team health,
            <br /> productivity, and collaboration.
          </p>
        </div>
        <div className=" grid grid-cols-2 gap-5 pl-30 pr-30 pt-10">
          {card3.map((item2) => (
            <div className=" grid grid-cols-2">
              <div className=" h-[220px] w-[500px] flex items-start p-4 gap-3">
                <div className="h-[50px] w-[50px] flex">
                  {item2.img}
                </div>
                    <div className="flex flex-col">
                <Link
                  to={item2.path1}
                  className="underline text-[rgb(0,82,204)] text-xl font-medium ml-2 leading-[30px]"
                >
                  {item2.a1}
                </Link>
                <p className="leading-[30px] text-xl pl-2">{item2.p2}</p><br />
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <UniversalFooter/>
    </>
  );
};

export default ProjectStatusDashboard;
