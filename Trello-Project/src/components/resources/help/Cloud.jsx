import React, { useState } from "react";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import { data } from "react-router-dom";
import jira from "../../../assets/JiraSoftware.svg";
import JiraSoftware from "../../../assets/DataC_Jira_Software.svg";

import JiraServiceManagement from "../../../assets/JiraServiceManagement.svg";

import Confluence from "../../../assets/Confluence.svg";
import jiracore from "../../../assets/DataC_JiraCore.svg";

import Bitbucket from "../../../assets/Bitbucket.svg";
import Trello from "../../../assets/Trello_mark.svg";

const Cloud = () => {
  let [cloudActive, setCloudActive] = useState(true);
  let [dataCenterActive, setdataCenterActive] = useState(false);
  let handleDatacenterActive = () => {
    setCloudActive(false);
    setdataCenterActive(true);
  };
  let handleCloudActive = () => {
    setdataCenterActive(false);
    setCloudActive(true);
  };

  return (
    <>
      <section className="h-[400px] bg-white absolute z-10 w-full flex">
        <div>
          <div className="ml-38">
            <div className="w-full mt-5 flex gap-10">
              <h2
                className={`${
                  cloudActive ? "text-[#0052CC]" : "text-gray-500"
                } text-medium font-medium cursor-pointer`}
                onClick={handleCloudActive}
              >
                Cloud
              </h2>
              <h2
                className={`${
                  dataCenterActive ? "text-[#0052CC] " : "text-gray-500"
                } text-medium font-medium cursor-pointer`}
                onClick={handleDatacenterActive}
              >
                Data Center
              </h2>
              <br />
            </div>

            <div className="h-0.5 bg-gray-300 flex w-220 mb-3 ">
              <div
                className={`${
                  cloudActive ? "bg-[#0052CC]" : ""
                } h-0.5 w-[48px]`}
              ></div>
              <div
                className={`${
                  dataCenterActive ? "bg-[#0052CC]" : ""
                } h-0.5 ml-9 w-[84px]`}
              ></div>
            </div>
          </div>
          <div className=" ml-38 mt-[50px]">
            <div className="flex justify-evenly">
              <div className="bg-gray hover:bg-gray-200 px-10 py-5 text-center ">
                <img
                  width={90}
                  height={50}
                  src={`${cloudActive ? JiraSoftware : ""} ${
                    dataCenterActive ? jira : ""
                  }`}
                  alt=""
                />
                <h5 className="text-medium font-light mt-5">
                  {cloudActive ? "Jira Software" : ""}
                  {dataCenterActive ? "Jira Software" : ""}
                </h5>
              </div>
              <div className="bg-gray hover:bg-gray-200 px-10 py-5 text-center ">
                <img
                  width={90}
                  height={50}
                  src={`${cloudActive ? JiraServiceManagement : ""} ${
                    dataCenterActive ? JiraServiceManagement : ""
                  }`}
                  alt=""
                />
                <h5 className="text-medium font-light mt-5">
                  Jira Service <br />
                  Management
                </h5>
              </div>
              <div className="bg-gray hover:bg-gray-200 px-10 py-5 text-center ">
                <img
                  width={`${cloudActive ? 90 : ""} ${
                    dataCenterActive ? 70 : ""
                  }`}
                  height={50}
                  src={`${cloudActive ? Confluence : ""} ${
                    dataCenterActive ? jiracore : ""
                  }`}
                  alt=""
                />
                <h5 className="text-medium font-light mt-5">
                  {cloudActive ? "Confluence" : ""}
                  {dataCenterActive ? "Jira Core" : ""}
                </h5>
              </div>
              <div className="bg-gray hover:bg-gray-200 px-10 py-5 text-center ">
                <img
                  width={90}
                  height={50}
                  src={`${cloudActive ? Bitbucket : ""} ${
                    dataCenterActive ? Confluence : ""
                  }`}
                  alt=""
                />
                <h5 className="text-medium font-light mt-5">
                  {cloudActive ? "BitBucket" : ""}
                  {dataCenterActive ? "Confluence" : ""}
                </h5>
              </div>
              <div className="bg-gray hover:bg-gray-200 px-10 py-5 text-center ">
                <img
                  width={90}
                  height={50}
                  src={`${cloudActive ? Trello : ""} ${
                    dataCenterActive ? Bitbucket : ""
                  }`}
                  alt=""
                />
                <h5 className="text-medium font-light mt-5">
                  {cloudActive ? "Trello" : ""}
                  {dataCenterActive ? "BitBucket" : ""}
                </h5>
              </div>
            </div>
          </div>

          <div className="mt-6 px-2 ml-38">
            <a
              href="#"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              See all other apps
            </a>
          </div>
        </div>
        <div className="bg-gray-100 w-[500px] p-7 font-xs text-medium ml-30">
          <ul className=" mt-4">
            <li className="hover:underline">Log in to account</li>
            <div className="flex items-center gap-3">
              <HiQuestionMarkCircle className="text-2xl font-light text-gray-500" />
              <li className="hover:underline">Contact support</li>
            </div>
            <li className="hover:underline">Training & Certification</li>
            <li className="hover:underline">Atlassian Migration Program</li>
            <li className="hover:underline">GDPR guides</li>
            <li className="hover:underline">Enterprise services</li>
            <l>Atlassian Partners</l>
            <li className="hover:underline">Developers</li>
            <li className="hover:underline">Success Central</li>
            <li className="hover:underline">User groups</li>
            <li className="hover:underline">Automation for Jira</li>
            <li className="mt-5 hover:underline">Atlassian.com</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Cloud;
