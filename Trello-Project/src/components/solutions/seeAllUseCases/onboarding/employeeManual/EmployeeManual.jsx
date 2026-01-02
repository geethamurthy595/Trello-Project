import React, { useState } from "react";
import NavBar from "../../../../NavBar";
import { IoSearch } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ima1 from "../../../../../assets/ima1.svg";
import AtlassianFooter from "../../../taskManagement/AtlassianFooter";
import c1 from "../../../../../assets/c1.jpg";
import c2 from "../../../../../assets/c2.jpg";
import c3 from "../../../../../assets/c3.jpg";
import c4 from "../../../../../assets/c4.jpg";
import c5 from "../../../../../assets/c5.jpg";
import c6 from "../../../../../assets/c6.png";
import c7 from "../../../../../assets/c7.jpg";
import c8 from "../../../../../assets/c8.jpg";
import c9 from "../../../../../assets/c9.jpg";
import c10 from "../../../../../assets/c10.jpg";
import c11 from "../../../../../assets/c11.jpg";
import c12 from "../../../../../assets/c12.png";
import c13 from "../../../../../assets/c13.jpg";
import i1 from "../../../../../assets/i1.png";
import i2 from "../../../../../assets/i2.png";
import attlasian from "../../../../../assets/AtlassianMini_Logotwo.svg";
import i3 from "../../../../../assets/i3.png";
import i4 from "../../../../../assets/i4.png";
import i5 from "../../../../../assets/i5.png";
import i6 from "../../../../../assets/i6.png";
import i7 from "../../../../../assets/i7.png";
import i8 from "../../../../../assets/i8.png";
import i9 from "../../../../../assets/i9.png";
import i10 from "../../../../../assets/i10.png";
import i11 from "../../../../../assets/i11.png";

import { MdContentCopy } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import empman from "../../../../../assets/empman.svg"
import empmanual from '../../../../../assets/empmanual.svg'

const EmployeeManual = () => {
  const [selected, setSelected] = useState("HR & Operations");
  let navigate = useNavigate();

  const categories = [
    "Business",
    "Design",
    "Education",
    "Engineering",
    "Marketing",
    "HR & Operations",
    "Personal",
    "Productivity",
    "Product Management",
    "Project Management",
    "Remote Work",
    "Sales",
    "Support",
    "Team Management",
  ];

  // 💡 Cards data for each category
  const categoryData = {

    "HR & Operations": [
      {
        image: c1,
        title: "Recruiting Pipeline",
        sub_title: "by Trello Team",
        desc: "Manage your recruiting pipeline from anticipated future needs to closed positions.Get a scannable view of your...",
        img1: i1,
        copied: '4k',
        seen: '18.8k',
        path: "/templates/operations-hr/recruiting-pipeline-uGtv1gr7",
      },
      {
        image: c2,
        title: "Risk Report",
        sub_title: "by Nicholas Bouchard, Content Marketer@ Unito",
        desc: "Easily track your project's potential risks and what you're doing to mitigate them.",
        img1: i2,
        copied: '4k',
        seen: '18.8k',
        path: "/operations-hr/risk-report-3P1bQkWI",
      },
      {
        image: c3,
        title: "30 60 90 Day Plan Template",
        sub_title: "by Atlassian",
        desc: "Help your new team members excel in their first 90 days.",
        img1: attlasian,
        copied: '4k',
        seen: '18.8k',
        path: "/operations-hr/30-60-90-day-plan-template-a597dVjV",
      },
      {
        image: c4,
        title: "Government Onboarding Process For New Hires",
        sub_title: "by Amy Campbell, Project Manager @Government Business Results, LLC",
        desc: "Government Business Results, LLC\nProper onboarding helps ensure a positive experience for new hires as they get up and running.",
        img1: i3,
        copied: '4k',
        seen: '18.8k',
        path: "/operations-hr/government-onboarding-process-for-new-hires-ekBfiIk9",
      },

      {
        image: c5,
        title: "Employee Manual",
        sub_title: "by Atlassian",
        desc: "Get your new hires up and running with this simple employee manual!",
        img1: i1,
        copied: '4k',
        seen: '18.8k',
        path: "/templates/operations-hr/employee-manual-HbTEX5hb",
        
      },

      {
        image: c6,
        title: "A Hiring & Recruiting board by Crmble",
        sub_title: "by Atlassian",
        desc: "A template with Power-Ups to help with hiring and recruiting.",
        img1: i4,
        copied: '4k',
        seen: '18.8k',
        path: "/operations-hr/a-hiring-&-recruiting-board-by-crmble-MVwm6SjI",
      },

      {
        image: c7,
        title: "Agile Talent Acquisition",
        sub_title: "by Atlassian",
        desc: "An agile approach to hiring and recruiting.",
        img1: i5,
        copied: '4k',
        seen: '18.8k',
        path: "/operations-hr/agile-talent-acquisition-f5R1dPEp",
      },

      {
        image: c8,
        title: "HR Team Learning Tracker",
        sub_title: "by Atlassian",
        desc: "A shared resource for the HR team to keep track of all of the courses they have completed.",
        img1: i6,
        copied: '4k',
        seen: '18.8k',
        path: "/operations-hr/hr-team-learning-tracker-Cl4iifhY",
      },

      {
        image: c9,
        title: "Inventory Management powered by Smart Fields",
        sub_title: "by Atlassian",
        desc: "Keep track of inventory using Smart Fields for quantity, price, value, and more.",
        img1: i7,
        copied: '4k',
        seen: '18.8k',
        path: "/operations-hr/inventory-management-powered-by-smart-fields-k8MDrQhF",
      },

      {
        image: c10,
        title: "Job Hunt",
        sub_title: "by Atlassian",
        desc: "Track your applications and the stage you're at with each company you've applied to!",
        img1: i11,
        copied: '4k',
        seen: '18.8k',
        path: "/operations-hr/job-hunt-d3yVjzRE",
      },
      {
        image: c11,
        title: "Onboarding Process For New Hires",
        sub_title: "by Atlassian",
        desc: "Ensure that every new hire has a meaningful onboarding experience.",
        img1: i8,
        copied: '4k',
        seen: '18.8k',
        path: "/operations-hr/onboarding-process-for-new-hires-16LjOiG1",
      },

      {
        image: c12,
        title: "Post A Job [Hiring Process]",
        sub_title: "by Atlassian",
        desc: "Keep your Indeed job postings organized and hire the best candidates possible.",
        img1: i9,
        copied: '4k',
        seen: '18.8k',
        path: "/operations-hr/post-a-job-[hiring-process]-FggEQHw1",
      },

      {
        image: c13,
        title: "Wellbeing Discussion Template",
        sub_title: "by Atlassian",
        desc: "Gauge the wellbeing of your team on a consistent basis with retrospective and ideation sessions.",
        img1: i10,
        copied: '4k',
        seen: '18.8k',
        path: "/operations-hr/wellbeing-discussion-template-xhm9hn9W",
      },
    ],
    Business: [
      {
        title: "Startup Plan",
        sub_title: "by Atlassian",
        desc: "Plan your business strategy effectively",
      },
      { title: "Client Tracker", desc: "Manage client projects easily" },
    ],
    Design: [
      { title: "Creative Brief", desc: "Outline design requirements clearly" },
      { title: "Design Sprint", desc: "Plan your sprint with efficiency" },
    ],
    Education: [
      { title: "Class Schedule", desc: "Organize classes and lessons" },
      {
        title: "Assignment Tracker",
        desc: "Keep track of student assignments",
      },
    ],
    // add more categories as needed...
  };

  return (
    <>
      <NavBar className="z-50 fixed" />
      <section className="min-h-screen flex gap-1  m-50 mt-14 mb-10 flex-row">
        {/* LEFT SIDEBAR */}
        <section className=" p-2 w-60 h-180  sticky top-15">
          <div>
            {/* Search Bar */}
            <div className="flex justify-between gap-1 border-1 mb-5 rounded-xl">
              <input
                className="h-8 w-full text-center outline-none rounded-xl"
                type="text"
                placeholder="Find Template"
              />
              <IoSearch className="mt-2 mr-2.5" />
            </div>

            {/* Featured Section */}
            <Link to='/templates' className="flex items-center gap-1 ml-1.5 font-medium mb-2">
              <FaRegStar /> Featured
            </Link>

            {/* Category List */}
            <ul className="flex flex-col p-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link to={categoryData["HR & Operations"][index]?.path}>
                    <button
                      onClick={() => setSelected(category)}
                      className={`
                      w-full text-left rounded-md px-3 py-2 cursor-pointer transition-colors duration-200
                      ${selected === category
                          ? "bg-blue-50 font-bold text-blue-700"
                          : "text-gray-800 hover:bg-gray-200"
                        }
                      `}
                    >
                      {category}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* RIGHT CONTENT AREA */}
        <section className=" p-6 flex-1 h-580">
          <div className="mb-4 text-sm">
            <Link to="/templates" className=" hover:underline">
              Template gallery
            </Link>{" "}
            /{" "}
            <Link to="" className="text-gray-600">
              {selected}
            </Link>
          </div>

          <div className="font-bold text-2xl flex items-center  mb-6">
            <img
              src={ima1}
              className="h-10 w-10 rounded border-2"
              alt={`${selected} templates`}
            />
            <span className="ml-2">{selected} Templates</span>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
            {(categoryData[selected] || []).map((card, i) => (
              <Link to={card.path}
                key={i}
                className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md hover:bg-gray-50 cursor-pointer transition bg relative"
              >
                {/* Image */}
                {card.image && (
                  <div
                    className="w-full h-28 rounded-md mb-3 bg-cover bg-center flex justify-start p-2"
                    style={{
                      backgroundImage: `url(${card.image})`,
                    }}
                  >
                    <div className="h-10 w-10 mt-20 bg-white rounded-md p-1 shadow-md  border">
                      <img
                        src={card.img1}
                        alt="overlay"
                        className="w-full h-full  object-contain rounded-md"
                      />
                    </div>
                  </div>
                )}

                {/* Title + Description */}
                <h3 className="text-lg font-semibold text-gray-800 mt-8">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-500 ">{card.sub_title}</p>
                <p className="text-xs text-gray-500 mt-1">{card.desc}</p>
                <p className="flex mt-2 font-light text-xs "><MdContentCopy className="mt-1" />{card.copied}<IoEyeOutline className="mt-1" />{card.seen}</p>
              </Link>
            ))}

            {/* Fallback Message */}
            {(categoryData[selected] || []).length === 0 && (
              <p className="text-gray-500">
                No templates available for {selected}.
              </p>
            )}
          </div>
          <hr className="mt-10 p-2" />

          <br />
          <div className="flex">
            <div className=" p-7">
              <p className="text-2xl font-semibold">What's Trello?</p>
              <p className="mt-7">
                Trello lets you work more collaboratively and get more done. <br /> Trello’s boards, lists, and cards enable you to organize and <br /> prioritize your projects in a fun, flexible, and rewarding way.
              </p> <br />
              <div className="flex"><Link to='/signup?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3FreturnUrl%3D%252F%26display%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D%26aaOnboarding%3D%26updateEmail%3D%26traceId%3D%26ssoVerified%3D%26createMember%3Dtrue%26jiraInviteLink%3D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D' className="bg-blue-600 p-2 text-amber-50  rounded" >Sign up-it's free</Link> <Link to="/" className="underline ml-6 mt-1.5">Learn more</Link></div>
            </div>
            <img src={empman} className="ml-7" alt="" />
          </div>
          <hr className="mt-10 text-zinc-200 p-2" />
          <div className="flex">
            <p className="text-xs mt-2.5">HR and Operations teams are at the heart of any strong business. Ensure the healthy development of employees and the company as a whole with these HR templates for team onboarding, new hire manuals, company culture manifestos, and more. Repeat tried-and-true processes easily with Trello HR templates, so you can focus on what matters most: fostering a great place to work.</p>
            <img src={empmanual} className="h-25 w-17 ml-4" alt="" />
          </div>
        </section>
      </section>
      <hr className="text-gray-200" /> <br />
      <select className="border-1 text- rounded ml-170 mb-3 p-2" name="english" id="1">
        <option value="english">English</option>
        <option value="portgues">portugues</option>
        <option value="francais">Francais</option>
      </select>
      <AtlassianFooter className="" />
    </>
  );
};

export default EmployeeManual;
