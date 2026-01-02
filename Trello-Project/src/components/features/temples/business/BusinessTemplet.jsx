import React from "react";
import businesslogo from "../../../../assets/businesslogo.svg";
import { MdOutlineFileCopy } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import BusinessCards from "./BusinessCards";
import businesstrello from "../../../../assets/businesstrello.svg";
import businesstrelloicon from "../../../../assets/businesstrelloicon.svg";
import { Link } from "react-router-dom";

const BusinessTemplet = () => {
  return (
    <>
      <div className="w-200">
        <div className="w-full h-10 flex items-center gap-4">
          <Link
            to="/templates"
            className="text-lg font-normal leading-normal hover:underline cursor-pointer"
          >
            Template gallery
          </Link>
          <p className="text-lg font-normal leading-normal">/</p>
          <Link
            to="/templates/business"
            className="text-lg font-normal leading-normal hover:underline cursor-pointer"
          >
            Business
          </Link>
        </div>
        <div className="w-full h-28 flex items-center gap-4">
          <div className="">
            <img src={businesslogo} alt="img" className="w-15 rounded-md" />
          </div>
          <p className="text-2xl font-medium leading-normal">
            Business templates
          </p>
        </div>
        <div className="w-full h-full">
          <BusinessCards />
          <hr className="mt-15 border-t-1 border[#E3E4F21F] mb-10" />
          <div className="w-full h-fit flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl">
            {/* Left Section */}
            <div className="md:w-1/2 w-full flex flex-col gap-4">
              <h2 className="text-3xl font-semibold text-gray-900">
                What's Trello?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Trello lets you work more collaboratively and get more done.
                Trello’s boards, lists, and cards enable you to organize and
                prioritize your projects in a fun, flexible, and rewarding way.
              </p>

              <div className="flex items-center flex-wrap gap-4 mt-2">
                <Link
                  to="/signUp"
                  className="bg-[#669DF1] text-lg text-black font-medium py-3 px-6 rounded hover:bg-[#8FB8F6] transition-colors duration-300"
                >
                  Sign up – it's Free
                </Link>
                <Link
                  to="/"
                  className="underline decoration-[#A9ABAF] text-lg font-normal text-[#A9ABAF] hover:text-gray-600 transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src={businesstrello}
                alt="Trello Business"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl mt-10">
            {/* Left Section */}
            <div className="md:w-3/4 w-full flex flex-col gap-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Work better, together, with Trello templates designed for
                knowledge sharing across your organization. Whether you’re a
                solo entrepreneur building your business from scratch or working
                with a large team, Trello is the perfect tool to keep everyone
                aligned as you grow your business. Use Trello’s business
                templates to keep your whole company updated on important
                initiatives; set transparent top-level goals; and plan out
                discussion topics for a monthly Town Hall meeting. Whatever the
                business challenge, you can plan, organize, and get it done with
                Trello!
              </p>
            </div>

            {/* Right Section */}
            <div className="md:w-1/4 w-full flex justify-center">
              <img
                src={businesstrelloicon}
                alt="Trello Business"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessTemplet;
