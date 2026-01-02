import Inte from "../../assets/Inte.svg";
import coin from "../../assets/C.webp";
import john from "../../assets/J.svg";
import Grand from "../../assets/Gr.svg";
import Google from "../../assets/G.svg";
import Visa from "../../assets/V.svg";
import Zoom from "../../assets/Z.webp";
import Mar from "../../assets/Mar.webp";
import Work from "../../assets/Work.webp";
import Line from "../../assets/Line.png";
import Mind from "../../assets/Mind.webp";
import Auto from "../../assets/Auto.webp";
import Check from "../../assets/Check.mp4";
import React, { useRef, useState } from "react";
import UniversalFooter from "../UniversalFooter";
import Poster from "../../assets/Poster.webp";
import { FaPlay } from "react-icons/fa";
import NavBar from "../NavBar";
let Checkout = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const v = videoRef.current;
    console.log(v);
    if (!v) return;
    if (v.paused || v.ended) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  let [bgimg, setBgimg] = useState("img1");
  let [boxshadow, setBoxshadow] = useState("boxshadow");
  let [b1, setB1] = useState(true);
  let [b2, setB2] = useState(false);
  let [b3, setB3] = useState(false);

  let handleImage1 = () => {
    setBgimg("img1");
    setB1(true);
    setB2(false);
    setB3(false);
  };
  let handleImage2 = () => {
    setBgimg("img2");
    setB2(true);
    setB1(false);
    setB3(false);
  };
  let handleImage3 = () => {
    setBgimg("img3");
    setB3(true);
    setB1(false);
    setB2(false);
  };
  return (
    <>
    <NavBar/>
      <section className=" h-300 w-full bg-blue-600 flex justify-center items-center flex-col">
        <h1 className="font-bold text-4xl text-amber-50 absolute top-25">
          Your productivity powerhouse
        </h1>
        <p className="text-lg text-amber-50 text-center absolute top-45">
          Welcome to Trello, the ultimate tool for getting things done. Whether
          you're <br /> managing daily to-dos, setting personal goals, or
          organizing your life, Trello <br /> helps you focus on what matters
          most and always stay on top of your game.
        </p>
        <br />
        <div className="relative ">
          <video
            className=" h-110 w-220  "
            onClick={() => {
              togglePlay;
            }}
            poster={Poster}
            src={Check}
            controls
            muted
            loop
            ref={videoRef}
          ></video>
          <br />
          {!playing && (
            <button
              onClick={togglePlay}
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-opacity"
            >
              <span className="flex items-center justify-center w-35 h-25 bg-blue-600 hover:bg-blue-400 shadow-lg transform transition-transform hover:scale-105">
                <svg
                  className="w-15 h-15 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </span>
            </button>
          )}
        </div> <br />
        <button className="h-12 w-40 rounded bg-amber-50 ">
          {" "}
          Sign up-its's Free!
        </button>{" "}
        <br />
        <p className="text-amber-50 text-xl">
          Join a community of millions of users globally who are using Trello to
          get more done.
        </p>
        <img className="w-50 h-8 absolute left-92 top-267" src={coin} alt="" />
        <img className="absolute left-152 top-257" src={john} alt="" />
        <img className="absolute left-198 top-267" src={Grand} alt="" />
        <img className="absolute left-262 top-267" src={Google} alt="" />
        <img className="absolute left-168 top-297" src={Visa} alt="" />
        <img
          className="h-8.5 w-28 absolute left-210 top-297"
          src={Zoom}
          alt=""
        />
      </section><br /><br />
      <div className=" mx-50 ">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-gray-900 mt-2  text-center">
          Your to-dos, organized
        </h1>

        {/* Paragraph */}
        <center>
          <p className="text-gray-700 w-170 mt-4 leading-relaxed text-xl text-center ">
            Stay organized and efficient with Inbox, Boards, and Planner. Every
            to-do, <br /> idea, or responsibility—no matter how small—finds its
            place, keeping you at <br /> the top of your game.
          </p>
        </center>
      </div>
      <div className="flex items-start justify-center px-50 py-10">
        <div className="flex  gap-1 absolute  right-50 top-360 ">
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
            className={`flex  relative mb-8 pr-4 rounded-md ${
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
              <h2 className="text-xl font-semibold pl-3">Inbox</h2>
              <p className={`text-gray-600 mt-2 `}>
                When it’s on your mind, it goes in your Inbox. Capture your
                to-dos from anywhere, anytime.
              </p>
            </div>
          </div>

          {/* Boards */}
          <div
            className={`flex  relative mb-8 pr-4 rounded-md ${
              b2 ? boxshadow : ""
            } transition-all `}
            onClick={handleImage2}
          >
            <div
              className={`w-3    top-0 rounded-l bg-sky-500 mr-4 ${
                b2 ? "block" : "hidden"
              } transition-all`}
            ></div>
            <div className="mx-2 my-4">
              <h2 className="text-xl font-semibold pl-3">Boards</h2>
              <p className={`text-gray-600 mt-2 `}>
                Your to-do list may be long, but it can be manageable! Keep tabs
                on everything from “to-dos to tackle” to “mission accomplished!”
              </p>
            </div>
          </div>

          {/* Planner */}
          <div
            className={`flex relative mb-8 pr-4 rounded-md ${
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
              <h2 className="text-xl font-semibold pl-3">Planner</h2>
              <p className={`text-gray-600 mt-2 `}>
                Drag, drop, get it done. Snap your top tasks into your calendar
                and make time for what truly matters.
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div>
          <div className="mx-px float-right"></div>
        </div>

        <div className={`w-[800px] h-[500px] shadow bg-cover ${bgimg}  `}>
          {/* <img src={slide1} alt="" /> */}
          {/* <img src={slide2} alt="" /> */}
          {/* <img src={slide3} alt="" />/ */}
        </div>
      </div>

      <section className=" h-230 w-full ">
        <h1 className="text-4xl font-bold text-gray-900 mt-2  text-center">
          Simplify your to-do list
        </h1>
        <br />
        <p className="text-center text-lg text-gray-1000">
          Trello cards keep all of your important information organized and
          accessible <br /> in one place. Add due dates, attach files, and mark
          to-do’s as “Done” when <br /> completed. Plus, AI helps you refine
          your text for a polished finish!
        </p>
        <br />
        <br />
        <section className=" h-180 w-120 absolute left-50">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Due dates</h1>
            <p className="font-semibold text-gray-700 text-xl">
              Due dates go hand-in-hand with staying <br /> organized. In
              Trello, they’re easy to set, hard to <br /> miss (with
              reminders!), and oh-so-satisfying to <br /> mark as “done.”
            </p>
          </div>
          <br />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Attachments</h1>
            <p className="font-semibold text-gray-700 text-xl">
              No more digging through endless email chains <br />
              to find attachments. Just drag and drop them <br />
              onto a card so the right files stay with the <br /> right tasks.
            </p>
          </div>
          <br />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Checklists</h1>
            <p className="font-semibold text-gray-700 text-xl">
              Your best tool to overpower overwhelming <br /> asks. Break big
              tasks into small ones, check <br /> things off the list, and watch
              that status bar <br /> go to 100% complete.
            </p>
          </div>{" "}
          <br />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Powered by AI</h1>
            <p className="font-semibold text-gray-700 text-xl">
              Harness the power of AI. Brainstorm new <br /> ideas, organize
              action items, and condense <br />
              lengthy texts instantly with Atlassian <br /> Intelligence.
            </p>
          </div>
        </section>
        <img className="h-150 w-150 absolute left-190 " src={Mar} alt="" />
      </section>

      <section className=" h-140 w-full">
        <img className="absolute left-50" src={Inte} alt="" />
        <section className=" w-150 h-130   absolute left-200">
          <h3>INTEGRATIONS</h3>
          <br />
          <h1 className="text-3xl font-bold text-gray-700">
            Simplify your workflow and <br /> stay on top of your to-dos <br />{" "}
            effortlessly!
          </h1>
          <br />
          <p className="text-lg font-medium text-gray-600">
            Integrate seamlessly with the apps and <br /> services your team
            relies on like Slack,
            <br />
            Microsoft Teams, Outlook, Gmail, Confluence,
            <br /> and hundreds more. <br />
            <br />
            And if you use Jira, you can seamlessly sync <br /> and manage your
            tasks right within Trello <br /> using Jira Lists.
          </p>
          <br />
          <a className="underline text-blue-700 text-xl" href="">
            Learn More
          </a>
        </section>
      </section>
      <section className="h-272  w-full">
        <h1 className="text-3xl font-bold text-gray-700 text-center">
          Unlock your potential with Trello
        </h1>
        <br />
        <h3 className="text-xl text-gray-600 text-center">
          Experience a new level of efficiency and productivity with Trello.
        </h3>
        <br />
        <br />
        <br />

        <img className="h-60 w-80 absolute left-89 " src={Work} alt="" />
        <div className="h-60  w-150 absolute left-190">
          <h1 className="text-3xl font-bold text-gray-700">
            Your work, your way
          </h1>
          <br />
          <img src={Line} alt="" />
          <br />
          <p className="text-gray-600 font-semibold">
            Need to structure information on Trello cards specific to <br /> the
            task at hand? Custom Fields lets you do all that and <br /> more—
            providing process and formality to your workflow <br /> to meet your
            unique needs.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="h-60 w-120 absolute left-90 ">
          <h1 className="text-3xl font-bold text-gray-700">
            Automate your workflow
          </h1>
          <br />
          <img src={Line} alt="" />
          <br />
          <p className="text-gray-600 font-semibold">
            Create a foolproof process for moving work forward with <br />{" "}
            Trello’s built-in automation system. Run commands and <br /> set
            automated rules for almost any action in Trello so that <br /> you
            can focus on what matters most.
          </p>{" "}
          <br />
          <a className="underline text-blue-700 text-medium" href="">
            Learn More
          </a>
        </div>
        <img className="h-60 w-80 absolute left-230" src={Auto} alt="" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <img className="h-60 w-80 absolute left-89 " src={Mind} alt="" />
        <div className="h-60  w-150 absolute left-190">
          <h1 className="text-3xl font-bold text-gray-700">
            Get peace of mind
          </h1>
          <br />
          <img src={Line} alt="" />
          <br />
          <p className="text-gray-600 font-semibold">
            Easily manage users in real-time and control content- <br />
            management permissions with just a few clicks. With <br /> 99.99%
            uptime YoY and industry-leading compliance <br /> certifications,
            you can rest assured we’ll never leave you <br /> hanging.
          </p>
        </div>
      </section>
      <section className="h-90 w-full flex items-center justify-center bg-[#0065FF]">
        <div className="text-center text-white px-6   w-200">
          <h1 className="text-3xl font-semibold mb-3">
            Try Premium free for 14 days
          </h1>

          <p className="text-white/90 mb-6 text-lg leading-relaxed">
            Supercharge your productivity with Atlassian Intelligence (AI) and
            unlimited automation
          </p>

          <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-2/3 px-4 py-2 rounded-md  bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="bg-white text-[#0079BF] font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Sign up
            </button>
          </form>

          <p className="mt-4 text-medium text-white/80">
            By entering my email, I acknowledge the{" "}
            <a className="underline" href="">
              Atlassian Privacy Policy.
            </a>
          </p>
        </div>
      </section>
      <UniversalFooter />
    </>
  );
};
export default Checkout;
