import React from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import temp1 from "../../../../assets/EngTemp1.jpg";
import logo1 from "../../../../assets/Englogo1.png";
import temp2 from "../../../../assets/Engtemp2.png";
import logo2 from "../../../../assets/Englogo2.png";
import temp3 from "../../../../assets/Engtemp3.jpg";
import logo3 from "../../../../assets/Englogo3.png";
import temp4 from "../../../../assets/Engtemp4.jpg";
import logo4 from "../../../../assets/Englogo4.png";
import temp5 from "../../../../assets/Engtemp5.jpg";
import logo5 from "../../../../assets/Englogo5.png";
import logo6 from "../../../../assets/Englogo6.png";
import logo7 from "../../../../assets/Englogo7.png";


import temp6 from "../../../../assets/Engtemp6.jpg";
import temp7 from "../../../../assets/Engtemp7.jpg";


import temp8 from "../../../../assets/Engtemp8.jpg";


import temp9 from "../../../../assets/Engtemp9.jpg";


 import temp10 from "../../../../assets/Engtemp10.jpg";

import temp11 from "../../../../assets/Engtemp11.jpg";
import temp12 from "../../../../assets/Engtemp12.jpg";
import temp13 from "../../../../assets/Engtemp13.jpg";



const EngineeringCards = () => {
  let reldata = [
    {
      img: temp1,
      icon: logo1,
      title: "Kanban Template",
      desc: "by Trello Engineering Team",
      cont: "Use this simple Kanban template to improve the productivity of your engineering team and help them build...",
      copy: "972.2K",
      views: "2.2M",
      to: "/templates/engineering/kanban-template-LGHXvZNL",
    },
    {
      img: temp2,
      icon: logo2,
      title: "Scrum Board",
      desc: "by Robin Warren, Founder of Cherry Wood Software",
      cont: 'From "to do" to "done", Trello\'s scrum board template helps your software development team use the popular agile...',
      copy: "38.1K",
      views: "127.1K",
      to: "/templates/engineering/scrum-board-dFzygb01",
    },
    {
      img: temp3,
      icon: logo3,
      title: "Software Development [Web App, iOS App, Android App]",
      desc: "by Ilyas Farawe, CTO @ Techbarn",
      cont: "Manage tasks and deadlines for software development projects.",
      copy: "33.8K",
      views: "133.7K",
      to: "",
    },
    {
      img: temp4,
      icon: "",
      title: "Web Development",
      desc: "by Prashant Omer, Freelance Developer",
      cont: "Web developers rejoice! This Trello template will help you organize and manage tasks and features for website...",
      copy: "30.8K",
      views: "144.3K",
      to: "",
    },
    {
      img: temp5,
      icon: logo1,
      title: "Trello Agile Sprint Board Template",
      desc: "by Trello Engineering Team",
      cont: "Move fast without losing sight by adopting Trello's agile workflow template, giving your team perspective during any...",
      copy: "125.3K",
      views: "412K",
      to: "",
    },
    {
      img: temp6,
      icon: logo2,
      title: "Bug Tracker",
      desc: "by Robin, Founder @ Blue Cat Reports",
      cont: "Streamline your bug reporting and tracking with this easy to use Trello bug tracking template.",
      copy: "5.5K",
      views: "17.9K",
      to: "",
    },

    {
      img: temp2,
      icon: logo2,
      title: "Kanban Dev Board",
      desc: "by Robin Warren, Founder of Cherry Wood Software",
      cont: "For software development teams following a Kanban process + best practices for getting started.",
      copy: "7.5K",
      views: "43K",
      to: "",
    },
    {
      img: temp7,
      icon: logo4,
      title: "Android Developer Roadmap",
      desc: "by Ahmed Adel, Senior Software Engineer @ Zendesk",
      cont: "A study guide for developing on Android.",
      copy: "6.1K",
      views: "33.6K",
      to: "",
    },
    {
      img: temp8,
      icon: logo5,
      title: "Game Development",
      desc: "by Alt F4",
      cont: "This is a template designed to help game developers organise their ideas and progress.",
      copy: "12.1K",
      views: "41.7K",
      to: "",
    },
    {
      img: temp9,
      icon: logo1,
      title: "Innovation Weeks",
      desc: "by Trello Engineering Team",
      cont: "Innovation Weeks are extended periods of time set aside to encourage innovation in products, development techniques...",
      copy: "10.3K",
      views: "39.1K",
      to: "",
    },
    {
      img: temp10,
      icon: logo6,
      title: "New Test Automation Development Project",
      desc: "by Monica, MLProductions LLC, Owner",
      cont: "Guide the initial tasks necessary for developing a Software Test Automation project.",
      copy: "4.2K",
      views: "26.8K",
      to: "",
    },
    {
      img: temp11,
      icon: logo1,
      title: "Site Reliability",
      desc: "by Trello SREs",
      cont: "Manage and maintain systems-related improvements, architecture, and development.",
      copy: "14.1K",
      views: "92K",
      to: "",
    },

    {
      img: temp12,
      icon: logo7,
      title: "Software Engineering Career Design",
      desc: "by David, Software Architect @ Fortis Payments",
      cont: "Plan your software engineering career - where you are, and where you want to be!",
      copy: "4.2K",
      views: "37.3K",
      to: "",
    },
    {
      img: temp13,
      icon: logo1,
      title: "Sprint Retrospective Template | Trello",
      desc: "by Trello Engineering Team",
      cont: "Keep your team healthy by replacing whiteboards with Trello boards for more informative, accessible, and effective...",
      copy: "42.3K",
      views: "150.6K",
      to: "",
    },
  ];
  return (
    <div className="p-5">
      <div className="flex flex-wrap gap-1">
        {reldata.map((obj) => {
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
              <p className="text-[12px] font-black/80 px-2 w-[250px]">{desc}</p>
              <p className="text-[12px] font-black/80 px-2 w-[250px]">{cont}</p>
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
  );
};

export default EngineeringCards;
