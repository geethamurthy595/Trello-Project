import React from "react";
import education from "../../../../assets/educationTemplate.svg";
import Temp1 from "../../../../assets/Temp1.jpg";
import icon1 from "../../../../assets/icon1.png";
import Temp2 from "../../../../assets/Temp2.jpg";
import icon2 from "../../../../assets/icon2.png";
import Temp3 from "../../../../assets/Temp3.png";
import icon3 from "../../../../assets/icon3.png";
import Temp4 from "../../../../assets/Temp4.jpg";
import icon4 from "../../../../assets/icon4.png";
import Temp5 from "../../../../assets/Temp5.jpg";
import icon5 from "../../../../assets/icon5.png";
import Temp6 from "../../../../assets/Temp6.jpg";
import icon6 from "../../../../assets/icon6.png";
import { IoEyeOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import Temp7 from "../../../../assets/Temp7.jpg";
import icon7 from "../../../../assets/icon7.png";
import Temp8 from "../../../../assets/Temp8.png";
import icon8 from "../../../../assets/icon8.png";
import Temp9 from "../../../../assets/Temp9.jpg";
import Temp10 from "../../../../assets/Temp10.jpg";
import icon10 from "../../../../assets/icon10.png";
import Temp11 from "../../../../assets/Temp11.jpg";
import icon11 from "../../../../assets/icon10.png";
import Temp12 from "../../../../assets/Temp12.jpg";
import icon12 from "../../../../assets/icon12.png";
import Temp13 from "../../../../assets/Temp13.jpg";
import icon13 from "../../../../assets/icon13.png";
import Temp14 from "../../../../assets/Temp14.png";
import icon14 from "../../../../assets/icon14.png";
import Temp15 from "../../../../assets/Temp15.png";
import icon15 from "../../../../assets/icon15.png";
import Temp16 from "../../../../assets/Temp16.jpg";
import icon16 from "../../../../assets/icon16.png";
import whatsTrello from "../../../../assets/whatsTrello.svg";
import syllabi from "../../../../assets/syllabi.svg";
import { Link } from "react-router-dom";

const EducationTemplate = () => {
  let reldata = [
    {
      img: Temp1,
      icon: icon1,
      title: "Remote Class Template",
      desc: "by Kelly Thiesen, Assistant Professor of Chemistry",
      cont: "Stay organized in a remote learning environment.",
      copy: "48.9K",
      views: "217.8K",
      to : "/templates/education/remote-class-template-2pdwgsed"
    },
    {
      img: Temp2,
      icon: icon2,
      title: "Academic Literature Review",
      desc: "by Ann Gillian Chu, PhD researcher @ the University of St. Andrews",
      cont: "Keep track of what you’ve read and your notes in one place for long writing projects, like dissertations.",
      copy: "23.9K",
      views: "91.4K",
      to : "/templates/education/remote-class-template-2pdwgsed"
    },
    {
      img: Temp3,
      icon: icon3,
      title: "Teaching: Weekly Planning",
      desc: "by Emma Trentman, Associate Professor of Arabic @ University of New Mexico",
      cont: "A board per class. The lists are the weeks of the semester, cards are things I need to do for class each week.",
      copy: "200.8K",
      views: "351.4K",
      to : "/templates/education/teaching:-weekly-planning-tfI3gVjI",
    },
    {
      img: Temp4,
      icon: icon4,
      title: "Project Based Learning",
      desc: "by Michael Burke, Educator @ Bel Air High School",
      cont: "A key aspect of organizing projects is creating a timeline, responsibilities, and checklists.",
      copy: "29.4K",
      views: "195.5K",
      to : "/templates/education/project-based-learning-suSC9geN",
    },
    {
      img: Temp5,
      icon: icon5,
      title: "Plan your Studies – Vet Student",
      desc: "by Becky Lossing, Veterinarian & Founder of Mini Mammoth",
      cont: "A template to help vet students conquer clinics and beyond!",
      copy: "12.7K",
      views: "49.8K",
      to : "/templates/education/plan-your-studies---vet-student-1O2eByQa",
    },
    {
      img: Temp6,
      icon: icon6,
      title: "Learn A Language",
      desc: "by Luis von Ahn, CEO of Duolingo",
      cont: "Learn a language by breaking up your study into small, achievable tasks.",
      copy: "39.2K",
      views: "172.5K",
      to : "/templates/education/learn-a-language-JgYO1dzD",
    },
    {
      img: Temp7,
      icon: icon7,
      title: "Montessori Inspired Planning & Homeschool Education",
      desc: "by Bee, owner @ Puff Apothecary",
      cont: "Prepare for your home to become a Montessori inspired space.",
      copy: "7.4K",
      views: "41.9K",
      to : "/templates/education/montessori-inspired-planning-&-homeschool-education-pgLQTNMN",
    },
    {
      img: Temp8,
      icon: icon8,
      title: "Certification Prep Board",
      desc: "by Created by Marie Kent from Trello",
      cont: "Prepare and manage your workload for Atlassian University courses!",
      copy: "2.7K",
      views: "8.4K",
      to : "/templates/education/certification-prep-board-EsTTia6d",
    },
    {
      img: Temp9,
      icon: icon10,
      title: "Academic Publishing Tracker",
      desc: "by Ann Gillian Chu, PhD researcher @ the University of St. Andrews",
      cont: "Keep track of where and when you have submitted an article and celebrate your wins!",
      copy: "6.1K",
      views: "24.5K",
      to : "/templates/education/academic-publishing-tracker-DI9oVhN3",
    },
    {
      img: Temp10,
      icon: icon10,
      title: "Academic Conference Presentation Tracker",
      desc: "by Ann Gillian Chu, PhD researcher @ the University of St. Andrews",
      cont: "A Trello board to keep track of conference presentation details and to remind yourself of important deadlines.",
      copy: "1.6K",
      views: "7.6K",
      to : "/templates/education/academic-conference-presentation-tracker-nLgaDKRA",
    },
    {
      img: Temp11,
      icon: icon11,
      title: "Academic Research Degree Application Tracker",
      desc: "by Ann Gillian Chu, PhD researcher @ the University of St. Andrews",
      cont: "Keep track of the many moving parts in the process of applying for a research degree position.",
      copy: "3.3K",
      views: "18.6K",
      to : "/templates/education/academic-research-degree-application-tracker-fwYBOH2a",
    },
    {
      img: Temp12,
      icon: icon12,
      title: "eCourse Workflow",
      desc: "by Brittany New, CEO @ Be New Media",
      cont: "Launch your eCourse with ease and organization.",
      copy: "19.9K",
      views: "81.1K",
      to : "/templates/education/ecourse-workflow-Qa2pcmZr",
    },
    {
      img: Temp13,
      icon: icon13,
      title: "Language Learning Template",
      desc: "by Damien Desmond",
      cont: "A comprehensive template for a self-instructed or class based curriculum for learning a new language.",
      copy: "5.9K",
      views: "30.6K",
      to : "/templates/education/language-learning-template-JM3h0RF0",
    },
    {
      img: Temp14,
      icon: icon14,
      title: "Lesson Planning",
      desc: "by Trello Team",
      cont: "Use this Trello board to plan your lessons out in advance.",
      copy: "32.6K",
      views: "223.5K",
      to : "/templates/education/lesson-planning-SGCjQMxQ",
    },
    {
      img: Temp15,
      icon: icon15,
      title: "Syllabus Template",
      desc: "by C. Wess Daniels, Director @ Guilford College",
      cont: "Using Trello allows my students to participate in the actual development of the content within the syllabus.",
      copy: "13.5K",
      views: "98.9K",
      to : "/templates/education/syllabus-template-MEj9Q6SK",
    },
    {
      img: Temp16,
      icon: icon16,
      title: "Weekly Music Lesson Template",
      desc: "by Kyle McGowan, Owner @ Heartland Music Academy",
      cont: "For music instructors who teach an instrument online.",
      copy: "3K",
      views: "17.3K",
      to : "/templates/education/weekly-music-lesson-template-tze79Ve6",
    },
  ];
  return (
    <>
      <div className="flex flex-col w-[825px] mt-9">
        <div className="flex gap-2 text-[15px] px-5">
          <span>Template gallery</span> /<span>Education</span>
        </div>

        <div className="flex gap-2 items-center mt-9 px-5">
          <img src={education} alt="" className="h-[48px] w-[48px]" />
          <h1 className="font-semibold text-[24px] text-black/87">
            Education templates
          </h1>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-1">
            {reldata.map((obj) => {
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
            <img src={whatsTrello} alt="" className="w-[270px] h-[205px]" />
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
            <img src={syllabi} alt="" className="h-[104px] w-[128px] pl-[24px]" />
        </div>
          
      </div>
    </>
  );
};

export default EducationTemplate;
