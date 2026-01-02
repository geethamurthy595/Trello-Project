import Premium1 from "../../../assets/Premium1.webp";
import Boards from "../../../assets/Boards.svg";
import Field from "../../../assets/Field.svg";
import Export from "../../../assets/Export.svg";
import Priority from "../../../assets/Priority.svg";
import Unlimited from "../../../assets/Unlimited.svg";
import Calender from "../../../assets/Calender.svg";
import john from "../../../assets/johnDeere.svg";
import coin from "../../../assets/coinbase.svg";

 import grand from "../../../assets/G.svg";
 import visa from "../../../assets/vi.svg";
 import zoom from "../../../assets/Zo.png";
import { useState } from "react";
import { Link } from "react-router";
import NavBar from "../../NavBar";
import UniversalFooter from "../../UniversalFooter";

let Premium = () => {
  const [openItems, setOpenItems] = useState({});
  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  let [bgimg, setBgimg] = useState(" Premium1");
  let [boxshadow, setBoxshadow] = useState("boxshadow");
  let [b1, setB1] = useState(true);
  let [b2, setB2] = useState(false);
  let [b3, setB3] = useState(false);

  let handleImage1 = () => {
    setBgimg("Premium1");
    setB1(true);
    setB2(false);
    setB3(false);
  };
  let handleImage2 = () => {
    setBgimg("Premium2");
    setB2(true);
    setB1(false);
    setB3(false);
  };
  let handleImage3 = () => {
    setBgimg("Premium3");
    setB3(true);
    setB1(false);
    setB2(false);
  };

  return (
    <>
    <NavBar/>
      <section className=" h-105 bg-gray-100 w-full">
        <img
          className="h-80 w-160 absolute right-33 top-18"
          src={Premium1}
          alt=""
        />

        <div className=" h-80 w-150 absolute left-45 top-20">
          {" "}
          <br />
          <br />
          <br />
          <h1 className="text-4xl text-[#091E42]  font-bold ">
            Trello Premium
          </h1>{" "}
          <br />
          <p className="text-[18px] text-2xl leading-7">
            Add Atlassian Intelligence (AI) to your boards and get <br />{" "}
            unlimited automation. Plus, get advanced Mirror card <br />{" "}
            functionality.
          </p>
          <h3 className=" text-[#091E42] text-[18px] font-bold absolute bottom-25 left-27">
            {" "}
            Just $10 a month.
          </h3>
          <Link to="/signUp" className="h-11 w-22 p-2  text-white bg-blue-600 border-2 rounded hover:bg-blue-900 absolute bottom-2">
            Sign up
          </Link>
          <Link to="/login"
            className=" absolute left-26 bottom-5 text-blue-600 text-decoration: underline"
            href=""
          >
            or login
          </Link>
        </div>
      </section>
      <section className=" h-90 w-full">
        <h1 className="text-3xl text-[#091E42]  font-semibold absolute left-56 bottom-25 ">
          A community of <br /> millions of users
        </h1>{" "}
        <br />
        <p className="text-[19px] absolute left-56 bottom-0.5">
          around the globe rely on Trello to <br /> organize their daily tasks
          and <br /> activities.
        </p>
        <h1 className="text-3xl text-[#091E42]  font-semibold absolute left-170 bottom-25">
          80% <br />
          of Fortune 500
        </h1>
        <p className="text-[19px] absolute left-170 bottom-9">
          companies use Trello to improve <br /> efficiency.
        </p>
      </section>
      <section className="bg-[#B2D4FF]  px-[200px] h-175 w-full">
        <br />
        <br />
        <h1 className="font-semibold text-4xl  text-[#091E42]  ">
          Maximize productivity with <br /> Trello Premium
        </h1>

        <div className="flex relative items-start justify-center py-10">
          <div className="flex  gap-1 absolute right-[20px] top-[10px]  ">
            <p
              className={`${
                b1 ? "w-18 bg-gray-500 " : "w-2 bg-black rounded-full"
              } h-2 rounded transition-all cursor-pointer `}
              onClick={handleImage1}
            ></p>
            <p
              className={`${
                b2 ? "w-18 bg-gray-500 " : "w-2 bg-black rounded-full"
              } h-2  rounded transition-all cursor-pointer`}
              onClick={handleImage2}
            ></p>
            <p
              className={`${
                b3 ? "w-18 bg-gray-500 " : "w-2 bg-black rounded-full"
              } h-2 rounded transition-all cursor-pointer`}
              onClick={handleImage3}
            ></p>
          </div>
          {/* Left Section */}

          <div className="w-1/3 pr-10 cursor-pointer">
            {/* Inbox */}

            <div
              className={`flex  ${
                b1 ? "bg-white" : ""
              } relative mb-8 pr-4 rounded-md ${
                b1 ? boxshadow : ""
              } transition-all`}
              onClick={handleImage1}
            >
              <div
                className={`w-3   top-0 rounded-l bg-sky-500 mr-3 ${
                  b1 ? "block" : "hidden"
                } transition-all`}
              ></div>
              <div className="mx-2 my-4">
                <h2 className="text-xl font-semibold pl-3">
                  Unlock full planner access
                </h2>
                <p className={`text-gray-600 mt-2 `}>
                  Drag and drop cards on a synced <br /> calendar that works
                  with Google <br /> Calendar and Outlook.
                </p>
              </div>
            </div>

            {/* Boards */}
            <div
              className={`flex ${
                b2 ? "bg-white" : ""
              } relative mb-8 pr-4 rounded-md ${
                b2 ? boxshadow : ""
              } transition-all `}
              onClick={handleImage2}
            >
              <div
                className={`w-3     top-0 rounded-l bg-sky-500 mr-4 ${
                  b2 ? "block" : "hidden"
                } transition-all`}
              ></div>
              <div className="mx-2 my-4">
                <h2 className="text-xl font-semibold pl-3">
                  Stay more in sync
                </h2>
                <p className={`text-gray-600 mt-2 `}>
                  No more missed updates and <br />
                  redundancies - mirror cards to view to-dos across boards.
                </p>
              </div>
            </div>

            {/* Planner */}
            <div
              className={`flex ${
                b3 ? "bg-white" : ""
              } relative mb-8 pr-4 rounded-md ${
                b3 ? boxshadow : ""
              } transition-all`}
              onClick={handleImage3}
            >
              <div
                className={`w-3  top-0 rounded-l bg-sky-500 mr-4 ${
                  b3 ? "block" : "hidden"
                } transition-all`}
              ></div>
              <div className="mx-2 my-4">
                <h2 className="text-xl font-semibold pl-3">
                  More power at your fingertips
                </h2>
                <p className={`text-gray-600 mt-2 `}>
                  Cross off tasks more effectively with <br /> Custom Fields and
                  advanced checklists.
                </p>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div>
            <div className="mx-px float-right"></div>
          </div>

          <div className={`w-[800px] h-[500px] shadow bg-cover ${bgimg}  `}>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 h-120 w-full">
        <h1 className="font-semibold text-4xl text-white absolute left-50 top-390 ">
          With Trello Premium you’ll <br /> get everything you love in <br />{" "}
          our free version, plus:
        </h1>
        <Link to="/login" className="inline-flex h-15 w-40 p-4 rounded bg-white absolute left-50 top-430">
          Sign up-it's Free!
        </Link>

        <div className=" h-60 w-60 absolute left-185  top-380">
          <img src={Calender} alt="" />{" "}
          <p className="text-white text-[20px] absolute left-18 top-1">
            Advanced Planner <br /> and Mirror Card <br /> Functionality
          </p>
        </div>
        <div className=" h-60 w-50 absolute left-185  top-412">
          <img src={Field} alt="" />
          <p className="text-white text-[20px] absolute left-18 top-1 ">
            Custom Fields, <br /> advanced <br /> checklists,admin <br />{" "}
            controls
          </p>
        </div>
        <div className=" h-60 w-50 absolute left-186  top-452">
          <img src={Export} alt="" />
          <p className="text-white text-[20px] absolute left-18 top-1 ">
            Data export
          </p>
        </div>
        <div className=" h-60 w-50 absolute left-275  top-380">
          <img src={Unlimited} alt="" />
          <p className="text-white text-[20px] absolute left-18 top-1 ">
            Unlimited storage <br /> (250MB/file)
          </p>
        </div>
        <div className=" h-60 w-60 absolute left-275  top-412">
          <img src={Boards} alt="" />
          <p className="text-white text-[20px] absolute left-18 top-1 ">
            Unlimited boards <br /> and automations
          </p>
        </div>
        <div className=" h-60 w-60 absolute left-275  top-452">
          <img src={Priority} alt="" />
          <p className="text-white text-[20px] absolute left-18 top-1 ">
            Priority Support
          </p>
        </div>
      </section>

      <section className=" h-120 w-full">
        <p className="absolute left-90 top-500 text-xl">
          Join a community of millions of users globally who are using Trello to
          get more done.
        </p>
        <img className="absolute left-110 top-520 " src={coin} alt="" />
        <img className="absolute  left-160 top-518" src={john} alt="" />
        <img className="absolute left-210 top-520 " src={grand} alt="" />
        <img className="absolute  left-140 top-560 " src={visa} alt="" />
        <img
          className="absolute left-190 top-560 h-20 w-40 "
          src={zoom}
          alt=""
        />
      </section>
      <section className="mx-[200px] ">
        <h1 className="text-[36px] font-sans tracking-[1px] text-center text-[#091E42]">
          Frequently asked questions
        </h1>{" "}
        <br /> <br />
        <div className="border-b w-300 border-gray-200 ">
          <h3
            className="text-[24px] font-sans font-semibold text-9xl cursor-pointer transition-all text-[#091E42]"
            onClick={() => toggleItem(0)}
          >
            {openItems[0] ? "-" : "+"} What are the benefits of Trello Premium?
          </h3>
          {openItems[0] && (
            <p className="px-4 pt-4 text-gray-150 text-[18px]">
              With Trello Premium, teams can track and visualize multiple
              projects in several ways with a{" "}
              <a href="" className="underline text-blue-500 ">
                Board,Table,Timeline.and <br />
                Calender views.
              </a>
              Trello Premium includes privacy controls and other administrative
              tools that are helpful to businesses <br />
              that want to take greater control of their boards and data.
            </p>
          )}
          <br />
          {/* <hr className="w-5xl absolute left-[200px] text-gray-200" /> */}
        </div>
        <br />
        <div className="border-b border-gray-200 ">
          <h3
            className="text-[24px] text-9xl font-sans font-semibold text-[#091E42] cursor-pointer"
            onClick={() => toggleItem(1)}
          >
            {openItems[1] ? "-" : "+"} How long is Trello Premium Trial?
          </h3>
          {openItems[1] && (
            <p className=" px-4 pt-4 text-gray-150 text-[18px]">
              All users can enroll their Workspace in a free 14 day trial of
              Trello Premium. With that trial, users within your Workspace can{" "}
              <br /> create unlimited Trello boards with unlimited options for
              automation. Your team can test-drive the convenience and utility
              of <br /> visualizing your work in a{" "}
              <a href="" className="underline text-blue-500">
                Table,Calender,and Timeline views.
              </a>
              along with access to other Premium features.
            </p>
          )}
          <br />
          {/* <hr className="w-5xl absolute left-[200px] text-gray-200" /> */}
        </div>
        <br />
        <div className="border-b border-gray-200 ">
          <h3
            className="text-[24px] text-9xl font-sans font-semibold text-[#091E42] cursor-pointer"
            onClick={() => toggleItem(2)}
          >
            {openItems[2] ? "-" : "+"} How many boards are included in Trello
            Premium?
          </h3>
          {openItems[2] && (
            <p className=" px-4 pt-4 text-gray-150 text-[18px]">
              All users with a Trello Premium Workspace will get access to
              create unlimited Trello boards and unlimited Workspace <br />{" "}
              automation commands. .
            </p>
          )}
          <br />
          {/* <hr className="w-5xl absolute left-[200px] text-gray-200" /> */}
        </div>
        <br />
        <div className="border-b border-gray-200 ">
          <h3
            className="text-[24px] text-9xl font-sans font-semibold text-[#091E42] cursor-pointer"
            onClick={() => toggleItem(3)}
          >
            {openItems[3] ? "-" : "+"} How does Trello Premium billing work?
          </h3>
          {openItems[3] && (
            <p className=" px-4 pt-4 text-gray-150 text-[18px]">
              When you upgrade your Workspace to Trello Premium, you have the
              option to choose between a monthly or annual billing <br /> plan.
              Annual billing is paid in advance and gives a discount for each
              member as compared to monthly billing.
            </p>
          )}
          <br />
        </div>
        <br />
      </section>

      <section className="h-100 w-full  bg-[#403294] flex items-center justify-center">
        <h1 className="text-3xl font-bold absolute top-725 text-white">
          Haven’t tried <span className="text-white">Trello</span> before?
        </h1>{" "}
        <br />
        <p className="absolute top-740 text-xl text-white">
          Sign up for free and join +100 million users worldwide <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;who
          are using Trello to get more done.
        </p>
        <br />
        <br />
        <div className="flex justify-center mb-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded text-black  focus:outline-none w-80 bg-white absolute top-770 left-135"
          />
          <button className="px-4 py-2 bg-white text-blue-900 font-medium rounded absolute left-220 top-770">
            Sign up
          </button>
        </div>
        <p className="text-sm text-gray-200 absolute top-785 text-[17px]">
          By entering my email, I acknowledge the &nbsp;
          <a href="#" className="underline text-gray-100 ">
            Atlassian Privacy Policy
          </a>
        </p>
      </section>
      <UniversalFooter/>
    </>
  );
};
export default Premium;
