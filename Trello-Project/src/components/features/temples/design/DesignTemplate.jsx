import React from "react";

import { IoEyeOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import img1 from "../../../../assets/i1.jpg"
import dp1 from "../../../../assets/dp1.png"
import img2 from "../../../../assets/i2.jpg"
import dp2 from "../../../../assets/dp2.png"
import img3 from "../../../../assets/i3.jpg"
import dp3 from "../../../../assets/dp3.png"
import img4 from "../../../../assets/i4.jpg"
import dp4 from "../../../../assets/dp4.png"
import img5 from "../../../../assets/i5.jpg"
import dp5 from "../../../../assets/dp5.png"
import img6 from "../../../../assets/i6.jpg"
import dp6 from "../../../../assets/dp6.png"
import img7 from "../../../../assets/i7.jpg"
import dp7 from "../../../../assets/dp7.png"
import img8 from "../../../../assets/i8.jpg"
import dp8 from "../../../../assets/dp8.png"
import img9 from "../../../../assets/i9.jpg"
import dp9 from "../../../../assets/dp9.png"
import img10 from "../../../../assets/i10.jpg"
import dp10 from "../../../../assets/dp10.png"
import img11 from "../../../../assets/i11.jpg"
import dp11 from "../../../../assets/dp11.png"
import img12 from "../../../../assets/i12.jpg"
import dp12 from "../../../../assets/dp12.png"
import img13 from "../../../../assets/i13.jpg"
import dp13 from "../../../../assets/dp13.png"
import img14 from "../../../../assets/i14.jpg"
import dp14 from "../../../../assets/dp14.png"
import img15 from "../../../../assets/i15.jpg"
import dp15 from "../../../../assets/dp14.png"
import img16 from "../../../../assets/i16.jpg"
import dp16 from "../../../../assets/dp16.png"
import img17 from "../../../../assets/i17.jpg"
import dp17 from "../../../../assets/dp9.png"
import img18 from "../../../../assets/i18.jpg"
import dp18 from "../../../../assets/dp9.png"
import { Link } from "react-router-dom";


const DesignTemplate = () => {
  const reldata = [
    {
      img: img1,
      icon: dp1,
      title: "Remote Class Template",
      desc: "by Kelly Thiesen, Assistant Professor of Chemistry",
      cont: "Stay organized in a remote learning environment.",
      copy: "48.9K",
      views: "217.8K",
      to : "/templates/design/design-project-template-S8qNg15A"
    },
    {
    img: img2,
    icon: dp2,
    title: "Design System Checklist",
    desc: "by Rahul JR, Senior Product Manager @ Zoho Corp",
    cont: "A design system unites product teams around a common visual language.",
    copy: "21.9K",
    views: "173.3K",
      to : "/templates/design/design-system-checklist-yZn5VFoN",
  },
  {
    img: img3,
    icon: dp3,
    title: "Freelance Branding Project",
    desc: "by Stu Smith, Designer @ Trello",
    cont: "Use this template to run your next Branding project.",
    copy: "22.9K",
    views: "114.5K",
    to : "/templates/design/freelance-branding-project-Z5m66HsJ",
  },
  {
    img: img4,
    icon: dp4,
    title: "Game Design Template",
    desc: "by Chris McCrimmons, Cinevva",
    cont: "Easy-to-organize template for planning a video game project.",
    copy: "23.7K",
    views: "104.3K",
    to : "/templates/design/game-design-template-ONBQMNbp",
  },
  {
    img: img5,
    icon: dp5,
    title: "Portfolio - Step by Step guide",
    desc: "by Utsav Sheth, UI/UX Designer",
    cont: "This template is for beginners who want to make a portfolio for their next job.",
    copy: "10.3K",
    views: "54.4K",
    to : "/templates/design/portfolio---step-by-step-guide-nhjzRy0b",
  },
  {
    img: img6,
    icon: dp6,
    title: "Research Iteration",
    desc: "by Jessica Crabb, Product Designer @ Pivotal Labs",
    cont: "Set-up your user research plan from start to finish!",
    copy: "13.9K",
    views: "102.9K",
    to : "/templates/design/research-iteration-8t9qgmNz",
  },
  {
    img: img7,
    icon: dp7,
    title: "Design Sprint",
    desc: "by Trello Design Team",
    cont: "Use this design sprint template to ideate on early concepts and test ideas out with customers.",
    copy: "26.2K",
    views: "222.1K",
    to : "/templates/design/design-sprint-6NanhvtF",
  },
  {
    img: img8,
    icon: dp8,
    title: "Artist Commissions",
    desc: "by Joey Myers Design, Freelancer",
    cont: "This board is for creative professionals who need a simple but effective workflow for client work.",
    copy: "7K",
    views: "34K",
    to : "/templates/design/artist-commissions-dJ1wZryE",
  },
  {
    img: img9,
    icon: dp9,
    title: "Character Setup",
    desc: "by Pearl, Writer",
    cont: "A template for writers to setup the characters of your stories in order and make distinguishing characteristics...",
    copy: "5.1K",
    views: "21.9K",
    to : "/templates/design/character-setup-zWwc4Zlj",
  },
  {
    img: img10,
    icon: dp10,
    title: "Design Huddle",
    desc: "by Courtney Drake, Design Manager @ Trello",
    cont: "Use design huddles to create a safe space for feedback within your team.",
    copy: "83.9K",
    views: "136.3K",
    to : "/templates/design/design-huddle--TYEgW2wl",
  },
  {
    img: img11,
    icon: dp11,
    title: "Design Project Board Template",
    desc: "by POLYGON: Human Centered Space Design",
    cont: "A template for architectural design teams.",
    copy: "15.7K",
    views: "63.4K",
    to : "/templates/design/design-project-board-template-DcuBS8Hh",
  },
  {
    img: img12,
    icon: dp12,
    title: "Heuristic Evaluation",
    desc: "by Tiffany Wang, Product Designer @ Trello",
    cont: "Use this board to conduct a heuristic evaluation of any UI projects your team is working on.",
    copy: "5K",
    views: "31.8K",
    to : "/templates/design/heuristic-evaluation-tlVIJm0l",
  },
  {
    img: img13,
    icon: dp13,
    title: "Interior Design Order Tracking",
    desc: "by Maria Martin, Founder @ Design Appy",
    cont: "Easily place and track orders for your interior design projects.",
    copy: "8.3K",
    views: "54.5K",
    to : "/templates/design/interior-design-order-tracking-MT8OMgny",
  },
  {
    img: img14,
    icon: dp14,
    title: "Photography Order Production Tracking",
    desc: "by Jesse Starr, Owner @ Two Elk Studios",
    cont: "A template for tracking the production of photography orders and works.",
    copy: "1.9K",
    views: "13.2K",
    to : "/templates/design/photography-order-production-tracking-6y4dKks4",
  },
  {
    img: img15,
    icon: dp15,
    title: "Photography Session Workflow Tracking",
    desc: "by Jesse Starr, Owner @ Two Elk Studios",
    cont: "Use this board to track your photography sessions once they have been booked, to have an overview of your workflow.",
    copy: "2.9K",
    views: "14.1K",
    to : "/templates/design/photography-session-workflow-tracking-p4sQNTHx",
  },
  {
    img: img16,
    icon: dp16,
    title: "Research Project",
    desc: "by Christopher Davis, Product Designer @ Trello",
    cont: "At Trello, research is fundamental to building great experiences.",
    copy: "14.8K",
    views: "85.1K",
    to : "/templates/design/research-project-DtCkfoiI",
  },
  {
    img: img17,
    icon: dp17,
    title: "UX Empathy Mapping",
    desc: "by Binnie Poonian, UX Designer",
    cont: "Topics to cover during a empathy mapping workshop.",
    copy: "2.6K",
    views: "15.4K",
    to : "/templates/design/ux-empathy-mapping-VemLA4Nc",
  },
  {
    img: img18,
    icon: dp18,
    title: "Web Design | Development",
    desc: "by Kofi Bawuah Boakye, Product Designer",
    cont: "This is a quick setup for all freelance and personal web design and web development projects.",
    copy: "20.3K",
    views: "75.1K",
    to : "/templates/design/web-design-%7C-development-OJR1JJT7",
  }
  ];

  return (
    <div className=" p-10 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 p-3  ">
        <Link to="/templates" className="hover:underline">Template gallery /<br /></Link>
        <Link to="/templates/design" className=" hover:underline ">Design</Link></div>
       <div className="flex gap-4 ">
         <img src="https://trello.com/assets/157c58403db677619bea.svg" alt="" className="h-12 rounded"/>
        <h1 className="text-xl font-bold text-gray-800  text-center mt-2">Design Template </h1>

       </div>
        <div className="p-5 ">
          <div className="flex flex-wrap  ">
            {reldata.map((obj) => {
              let { img, icon, title, desc, cont, copy, views, to } = obj;
              return (
                <Link to={to} className="flex flex-col gap-2 mt-7  w-70">
                  <div className="relative">
                    <img src={img} alt="" className="h-[132px] w-[247px] rounded" />
                    <div className="bg-white p-[4px] ml-2 flex flex-start rounded-full h-[48px] w-[48px] -mt-9 shadow-md relative z-[3]">
                      <img
                        src={icon}
                        alt=""
                        className="h-[40px] w-[40px] rounded-full"
                      />
                    </div>
                  </div>
                  <h1 className="font-semibold text-[16px] px-2 font-black/80">
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
      </div>
      <div className="flex gap-10 pb-9">
        <div>
            <h1 className="text-2xl font-medium pb-6">What's Trello?</h1>
            <p className="w-120">Trello lets you work more collaboratively and get more done. Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
            <div className="flex gap-5 mt-5">
              <Link to="" className="bg-blue-600 text-white p-3 rounded">Sign up-it's free</Link>
              <Link to="" className="underline mt-2 text-gray-500">Learn more</Link>
            </div>
        </div>

        <div>
            <img src="https://trello.com/assets/ea5b895d726e6dc287da.svg" alt="" />
           
        </div>
         
        
      </div>
      <hr className="p-3 text-gray-300 w-200" />
       <div className="flex gap-5 pb-10">
          <p className="w-176 text-[13px]">Help your team embrace design thinking with these design templates. You'll go from ideating to creating and sharing in no time! Whether you’re researching the problem space or discussing high-resolution mock-ups with your team, Trello templates for design thinking can help you manage your work at all stages. With Trello you can keep all your notes and research in one place; integrate with your favorite design tools like Figma and Invision; and easily attach and visualize designs for a handoff with your team. It’s hard enough starting with a blank canvas - ditch the blank board and start with a Trello design template!</p>
        <img src="https://trello.com/assets/1ace841394813084fc5a.svg" className="h-30" alt="" />
        
         </div>
    </div>
    
  );
};

export default DesignTemplate;
