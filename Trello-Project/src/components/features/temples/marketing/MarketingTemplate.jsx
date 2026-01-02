import React from "react";
import marketing from "../../../../assets/marketingtemplate.svg"
import whats from "../../../../assets/whats.svg"
import launches from "../../../../assets/launches.svg"
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import marketingImg1 from "../../../../assets/marketingImg1.jpg"
import marketingImg2 from "../../../../assets/marketingImg2.jpg"
import marketingImg3 from "../../../../assets/marketingImg3.png"
import marketingImg4 from "../../../../assets/marketingImg4.jpg"
import marketingImg5 from "../../../../assets/marketingImg5.jpg"
import marketingImg6 from "../../../../assets/marketingImg6.jpg"
import marketingImg7 from "../../../../assets/marketingImg7.jpg"
import marketingImg8 from "../../../../assets/marketingImg8.jpg"
import marketingImg9 from "../../../../assets/marketingImg9.jpg"
import marketingImg10 from "../../../../assets/marketingImg10.jpg"
import marketingImg11 from "../../../../assets/marketingImg11.jpg"
import marketingImg12 from "../../../../assets/marketingImg12.jpg"
import marketingImg13 from "../../../../assets/marketingImg13.png"
import marketingImg14 from "../../../../assets/marketingImg14.png"
import marketingImg15 from "../../../../assets/marketingImg15.jpg"
import marketingImg16 from "../../../../assets/marketingImg16.jpg"
import marketingImg17 from "../../../../assets/marketingImg17.jpg"
import marketingImg18 from "../../../../assets/marketingImg18.png"
import marketingImg19 from "../../../../assets/marketingImg19.jpg"
import marketingImg20 from "../../../../assets/marketingImg20.jpg"
import marketingImg21 from "../../../../assets/marketingImg21.jpg"
import marketingImg22 from "../../../../assets/marketingImg22.jpg"
import marketingImg23 from "../../../../assets/marketingImg23.jpg"
import marketingImg24 from "../../../../assets/marketingImg24.jpg"
import marketingIcon1 from "../../../../assets/marketingIcon1.png"
import marketingIcon2 from "../../../../assets/marketingIcon2.png"
import marketingIcon3 from "../../../../assets/marketingIcon3.png"
import marketingIcon4 from "../../../../assets/marketingIcon4.png"
import marketingIcon5 from "../../../../assets/marketingIcon5.png"
import marketingIcon6 from "../../../../assets/marketingIcon6.png"
import marketingIcon7 from "../../../../assets/marketingIcon7.png"
import marketingIcon8 from "../../../../assets/marketingIcon8.png"
import marketingIcon9 from "../../../../assets/marketingIcon9.png"
import marketingIcon10 from "../../../../assets/marketingIcon10.png"
import marketingIcon11 from "../../../../assets/marketingIcon11.png"
import marketingIcon12 from "../../../../assets/marketingIcon12.png"
import marketingIcon13 from "../../../../assets/marketingIcon13.png"
import marketingIcon14 from "../../../../assets/marketingIcon14.png"
import marketingIcon15 from "../../../../assets/marketingIcon6.png"
import marketingIcon16 from "../../../../assets/marketingIcon16.png"
import marketingIcon17 from "../../../../assets/marketingIcon17.png"
import marketingIcon18 from "../../../../assets/marketingIcon18.png"
import marketingIcon19 from "../../../../assets/marketingIcon3.png"
import marketingIcon20 from "../../../../assets/marketingIcon20.png"
import marketingIcon21 from "../../../../assets/marketingIcon21.png"
import marketingIcon22 from "../../../../assets/marketingIcon22.png"
import marketingIcon23 from "../../../../assets/marketingIcon23.png"
import marketingIcon24 from "../../../../assets/marketingIcon24.png"

const MarketingTemplate = () => {
    let marketingData = [
  {
    img: marketingImg1,
    icon: marketingIcon1,
    title: "Speaker guide for online events",
    desc: "by Josip Lisec, Head of Product @ SpotMe",
    cont: "Prep for your next virtual event with precision!",
    copy: "9.9K",
    views: "60.8K",
    to: "/templates/marketing/speaker-guide-for-online-events-00XCjV24"
  },
  {
    img: marketingImg2,
    icon: marketingIcon2,
    title: "Marketing Content Catalog",
    desc: "by Nicholas Bouchard, Content Marketer @ Unito",
    cont: "Centralize all the content your marketing teams create and make it easily searchable.",
    copy: "8.1K",
    views: "67.9K",
    to: "/templates/marketing/marketing-content-catalog-NEAyTVd7"
  },
  {
    img: marketingImg3,
    icon: marketingIcon3,
    title: "Marketing Overview",
    desc: "by Stella Garber, Head of Marketing @ Trello",
    cont: "Use this board to create a stronger sense of transparency within your marketing team and the company.",
    copy: "35.4K",
    views: "187.1K",
    to: "/templates/marketing/marketing-overview-VoJQd9UF"
  },
  {
    img: marketingImg4,
    icon: marketingIcon4,
    title: "Podcast Workflow Template",
    desc: "by Ryan Spilken, Evangelist @ Adaptavist",
    cont: "The one-stop-shop for managing your podcast production workflow.",
    copy: "7.4K",
    views: "32.3K",
    to: "/templates/marketing/podcast-workflow-template-5boCNZwE"
  },
  {
    img: marketingImg5,
    icon: marketingIcon5,
    title: "Blog Content Schedule",
    desc: "by Scan2CAD",
    cont: "A scheduled pipeline of all upcoming and published content for your blog.",
    copy: "38.9K",
    views: "150.1K",
    to: "/templates/marketing/blog-content-schedule-Y84uxh4d"
  },
  {
    img: marketingImg6,
    icon: marketingIcon6,
    title: "Marketing Requests",
    desc: "by Chad Reid, VP of Marketing & Communications @ JotForm",
    cont: "A collaboration board between the JotForm marketing and growth teams.",
    copy: "14K",
    views: "60.6K",
    to: "/templates/marketing/marketing-requests-FK3MvDhj"
  },
  {
    img: marketingImg7,
    icon: marketingIcon7,
    title: "Website Task Planner",
    desc: "by Pauline Wiles, Founder @ Pauline Wiles Website Design",
    cont: "10 Phases you'll need to plan, design, create, test, and launch a professional website.",
    copy: "15.2K",
    views: "62.7K",
    to: "/templates/marketing/website-task-planner-vCpQ83ws"
  },
  {
    img: marketingImg8,
    icon: marketingIcon8,
    title: "SEO Content Creation",
    desc: "by R.J. Weiss, Founder @ The Ways To Wealth",
    cont: "Get your content production down to a science with SEO in mind.",
    copy: "8.5K",
    views: "47.3K",
    to: "/templates/marketing/seo-content-creation-P5pfGKu8"
  },
  {
    img: marketingImg9,
    icon: marketingIcon9,
    title: "Inbound Marketing Campaign Template",
    desc: "by Delilah Osborne, Marketing Director @ Rework",
    cont: "Get a full view of contents and assets when working on multiple integrated campaigns.",
    copy: "14.8K",
    views: "66.6K",
    to: "/templates/marketing/inbound-marketing-campaign-template-qwIlhmMV"
  },
  {
    img: marketingImg10,
    icon: marketingIcon10,
    title: "Scalify Marketing Process Template",
    desc: "by Scalify",
    cont: "For small marketing teams who want to get things done better and faster!",
    copy: "6K",
    views: "32.4K",
    to: "/templates/marketing/scalify-marketing-process-template-fY9NzD9a"
  },
  {
    img: marketingImg11,
    icon: marketingIcon11,
    title: "Agile Marketing",
    desc: "by Anthony Idle, Owner @ Ecommerce Garage",
    cont: "A template for ecommerce marketers.",
    copy: "3.5K",
    views: "32.9K",
    to: "/templates/marketing/agile-marketing-nSGBzBZH"
  },
  {
    img: marketingImg12,
    icon: marketingIcon12,
    title: "Annual Email Marketing Calendar",
    desc: "by Chris Kaundart, Email Marketing Manager @ Trello",
    cont: "Provide an overview of your marketing team's email program.",
    copy: "20.3K",
    views: "73.2K",
    to: "/templates/marketing/annual-email-marketing-calendar-VCaIAYFR"
  },
  {
    img: marketingImg13,
    icon: marketingIcon13,
    title: "Client Marketing Campaign",
    desc: "by Dropbox",
    cont: "Manage a campaign + assets seamlessly between your teams and an external agency.",
    copy: "5.9K",
    views: "39.6K",
    to: "/templates/marketing/client-marketing-campaign-JQDdj7qB"
  },
  {
    img: marketingImg14,
    icon: marketingIcon14,
    title: "Content Collection",
    desc: "by Jayde Gillan, Founder @ Tara Buddha",
    cont: "Use a Trello board to keep a collection of draft content for social media purposes.",
    copy: "10.3K",
    views: "63.1K",
    to: "/templates/marketing/content-collection-SrQq3HbC"
  },
  {
    img: marketingImg15,
    icon: marketingIcon15,
    title: "Copywriting",
    desc: "by Chad Reid, VP @ JotForm",
    cont: "Copy projects get added to the backlog, and writers pick tasks whenever they’re free.",
    copy: "8.6K",
    views: "42.6K",
    to: "/templates/marketing/copywriting-D4zmNSO4"
  },
  {
    img: marketingImg16,
    icon: marketingIcon16,
    title: "Editorial Calendar",
    desc: "by Leah Ryder, Trello Brand Marketing Senior Team Lead",
    cont: "Manage the status of every blog post from one board.",
    copy: "50.9K",
    views: "206.2K",
    to: "/templates/marketing/editorial-calendar-UQk1wa4a"
  },
  {
    img: marketingImg17,
    icon: marketingIcon17,
    title: "Editorial Workflow",
    desc: "by Andy Vandervell, Audience Growth Manager @ Wired UK",
    cont: "See how Wired UK uses Trello to publish 1000+ articles a year.",
    copy: "4.4K",
    views: "29.7K",
    to: "/templates/marketing/editorial-workflow-HlewVP58"
  },
  {
    img: marketingImg18,
    icon: marketingIcon18,
    title: "Email Workflow",
    desc: "by Litmus",
    cont: "Perfect your email process with the ultimate collaborative workflow.",
    copy: "5.9K",
    views: "38.5K",
    to: "/templates/marketing/email-workflow-7qihzbua"
  },
  {
    img: marketingImg19,
    icon: marketingIcon19,
    title: "Go To Market Strategy Template",
    desc: "by Trello Marketing Team",
    cont: "Coordinate cross-team go-to-market launches with a single Trello board.",
    copy: "134K",
    views: "213K",
    to: "/templates/marketing/go-to-market-strategy-template-oC0r5y4V"
  },
  {
    img: marketingImg20,
    icon: marketingIcon20,
    title: "Incoming Requests",
    desc: "by Brian Cervino, Product Marketing @ Trello",
    cont: "Facilitate a system for managing company-wide incoming marketing requests.",
    copy: "4.3K",
    views: "25.2K",
    to: "/templates/marketing/incoming-requests-n0VLHw5j"
  },
  {
    img: marketingImg21,
    icon: marketingIcon21,
    title: "Marketing Master Editorial Calendar",
    desc: "by Tanushree Shenvi, Marketing Manager @ CleverTap",
    cont: "Track content across a geographically distributed team.",
    copy: "12.3K",
    views: "65.8K",
    to: "/templates/marketing/marketing-master-editorial-calendar-VyMRBl37"
  },
  {
    img: marketingImg22,
    icon: marketingIcon22,
    title: "Medium Articles Template",
    desc: "by Re'al Bakhit, Content Creator on Medium",
    cont: "Optimize the process of publishing articles online.",
    copy: "1.6K",
    views: "8.3K",
    to: "/templates/marketing/medium-articles-template-vYjTMEiJ"
  },
  {
    img: marketingImg23,
    icon: marketingIcon23,
    title: "Publishing Process",
    desc: "by The Telegraph",
    cont: "From ideation to publication using Trello + automation.",
    copy: "7.4K",
    views: "45.8K",
    to: "/templates/marketing/publishing-process-gCeV9WFJ"
  },
  {
    img: marketingImg24,
    icon: marketingIcon24,
    title: "Social Media Marketing Board",
    desc: "by Moisson Marketing",
    cont: "Plan your release schedule and manage ideas for social media.",
    copy: "64.6K",
    views: "155.2K",
    to: "/templates/marketing/social-media-marketing-board-7bPs6109"
  }
];

  return (
    <>
      <div className="flex flex-col w-[825px]">
        <div className="flex gap-2 text-[15px] px-5">
          <span>Template gallery</span> /<span>Marketing</span>
        </div>

        <div className="flex gap-2 items-center mt-9 px-5">
          <img src={marketing} alt="" className="h-[48px] w-[48px]" />
          <h1 className="font-semibold text-[24px] text-black/87">
            Marketing templates
          </h1>
        </div>

        <div className="p-5">
                  <div className="flex flex-wrap gap-1">
                    {marketingData.map((obj) => {
                      let { img, icon, title, desc, cont, copy, views ,to} = obj;
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
              Plan your syllabi and tackle research projects with these learning
              templates for teachers and students, created by educators and
              learners alike in the Trello community. Trello is the perfect tool
              to assist classroom learning or independent research. Teachers can
              set up Trello boards to map out the course syllabus and track
              curriculum progress. Our learning templates help students stay on
              top of their assignments or work together to organize and deliver
              on group projects. Whether it’s learning a new language or
              teaching ancient history, there’s a Trello template for that.
            </p>
            <img src={launches} alt="" className="h-[104px] w-[128px] pl-[24px]" />
          </div>
      </div>
    </>
  );
};

export default MarketingTemplate;
