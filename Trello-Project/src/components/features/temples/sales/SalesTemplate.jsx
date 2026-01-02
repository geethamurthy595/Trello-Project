import React from "react";
import whats from "../../../../assets/whats.svg";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import sales from "../../../../assets/sales.svg";
import salespara from "../../../../assets/salespara.svg";
import salesImg1 from "../../../../assets/salesImg1.jpg"
import salesImg2 from "../../../../assets/salesImg2.jpg"
import salesImg3 from "../../../../assets/salesImg3.png"
import salesImg4 from "../../../../assets/salesImg4.jpg"
import salesImg5 from "../../../../assets/salesImg5.jpg"
import salesImg6 from "../../../../assets/salesImg6.jpg"
import salesImg7 from "../../../../assets/salesImg7.jpg"
import salesImg8 from "../../../../assets/salesImg8.jpg"
import salesImg9 from "../../../../assets/salesImg9.jpg"
import salesImg10 from "../../../../assets/salesImg10.jpg"
import salesImg11 from "../../../../assets/salesImg11.jpg"
import salesIcon1 from "../../../../assets/salesIcon1.png"
import salesIcon2 from "../../../../assets/salesIcon2.png"
import salesIcon3 from "../../../../assets/salesIcon3.png"
import salesIcon4 from "../../../../assets/salesIcon4.png"
import salesIcon5 from "../../../../assets/salesIcon1.png"
import salesIcon6 from "../../../../assets/salesIcon1.png"
import salesIcon7 from "../../../../assets/salesIcon7.png"
import salesIcon8 from "../../../../assets/salesIcon8.png"
import salesIcon9 from "../../../../assets/salesIcon9.png"
import salesIcon10 from "../../../../assets/salesIcon10.png"
import salesIcon11 from "../../../../assets/salesIcon11.png"

const SalesTemplate = () => {
  let salesData = [
  {
    img: salesImg1,
    icon: salesIcon1,
    title: "Customer Onboarding",
    desc: "by Trello Team",
    cont: "Enable seamless customer onboarding by inviting new customers to a shared Trello board.",
    copy: "7.6K",
    views: "58.3K",
    to: "/templates/sales/customer-onboarding"
  },
  {
    img: salesImg2,
    icon: salesIcon2,
    title: "Retail Sales Pipeline",
    desc: "by Mike's Bikes",
    cont: "We use this retail sales pipeline to manage orders across 12 retail shops.",
    copy: "5.3K",
    views: "41.2K",
    to: "/templates/sales/retail-sales-pipeline"
  },
  {
    img: salesImg3,
    icon: salesIcon3,
    title: "A CRM & Sales Pipeline by Crmble",
    desc: "by Toni, Founder @ Crmble",
    cont: "Add the Crmble Power-Up to your board and turn it into a powerful yet easy-to-use CRM & Sales Pipeline tool.",
    copy: "37.9K",
    views: "119.9K",
    to: "/templates/sales/crmble-sales-pipeline"
  },
  {
    img: salesImg4,
    icon: salesIcon4,
    title: "Bike Repair Pipeline",
    desc: "by Heritage General Store",
    cont: "Track bike repair orders from start to finish with a Trello repair pipeline.",
    copy: "2K",
    views: "49.4K",
    to: "/templates/sales/bike-repair-pipeline"
  },
  {
    img: salesImg5,
    icon: salesIcon5,
    title: "Contract Review",
    desc: "by Trello Team",
    cont: "Coordinate contract and security reviews with your Legal and IT Departments without email.",
    copy: "2.2K",
    views: "15.7K",
    to: "/templates/sales/contract-review"
  },
  {
    img: salesImg6,
    icon: salesIcon6,
    title: "CRM Pipeline Template | Trello",
    desc: "by Trello Team",
    cont: "Create a pipeline for managing leads or requests adaptable to your team’s needs.",
    copy: "58K",
    views: "214.5K",
    to: "/templates/sales/crm-pipeline-template"
  },
  {
    img: salesImg7,
    icon: salesIcon7,
    title: "Customer Success Board",
    desc: "by Darren Chait, Co-Founder @ Hugo",
    cont: "A lightweight, visual way to track customers at a glance.",
    copy: "6.5K",
    views: "36.5K",
    to: "/templates/sales/customer-success-board"
  },
  {
    img: salesImg8,
    icon: salesIcon8,
    title: "Etsy Order Fulfillment",
    desc: "by Nicole Smith, Owner of Yellow Bess",
    cont: "Easy order management with Trello + Etsy.",
    copy: "4.7K",
    views: "27.4K",
    to: "/templates/sales/etsy-order-fulfillment"
  },
  {
    img: salesImg9,
    icon: salesIcon9,
    title: "Real Estate Organization",
    desc: "by Loida Velasquez, Realtor",
    cont: "Stay on top of your real-estate leads.",
    copy: "12.5K",
    views: "48.3K",
    to: "/templates/sales/real-estate-organization"
  },
  {
    img: salesImg10,
    icon: salesIcon10,
    title: "Sales Funnel powered by Smart Fields",
    desc: "by Vitaly Andrianov, developer @ Smart Fields",
    cont: "Keep track of sales leads, highlight revenue, expenses, and profit using the Smart Fields Power-Up.",
    copy: "6.6K",
    views: "37.2K",
    to: "/templates/sales/sales-funnel-smart-fields"
  },
  {
    img: salesImg11,
    icon: salesIcon11,
    title: "Sales Pipeline",
    desc: "by Scan2CAD",
    cont: "A simple and actionable way of keeping track of your deals.",
    copy: "25K",
    views: "122.8K",
    to: "/templates/sales/sales-pipeline"
  }
];

  return (
    <>
      <div className="flex flex-col w-[825px]">
        <div className="flex gap-2 text-[15px] px-5">
          <span>Template gallery</span> /<span>Sales</span>
        </div>

        <div className="flex gap-2 items-center mt-9 px-5">
          <img src={sales} alt="" className="h-[48px] w-[48px]" />
          <h1 className="font-semibold text-[24px] text-black/87">
            Sales templates
          </h1>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-1">
            {salesData.map((obj) => {
              let { img, icon, title, desc, cont, copy, views, to } = obj;
              return (
                <Link to={to} className="flex flex-col gap-1 mt-7">
                  <div className="relative">
                    <img src={img} alt="" className="h-[132px] w-[247px]" />
                    <div className="bg-white p-[4px] ml-2 flex flex-start rounded-full h-[48px] w-[48px] -mt-9 shadow-md relative z-[3]">
                      <img
                        src={icon}
                        alt=""
                        className="h-[40px] w-[40px] rounded-full"
                      />
                    </div>
                  </div>
                  <h1 className="font-semibold text-[16px] px-2 font-black/80 w-[250px]">
                    {title}
                  </h1>
                  <p className="text-[13px] font-black/80 px-2 w-[250px]">
                    {desc}
                  </p>
                  <p className="text-[13px] font-black/80 px-2 w-[250px]">
                    {cont}
                  </p>
                  <div className="flex px-2 text-[13px] items-center gap-2 text-gray-700/86 font-semibold text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <MdContentCopy /> {copy}
                    </span>
                    <span className="flex items-center gap-1">
                      <IoEyeOutline /> {views}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex p-5 gap-10 border-y-1 border-gray-300 my-6 py-5">
          <div className="w-[459px] h-[258px]">
            <h1 className="text-2xl font-bold tracking-wide mt-4">
              What's Trello?
            </h1>
            <p className="text-[17px] my-4">
              Trello lets you work more collaboratively and get more done.
              Trello’s boards, lists, and cards enable you to organize and
              prioritize your projects in a fun, flexible, and rewarding way.
            </p>
            <div className="flex gap-4 items-center">
              <Link
                to="/signup"
                className="bg-blue-800/90 py-2 px-4 rounded-sm text-sm-center font-semibold text-white"
              >
                Sign up - it's free!
              </Link>
              <Link
                to="https://trello.com/"
                className="underline text-gray-500"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div>
            <img src={whats} alt="" className="w-[270px] h-[205px]" />
          </div>
        </div>

        <div className="flex gap-3">
          <p className="text-[12px] tracking-wide text-gray-700">
            Streamline your sales approach with a variety of sales process
            templates. We’ll focus on providing the structure so you can focus
            on closing the deal. Keep track of leads, manage requests, and guide
            the customer through the onboarding journey, all with Trello sales
            process templates.
          </p>
          <img
            src={salespara}
            alt=""
            className="h-[104px] w-[128px] pl-[24px]"
          />
        </div>
      </div>
    </>
  );
};

export default SalesTemplate;
