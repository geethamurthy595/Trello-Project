import React from "react";
import { HiQuestionMarkCircle } from "react-icons/hi2";

const Resource = () => {
  return (
    <>
      <section className="h-[400px] bg-white absolute z-10 w-full flex">
        <div className="w-full">
          <div className=" ml-38 mt-[50px]">
            <div className=" grid justify-evenly grid-cols-2 gap-1">
              <div className="bg-gray flex items-center hover:bg-gray-100  border-2 border-blue-500 h-[50px] w-[480px]">
                <img className=""
                  width={50}
                  src="https://images.ctfassets.net/zsv3d0ugroxu/199clY7qv6MQc2EasKkGim/2be1028a3452c791c46ebb4a4343a91b/rich_icon-Community.svg"
                  alt=""
                />
                <div className="w-50">
                  <h5 className="text-xs font-light">Community</h5>
                  <p className="text-xs font-light">Answers,support and inspiration</p>
                </div>
              </div>
              <div className="bg-gray flex items-center hover:bg-gray-100  h-[50px] w-[480px]">
                <img
                  width={50}
                  src="https://images.ctfassets.net/zsv3d0ugroxu/72Hws13erkU4jPlqQmD2SS/fd94e1b3f2b1b3e88315702c77b672cd/rich_icon-Announcement.svg"
                  alt=""
                />
                <div className="w-50">
                <h5 className="text-xs font-light mt-5">System Status</h5>
                <p className="text-xs font-light mb-3">Cloud services health</p>
                </div>
              </div>
              <div className="bg-gray flex items-center hover:bg-gray-100  h-[50px] w-[480px]">
                <img
                  width={50}
                  src="https://images.ctfassets.net/zsv3d0ugroxu/5Cb1EEBbNKkm8uK24mIeEs/4ffba62bbd992b75dc3b7f227c9cb3f3/rich_icon-Credit_cards.svg"
                  alt=""
                />
                <div className="w-50">
                <h5 className="text-xs font-light mt-5">Billing and licensing</h5>
                <p className="text-xs font-light mb-3">Frequently asked questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-[500px] p-7 font-xs text-medium">
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

export default Resource;
