import React from "react";
import { HiQuestionMarkCircle } from "react-icons/hi2";

const Datacenter = () => {
  return (
    <>
      <section className="h-[400px] w-full border-1 flex">
        <div>
          <div className="w-full px-10 flex gap-10">
            <h2 className="text-[#0052CC] text-medium font-medium cursor-pointer ml-38">
              Cloud
            </h2>
            <h2 className="text-gray-500 text-medium font-medium cursor-pointer">
              Data Center
            </h2>
            <br />
            <br />
          </div>

          <div className="h-0.5 bg-gray-300 w-220 ml-38 mb-3"></div>

          <div className=" ml-38 mt-[50px]">
            <div className="flex justify-evenly">
              <div className="bg-gray hover:bg-gray-200 p-10 text-center ">
                <img
                  width={90}
                  height={50}
                  src="https://images.ctfassets.net/zsv3d0ugroxu/1Ba3KU2ckjAMmeYoL9DgjO/e6710a37425ab1695046803d32c2db70/Jira_Software.svg"
                  alt=""
                />
                <h5 className="text-xs font-light mt-5">Jira Software</h5>
              </div>
              <div className="bg-gray hover:bg-gray-200 p-10 text-center ">
                <img
                  width={90}
                  height={50}
                  src="https://images.ctfassets.net/zsv3d0ugroxu/5DppKv8q5q206zQzIRDKQq/f31b8874021ee7d6dd54389f902b1421/logo-light_Jira-Service-Management_mark_brand_RGB.svg"
                  alt=""
                />
                <h5 className="text-xs font-light mt-5">
                  Jira Service <br />
                  Management
                </h5>
              </div>
              <div className="bg-gray hover:bg-gray-200 p-10 text-center ">
                <img
                  width={90}
                  height={50}
                  src="https://images.ctfassets.net/zsv3d0ugroxu/33jpVupw41aFgHx33pk79p/9fc5a1d056827ace938a74dd3a825f1e/jira_core_flat.svg"
                  alt=""
                />
                <h5 className="text-xs font-light mt-5">Jira Core</h5>
              </div>
              <div className="bg-gray hover:bg-gray-200 p-10 text-center ">
                <img
                  width={90}
                  height={50}
                  src="https://images.ctfassets.net/zsv3d0ugroxu/5VucmXIhBRYyBXA9ygFJ3Y/5082d769a81934af185dcf109b29f628/logo-light_Confluence_mark_brand_RGB.svg"
                  alt=""
                />
                <h5 className="text-xs font-light mt-5">Confluence</h5>
              </div>
              <div className="bg-gray hover:bg-gray-200 p-10 text-center ">
                <img
                  width={90}
                  height={50}
                  src="https://images.ctfassets.net/zsv3d0ugroxu/1g4197x84jic8a1P3b3IGT/1a752272b12824d3a3df4bc1e7dd2c53/logo-light_Bitbucket_mark_brand_RGB.svg"
                  alt=""
                />
                <h5 className="text-xs font-light mt-5">Bitbucket</h5>
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
          <ul className="hover:underline mt-4">
            <li>Log in to account</li>
            <div className="flex items-center gap-3">
              <HiQuestionMarkCircle className="text-2xl font-light text-gray-500" />
              <li>Contact support</li>
            </div>
            <li>Training & Certification</li>
            <li>Atlassian Migration Program</li>
            <li>GDPR guides</li>
            <li>Enterprise services</li>
            <l>Atlassian Partners</l>
            <li>Developers</li>
            <li>Success Central</li>
            <li>User groups</li>
            <li>Automation for Jira</li>
            <li className="mt-5">Atlassian.com</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Datacenter;
