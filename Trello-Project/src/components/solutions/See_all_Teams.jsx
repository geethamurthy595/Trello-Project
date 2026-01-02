import React from "react";
import Stars from "../../assets/stars.svg";
import horse from "../../assets/johnDeere.svg";
import UniversalFooter from "../UniversalFooter";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";

const See_all_Teams = () => {
  return (
    <>
    <NavBar/>
      <div className="">
        <section className="w-full border-blue-500 bg-[#091e42]">
          <div className="outer-container  w-[1140px] h-[512px] ml-[165px] mr-[165px] pl-[1rem] pr-[1rem]">
            <div className="inner-container flex flex-col w-full h-full">
              <div className="image-div  w-[189.99px] h-[222px] ml-[474.992px] pt-[68px] pb-[1rem] pl-[1rem] pr-[1rem]">
                <img
                  src="https://images.ctfassets.net/rz1oowkt5gyp/5AE4nXLOennRxmmUMcgMLM/747e96bdd16cf4113e4ef867bd85fd29/solutions.svg"
                  alt=""
                />
              </div>
              <div className="content-div  w-[960px] h-[290px] ml-[94.98px] pt-[1rem] pb-[80px] pl-[1rem] pr-[1rem] text-center text-white">
                <h1 className="text-[3rem] leading-[1.25] mb-[0.5rem]">
                  Trello Solutions For All Teams{" "}
                </h1>
                <p className="text-[1.5rem] leading-[1.75]">
                  It’s easy to get your entire team up and running with Trello.
                  Click on a team type below to uncover all of the boards,
                  techniques, and integrations you need to <br />
                  succeed.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* New to Trello bar  */}
        <section className="w-full h-[62px] bg-[#e6fcff] flex items-center justify-center">
          <p className="text-[1.25rem]">
            New to Trello? Check out {" "}
            <a href="#" className="underline text-blue-700">
               our guide
            </a>{" "}
            to get started with your digital workspace.
          </p>
        </section>
        {/* Cards section */}
        <section className="w-full h-[1336px] mt-[80px]">
          <div className="outer-container  w-[1140px] h-[1336px]  grid grid-cols-3 ml-[165px] mr-[165px] pl-[1rem] pr-[1rem]">
            {/* <div className="inner-container h-full border-2 border-fuchsia-600 w-full"> */}
            {/* 1st Row  */}
            {/* <div className="row1 h-[292px] w-full   flex justify-center items-center"> */}
            {/* 1st card  */}
            <div className="card1 shadow-lg h-[292px] w-[347.99px] m-[1rem]">
              <Link to="/teams/design">
                <div className="image-section  w-full h-[99.2px] bg-[linear-gradient(90deg,#403294,#4c9aff)]">
                  <img src={Stars} alt="" />
                </div>
                {/* content part  */}
                <div className="content  pb-[24px] pt-[24px] pl-[1rem] pr-[1rem] h-[169px]">
                  <h1 className="text-[1.5rem] mb-[0.5rem] underline font-semibold">
                    Design
                  </h1>
                  <p className="mt-[10px]">
                    From creative requests to cross-team collaboration, learn
                    how Trello helps <br /> design  teams deliver with style.
                  </p>
                </div>
              </Link>
            </div>
            {/* 2nd card  */}
            <div className="card1 shadow-lg h-[292px] w-[347.99px] m-[1rem]">
              <Link to="/teams/engineering">
                <div className="image-section   h-[99.2px]  bg-gradient-to-l from-[rgb(0,141,166)] to-[rgb(23,43,77)] w-full">
                  <img src={Stars} alt="" />
                </div>
                {/* content part  */}
                <div className="content  pb-[24px] pt-[24px] pl-[1rem] pr-[1rem] h-[169px]">
                  <h1 className="text-[1.5rem] mb-[0.5rem] underline font-semibold">
                    Engineering
                  </h1>
                  <p className="mt-[10px]">
                    Ship more code and enable your team to <br /> be more agile with
                    Trello for developers.
                  </p>
                </div>
              </Link>
            </div>
            {/* 3rd card  */}
            <div className="card1 shadow-lg h-[292px] w-[347.99px] m-[1rem]">
              <Link to="/teams/humanresources">
                <div className="image-section  w-full h-[99.2px] bg-gradient-to-r from-[rgb(94,108,132)] to-[rgb(193,199,208)]">
                  <img src={Stars} alt="" />
                </div>
                {/* content part  */}
                <div className="content  pb-[24px] pt-[24px] pl-[1rem] pr-[1rem] h-[169px]">
                  <h1 className="text-[1.5rem] mb-[0.5rem] underline font-semibold">
                    Human Resources
                  </h1>
                  <p className="mt-[10px]">
                    Hire,onboard, and build a lasting <br />company culture with
                    Trello for your HR <br /> team.
                  </p>
                </div>
              </Link>
            </div>
            {/* </div> */}
            {/* 2nd row  */}
            {/* <div className="row1 h-[292px] w-full mt-[2rem]  flex justify-center items-center"> */}
            {/* 1st card  */}
            <div className="card1 shadow-lg h-[292px] w-[347.99px] m-[1rem]">
              <Link to="/teams/marketing">
                <div className="image-section  w-full h-[99.2px] bg-[linear-gradient(270deg,rgb(0,184,217),rgb(0,101,255))]">
                  <img src={Stars} alt="" />
                </div>
                {/* content part  */}
                <div className="content  pb-[24px] pt-[24px] pl-[1rem] pr-[1rem] h-[169px]">
                  <h1 className="text-[1.5rem] mb-[0.5rem] underline font-semibold">
                    Marketing
                  </h1>
                  <p className="mt-[10px]">
                    Whether launching a new product,<br /> campaign, or creating
                    content,discover<br /> how Trello helps marketing teams <br /> succeed.
                  </p>
                </div>
              </Link>
            </div>
            {/* 2nd card  */}
            <div className="card1 shadow-lg h-[292px] w-[347.99px] m-[1rem]">
              <Link to="/">
                <div className="image-section  w-full h-[99.2px] bg-gradient-to-r from-[rgb(101,84,192)] to-[rgb(249,156,219)]">
                  <img src={Stars} alt="" />
                </div>
                {/* content part  */}
                <div className="content  pb-[24px] pt-[24px] pl-[1rem] pr-[1rem] h-[169px]">
                  <h1 className="text-[1.5rem] mb-[0.5rem] underline font-semibold">
                    Personal Productivity
                  </h1>
                  <p className="mt-[10px]">
                    Discover how to use Trello to take your personal
                    productivity to next level.
                  </p>
                </div>
              </Link>
            </div>
            {/* 3rd card  */}
            <div className="card1 shadow-lg h-[292px] w-[347.99px] m-[1rem]">
              <Link to="/teams/product">
                <div className="image-section  w-full h-[99.2px]  bg-gradient-to-r from-[#403294] to-[#172b4d]">
                  <img src={Stars} alt="" />
                </div>
                {/* content part  */}
                <div className="content  pb-[24px] pt-[24px] pl-[1rem] pr-[1rem] h-[169px]">
                  <h1 className="text-[1.5rem] mb-[0.5rem] underline font-semibold">
                    Product Management
                  </h1>
                  <p className="mt-[10px]">
                    Become a productivity powerhouse by <br /> managing complex
                    projects and <br /> processes using Trello.
                  </p>
                </div>
              </Link>
            </div>
            {/* </div> */}
            {/* 3rd row */}
            {/* <div className="row1 h-[292px] w-full mt-[2rem]  flex justify-center items-center"> */}
            {/* 1st card  */}
            <div className="card1 shadow-lg h-[292px] w-[347.99px] m-[1rem]">
              <Link to="/teams/remote-team-management">
                <div className="image-section  w-full h-[99.2px]  bg-[linear-gradient(90deg,rgb(237,80,180),rgb(255,227,128))]">
                  <img src={Stars} alt="" />
                </div>
                {/* content part  */}
                <div className="content  pb-[24px] pt-[24px] pl-[1rem] pr-[1rem] h-[169px]">
                  <h1 className="text-[1.5rem] mb-[0.5rem] underline font-semibold">
                    Remote Teams
                  </h1>
                  <p className="mt-[10px]">
                    Learn the techniques and tips on how to keep your remote
                    team connected and motivated, no matter where they're <br />
                    located around the world.
                  </p>
                </div>
              </Link>
            </div>
            {/* 2nd card  */}
            <div className="card1 shadow-lg h-[292px] w-[347.99px] m-[1rem]">
              <Link to="/teams/sales">
                <div className="image-section  w-full h-[99.2px]  bg-[linear-gradient(240deg,rgb(0,163,191),rgb(7,71,166))]">
                  <img src={Stars} alt="" />
                </div>
                {/* content part  */}
                <div className="content  pb-[24px] pt-[24px] pl-[1rem] pr-[1rem] h-[169px]">
                  <h1 className="text-[1.5rem] mb-[0.5rem] underline font-semibold">
                    Sales
                  </h1>
                  <p className="mt-[10px]">
                    From nurturing leads to closing deals,explore how Trello is
                    a win for sales Teams.
                  </p>
                </div>
              </Link>
            </div>
            {/* 3rd card  */}
            <div className="card1 shadow-lg h-[292px] w-[347.99px] m-[1rem]">
              <Link to="/teams/startups">
                <div className="image-section  w-full h-[99.2px]  bg-[linear-gradient(240deg,#b2d4ff,#deebff)]">
                  <img src={Stars} alt="" />
                </div>
                {/* content part  */}
                <div className="content  pb-[24px] pt-[24px] pl-[1rem] pr-[1rem] h-[169px]">
                  <h1 className="text-[1.5rem] mb-[0.5rem] underline font-semibold">
                    Startups
                  </h1>
                  <p className="mt-[10px]">
                    From hiring your first employee to hitting your revenue
                    goals,discuss how to <br /> thrive as a startup with Trello.
                  </p>
                </div>
              </Link>
            </div>
            {/* </div> */}

            {/* 4th row  */}
            {/* <div className="row1 h-[292px] w-full mt-[2rem]  flex justify-center items-center"> */}
            {/* 1st card  */}
            <div className="card1 shadow-lg h-[292px] w-[347.99px] m-[1rem]">
              <Link to="/teams/support">
                <div className="image-section  w-full h-[99.2px] bg-gradient-to-r from-[#344563] to-[#97a0af]">
                  <img src={Stars} alt="" />
                </div>
                {/* content part  */}
                <div className="content  pb-[24px] pt-[24px] pl-[1rem] pr-[1rem] h-[169px]">
                  <h1 className="text-[1.5rem] mb-[0.5rem] underline font-semibold ">
                    Support
                  </h1>
                  <p className="mt-[10px]">
                    From technical support to sending swag,<br />see how Trello
                    supports Teams <br /> deliver a delightful experience to <br /> customers.
                  </p>
                </div>
              </Link>
            </div>
            {/* 2nd card  */}
            <div className="card1 shadow-lg h-[292px] w-[347.99px] m-[1rem]">
              <Link to="/teams/team-management">
                <div className="image-section  w-full h-[99.2px] bg-gradient-to-r from-[rgb(64,50,148)] to-[rgb(178,40,101)]">
                  <img src={Stars} alt="" />
                </div>
                {/* content part  */}
                <div className="content  pb-[24px] pt-[24px] pl-[1rem] pr-[1rem] h-[169px]">
                  <h1 className="text-[1.5rem] mb-[0.5rem] underline font-semibold">
                    Team Management
                  </h1>
                  <p className="mt-[10px]">
                    From project coordination to your next virtual party,level
                    up team productivity <br /> and management practices with Trello.
                  </p>
                </div>
              </Link>
            </div>
            {/* 3rd card  */}
            {/* <div className="card1 h-[292px] w-[347.99px] m-[1rem]"></div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </section>
        {/* Now Available Section  */}
        <div className="flex flex-col items-center  w-full h-[259px]">
          {/* space div  */}
          <div className="w-[1140px] h-[64px]"></div>
          <div className=" w-[1140px] h-[163px]">
            <div className="inner bg-[linear-gradient(270deg,rgb(64,50,148),rgb(23,43,77))] border rounded-xl w-[1108pxpx] h-[131px]  pl-[48px] pr-[48px] pt-[24px] pb-[24px] text-white ">
              <div className="inner-inner w-[1108pxpx] h-[83px] flex items-center justify-center ">
                <div className="w-[585px] h-[83px] flex flex-col justify-center font-bold ">
                  <h1>NOW AVAILABLE</h1>
                  <p className="text-[1.25rem]">
                    A 14 Day Free Trial of Premium!
                  </p>
                  <p className="font-normal">
                    Get unlimited boards, Trello views, and limitless
                    automation, plus a ton more.
                  </p>
                </div>
                <Link to="/free-trial" className="w-[119px] rounded h-[50px] border ml-[292px] bg-white hover:bg-blue-100 text-black flex items-center justify-center">
                  <p>Try it today</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        
       <section className="flex  w-full justify-center">
         <div className="bg-gradient-to-b from-blue-950 to-blue-900 text-white px-6 py-24 mb-15 text-center rounded-xl w-6xl">
          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
            <span className="text-4xl font-semibold">coinbase</span>
            <img ClassName="" src={horse} width={100} height={170} alt="" />
            <span className="text-300 font-bold absolute left-155 pt-6 text-center">
              JOHN DEERE
            </span>
            <span className="text-lg font-normal">GRAND | HYATT</span>
            <span className="text-4xl font-semibold">Google</span>
          </div>

          <div className="flex justify-center items-center gap-7 mb-12">
            <span className="text-5xl font-bold">VISA</span>
            <span className="text-6xl font-bold">zoom</span>
          </div>

          {/* Text */}
          <h2 className="text-3xl font-semibold mb-4">
            Companies of all shapes and sizes use Trello.
          </h2>
          <p className="text-white text-lg">
            Check out some of our customer stories{" "}
            <a
              href="#"
              className="text-white  text-2xl underline hover:text-blue-300"
            >
              here
            </a>
            .
          </p>
        </div>
       </section>

        <div className=" bg-[#6f42c1] py-5 px-8 flex flex-col md:flex-row justify-between items-center text-white pr-45">
          <div className="pl-40">
            <h2 className="text-lg font-semibold mb-2">
              Well, what are you waiting for?
            </h2>
            <p className="text-xl font-xs">
              Head over to your boards and start getting things done!
            </p>
          </div>

          <Link to="/login" className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-100 transition hover:cursor-pointer">
            Go to your Boards
          </Link>
        </div>
      </div>
      <UniversalFooter/>
      </>
  );
};

export default See_all_Teams;
