import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { Link } from "react-router-dom";

// 7 Images + 7 Icons
import img1 from "../../../../assets/prodimg1.png";
import icon1 from "../../../../assets/proddp1.png";

import img2 from "../../../../assets/prodimg2.jpg";
import icon2 from "../../../../assets/proddp2.png";

import img3 from "../../../../assets/prodimg3.png";
import icon3 from "../../../../assets/proddp3.png";

import img4 from "../../../../assets/prodimg4.jpg";
import icon4 from "../../../../assets/proddp4.png";

import img5 from "../../../../assets/prodimg3.png";
import icon5 from "../../../../assets/proddp3.png";

import img6 from "../../../../assets/prodimg6.jpg";
import icon6 from "../../../../assets/proddp6.png";

import img7 from "../../../../assets/prodimg7.jpg";
import icon7 from "../../../../assets/proddp7.png";


const ProductManagementFeatures = () => {

  const reldata = [
    {
      img: img1,
      icon: icon1,
      title: "Tability's Public Start Up Roadmap",
      desc: "by Bryan Schuldt, Co-Founder + Design Lead @ Tability",
      cont: "Create a sense of transparency between your users and your team.",
      copy: "5.7K",
      views: "52.8K",
      to: "/templates/product-management/tability's-public-start-up-roadmap-tixmANrR",
    },
    {
      img: img2,
      icon: icon2,
      title: "5 Product Management Buckets",
      desc: "by Zoho Desk",
      cont: "We manage product management tasks by splitting the work into 5 different buckets.",
      copy: "21.4K",
      views: "116.5K",
      to: "/templates/product-management/5-product-management-buckets-H8rDCB7e",
    },
    {
      img: img3,
      icon: icon3,
      title: "Fabrication Process",
      desc: "by Chris Mondeau, R+D Manager @ McCorvey Sheet Metal Works",
      cont: "We track work orders as they move through each department in the fabrication shop.",
      copy: "3.4K",
      views: "26.2K",
      to: "/templates/product-management/fabrication-process-DAKVjp35",
    },
    {
      img: img4,
      icon: icon4,
      title: "Product Roadmap Template | Trello",
      desc: "by Trello Product Team",
      cont: "Use Trello's roadmap template to create a transparent development process.",
      copy: "39.8K",
      views: "184.6K",
      to: "/templates/product-management/product-roadmap-template-%7C-trello-FrbAJsbH",
    },
    {
      img: img5,
      icon: icon5,
      title: "Shipping Planner",
      desc: "by Chris Mondeau",
      cont: "Track delivery orders. Shipping and Receiving teams can easily monitor shipments.",
      copy: "2.1K",
      views: "21.3K",
      to: "/templates/product-management/shipping-planner-MC3vZiVE",
    },
    {
      img: img6,
      icon: icon6,
      title: "PM Skills Assessment (SVPG)",
      desc: "by Nurit Gazit, Senior Product Manager",
      cont: "Implement the PM Skills Assessment process from Silicon Valley Product Group.",
      copy: "2.4K",
      views: "18.8K",
      to: "/templates/product-management/the-pm-skills-assessment-by-marty-cagan-(svpg.com)-RxEexasy",
    },
    {
      img: img7,
      icon: icon7,
      title: "User Story Mapping Template",
      desc: "by Faris Han, Developer @ Hubton Indonesia",
      cont: "Design the perfect user experience with a clean, Kanban-enhanced user story map.",
      copy: "9.3K",
      views: "66.7K",
      to: "/templates/product-management/user-story-mapping-template-XVrmnTX3",
    },
  ];

  return (
    <div className="mt-[-10px] pl-3">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex gap-2 p-3">
          <Link to="/templates" className="hover:underline">
            Template gallery /
          </Link>
          <span className="hover:underline">Product Management</span>
        </div>

        {/* Header */}
        <div className="flex gap-4 ">
          <img
            src="https://trello.com/assets/545b35da72b31bbceb33.svg"
            alt=""
            className="h-12 rounded"
          />
          <h1 className="text-xl font-bold text-gray-800 mt-2">Product Management Templates</h1>
        </div>

        {/* Cards */}
        <div className="p-3">
          <div className="flex flex-wrap">
            {reldata.map(({ img, icon, title, desc, cont, copy, views, to }) => (
              <Link
                to={to}
                key={title}
                className="flex flex-col gap-2 mt-7 w-70"
              >
                <div className="relative">
                  <img
                    src={img}
                    alt=""
                    className="h-[132px] w-[247px] rounded"
                  />
                  <div className="bg-white p-[4px] ml-2 rounded-full h-[48px] w-[48px] -mt-9 shadow-md relative z-[3]">
                    <img
                      src={icon}
                      alt=""
                      className="h-[40px] w-[40px] rounded-full"
                    />
                  </div>
                </div>

                <h1 className="font-semibold text-[16px] px-2">{title}</h1>
                <p className="text-[13px] px-2">{desc}</p>
                <p className="text-[13px] px-2 w-[250px]">{cont}</p>

                <div className="flex px-2 text-[13px] items-center gap-2 text-gray-700 font-semibold mt-2">
                  <span className="flex items-center gap-1">
                    <MdContentCopy /> {copy}
                  </span>
                  <span className="flex items-center gap-1">
                    <IoEyeOutline /> {views}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex gap-10 pb-9">
          <div>
            <h1 className="text-2xl font-medium pb-6">What's Trello?</h1>
            <p className="w-110">
              Trello lets you work more collaboratively and get more done. Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.
            </p>

            <div className="flex gap-5 mt-5">
              <Link to="/signup?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3FreturnUrl%3D%252F%26display%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D%26aaOnboarding%3D%26updateEmail%3D%26traceId%3D%26ssoVerified%3D%26createMember%3Dtrue%26jiraInviteLink%3D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D" className="bg-blue-600 text-white p-3 rounded">
                Sign up - it's free
              </Link>
              <Link to="https://trello.com/" className="underline mt-2 text-gray-500">Learn more</Link>
            </div>
          </div>

          <div>
            <img
              src="https://trello.com/assets/ea5b895d726e6dc287da.svg"
              alt=""
            />
          </div>
        </div>

        <hr className="p-3 text-gray-300 w-200" />

        <div className="flex gap-5 pb-10">
          <p className="w-175 text-[13px]">Plan, produce, and reflect with product management templates made by teams you trust, using Trello. Translate business needs into manageable team tasks, identify areas of opportunity, and prioritize work—all while providing full transparency to keep your team on the same page. With Trello, you can reduce the need for endless team meetings by encouraging asynchronous team collaboration on important initiatives and keep a close eye on progress to deliver outcomes..</p>

          <img
            src="https://trello.com/assets/b96b6082b66820e8e476.svg"
            className="h-30"
            alt=""
          />
        </div>

      </div>
    </div>
  );
};

export default ProductManagementFeatures;
