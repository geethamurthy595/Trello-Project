import React from "react";
import { Link } from "react-router-dom";
import Attlasian from "../../../assets/Atlas1.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import TeamUp from "../../../assets/TeamUpEurope.png";
import Strategy from "../../../assets/strategy.png"
import Productivity from "../../../assets/productivity.png"
import Teamwork from "../../../assets/teamwork.png"
import Leadership from "../../../assets/leadership.jpg"
import Consulting from "../../../assets/consulting.png"
import Managers from "../../../assets/greatManagers.jpg"
import Prompts from "../../../assets/prompts95.png"
import Changes from "../../../assets/managerChanges.jpg"
import Advice from "../../../assets/advice.jpg"
import SeasonalProductivity from "../../../assets/seasonalProductivity.jpg"
import UniqueCareer from "../../../assets/uniqueCareer.jpg"
import PersonalityTests from "../../../assets/personalityTests.jpeg"
import NightOwl from "../../../assets/nightOwl.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import Ai from "../../../assets/ai.png"
import BrainStorm from "../../../assets/BrainStorm.jpeg"
import Advocate from "../../../assets/advocate.jpg"
import Flex1 from "../../../assets/flex1.png"
import Flex2 from "../../../assets/flex2.jpg"
import Flex3 from "../../../assets/flex3.jpg"
import Flex4 from "../../../assets/flex4.png"
import Flex5 from "../../../assets/flex5.jpg"
import Flex6 from "../../../assets/flex6.jpg"
import Flex7 from "../../../assets/flex7.jpg"
import Flex8 from "../../../assets/flex8.png"
import Flex9 from "../../../assets/flex9.jpg"
const Blog = () => {
  let imgData = [
    {
      name : "strategy",
      img : Strategy,
      desc : "Less noise, more signal: Atlassian’s responsible AI journey continues"
    },
    {
      name : "productivy",
      img : Productivity,
      desc : "Everything you learned in school and forgot – all in one printable"
    },
    {
      name : "teamwork",
      img : Teamwork,
      desc : "What’s your AI collaboration style? Take the quiz to find out!"
    },
    {
      name : "leadership",
      img : Leadership,
      desc : "Good people management begins with self-understanding"
    }
  ]

  let data = [
    {
      img : Flex1,
      title : "teamwork",
      desc : "AI needs human partners to elevate its work – and keep it in check",
    },
    {
      img : Flex2,
      title : "productivity",
      desc : "How to use time-blocking to get more work done"
    },
    {
      img : Flex3,
      title : "productivity",
      desc : "Don’t underestimate the outsized impact of short-term goals"
    },
    {
      img : Flex4,
      title : "productivity",
      desc : "9 neuroplasticity exercises to boost productivity"
    },
    {
      img : Flex5,
      title : "inside atlassian",
      desc : "95 motivational teamwork quotes you’ll actually like"
    },
    {
      img : Flex6,
      title : "communication",
      desc : "How to avoid “emotional overhead” at work (hint: emojis are 👍 )"
    },
    {
      img : Flex7,
      title : "productivity",
      desc : "The science of seasonal productivity"
    },
    {
      img : Flex8,
      title : "team work",
      desc : "People power the path to AI innovation"
    },
    {
      img : Flex9,
      title : "productivity",
      desc : "Science-backed productivity playlists to help you dive into deep work"
    },
  ] 
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
            <h1 className="text-4xl text-black font-extrabold italic cursor-pointer pl-25">
              WORK LIFE
            </h1>
          </div>
          <div className="border-r-3 border-gray-300 h-19.5 w-120 absolute left-139.5 top-0">
            <ul className="text-blue-700 flex items-start ml-[-50px]  py-4.5">
              <li className="text-center flex items-center justify-center hover:bg-blue-300 h-10 w-40 rounded-3xl cursor-pointer">
                Topics <RiArrowDropDownLine />
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="text-center flex items-center justify-center hover:bg-blue-300 h-10 w-40 rounded-3xl cursor-pointer">
                Collections <RiArrowDropDownLine />
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="text-center flex items-center justify-center hover:bg-blue-300 h-10 w-40 rounded-3xl cursor-pointer">
                Resources
              </li>
              <li className="text-center flex items-center justify-center hover:bg-blue-300 h-10 w-40 rounded-3xl cursor-pointer">
                About
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

      <section className="w-[1150px] m-auto pt-30">
        <div className="flex gap-5 border-b-3 border-gray-300 pb-7">
          <div className="group relative flex flex-col items-center justify-center text-center p-6 bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-1" >
            <img src={TeamUp} alt="" className="h-[380px] w-[698px] cursor-pointer transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute bottom-[224px] left-0 h-[4px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
            <h1 className="text-4xl text-black/80 font-bold tracking-wide pt-10">Team ’25 Europe: AI that’s changing the <br /> game for teams</h1>
            <p className="text-black/80 pt-3.5">
              Welcome to Barcelona! We’re on the ground at a sold-out Team ‘25
              Europe event, and you <br /> can really feel the...
            </p>
            <p className="uppercase text-xs p-3 tracking-widest">
              By<a href="" className="text-blue-500 pr-3 pl-1 font-bold">Mike Cannon-Brookes</a>
              In<a href="" className="text-blue-500 font-bold">Company News</a>
            </p>
          </div>

          <div className="border-r-3 border-gray-300"></div>

          <div className="flex flex-col gap-10">
            {imgData.map(({name,img,desc})=>{
              return(
                <div className="flex flex-col items-center w-[350px] group">
                  <p className="text-blue-700/90 tracking-widest uppercase text-xs font-bold">{name}</p>
                  <div className="flex items-center mt-1 gap-4">
                    <img src={img} alt=""  className="h-[64px] w-[64px] cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110" />
                    <p className="font-bold text-[20px] text-black/60">{desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-[1150px] m-auto pt-7 pb-10">
        <h1 className="text-2xl font-black italic uppercase tracking-tighter">Latest Stories</h1>
        <div className="pt-6 flex flex-wrap gap-5">
    
            <div className="group relative flex flex-col gap-3 w-[370px] pb-10 pt-5 border-b-3 border-gray-200">
              <img src={Consulting} height={288} width={360} className="transition-transform duration-500 group-hover:scale-105 cursor-pointer" alt="" />
              <span className="absolute bottom-[174px] left-[-8px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
              <p className="text-xl font-semibold text-black/90">The consulting industry’s human-powered renaissance</p>
              <p className="text-sm font-semibold text-black/68 track">The sector's AI overhaul will hinge on distinctly human judgment, creativity, and the capacity to lead through transformation.</p>
            </div>

            <div className="group relative flex flex-col gap-3 w-[370px] pb-10 pt-5 border-b-3 border-gray-200">
              <img src={Managers} height={288} width={360} className="transition-transform duration-500 group-hover:scale-105 cursor-pointer" alt="" />
              <span className="absolute bottom-[174px] left-[-8px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
              <p className="text-xl font-semibold text-black/90">Great managers meet uncertainty with curiosity and confidence</p>
              <p className="text-sm font-semibold text-black/68 track">Author Mark C. Crowley explains why comfort with the unknown is foundational for employee well-being.</p>
            </div>

            <div className="group relative flex flex-col gap-3 w-[370px] pb-10 pt-5 border-b-3 border-gray-200">
              <img src={Prompts} height={288} width={360} className="transition-transform duration-500 group-hover:scale-105 cursor-pointer" alt="" />
              <span className="absolute bottom-[174px] left-[-8px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
              <p className="text-xl font-semibold text-black/90">95 AI prompts for better teamwork</p>
              <p className="text-sm font-semibold text-black/68 track">Picture this: It’s race day for a team of relay sprinters. The team has gathered some of the best sprinters...</p>
            </div>

            <div className="group relative flex flex-col gap-3 w-[370px] pb-10 pt-5 border-b-3 border-gray-200">
              <img src={Changes} height={288} width={360} className="transition-transform duration-500 group-hover:scale-105 cursor-pointer" alt="" />
              <span className="absolute bottom-[220px] left-[-8px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
              <p className="text-xl font-semibold text-black/90">How to minimize the impact of manager changes</p>
              <p className="text-sm font-semibold text-black/68 track">Outcomes hinge on how the transition is handled, not how often it happens.</p>
            </div>

            <div className="bg-[#021944] text-white w-[360px] h-[520px] p-5 mt-5">
              <p className="text-xs font-bold tracking-widest mb-2">SUBSCRIBE TO WORK LIFE</p>
              <h1 className="text-5xl font-[900] italic mb-4">WORK LIFE</h1>
              <p className="text-sm tracking-wide leading-relaxed font-[550] mb-6">Get articles like these delivered to your inbox every two weeks.</p>
              <a className="bg-[#ffb400] hover:bg-[#e6a200] transition cursor-pointer  text-[#021944] font-semibold px-6 py-2 rounded-sm">
                Let’s do it!
              </a>
            </div>

            <div className="group relative flex flex-col gap-3 w-[370px] pb-10 pt-5 border-b-3 border-gray-200">
              <img src={Advice} height={288} width={360} className="transition-transform duration-500 group-hover:scale-105 cursor-pointer" alt="" />
              <span className="absolute bottom-[220px] left-[-8px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
              <p className="text-xl font-semibold text-black/90">Advice for first-time managers, from leaders who’ve been there</p>
              <p className="text-sm font-semibold text-black/68 track">If you’re new to leading a team, take these 29 tips from a slew of seasoned managers.</p>
            </div>
        </div>
      </section>

      <section className="w-[1150px] m-auto pt-5 pb-10">
        <h1 className="text-2xl font-black italic uppercase tracking-tighter">Featured Collections</h1>

        <div className="flex gap-3">
          <div className="flex flex-col w-[370px] cursor-pointer group">
              <h1 className="font-[500] text-4xl text-gray-800 pt-10 w-[380px]">Your Personality at Work</h1>
              <p className="pt-4 text-md">Navigating and celebrating the complexities of our individuality</p>
              <p className="uppercase text-blue-600 font-bold text-[10px] tracking-[1.5px] pt-100 group-hover:underline">see all stories in this collection  </p>
          </div>

          <div className="pt-6 flex flex-wrap gap-5 "> 
            <div className="group relative flex flex-col gap-3 w-[370px] cursor-pointer pb-10 pt-5">
              <img src={SeasonalProductivity} height={120} width={360} className="transition-transform duration-500 group-hover:scale-105" alt="" />
              <span className="absolute bottom-[136px] left-[-8px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
              <p className="text-xl font-semibold text-black/90">The consulting industry’s human-powered renaissance</p>
              <div className="border-b-3 border-gray-300 pt-5 w-[100px]"></div>
            </div>

            <div className="group relative flex flex-col gap-3 w-[370px] cursor-pointer pb-10 pt-5">
              <img src={UniqueCareer} height={120} width={360} className="transition-transform duration-500 group-hover:scale-105" alt="" />
              <span className="absolute bottom-[136px] left-[-8px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
              <p className="text-xl font-semibold text-black/90">How to honor what makes you unique with your career</p>
              <div className="border-b-3 border-gray-300 pt-5 w-[100px]"></div>
            </div>

            <div className="group relative flex flex-col gap-3 w-[370px] cursor-pointer pb-10 pt-5">
              <img src={PersonalityTests} height={120} width={360} className="transition-transform duration-500 group-hover:scale-105" alt="" />
              <span className="absolute bottom-[129px] left-[-8px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
              <p className="text-xl font-semibold text-black/90">Our team tried the 3 most popular work personality tests, and there was a clear winner</p>
              {/* <div className="border-b-3 border-gray-300 pt-5 w-[100px]"></div> */}
            </div>

            <div className="group relative flex flex-col gap-3 w-[370px] cursor-pointer pb-10 pt-5">
              <img src={NightOwl} height={120} width={360} className="transition-transform duration-500 group-hover:scale-105" alt="" />
              <span className="absolute bottom-[129px] left-[-8px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
              <p className="text-xl font-semibold text-black/90">Night owl or early bird? Discover your circadian personality</p>
              {/* <div className="border-b-3 border-gray-300 pt-5 w-[100px]"></div> */}
            </div>
          </div>
        </div>
        
      </section>
        
      <section className="w-[1150px] m-auto">
        <div className="flex gap-5 border-b-3 border-gray-300 pb-12">
          <div className="bg-[#212E52]/75 h-[480px] w-[363px]">
            <div className=" text-white p-6 cursor-pointer group">
              <h3 className="font-bold uppercase text-[11px] tracking-widest">collection</h3>
              <h1 className="font-bold text-3xl pt-6">Ways of Working</h1>
              <p className="text-sm font-[500] pt-4 tracking-wide">How you work is just as important as the work you're doing.</p>
              <div className="flex items-center gap-1">
                <h3 className="font-bold text-center uppercase text-[11px] tracking-widest pt-2 group-hover:underline">view collection </h3>
                <FaArrowRightLong className="w-6 mt-2  transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
          
          <div className="bg-[#212E52]/65 h-[480px] w-[363px]">
            <div className=" text-white p-6 cursor-pointer group">
              <h3 className="font-bold uppercase text-[11px] tracking-widest">collection</h3>
              <h1 className="font-bold text-3xl pt-6">Well being | Well-doing</h1>
              <p className="text-sm font-[500] pt-4 tracking-wide">Strategies for individuals and leaders to cultivate a flexible, balanced, and inclusive work life.</p>
              <div className="flex items-center gap-1">
                <h3 className="font-bold text-center uppercase text-[11px] tracking-widest pt-2 group-hover:underline">view collection </h3>
                <FaArrowRightLong className="w-6 mt-2  transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          <div className="bg-[#212E52] h-[480px] w-[363px]">
            <div className=" text-white p-6 cursor-pointer group">
              <h3 className="font-bold uppercase text-[11px] tracking-widest">collection</h3>
              <h1 className="font-bold text-3xl pt-6">The Flywheel Growth Model</h1>
              <p className="text-sm font-[500] pt-4 tracking-wide">There are loads of ways to grow a company - learn about our approach here. </p>
              <div className="flex items-center gap-1">
                <h3 className="font-bold text-center uppercase text-[11px] tracking-widest pt-2 group-hover:underline">view collection </h3>
                <FaArrowRightLong className="w-6 mt-2  transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[1150px] m-auto pt-6 pb-10 ">
        <h1 className="text-2xl font-black italic uppercase tracking-tighter">Read More</h1>
        <div className="flex justify-center gap-5">
          <div className="group relative flex flex-col gap-3 w-[570px] pb-15 pt-5 border-b-3 border-gray-300">
            <img src={Ai} height={286} width={550} className="transition-transform duration-500 group-hover:scale-103 cursor-pointer" alt="" />
            <span className="absolute bottom-[152px] left-[-8px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
            <p className="text-xl font-semibold text-black/90">AI is changing the way leaders lead and companies create</p>
            <p className="text-sm font-semibold text-black/68">Monthly insights into human-AI collaboration – and how to make it work for your <br /> teams.</p>
          </div>
          <div className="group relative flex flex-col gap-3 w-[570px] pb-15 pt-5 border-b-3 border-gray-300">
            <img src={BrainStorm} height={286} width={550} className="transition-transform duration-500 group-hover:scale-103 cursor-pointer" alt="" />
            <span className="absolute bottom-[152px] left-[-8px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
            <p className="text-xl font-semibold text-black/90">Use divergent thinking to generate fresh ideas in your next brainstorm</p>
            <p className="text-sm font-semibold text-black/68">These six exercises will lead your team down the road less traveled.</p>
          </div>
        </div>
      </section>

      <section className="w-[1150px] m-auto pb-20">
        <div className="flex gap-8 border-b-3 border-gray-300 pb-8 group">
          <div className=" relative w-[740px] ">
            <img src={Advocate} alt="" className="h-[430px] w-[740px] transition-transform duration-500 group-hover:scale-103 cursor-pointer" />
            <span className="absolute bottom-[-5px] left-[-8px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
          </div>
          <div>
            <h1 className="text-4xl font-semibold text-black/85 cursor-pointer">How to advocate for yourself at work</h1>
            <p className="text-md font-semibold text-black/68 pt-6">Expert advice on giving voice to the future you want, plus a template to keep track of it all.</p>
            <p className="uppercase font-semibold text-[10px] tracking-[1.2px] mt-[260px]">in <span className="text-blue-700 hover:underline cursor-pointer">productivity</span></p>
          </div>
        </div>
      </section>

      <section className="w-[1150px] m-auto pb-5">
        <div className="flex flex-wrap gap-4">
          {data.map(({img,title,desc})=>{
            return(
              <div className="flex w-[363px] gap-5 group border-b-3 border-gray-300 pb-3">
                <div className="relative w-[96px]" >
                  <img src={img} alt="" className="w-[96px] h-[96px] transition-transform duration-500 group-hover:scale-105 cursor-pointer" />
                  <span className="absolute bottom-[10px] left-[0px] h-[4px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
                </div>
                <div>
                  <h1 className="uppercase text-blue-700 text-[10px] tracking-[1.2px] font-semibold cursor-pointer hover:underline">{title}</h1>
                  <p className="font-semibold pt-3 text-gray-800 text-xl">{desc}</p>
                </div>
              </div>
            )
          })}
        </div>
        
        <button className="text-center border-1 border-blue-700 text-blue-700 px-[30px] py-[7px] mt-10 mb-10 ml-120 cursor-pointer font-semibold hover:bg-blue-200">Load More</button>      
      </section>

      <footer className=" w-full bg-[#091E42]">
          <div className="flex flex-col justify-center items-center h-[450px] text-white">
            <p className="uppercase font-bold text-[10px] tracking-widest">Join over 150,000 working professionals</p>
            <h1 className="uppercase font-black italic text-5xl pt-3">Work Life</h1>
            <div className="flex pt-3 gap-2 justify-center items-center">
              <p>By </p>
              <img src={Attlasian}  alt=""  className="h-[14px] cursor-pointer" /> 
            </div>
            <p className="tracking-wider py-3">Culture, tech, teams, and tips, delivered twice a month</p>
            <a className="bg-[#ffb400]  hover:bg-[#e6a200] transition cursor-pointer  text-[#021944] font-semibold px-6 py-2 rounded-sm">
              Sign me up!
            </a>
          </div>
          <div className="flex gap-4 text-white/70 text-sm ml-40 pb-7">
            <a href="" className="hover:underline">Atlassian.com</a>
            <a href="" className="hover:underline">Terms of Use</a>
            <a href="" className="hover:underline">Privacy Policy</a>
            <p>Copyright © 2025 Atlassian</p>
          </div>
          
      </footer>
    </>
  );
};

export default Blog;
