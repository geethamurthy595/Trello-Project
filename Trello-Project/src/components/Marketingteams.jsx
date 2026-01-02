import Marketing2 from "../assets/Marketing2.png";
import john from "../assets/johnDeere.svg";
import coin from "../assets/coinbase.svg";
import grand from "../assets/Grand-Hyatt.svg";
import visa from "../assets/Visa.svg";
import zoom from "../assets/Zoom.webp";
import visualize from "../assets/visualize.webp";
import powerup from "../assets/Powerup.svg";
import Checklist from "../assets/Checklist.webp";
import { useState } from "react";
import Free from "./Free";
import Standard from "./Standard";
import Prem from "./Prem";
import Enterprise from "./Enterprise";
import MCard from "./MCard";
import { Link } from "react-router";
import UniversalFooter from "./UniversalFooter";
import NavBar from "./NavBar";



let Marketingteams = () => {
  let [bgimg, setBgimg] = useState("Marketing1");
  let [boxshadow, setBoxshadow] = useState("boxshadow");
  let [b1, setB1] = useState(true);
  let [b2, setB2] = useState(false);
  let [b3, setB3] = useState(false);

  let handleImage1 = () => {
    setBgimg("Marketing1");
    setB1(true);
    setB2(false);
    setB3(false);
  };
  let handleImage2 = () => {
    setBgimg("Marketing2");
    setB2(true);
    setB1(false);
    setB3(false);
  };
  let handleImage3 = () => {
    setBgimg("Marketing3");
    setB3(true);
    setB1(false);
    setB2(false);
  };


  const resources = [
    {
      title:
        "How To Plan A Successful Marketing Campaign In Trello [Ebook]",
      description:
        "In this ebook, we’ll show you how to optimize your marketing campaign process with Trello, and establish br a productive workflow for getting from start to finish that keeps your whole team involved and on track.",
      link: "#",
    },
    {
      title:
        "How To Create Your Perfect Editorial Calendar With Trello [Blog Post]",
      description:
        "Follow this guide to create your own custom editorial calendar in a few easy steps so you can take any idea from potential pitch to successful, published blog post in style.",
      link: "#",
    },
    {
      title:
        "How To Visually Plan Your Email Calendar With Trello [Blog Post]",
      description:
        "This may come as a complete surprise, but we use Trello at Trello to manage our email process. Let’s talk about why it’s a great tool for email calendar planning.",
      link: "#",
    },
  ];


  return (
    <>
    <NavBar/>
      <div className=" w-full h-90 custom-bg"><br />
      <a href="#" className=" text-center  text-gray-300  underline mt-12 ml-136 text-lg">
        &lt; Go back to Team Solutions
      </a>
      <h1 className="text-5xl text-white font-bold mb-4 mt-12 ml-116">Trello For Marketing Teams</h1>
      <p className=" text-white max-w-2xl text-center text-2xl ml-106 tracking-normal break-normal">
        Whether launching a new product, campaign, or creating <br /> content,
        experience how Trello helps marketing teams around <br /> the world organize,
        plan, and get more done.
      </p>
      </div>

      <div className="w-full h-95 ">
        <img
          className="h-70 w-90 absolute top-120 left-50"
          src={Marketing2}
          alt=""
        />
        <h1 className="text-xl text-[#091E42]  font-medium tracking-wider absolute top-125 left-150">
          Trello’s boards, lists, and cards enable teams to go from ideas <br />
          to action in seconds. Visual and easy-to-use, Trello helps teams{" "}
          <br /> bring projects to life and keep them moving forward.
        </h1>
        <Link to="/signUp" className="h-13 w-40 absolute top-155  left-150 p-3 text-white rounded bg-blue-600">
          Sign Up - It's Free
        </Link>
      </div>
      <section className=" bg-gray-100 h-100 w-full">
        <p className=" absolute top-220 left-90 text-xl">
          Join a community of millions of users globally who are using Trello to
          get more done.
        </p><br />
        <img className="absolute top-240 left-100" src={coin} alt="" />
        <img className="absolute top-240 left-150" src={john} alt="" />
        <img className="absolute top-240 left-200" src={grand} alt="" />
        <img className="absolute top-270 left-120" src={visa} alt="" />
        <img
          className="absolute top-270 left-180 h-20 w-40"
          src={zoom}
          alt=""
        />
      </section>
      <br />
      <br />
      <br />
      <h1 className="text-3xl text-[#091E42] text-center font-medium  ">
        Your team’s workspace for marketing success
      </h1>
      <br />
      <p className="text-lg text-[#091E42] text-center   ">
        All marketers have one thing in common: they wear a lot of (unique)
        hats. <br /> Organize all of your marketing processes, projects, and
        initiatives in one <br /> place with Trello.
      </p>{" "}
      <br />
      <section className=" h-190 w-full bg-cyan-50"><br />
        <a
          className="text-blue-600 text-lg font-medium absolute left-160 underline"
          href=""
        >
          See all of our Marketing templates
        </a>
<br /><br />

        <div className="flex relative items-start justify-center py-10">
          <div className="flex  gap-1 absolute right-[20px] top-[10px]  ">
            <p
              className={`${
                b1 ? "w-18 bg-gray-500 " : "w-2 bg-black rounded-full"
              } h-2 rounded transition-all `}
              onClick={handleImage1}
            ></p>
            <p
              className={`${
                b2 ? "w-18 bg-gray-500 " : "w-2 bg-black rounded-full"
              } h-2  rounded transition-all`}
              onClick={handleImage2}
            ></p>
            <p
              className={`${
                b3 ? "w-18 bg-gray-500 " : "w-2 bg-black rounded-full"
              } h-2 rounded transition-all`}
              onClick={handleImage3}
            ></p>
          </div>
          {/* Left Section */}

          <div className="w-1/3 pr-10 cursor-pointer">
            {/* Inbox */}

            <div
              className={`flex  ${
                b1 ? "bg-white" : ""
              } relative mb-8 pr-4  ${
                b1 ? boxshadow : ""
              } transition-all`}
              onClick={handleImage1}
            >
              <div
                className={`w-3   top-0  mr-3 ${
                  b1 ? "block" : "hidden"
                } transition-all`}
              ></div>
              <div className="mx-2 my-4">
                <h2 className="text-xl font-semibold pl-1">
                EDITORIAL CALENDAR

                </h2>
                <p className={`text-gray-600 mt-2 `}>
                Seamlessly coordinate content creation, <br /> editing, and production with the
                 entire <br /> team, while keeping an eye on the <br /> publishing calendar and distribution <br /> strategy.

                </p>
              </div>
            </div>
             {/* Boards */}
             <div
              className={`flex ${
                b2 ? "bg-white" : ""
              } relative mb-8 pr-4  ${
                b2 ? boxshadow : ""
              } transition-all `}
              onClick={handleImage2}
            >
              <div
                className={`w-3     top-0 mr-4 ${
                  b2 ? "block" : "hidden"
                } transition-all`}
              ></div>
              <div className="mx-2 my-4">
                <h2 className="text-xl font-semibold pl-1">
                  GO-TO-MARKET CAMPAIGNS
                </h2>
                <p className={`text-gray-600 mt-2 `}>
                Seamlessly coordinate cross-team, go-to- <br />  market brand and product launches 
                with <br /> a single Trello board, and ditch the <br /> browser tab tango of trying to <br />
                collaborate across multiple apps.

                </p>
              </div>
            </div>
             {/* Planner */}
             <div
              className={`flex ${
                b3 ? "bg-white" : ""
              } relative mb-8 pr-4  ${
                b3 ? boxshadow : ""
              } transition-all`}
              onClick={handleImage3}
            >
              <div
                className={`w-3  top-0  mr-4 ${
                  b3 ? "block" : "hidden"
                } transition-all`}
              ></div>
              <div className="mx-2 my-4">
                <h2 className="text-xl font-semibold pl-3">
                EMAIL WORKFLOW
                </h2>
                <p className={`text-gray-600 mt-2 `}>
                There's one secret to keeping the moving <br /> pieces together: a bulletproof
                 process <br /> with seamless cross-team collaboration.  <br />
                 Litmus shares their workflow for email <br /> marketing success.
                </p>
              </div>
            </div>
          </div>

            {/* Right Section */}
             <div>
            <div classname="mx-px float-right"></div>
          </div>

          <div className={`w-[800px] h-[500px] shadow bg-cover ${bgimg}  `}>
          </div>
        </div>








      </section>
      <section className=" h-110 w-full">
        <h1 className="text-3xl text-[#091E42] absolute left-67 top-560 font-medium  ">
          Visualize your work from <br /> the right angle.
        </h1>
        <p className="text-xl text-[#091E42] absolute left-67 top-580 ">
          Power your Marketing team with Calendar <br /> View and ensure
          campaign launches are cool, <br /> calm, and collected-instead of
          chaotic.
        </p>
        <a
          className="text-blue-600 text-lg font-medium absolute left-67 top-610 underline"
          href=""
        >
          Learn more about Trello views
        </a>
        <img className="h-90 w-140 ml-191 mt-12" src={visualize} alt="" />
      </section>
      <section className="h-110 w-full "><br />
        <img className="absolute left-40 mt-18" src={powerup} alt="" />
        <br />
        <br />
        <br />{" "}
        <h1 className="text-3xl text-[#091E42] mt-12 ml-216 font-medium  ">
          Power-Up Your Marketing <br /> Team’s Productivity
        </h1>
        <p className="text-xl text-[#091E42] mt-5 ml-216 font-normal">
          Simple, adaptable, customizable. Make Trello <br />
          your marketing hub with Power-Ups. Connect
          <br />
          your favorite apps and integrations to Trello <br />
          and gather all of the information you need to <br /> get things done
          under one roof.
        </p>
        <br />
        <a
          className="text-blue-600 text-lg font-medium ml-216 underline"
          href=""
        >
          Explore 150+Power-ups
        </a>
      </section>
      <section className="h-90 w-full">
        <h1 className="text-3xl text-[#091E42] mt-21 ml-61 font-medium">
          Move Work Forward, Auto- <br />
          magically
        </h1>
        <p className="text-xl text-[#091E42] mt-5 ml-61 font-normal">
          Trello’s built-in automation makes it easy to <br /> automate the
          repetitive, everyday tasks that <br /> keep your team from focusing on
          the work <br /> that matters most.
        </p>
        <br />
        <a
          className="text-blue-600 text-lg font-medium ml-61 underline"
          href=""
        >
          Let the robots do the work
        </a>
        <img
          className="h-80 w-130 absolute top-800 left-190 "
          src={Checklist}
          alt=""
        />
      </section>
      <section className="h-250 w-full  bg-purple-100"> <br /><br />
      <h1 className="text-4xl text-[#091E42] text-center font-medium">
      Resources To Up Your Marketing Game
        </h1><br />
        <p className="text-center text-lg tracking-widest
">Everything you need to improve your marketing department workflow with <br />
           Trello, from industry leaders and the Trello team.</p>
           <div className=" flex justify-center p-10">
      <div className="max-w-3xl">
        

        {/* Resource list */}
        {resources.map((item, index) => (
          <div
            key={index}
            className="border-t border-gray-300 pt-6 pb-6"
          >
            <h2 className="text-lg font-semibold text-gray-800 tracking-wider uppercase">
              {item.title}
            </h2>
            <p className="text-gray-800  text-lg  mt-2">{item.description}</p>
            <a
              href={item.link}
              className="text-blue-600 font-semibold text-sm mt-2 inline-block underline"
            >
              READ MORE
            </a>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-center p-6">
      <div className="bg-blue-900 text-white w-240 h-28 p-6 rounded-md shadow-md">
        <p className="text-xs font-semibold uppercase">Now Available</p>
        <h2 className="text-lg font-bold mt-1">
          A 14-Day Free Trial of Premium!
        </h2>
        <p className="text-sm mt-2 text-blue-100">
          Get unlimited boards, Trello views, and limitless automation, plus a ton more.
        </p>
        <button className="ml-192  bg-white text-blue-900 font-semibold px-4 py-2 rounded hover:bg-gray-100 absolute top-1105">
          Try it today
        </button>
      </div>
    </div>
      </section><br /><br /><br />

      <section className=" h-150 w-full">

<MCard/>

      </section>
       <section className=" w-full h-57"><br />
       <h1 className="text-4xl text-[#091E42] text-center font-medium">
       Trello Your Way
        </h1><br />
        <p className="text-center text-lg tracking-widest">
        Ready to get your team up and running? Try the business <br />
         tool so easy to use, your team can’t help but collaborate.
           </p><br />
           <a
              href=""
              className="text-blue-600 font-semibold text-medium text-center absolute left-160 inline-block underline"
            >
              Learn more about our pricing and plans 
            </a>
       </section>
         <section className="h-160 w-full ">
      

         <div className="flex justify-center">
    <Free/>
    <Standard/>
    <Prem/>
   <Enterprise/>

    </div>


         </section>
         <section class="bg-purple-700 text-white py-8">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
      
    
      <h2 className="text-medium font-semibold mb-4 ml-49">
        Well, what are you waiting for?   </h2> <br /><br />
        <h2 className="text-medium absolute left-55.5 top-1513 "> Head over to your boards and start getting things done!
     </h2>

   
      <button 
        class="bg-white text-black absolute left-270 px-6 py-2 rounded font-medium 
               hover:bg-gray-100 transition shadow">
        Sign up
      </button>
    </div>
  </section>
<UniversalFooter/>
      
    </>
  );
};
export default Marketingteams;
