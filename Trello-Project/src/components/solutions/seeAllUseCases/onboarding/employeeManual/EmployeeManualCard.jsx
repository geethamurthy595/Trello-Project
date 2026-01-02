import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import gd from "../../../../../assets/Google_Drive.png";
import AtlassianFooter from "../../../taskManagement/AtlassianFooter";
import c4 from "../../../../../assets/c4.jpg";
import i3 from "../../../../../assets/i3.png";
import c1 from "../../../../../assets/c1.jpg";
import c2 from "../../../../../assets/c2.jpg";
import i1 from "../../../../../assets/i1.png";
import i2 from "../../../../../assets/i2.png";
import EmployeeManualChildCard from "./EmployeeManualChildCard";
import NavBar from "../../../../NavBar";
const EmployeeManualCard = () => {
  const [selected, setSelected] = useState("HR & Operations");
  const categoryData = {
    "HR & Operations": [
      {
        image: c4,
        title: "Government Onboarding Process For New Hires",
        sub_title:
          "by Amy Campbell, Project Manager @Government Business Results, LLC",
        desc: "Government Business Results, LLC\nProper onboarding helps ensure a positive experience for new hires as they get up and running.",
        img1: i3,
        copied: "4k",
        seen: "18.8k",
        path: "/operations-hr/government-onboarding-process-for-new-hires-ekBfiIk9",
      },
      {
        image: c1,
        title: "Recruiting Pipeline",
        sub_title: "by Trello Team",
        desc: "Manage your recruiting pipeline from anticipated future needs to closed positions.Get a scannable view of your...",
        img1: i1,
        copied: "4k",
        seen: "18.8k",
        path: "/templates/operations-hr/recruiting-pipeline-uGtv1gr7",
      },
      {
        image: c2,
        title: "Risk Report",
        sub_title: "by Nicholas Bouchard, Content Marketer@ Unito",
        desc: "Easily track your project's potential risks and what you're doing to mitigate them.",
        img1: i2,
        copied: "4k",
        seen: "18.8k",
        path: "/operations-hr/risk-report-3P1bQkWI",
      },
    ],
  };

  return (
    <>
    <NavBar/>
      <main className=" ml-7 mt-18 flex mb-15  w-350 justify-around h-430 ">
        <section className="border-2 w-50 h-299"></section>
        <section className=" w-200  h-380  ">
          <div className="flex">
            <Link to="/templates">Template gallery</Link>/{" "}
            <Link to="/templates/operations-hr"> HR & Operations</Link>/
            <Link to="/templates/operations-hr/employee-manual-HbTEX5hb">
              {" "}
              Employee Manual
            </Link>
          </div>
          <div className="">
            <div className="flex  p-4 ">
              <img src={i1} alt="" className="h-17 mt-2 " w-17 />
              <div className="mt-1 ml-5">
                <p className="text-2xl font-medium">Employee Manual</p>
                <p>Created by Trello Team</p>
                <p className="flex   text-xs ">
                  <MdContentCopy className="mt-1" />
                  17.6 k copies
                  <IoEyeOutline className="mt-1" />
                  165.2K Views
                </p>
              </div>
              <div className="flex ml-40">
                <button className="w-20 h-10 bg-gray-200 rounded mt-3 mr-4">
                  Share
                </button>
                <button className=" bg-blue-500 rounded w-25 h-10 mt-3 ">
                  Use Template
                </button>
              </div>
            </div>
            <div className=" h-50 ">
              <p className="text-xl font-medium">About this template</p>
              <p>
                Dust off the age old employee manual for today’s modern
                workforce! Keep an always up-to-date employee manual that can
                easily be edited and reorganized in drag & drop.
              </p>
              <br />
              <p>
                Clearly categorize topics by creating separate lists for
                benefits, expenses, company policies, etc. and facilitate access
                to important documents securely by attaching them to cards with
                storage services like Google Drive, Dropbox, and Box.
              </p>
            </div>
            {<div className=" mb-2 rounded h-120 overflow-x-auto">
              <EmployeeManualChildCard preview={true}  />
              

            </div>}
            <Link to='/b/HbTEX5hb' className="mt-70 ml-170 text-blue-600 underline   ">view templates</Link>
            <div className="mt-10 h-60 ">
              <p className="text-xl font-medium">Power-Ups</p>
              <p>
                Add features to your boards and integrate your favorite apps
                right into Trello. Here are the Power-Ups enabled on this
                template:
              </p>
              <div className=" mt-3 h-15 w-45 flex ">
                <img src={gd} alt="" />
                <p className="font-semibold mt-2 ml-3 ">Google Drive</p>
              </div>
              <p>
                Access your Drive files for a project <br /> directly from its
                card, or create and <br /> attach new Drive files to a card.
              </p>
            </div>
            <div className="mt-14 bg-purple-100 p-3  h-110">
              <p className="text-xl">Related Templates</p>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 mt-10 gap-5">
                  {(categoryData[selected] || []).map((card, i) => (
                    <Link
                      to={card.path}
                      key={i}
                      className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md hover:bg-gray-50 cursor-pointer transition bg relative"
                    >
                      {/* Image */}
                      {card.image && (
                        <div
                          className="w-full h-20 rounded-md mb-3 bg-cover bg-center flex justify-start p-2"
                          style={{
                            backgroundImage: `url(${card.image})`,
                          }}
                        >
                          <div className="h-10 w-10 mt-13 bg-white rounded-md p-1  shadow-md  border">
                            <img
                              src={card.img1}
                              alt="overlay"
                              className="w-full h-full  object-contain rounded-md"
                            />
                          </div>
                        </div>
                      )}

                      {/* Title + Description */}
                      <h3 className="text-lg font-semibold text-gray-800 mt-10">
                        {card.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2 ">{card.sub_title}</p>
                      <p className="text-xs text-gray-500 mt-1 mb-2">{card.desc}</p>
                      <p className="flex mt-2 font-light text-xs ">
                        <MdContentCopy className="mt-1" />
                        {card.copied}
                        <IoEyeOutline className="mt-1" />
                        {card.seen}
                      </p>
                    </Link>
                  ))}

                  {/* Fallback Message */}
                  {(categoryData[selected] || []).length === 0 && (
                    <p className="text-gray-500">
                      No templates available for {selected}.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AtlassianFooter />
    </>
  );
};

export default EmployeeManualCard;
