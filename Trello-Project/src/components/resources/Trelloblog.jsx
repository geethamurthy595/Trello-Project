import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Res from "../../assets/Res.png";
import Blog1 from "../../assets/Blog1.png";
import Blog2 from "../../assets/Blog2.png";
import Attlasian from "../../assets/Atlas1.svg";
import Blog3 from "../../assets/Blog3.jpg";
import Blog4 from "../../assets/Blog4.png";
import Fblog from "../../assets/Fblog.svg";
import { useState } from "react";
let Trelloblog = () => {
  return (
    <>
      <nav className="bg-blue-800 h-10 w-full ">
        <img
          className="h-10 w-30 absolute left-50 cursor-pointer"
          src={Attlasian}
          alt=""
        />
        <ul className="flex items-center justify-between px-100 py-3 text-gray-200 font-semibold text-sm ">
          <li className="cursor-pointer">WORK LIFE</li>
          <li className="cursor-pointer">PRODUCTS & NEWS</li>
          <li className="cursor-pointer">TEAM PLAYBOOK</li>
          <li className="cursor-pointer">COMMUNITY</li>
        </ul>
        <section className="border-b-3 border-gray-300 h-20 w-full absolute  top-10">
          <div className="border-r-3 border-gray-300 w-120 h-19.5 text-center flex items-center justify-center">
            <h1 className="font-bold text-2xl text-[#172B4D] italic cursor-pointer">
              PRODUCTS & NEWS
            </h1>
          </div>
          <div className="border-r-3 border-gray-300 h-19.5 w-130 absolute left-139.5 top-0">
            <ul className="text-blue-700 flex items-start  py-4.5">
              <li className="text-center flex items-center justify-center hover:bg-blue-300 h-10 w-23 rounded-3xl cursor-pointer">
                Products <RiArrowDropDownLine />
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="text-center flex items-center justify-center hover:bg-blue-300 h-10 w-20 rounded-3xl cursor-pointer">
                Topics <RiArrowDropDownLine />
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="text-center flex items-center justify-center hover:bg-blue-300 h-10 w-40 rounded-3xl cursor-pointer">
                Company News
              </li>
            </ul>
          </div>
          <div className="border-r-3 border-gray-300 h-19.5 w-50 absolute left-268.5 top-0 flex items-center justify-center italic cursor-pointer  text-[#172B4D] font-bold hover:text-blue-500 ">
            SUBSCRIBE
          </div>
          <h1 className="absolute left-320 top-8 ">
            <CiSearch className="text-blue-800 size-5 cursor-pointer" />
          </h1>
        </section>
      </nav>
      <br />
      <br />
      <br />
      <section className="h-192  w-full  ">
        {" "}
        <br />
        <div className="w-[200px] group cursor-pointer">
          <h2 className="font-bold text-lg text-[#172B4D] absolute left-35">
            ARTICLES ABOUT
          </h2>
          <br />
          <h3 className="font-semibold text-2xl text-[#172B4D] absolute left-35">
            Trello
          </h3>
          <br />
          <br />
          <br />
          <div>
            <div className="relative h-[500px] w-[1100px] ml-50 overflow-hidden group">
              <div
                className="absolute inset-0 bg-[url('https://atlassianblog.wpengine.com/wp-content/uploads/2025/05/trello-1120x545-2x-1536x747.png')]
                   bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
              ></div>
              <div className=""></div>
              <div className="relative flex items-center justify-center h-full text-white text-xl font-semibold"></div>
            </div>
            <span className="absolute -bottom-10 left-0 w-275 ml-50  h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
          </div>
          <div>
            <div className=" h-30 w-294 absolute left-45 mt- border-red-500 ">
              <br />
              <a
                className="text-blue-700 font-bold text-sm hover:underline cursor-pointer"
                href=""
              >
                COMPANY NEWS
              </a>
              <br />
              <h2 className="font-bold text-xl  text-[#172B4D] cursor-pointer ">
                The Wait is over-the new Trello is here!
              </h2>
              <p className="ml-130 -mt-5.5">
                We’re thrilled to announce that the wait is finally over—the new
                Trello is now <br /> generally available! (the rollout will
                happen...
              </p>
            </div>
          </div>
          <br />
          <br />

          <div className="h-0.5 w-280 bg-gray-300 mt-20 ml-45.5"></div>
        </div>
      </section>
      <section className="w-full h-200">
        <div className="border-b-2 border-gray-400 h-[120px] w-[750px] ml-45  group   space-x-4">
          <div className="relative h-[100px] w-[100px] overflow-hidden">
            <div
              className="absolute inset-0 bg-[url('https://atlassianblog.wpengine.com/wp-content/uploads/2025/05/trello-1120x545-2x-1536x747.png')] 
                 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
            ></div>

            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>

          <div className="flex-1 ">
            <a
              className="text-blue-700 font-bold text-sm  ml-30 absolute top-220 hover:underline cursor-pointer"
              href="#"
            >
              COMPANY NEWS
            </a>
            <h3 className="font-bold text-[#172B4D] -mt-19 ml-30 cursor-pointer">
              Be your most productive <br />
              self with new Trello
            </h3>
            <p className="  border-none h-20 w-200 ml-90 -mt-10   text-sm">
              New Inbox, Planner, and AI features let you capture → <br />{" "}
              organize → tackle your to-dos
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="border-b-2 border-gray-400 h-[120px] w-[750px] ml-45  group   space-x-4">
          <div className="relative h-[100px] w-[100px] overflow-hidden">
            <div
              className="absolute inset-0 bg-[url('https://atlassianblog.wpengine.com/wp-content/uploads/2025/01/image-20250128-205529-400x400.png')] 
                 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
            ></div>

            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>

          <div className="flex-1 ">
            <a
              className="text-blue-700 font-bold text-sm  ml-30 absolute top-262 hover:underline cursor-pointer"
              href="#"
            >
              TRELLO
            </a>
            <h3 className="font-bold text-[#172B4D] -mt-19 ml-30 cursor-pointer">
              Start the New Year strong <br /> with Mirror cards and Jira <br />{" "}
              lists
            </h3>
            <p className="  border-none h-20 w-200 ml-90 -mt-18   text-sm">
              As we get into the flow of a New Year, many of us have <br /> set
              resolutions to stay more organized,...
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="border-b-2 border-gray-400 h-[120px] w-[750px] ml-45  group   space-x-4">
          <div className="relative h-[100px] w-[100px] overflow-hidden">
            <div
              className="absolute inset-0 bg-[url('https://atlassianblog.wpengine.com/wp-content/uploads/2024/04/image-20240416-181124-192x192.png')] 
                 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
            ></div>

            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>

          <div className="flex-1 ">
            <a
              className="text-blue-700 font-bold text-sm  ml-30 absolute top-304 hover:underline cursor-pointer"
              href="#"
            >
              TRELLO
            </a>
            <h3 className="font-bold text-[#172B4D] -mt-19 ml-30 cursor-pointer">
              Brighten your boards with <br /> list colors and collapsible{" "}
              <br /> lists
            </h3>
            <p className="  border-none h-20 w-200 ml-90 -mt-18   text-sm">
              We are thrilled to announce the launch of two exciting <br /> new
              features now available for Standard, Premium, and <br />{" "}
              Enterprise users...
            </p>
          </div>
        </div>
        <div className="border-b-2 border-gray-400 h-[129px] w-[750px] ml-45  group   space-x-4">
          <br />
          <div className="relative h-[100px] w-[100px] overflow-hidden">
            <div
              className="absolute inset-0 bg-[url('https://atlassianblog.wpengine.com/wp-content/uploads/2024/04/csd-10451_1120x545-192x192.jpg')] 
                 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
            ></div>

            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>

          <div className="flex-1 ">
            <a
              className="text-blue-700 font-bold text-sm  ml-30 absolute top-340 hover:underline cursor-pointer"
              href="#"
            >
              TRELLO
            </a>
            <h3 className="font-bold text-[#172B4D] -mt-19 ml-30 cursor-pointer">
              Introducing AI-powered <br /> Trello
            </h3>
            <p className="  border-none h-20 w-200 ml-90 -mt-10   text-sm">
              AI capabilities are now generally available on Premium <br /> and
              Enterprise plans
            </p>
          </div>
        </div>{" "}
        <br />
        <div className=" h-[120px] w-[750px] ml-45  group   space-x-4">
          <div className="relative h-[100px] w-[100px] overflow-hidden">
            <div
              className="absolute inset-0 bg-[url('https://atlassianblog.wpengine.com/wp-content/uploads/2024/03/1120x545@2x-1-192x192.png')] 
                 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
            ></div>

            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>

          <div className="flex-1 ">
            <a
              className="text-blue-700 font-bold text-sm  ml-30 absolute top-373 hover:underline cursor-pointer"
              href="#"
            >
              TRELLO
            </a>
            <h3 className="font-bold text-[#172B4D] -mt-18 ml-30 cursor-pointer">
              Update on Collaborator <br /> Limit for Free Trello <br />{" "}
              Workspaces
            </h3>
            <p className="  border-none h-20 w-200 ml-90 -mt-17   text-sm">
              Free Workspaces in Trello will soon be limited to 10 <br />{" "}
              collaborators. “Collaborators” include Workspace <br /> members,
              guests, and pending invitations. This...
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className=" h-10 w-150 ml-110 flex justify-between font-bold text-gray-500">
          <a className="text-black" href="">
            1
          </a>
          <a href="">2</a>
          <a href="">3</a>
          <a href="">4</a>
          <a href="">5</a>
          <a href="">...</a>
          <a href="">53</a>
          <a href="">54</a>
          <a href="">55</a>
          <a href="">56</a>
          <a href="">57</a>
          <a href="">NEXT</a>
        </div>
      </section>
      <div className="h-0.5 ml-42 mt-20 bg-gray-300 w-280 text-gray-300 "></div>
      <br />
      <div className=" h-13 w-200 ml-43 text-center">
        <img
          className="h-4 absolute top-447 cursor-pointer"
          src={Fblog}
          alt=""
        />
        &nbsp;&nbsp;&nbsp;
        {/* <div className="border-2 h-6 w-60 ml-40"></div> */}
        <a className="border-r-2 border-black -ml-40 hover:underline" href="">
          Atlassian.com&nbsp;&nbsp;&nbsp;
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="border-r-3 border-black hover:underline" href="">
          Terms of Use&nbsp;&nbsp;&nbsp;
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="border-r-2 border-black hover:underline " href="">
          Privacy Policy&nbsp;&nbsp;&nbsp;
        </a>
      </div>
    </>
  );
};
export default Trelloblog;
