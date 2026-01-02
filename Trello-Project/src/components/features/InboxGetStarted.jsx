import { Link } from "react-router-dom";
import picture1 from "../../assets/picture1.png";
import NavBar from "../NavBar";
import UniversalFooter from "../UniversalFooter";

let InboxGetStarted = () => {
  return (
    <>
    <NavBar/>
      <section className="w-full bg-gradient-to-r from-[#0b3a6f] via-[#164d8f] to-[#1e62b5] text-white ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT: Text */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Trello Premium
              </h1>
              <p className="mt-2 text-3xl sm:text-5xl lg:text-5xl font-bold">
                14 day free trial
              </p>

              <p className="mt-5 text-base sm:text-lg text-white-100 max-w-xl font-normal">
                Maximize Trello with no strings attached:
              </p>

              <ul className="mt-4 space-y-2 list-disc pl-5 text-2xl sm:text-base text-white-100 font-semibold">
                <li>Unlimited functionality with advanced features.</li>
                <li>Feel free to cancel at any time.</li>
                <li>No credit card required.</li>
              </ul>

              <Link
              to="/login"
                type="button"
                className="mt-6 inline-flex items-center rounded-md bg-gray-100 px-5 py-4 text-sm font-medium text-slate-900 shadow-sm hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
              >
                Log in to try it free!
              </Link>
            </div>

            {/* RIGHT: Video/Image */}
            <div className="w-130 h-60">
              <img src="https://embed-ssl.wistia.com/deliveries/6148a98a6cab91924b01b6fa00eaf56e01fa744d.webp?image_crop_resized=1920x1080"></img>
              {/* <video height={300} width={550} controls src="https://fast.wistia.com/embed/medias/x5bxp1ql0h.m3u8"></video> */}
            </div>
          </div>
        </div>
      </section>

      <div className="container bg-gradient-to-b from-[#EFF6FF] to-[#FFFF] h-300 items-center ">
        <h1 className="text-4xl  py-[60px] text-center font-semibold">
          Here’s what you get with Trello Premium:
        </h1>
        {/* 1st Row Card part */}

        <div className="first-row  grid grid-cols-3  w-full px-48 gap-15">
          {/* 1st box  */}
          <div className="outer-box  w-[330px] h-[200px]  ">
            <div className="shadow-div shadow-lg  h-full p-[16px]  flex items-center justify-center ">
              <a className="" href="">
                <div className="para pt-[16px] ">
                  <h1 className="font-medium mb-[0.6rem] text-[1.5rem] ">
                    Unlimited boards
                  </h1>
                  <p className="text-[1rem] ">
                    {" "}
                    Create as many boards as your <br /> team needs.
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* 2nd Box  */}

          <div className="outer-box  w-[330px] h-[200px] ">
            <div className="shadow-div shadow-lg  h-full p-[16px] flex items-center justify-center">
              <a className="" href="">
                <div className="para pt-[16px]">
                  <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                    More views
                  </h1>
                  <p className="text-[1rem] ">
                    {" "}
                    See projects in new dimensions <br /> with Timeline, Table,
                    Calendar,
                    <br /> and more!
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* 3rd box  */}
          <div className="outer-box  w-[330px] h-[200px] ">
            <div className="shadow-div shadow-lg  h-full p-[16px] flex items-center justify-center">
              <a className="" href="">
                <div className="para pt-[16px]">
                  <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                    Advanced checklists
                  </h1>
                  <p className="text-[1rem] ">
                    {" "}
                    Break down big projects with a <br /> simple checklist of
                    tasks, owners <br /> and due dates.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="outer-box  w-[330px] h-[200px] ">
            <div className="shadow-div shadow-lg  h-full p-[16px] flex items-center justify-center">
              <a className="" href="">
                <div className="para pt-[16px]">
                  <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                    Custom Fields
                  </h1>
                  <p className="text-[1rem] ">
                    {" "}
                    Add more context to your work <br /> by keeping essential
                    information <br /> front and center on your Trello <br />{" "}
                    cards.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="outer-box  w-[330px] h-[200px] ">
            <div className="shadow-div shadow-lg  h-full p-[16px] flex items-center justify-center">
              <a className="" href="">
                <div className="para pt-[16px]">
                  <h1 className="font-medium mb-[0.6rem] text-[1.5rem]">
                    Unlimited automation
                  </h1>
                  <p className="text-[1rem] ">
                    {" "}
                    Enable limitless Butler <br /> functionality that assigns
                    robots <br />
                    your mundane tasks.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="outer-box  w-[330px] h-[200px] ">
            <div className="shadow-div shadow-lg  h-full p-[16px] flex items-center justify-center">
              <a className="" href="">
                <div className="para pt-[16px] ">
                  <h1 className="font-medium mb-[0.6rem] text-[1.5rem] ">
                    Stronger permissions
                  </h1>
                  <p className="text-[1rem] ">
                    {" "}
                    Manage content and users with <br /> granular admin settings
                    and <br /> stricter privacy settings.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Side Link */}
        <div className="text-blue-600 text-2xl font-semibold  pt-12 cursor-pointer underline ml-96 justify flex items-center justify-center mr-96 ">
          + Much More!
        </div>

        <div className=" flex  w-full justify-center pt-[150px] gap-[150px] ">
          <img ClassName="" src={picture1} width={500} height={200} alt="" />
          <div>
            <h2 className="text-4xl w-[500px] font-semibold text-gray-800 mb-4">
              Preview all these productive upgrades
            </h2>
            <p className="text-black-600 mb-6 text-[20px]">
              Take a 20-minute video tour of Trello Premium.
            </p>
            <Link to="/webinars/business/trello-standard-premium-demo-on-demand" className="border border-blue-300 text-black-200  px-6 py-4 rounded-lg hover:bg-[#E6FCFF] cursor-pointer transition">
              Watch webinar
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        {/* Right section - Text and Button */}
        
      </div>
      <UniversalFooter/>
    </>
  );
};

export default InboxGetStarted;
