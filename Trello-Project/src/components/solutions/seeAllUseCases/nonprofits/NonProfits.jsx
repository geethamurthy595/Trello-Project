import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../NavBar";

import Google_Drive from "../../../../assets/Google_Drive.png";
import Microsoft_Office from "../../../../assets/Microsoft_Office.svg";
import Slack from "../../../../assets/Slack.png";
import Gmail from "../../../../assets/Gmail.png";
import Salesforce from "../../../../assets/Salesforce.png";
import Xero from "../../../../assets/Xero.png";
import Horizontal from "../../../../assets/Horizontal.svg";

import UniversalFooter from "../../../UniversalFooter";

const NonProfits = () => {
  const cards = [
    {
      title: "Google Drive",
      category: "File management",
      description:
        "Search Google Drive right from Trello and attach relevant files directly to their corresponding tasks for richer context.",
      image: Google_Drive, // replace with your actual Google Drive image import
      bg: "bg-[#2684ff]",
      path: "/power-ups/55a5d916446f517774210006",
    },
    {
      title: "Microsoft Teams",
      category: "Communication & collaboration",
      description:
        "Receive Trello notifications or view and interact with Trello boards within Microsoft Teams.",
      image: Microsoft_Office, // replace with your actual Teams image import
      bg: "bg-[#8777d9]",
      path: "/power-ups", // update if you have the real path
    },
    {
      title: "Slack",
      category: "Communication & collaboration",
      description: "Keep your communication and collaboration apps connected.",
      image: Slack, // replace with your actual Slack image
      bg: "bg-[#8777d9]",
      path: "/power-ups/55a5d917446f51777421000a",
    },
    {
      title: "Gmail",
      category: "Communication & collaboration",
      description: "Send your emails to Trello for easy task management.",
      image: Gmail, // replace with your actual Gmail image
      bg: "bg-[#403294]",
      path: "/power-ups/6052d16c340ed23e9da083ed",
    },
    {
      title: "Salesforce",
      category: "Sales and support",
      description:
        "The Salesforce Power-Up for Trello brings information about opportunities, leads, contacts, and cases to your Trello cards.",
      image: Salesforce, // add your Salesforce image
      bg: "bg-[#4c9aff]",
      path: "/power-ups", // update if needed
    },
    {
      title: "Xero",
      category: "IT & project management",
      description: "Track your time on projects from a Trello card.",
      image: Xero, // add your Xero image
      bg: "bg-[#57d9a3]",
      path: "/power-ups", // update if needed
    },
  ];

  const items = [
    {
      icon: (
        <>
          <svg className="w-9" fill="currentColor" aria-hidden="true" viewBox="0 0 65 65">
            <path d="M10.002 25.73h45.359v27.34H10.002z" opacity=".5"></path>
            <g fill-rule="evenodd">
              <path d="M56.63.877H7.491h49.137Zm7.43 17.398h-64v39.146a7.456 7.456 0 0 0 7.457 7.456h49.087a7.456 7.456 0 0 0 7.457-7.456V18.275ZM27.514 31.211a2.796 2.796 0 0 0-3.954 0l-6.835 6.834-.099.105a2.796 2.796 0 0 0 .1 3.85l6.834 6.835.104.099a2.796 2.796 0 0 0 3.85-.1l.1-.104a2.796 2.796 0 0 0-.1-3.85l-4.858-4.857 4.858-4.858.1-.104a2.796 2.796 0 0 0-.1-3.85Zm13.67 0a2.796 2.796 0 0 0-4.053 3.85l.1.104 4.858 4.858-4.859 4.857a2.796 2.796 0 0 0-.1 3.85l.1.105a2.796 2.796 0 0 0 3.85.099l.104-.1L48.018 42a2.796 2.796 0 0 0 .1-3.85l-.1-.105-6.835-6.835Z"></path>
              <path
                d="M64.06 18.275h-64V8.333A7.456 7.456 0 0 1 7.518.877h49.087a7.456 7.456 0 0 1 7.457 7.456v9.942Zm-55.3-4.35a3.728 3.728 0 1 0 0-7.456 3.728 3.728 0 0 0 0 7.456Zm13.67-3.728a3.728 3.728 0 1 1-7.457 0 3.728 3.728 0 0 1 7.456 0Zm6.213 3.729a3.728 3.728 0 1 0 0-7.457 3.728 3.728 0 0 0 0 7.456Z"
                opacity=".5"
              ></path>
            </g>
          </svg>
        </>
      ),
      title: "Women Who Code, FTW: Empowering Global Teams With Trello",
      description:
        "Women Who Code guides women to achieve their career goals and stay in the tech industry long-term. Learn how their partnership team uses Trello to manage their global volunteers and events.",
    },
    {
      icon: (
        <>
          <svg className="w-9" fill="currentColor" aria-hidden="true" viewBox="0 0 65 65">
            <path
              d="M64.035 32.984c0 17.674-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32z"
              opacity=".5"
            ></path>
            <path d="M52.432 41.687c.432-2.65.656-5.37.656-8.14 0-3.165-.293-6.262-.852-9.264h10.602a32.024 32.024 0 0 1 1.197 8.702c0 3.016-.417 5.935-1.197 8.701zm8.505 5.052h-9.599a50.036 50.036 0 0 1-7.633 16.051 32.113 32.113 0 0 0 17.232-16.05zM29.199 1.11l.03-.003V19.23h-11.44A45.21 45.21 0 0 1 29.198 1.11zm.03 63.755a31.975 31.975 0 0 1-1.275-.137A45.154 45.154 0 0 1 17.43 46.74h11.798zm6.256-.063c-.4.043-.8.078-1.204.106V46.74H46.08a45.155 45.155 0 0 1-10.595 18.062zm-15.91-2.333A32.12 32.12 0 0 1 3.134 46.74h9.037a50.024 50.024 0 0 0 7.404 15.73zM1.232 41.686a32.024 32.024 0 0 1-1.197-8.701c0-3.016.417-5.935 1.198-8.702h10.04a50.53 50.53 0 0 0-.852 9.263c0 2.772.225 5.49.656 8.14zM3.134 19.23h9.356a50.088 50.088 0 0 1 8.253-16.196A32.11 32.11 0 0 0 3.133 19.23zM42.549 2.752A32.101 32.101 0 0 1 60.936 19.23H51.02a50.094 50.094 0 0 0-8.47-16.478zm-13.32 21.531H16.423a45.388 45.388 0 0 0-.95 9.263c0 2.78.25 5.5.731 8.14h13.023zm18.075 17.403c.48-2.64.732-5.36.732-8.14 0-3.175-.328-6.273-.95-9.263H34.28v17.403zM34.281 1.08v18.15h11.44a45.209 45.209 0 0 0-11.44-18.15z"></path>
          </svg>
        </>
      ),
      title: "How Animal Rescue Organizations Use Trello To Save Lives",
      description:
        "Discover how the dedicated employees of animal shelter and rescue organizations use Trello to give countless animals a second chance at life.",
      
    },
    {
      icon: (
        <>
          <svg className="w-9" fill="currentColor" aria-hidden="true" viewBox="0 0 65 65">
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
        </>
      ),
      title: "How to Manage Multiple Projects Without the Chaos",
      description:
        "Multiple projects don't have to mean mayhem. Learn tips and tricks for successfully managing multiple projects with less stress, chaos, and confusion.",
     
    },
    {
      icon: (
        <>
          <svg className="w-9" fill="currentColor" aria-hidden="true" viewBox="0 0 65 65">
            <g fill-rule="evenodd">
              <path
                d="M32.036 6.035C17.154 6.035 5.09 18.1 5.09 32.983S17.154 59.93 32.036 59.93c14.883 0 26.948-12.065 26.948-26.947S46.919 6.035 32.036 6.035zM29.51 11.65v15.087a6.739 6.739 0 1 0 5.227 12.42l10.096 10.196.094.09a2.526 2.526 0 0 0 3.496-3.645L38.27 35.545a6.74 6.74 0 0 0-3.707-8.808V11.65l-.003-.13a2.526 2.526 0 0 0-5.05.13z"
                opacity=".5"
              ></path>
              <path d="M32.036.984c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 5.052C17.153 6.036 5.09 18.1 5.09 32.983s12.064 26.948 26.947 26.948 26.947-12.065 26.947-26.948S46.92 6.036 32.036 6.036z"></path>
            </g>
          </svg>
        </>
      ),
      title: "5 Tips to Max Out Trello Automation Rules",
      description:
        "Learn how Trello’s automation rules reduce manual updates and save your team’s time for solving social issues.",
      
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
              src="https://images.ctfassets.net/rz1oowkt5gyp/7ej4yBOj0pUpIvp45pe8ZX/d24fcb60cabb1a920bd28b06e2666dff/Nonprofit_Hero_2x.png?w=2280&fm=webp"
              alt="Trello process board preview"
              className="mx-auto rounded-xl  h-110 w-160"
            />
            <h1 className="text-4xl font-bold mb-4">Trello for Nonprofits</h1>
            <p className="text-xl text-gray-600 mb-6">
              Trello is an easy-to-use tool for nonprofits and social
              enterprises managing work across diverse teams. Whether you’re
              driving fundraising campaigns, delivering programs and projects,
              managing volunteers, or communicating your impact, Trello helps
              you stay organized and collaborate with your team. Best of all,
              Trello is free to try and 75% off for{" "}
              <span className="underline text-blue-600">
                {" "}
                eligible nonprofits.{" "}
              </span>
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
        <div className=" text-center flex flex-col items-center ">
          <h1 className="text-4xl w-220 font-semibold ">
            Master remote collaboration and free up meeting time for
            mission-focused work
          </h1>
          <br />
          <img
            className="h-170 w-228  p-4  "
            src="https://images.ctfassets.net/rz1oowkt5gyp/dpVmczoTMbCYhIvYlxJkt/a24fc18991e38285391851ce79e88050/1_Project_Management_Trello_Board_2x.png?w=1936&fm=webp"
            alt="logo"
          />
        </div>
        <div className=" p-20 border-purple-500 gap-12 text-center">
          <div className=" items-center  border-gray-500 p-5 ">
            <h1 className="text-4xl font-bold mb-1.5">
              Stay on track with nonprofit staff and volunteers
            </h1>
            <p className="text-xl">
              Collaborate with confidence. Trello provides a variety of
              permissions options and
              <Link
                to="/20-new-trello-label-colors"
                className=" text-blue-500 underline"
              >
                enterprise-grade security
              </Link>
              <br />
              to make boards easy to share when you want and easy to gate when
              you don’t.
            </p>
          </div>

          <div className="feature  flex mt-13 p-13">
            <div>
              <h2 className="text-3xl font-semibold text-left mb-2">
                Organize for impact <hr className="mt-5" />
              </h2>
              <p className=" text-gray-600 w-130 text-left text-2xl">
                Trello’s system of boards, lists, and cards form easy building
                blocks to organize your team across functions for impact.
                Customize fields to capture the data needed for your social
                impact organization.
              </p>
            </div>
            <img
              src="https://images.ctfassets.net/rz1oowkt5gyp/6rksfjndAOjoJ5t6tNw0Tp/ea967f7b6dd5388164ffc6b1c8f88d99/2_New_Field_2x.png?w=942&fm=webp"
              alt="Progress overview"
              className="mx-auto mb-4 mr-3 h-100 w-140"
            />
          </div>

          <div className="feature p-13 flex">
            <img
              src="https://images.ctfassets.net/rz1oowkt5gyp/14v5NqOdCHe5hogygOwwpY/8c9d51d37bbaab9b5f52b068af0534fb/3_see_your_projects_from_every_angle_2x.png?w=1055&fm=webp"
              alt="Customization"
              className="mx-auto mb-4 h-110 w-140 "
            />
            <div className="ml-10  ">
              <h2 className="text-3xl font-semibold text-2xl text-left mb-2 ">
                See your projects from every angle <hr className="mt-5" />
              </h2>
              <p className="text-gray-600 w-130 text-2xl text-left">
                Switch between <Link to="/views/timeline" className=" text-blue-600 text-xl underline">Timeline view,</Link> spreadsheet-like <Link to="/views/table" className="text-blue-600 text-xl underline">Table view,</Link> or
                date-based <Link to="/views/calendar" className="text-blue-600 text-xl underline">Calendar view</Link> to manage your social impact priorities
                and see the most relevant tasks.
              </p>
            </div>
          </div>

          <div className="feature p-8 flex">
            <div>
              <h2 className="text-3xl w-130 text-left font-semibold mb-2">
                Stay on top of deadlines with notifications{" "}
                <hr className="mt-5" />
              </h2>
              <p className="text-gray-600 text-2xl w-130 text-left">
                Set due dates and reminders to ensure you never miss a grant
                application or project deadline. Improve accountability by
                assigning team members to tasks and sub-tasks.
              </p>
            </div>
            <img
              src="https://images.ctfassets.net/rz1oowkt5gyp/6JkN1LEkmZPfNTDTODE5od/5004db05f425fc29b2bd41a291ac0776/image-20221215-040653.png?w=1178&fm=webp"
              alt="Integrations"
              className="mx-auto h-110 w-140   mr-2 mb-4"
            />
          </div>
        </div>
      </section>
      <section className="power-ups bg-linear-to-b from-[#eafcff] to-blue-0 py-16 flex items-center ">
        <div className="ml-40 w-220  border-red-500 p-4">
          <h1 className="text-xl font-semibold">Trello for Nonprofits</h1>
          <h1 className="text-3xl font-semibold text-black p-1 text-start">
            Keep the tools you love
          </h1>
          <p className="text-xl ">
            Trello Power-Ups connect your favorite apps directly to Trello for a
            single source of truth with zero additional effort. Want more niche
            features in Trello? You can add those too. With our gallery of 200+
            Power-Ups, building a bespoke organization system for your nonprofit
            is effortless.
          </p>
          <br />
          <Link to="/power-ups" className=" text-blue-600 text-xl underline ">
            See more Trello Power-Ups
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
                className="h-9 w-9 mt-20  bg-white"
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
            Why start from scratch when there’s expertise you can trust? Get
            going quickly with a pre-built Trello board designed by our own
            social impact team.
          </p>

          <div className="template-grid grid md:grid-cols-2  gap-10">
            <div className="template-item  p-6">
              <img
                src="https://images.ctfassets.net/rz1oowkt5gyp/1IRztF0g02DdQOhL7WGidt/5a5a175bbf0c106be2c44193a8909346/Screenshot_2023-05-22_at_9.06.00_AM.png?w=2000&fm=webp"
                alt="Editorial Calendar"
                className="rounded-lg mb-4"
              />
              <br />
              <Link
                to="/templates/marketing/editorial-calendar-UQk1wa4a"
                className=" font-semibold text-2xl text-left text-blue-500 underline"
              >
                Nonprofit Project Management
              </Link>
              <br />
              <p className="text-gray-600 text-xl text-left">
                Big dreams turn into bigger results with a killer project plan.
                Use this basic structure to build your team's ideal workflow,
                for projects big or small.
            
              </p>
            </div>

            <div className="template-item p-2">
              <img
                src="https://images.ctfassets.net/rz1oowkt5gyp/jODTDNzfMkARbnjXyB6Il/b4f26f4746647534519de2690180a480/Screenshot_2023-05-22_at_9.06.32_AM.png?w=2000&fm=webp"
                alt="Grant Tracking"
                className="rounded-lg mb-4"
              />
              <Link
                to="/templates/business/grant-tracking-template-GF6XHLuq"
                className=" font-semibold text-2xl text-blue-500 underline"
              >
                Nonprofit Grant Management
                <br />
              </Link>
              <p className="text-gray-600 text-left text-xl mt-3">
                Manage grants and partnerships from opportunity to execution.
                Use <Link to="/blog/add-ons/custom-fields-automation-with-butler" className="font-semibold text-2xl text-blue-500 underline"Custom> </Link> Fields to easily identify grant type and size.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- SOCIAL PROOF / LOGOS SECTION ---------- */}
      <section className="social-proof py-16 align-center text-center">
        {" "}
        <h1 className="text-[20px] tracking-[1px] align-center ">
          Join a community of millions of users globally who are using Trello to
          get more done.
        </h1>{" "}
        <br /> <br />
        <img className="mx-auto" src={Horizontal} alt="" /> <br />
      </section>
      {/* ---------- BLOG SECTION ---------- */}
      <section>
        <div className="min-h-screen w-full bg-[#e0f6ff] py-12 px-4">
          <h1 className="font-bold ml-34 text-[23px] mt-3">
            Social impact tips from the pros
          </h1>
          <p className="ml-34 text-[18px] text-gray-500 mt-2">
            Read the Trello blog to learn ways you can improve nonprofit <br />{" "}
            efficiency, productivity, and collaboration.
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10 mt-16">
            {items.map((card, i) => (
              <div key={i} className="flex items-start gap-4">
                {card.icon}
                <div>
                  <h2 className="text-[23px] text-blue-800 underline font-bold mb-2 w-100">
                    {card.title}
                  </h2>
                  <p className="text-[#172B4D] mb-3 w-100 text-[21px]">
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

export default NonProfits;
