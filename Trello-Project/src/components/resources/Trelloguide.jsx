import Coin1 from "../../assets/Coin1.svg";
import John1 from "../../assets/John1.svg";
import Grand1 from "../../assets/Grand1.svg";
import Visa1 from "../../assets/Visa1.svg";
import Zoom1 from "../../assets/Zoom1.png";
import Pm from "../../assets/Pm.svg";
import Business from "../../assets/Business.svg";
import Rm from "../../assets/Rm.svg";
import Design from "../../assets/Design.svg";
import Mr from "../../assets/Mr.svg";
import Eng from "../../assets/Eng.svg";
import Home from "../../assets/Home.png";
import Plus from "../../assets/Plus.png";
import Share from "../../assets/Share.png";
import Dumble from "../../assets/Dumble.png";
import Star from "../../assets/Star.png";
import Computer from "../../assets/Computer.png";
import Eyes from "../../assets/Eyes.png";
import Ques from "../../assets/Ques.png";
import Pen from "../../assets/Pen.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import NavBar from "../NavBar";
import UniversalFooter from "../UniversalFooter";
let Trelloguide = () => {
  const steps = [
    {
      id: 1,
      title: "Learn Trello board basics",
      chapter: "CHAPTER 1",
      img: Home,
    },
    {
      id: 2,
      title: "Create your first project",
      chapter: "CHAPTER 2",
      img: Plus,
    },
    {
      id: 3,
      title: "Onboard your team to Trello",
      chapter: "CHAPTER 3",
      img: Share,
    },
    {
      id: 4,
      title: "Integrate Trello with other apps",
      chapter: "CHAPTER 4",
      img: Dumble,
    },
    {
      id: 5,
      title: "Powerful collaboration features",
      chapter: "CHAPTER 5",
      img: Star,
    },
    {
      id: 6,
      title: "Activate different views",
      chapter: "CHAPTER 6",
      img: Computer,
    },
    {
      id: 7,
      title: "Automate anything in Trello",
      chapter: "CHAPTER 7",
      img: Eyes,
    },
    {
      id: 8,
      title: "Set permissions and admin controls",
      chapter: "CHAPTER 8",
      img: Ques,
    },
    {
      id: 9,
      title: "Learn Trello’s top tips and tricks",
      chapter: "CHAPTER 9",
      img: Pen,
    },
  ];

  const categories = [
    { id: 1, title: "Project Management", img: Pm },
    { id: 2, title: "Business", img: Business },
    { id: 3, title: "Sales", img: Rm },
    { id: 4, title: "Design", img: Design },
    { id: 5, title: "Engineering", img: Mr },
    { id: 6, title: "Marketing", img: Eng },
  ];

  return (
    <>
    <NavBar/>
      <div className="flex ">
        <div className="text-[15px] pl-50  w-[580px]  rounded   ">
          <nav className="pr-6 sticky top-[100px] ">
            <h3 className="font-bold text-[22px]">
              Getting started with <br /> Trello
            </h3>{" "}
            <br />
            <ol className="space-y-1 list-decimal">
              <li className="py-3 px-8 hover:text-gray-500 cursor-pointer">
                {" "}
                Learn Trello board basics
              </li>
              <li className="py-3 px-8 hover:text-gray-500 cursor-pointer">
                Create your first project
              </li>
              <li className="py-3 px-8 hover:text-gray-500 cursor-pointer">
                Onboard your team to Trello
              </li>
              <li className="py-3 px-8 hover:text-gray-500 cursor-pointer">
                Integrate Trello with other apps
              </li>
              <li className="py-3 px-8 hover:text-gray-500  cursor-pointer">
                Powerful collaboration features
              </li>
              <li className="py-3 px-8 hover:text-gray-500  cursor-pointer">
                Activate different views
              </li>
              <li className="py-3 px-8 hover:text-gray-500 cursor-pointer">
                Automate anything in Trello
              </li>
              <li className="py-3 px-8 hover:text-gray-500 cursor-pointer">
                Set permissions and admin controls
              </li>
              <li className="py-3 px-8 hover:text-gray-500 cursor-pointer">
                Learn Trello’s top tips and tricks
              </li>
            </ol>
          </nav>
        </div>
        <div className=" w-full bg-gradient-to-t from-white to-blue-100 shadow-2xl">
          <div className="mt-5">
            <h1 className="font-semibold text-4xl text-center ">
              Getting started with Trello
            </h1>
            <p className="text-[18px] text-center mt-2">
              Welcome to Trello! This guide will walk you through everything you
              need to <br />
              know about using Trello, from setting up your first project to
              equipping your <br />
              team with all of the tools they need to get the job done. Each
              chapter <br />
              includes easy to follow steps, tips, and templates that will turn
              you into a <br />{" "}
            </p>
            <h4 className="text-center text-[18px]">
              Trello champion in no time.
            </h4>
            <div className="flex justify-center items-center mt-5">
              <button class="bg-blue-600 text-white font-semibold h-[50px] w-[150px]  rounded shadow hover:bg-blue-600 focus:outline-none">
                Go to the guide
              </button>
            </div>

            <div className="max-w-5xl mx-auto pl-50">
              <h2 className="font-bold text-lg mt-5">
                Be a Trello expert in 9 easy steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {steps.map(({ id, title, chapter, img }) => (
                  <div key={id} className="flex items-center p-4">
                    <div>
                      <img src={img} alt={title} className="w-10" />
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold pl-5">
                        {chapter}
                      </div>
                      <div className="font-bold text-[23px] mt-2 pl-5">
                        {title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className=" w-[550px] mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="rounded-md p-6 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white">
                  <h3 className="font-semibold text-lg mb-2">
                    How to embrace remote work
                  </h3>
                  <p className="mb-4  text-white text-[18px]">
                    The complete guide to setting up your team for remote work
                    success
                  </p>
                  <button className="bg-white text-black font-semibold py-2 px-4 rounded-md hover:bg-purple-100">
                    Read the guide
                  </button>
                </div>

                {/* Card 2 */}
                <div className="rounded-md p-6 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white">
                  <h3 className="font-semibold text-lg mb-2">
                    Try Premium free for 14 days
                  </h3>
                  <p className="mb-4 text-white text-[18px]">
                    See your work in a whole new way with Trello views.
                  </p>
                  <button className="bg-white text-black font-semibold py-2 px-4 rounded-md hover:bg-indigo-100">
                    Try it today
                  </button>
                </div>
              </div>
            </div>
            <h1 className="flex justify-center mt-10 text-[18px]">
              Join over 2,000,000 teams worldwide who are using Trello to get
              more done.
            </h1>
            <div className="flex gap-5 justify-center mt-8">
              <img src={Coin1} alt="" />
              <img src={John1} alt="" />
              <img src={Grand1} alt="" />
            </div>
            <div className="flex justify-center gap-5">
              <img src={Visa1} alt="" />
              <img className="w-40" src={Zoom1} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-[20px] font-bold mt-10">
                Start with a template
              </h1>
              <p className="text-[15px] font-semibold mt-3">
                Give your team a blueprint for success with Trello templates:
                copy, <br /> customize, and you’ll be collaborating in no time!
              </p>
            </div>

            <div className="max-w-5xl mx-auto px-4 mt-10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                {categories.map(({ id, title, img }) => (
                  <div
                    key={id}
                    className={`rounded-md h-40 flex flex-col items-center justify-center cursor-pointer hover:brightness-90 transition`}
                  >
                    <img
                      src={img}
                      alt={title}
                      className="h-[200px] w-[150px] mb-4 rounded transform transition-transform duration-300 ease-in-out hover:scale-y-110"
                    />
                    <div className="font-bold text-center">{title}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <button className="border border-blue-700  px-6 py-2 rounded hover:bg-blue-400 hover:text-white transition">
                  Go to template gallery
                </button>
              </div>
              <br /> <br /><br /><br /><br />
              <div className="pl-190">
                <button className="border w-40 h-15 pl-3 bg-blue-500 text-white flex items-center gap-3 rounded group">
                 <span className="flex items-center">Next Chapter<FaLongArrowAltRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-3" />
             </span>
           </button>
            </div> <br /><br /><br /><br /><br /><br /><br /><br />

            </div>
          </div>
        </div>
      </div>
      <UniversalFooter/>
    </>
  );
};
export default Trelloguide;
